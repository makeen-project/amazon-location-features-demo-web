import React from "react";

import { Divider, Flex, View } from "@aws-amplify/ui-react";
import { IconLocateMe, IconMinus, IconZoomPlus, LogoLight } from "@demo/assets";
import { MapButtons } from "@demo/atomicui/molecules";
import {
	AuthGeofenceBox,
	AuthTrackerBox,
	ResponsiveBottomSheet,
	RouteBox,
	SearchBox,
	SettingsModal,
	Sidebar,
	UnauthSimulation
} from "@demo/atomicui/organisms";
import { useMediaQuery } from "@demo/hooks";
import { MapStyleFilterTypes, MenuItemEnum, ShowStateType } from "@demo/types";
import "./styles.scss";

interface DemoPlaceholderPageProps {
	height: number;
	show: ShowStateType;
	isGrabVisible: boolean;
	searchValue: string;
	selectedFilters: MapStyleFilterTypes;
}

const DemoPlaceholderPage: React.FC<DemoPlaceholderPageProps> = ({
	height,
	show,
	isGrabVisible,
	searchValue,
	selectedFilters
}) => {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	return (
		<View style={{ height }}>
			<View className={"loader-container"}>
				{show.sidebar && (
					<Sidebar
						onCloseSidebar={() => {}}
						onOpenConnectAwsAccountModal={() => {}}
						onOpenSignInModal={() => {}}
						onShowAuthGeofenceBox={() => {}}
						onShowAuthTrackerBox={() => {}}
						onShowSettings={() => {}}
						onShowTrackingDisclaimerModal={() => {}}
						onShowAboutModal={() => {}}
						onShowUnauthGeofenceBox={() => {}}
						onShowUnauthTrackerBox={() => {}}
						onshowUnauthSimulationDisclaimerModal={() => {}}
					/>
				)}
				{show.routeBox ? (
					<RouteBox mapRef={null} setShowRouteBox={() => {}} isSideMenuExpanded={show.sidebar} />
				) : show.authGeofenceBox ? (
					<AuthGeofenceBox mapRef={null} setShowAuthGeofenceBox={() => {}} />
				) : show.authTrackerBox ? (
					<AuthTrackerBox mapRef={null} setShowAuthTrackerBox={() => {}} />
				) : show.unauthGeofenceBox || show.unauthTrackerBox ? (
					<UnauthSimulation
						mapRef={null}
						from={show.unauthGeofenceBox ? MenuItemEnum.GEOFENCE : MenuItemEnum.TRACKER}
						setShowUnauthGeofenceBox={() => {}}
						setShowUnauthTrackerBox={() => {}}
						setShowConnectAwsAccountModal={() => {}}
						showStartUnauthSimulation={false}
						setShowStartUnauthSimulation={() => {}}
					/>
				) : (
					<>
						{isDesktop ? (
							<SearchBox
								mapRef={null}
								isSideMenuExpanded={show.sidebar}
								onToggleSideMenu={() => {}}
								setShowRouteBox={() => {}}
								isRouteBoxOpen={show.routeBox}
								isAuthGeofenceBoxOpen={show.authGeofenceBox}
								isAuthTrackerBoxOpen={show.authTrackerBox}
								isSettingsOpen={show.settings}
								isStylesCardOpen={show.stylesCard}
								value={searchValue}
								setValue={() => {}}
							/>
						) : (
							<></>
							// <ResponsiveBottomSheet
							// 	SearchBoxEl={() => (
							// 		<SearchBox
							// 			mapRef={null}
							// 			isSideMenuExpanded={show.sidebar}
							// 			onToggleSideMenu={() => {}}
							// 			setShowRouteBox={() => {}}
							// 			isRouteBoxOpen={show.routeBox}
							// 			isAuthGeofenceBoxOpen={show.authGeofenceBox}
							// 			isAuthTrackerBoxOpen={show.authTrackerBox}
							// 			isSettingsOpen={show.settings}
							// 			isStylesCardOpen={show.stylesCard}
							// 			value={searchValue}
							// 			setValue={() => {}}
							// 		/>
							// 	)}
							// 	MapButtons={
							// 		<MapButtons
							// 			renderedUpon={"Demo Page"}
							// 			openStylesCard={show.stylesCard}
							// 			setOpenStylesCard={() => {}}
							// 			onCloseSidebar={() => {}}
							// 			onOpenConnectAwsAccountModal={() => {}}
							// 			onOpenSignInModal={() => {}}
							// 			onShowGeofenceBox={() => {}}
							// 			isGrabVisible={isGrabVisible}
							// 			showGrabDisclaimerModal={show.grabDisclaimerModal}
							// 			onShowGridLoader={() => {}}
							// 			handleMapStyleChange={() => {}}
							// 			searchValue={searchValue}
							// 			setSearchValue={() => {}}
							// 			selectedFilters={selectedFilters}
							// 			setSelectedFilters={() => {}}
							// 			isLoading={true}
							// 			showOpenDataDisclaimerModal={false}
							// 			handleMapProviderChange={() => {}}
							// 			// currentMapProvider={}
							// 			onlyMapStyles
							// 			isHandDevice
							// 		/>
							// 	}
							// 	RouteBox={<RouteBox mapRef={null} setShowRouteBox={() => {}} isSideMenuExpanded={show.sidebar} />}
							// />
						)}
					</>
				)}
				<MapButtons
					renderedUpon={"Demo Page"}
					openStylesCard={show.stylesCard}
					setOpenStylesCard={() => {}}
					onCloseSidebar={() => {}}
					onOpenConnectAwsAccountModal={() => {}}
					onOpenSignInModal={() => {}}
					onShowGeofenceBox={() => {}}
					isGrabVisible={isGrabVisible}
					showGrabDisclaimerModal={show.grabDisclaimerModal}
					onShowGridLoader={() => {}}
					handleMapStyleChange={() => {}}
					searchValue={searchValue}
					setSearchValue={() => {}}
					selectedFilters={selectedFilters}
					setSelectedFilters={() => {}}
					isLoading={true}
					showOpenDataDisclaimerModal={false}
				/>
				<Flex className="location-disabled">
					<IconLocateMe />
				</Flex>
				<Flex className={"navigation-control"}>
					<IconZoomPlus />
					<Divider backgroundColor={"#DDDDDD"} size="small" opacity="0.3" />
					<IconMinus />
				</Flex>
			</View>
			<SettingsModal
				open={show.settings}
				onClose={() => {}}
				resetAppState={() => {}}
				isGrabVisible={isGrabVisible}
				handleMapProviderChange={() => {}}
				handleCurrentLocationAndViewpoint={() => {}}
				mapButtons={
					<MapButtons
						renderedUpon={"Settings Modal"}
						openStylesCard={show.stylesCard}
						setOpenStylesCard={() => {}}
						onCloseSidebar={() => {}}
						onOpenConnectAwsAccountModal={() => {}}
						onOpenSignInModal={() => {}}
						onShowGeofenceBox={() => {}}
						isGrabVisible={isGrabVisible}
						showGrabDisclaimerModal={show.grabDisclaimerModal}
						onShowGridLoader={() => {}}
						handleMapStyleChange={() => {}}
						searchValue={searchValue}
						setSearchValue={() => {}}
						selectedFilters={selectedFilters}
						setSelectedFilters={() => {}}
						isLoading={true}
						showOpenDataDisclaimerModal={false}
					/>
				}
				resetSearchAndFilters={() => {}}
			/>
			<Flex className="logo-stroke-container">
				<LogoLight />
			</Flex>
		</View>
	);
};

export default DemoPlaceholderPage;
