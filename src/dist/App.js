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
var ButtonAppBar_1 = require("./components/ButtonAppBar");
var Grid_1 = require("@material-ui/core/Grid");
var Box_1 = require("@material-ui/core/Box");
var App = function () {
    var overallTextRef = react_1.useRef(null);
    var _a = react_1.useState(""), isPetText = _a[0], setIsPetText = _a[1];
    var _b = react_1.useState(""), isNewText = _b[0], setIsNewText = _b[1];
    var _c = react_1.useState(""), isTabaccoText = _c[0], setIsTabaccoText = _c[1];
    var _d = react_1.useState(""), isDamagedText = _d[0], setIsDamagedText = _d[1];
    var _e = react_1.useState(""), isWrittenText = _e[0], setIsWrittenText = _e[1];
    var _f = react_1.useState(""), isWrittenToolText = _f[0], setIsWrittenToolText = _f[1];
    var _g = react_1.useState(""), priceCutText = _g[0], setPriceCutText = _g[1];
    var _h = react_1.useState(""), overallText = _h[0], setOverallText = _h[1];
    var copyToClipboard = function () {
        overallTextRef.current.select();
        document.execCommand("copy");
    };
    react_1.useEffect(function () {
        copyToClipboard();
    }, []);
    var clickedCreateText = function () {
        setOverallText("【値下げ交渉について】\n\n" +
            priceCutText +
            "【商品の状態について】\n\n" +
            isNewText +
            isDamagedText +
            isWrittenText +
            isWrittenToolText +
            "【アレルギーについて】\n\n" +
            isPetText +
            isTabaccoText);
    };
    //   useEffect(
    //     () => {
    //   setOverallText(
    //     priceCutText +
    //       isNewText +
    //       isPetText +
    //       isTabaccoText +
    //       isDamagedText +
    //       isWrittenText
    //   );
    //     },
    //     [
    // priceCutText,
    // isPetText,
    // isNewText,
    // isTabaccoText,
    // isDamagedText,
    // isWrittenText,
    //     ]
    //   );
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(ButtonAppBar_1["default"], null),
        react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", justify: "space-between", alignItems: "center" },
            react_1["default"].createElement("p", null, "\u751F\u6210\u3055\u308C\u308B\u6587\u7AE0\u306F\u4E01\u5BE7\u8A9E\u3067\u3059\u3002\u3054\u5B89\u5FC3\u304F\u3060\u3055\u3044\u3002"),
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(PriceCut_1["default"], { setPriceCutText: setPriceCutText })),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(IsNew_1["default"], { setIsNewText: setIsNewText })),
            react_1["default"].createElement(IsDamaged_1["default"], { setIsDamagedText: setIsDamagedText }),
            react_1["default"].createElement(IsWritten_1["default"], { setIsWrittenText: setIsWrittenText, setIsWrittenToolText: setIsWrittenToolText }),
            react_1["default"].createElement(IsPet_1["default"], { setIsPetText: setIsPetText }),
            react_1["default"].createElement(IsTobacco_1["default"], { setIsTabaccoText: setIsTabaccoText }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { multiline: true, variant: "outlined", margin: "normal", value: overallText, inputRef: overallTextRef, placeholder: "生成ボタンを押してください。", fullWidth: true }),
            react_1["default"].createElement(Box_1["default"], { component: "span", m: 1 },
                react_1["default"].createElement(core_1.Button, { variant: "outlined", onClick: clickedCreateText, color: "primary" }, "\u751F\u6210")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.Button, { onClick: copyToClipboard }, "COPY"),
            react_1["default"].createElement(core_1.Button, null, "\u30E1\u30EB\u30AB\u30EA\u3092\u958B\u304F"))));
};
exports["default"] = App;
