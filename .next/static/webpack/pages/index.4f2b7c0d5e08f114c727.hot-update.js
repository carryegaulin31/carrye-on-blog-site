self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DataList.js":
/*!********************************!*\
  !*** ./components/DataList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_data_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/data.module.css */ "./styles/data.module.css");
/* harmony import */ var _styles_data_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_data_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\carry\\OneDrive\\Desktop\\Port-Projects\\carrye-on-blog-site\\components\\DataList.js",
    _this = undefined;




var DataList = function DataList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_data_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: ["\xA0 \xA0 \xA0 \xA0 \xA0 ", data.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: item.title
        }, "item.id", false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this);
      }), "\xA0 \xA0 \xA0 \xA0 "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = DataList;
/* harmony default export */ __webpack_exports__["default"] = (DataList);

var _c;

$RefreshReg$(_c, "DataList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DataList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataList */ "./components/DataList.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\carry\\OneDrive\\Desktop\\Port-Projects\\carrye-on-blog-site\\pages\\index.js";


var __N_SSP = true;
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DataList__WEBPACK_IMPORTED_MODULE_1__.default, {
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), "\xA0 \xA0 "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./styles/data.module.css":
/*!********************************!*\
  !*** ./styles/data.module.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./data.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/data.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./data.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/data.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./data.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/data.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/data.module.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/data.module.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".data_grid__16H6i {\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 800px;\r\n    margin-top: 3rem;\r\n  }\r\n  \r\n  .data_card__CbRtK {\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n    text-align: left;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    border: 2px solid #eaeaea;\r\n    border-radius: 10px;\r\n    -webkit-transition: color 0.15s ease, border-color 0.15s ease;\r\n    -moz-transition: color 0.15s ease, border-color 0.15s ease;\r\n    transition: color 0.15s ease, border-color 0.15s ease;\r\n    width: 45%;\r\n  }\r\n  \r\n  .data_card__CbRtK:hover,\r\n  .data_card__CbRtK:focus,\r\n  .data_card__CbRtK:active {\r\n    color: rgb(240, 236, 8);\r\n    border-color: rgb(240, 236, 8);\r\n  }\r\n  \r\n  .data_card__CbRtK h2 {\r\n    margin: 0 0 1rem 0;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .data_card__CbRtK p {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .data_logo__102qU {\r\n    height: 1em;\r\n    margin-left: 0.5rem;\r\n  }\r\n  \r\n  .data_excerpt__5zKsG {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    font-style: italic;\r\n    }\r\n  \r\n  @media (max-width: 600px) {\r\n    .data_grid__16H6i {\r\n      width: 100%;\r\n      -moz-box-orient: vertical;\r\n      -moz-box-direction: normal;\r\n           flex-direction: column;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://styles/data.module.css"],"names":[],"mappings":"AAAA;IACI,iBAAa;IAAb,aAAa;IACb,sBAAmB;SAAnB,mBAAmB;IACnB,qBAAuB;SAAvB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,6DAAqD;IAArD,0DAAqD;IAArD,qDAAqD;IACrD,UAAU;EACZ;;EAEA;;;IAGE,uBAAuB;IACvB,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB;;EAEF;IACE;MACE,WAAW;MACX,yBAAsB;MAAtB,0BAAsB;WAAtB,sBAAsB;IACxB;EACF","sourcesContent":[".grid {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 800px;\r\n    margin-top: 3rem;\r\n  }\r\n  \r\n  .card {\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n    text-align: left;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    border: 2px solid #eaeaea;\r\n    border-radius: 10px;\r\n    transition: color 0.15s ease, border-color 0.15s ease;\r\n    width: 45%;\r\n  }\r\n  \r\n  .card:hover,\r\n  .card:focus,\r\n  .card:active {\r\n    color: rgb(240, 236, 8);\r\n    border-color: rgb(240, 236, 8);\r\n  }\r\n  \r\n  .card h2 {\r\n    margin: 0 0 1rem 0;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card p {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .logo {\r\n    height: 1em;\r\n    margin-left: 0.5rem;\r\n  }\r\n  \r\n  .excerpt {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    font-style: italic;\r\n    }\r\n  \r\n  @media (max-width: 600px) {\r\n    .grid {\r\n      width: 100%;\r\n      flex-direction: column;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid": "data_grid__16H6i",
	"card": "data_card__CbRtK",
	"logo": "data_logo__102qU",
	"excerpt": "data_excerpt__5zKsG"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYyYjdjMGQ1ZTA4ZjExNGM3MjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3pCLHNCQUNJO0FBQUssYUFBUyxFQUFFSCxxRUFBaEI7QUFBQSwyQkFDQTtBQUFBLDhDQUNPRyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsNEJBQ1I7QUFBQSxvQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsV0FBUSxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFULENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FYRDs7S0FBTUw7QUFhTiwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7O0FBS2UsU0FBU08sSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUQsMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMseURBQUQ7QUFBVSxVQUFJLEVBQUVMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBTnVCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054QixVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLG1hQUE2TTs7QUFFL087O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sbWFBQTZNO0FBQ25OO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbWFBQTZNOztBQUV2Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQ25GQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsNkRBQTZELDBCQUEwQixzQkFBc0IsK0JBQStCLGlDQUFpQyw4QkFBOEIscUNBQXFDLHdCQUF3Qix5QkFBeUIseUJBQXlCLE9BQU8sK0JBQStCLHFCQUFxQix3QkFBd0IseUJBQXlCLHVCQUF1Qiw4QkFBOEIsa0NBQWtDLDRCQUE0QixzRUFBc0UsbUVBQW1FLDhEQUE4RCxtQkFBbUIsT0FBTyxrR0FBa0csZ0NBQWdDLHVDQUF1QyxPQUFPLGtDQUFrQywyQkFBMkIsMEJBQTBCLE9BQU8saUNBQWlDLGtCQUFrQiwyQkFBMkIseUJBQXlCLE9BQU8sK0JBQStCLG9CQUFvQiw0QkFBNEIsT0FBTyxrQ0FBa0Msd0JBQXdCLHlCQUF5QiwyQkFBMkIsU0FBUyx1Q0FBdUMsMkJBQTJCLHNCQUFzQixvQ0FBb0MscUNBQXFDLHNDQUFzQyxTQUFTLE9BQU8sYUFBYSx1RkFBdUYsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxnQ0FBZ0Msc0JBQXNCLDRCQUE0QixnQ0FBZ0Msd0JBQXdCLHlCQUF5Qix5QkFBeUIsT0FBTyxtQkFBbUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDhCQUE4QixrQ0FBa0MsNEJBQTRCLDhEQUE4RCxtQkFBbUIsT0FBTyw4REFBOEQsZ0NBQWdDLHVDQUF1QyxPQUFPLHNCQUFzQiwyQkFBMkIsMEJBQTBCLE9BQU8scUJBQXFCLGtCQUFrQiwyQkFBMkIseUJBQXlCLE9BQU8sbUJBQW1CLG9CQUFvQiw0QkFBNEIsT0FBTyxzQkFBc0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsU0FBUyx1Q0FBdUMsZUFBZSxzQkFBc0IsaUNBQWlDLFNBQVMsT0FBTyx5QkFBeUI7QUFDN3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9kYXRhLm1vZHVsZS5jc3M/NDcyOCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2RhdGEubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZGF0YS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERhdGFMaXN0ID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGF0YVN0eWxlcy5ncmlkfT4gXHJcbiAgICAgICAgPHVsPlxyXG4gICAgwqAgwqAgwqAgwqAgwqAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICDCoCDCoCDCoCDCoCDCoCDCoCA8bGkga2V5PVwiaXRlbS5pZFwiPntpdGVtLnRpdGxlfTwvbGk+XHJcbiAgICDCoCDCoCDCoCDCoCDCoCApKX1cclxuICAgIMKgIMKgIMKgIMKgIDwvdWw+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTGlzdDtcclxuIiwiaW1wb3J0IERhdGFMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YUxpc3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8RGF0YUxpc3QgZGF0YT17ZGF0YX0gLz5cbiAgICDCoCDCoCA8L2Rpdj5cbiAgICDCoCApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICDCoCAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSgpO1xuXG7CoCByZXR1cm4ge1xuwqAgwqAgcHJvcHM6IHtcbsKgIMKgIMKgIGRhdGE6IHBvc3RzLFxuwqAgwqAgfSxcbsKgIH07XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2RhdGEubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZGF0YS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9kYXRhLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRhdGFfZ3JpZF9fMTZINmkge1xcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRhdGFfY2FyZF9fQ2JSdEsge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kYXRhX2NhcmRfX0NiUnRLOmhvdmVyLFxcclxcbiAgLmRhdGFfY2FyZF9fQ2JSdEs6Zm9jdXMsXFxyXFxuICAuZGF0YV9jYXJkX19DYlJ0SzphY3RpdmUge1xcclxcbiAgICBjb2xvcjogcmdiKDI0MCwgMjM2LCA4KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzYsIDgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGF0YV9jYXJkX19DYlJ0SyBoMiB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kYXRhX2NhcmRfX0NiUnRLIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRhdGFfbG9nb19fMTAycVUge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRhdGFfZXhjZXJwdF9fNXpLc0cge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmRhdGFfZ3JpZF9fMTZINmkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2RhdGEubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHNCQUFtQjtTQUFuQixtQkFBbUI7SUFDbkIscUJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2REFBcUQ7SUFBckQsMERBQXFEO0lBQXJELHFEQUFxRDtJQUNyRCxVQUFVO0VBQ1o7O0VBRUE7OztJQUdFLHVCQUF1QjtJQUN2Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7O0VBRUY7SUFDRTtNQUNFLFdBQVc7TUFDWCx5QkFBc0I7TUFBdEIsMEJBQXNCO1dBQXRCLHNCQUFzQjtJQUN4QjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcmQge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkOmhvdmVyLFxcclxcbiAgLmNhcmQ6Zm9jdXMsXFxyXFxuICAuY2FyZDphY3RpdmUge1xcclxcbiAgICBjb2xvcjogcmdiKDI0MCwgMjM2LCA4KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzYsIDgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZCBoMiB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmV4Y2VycHQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdyaWRcIjogXCJkYXRhX2dyaWRfXzE2SDZpXCIsXG5cdFwiY2FyZFwiOiBcImRhdGFfY2FyZF9fQ2JSdEtcIixcblx0XCJsb2dvXCI6IFwiZGF0YV9sb2dvX18xMDJxVVwiLFxuXHRcImV4Y2VycHRcIjogXCJkYXRhX2V4Y2VycHRfXzV6S3NHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbImRhdGFTdHlsZXMiLCJSZWFjdCIsIkRhdGFMaXN0IiwiZGF0YSIsImdyaWQiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJzdHlsZXMiLCJIb21lIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==