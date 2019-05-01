webpackHotUpdate("static/development/pages/arbeitsweise.js",{

/***/ "./components/buttongroup/buttonGroup.tsx":
/*!************************************************!*\
  !*** ./components/buttongroup/buttonGroup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonGroup.css */ "./components/buttongroup/buttonGroup.css");
/* harmony import */ var _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttonGroup_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ "./components/button/button.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/buttongroup/buttonGroup.tsx";



function ButtonGroup(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _buttonGroup_css__WEBPACK_IMPORTED_MODULE_1___default.a.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: i.href,
      secondary: i.secondary,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, i.label);
  }));
}

/***/ }),

/***/ "./components/buttongroup/buttongroup.tsx":
false,

/***/ "./components/contactaction/contactaction.tsx":
/*!****************************************************!*\
  !*** ./components/contactaction/contactaction.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headline_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _buttongroup_buttonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttongroup/buttonGroup */ "./components/buttongroup/buttonGroup.tsx");
/* harmony import */ var _contactaction_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactaction.css */ "./components/contactaction/contactaction.css");
/* harmony import */ var _contactaction_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contactaction_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/contactaction/contactaction.tsx";




var buttons = [{
  label: 'Anrufen',
  href: 'tel:004915734376122'
}, {
  label: 'Anschreiben',
  href: 'mailto:contact@schubrake.de',
  secondary: true
}];
function ContactAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _contactaction_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _contactaction_css__WEBPACK_IMPORTED_MODULE_3___default.a.headline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Habt ihr eine Idee die wir mal besprechen sollten?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttongroup_buttonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=arbeitsweise.js.228b13294f2339290800.hot-update.js.map