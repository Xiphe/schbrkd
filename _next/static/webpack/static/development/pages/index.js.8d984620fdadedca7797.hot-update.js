webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/buttongroup/buttongroup.tsx":
/*!************************************************!*\
  !*** ./components/buttongroup/buttongroup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttongroup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttongroup.css */ "./components/buttongroup/buttongroup.css");
/* harmony import */ var _buttongroup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttongroup_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ "./components/button/button.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/buttongroup/buttongroup.tsx";



function ButtonGroup(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _buttongroup_css__WEBPACK_IMPORTED_MODULE_1___default.a.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: i.href,
      key: i.label,
      secondary: i.secondary,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, i.label);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.8d984620fdadedca7797.hot-update.js.map