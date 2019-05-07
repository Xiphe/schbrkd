webpackHotUpdate("static/development/pages/datenschutz.js",{

/***/ "./components/frame/frame.tsx":
/*!************************************!*\
  !*** ./components/frame/frame.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame.css */ "./components/frame/frame.css");
/* harmony import */ var _frame_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_frame_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sections_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sections/footer/footer */ "./sections/footer/footer.tsx");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background */ "./components/frame/background.tsx");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logo */ "./components/logo.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/frame/frame.tsx";








function Frame(p) {
  var title = "".concat(p.title, " \uD83D\uDE80 ").concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].title);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_frame_css__WEBPACK_IMPORTED_MODULE_1___default.a.frame, p.singlePage && _frame_css__WEBPACK_IMPORTED_MODULE_1___default.a.singlePage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "preload",
    href: "https://use.typekit.net/uaf4juj.css",
    as: "style",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: p.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: p.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: p.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "/static/open-graph.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: _config__WEBPACK_IMPORTED_MODULE_2__["default"].baseUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:site_name",
    content: _config__WEBPACK_IMPORTED_MODULE_2__["default"].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: _config__WEBPACK_IMPORTED_MODULE_2__["default"].twitterName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image:width",
    content: "750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: p.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image:height",
    content: "560",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _frame_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoContainer,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _frame_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_7__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), p.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_background__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/logo.tsx":
/*!*****************************!*\
  !*** ./components/logo.tsx ***!
  \*****************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/logo.tsx";

var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 2122.5 339.9",
    xmlSpace: "preserve",
    enableBackground: "new 0 0 2122.5 339.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 170l120.3 116.3c69.9 69.7 182.1 71.9 250 4.2 31.1-31 49.6-78.9 49-120.5H0z",
    fillRule: "evenodd",
    "clip-Rule": "evenodd",
    fill: "#D44739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M339.9 170c.5 23.7-8 51.7-23.6 69.9-36.7 42.6-98.7 42.7-137.4 1L113.3 170h226.6z",
    fillRule: "evenodd",
    "clip-Rule": "evenodd",
    fill: "#F7BC4B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 170L120.3 53.7c69.9-69.7 182.1-71.9 250-4.2 31.1 31 49.6 78.9 49 120.5H0z",
    fillRule: "evenodd",
    "clip-Rule": "evenodd",
    fill: "#ED7562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M339.9 170c.5-23.7-8-51.7-23.6-69.9-36.7-42.6-98.7-42.7-137.4-1L113.3 170h226.6z",
    fillRule: "evenodd",
    "clip-Rule": "evenodd",
    fill: "#F5CA54",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    enableBackground: "new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#343637",
    d: "M575 161.8c25.8 5.1 39.5 16.8 39.5 37.1 0 25.3-20.2 38.8-51.7 38.8-18.4 0-36.5-3.7-48.7-9.7l3-19.2c11.9 6.1 28.5 9.7 44.2 9.7 20.8 0 32.1-6.5 32.1-18.5 0-11.6-10-16.5-28.3-20l-16.9-3.4c-21.5-4.2-35.3-15.6-35.3-35.6 0-23.1 20.4-38.5 52.7-38.5 15.7 0 31.5 3 41.7 7.2l-2.7 18.8c-10.5-4.2-24.9-6.9-37.6-6.9-21.1 0-32.7 7-32.7 18.9 0 11.2 8.9 15.1 27.2 18.7l13.5 2.6zM711.2 102.4c17.6 0 32.6 5.1 39 8.7l-2.3 19.3c-8.7-4.2-21.6-7.8-36.7-7.8-30.4 0-51.3 19.1-51.3 47.1 0 28.3 21 47.9 51.5 47.9 13.1 0 27.9-3.4 37.5-8.3l3.5 19.6c-11.5 5.1-26.6 8.8-41 8.8-43.6 0-73.3-27.6-73.3-68 0-40 29.7-67.3 73.1-67.3zM904.4 156v79H883v-73.7c0-25.3-13.3-38.5-36.5-38.5-22.2 0-40.2 15.3-40.2 39V235h-21.5V44.5h21.6v80.1c7.3-12 22.7-22.2 43.4-22.2 34.1 0 54.6 20.2 54.6 53.6zM945.7 184.2v-79.1h21.4V179c0 25.3 13.1 38.4 36.2 38.4 22.5 0 40.2-15.1 40.2-38.8v-73.4h21.5V235h-21.5v-19.5c-7.3 12.2-22.6 22.2-43.6 22.2-33.8 0-54.2-20.2-54.2-53.5zM1109.9 235V44.5h21.5v82c9.7-13.9 26.8-24.1 50-24.1 37.2 0 65.5 28.4 65.5 67.4s-28.3 67.9-65.5 67.9c-23.3 0-40.3-10-50-23.8V235h-21.5zm115.6-65.2c0-26.9-19.2-47.9-46.3-47.9-27.7 0-48.2 21-48.2 47.9 0 26.8 20.4 48.4 48.2 48.4 27.1 0 46.3-21.7 46.3-48.4zM1303.6 124.3c7.3-15 20.2-21.9 35-21.9 9.2 0 16 2.3 18.4 3.4l-2.2 19.9c-3.7-1.4-8.7-3.2-17-3.2-17.3 0-34.2 11.4-34.2 40.4V235H1282V105.1h21.6v19.2zM1464.9 235v-20.7c-9.6 14.6-27.1 23.4-46.1 23.4-26.9 0-45.3-14.2-45.3-37.9 0-25.2 22.5-39.6 57.5-39.6 13.4 0 25.4 2.3 33.1 4.6v-10.1c0-20.7-13.1-32.3-38.3-32.3-14.1 0-31.4 4.1-42.1 10l-2.3-19.3c11.5-6.2 29.9-10.5 45.6-10.5 39.2 0 58.4 18.8 58.4 52.2V235h-20.5zm-.8-47.1v-7.4c-8.4-2.3-18.4-4.5-33.8-4.5-21.9 0-36 8.1-36 23 0 14.1 11.1 21.8 26.9 21.8 22.2 0 40.2-15.1 42.9-32.9zM1528.6 44.5h21.5v114h27.7l34.9-53.4h23.9l-42.1 63.3 48.8 66.5h-25.2l-41.8-57.9h-26.4v58h-21.5V44.5h.2zM1776.3 225c-15.1 8.8-31.5 12.7-49 12.7-43.7 0-73.8-27.6-73.8-67.6 0-38.7 27.9-67.5 66.8-67.5 44 0 68.8 35.4 61.8 75.3h-106.2c3.7 25.6 25.3 39.6 50.4 39.6 15.1 0 28.7-2.6 46.1-12l3.9 19.5zm-13.8-64.7c-1.5-22.2-16.8-38.1-41.5-38.1-24.5 0-42.5 16-44.5 38.1h86zM1923.9 213.9c-9.7 13.8-26.8 23.8-50 23.8-37.2 0-65.5-28.9-65.5-67.9s28.3-67.4 65.5-67.4c23.3 0 40.3 10.1 50 24.1v-82h21.5V235h-21.5v-21.1zm.2-44.1c0-26.9-20.4-47.9-48.2-47.9-27.1 0-46.3 21-46.3 47.9 0 26.8 19.2 48.4 46.3 48.4 27.8 0 48.2-21.7 48.2-48.4zM2103.1 225c-15.1 8.8-31.5 12.7-49 12.7-43.7 0-73.8-27.6-73.8-67.6 0-38.7 27.9-67.5 66.8-67.5 44 0 68.8 35.4 61.8 75.3h-106.2c3.7 25.6 25.3 39.6 50.4 39.6 15.1 0 28.7-2.6 46.1-12l3.9 19.5zm-13.8-64.7c-1.5-22.2-16.8-38.1-41.5-38.1-24.5 0-42.5 16-44.5 38.1h86z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=datenschutz.js.296a787c067975d0ac1b.hot-update.js.map