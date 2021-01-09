"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
var PriceCut = function () {
    var _a = react_1["default"].useState("female"), value = _a[0], setValue = _a[1];
    var handleChange = function (event) {
        setValue(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, "\u5024\u4E0B\u3052\u4EA4\u6E09"),
        react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Gender"),
            react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", name: "gender1", value: value, onChange: handleChange },
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "female", control: react_1["default"].createElement(Radio_1["default"], null), label: "Female" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "male", control: react_1["default"].createElement(Radio_1["default"], null), label: "Male" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "other", control: react_1["default"].createElement(Radio_1["default"], null), label: "Other" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "disabled", disabled: true, control: react_1["default"].createElement(Radio_1["default"], null), label: "(Disabled option)" })))));
};
exports["default"] = PriceCut;
