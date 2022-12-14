import { GeocodedLocation, NominatumClient } from "../data/clients/Geocoding";
import { OpenMateoClient } from "../data/clients/Weather";
import { Temperature } from "../data/Temperature";

const geocodeLocation = async (location: string) =>
	await new NominatumClient().geocodeLocation(location);

const getTemperatureForGeocodedLocation = async (location: GeocodedLocation) =>
	await new OpenMateoClient().getWeatherForLatLon(location);

export class TemperatureFactory {
	public async getTemperatureAt(location: string): Promise<Temperature> {
		const geocodedLocation = await geocodeLocation(location);
		const locationTemperature = await getTemperatureForGeocodedLocation(
			geocodedLocation
		);
		return new Temperature({
			location,
			celcius: locationTemperature.temperature,
		});
	}
}
