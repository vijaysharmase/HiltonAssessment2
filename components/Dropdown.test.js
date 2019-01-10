import React from "react";
import enzyme from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Dropdown from "./Dropdown";
enzyme.configure({ adapter: new Adapter() });

describe("Checkbox component", () => {
	var value = "2";
	const props = {
		className: "new-checkbox",
		checked: true,
		disabled: false,
		value: "2",
		onChange: event => {
			value = event.target.value;
		}
	};

	it("check dropdown change functionality", () => {
		const wrapper = enzyme.mount(
			<Dropdown {...props}>
				<option value="1">1</option>
				<option value="2">2</option>
			</Dropdown>
		);
		wrapper.find("select").simulate("change", { target: { value: "1" } });
		expect(value).toBe("1");
	});

	it("Compare snapshots", () => {
		const wrapper = renderer.create(
			<Dropdown {...props}>
				<option value="1">1</option>
				<option value="2">2</option>
			</Dropdown>
		);
		const dropdown = wrapper.toJSON();
		expect(dropdown).toMatchSnapshot();
	});
});
