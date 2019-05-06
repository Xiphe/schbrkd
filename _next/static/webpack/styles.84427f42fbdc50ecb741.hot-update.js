webpackHotUpdate("styles",{

/***/ "./components/frame/frame.css":
/*!************************************!*\
  !*** ./components/frame/frame.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"frame":"components-frame-frame_frame","singlePage":"components-frame-frame_singlePage","logo":"components-frame-frame_logo","logoContainer":"components-frame-frame_logoContainer","rocket":"components-frame-frame_rocket","bgWrap":"components-frame-frame_bgWrap","ball":"components-frame-frame_ball","float":"components-frame-frame_float","small":"components-frame-frame_small","medium":"components-frame-frame_medium","big":"components-frame-frame_big","green":"components-frame-frame_green","teal":"components-frame-frame_teal","orange":"components-frame-frame_orange"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1557154884335");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.84427f42fbdc50ecb741.hot-update.js.map