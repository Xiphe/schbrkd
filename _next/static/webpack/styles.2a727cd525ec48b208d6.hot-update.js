webpackHotUpdate("styles",{

/***/ "./components/frame/frame.css":
/*!************************************!*\
  !*** ./components/frame/frame.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"frame":"components-frame-frame_frame","singlePage":"components-frame-frame_singlePage","logo":"components-frame-frame_logo","logoContainer":"components-frame-frame_logoContainer","rocket":"components-frame-frame_rocket"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1556743962670");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2a727cd525ec48b208d6.hot-update.js.map