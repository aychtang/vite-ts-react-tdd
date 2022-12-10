import IndexPage from "./pages/Index/Index";
import WeatherPage from "./pages/Weather/Weather";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "/weather",
		element: <WeatherPage />,
	},
]);
