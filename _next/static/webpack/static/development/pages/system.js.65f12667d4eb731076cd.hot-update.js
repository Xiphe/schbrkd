webpackHotUpdate("static/development/pages/system.js",{

/***/ "./components/featurelist/featurelist.tsx":
/*!************************************************!*\
  !*** ./components/featurelist/featurelist.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featurelist_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featurelist.css */ "./components/featurelist/featurelist.css");
/* harmony import */ var _featurelist_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_featurelist_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headline_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paragraph/paragraph */ "./components/paragraph/paragraph.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/featurelist/featurelist.tsx";





function Tool(_ref) {
  var headline = _ref.headline,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headline_headline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    level: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children));
}

function FeatureList(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _featurelist_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tool, {
      key: i.headline,
      headline: i.headline,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, i.text);
  }));
}

/***/ }),

/***/ "./pages/system.tsx":
/*!**************************!*\
  !*** ./pages/system.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return System; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headline_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _components_label_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/label/label */ "./components/label/label.tsx");
/* harmony import */ var _components_paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph/paragraph */ "./components/paragraph/paragraph.tsx");
/* harmony import */ var _components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/spacer/spacer */ "./components/spacer/spacer.tsx");
/* harmony import */ var _components_link_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/link/link */ "./components/link/link.tsx");
/* harmony import */ var _components_featurelist_featurelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/featurelist/featurelist */ "./components/featurelist/featurelist.tsx");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button/button */ "./components/button/button.tsx");
/* harmony import */ var _components_frame_frame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/frame/frame */ "./components/frame/frame.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/pages/system.tsx";









function System() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_frame_frame__WEBPACK_IMPORTED_MODULE_8__["default"], {
    singlePage: true,
    title: "Design System",
    description: "Die Komponenten unserer Seite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Design System"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Das sind die Komponenten mit denen wir diese Webseite zum leben erwecken"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_label_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Headlines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Die erste Headline ist wichtigste und sollte nur einmal pro Seite existieren"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Die Zweite Headline wird f\xFCr Bereiche genutzt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Ich bin eine Headline nummero 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Ich bin eine Headline nummero 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_label_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Paragraph"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Ein Paragraph ist in der Lage einen l\xE4ngeren Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi amet ipsa earum ex facilis ad porro quibusdam, blanditiis repellendus impedit, in sunt aliquam delectus libero? Sequi natus minus dolorum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_label_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Buttons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Ich bin ein Primary Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Ich bin ein Secondary Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_label_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Link"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_link_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "schubrake.de",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Ich bin ein klassischer anchor Link"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_label_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Feature List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_featurelist_featurelist__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: featureListdata,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=system.js.65f12667d4eb731076cd.hot-update.js.map