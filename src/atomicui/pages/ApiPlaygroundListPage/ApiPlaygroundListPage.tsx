import { FC } from "react";

import { Button, Flex, Text } from "@aws-amplify/ui-react";
import "./styles.scss";
import { appConfig } from "@demo/core/constants";
// import { useRecordViewPage } from "@demo/hooks";
import { useNavigate } from "react-router-dom";

const {
	ROUTES: { API_PLAYGROUND }
} = appConfig;

const ApiPlaygroundListPage: FC = () => {
	const navigate = useNavigate();
	// useRecordViewPage("ApiPlaygroundListPage");

	const handleCardClick = (apiId: string) => {
		// record([{ EventType: EventTypeEnum.API_CLICKED, Attributes: { apiId, apiTitle } }]);
		console.log("hello");
		navigate(`${API_PLAYGROUND}/${apiId}`);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<Flex className="api-playground-list-container">
			<Text>This is the API Playground list page</Text>
			<Button onClick={() => handleCardClick("test-api")}>Open details</Button>
		</Flex>
	);
};

export default ApiPlaygroundListPage;
