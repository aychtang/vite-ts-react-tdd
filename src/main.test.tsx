import React from "react";
import ReactDOM from "react-dom";
import { MainElements } from "./main";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
	it("should render without crashing", () => {
		const div = document.createElement("div");
		div.id = "root";
		document.body.appendChild(div);
		require("./main.tsx");
		expect(ReactDOM.render).toHaveBeenCalledWith(MainElements, div);
	});
});
