import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Rooms from "./Rooms";
import RoomsSelection from "./RoomsSelection";
import Button from "./Button";
enzyme.configure({ adapter: new Adapter() });

describe("Rooms component", () => {
	it("should render flex properly", () => {
		const wrapper = enzyme.mount(<Rooms />);
		expect(wrapper.find(".flex-container").length).toBe(1);
	});

	it("should renders four <RoomsSelection /> components", () => {
		const wrapper = enzyme.mount(<Rooms />);
		expect(wrapper.find(RoomsSelection).length).toBe(4);
	});

	it("should renders one <Button /> components", () => {
		const wrapper = enzyme.mount(<Rooms />);
		expect(wrapper.find(Button).length).toBe(1);
	});
});
