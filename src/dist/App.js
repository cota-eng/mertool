"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var IsPet_1 = require("./components/IsPet");
var IsTobacco_1 = require("./components/IsTobacco");
var PriceCut_1 = require("./components/PriceCut");
var core_1 = require("@material-ui/core");
var IsNew_1 = require("./components/IsNew");
var App = function () {
    var _a = react_1.useState("aaa"), petText = _a[0], setPetText = _a[1];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(IsPet_1["default"], { PetText: petText }),
        react_1["default"].createElement(IsTobacco_1["default"], null),
        react_1["default"].createElement(PriceCut_1["default"], null),
        react_1["default"].createElement(IsNew_1["default"], null),
        react_1["default"].createElement(core_1.Button, null, "CREATE")));
};
exports["default"] = App;
