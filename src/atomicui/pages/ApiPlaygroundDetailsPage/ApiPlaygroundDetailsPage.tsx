import { FC } from "react";

import { Flex, Text } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import "./styles.scss";

const ApiPlaygroundDetailsPage: FC = () => {
	const { apiId } = useParams();

	return (
		<Flex className="api-playground-details-container">
			<Text>{`This is the API Playground details page for ${apiId}`}</Text>
		</Flex>
	);
};

export default ApiPlaygroundDetailsPage;
