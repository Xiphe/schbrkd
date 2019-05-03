webpackHotUpdate("static/development/pages/arbeitsweise.js",{

/***/ "./components/howwework/howwework.tsx":
/*!********************************************!*\
  !*** ./components/howwework/howwework.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HowWeWork; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headline_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _howwework_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./howwework.css */ "./components/howwework/howwework.css");
/* harmony import */ var _howwework_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_howwework_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/howwework/howwework.tsx";




var WorkItem = function WorkItem(_ref) {
  var headline = _ref.headline,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _howwework_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children));
};

function HowWeWork(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkItem, {
      headline: i.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, i.description);
  }));
}

/***/ })

})
//# sourceMappingURL=arbeitsweise.js.fdd127324c77c3b6ad99.hot-update.js.map