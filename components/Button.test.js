import React from "react";
import enzyme from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";
enzyme.configure({ adapter: new Adapter() });

describe("Button component", () => {
	var clicked = false;
	const props = {
		value: "Submit",
		onClick: () => {
			clicked = true;
		}
	};

	it("check button click functionality", () => {
		const wrapper = enzyme.mount(<Button {...props} />);
		wrapper.find('input[type="button"]').simulate("click");
		expect(clicked).toBe(true);
	});

	it("Compare snapshots", () => {
		const wrapper = renderer.create(<Button {...props} />);
		const button = wrapper.toJSON();
		expect(button).toMatchSnapshot();
	});
});
