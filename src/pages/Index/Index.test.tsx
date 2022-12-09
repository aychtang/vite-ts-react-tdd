import { render, screen } from "@testing-library/react";
import App from "./Index";

describe("App", () => {
    it("should render helper text", () => {
        render(<App />);
        expect(screen.getByText("Click on the Vite and React logos to learn more")).toBeInTheDocument();
    });
});
