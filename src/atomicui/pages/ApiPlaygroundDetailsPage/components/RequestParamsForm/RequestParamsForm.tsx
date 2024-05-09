import { FC } from "react";

import { Flex } from "@aws-amplify/ui-react";
import { RequestParams } from "@demo/types";
import "./styles.scss";

interface RequestParamsFormProps {
	requestParams: RequestParams[];
}

const RequestParamsForm: FC<RequestParamsFormProps> = ({ requestParams }) => {
	return (
		<>
			{requestParams.map((_, idx) => (
				<Flex key={idx} className="param-container">
					{idx}
				</Flex>
			))}
		</>
	);
};

export default RequestParamsForm;
