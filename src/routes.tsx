import IndexPage from "./pages/Index/Index";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
]);
