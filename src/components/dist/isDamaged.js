"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var IsDamaged = function (props) {
    var _a = react_1.useState("ほぼない"), value = _a[0], setValue = _a[1];
    var handleChange = function (event) {
        setValue(event.target.value);
    };
    react_1.useEffect(function () {
        switch (value) {
            case "no":
                props.setIsDamagedText("本に傷はほとんどありません。\n\n");
                break;
            case "little":
                props.setIsDamagedText("本にかすり傷あります。\n\n");
                break;
            case "large":
                props.setIsDamagedText("本にかなり傷がありますのでご注意ください。\n\n");
                break;
            case "check":
                props.setIsDamagedText("お手数ですが写真をご確認ください。\n\n");
                break;
        }
    }, [value]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u672C\u306B\u50B7\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F"),
        react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
            react_1["default"].createElement(RadioGroup_1["default"], { "aria-label": "gender", value: value, onChange: handleChange },
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "no", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u307B\u307C\u306A\u3044" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "little", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u304B\u3059\u308A\u50B7" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "check", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u76EE\u7ACB\u3064\u50B7" }),
                react_1["default"].createElement(FormControlLabel_1["default"], { value: "\u5199\u771F\u3092\u78BA\u8A8D\u3057\u3066\u3082\u3089\u3046", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u5199\u771F\u3092\u78BA\u8A8D\u3057\u3066\u3082\u3089\u3046" })))));
};
exports["default"] = IsDamaged;
