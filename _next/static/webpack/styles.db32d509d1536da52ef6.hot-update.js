webpackHotUpdate("styles",{

/***/ "./components/spacer/spacer.css":
/*!**************************************!*\
  !*** ./components/spacer/spacer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spacer":"components-spacer-spacer_spacer","sizeOne":"components-spacer-spacer_sizeOne","sizeTwo":"components-spacer-spacer_sizeTwo","sizeThree":"components-spacer-spacer_sizeThree","sizeFour":"components-spacer-spacer_sizeFour","sizeFive":"components-spacer-spacer_sizeFive"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557413829539");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.db32d509d1536da52ef6.hot-update.js.map