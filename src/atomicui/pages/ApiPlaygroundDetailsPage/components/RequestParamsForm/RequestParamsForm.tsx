import { FC, lazy, useEffect, useMemo, useState } from "react";

import { CheckboxField, Flex } from "@aws-amplify/ui-react";
import { IconInfo } from "@demo/assets/svgs";
import { RequestParam } from "@demo/types";
import { Tooltip } from "react-tooltip";
import "./styles.scss";

const InputField = lazy(() =>
	import("@demo/atomicui/molecules/InputField").then(module => ({ default: module.InputField }))
);

interface RequestParamsFormProps {
	requestParams: RequestParam[];
}

type RequestObj = { [key: string]: string | number | boolean };

const RequestParamsForm: FC<RequestParamsFormProps> = ({ requestParams }) => {
	const [request, setRequest] = useState<{ [key: string]: string | number | boolean }>({});

	const hasNestedParams = useMemo(() => requestParams.some(param => !!param.subParams), [requestParams]);
	const paramsToRender = useMemo(() => requestParams.filter(param => param.shouldRender), [requestParams]);

	const handleInputChange = (paramName: string, value: string | number | boolean) => {
		setRequest(prevData => ({
			...prevData,
			[paramName]: value
		}));
	};

	// generate a useEffect that takes the requestParams prop and create a request object with default values
	useEffect(() => {
		const initialRequest: RequestObj = {};
		requestParams.forEach(param => {
			const { name, defaultValue } = param;
			initialRequest[name] = defaultValue;
		});
		setRequest(initialRequest);
	}, [requestParams]);

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
		const { fieldType, name, defaultValue, isEditable, validValues } = param;

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
						dropdown
					</Flex>
				);
			default:
				return null;
		}
	};

	return <Flex className="request-params-form">{paramsToRender.map(param => renderFormField(param))}</Flex>;
};

export default RequestParamsForm;
