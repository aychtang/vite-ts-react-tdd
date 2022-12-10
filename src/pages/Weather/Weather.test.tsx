import { render, screen, fireEvent } from "@testing-library/react";
import { TemperatureAtLocation } from "../../domain/weather/service/TemperatureFinder";
import Weather from "./Weather";

class MockTemperatureFinder {
	public async getTemperatureAt(
		locationName: string
	): Promise<TemperatureAtLocation> {
		return {
			locationName: "London",
			temperature: 22,
		};
	}
}

const weatherPage = {
	render: () =>
		render(<Weather temperatureFinder={new MockTemperatureFinder()} />),
	setLocationValue: (locationName: string) => {
		const locationInput = screen.getByRole("textbox");
		fireEvent.change(locationInput, locationName);
	},
	clickSubmit: () => {
		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);
	},
	isLocationTemperature: async (temp: number) => {
		return await screen.findByText(`Temperature is ${temp}`);
	},
};

describe("Index.test.tsx - Index Page", () => {
	it("should show the temperature ", async () => {
		weatherPage.render();

		weatherPage.setLocationValue("London");

		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(22)).toBeTruthy();
	});
});
