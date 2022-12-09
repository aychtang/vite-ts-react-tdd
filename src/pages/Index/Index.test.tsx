import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Index";

const indexPage = {
    render: () => render(<App />),
    getResetButton: (): HTMLElement => screen.getByText('reset'),
    isCounterValue: (count: number): HTMLElement => screen.getByText(`counter value is ${count}`),
    clickButton: (command: "increment" | "decrement" | "reset"): void => {
        const buttonElement = screen.getByText(command);
        fireEvent.click(buttonElement);
    },
};

describe("Index.test.tsx - Index Page", () => {
    describe("counting behaviour", () => {
        it("should start the count at 0", () => {
            indexPage.render()
            expect(indexPage.isCounterValue(0)).toBeTruthy();
        })

        it("should increment the count when the user clicks the increment button", () => {
            indexPage.render()

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(1)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(2)).toBeTruthy();
        })

        it("should decrement the count when the user clicks the decrement button", () => {
            indexPage.render()

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();
        })

        it("should allow user to increment and decrement the count continously", () => {
            indexPage.render()

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(0)).toBeTruthy();

            indexPage.clickButton('increment');
            expect(indexPage.isCounterValue(1)).toBeTruthy();
        })

        it("should allow user to reset the counter value", () => {
            indexPage.render()

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-1)).toBeTruthy();

            indexPage.clickButton('decrement');
            expect(indexPage.isCounterValue(-2)).toBeTruthy();

            indexPage.clickButton("reset");
            expect(indexPage.isCounterValue(0)).toBeTruthy();
        })

        it("should disable the reset button when the count is 0", () => {
            indexPage.render()

            expect(indexPage.getResetButton()).toBeDisabled()
        })
    })
});
