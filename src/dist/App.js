"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var PetDetail_1 = require("./components/PetDetail");
var TobaccoDetail_1 = require("./components/TobaccoDetail");
var PriceCut_1 = require("./components/PriceCut");
var App = function () {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(PetDetail_1["default"], null),
        react_1["default"].createElement(TobaccoDetail_1["default"], null),
        react_1["default"].createElement(PriceCut_1["default"], null)));
};
exports["default"] = App;