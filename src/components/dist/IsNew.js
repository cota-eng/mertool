"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var Grid_1 = require("@material-ui/core/Grid");
var IsNew = function (props) {
    var handleIsNew = function () {
        setIsNew(!isNew);
    };
    var _a = react_1.useState(true), isNew = _a[0], setIsNew = _a[1];
    var isNewText = isNew
        ? "新品で購入した本です。\n\n"
        : "新品で購入したものではありません。\n\n";
    react_1.useEffect(function () {
        props.setIsNewText(isNewText);
    }, [isNew]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement("span", null, "Q2:\u65B0\u54C1\u3067\u8CFC\u5165\u3057\u305F\u3082\u306E\u3067\u3059\u304B\uFF1F"),
                isNew ? (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handleIsNew, size: "small" }, "YES")) : (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: handleIsNew, size: "small" }, "NO"))))));
};
exports["default"] = IsNew;
