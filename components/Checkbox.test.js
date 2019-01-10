import React from "react";
import enzyme from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Checkbox from "./Checkbox";
enzyme.configure({ adapter: new Adapter() });

describe("Checkbox component", () => {
	var checked = true;
	const props = {
		className: "new-checkbox",
		checked: true,
		onChange: event => {
			checked = event.target.checked;
		}
	};

	it("check checkbox change functionality", () => {
		const wrapper = enzyme.mount(<Checkbox {...props} />);
		wrapper.find('input[type="checkbox"]').simulate("change");
		expect(checked).toBe(true);
	});

	it("Compare snapshots", () => {
		const wrapper = renderer.create(<Checkbox {...props} />);
		const checkbox = wrapper.toJSON();
		expect(checkbox).toMatchSnapshot();
	});
});
