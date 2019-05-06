webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/frame/background.tsx":
/*!*****************************************!*\
  !*** ./components/frame/background.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _frame_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frame.css */ "./components/frame/frame.css");
/* harmony import */ var _frame_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_frame_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/lasse/checkouts/schubrake.de/web/components/frame/background.tsx";



var sizeClasses = ['small', 'medium', 'big'];
var colorClasses = [_frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.green, _frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.orange, _frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.teal];
var directions = ['normal', 'reverse'];

function Ball(_ref) {
  var color = _ref.color,
      size = _ref.size,
      positionX = _ref.positionX,
      positionY = _ref.positionY,
      opacity = _ref.opacity,
      duration = _ref.duration,
      direction = _ref.direction;
  var style = {
    top: "".concat(positionY, "px"),
    left: "".concat(positionX, "px"),
    opacity: opacity,
    animationDuration: "".concat(duration, "ms"),
    animationDirection: directions[direction]
  };
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.ball, sizeClasses[size], colorClasses[color]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getAnimationDuration(max) {
  var min = 40;
  var maxAmount = Math.floor(max);
  return Math.floor(Math.random() * (maxAmount - min)) + min;
}

var AnimatedBackground =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimatedBackground, _React$Component);

  function AnimatedBackground(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnimatedBackground);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimatedBackground).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "opacity", getRandomInt(100) / 100);

    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimatedBackground, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.width && !this.state.height) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.bgWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _frame_css__WEBPACK_IMPORTED_MODULE_9___default.a.bg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(200).keys()).map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Ball, {
          key: i,
          direction: getRandomInt(2),
          duration: getAnimationDuration(200),
          opacity: _this2.opacity,
          positionX: getRandomInt(_this2.state.width),
          positionY: getRandomInt(_this2.state.height),
          color: getRandomInt(3),
          size: getRandomInt(3),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        });
      })));
    }
  }]);

  return AnimatedBackground;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedBackground);

/***/ })

})
//# sourceMappingURL=index.js.555c60d40e0b4a44e0ac.hot-update.js.map