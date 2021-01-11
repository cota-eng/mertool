"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var IsPet = function () {
    var _a = react_1.useState(true), isPet = _a[0], setIsPet = _a[1];
    var _b = react_1.useState(false), isDog = _b[0], setIsDog = _b[1];
    var _c = react_1.useState(false), isCat = _c[0], setIsCat = _c[1];
    var _d = react_1.useState(false), isOthers = _d[0], setIsOthers = _d[1];
    var _e = react_1.useState(""), otherPet = _e[0], setOtherPet = _e[1];
    //   const PethandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setIsPet(event.target.value);
    //   };
    var OtherPetHandler = function (e) {
        e.preventDefault();
    };
    react_1.useEffect(function () {
        if (isPet === true) {
            setIsDog(false);
            setIsCat(false);
            setIsOthers(false);
        }
        else if (isDog === true || isCat === true || isOthers === true) {
            setIsPet(false);
        }
    }, [isPet, isDog, isCat, isOthers]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(core_1.FormControl, { component: "fieldset" },
            react_1["default"].createElement(core_1.FormLabel, { component: "legend" }, "\u30DA\u30C3\u30C8\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
            react_1["default"].createElement(core_1.FormGroup, null,
                react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { checked: isPet, name: "nothing", onChange: function () { return setIsPet(!isPet); } }), label: "\u306A\u3057" }),
                react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { checked: isDog, name: "dog", onChange: function () { return setIsDog(!isDog); } }), label: "\u72AC" }),
                react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { checked: isCat, name: "cat", onChange: function () { return setIsCat(!isCat); } }), label: "\u732B" }),
                react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { name: "others", onChange: function () { return setIsDog(!isOthers); } }), label: "\u305D\u306E\u4ED6" }),
                isOthers ? (react_1["default"].createElement(core_1.TextField, { id: "outlined-basic", label: "Outlined", variant: "outlined" })) : ("")))));
};
exports["default"] = IsPet;
