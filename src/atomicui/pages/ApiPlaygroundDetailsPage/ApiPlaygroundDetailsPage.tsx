import { FC, lazy, useMemo, useState } from "react";

import { Button, Flex, Placeholder, Text, View } from "@aws-amplify/ui-react";
import { IconClose, IconReloadLined } from "@demo/assets/svgs";
import { useApiPlaygroundDetails, useMediaQuery } from "@demo/hooks";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const BottomSheet = lazy(() =>
	import("./components/BottomSheet/BottomSheet").then(module => ({ default: module.default }))
);
const RequestParamsForm = lazy(() =>
	import("./components/RequestParamsForm").then(module => ({ default: module.RequestParamsForm }))
);
const Map = lazy(() => import("./components/Map").then(module => ({ default: module.Map })));
const CodeSnippet = lazy(() => import("./components/CodeSnippet").then(module => ({ default: module.CodeSnippet })));

const ApiPlaygroundDetailsPage: FC = () => {
	const [showBottomSheet, setShowBottomSheet] = useState(false);
	const { t } = useTranslation();
	const { isFetching, apiDetails } = useApiPlaygroundDetails();
	const isMobile = useMediaQuery("(max-width: 450px)");
	const isTablet = useMediaQuery("(max-width: 844px)");

	const isDataPresent = useMemo(() => !isFetching && !!apiDetails, [isFetching, apiDetails]);

	const renderParams = useMemo(
		() => (
			<>
				{isDataPresent ? (
					<RequestParamsForm requestParams={apiDetails!.requestParams} />
				) : (
					<>
						{Array.from({ length: 6 }).map((_, idx) => (
							<Placeholder key={idx} width="100%" minHeight="6rem" marginBottom="1.23rem" />
						))}
					</>
				)}
			</>
		),
		[apiDetails, isDataPresent]
	);

	const renderReqParamsContainerDesktop = useMemo(() => {
		return (
			<>
				{isDataPresent ? (
					<Text className="title bold medium-text">{t("Customize Request")}</Text>
				) : (
					<Placeholder width="15rem" minHeight="3.08rem" />
				)}
				<Flex className="params-container">{renderParams}</Flex>
				<Flex className="buttons-container">
					{isDataPresent ? (
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
					)}
				</Flex>
			</>
		);
	}, [isDataPresent, renderParams, t]);

	const renderMapReqResCodeContainer = useMemo(
		() =>
			isDataPresent ? (
				<>
					<Text className="title bold medium-large-text">{apiDetails!.title}</Text>
					<Text className="description regular small-text">{apiDetails!.description}</Text>
					{apiDetails?.shouldRenderMap && (
						<Flex className="map-container">
							<Map />
						</Flex>
					)}
					<Flex className="customize-request-button-container-tablet">
						<Button className="customize-request-button" variation="primary" onClick={() => setShowBottomSheet(true)}>
							{t("Customize Request")}
						</Button>
					</Flex>
					<Flex className="tabs-navigation-container-tablet">
						{[t("Request"), t("Response"), t("Code snippets")].map(section => (
							<Flex key={section} className="tab" onClick={() => {}}>
								<Text className="text bold small-text">{section}</Text>
							</Flex>
						))}
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
					<Placeholder
						marginTop="1.92rem"
						minHeight={isMobile ? "16rem" : "36.92rem"}
						maxHeight={isMobile ? "16rem" : "36.92rem"}
					/>
					{isTablet && (
						<Flex direction="column" alignItems="center">
							<Placeholder marginTop="1.92rem" maxWidth="22.15rem" width="100%" height="3.08rem" />
							<Placeholder marginTop="1.92rem" maxWidth="22.15rem" width="100%" height="2.46rem" />
						</Flex>
					)}
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
					<Placeholder marginTop="1.92rem" minHeight="11.5rem" />
				</Flex>
			),
		[isDataPresent, apiDetails, t, isMobile, isTablet]
	);

	return (
		<View
			data-testid="api-playground-details-container"
			className="api-playground-details-container no-side-gaps inner-container-padding"
		>
			<Flex className="content-container">
				<Flex className="req-params-container-desktop">{renderReqParamsContainerDesktop}</Flex>
				<Flex className="map-req-res-code-container">{renderMapReqResCodeContainer}</Flex>
			</Flex>
			<BottomSheet
				showBottomSheet={showBottomSheet}
				setShowBottomSheet={setShowBottomSheet}
				header={
					<Flex justifyContent="space-between" alignItems="center">
						<Text className="medium-text" color="var(--tertiary-color)" fontSize="1.12rem">
							{t("Customize request")}
						</Text>
						<IconClose
							width="1.85rem"
							height="1.85rem"
							fill="var(--grey-color)"
							onClick={() => setShowBottomSheet(false)}
						/>
					</Flex>
				}
				content={<Flex className="bottom-sheet-params-container">{renderParams}</Flex>}
				footer={
					<Flex className="bottom-sheet-buttons-container">
						<Flex className="reset" onClick={() => {}}>
							<IconReloadLined />
						</Flex>
						<Button className="submit" variation="primary" onClick={() => {}}>
							Submit
						</Button>
					</Flex>
				}
			/>
		</View>
	);
};

export default ApiPlaygroundDetailsPage;
