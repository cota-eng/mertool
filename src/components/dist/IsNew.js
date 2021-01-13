"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var IsNew = function () {
    var handleIsNew = function () {
        setIsNew(!isNew);
    };
    var _a = react_1.useState(true), isNew = _a[0], setIsNew = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u65B0\u520A\u8CFC\u5165\u3057\u305F\u3082\u306E\u3067\u3059\u304B\uFF1F"),
        isNew ? (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handleIsNew }, "YES")) : (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: handleIsNew }, "NO"))));
};
exports["default"] = IsNew;
