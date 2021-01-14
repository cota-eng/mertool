"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var IconButton_1 = require("@material-ui/core/IconButton");
var Menu_1 = require("@material-ui/icons/Menu");
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
        react_1["default"].createElement(AppBar_1["default"], { position: "static" },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(IconButton_1["default"], { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "menu" },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", className: classes.title }, "News"),
                react_1["default"].createElement(Button_1["default"], { color: "inherit" }, "Login")))));
}
exports["default"] = ButtonAppBar;
