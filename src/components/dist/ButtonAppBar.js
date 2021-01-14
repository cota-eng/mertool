"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var GitHub_1 = require("@material-ui/icons/GitHub");
var Twitter_1 = require("@material-ui/icons/Twitter");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    });
});
function ButtonAppBar() {
    var classes = useStyles();
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "default" },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(Button_1["default"], { href: "https://twitter.com/share?ref_src=twsrc%5Etfw" },
                    react_1["default"].createElement(Twitter_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", className: classes.title }, "\u8AAC\u660E\u6587\u30E1\u30FC\u30AB\u30FC"),
                react_1["default"].createElement(Button_1["default"], { target: "_blank", href: "https://github.com/cota-eng/mertool" },
                    react_1["default"].createElement(GitHub_1["default"], null))))));
}
exports["default"] = ButtonAppBar;
