import { TemperatureFactory } from "./TemperatureFactory";

describe("TemperatureFinder.test.ts", () => {
	it("should find a temperature for a given city name", async () => {
		const temperatureFactory = new TemperatureFactory();
		const temperatureAtLondon = await temperatureFactory.getTemperatureAt(
			"London"
		);
		expect(typeof temperatureAtLondon.asCelcius()).toBe("number");
		expect(typeof temperatureAtLondon.asFahrenheight()).toBe("number");
	});
});
