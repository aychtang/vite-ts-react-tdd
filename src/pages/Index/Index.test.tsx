import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Index";

const indexPage = {
    isCounterValue: (count: number) => screen.getByText(`counter value is ${count}`),
    clickButton: (command: "increment" | "decrement" | "reset") => {
        const buttonElement = screen.getByText(command);
        fireEvent.click(buttonElement);
    }
}

describe("Index.test.tsx - Index Page", () => {
    describe("counting behaviour", () => {
        it("should start the count at 0", () => {
            render(<App />);
            expect(indexPage.isCounterValue(0)).toBeTruthy();
        })

        it("should increment the count when the user clicks the increment button", () => {
            render(<App />);

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(1)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(2)).toBeTruthy();
        })

        it("should decrement the count when the user clicks the decrement button", () => {
            render(<App />);

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();
        })

        it("should allow user to increment and decrement the count continously", () => {
            render(<App />);

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(0)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(1)).toBeTruthy();
        })

        it("should allow user to reset the counter value", () => {
            render(<App />);

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-2)).toBeTruthy();

            indexPage.clickButton("reset");
            expect(indexPage.isCounterValue(0)).toBeTruthy();
        })
    })
});
