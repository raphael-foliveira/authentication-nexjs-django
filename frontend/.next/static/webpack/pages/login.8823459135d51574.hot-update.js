"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_FormCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/FormCard */ \"./components/UI/FormCard.js\");\n/* harmony import */ var _components_UI_FullWidthTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/FullWidthTextField */ \"./components/UI/FullWidthTextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Login(param) {\n    var csrfToken = param.csrfToken;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_FormCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"/api/auth/callback/credentials\",\n                method: \"POST\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        name: \"csrfToken\",\n                        defaultValue: csrfToken\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_FullWidthTextField__WEBPACK_IMPORTED_MODULE_4__.FullWidthTextField, {\n                        label: \"User Name\",\n                        name: \"username\",\n                        autoComplete: \"current-username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_FullWidthTextField__WEBPACK_IMPORTED_MODULE_4__.FullWidthTextField, {\n                        label: \"Password\",\n                        name: \"password\",\n                        type: \"password\",\n                        autoComplete: \"current-password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        children: \"Log in\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/pages/login.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2lDO0FBQ087QUFDUztBQUN3QjtBQUNsQzs7QUFXeEIsU0FBU0ssS0FBSyxDQUFDLEtBQWEsRUFBRTtRQUFmLFNBQVcsR0FBWCxLQUFhLENBQVhDLFNBQVM7SUFDckMscUJBQ0ksOERBQUNKLCtEQUFROzswQkFDTCw4REFBQ0ssSUFBRTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxTQUFTLEVBQUUsUUFBUTtpQkFBRTswQkFBRSxPQUFLOzs7OztvQkFBSzswQkFDOUMsOERBQUNDLE1BQUk7Z0JBQUNDLE1BQU0sRUFBQyxnQ0FBZ0M7Z0JBQUNDLE1BQU0sRUFBQyxNQUFNOztrQ0FDdkQsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDQyxJQUFJLEVBQUMsV0FBVzt3QkFBQ0MsWUFBWSxFQUFFVixTQUFTOzs7Ozs0QkFBSTtrQ0FFakUsOERBQUNILGlGQUFrQjt3QkFBQ2MsS0FBSyxFQUFDLFdBQVc7d0JBQUNGLElBQUksRUFBQyxVQUFVO3dCQUFDRyxZQUFZLEVBQUMsa0JBQWtCOzs7Ozs0QkFBRztrQ0FFeEYsOERBQUNmLGlGQUFrQjt3QkFBQ2MsS0FBSyxFQUFDLFVBQVU7d0JBQUNGLElBQUksRUFBQyxVQUFVO3dCQUFDRCxJQUFJLEVBQUMsVUFBVTt3QkFBQ0ksWUFBWSxFQUFDLGtCQUFrQjs7Ozs7NEJBQUc7a0NBRXZHLDhEQUFDZCxpREFBTTt3QkFBQ2UsT0FBTyxFQUFDLFdBQVc7d0JBQUNMLElBQUksRUFBQyxRQUFRO2tDQUFDLFFBRTFDOzs7Ozs0QkFBUzs7Ozs7O29CQUNOOzs7Ozs7WUFDQSxDQUNiO0FBQ04sQ0FBQztBQWpCdUJULEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDc3JmVG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRm9ybUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRm9ybUNhcmRcIjtcbmltcG9ydCB7IEZ1bGxXaWR0aFRleHRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0Z1bGxXaWR0aFRleHRGaWVsZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgY3NyZnRUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY3NyZlRva2VuOiBjc3JmdFRva2VuLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHsgY3NyZlRva2VuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUNhcmQ+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkxvZ2luPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvYXV0aC9jYWxsYmFjay9jcmVkZW50aWFsc1wiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjc3JmVG9rZW5cIiBkZWZhdWx0VmFsdWU9e2NzcmZUb2tlbn0gLz5cblxuICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhUZXh0RmllbGQgbGFiZWw9XCJVc2VyIE5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXVzZXJuYW1lXCIgLz5cblxuICAgICAgICAgICAgICAgIDxGdWxsV2lkdGhUZXh0RmllbGQgbGFiZWw9XCJQYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIiAvPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Gb3JtQ2FyZD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9ybUNhcmQiLCJGdWxsV2lkdGhUZXh0RmllbGQiLCJCdXR0b24iLCJMb2dpbiIsImNzcmZUb2tlbiIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImxhYmVsIiwiYXV0b0NvbXBsZXRlIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});