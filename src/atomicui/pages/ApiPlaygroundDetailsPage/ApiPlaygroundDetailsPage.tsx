import { FC, lazy, useMemo } from "react";

import { Button, Flex, Placeholder, Text, View } from "@aws-amplify/ui-react";
import { IconReloadLined } from "@demo/assets/svgs";
import { useApiPlaygroundDetails } from "@demo/hooks";

import "./styles.scss";
import { useTranslation } from "react-i18next";

const RequestParamsForm = lazy(() =>
	import("./components/RequestParamsForm").then(module => ({ default: module.RequestParamsForm }))
);
const Map = lazy(() => import("./components/Map").then(module => ({ default: module.Map })));
const CodeSnippet = lazy(() => import("./components/CodeSnippet").then(module => ({ default: module.CodeSnippet })));

const ApiPlaygroundDetailsPage: FC = () => {
	const { t } = useTranslation();
	const { isFetching, apiDetails } = useApiPlaygroundDetails();

	const isDataPresent = useMemo(() => !isFetching && !!apiDetails, [isFetching, apiDetails]);

	const renderParams = useMemo(
		() =>
			isDataPresent ? (
				<RequestParamsForm requestParams={apiDetails!.requestParams} />
			) : (
				<>
					{Array.from({ length: 6 }).map((_, idx) => (
						<Placeholder key={idx} width="100%" minHeight="6rem" marginBottom="1.23rem" />
					))}
				</>
			),
		[isDataPresent, apiDetails]
	);

	const renderButtonsContainer = useMemo(
		() =>
			isDataPresent ? (
				<>
					<Flex className="reset" onClick={() => {}}>
						<IconReloadLined />
					</Flex>
					<Button className="submit" variation="primary" onClick={() => {}}>
						Submit
					</Button>
				</>
			) : (
				<>
					<Placeholder maxWidth="3.08rem" width="100%" minHeight="3.08rem" borderRadius="0.62rem" />
					<Placeholder width="100%" minHeight="3.08rem" borderRadius="0.62rem" />
				</>
			),
		[isDataPresent]
	);

	const renderMapReqResCodeContainer = useMemo(
		() =>
			isDataPresent ? (
				<>
					<Text className="title bold medium-large-text">{apiDetails!.title}</Text>
					<Text className="description regular small-text">{apiDetails!.description}</Text>
					<Flex className="map-container">
						<Map shouldRenderMap={apiDetails!.shouldRenderMap} />
					</Flex>
					<Flex className="req-container">
						<CodeSnippet
							title={t("Request")}
							placeholderText={t("Submit your request to see the request")}
							singleCodeSnippet={undefined}
						/>
					</Flex>
					<Flex className="res-container">
						<CodeSnippet
							title={t("Response")}
							placeholderText={t("Submit your request to see the response")}
							singleCodeSnippet={undefined}
						/>
					</Flex>
					<Flex className="code-container">
						<CodeSnippet title={t("Code snippets")} multiCodeSnippets={apiDetails!.codeSnippets} />
					</Flex>
				</>
			) : (
				<Flex direction="column">
					<Placeholder width="20rem" minHeight="3.08rem" />
					<Placeholder minHeight="1rem" />
					<Placeholder minHeight="1rem" />
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
				</Flex>
			),
		[isDataPresent, apiDetails, t]
	);

	return (
		<View
			data-testid="api-playground-details-container"
			className="api-playground-details-container no-side-gaps inner-container-padding"
		>
			<Flex className="content-container">
				<Flex className="req-params-container">
					{isDataPresent ? (
						<Text className="title bold medium-text">{t("Customize Request")}</Text>
					) : (
						<Placeholder width="15rem" minHeight="3.08rem" />
					)}
					<Flex className="params">{renderParams}</Flex>
					<Flex className="buttons-container">{renderButtonsContainer}</Flex>
				</Flex>
				<Flex className="map-req-res-code-container">{renderMapReqResCodeContainer}</Flex>
			</Flex>
		</View>
	);
};

export default ApiPlaygroundDetailsPage;
