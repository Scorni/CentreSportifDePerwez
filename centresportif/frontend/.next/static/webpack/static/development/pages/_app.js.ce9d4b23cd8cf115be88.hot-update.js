webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\GitHub\\CentreSportifDePerwez\\centresportif\\frontend\\components\\Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var theme = {
  primary: 'orange',
  second: 'red',
  text: 'black',
  maxWidth: '1200px'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-14vv5uc-0"
})(["background:", ";color:", ";"], function (props) {
  return props.theme.second;
}, function (props) {
  return props.theme.text;
});
_c = StyledPage;
var StyledPageContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Page__StyledPageContent",
  componentId: "sc-14vv5uc-1"
})(["background:", ";max-width:", ";margin:0 auto;padding:1.5rem;"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.maxWidth;
});
_c2 = StyledPageContent;

var Page = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(StyledPage, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }), __jsx(StyledPageContent, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, this.props.children), "Visible sur toutes les pages (From component)");
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c, _c2;

$RefreshReg$(_c, "StyledPage");
$RefreshReg$(_c2, "StyledPageContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanMiXSwibmFtZXMiOlsidGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kIiwidGV4dCIsIm1heFdpZHRoIiwiU3R5bGVkUGFnZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiU3R5bGVkUGFnZUNvbnRlbnQiLCJQYWdlIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFFO0FBQ1RDLFNBQU8sRUFBRyxRQUREO0FBRVRDLFFBQU0sRUFBRyxLQUZBO0FBR1RDLE1BQUksRUFBRyxPQUhFO0FBSVRDLFVBQVEsRUFBRztBQUpGLENBQWI7QUFNQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0NBQ0UsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1IsS0FBTixDQUFZRSxNQUFoQjtBQUFBLENBRFAsRUFFSCxVQUFBTSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUixLQUFOLENBQVlHLElBQWhCO0FBQUEsQ0FGRixDQUFoQjtLQUFNRSxVO0FBS04sSUFBTUksaUJBQWlCLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUVBQ0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1IsS0FBTixDQUFZQyxPQUFoQjtBQUFBLENBREEsRUFFTixVQUFBTyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUixLQUFOLENBQVlJLFFBQWhCO0FBQUEsQ0FGQyxDQUF2QjtNQUFNSyxpQjs7SUFPQUMsSTs7Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUNKLGFBQ0ksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBR0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsS0FBS0YsS0FBTCxDQUFXRyxRQURiLENBSEosa0RBREo7QUFXSDs7OztFQWJjQywrQzs7QUFlSkYsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuY2U5ZDRiMjNjZDhjZjExNWJlODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcclxuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXIsIGluamVjdEdsb2JhbH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgdGhlbWUgPXtcclxuICAgIHByaW1hcnkgOiAnb3JhbmdlJyxcclxuICAgIHNlY29uZCA6ICdyZWQnLFxyXG4gICAgdGV4dCA6ICdibGFjaycsXHJcbiAgICBtYXhXaWR0aCA6ICcxMjAwcHgnLFxyXG59O1xyXG5jb25zdCBTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHR9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUGFnZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5fTtcclxuICAgIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXhXaWR0aH07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuYDtcclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8U3R5bGVkUGFnZT5cclxuICAgICAgICAgICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIFZpc2libGUgc3VyIHRvdXRlcyBsZXMgcGFnZXMgKEZyb20gY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3R5bGVkUGFnZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9