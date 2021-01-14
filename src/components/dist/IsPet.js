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
    //   const [petText, setPetText] = useState<string>("");
    // const petText = "";
    var classes = useStyles();
    react_1.useEffect(function () {
        if (!isDog && !isCat && !isOthers) {
            props.setIsPetText("ペットは飼っていません。\n\n");
        }
        else if (!isPet && isDog && !isCat && !isOthers) {
            props.setIsPetText("犬を飼っています。\n\n");
        }
        else if (!isPet && !isDog && isCat && !isOthers) {
            props.setIsPetText("猫を飼っています。\n\n");
        }
        else if (!isPet && !isDog && !isCat && isOthers) {
            props.setIsPetText(otherPet + "\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u3002\n\n");
        }
        else if (!isPet && isDog && isCat && !isOthers) {
            props.setIsPetText("犬と猫を飼っています。\n\n");
        }
        else if (!isPet && isDog && !isCat && isOthers) {
            props.setIsPetText("\u72AC\u3068" + otherPet + "\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u3002\n\n");
        }
        else if (!isPet && !isDog && isCat && isOthers) {
            props.setIsPetText("\u732B\u3068" + otherPet + "\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u3002\n\n");
        }
        else if (!isPet && isDog && isCat && isOthers) {
            props.setIsPetText("\u72AC\u3068\u732B\u3068" + otherPet + "\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u3002\n\n");
        }
    }, [isPet, isDog, isCat, otherPet, isOthers, props]);
    react_1.useEffect(function () {
        if (isPet === true) {
            setIsDog(false);
            setIsCat(false);
            setIsOthers(false);
        }
        else if (isDog === true || isCat === true || isOthers === true) {
            setIsPet(false);
        }
        // else if (isDog === false && isCat === false && isOthers === false) {
        //   setIsPet(true);
        // }
    }, [isPet, isDog, isCat, isOthers]);
    var otherPetHandler = function (e) {
        e.preventDefault();
        setOtherPet(e.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "Q1:\u90E8\u5C4B\u306E\u4E2D\u3067\u30DA\u30C3\u30C8\u3092\u98FC\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isPet, name: "nothing", onChange: function () { return setIsPet(!isPet); } }),
        react_1["default"].createElement("span", null, "\u3044\u3044\u3048"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isDog, name: "dog", onChange: function () { return setIsDog(!isDog); }, disabled: isPet }),
        react_1["default"].createElement("span", { className: isPet ? classes.hideText : "" }, "\u72AC"),
        react_1["default"].createElement(core_1.Checkbox, { checked: isCat, name: "cat", onChange: function () { return setIsCat(!isCat); }, disabled: isPet }),
        react_1["default"].createElement("span", { className: isPet ? classes.hideText : "" }, "\u732B"),
        react_1["default"].createElement(core_1.Checkbox, { name: "others", checked: isOthers, onChange: function () { return setIsOthers(!isOthers); }, disabled: isPet }),
        react_1["default"].createElement("span", { className: isPet ? classes.hideText : "" }, "\u305D\u306E\u4ED6"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(core_1.TextField, { id: "outlined-basic", label: "Animal", variant: "outlined", value: otherPet, onChange: otherPetHandler, disabled: !isOthers })));
};
exports["default"] = IsPet;
