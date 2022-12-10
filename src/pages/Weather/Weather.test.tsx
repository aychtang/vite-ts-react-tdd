import { render, screen, fireEvent } from "@testing-library/react";
import {
	TemperatureAtLocation,
	TemperatureFinder,
} from "../../domain/weather/service/TemperatureFinder";
import Weather from "./Weather";

class MockTemperatureFinder
	implements Pick<TemperatureFinder, keyof TemperatureFinder>
{
	temperature: number;
	constructor(temperature: number) {
		this.temperature = temperature;
	}

	public async getTemperatureAt(
		locationName: string
	): Promise<TemperatureAtLocation> {
		return {
			locationName,
			temperature: this.temperature,
		};
	}
}

const weatherPage = {
	render: ({ temperature }: { temperature: number }) =>
		render(
			<Weather
				temperatureFinder={new MockTemperatureFinder(temperature)}
			/>
		),
	setLocation: (locationName: string) => {
		const locationInput = screen.getByRole("textbox");
		fireEvent.change(locationInput, { target: { value: locationName } });
	},
	clickSubmit: () => {
		const buttonElement = screen.getByText("Submit");
		fireEvent.click(buttonElement);
	},
	isLocationTemperature: async (temp: number) => {
		return await screen.findByText(`Temperature is ${temp}`);
	},
	toggleTemperatureType: (type: "fahrenheight" | "celcius") => {
		const buttonElement = screen.getByText("To fahrenheight");
		fireEvent.click(buttonElement);
	},
};

describe("Weather.test.tsx", () => {
	it("should show the temperature after user clicks submit", async () => {
		weatherPage.render({ temperature: 22 });
		weatherPage.setLocation("London");
		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(22)).toBeTruthy();
	});

	it("should show the temperature after user clicks submit", async () => {
		weatherPage.render({ temperature: 25 });
		weatherPage.setLocation("Madrid");
		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(25)).toBeTruthy();
	});

	it("should allow the user to toggle to fahrenheight", async () => {
		weatherPage.render({ temperature: 25 });
		weatherPage.setLocation("Madrid");
		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(25)).toBeTruthy();

		weatherPage.toggleTemperatureType("fahrenheight");

		expect(await weatherPage.isLocationTemperature(77)).toBeTruthy();
	});

	it("should allow the user to toggle to fahrenheight", async () => {
		weatherPage.render({ temperature: 22 });
		weatherPage.setLocation("London");
		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(22)).toBeTruthy();

		weatherPage.toggleTemperatureType("fahrenheight");

		expect(await weatherPage.isLocationTemperature(71.6)).toBeTruthy();
	});
});
