"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    hideText: {
        opacity: 0.5
    }
});
var IsPet = function (props) {
    var _a = react_1.useState(true), isPet = _a[0], setIsPet = _a[1];
    var _b = react_1.useState(false), isDog = _b[0], setIsDog = _b[1];
    var _c = react_1.useState(false), isCat = _c[0], setIsCat = _c[1];
    var _d = react_1.useState(false), isOthers = _d[0], setIsOthers = _d[1];
    var _e = react_1.useState(""), otherPet = _e[0], setOtherPet = _e[1];
    var _f = react_1.useState("No"), petText = _f[0], setPetText = _f[1];
    var classes = useStyles();
    //   const OtherPetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //   };
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
    react_1.useEffect(function () { }, [isPet, isDog, isCat, isOthers]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "\u90E8\u5C4B\u306E\u4E2D\u3067\u30DA\u30C3\u30C8\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isPet, name: "nothing", onChange: function () { return setIsPet(!isPet); } }),
        react_1["default"].createElement("a", { className: !isPet ? classes.hideText : "" }, "\u306A\u3057\u3000"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isDog, name: "dog", onChange: function () { return setIsDog(!isDog); }, disabled: isPet }),
        react_1["default"].createElement("a", { className: isPet ? classes.hideText : "" }, "\u72AC\u3000\u3000"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isCat, name: "cat", onChange: function () { return setIsCat(!isCat); }, disabled: isPet }),
        react_1["default"].createElement("a", { className: isPet ? classes.hideText : "" }, "\u732B\u3000\u3000"),
        react_1["default"].createElement(core_1.Checkbox, { name: "others", checked: isOthers, onChange: function () { return setIsOthers(!isOthers); }, disabled: isPet }),
        react_1["default"].createElement("a", { className: isPet ? classes.hideText : "" }, "\u305D\u306E\u4ED6\u3000\u3000"),
        react_1["default"].createElement("br", null),
        isOthers ? (react_1["default"].createElement(core_1.TextField, { id: "outlined-basic", label: "Animal", variant: "outlined", value: otherPet, onChange: function (e) {
                setOtherPet(e.target.value);
            } })) : ("")));
};
exports["default"] = IsPet;
