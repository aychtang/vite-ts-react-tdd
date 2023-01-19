import { GeocodedLocation, NominatumClient } from "../data/clients/Geocoding";
import { OpenMateoClient } from "../data/clients/Weather";
import { Temperature } from "../data/Temperature";

const geocodeLocation = async ({ location }: { location: string }) =>
	await new NominatumClient().geocodeLocation(location);

const getTemperatureForGeocodedLocation = async ({
	location,
}: {
	location: GeocodedLocation;
}) => await new OpenMateoClient().getWeatherForLatLon(location);

export class TemperatureFactory {
	public async getTemperatureAt(location: string): Promise<Temperature> {
		const { temperature } = await getTemperatureForGeocodedLocation({
			location: await geocodeLocation({ location }),
		});

		return new Temperature({
			location,
			celcius: temperature,
		});
	}
}
