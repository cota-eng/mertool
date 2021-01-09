"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
var PetDetail = function () {
    var _a = react_1.useState("none"), pet = _a[0], setPet = _a[1];
    var _b = react_1.useState(false), isOthers = _b[0], setIsOthers = _b[1];
    var _c = react_1.useState(""), otherContent = _c[0], setOtherContent = _c[1];
    var handleChange = function (event) {
        setPet(event.target.value);
    };
    react_1.useEffect(function () {
        if (pet === "others") {
            setIsOthers(true);
        }
        else {
            setIsOthers(false);
        }
    }, [pet]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "\u30DA\u30C3\u30C8\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
            react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", name: "gender1", value: pet, onChange: handleChange },
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "none", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u306A\u3057" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "dog", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u72AC" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "cat", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u732B" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "others", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u305D\u306E\u4ED6" }),
                isOthers ? react_1["default"].createElement("input", { type: "text" }) : ""))));
};
exports["default"] = PetDetail;
