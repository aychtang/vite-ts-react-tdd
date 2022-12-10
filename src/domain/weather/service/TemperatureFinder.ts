import { GeocodedLocation, NominatumClient } from "../data/NominatumClient";
import { OpenMateoClient } from "../data/OpenMeteoClient";

export type TemperatureAtLocation = {
	locationName: string;
	temperature: number;
};

const geocodeLocation = async (locationName: string) =>
	await new NominatumClient().geocodeLocation(locationName);

const getTemperatureForGeocodedLocation = async (location: GeocodedLocation) =>
	await new OpenMateoClient().getWeatherForLatLon(location);

export class TemperatureFinder {
	public async getTemperatureAt(
		locationName: string
	): Promise<TemperatureAtLocation> {
		const geocodedLocation = await geocodeLocation(locationName);
		const locationTemperature = await getTemperatureForGeocodedLocation(
			geocodedLocation
		);
		return locationTemperature;
	}
}
