import { NominatumClient } from "../data/NominatumClient";
import { OpenMateoClient } from "../data/OpenMeteoClient";

export type TemperatureAtLocation = {
    locationName: string;
    temperature: number;
}

export class TemperatureFinder {
    public async getTemperatureAt(locationName: string): Promise<TemperatureAtLocation> {
        const locationData = await new NominatumClient().geocodeLocation(locationName);
        const locationTemperature = await new OpenMateoClient().getWeatherForLatLon(locationData);
        return locationTemperature;
    }
}
