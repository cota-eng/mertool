"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var PriceCut = function () {
    var _a = react_1.useState(false), isPriceCut = _a[0], setIsPriceCut = _a[1];
    var handlePriceCut = function () {
        setIsPriceCut(!isPriceCut);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u5024\u4E0B\u3052\u4EA4\u6E09"),
        isPriceCut ? (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handlePriceCut }, "OK")) : (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: handlePriceCut }, "NG"))));
};
exports["default"] = PriceCut;
