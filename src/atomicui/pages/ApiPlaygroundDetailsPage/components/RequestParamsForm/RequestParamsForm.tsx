import { FC, useEffect, useState } from "react";

import { Flex } from "@aws-amplify/ui-react";
import { RequestParams } from "@demo/types";
import "./styles.scss";

interface RequestParamsFormProps {
	requestParams: RequestParams[];
}

type RequestObj = { [key: string]: string | number | boolean };

const RequestParamsForm: FC<RequestParamsFormProps> = ({ requestParams }) => {
	const [requestObj, setRequestObj] = useState<RequestObj | null>(null);

	useEffect(() => {
		if (requestParams.length > 0 && !requestObj) {
			const obj: RequestObj = {};

			requestParams.forEach(param => {
				if (param.required) {
					obj[param.name] = param.defaultValue;
				}
			});

			setRequestObj(obj);
		}
	}, [requestParams, requestObj]);

	return (
		<>
			{requestParams.map((_, idx) => (
				<Flex key={idx} className="param">
					{idx}
				</Flex>
			))}
		</>
	);
};

export default RequestParamsForm;
