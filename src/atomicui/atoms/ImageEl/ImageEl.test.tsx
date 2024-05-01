import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react";

import ImageEl from "./ImageEl";

const imageUrl = faker.internet.avatar();

describe("<ImageEl />", () => {
	it("renders with placeholder initially and displays image on load", () => {
		const { getByTestId } = render(<ImageEl dataTestId="test-image" src={imageUrl} alt="Test Image" loading="lazy" />);

		// Check if the placeholder is initially displayed
		const placeholderElement = getByTestId("placeholder-test-image");
		expect(placeholderElement).toBeInTheDocument();
		expect(placeholderElement).toHaveStyle({ display: "block" });

		// Check if the image is initially hidden
		const imageElement = getByTestId("test-image");
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveStyle({ display: "none" });

		// Trigger image onLoad event
		fireEvent.load(imageElement);

		// Check if the placeholder is now hidden
		expect(placeholderElement).toHaveStyle({ display: "none" });

		// Check if the image is now displayed
		expect(imageElement).toHaveStyle({ display: "block" });
	});
});
