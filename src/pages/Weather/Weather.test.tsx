import { render, screen, fireEvent } from "@testing-library/react";
import { Temperature } from "../../domain/weather/data/Temperature";
import { TemperatureFactory } from "../../domain/weather/service/TemperatureFactory";
import WeatherPage from "./Weather";

class MockTemperatureFinder {
	temperature: number;
	constructor(temperature: number) {
		this.temperature = temperature;
	}

	public async getTemperatureAt(location: string): Promise<Temperature> {
		return new Temperature({
			location,
			celcius: this.temperature,
		});
	}
}

const weatherPage = {
	render: ({ temperature }: { temperature: number }) =>
		render(
			<WeatherPage
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
		const buttonElement = screen.getByText(`To ${type}`);
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

	it("should allow the user to switch the temperature to fahrenheight and back", async () => {
		weatherPage.render({ temperature: 25 });
		weatherPage.setLocation("Madrid");
		weatherPage.clickSubmit();

		expect(await weatherPage.isLocationTemperature(25)).toBeTruthy();

		weatherPage.toggleTemperatureType("fahrenheight");
		expect(await weatherPage.isLocationTemperature(77)).toBeTruthy();

		weatherPage.toggleTemperatureType("celcius");
		expect(await weatherPage.isLocationTemperature(25)).toBeTruthy();
	});
});
