"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var IsPet_1 = require("./components/IsPet");
var IsTobacco_1 = require("./components/IsTobacco");
var PriceCut_1 = require("./components/PriceCut");
var core_1 = require("@material-ui/core");
var IsNew_1 = require("./components/IsNew");
var IsDamaged_1 = require("./components/IsDamaged");
var IsWritten_1 = require("./components/IsWritten");
var App = function () {
    var _a = react_1.useState(""), isPetText = _a[0], setIsPetText = _a[1];
    var _b = react_1.useState(""), isNewText = _b[0], setIsNewText = _b[1];
    var _c = react_1.useState(""), isTabaccoText = _c[0], setIsTabaccoText = _c[1];
    var _d = react_1.useState(""), priceCutText = _d[0], setPriceCutText = _d[1];
    var _e = react_1.useState(""), overallText = _e[0], setOverallText = _e[1];
    react_1.useEffect(function () {
        setOverallText(priceCutText + isNewText + isPetText + isTabaccoText);
    }, [priceCutText, isPetText, isNewText, isTabaccoText]);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(IsPet_1["default"], { setIsPetText: setIsPetText }),
        react_1["default"].createElement(IsTobacco_1["default"], { setIsTabaccoText: setIsTabaccoText }),
        react_1["default"].createElement(PriceCut_1["default"], { setPriceCutText: setPriceCutText }),
        react_1["default"].createElement(IsNew_1["default"], { setIsNewText: setIsNewText }),
        react_1["default"].createElement(IsDamaged_1["default"], null),
        react_1["default"].createElement(IsWritten_1["default"], null),
        react_1["default"].createElement(core_1.TextField, { multiline: true, variant: "outlined", margin: "normal", rows: 10, value: overallText }),
        react_1["default"].createElement(core_1.Button, null, "CREATE")));
};
exports["default"] = App;
