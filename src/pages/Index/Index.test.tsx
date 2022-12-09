import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Index";

const test = { getCount: (count: number) => screen.getByText(`count is ${count}`) }

describe("App", () => {
    it("should render helper text", () => {
        render(<App />);
        expect(screen.getByText("Click on the Vite and React logos to learn more")).toBeInTheDocument();
    });

    describe("counting behaviour", () => {
        it("should start the count at 0", () => {
            render(<App />);
            expect(test.getCount(0)).toBeInTheDocument();
        })

        it("should increment the count when the user clicks the increment button", () => {
            render(<App />);

            const buttonElement = test.getCount(0);
            expect(buttonElement).toBeInTheDocument();
            fireEvent.click(buttonElement);
            expect(test.getCount(1)).toBeInTheDocument();

            fireEvent.click(buttonElement);
            expect(test.getCount(2)).toBeInTheDocument();
        })

        it("should decrement the count when the user clicks the decrement button", () => {
            render(<App />);

            const decrementButtonElement = screen.getByText("decrement");
            fireEvent.click(decrementButtonElement);
            expect(test.getCount(-1)).toBeInTheDocument();
        })

        it("should allow user to increment and decrement the count continously", () => {
            render(<App />);

            const decrementButtonElement = screen.getByText("decrement");
            fireEvent.click(decrementButtonElement);
            const incrementButtonElement = test.getCount(-1);
            expect(incrementButtonElement).toBeInTheDocument();

            fireEvent.click(incrementButtonElement);
            expect(test.getCount(0)).toBeInTheDocument();

            fireEvent.click(incrementButtonElement);
            expect(test.getCount(1)).toBeInTheDocument();
        })
    })
});
