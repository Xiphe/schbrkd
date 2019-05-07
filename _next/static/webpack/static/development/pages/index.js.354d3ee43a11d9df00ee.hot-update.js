webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/team/team.tsx":
/*!**********************************!*\
  !*** ./components/team/team.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _team_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.css */ "./components/team/team.css");
/* harmony import */ var _team_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_team_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headline_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../headline/headline */ "./components/headline/headline.tsx");
/* harmony import */ var _paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paragraph/paragraph */ "./components/paragraph/paragraph.tsx");
var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/team/team.tsx";





var TeamMember = function TeamMember(_ref) {
  var role = _ref.role,
      img = _ref.img,
      name = _ref.name,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.member,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.memberImg,
    style: {
      backgroundImage: "url(".concat(img)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headline_headline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    level: 3,
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.memberName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.role,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_paragraph_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.memberDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children)));
};

function Team(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _team_css__WEBPACK_IMPORTED_MODULE_1___default.a.team,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeamMember, {
      role: i.role,
      key: i.name,
      img: "".concat(i.img),
      name: i.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, i.description);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.354d3ee43a11d9df00ee.hot-update.js.map