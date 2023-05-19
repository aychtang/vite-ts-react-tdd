import "universal-fetch";

export type GeocodedLocation = {
	locationName: string;
	lat: number;
	lon: number;
};

// Code change test

export class NominatumClient {
	public geocodeLocation(locationName: string): Promise<GeocodedLocation> {
		return fetch(
			`https://nominatim.openstreetmap.org/search.php?city=${locationName}&format=jsonv2`
		)
			.then((response) => response.json())
			.then((nominatumResponse) => ({
				locationName,
				lat: nominatumResponse[0].lat,
				lon: nominatumResponse[0].lon,
			}));
	}
}
