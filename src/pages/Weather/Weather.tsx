import { useState } from "react";
import { TemperatureFactory } from "../../domain/weather/service/TemperatureFactory";

type WeatherPageProps = {
	temperatureFinder?: TemperatureFactory;
};

function WeatherPage({
	temperatureFinder = new TemperatureFactory(),
}: WeatherPageProps) {
	const [temperature, setTemperature] = useState<number | null>(null);
	const [location, setLocation] = useState("");

	const onClickCelcius = async () => {
		const temperature = await temperatureFinder.getTemperatureAt(location);
		setTemperature(temperature.asCelcius());
	};

	const onClickFahrenheight = async () => {
		const temperature = await temperatureFinder.getTemperatureAt(location);
		setTemperature(temperature.asFahrenheight());
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
			<button onClick={onClickCelcius}>Submit</button>
			<button onClick={onClickFahrenheight}>To fahrenheight</button>
			<button onClick={onClickCelcius}>To celcius</button>
			<div>{temperature ? `Temperature is ${temperature}` : ""}</div>
		</div>
	);
}

export default WeatherPage;
