webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./lib/api.tsx");
/* harmony import */ var _components_headline_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _components_richtext_richtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/richtext/richtext */ "./components/richtext/richtext.tsx");
/* harmony import */ var _components_frame_frame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/frame/frame */ "./components/frame/frame.tsx");
/* harmony import */ var _blog_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.css */ "./pages/blog.css");
/* harmony import */ var _blog_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blog_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/pages/blog.tsx";






function Blog(data) {
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_frame_frame__WEBPACK_IMPORTED_MODULE_4__["default"], {
    singlePage: true,
    title: "Funkstelle",
    description: data.pageDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _blog_css__WEBPACK_IMPORTED_MODULE_5___default.a.BlogWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, data.items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i.headline,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _blog_css__WEBPACK_IMPORTED_MODULE_5___default.a.BlogHeadline,
      level: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, i.headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_richtext_richtext__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _blog_css__WEBPACK_IMPORTED_MODULE_5___default.a.BlogRT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, i.content));
  })));
}

Blog.getInitialProps = function () {
  return Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__["default"])('Blog');
};

/***/ })

})
//# sourceMappingURL=blog.js.6f298b018c47708c904a.hot-update.js.map