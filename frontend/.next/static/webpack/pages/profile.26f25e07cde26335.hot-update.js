"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/User/UserProfileCard.js":
/*!********************************************!*\
  !*** ./components/User/UserProfileCard.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfileCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Notes_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notes/Note */ \"./components/Notes/Note.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _UI_FormCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/FormCard */ \"./components/UI/FormCard.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    width: 100%;\\n    height: 100%;\\n    justify-content: center;\\n    margin-top: 2rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Centralizer = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Centralizer;\nfunction UserProfileCard() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), userInfo = ref[0], setUserInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), userNotes = ref1[0], setUserNotes = ref1[1];\n    var session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(session);\n    // if (!!session.data?.user) {\n    //     return setUserInfo(session.data.user);\n    // }\n    // return router.push(\"/\");\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_FormCard__WEBPACK_IMPORTED_MODULE_6__.PaddedCard, {\n        children: !!userInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Welcome \",\n                        userInfo.first_name,\n                        \" \",\n                        userInfo.last_name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Your Notes\"\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: !!userNotes ? userNotes.map(function(note) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Notes_Note__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            note: note\n                        }, note.id, false, {\n                            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                            lineNumber: 46,\n                            columnNumber: 40\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centralizer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {\n                            style: {\n                                alignSelf: \"center\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                            lineNumber: 50,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                        lineNumber: 49,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/profile/create-note\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        children: \"Create new note\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    onClick: function() {\n                        return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut)({\n                            callbackUrl: \"/\"\n                        });\n                    },\n                    children: \"Log Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centralizer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {\n                style: {\n                    alignSelf: \"center\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                lineNumber: 61,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n            lineNumber: 60,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(UserProfileCard, \"BXBVX9aodN1nGEUjaGzVDO9b0hs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession\n    ];\n});\n_c1 = UserProfileCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Centralizer\");\n$RefreshReg$(_c1, \"UserProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIvVXNlclByb2ZpbGVDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFDYTtBQUM1QjtBQUNXO0FBQ0k7QUFDUDtBQUNRO0FBQ0g7QUFFMUMsSUFBTVcsV0FBVyxHQUFHSCwyREFBVSxtQkFNN0I7QUFOS0csS0FBQUEsV0FBVztBQVFGLFNBQVNFLGVBQWUsR0FBRzs7O0lBQ3RDLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFnQ0osR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DYSxRQUFRLEdBQWlCYixHQUFVLEdBQTNCLEVBQUVjLFdBQVcsR0FBSWQsR0FBVSxHQUFkO0lBQzVCLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXZDZSxTQUFTLEdBQWtCZixJQUFZLEdBQTlCLEVBQUVnQixZQUFZLEdBQUloQixJQUFZLEdBQWhCO0lBQzlCLElBQU1pQixPQUFPLEdBQUdWLDJEQUFVLEVBQUU7SUFFNUJSLGdEQUFTLENBQUMsV0FBTTtRQUNabUIsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLDhCQUE4QjtJQUM5Qiw2Q0FBNkM7SUFDN0MsSUFBSTtJQUNKLDJCQUEyQjtJQUUvQixDQUFDLEVBQUU7UUFBQ0EsT0FBTztLQUFDLENBQUM7SUFFYixxQkFDSSw4REFBQ1osb0RBQVU7a0JBQ04sQ0FBQyxDQUFDUSxRQUFRLGlCQUNQOzs4QkFDSSw4REFBQ08sSUFBRTs7d0JBQUMsVUFDUTt3QkFBQ1AsUUFBUSxDQUFDUSxVQUFVO3dCQUFDLEdBQUM7d0JBQUNSLFFBQVEsQ0FBQ1MsU0FBUzt3QkFBQyxHQUN0RDs7Ozs7O3dCQUFLOzhCQUNMLDhEQUFDQyxJQUFFOzhCQUFDLFlBQVU7Ozs7O3dCQUFLOzhCQUNuQiw4REFBQ0MsSUFBRTs7Ozt3QkFBRzs4QkFDTjs4QkFDSyxDQUFDLENBQUNULFNBQVMsR0FDUkEsU0FBUyxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO3dCQUNwQixxQkFBTyw4REFBQzVCLG1EQUFJOzRCQUFDNEIsSUFBSSxFQUFFQSxJQUFJOzJCQUFPQSxJQUFJLENBQUNDLEVBQUU7Ozs7aUNBQUksQ0FBQztvQkFDOUMsQ0FBQyxDQUFDLGlCQUVGLDhEQUFDbEIsV0FBVztrQ0FDUiw0RUFBQ1AsMkRBQWdCOzRCQUFDMEIsS0FBSyxFQUFFO2dDQUFFQyxTQUFTLEVBQUUsUUFBUTs2QkFBRTs7Ozs7Z0NBQUk7Ozs7OzRCQUMxQztpQ0FFbkI7OEJBQ0gsOERBQUMxQixrREFBSTtvQkFBQzJCLElBQUksRUFBRyxzQkFBb0I7OEJBQzdCLDRFQUFDN0IsaURBQU07a0NBQUMsaUJBQWU7Ozs7OzRCQUFTOzs7Ozt3QkFDN0I7OEJBQ1AsOERBQUNBLGlEQUFNO29CQUFDOEIsT0FBTyxFQUFFOytCQUFNdkIsd0RBQU8sQ0FBQzs0QkFBQ3dCLFdBQVcsRUFBRSxHQUFHO3lCQUFDLENBQUM7cUJBQUE7OEJBQUUsU0FBTzs7Ozs7d0JBQVM7O3dCQUNyRSxpQkFFSCw4REFBQ3ZCLFdBQVc7c0JBQ1IsNEVBQUNQLDJEQUFnQjtnQkFBQzBCLEtBQUssRUFBRTtvQkFBRUMsU0FBUyxFQUFFLFFBQVE7aUJBQUU7Ozs7O29CQUFJOzs7OztnQkFDMUM7Ozs7O1lBRVQsQ0FDZjtBQUNOLENBQUM7R0EvQ3VCbEIsZUFBZTs7UUFDcEJQLGtEQUFTO1FBR1JHLHVEQUFVOzs7QUFKTkksTUFBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXIvVXNlclByb2ZpbGVDYXJkLmpzPzUxMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdGUgZnJvbSBcIi4uL05vdGVzL05vdGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZGRlZENhcmQgfSBmcm9tIFwiLi4vVUkvRm9ybUNhcmRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmNvbnN0IENlbnRyYWxpemVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGVDYXJkKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdXNlck5vdGVzLCBzZXRVc2VyTm90ZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgICAgICAgLy8gaWYgKCEhc2Vzc2lvbi5kYXRhPy51c2VyKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gc2V0VXNlckluZm8oc2Vzc2lvbi5kYXRhLnVzZXIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgICB9LCBbc2Vzc2lvbl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFkZGVkQ2FyZD5cbiAgICAgICAgICAgIHshIXVzZXJJbmZvID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUge3VzZXJJbmZvLmZpcnN0X25hbWV9IHt1c2VySW5mby5sYXN0X25hbWV9IVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDM+WW91ciBOb3RlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyEhdXNlck5vdGVzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOb3Rlcy5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxOb3RlIG5vdGU9e25vdGV9IGtleT17bm90ZS5pZH0gLz47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRyYWxpemVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRyYWxpemVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS9jcmVhdGUtbm90ZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5DcmVhdGUgbmV3IG5vdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoe2NhbGxiYWNrVXJsOiBcIi9cIn0pfT5Mb2cgT3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxDZW50cmFsaXplcj5cbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgICAgPC9DZW50cmFsaXplcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvUGFkZGVkQ2FyZD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk5vdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJMaW5rIiwidXNlUm91dGVyIiwiUGFkZGVkQ2FyZCIsInN0eWxlZCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiQ2VudHJhbGl6ZXIiLCJkaXYiLCJVc2VyUHJvZmlsZUNhcmQiLCJyb3V0ZXIiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwidXNlck5vdGVzIiwic2V0VXNlck5vdGVzIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoMyIsImhyIiwibWFwIiwibm90ZSIsImlkIiwic3R5bGUiLCJhbGlnblNlbGYiLCJocmVmIiwib25DbGljayIsImNhbGxiYWNrVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/User/UserProfileCard.js\n"));

/***/ })

});