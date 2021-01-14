"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var PriceCut = function (props) {
    var _a = react_1.useState(false), isPriceCut = _a[0], setIsPriceCut = _a[1];
    var priceCutText = isPriceCut
        ? "値下げ交渉OKです。\n\n"
        : "値下げ交渉NGです。\n\n";
    var handlePriceCut = function () {
        setIsPriceCut(!isPriceCut);
    };
    react_1.useEffect(function () {
        props.setPriceCutText(priceCutText);
    }, [isPriceCut]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u5024\u4E0B\u3052\u4EA4\u6E09\u3092\u3046\u3051\u3064\u3051\u307E\u3059\u304B\uFF1F"),
        isPriceCut ? (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: handlePriceCut }, "OK")) : (react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: handlePriceCut }, "NG"))));
};
exports["default"] = PriceCut;
