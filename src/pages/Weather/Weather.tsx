import { useState } from "react";
import { TemperatureFinder } from "../../domain/weather/service/TemperatureFinder";

type WeatherPageProps = {
	temperatureFinder?: TemperatureFinder;
};

function Weather({
	temperatureFinder = new TemperatureFinder(),
}: WeatherPageProps) {
	const [temperature, setTemperature] = useState<number | null>(null);
	const [location, setLocation] = useState("");
	const onClick = async () => {
		const temperatureData = await temperatureFinder.getTemperatureAt(
			location
		);
		setTemperature(temperatureData.temperature);
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
			<div>{temperature ? `Temperature is ${temperature}` : ""}</div>
		</div>
	);
}

export default Weather;
