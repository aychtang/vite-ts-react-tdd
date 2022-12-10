import { TemperatureFinder } from "./TemperatureFinder";

describe("TemperatureFinder.test.ts", () => {
    it("should find a temperature for a given city name", async () => {
        const temperatureFinder = new TemperatureFinder();
        const locationData = (await temperatureFinder.getTemperatureAt("London"));
        expect(typeof locationData.temperature).toBe("number");
        expect(typeof locationData.locationName).toBe("string");
    });
});
