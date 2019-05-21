webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./lib/api.tsx");
/* harmony import */ var _components_frame_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/frame/frame */ "./components/frame/frame.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_headline_headline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _components_spacer_spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/spacer/spacer */ "./components/spacer/spacer.tsx");
/* harmony import */ var _components_buttongroup_buttongroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/buttongroup/buttongroup */ "./components/buttongroup/buttongroup.tsx");
/* harmony import */ var _components_richtext_richtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/richtext/richtext */ "./components/richtext/richtext.tsx");
/* harmony import */ var _components_team_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/team/team */ "./components/team/team.tsx");
/* harmony import */ var _components_contactaction_contactaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contactaction/contactaction */ "./components/contactaction/contactaction.tsx");
/* harmony import */ var _components_subline_subline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/subline/subline */ "./components/subline/subline.tsx");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/list/list */ "./components/list/list.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/pages/index.tsx";












var teamData = [{
  img: '/static/lasse.jpg',
  role: 'Design',
  name: 'Lasse Diercks',
  description: 'Seit 9 Jahren Erfahrung mit der benutzergerechten Gestaltung von Oberflächen. Von UX bis zur technischen Umsetzung.'
}, {
  img: '/static/hannes.jpg',
  role: 'Entwicklung',
  name: 'Hannes Diercks',
  description: 'Entwickelt seit 10 Jahren Web basierte Applikationen. Am liebsten in JavaScript und ohne Server. In stabil und mit bedachter Developer Experience.'
}];
function Index(p) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_frame_frame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: p.pageTitle,
    description: p.pageDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline_headline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerHeadline,
    level: 1,
    isRichText: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, p.headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_subline_subline__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, p.pageDescription)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttongroup_buttongroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: p.headerbuttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logos, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_richtext_richtext__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.mission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, p.missionText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contactaction_contactaction__WEBPACK_IMPORTED_MODULE_9__["default"], {
    headline: "Habt ihr eine Idee, die wir zum Leben erwecken sollen?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacer_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_team_team__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: teamData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_11__["default"], {
    headline: "Referenzen",
    data: p.references,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })));
}

Index.getInitialProps = function () {
  return Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__["default"])('Startpage');
};

/***/ })

})
//# sourceMappingURL=index.js.42774184467e350c45d2.hot-update.js.map