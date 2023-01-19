import "universal-fetch";
import { GeocodedLocation } from "./Geocoding";

export type TemperatureAtLocation = {
	locationName: string;
	temperature: number;
};

export class OpenMateoClient {
	public getWeatherForLatLon(
		location: GeocodedLocation
	): Promise<TemperatureAtLocation> {
		return fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
		)
			.then((response) => response.json())
			.then((openMeteoResponse) => ({
				locationName: location.locationName,
				temperature: openMeteoResponse.current_weather.temperature,
			}));
	}
}
