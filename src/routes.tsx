import IndexPage from "./pages/Index/Index";
import { createBrowserRouter } from "react-router-dom";
import WeatherPage from "./pages/Weather/Weather";
import { TemperatureFinder } from "./domain/weather/service/TemperatureFinder";

export default createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "/weather",
		element: <WeatherPage temperatureFinder={new TemperatureFinder()} />,
	},
]);
