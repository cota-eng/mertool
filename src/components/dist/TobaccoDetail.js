"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
var TobaccoDetail = function () {
    var _a = react_1.useState("no"), tobacco = _a[0], setTobacco = _a[1];
    var handleChange = function (event) {
        setTobacco(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "\u30BF\u30D0\u30B3\u3092\u5438\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
            react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", value: tobacco, onChange: handleChange },
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "no", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u3044\u3044\u3048" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "yes", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u306F\u3044" })))));
};
exports["default"] = TobaccoDetail;
