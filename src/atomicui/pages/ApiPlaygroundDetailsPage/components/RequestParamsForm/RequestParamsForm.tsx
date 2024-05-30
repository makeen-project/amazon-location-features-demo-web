import { FC, Fragment, lazy, useEffect, useMemo, useState } from "react";

import { CheckboxField, Flex } from "@aws-amplify/ui-react";
import { IconInfo } from "@demo/assets/svgs";
import { RequestParam } from "@demo/types";
import { Tooltip } from "react-tooltip";
import "./styles.scss";

const InputField = lazy(() =>
	import("@demo/atomicui/molecules/InputField").then(module => ({ default: module.InputField }))
);
const SimpleDropdownEl = lazy(() =>
	import("../SimpleDropdownEl").then(module => ({ default: module.SimpleDropdownEl }))
);

interface RequestParamsFormProps {
	requestParams: RequestParam[];
}

type RequestObj = { [key: string]: string | number | boolean | {} };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any;

const buildRequestObject = (params: RequestParam[]): { [key: string]: TODO } => {
	const requestObject: { [key: string]: TODO } = {};

	// Function to check if a parameter is visible based on its dependencies
	const isVisible = (param: RequestParam): boolean => {
		if (!param.visibleIf) return true;

		const [depName, depValue1, depValue2] = param.visibleIf;
		return depValue1 && depValue2
			? requestObject[depName] === depValue1 || requestObject[depName] === depValue2
			: requestObject[depName] === depValue1;
	};

	// Function to build a nested object if needed
	const buildNestedObject = (param: RequestParam, allParams: RequestParam[]): { [key: string]: TODO } => {
		const nestedObject: { [key: string]: TODO } = {};
		if (param.subParams) {
			param.subParams.forEach(subParamName => {
				const subParam = allParams.find(p => p.name === subParamName);

				if (subParam && isVisible(subParam)) {
					nestedObject[subParam.name] = subParam.defaultValue;
				}
			});
		}
		return nestedObject;
	};

	params.forEach(param => {
		if (isVisible(param) && param.shouldRender) {
			if (param.type === "object" && param.subParams) {
				requestObject[param.name] = buildNestedObject(param, params);
			} else {
				requestObject[param.name] = param.defaultValue;
			}
		}
	});

	return requestObject;
};

const RequestParamsForm: FC<RequestParamsFormProps> = ({ requestParams }) => {
	const [request, setRequest] = useState<RequestObj>({});
	console.log({ request });

	const requiredParams = useMemo(() => requestParams.filter(param => param.required), [requestParams]);
	const dependentParams = useMemo(() => requestParams.filter(param => !!param.visibleIf), [requestParams]);
	const paramsToRender = useMemo(() => requestParams.filter(param => param.shouldRender), [requestParams]);
	const editableParams = useMemo(() => requestParams.filter(param => param.isEditable), [requestParams]);
	const nestedParams = useMemo(() => requestParams.filter(param => !!param.subParams), [requestParams]);

	// create a request object with default values
	useEffect(() => {
		if (Object.keys(request).length === 0) {
			const requestObject = buildRequestObject(requestParams);
			setRequest(requestObject);
		}
	}, [request, requestParams]);

	// const setNestedValue = (obj: RequestObj, path: string[], value: TODO): RequestObj => {
	// 	const [head, ...tail] = path;

	// 	if (!tail.length) {
	// 		return {
	// 			...obj,
	// 			[head]: value
	// 		};
	// 	}

	// 	return {
	// 		...obj,
	// 		[head]: setNestedValue(obj[head], tail, value)
	// 	};
	// };

	const handleInputChange = (name: string, value: TODO) => {
		const path = name.split(".");
		// setRequest(prevRequest => setNestedValue(prevRequest, path, value));
	};

	const renderLabel = (param: RequestParam) => {
		const { name, required, description } = param;
		return (
			<Flex className="label">
				<label className="text bold small-text" htmlFor={name}>
					{required ? `${name}*` : name}
				</label>
				<IconInfo
					className="info-icon"
					data-tooltip-id={name}
					data-tooltip-place="top"
					data-tooltip-content={description}
				/>
				<Tooltip id={name} />
			</Flex>
		);
	};

	const renderFormField = (param: RequestParam) => {
		const { fieldType, name, defaultValue, isEditable, validValues, type, subParams } = param;
		const inputName = type === "object" && subParams ? `${name}.${subParams.join(".")}` : name;

		switch (fieldType) {
			case "string-input":
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<InputField
							dataTestId={`input-${name}`}
							id={name}
							name={name}
							type={"text"}
							value={request[name] ? `${request[name]}` : `${defaultValue}`}
							onChange={e => handleInputChange(name, e.target.value)}
							disabled={!isEditable}
						/>
					</Flex>
				);
			case "string-input-array":
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						string-input-array
					</Flex>
				);
			case "number-input":
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<InputField
							dataTestId={`input-${name}`}
							id={name}
							name={name}
							type={"number"}
							value={request[name] ? `${request[name]}` : `${defaultValue}`}
							onChange={e => handleInputChange(name, parseFloat(e.target.value))}
							disabled={!isEditable}
						/>
					</Flex>
				);
			case "number-input-array":
				// [-12.12, 12.12, 0.0, 0.0]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						number-input-array
					</Flex>
				);
			case "coordinates":
				// [-12.12, 12.12]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						coordinates
					</Flex>
				);
			case "coordinates-array":
				// [[-12.12, 12.12], [-12.12, 12.12]]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						coordinates-array
					</Flex>
				);
			case "checkbox":
				return (
					<Flex className="form-field">
						<CheckboxField
							data-testid={`checkbox-${name}`}
							id={name}
							// className="sm-checkbox"
							name={name}
							label={name}
							value={name}
							checked={!!request[name]}
							onChange={e => handleInputChange(name, e.target.checked)}
						/>
						{renderLabel(param)}
					</Flex>
				);
			case "dropdown":
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<SimpleDropdownEl
							defaultOption={defaultValue as string}
							options={validValues as string[]}
							onSelect={option => console.log({ option })}
							disabled={!isEditable}
						/>
					</Flex>
				);
			default:
				return null;
		}
	};

	return (
		<Flex className="request-params-form">
			{paramsToRender.map((param, idx) => (
				<Fragment key={idx}>{renderFormField(param)}</Fragment>
			))}
		</Flex>
	);
};

export default RequestParamsForm;
