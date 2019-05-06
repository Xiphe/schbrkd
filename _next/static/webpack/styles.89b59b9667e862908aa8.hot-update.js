webpackHotUpdate("styles",{

/***/ "./components/headline/headline.css":
/*!******************************************!*\
  !*** ./components/headline/headline.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"headline":"components-headline-headline_headline","levelOne":"components-headline-headline_levelOne","levelTwo":"components-headline-headline_levelTwo","levelThree":"components-headline-headline_levelThree","levelFour":"components-headline-headline_levelFour","levelFive":"components-headline-headline_levelFive"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557157433190");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.89b59b9667e862908aa8.hot-update.js.map