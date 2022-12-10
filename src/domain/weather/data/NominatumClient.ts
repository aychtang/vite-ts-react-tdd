import "universal-fetch";

export type GeocodedLocation = {
	locationName: string;
	lat: number;
	lon: number;
};

export class NominatumClient {
	public geocodeLocation(locationName: string): Promise<any> {
		return fetch(
			`https://nominatim.openstreetmap.org/search.php?city=${locationName}&format=jsonv2`
		)
			.then((x) => x.json())
			.then((nominatumResponse) => ({
				locationName,
				lat: nominatumResponse[0].lat,
				lon: nominatumResponse[0].lon,
			}));
	}
}
