import { FC } from "react";

import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import { useApiPlaygroundDetails } from "@demo/hooks";
import { ApiListItem } from "@demo/types";
import "./styles.scss";

const ApiPlaygroundDetailsPage: FC<ApiListItem> = () => {
	const { isFetching, apiDetails } = useApiPlaygroundDetails();
	const { imageSource, title, description, requestParams, codeSnippets } = apiDetails || {};

	return (
		<View
			data-testid="api-playground-details-container"
			className="api-playground-details-container no-side-gaps inner-container-padding"
		>
			{/* <Text>{`This is the API Playground details page for ${apiId}`}</Text> */}
			<Flex className="content-container">
				<Flex className="req-params-container">
					<Text className="title bold medium-text">Customize Request</Text>
					<Flex className="params">
						{Array.from({ length: 1000 }).map((_, idx) => (
							<Flex key={idx} border="1px solid black">
								{idx}
							</Flex>
						))}
					</Flex>
					<Flex className="buttons-container">
						<Button variation="primary">G</Button>
						<Button variation="primary" width={"100%"}>
							Submit
						</Button>
					</Flex>
				</Flex>
				<Flex className="map-req-res-code-container">
					<Text className="title bold medium-large-text">{title}</Text>
					<Text className="description regular small-text">{description}</Text>
					<Flex className="map-container">Map</Flex>
					<Flex className="req-container">Request</Flex>
					<Flex className="req-container">Response</Flex>
					<Flex className="req-container">Code snippets</Flex>
				</Flex>
			</Flex>
		</View>
	);
};

export default ApiPlaygroundDetailsPage;
