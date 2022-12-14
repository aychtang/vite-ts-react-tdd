import { GeocodedLocation, NominatumClient } from "../data/clients/Geocoding";
import { OpenMateoClient } from "../data/clients/Weather";
import { Temperature } from "../data/Temperature";

const geocodeLocation = async (locationName: string) =>
	await new NominatumClient().geocodeLocation(locationName);

const getTemperatureForGeocodedLocation = async (location: GeocodedLocation) =>
	await new OpenMateoClient().getWeatherForLatLon(location);

export class TemperatureFactory {
	public async getTemperatureAt(locationName: string): Promise<Temperature> {
		const geocodedLocation = await geocodeLocation(locationName);
		const locationTemperature = await getTemperatureForGeocodedLocation(
			geocodedLocation
		);
		return new Temperature({
			location: locationName,
			celcius: locationTemperature.temperature,
		});
	}
}
