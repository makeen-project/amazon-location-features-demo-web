import { ApiRequestObj, ApiRequestObjValues, RequestParam } from "@demo/types";

/* Function to check if a parameter is visible based on its dependencies */
export const isVisible = (requestObject: ApiRequestObj, param: RequestParam): boolean => {
	if (!param.visibleIf) return true;

	const [depName, depValue1, depValue2] = param.visibleIf;

	return depValue1 && depValue2
		? requestObject[depName] === depValue1 || requestObject[depName] === depValue2
		: requestObject[depName] === depValue1;
};

/* Function to build request object */
export const buildRequestObject = (params: RequestParam[]): { [key: string]: ApiRequestObjValues } => {
	const requestObject: { [key: string]: ApiRequestObjValues } = {};

	/* Function to build a nested object if needed */
	const buildNestedObject = (
		param: RequestParam,
		allParams: RequestParam[]
	): { [key: string]: ApiRequestObjValues } => {
		const nestedObject: { [key: string]: ApiRequestObjValues } = {};

		if (param.subParams) {
			param.subParams.forEach(subParamName => {
				const subParam = allParams.find(p => p.name === subParamName);

				if (subParam && isVisible(requestObject, subParam)) {
					nestedObject[subParam.name] = subParam.defaultValue;
				}
			});
		}
		return nestedObject;
	};

	params.forEach(param => {
		if (isVisible(requestObject, param) && param.shouldRender) {
			if (param.type === "object" && param.subParams) {
				requestObject[param.name] = buildNestedObject(param, params);
			} else {
				requestObject[param.name] = param.defaultValue;
			}
		}
	});

	return requestObject;
};
