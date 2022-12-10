export class TemperatureConverter {
	public convert({
		temperature,
		type,
	}: {
		temperature: number;
		type: "fahrenheight" | "celcius";
	}): number {
		return (temperature * 9) / 5 + 32;
	}
}
