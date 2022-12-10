import { useState } from "react";
import { TemperatureFinder } from "../../domain/weather/service/TemperatureFinder";

type WeatherPageProps = {
    temperatureFinder?: TemperatureFinder;
};
function Weather({ temperatureFinder = new TemperatureFinder() }: WeatherPageProps) {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState("");
    const onClick = async () => {
        const temperatureData = await temperatureFinder.getTemperatureAt(
            inputValue
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onClick}>Submit</button>
            <div>{temperature ? `Temperature is ${temperature}` : ""}</div>
        </div>
    );
}

export default Weather;
