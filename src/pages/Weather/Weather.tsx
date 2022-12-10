import { useState } from "react";
import { TemperatureConverter } from "../../domain/weather/service/TemperatureConverter";
import { TemperatureFinder } from "../../domain/weather/service/TemperatureFinder";

type WeatherPageProps = {
	temperatureFinder?: TemperatureFinder;
	temperatureConverter?: TemperatureConverter;
};

function Weather({
	temperatureFinder = new TemperatureFinder(),
	temperatureConverter = new TemperatureConverter(),
}: WeatherPageProps) {
	const [temperature, setTemperature] = useState<number | null>(null);
	const [location, setLocation] = useState("");
	const onClick = async () => {
		const temperatureData = await temperatureFinder.getTemperatureAt(
			location
		);
		setTemperature(temperatureData.temperature);
	};

	const onChangeToFahrenheight = async () => {
		if (temperature) {
			const temperatureInFahrenheight = temperatureConverter.convert({
				temperature,
				type: "fahrenheight",
			});
			setTemperature(temperatureInFahrenheight);
		}
	};

	return (
		<div className="App">
			<label htmlFor="location">City</label>
			<input
				type="text"
				name="location"
				id="location"
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<button onClick={onClick}>Submit</button>
			<button onClick={onChangeToFahrenheight}>To fahrenheight</button>
			<div>{temperature ? `Temperature is ${temperature}` : ""}</div>
		</div>
	);
}

export default Weather;
