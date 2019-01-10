import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RoomsSelection from "./RoomsSelection";
enzyme.configure({ adapter: new Adapter() });

describe("RoomsSelection component", () => {
	const props = {
		id: "room2",
		name: "Room 2",
		checkbox: true,
		checked: false,
		children: 0,
		adult: 1
	};

	it("should render rooms selection flex properly", () => {
		const wrapper = enzyme.mount(<RoomsSelection {...props} />);
		expect(wrapper.find(".room-selection").length).toBe(1);
	});

	it("should render Title as 'Room 2'", () => {
		const wrapper = enzyme.mount(<RoomsSelection {...props} />);
		expect(wrapper.find(".panel-heading").text()).toBe("Room 2");
	});

	it("should render checkbox in header", () => {
		const wrapper = enzyme.mount(<RoomsSelection {...props} />);
		expect(wrapper.find("input[type='checkbox']").length).toBe(1);
	});

	it("should not renders checkbox in header, if disabled", () => {
		const wrapper = enzyme.mount(<RoomsSelection {...props} />);
		wrapper.setProps({ checkbox: false });
		expect(wrapper.find("input[type='checkbox']").length).toBe(0);
	});

	it("should not renders two dropdowns", () => {
		const wrapper = enzyme.mount(<RoomsSelection {...props} />);
		expect(wrapper.find("select").length).toBe(2);
	});
});
