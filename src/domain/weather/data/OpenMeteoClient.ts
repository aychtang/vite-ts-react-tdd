import "universal-fetch";
import { GeocodedLocation } from "./NominatumClient";
import { TemperatureAtLocation } from "../service/TemperatureFinder";

export class OpenMateoClient {
	public getWeatherForLatLon(
		location: GeocodedLocation
	): Promise<TemperatureAtLocation> {
		return fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
		)
			.then((x) => x.json())
			.then((openMeteoResponse) => ({
				locationName: location.locationName,
				temperature: openMeteoResponse.current_weather.temperature,
			}));
	}
}
