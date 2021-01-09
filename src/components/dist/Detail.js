"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
var Detail = function () {
    var _a = react_1["default"].useState("なし"), pet = _a[0], setPet = _a[1];
    var handleChange = function (event) {
        setPet(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Gender"),
            react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", name: "gender1", value: pet, onChange: handleChange },
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "none", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u306A\u3057" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "dog", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u72AC" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "cat", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u732B" })))));
};
exports["default"] = Detail;
