import { Fragment, forwardRef, lazy, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";

import { CheckboxField, Flex } from "@aws-amplify/ui-react";
import { GetMapTileCommandInput, SearchPlaceIndexForPositionRequest } from "@aws-sdk/client-location";
import { IconInfo } from "@demo/assets/svgs";
import { useApiPlayground } from "@demo/hooks";
import { ApiIdEnum, ApiRequestObj, ApiRequestObjValues, FieldTypeEnum, RequestParam } from "@demo/types";
import { buildRequestObject, isVisible } from "@demo/utils";
import { Tooltip } from "react-tooltip";
import "./styles.scss";

const InputField = lazy(() =>
	import("@demo/atomicui/molecules/InputField").then(module => ({ default: module.InputField }))
);
const SimpleDropdownEl = lazy(() =>
	import("../SimpleDropdownEl").then(module => ({ default: module.SimpleDropdownEl }))
);

export interface RequestParamsFormRef {
	handleSubmit: () => void;
	handleReset: () => void;
}

interface RequestParamsFormProps {
	apiId: string;
	requestParams: RequestParam[];
}

const RequestParamsForm = forwardRef<RequestParamsFormRef, RequestParamsFormProps>(({ apiId, requestParams }, ref) => {
	const [formValues, setFormValues] = useState<ApiRequestObj>({});
	const [apiRequest, setApiRequest] = useState<ApiRequestObj>({});
	const [paramsToRender, setParamsToRender] = useState<RequestParam[]>([]);
	const { resetStore: resetApiPlaygroundStore, getMapTile, searchPlaceIndexForPosition } = useApiPlayground();
	console.log({ formValues, apiRequest, paramsToRender });

	// const requiredParams = useMemo(() => requestParams.filter(param => param.required), [requestParams]);
	// const dependentParams = useMemo(() => requestParams.filter(param => !!param.visibleIf), [requestParams]);
	// const editableParams = useMemo(() => requestParams.filter(param => param.isEditable), [requestParams]);
	// const nestedParams = useMemo(() => requestParams.filter(param => !!param.subParams), [requestParams]);
	// const conditionalParams = useMemo(() => requestParams.filter(param => !!param.visibleIf), [requestParams]);

	const handleReset = () => {
		setFormValues({});
		setApiRequest({});
		resetApiPlaygroundStore();
	};

	const handleSubmit = () => {
		switch (apiId) {
			case ApiIdEnum.GetMapTileCommand:
				getMapTile(apiRequest as unknown as GetMapTileCommandInput);
				break;
			case ApiIdEnum.SearchPlaceIndexForPositionCommand:
				searchPlaceIndexForPosition(apiRequest as unknown as SearchPlaceIndexForPositionRequest);
				break;
			default:
				break;
		}
	};

	useImperativeHandle(ref, () => ({
		handleReset,
		handleSubmit
	}));

	/* Updates paramsToRender state based on API request object */
	const updateParamsToRender = useCallback(
		(requestObj: ApiRequestObj) => {
			const formParams = requestParams.filter(param => param.shouldRender && isVisible(requestObj, param));
			setParamsToRender(formParams);
		},
		[requestParams]
	);

	const requestObj = useMemo(() => buildRequestObject(requestParams), [requestParams]);

	/* Create initial apiRequest and update paramsToRender */
	useEffect(() => {
		if (Object.keys(apiRequest).length === 0) {
			setApiRequest(requestObj);
		} else {
			updateParamsToRender(requestObj);
		}
	}, [apiRequest, requestObj, setApiRequest, updateParamsToRender]);

	/* Update apiRequest when form values changes */
	const handleInputChange = (fieldType: FieldTypeEnum, name: string, value: ApiRequestObjValues) => {
		setFormValues(s => ({ ...s, [name]: value }));
		switch (fieldType) {
			case FieldTypeEnum.STRING_INPUT:
			case FieldTypeEnum.NUMBER_INPUT:
				setApiRequest(s => ({ ...s, [name]: value }));
				break;
			case FieldTypeEnum.STRING_INPUT_ARRAY:
				break;
			case FieldTypeEnum.NUMBER_INPUT_ARRAY:
				break;
			case FieldTypeEnum.COORDINATES:
				const [lat, lng] = (value as string).split(",");

				if (lat && lng) {
					const coords = [parseFloat(lng.trim()), parseFloat(lat.trim())];
					setApiRequest(s => ({ ...s, [name]: coords }));
				}
				break;
			case FieldTypeEnum.COORDINATES_ARRAY:
				break;
			case FieldTypeEnum.CHECKBOX:
				break;
			case FieldTypeEnum.DROPDOWN:
				break;
			case FieldTypeEnum.PARENT:
				break;
			default:
				break;
		}
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
		const {
			fieldType,
			name,
			defaultValue,
			isEditable,
			validValues
			// type,
			// subParams
		} = param;
		// const inputName = type === "object" && subParams ? `${name}.${subParams.join(".")}` : name;

		switch (fieldType) {
			case FieldTypeEnum.STRING_INPUT:
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<InputField
							dataTestId={`input-${name}`}
							id={name}
							name={name}
							type={"text"}
							value={formValues[name] ? `${formValues[name]}` : `${defaultValue}`}
							onChange={e => handleInputChange(fieldType, name, e.target.value)}
							disabled={!isEditable}
						/>
					</Flex>
				);
			case FieldTypeEnum.STRING_INPUT_ARRAY:
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						string-input-array
					</Flex>
				);
			case FieldTypeEnum.NUMBER_INPUT:
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<InputField
							dataTestId={`input-${name}`}
							id={name}
							name={name}
							type={"number"}
							value={formValues[name] ? `${formValues[name]}` : `${defaultValue}`}
							onChange={e => handleInputChange(fieldType, name, parseFloat(e.target.value))}
							disabled={!isEditable}
						/>
					</Flex>
				);
			case FieldTypeEnum.NUMBER_INPUT_ARRAY:
				// [-12.12, 12.12, 0.0, 0.0]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						number-input-array
					</Flex>
				);
			case FieldTypeEnum.COORDINATES:
				// [-12.12, 12.12]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						<InputField
							dataTestId={`input-${name}`}
							id={name}
							name={name}
							type={"text"}
							value={formValues[name] ? (formValues[name] as string) : (defaultValue as string)}
							onChange={e => handleInputChange(fieldType, name, e.target.value)}
							disabled={!isEditable}
						/>
					</Flex>
				);
			case FieldTypeEnum.COORDINATES_ARRAY:
				// [[-12.12, 12.12], [-12.12, 12.12]]
				return (
					<Flex className="form-field col">
						{renderLabel(param)}
						coordinates-array
					</Flex>
				);
			case FieldTypeEnum.CHECKBOX:
				return (
					<Flex className="form-field">
						<CheckboxField
							data-testid={`checkbox-${name}`}
							id={name}
							// className="sm-checkbox"
							name={name}
							label={""}
							value={name}
							checked={formValues[name] ? (formValues[name] as boolean) : (defaultValue as boolean)}
							onChange={e => handleInputChange(fieldType, name, e.target.checked)}
						/>
						{renderLabel(param)}
					</Flex>
				);
			case FieldTypeEnum.DROPDOWN:
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
			case FieldTypeEnum.PARENT:
				return null;
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
});

export default RequestParamsForm;
