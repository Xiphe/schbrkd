webpackHotUpdate("static/development/pages/arbeitsweise.js",{

/***/ "./components/contactaction/contactaction.tsx":
/*!****************************************************!*\
  !*** ./components/contactaction/contactaction.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return COMPONENT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.css */ "./components/contactaction/component.css");
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/contactaction/contactaction.tsx";


function COMPONENT(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _component_css__WEBPACK_IMPORTED_MODULE_1___default.a.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
}

/***/ }),

/***/ "./pages/arbeitsweise.tsx":
/*!********************************!*\
  !*** ./pages/arbeitsweise.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arbeitsweise; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./lib/api.tsx");
/* harmony import */ var _components_headline_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _components_subline_subline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/subline/subline */ "./components/subline/subline.tsx");
/* harmony import */ var _components_howwework_howwework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/howwework/howwework */ "./components/howwework/howwework.tsx");
/* harmony import */ var _components_frame_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/frame/frame */ "./components/frame/frame.tsx");
/* harmony import */ var _components_contactaction_contactaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contactaction/contactaction */ "./components/contactaction/contactaction.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/pages/arbeitsweise.tsx";







function Arbeitsweise(data) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_frame_frame__WEBPACK_IMPORTED_MODULE_5__["default"], {
    singlePage: true,
    title: data.pageTitle,
    description: data.pageDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.pageTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_subline_subline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.pageDescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_howwework_howwework__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.howWeWork,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contactaction_contactaction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
}

Arbeitsweise.getInitialProps = function () {
  return Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__["default"])('Arbeitsweise');
};

/***/ })

})
//# sourceMappingURL=arbeitsweise.js.43b13d66f5626e14711b.hot-update.js.map