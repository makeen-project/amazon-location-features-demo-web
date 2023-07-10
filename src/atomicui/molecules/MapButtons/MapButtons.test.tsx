import i18n from "@demo/i18n";
import { EsriMapEnum } from "@demo/types";
import { act, fireEvent, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import MapButtons from "./MapButtons";

describe("<MapButtons/>", () => {
	const props = {
		openStylesCard: false,
		setOpenStylesCard: jest.fn(),
		onCloseSidebar: jest.fn(),
		onOpenConnectAwsAccountModal: jest.fn(),
		onOpenSignInModal: jest.fn(),
		onShowGeofenceBox: jest.fn(),
		isGrabVisible: true,
		showGrabDisclaimerModal: false,
		onShowGridLoader: jest.fn(),
		handleMapStyleChange: jest.fn(),
		searchValue: "",
		setSearchValue: jest.fn(),
		selectedFilters: {
			Providers: [],
			Attribute: [],
			Type: []
		},
		setSelectedFilters: jest.fn(),
		isLoading: false,
		resetSearchAndFilters: jest.fn()
	};

	const renderComponent = () => {
		return render(
			<I18nextProvider i18n={i18n}>
				<MapButtons {...props} />
			</I18nextProvider>
		);
	};

	test("renders map buttons container", () => {
		const { getByTestId } = renderComponent();
		expect(getByTestId("map-buttons-container")).toBeInTheDocument();
	});

	test("renders map styles button and opens the map styles card", () => {
		props.openStylesCard = true;
		const { getByTestId } = renderComponent();
		expect(getByTestId("map-styles-card")).toBeInTheDocument();
	});

	test("renders geofence control button", () => {
		const { getByTestId } = renderComponent();
		expect(getByTestId("geofence-control-button")).toBeInTheDocument();
	});

	test("searches for map styles", async () => {
		const { getByTestId, getByPlaceholderText } = renderComponent();
		fireEvent.click(getByTestId("map-styles-button"));

		act(() => {
			fireEvent.change(getByPlaceholderText("Search styles"), { target: { value: "satellite" } });
		});

		expect(props.setSearchValue).toHaveBeenCalledWith("satellite");
	});

	test("updates selected filters when a filter is clicked", () => {
		props.openStylesCard = true;
		const { getByTestId, findByTestId } = renderComponent();

		fireEvent.click(getByTestId("map-styles-button"));

		findByTestId("map-styles-card");

		const filterButton = getByTestId("filter-icon-wrapper");
		fireEvent.click(filterButton);

		const filterCheckbox = getByTestId("filter-checkbox-Esri") as HTMLInputElement;
		fireEvent.click(filterCheckbox);

		props.setSelectedFilters({
			Providers: [filterCheckbox],
			Attribute: [],
			Type: []
		});
	});

	test("selects a map style", () => {
		const { getByTestId, findByTestId } = renderComponent();
		fireEvent.click(getByTestId("map-styles-button"));

		findByTestId("map-styles-card");

		act(() => {
			fireEvent.click(getByTestId(`map-style-item-${EsriMapEnum.ESRI_STREET_MAP}`));
		});

		expect(props.handleMapStyleChange).toHaveBeenCalledWith(EsriMapEnum.ESRI_STREET_MAP);
	});
});
