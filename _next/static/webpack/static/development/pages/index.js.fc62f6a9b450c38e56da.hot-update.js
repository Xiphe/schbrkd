webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button/button.tsx":
/*!**************************************!*\
  !*** ./components/button/button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/button/button.tsx";



function Button(_ref) {
  var secondary = _ref.secondary,
      children = _ref.children,
      href = _ref.href;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.button, secondary && _button_css__WEBPACK_IMPORTED_MODULE_1___default.a.secondary),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children);
}

/***/ }),

/***/ "./components/buttonGroup/buttonGroup.tsx":
/*!************************************************!*\
  !*** ./components/buttonGroup/buttonGroup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonGroup.css */ "./components/buttonGroup/buttonGroup.css");
/* harmony import */ var _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttonGroup_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ "./components/button/button.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/buttonGroup/buttonGroup.tsx";



function ButtonGroup(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1___default.a.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: i.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, i.label);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.fc62f6a9b450c38e56da.hot-update.js.map