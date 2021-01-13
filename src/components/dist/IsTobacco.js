"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var IsTobacco = function () {
    var _a = react_1.useState(false), isTobacco = _a[0], setIsTobacco = _a[1];
    var handleIsTobacco = function () {
        setIsTobacco(!isTobacco);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u540C\u5C45\u4EBA\u3092\u542B\u3081\u3001\u30BF\u30D0\u30B3\u3092\u5438\u3063\u3066\u308B\u4EBA\u306F\u3044\u307E\u3059\u304B\uFF1F"),
        isTobacco ? (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handleIsTobacco }, "YES")) : (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: handleIsTobacco }, "NO"))));
};
exports["default"] = IsTobacco;
