import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Index";

const getCount = (count: number) => screen.getByText(`count is ${count}`)

describe("App", () => {
    it("should render helper text", () => {
        render(<App />);
        expect(screen.getByText("Click on the Vite and React logos to learn more")).toBeInTheDocument();
    });

    describe("counting behaviour", () => {
        it("should start the count at 0", () => {
            render(<App />);
            expect(getCount(0)).toBeInTheDocument();
        })

        it("should increment the count when the user clicks the button", () => {
            render(<App />);
            const buttonElement = getCount(0);
            expect(buttonElement).toBeInTheDocument();

            fireEvent.click(buttonElement);
            expect(getCount(1)).toBeInTheDocument();

            fireEvent.click(buttonElement);
            expect(getCount(2)).toBeInTheDocument();
        })
    })
});
