import { FC } from "react";

import { Flex, Heading, Text, View } from "@aws-amplify/ui-react";
import { IconCode } from "@demo/assets/svgs";
import { appConfig } from "@demo/core/constants";
// import { useRecordViewPage } from "@demo/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const {
	ROUTES: { API_PLAYGROUND }
} = appConfig;

const ApiPlaygroundListPage: FC = () => {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();
	// useRecordViewPage("ApiPlaygroundListPage");
	const langDir = i18n.dir();
	const isLtr = langDir === "ltr";

	const handleCardClick = (apiId: string) => {
		// record([{ EventType: EventTypeEnum.API_CLICKED, Attributes: { apiId, apiTitle } }]);
		navigate(`${API_PLAYGROUND}/${apiId}`);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<>
			<View className="api-playground-list-container no-side-gaps inner-container-padding">
				<Flex className="header">
					<View>
						<Heading className="bold x-large-text" level={2} textAlign={isLtr ? "start" : "end"}>
							{t("API Playground")}
						</Heading>
						<Text className="header-text regular-text" textAlign={isLtr ? "start" : "end"}>
							{t("APIs available for you to explore.")}
						</Text>
					</View>
					<View className="header-icon">
						<IconCode />
					</View>
				</Flex>
			</View>
		</>
	);
};

export default ApiPlaygroundListPage;
