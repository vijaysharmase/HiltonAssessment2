module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(1);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Checkbox.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\twidth: 16px;\n\theight: 16px;\n\tborder: 1px solid;\n\tborder-radius: 3px;\n\ttransition: all 150ms;\n\tmargin-top: 8px;\n\t", ":focus + & {\n\t\tbox-shadow: 0 0 0 2px #04b1ff7a;\n\t}\n\n\t", " {\n\t\tvisibility: ", ";\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tborder: 0;\n\tclip: rect(0 0 0 0);\n\tclippath: inset(50%);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfill: none;\n\tstroke: black;\n\tstroke-width: 3px;\n\tmargin-bottom: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tvertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CheckboxContainer = external_styled_components_default.a.div(_templateObject());
var Icon = external_styled_components_default.a.svg(_templateObject2());
var HiddenCheckbox = external_styled_components_default.a.input.attrs({
  type: "checkbox"
})(_templateObject3());
var StyledCheckbox = external_styled_components_default.a.div(_templateObject4(), HiddenCheckbox, Icon, function (props) {
  return props.checked ? "visible" : "hidden";
});

var Checkbox_Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return external_react_default.a.createElement(CheckboxContainer, {
    className: className
  }, external_react_default.a.createElement(HiddenCheckbox, _extends({
    checked: checked
  }, props)), external_react_default.a.createElement(StyledCheckbox, {
    checked: checked
  }, external_react_default.a.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, external_react_default.a.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
};

/* harmony default export */ var components_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: ./components/Dropdown.js
function Dropdown_extends() { Dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dropdown_extends.apply(this, arguments); }

function Dropdown_templateObject() {
  var data = Dropdown_taggedTemplateLiteral(["\n\tfont: 0.8em \"Montserrat\", sans-serif;\n\theight: 2em;\n\twidth: 3em;\n"]);

  Dropdown_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Dropdown_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledDropdown = external_styled_components_default.a.select(Dropdown_templateObject());

var Dropdown_Dropdown = function Dropdown(_ref) {
  var props = Dropdown_extends({}, _ref);

  return external_react_default.a.createElement(StyledDropdown, props);
};

/* harmony default export */ var components_Dropdown = (Dropdown_Dropdown);
// CONCATENATED MODULE: ./components/RoomsSelection.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RoomsSelection_RoomsSelection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RoomsSelection, _React$Component);

  function RoomsSelection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RoomsSelection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoomsSelection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      id: _this.props.id,
      name: _this.props.name,
      checked: _this.props.checked,
      checkbox: _this.props.checkbox,
      children: _this.props.children,
      adult: _this.props.adult
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAdultDropDownChange", function (event) {
      _this.setState({
        adult: event.target.value
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChildrenDropDownChange", function (event) {
      _this.setState({
        children: event.target.value
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckboxChange", function (event) {
      var checked = event.target.checked;

      _this.setState(function (prevState) {
        return {
          checked: checked,
          children: !checked ? "0" : prevState.children,
          adult: !checked ? "1" : prevState.adult
        };
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    return _this;
  }

  _createClass(RoomsSelection, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.id,
        name: nextProps.name,
        checked: nextProps.checked,
        checkbox: nextProps.checkbox,
        children: nextProps.children,
        adult: nextProps.adult
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "panel panel-default room-selection ml-2 mt-2 ".concat(this.state.checked ? "" : "disabled")
      }, external_react_default.a.createElement("div", {
        className: "panel-heading"
      }, external_react_default.a.createElement("label", null, this.state.checkbox && external_react_default.a.createElement(components_Checkbox, {
        className: "checkbox",
        checked: this.state.checked,
        onChange: this.handleCheckboxChange
      })), external_react_default.a.createElement("span", {
        style: {
          marginLeft: 8
        }
      }, this.state.name)), external_react_default.a.createElement("div", {
        className: "panel-body"
      }, external_react_default.a.createElement("div", {
        className: "d-flex"
      }, external_react_default.a.createElement("div", {
        className: "p-2 flex-fill text-center"
      }, external_react_default.a.createElement("div", null, "Adults (18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Dropdown, {
        onChange: this.handleAdultDropDownChange,
        value: this.state.adult,
        disabled: !this.state.checked
      }, external_react_default.a.createElement("option", {
        value: "1"
      }, "1"), external_react_default.a.createElement("option", {
        value: "2"
      }, "2")))), external_react_default.a.createElement("div", {
        className: "p-2 flex-fill text-center"
      }, external_react_default.a.createElement("div", null, "Children (0-17)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Dropdown, {
        onChange: this.handleChildrenDropDownChange,
        value: this.state.children,
        disabled: !this.state.checked
      }, external_react_default.a.createElement("option", {
        value: "0"
      }, "0"), external_react_default.a.createElement("option", {
        value: "1"
      }, "1"), external_react_default.a.createElement("option", {
        value: "2"
      }, "2")))))));
    }
  }]);

  return RoomsSelection;
}(external_react_default.a.Component);

/* harmony default export */ var components_RoomsSelection = (RoomsSelection_RoomsSelection);
// CONCATENATED MODULE: ./components/Button.js
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_templateObject() {
  var data = Button_taggedTemplateLiteral(["\n\tfont: 0.8em \"Montserrat\", sans-serif;\n\tborder-radius: 3px;\n\theight: 2em;\n\twidth: 5em;\n\tbackground-color: #e7e7e7;\n"]);

  Button_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Button_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledButton = external_styled_components_default.a.input.attrs({
  type: "button"
})(Button_templateObject());

var Button_Button = function Button(_ref) {
  var props = Button_extends({}, _ref);

  return external_react_default.a.createElement(StyledButton, props);
};

/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./components/Rooms.js
function Rooms_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Rooms_typeof = function _typeof(obj) { return typeof obj; }; } else { Rooms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Rooms_typeof(obj); }

function Rooms_extends() { Rooms_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Rooms_extends.apply(this, arguments); }

function Rooms_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Rooms_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Rooms_createClass(Constructor, protoProps, staticProps) { if (protoProps) Rooms_defineProperties(Constructor.prototype, protoProps); if (staticProps) Rooms_defineProperties(Constructor, staticProps); return Constructor; }

function Rooms_possibleConstructorReturn(self, call) { if (call && (Rooms_typeof(call) === "object" || typeof call === "function")) { return call; } return Rooms_assertThisInitialized(self); }

function Rooms_getPrototypeOf(o) { Rooms_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Rooms_getPrototypeOf(o); }

function Rooms_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Rooms_setPrototypeOf(subClass, superClass); }

function Rooms_setPrototypeOf(o, p) { Rooms_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Rooms_setPrototypeOf(o, p); }

function Rooms_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Rooms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Rooms_Rooms =
/*#__PURE__*/
function (_React$Component) {
  Rooms_inherits(Rooms, _React$Component);

  function Rooms() {
    var _getPrototypeOf2;

    var _this;

    Rooms_classCallCheck(this, Rooms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Rooms_possibleConstructorReturn(this, (_getPrototypeOf2 = Rooms_getPrototypeOf(Rooms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Rooms_defineProperty(Rooms_assertThisInitialized(Rooms_assertThisInitialized(_this)), "state", {
      rooms: [{
        id: "room1",
        name: "Room 1",
        checkbox: false,
        checked: true,
        children: 0,
        adult: 1
      }, {
        id: "room2",
        name: "Room 2",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }, {
        id: "room3",
        name: "Room 3",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }, {
        id: "room4",
        name: "Room 4",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }]
    });

    Rooms_defineProperty(Rooms_assertThisInitialized(Rooms_assertThisInitialized(_this)), "onSubmitClick", function () {
      var rooms = Object.assign([], _this.state.rooms);
      var selectedRooms = rooms.filter(function (room) {
        return room.checked;
      });
      var message = "No rooms selected.";

      if (selectedRooms.length > 0) {
        message = selectedRooms.length + "{ rooms selected.";
        selectedRooms.forEach(function (room, index) {
          message += "\n Room " + (index + 1) + ": Adluts: " + room.adult + ", Children: " + room.children;
        });

        if (window.confirm(message)) {
          localStorage.setItem("Rooms", JSON.stringify(rooms));
        }
      } else {
        window.alert(message);
      }
    });

    Rooms_defineProperty(Rooms_assertThisInitialized(Rooms_assertThisInitialized(_this)), "onRoomsSelectionChange", function (room) {
      var rooms = Object.assign([], _this.state.rooms);
      rooms = rooms.map(function (rm) {
        if (room.checked && !rm.checked && rm.id <= room.id) {
          rm.checked = room.checked;
        }

        if (!room.checked && rm.checked && rm.id >= room.id) {
          rm.checked = room.checked;
          rm.adult = room.adult;
          rm.children = room.children;
        }

        if (rm.id === room.id) {
          rm.adult = room.adult;
          rm.children = room.children;
        }

        return rm;
      });

      _this.setState({
        rooms: rooms
      });
    });

    return _this;
  }

  Rooms_createClass(Rooms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rooms = JSON.parse(localStorage.getItem("Rooms"));

      if (rooms && Array.isArray(rooms)) {
        this.setState({
          rooms: rooms
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        className: "row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "flex-container"
      }, this.state.rooms.map(function (room) {
        return external_react_default.a.createElement(components_RoomsSelection, Rooms_extends({
          key: room.id
        }, room, {
          onRoomsSelectionChange: _this2.onRoomsSelectionChange
        }));
      }))), external_react_default.a.createElement("div", {
        className: "row mt-5 ml-5"
      }, external_react_default.a.createElement(components_Button, {
        value: "Submit",
        onClick: this.onSubmitClick
      })));
    }
  }]);

  return Rooms;
}(external_react_default.a.Component);

/* harmony default export */ var components_Rooms = (Rooms_Rooms);
// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Hilton"), external_react_default.a.createElement("meta", {
    charset: "utf-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/style.css"
  })), external_react_default.a.createElement("div", {
    className: "container mt-5"
  }, external_react_default.a.createElement(components_Rooms, null)));
});

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);