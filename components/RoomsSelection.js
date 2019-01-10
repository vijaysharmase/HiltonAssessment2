import React from "react";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";

class RoomsSelection extends React.Component {
	state = {
		id: this.props.id,
		name: this.props.name,
		checked: this.props.checked,
		checkbox: this.props.checkbox,
		children: this.props.children,
		adult: this.props.adult
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			id: nextProps.id,
			name: nextProps.name,
			checked: nextProps.checked,
			checkbox: nextProps.checkbox,
			children: nextProps.children,
			adult: nextProps.adult
		});
	}

	handleAdultDropDownChange = event => {
		this.setState({ adult: event.target.value }, () => {
			if (typeof this.props.onRoomsSelectionChange === "function") {
				this.props.onRoomsSelectionChange({
					id: this.state.id,
					name: this.state.name,
					checkbox: this.state.checkbox,
					checked: this.state.checked,
					children: this.state.children,
					adult: this.state.adult
				});
			}
		});
	};

	handleChildrenDropDownChange = event => {
		this.setState({ children: event.target.value }, () => {
			if (typeof this.props.onRoomsSelectionChange === "function") {
				this.props.onRoomsSelectionChange({
					id: this.state.id,
					name: this.state.name,
					checkbox: this.state.checkbox,
					checked: this.state.checked,
					children: this.state.children,
					adult: this.state.adult
				});
			}
		});
	};

	handleCheckboxChange = event => {
		let checked = event.target.checked;
		this.setState(
			prevState => ({
				checked: checked,
				children: !checked ? "0" : prevState.children,
				adult: !checked ? "1" : prevState.adult
			}),
			() => {
				if (typeof this.props.onRoomsSelectionChange === "function") {
					this.props.onRoomsSelectionChange({
						id: this.state.id,
						name: this.state.name,
						checkbox: this.state.checkbox,
						checked: this.state.checked,
						children: this.state.children,
						adult: this.state.adult
					});
				}
			}
		);
	};

	render() {
		return (
			<div className={`panel panel-default room-selection ml-2 mt-2 ${this.state.checked ? "" : "disabled"}`}>
				<div className="panel-heading">
					<label>{this.state.checkbox && <Checkbox className="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} />}</label>
					<span style={{ marginLeft: 8 }}>{this.state.name}</span>
				</div>
				<div className="panel-body">
					<div className="d-flex">
						<div className="p-2 flex-fill text-center">
							<div>Adults (18+)</div>
							<div>
								<Dropdown onChange={this.handleAdultDropDownChange} value={this.state.adult} disabled={!this.state.checked}>
									<option value="1">1</option>
									<option value="2">2</option>
								</Dropdown>
							</div>
						</div>
						<div className="p-2 flex-fill text-center">
							<div>Children (0-17)</div>
							<div>
								<Dropdown onChange={this.handleChildrenDropDownChange} value={this.state.children} disabled={!this.state.checked}>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
								</Dropdown>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RoomsSelection;
