import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Index";

const test = {
    getCount: (count: number) => screen.getByText(`count is ${count}`),
    getIncrementButton: () => screen.getByText(`increment`),
    getDecrementButton: () => screen.getByText(`decrement`)
}

describe("Index.test.tsx - Index Page", () => {
    describe("counting behaviour", () => {
        it("should start the count at 0", () => {
            render(<App />);
            expect(test.getCount(0)).toBeInTheDocument();
        })

        it("should increment the count when the user clicks the increment button", () => {
            render(<App />);

            const buttonElement = test.getIncrementButton();
            expect(buttonElement).toBeInTheDocument();

            fireEvent.click(buttonElement);
            expect(test.getCount(1)).toBeInTheDocument();

            fireEvent.click(buttonElement);
            expect(test.getCount(2)).toBeInTheDocument();
        })

        it("should decrement the count when the user clicks the decrement button", () => {
            render(<App />);

            fireEvent.click(test.getDecrementButton());
            expect(test.getCount(-1)).toBeInTheDocument();
        })

        it("should allow user to increment and decrement the count continously", () => {
            render(<App />);

            fireEvent.click(test.getDecrementButton());

            const incrementButtonElement = test.getIncrementButton();
            fireEvent.click(incrementButtonElement);
            expect(test.getCount(0)).toBeInTheDocument();

            fireEvent.click(incrementButtonElement);
            expect(test.getCount(1)).toBeInTheDocument();
        })
    })
});
