"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Radio_1 = require("@material-ui/core/Radio");
var RadioGroup_1 = require("@material-ui/core/RadioGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var FormControl_1 = require("@material-ui/core/FormControl");
var core_1 = require("@material-ui/core");
var Grid_1 = require("@material-ui/core/Grid");
var IsWritten = function (props) {
    var _a = react_1.useState("no"), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), isPencil = _b[0], setIsPencil = _b[1];
    var _c = react_1.useState(false), isBallPoint = _c[0], setIsBallPoint = _c[1];
    var _d = react_1.useState(false), isMarker = _d[0], setIsMarker = _d[1];
    var handleChange = function (event) {
        setValue(event.target.value);
    };
    var allFalseHandler = function () {
        setIsPencil(false);
        setIsBallPoint(false);
        setIsMarker(false);
    };
    react_1.useEffect(function () {
        if (isPencil && !isBallPoint && !isMarker) {
            props.setIsWrittenToolText("鉛筆で書き込まれています。\n\n");
        }
        else if (!isPencil && isBallPoint && !isMarker) {
            props.setIsWrittenToolText("ボールペンで書き込まれています。\n\n");
        }
        else if (!isPencil && !isBallPoint && isMarker) {
            props.setIsWrittenToolText("マーカーで書き込まれています。\n\n");
        }
        else if (isPencil && isBallPoint && !isMarker) {
            props.setIsWrittenToolText("鉛筆やボールペンで書き込まれています。\n\n");
        }
        else if (!isPencil && isBallPoint && isMarker) {
            props.setIsWrittenToolText("ボールペンやマーカーで書き込まれています。\n\n");
        }
        else if (isPencil && !isBallPoint && isMarker) {
            props.setIsWrittenToolText("鉛筆やマーカーで書き込まれています。\n\n");
        }
        else if (isPencil && isBallPoint && isMarker) {
            props.setIsWrittenToolText("鉛筆やボールペン、マーカーで書き込まれています。");
        }
    }, [props, isPencil, isBallPoint, isMarker]);
    react_1.useEffect(function () {
        switch (value) {
            case "no":
                props.setIsWrittenText("書き込みは全くありません。\n\n");
                allFalseHandler();
                break;
            case "little":
                props.setIsWrittenText("書き込みは数ページあります。\n\n");
                break;
            case "many":
                props.setIsWrittenText("書き込みは数十ページあります。\n\n");
                break;
            case "somany":
                props.setIsWrittenText("書き込みはかなりあります。\n\n");
                break;
        }
    }, [value, props]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement("p", null, "Q4:\u66F8\u304D\u8FBC\u307F\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F"),
                react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
                    react_1["default"].createElement(RadioGroup_1["default"], { value: value, onChange: handleChange },
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "no", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u306A\u3044" }),
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "little", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u6570\u30DA\u30FC\u30B8" }),
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "many", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u6570\u5341\u30DA\u30FC\u30B8" }),
                        react_1["default"].createElement(FormControlLabel_1["default"], { value: "somany", control: react_1["default"].createElement(Radio_1["default"], null), label: "\u304B\u306A\u308A" })))),
            react_1["default"].createElement("p", null, "\u306A\u306B\u3067\u66F8\u304D\u8FBC\u3093\u3067\u3044\u307E\u3059\u304B\uFF1F"),
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(core_1.Checkbox, { checked: isPencil, name: "pencil", onChange: function () { return setIsPencil(!isPencil); }, disabled: value === "no" }),
                react_1["default"].createElement("span", null, "\u925B\u7B46"),
                react_1["default"].createElement(core_1.Checkbox, { checked: isBallPoint, name: "ballpoint", onChange: function () { return setIsBallPoint(!isBallPoint); }, disabled: value === "no" }),
                react_1["default"].createElement("span", null, "\u30DC\u30FC\u30EB\u30DA\u30F3"),
                react_1["default"].createElement(core_1.Checkbox, { checked: isMarker, name: "marker", onChange: function () { return setIsMarker(!isMarker); }, disabled: value === "no" }),
                react_1["default"].createElement("span", null, "\u86CD\u5149\u30DA\u30F3")))));
};
exports["default"] = IsWritten;
