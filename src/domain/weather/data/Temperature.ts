export class Temperature {
	location: string;
	celcius: number;

	constructor({ location, celcius }: { location: string; celcius: number }) {
		this.location = location;
		this.celcius = celcius;
	}

	asCelcius(): number {
		return this.celcius;
	}

	asFahrenheight(): number {
		return (this.celcius * 9) / 5 + 32;
	}
}
