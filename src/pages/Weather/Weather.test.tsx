import { render, screen, fireEvent } from "@testing-library/react";
import { TemperatureAtLocation } from "../../domain/weather/service/TemperatureFinder";
import Weather from "./Weather";

class MockTemperatureFinder {
    temperature: number;
    constructor(temperature: number) {
        this.temperature = temperature;
    }

    public async getTemperatureAt(
        locationName: string
    ): Promise<TemperatureAtLocation> {
        return {
            locationName: "London",
            temperature: this.temperature,
        };
    }
}

const weatherPage = {
    render: (temperature: number) =>
        render(<Weather temperatureFinder={new MockTemperatureFinder(temperature)} />),
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

describe("Weather.test.tsx", () => {
    it("should show the temperature after user clicks submit", async () => {
        weatherPage.render(22);
        weatherPage.setLocationValue("London");
        weatherPage.clickSubmit();

        expect(await weatherPage.isLocationTemperature(22)).toBeTruthy();
    });

    it("should show the temperature after user clicks submit", async () => {
        weatherPage.render(25);
        weatherPage.setLocationValue("Madrid");
        weatherPage.clickSubmit();

        expect(await weatherPage.isLocationTemperature(25)).toBeTruthy();
    });
});
