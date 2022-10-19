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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfileCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Notes_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notes/Note */ \"./components/Notes/Note.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _UI_FormCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/FormCard */ \"./components/UI/FormCard.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    width: 100%;\\n    height: 100%;\\n    justify-content: center;\\n    margin-top: 2rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Centralizer = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Centralizer;\nfunction UserProfileCard() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), userInfo = ref[0], setUserInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), userNotes = ref1[0], setUserNotes = ref1[1];\n    var session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref;\n        console.log(session);\n        if (!!((ref = session.data) === null || ref === void 0 ? void 0 : ref.user)) {\n            return setUserInfo(session.data.user);\n        }\n        return router.push(\"/\");\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_FormCard__WEBPACK_IMPORTED_MODULE_6__.PaddedCard, {\n        children: !!userInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Welcome \",\n                        userInfo.first_name,\n                        \" \",\n                        userInfo.last_name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Your Notes\"\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: !!userNotes ? userNotes.map(function(note) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Notes_Note__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            note: note\n                        }, note.id, false, {\n                            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                            lineNumber: 46,\n                            columnNumber: 40\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centralizer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {\n                            style: {\n                                alignSelf: \"center\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                            lineNumber: 50,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                        lineNumber: 49,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/profile/create-note\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        children: \"Create new note\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    onClick: function() {\n                        return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut)({\n                            callbackUrl: \"/\"\n                        });\n                    },\n                    children: \"Log Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Centralizer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {\n                style: {\n                    alignSelf: \"center\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n                lineNumber: 61,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n            lineNumber: 60,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/raphaeloliveira/Documents/code/nextjs_studies/authentication/frontend/components/User/UserProfileCard.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(UserProfileCard, \"BXBVX9aodN1nGEUjaGzVDO9b0hs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession\n    ];\n});\n_c1 = UserProfileCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Centralizer\");\n$RefreshReg$(_c1, \"UserProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIvVXNlclByb2ZpbGVDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFDYTtBQUM1QjtBQUNXO0FBQ0k7QUFDUDtBQUNRO0FBQ0g7QUFFMUMsSUFBTVcsV0FBVyxHQUFHSCwyREFBVSxtQkFNN0I7QUFOS0csS0FBQUEsV0FBVztBQVFGLFNBQVNFLGVBQWUsR0FBRzs7O0lBQ3RDLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFnQ0osR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DYSxRQUFRLEdBQWlCYixHQUFVLEdBQTNCLEVBQUVjLFdBQVcsR0FBSWQsR0FBVSxHQUFkO0lBQzVCLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXZDZSxTQUFTLEdBQWtCZixJQUFZLEdBQTlCLEVBQUVnQixZQUFZLEdBQUloQixJQUFZLEdBQWhCO0lBQzlCLElBQU1pQixPQUFPLEdBQUdWLDJEQUFVLEVBQUU7SUFFNUJSLGdEQUFTLENBQUMsV0FBTTtZQUVOa0IsR0FBWTtRQURsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDQSxDQUFBQSxDQUFBQSxHQUFZLEdBQVpBLE9BQU8sQ0FBQ0csSUFBSSxjQUFaSCxHQUFZLFdBQU0sR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxHQUFZLENBQUVJLElBQUksR0FBRTtZQUN0QixPQUFPUCxXQUFXLENBQUNHLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsT0FBT1QsTUFBTSxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIsQ0FBQyxFQUFFO1FBQUNMLE9BQU87S0FBQyxDQUFDO0lBRWIscUJBQ0ksOERBQUNaLG9EQUFVO2tCQUNOLENBQUMsQ0FBQ1EsUUFBUSxpQkFDUDs7OEJBQ0ksOERBQUNVLElBQUU7O3dCQUFDLFVBQ1E7d0JBQUNWLFFBQVEsQ0FBQ1csVUFBVTt3QkFBQyxHQUFDO3dCQUFDWCxRQUFRLENBQUNZLFNBQVM7d0JBQUMsR0FDdEQ7Ozs7Ozt3QkFBSzs4QkFDTCw4REFBQ0MsSUFBRTs4QkFBQyxZQUFVOzs7Ozt3QkFBSzs4QkFDbkIsOERBQUNDLElBQUU7Ozs7d0JBQUc7OEJBQ047OEJBQ0ssQ0FBQyxDQUFDWixTQUFTLEdBQ1JBLFNBQVMsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSzt3QkFDcEIscUJBQU8sOERBQUMvQixtREFBSTs0QkFBQytCLElBQUksRUFBRUEsSUFBSTsyQkFBT0EsSUFBSSxDQUFDQyxFQUFFOzs7O2lDQUFJLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxpQkFFRiw4REFBQ3JCLFdBQVc7a0NBQ1IsNEVBQUNQLDJEQUFnQjs0QkFBQzZCLEtBQUssRUFBRTtnQ0FBRUMsU0FBUyxFQUFFLFFBQVE7NkJBQUU7Ozs7O2dDQUFJOzs7Ozs0QkFDMUM7aUNBRW5COzhCQUNILDhEQUFDN0Isa0RBQUk7b0JBQUM4QixJQUFJLEVBQUcsc0JBQW9COzhCQUM3Qiw0RUFBQ2hDLGlEQUFNO2tDQUFDLGlCQUFlOzs7Ozs0QkFBUzs7Ozs7d0JBQzdCOzhCQUNQLDhEQUFDQSxpREFBTTtvQkFBQ2lDLE9BQU8sRUFBRTsrQkFBTTFCLHdEQUFPLENBQUM7NEJBQUMyQixXQUFXLEVBQUUsR0FBRzt5QkFBQyxDQUFDO3FCQUFBOzhCQUFFLFNBQU87Ozs7O3dCQUFTOzt3QkFDckUsaUJBRUgsOERBQUMxQixXQUFXO3NCQUNSLDRFQUFDUCwyREFBZ0I7Z0JBQUM2QixLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxRQUFRO2lCQUFFOzs7OztvQkFBSTs7Ozs7Z0JBQzFDOzs7OztZQUVULENBQ2Y7QUFDTixDQUFDO0dBL0N1QnJCLGVBQWU7O1FBQ3BCUCxrREFBUztRQUdSRyx1REFBVTs7O0FBSk5JLE1BQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL1VzZXJQcm9maWxlQ2FyZC5qcz81MTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb3RlIGZyb20gXCIuLi9Ob3Rlcy9Ob3RlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWRkZWRDYXJkIH0gZnJvbSBcIi4uL1VJL0Zvcm1DYXJkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBDZW50cmFsaXplciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm9maWxlQ2FyZCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3VzZXJOb3Rlcywgc2V0VXNlck5vdGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gICAgICAgIGlmICghIXNlc3Npb24uZGF0YT8udXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNldFVzZXJJbmZvKHNlc3Npb24uZGF0YS51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gICAgfSwgW3Nlc3Npb25dKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZGRlZENhcmQ+XG4gICAgICAgICAgICB7ISF1c2VySW5mbyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHt1c2VySW5mby5maXJzdF9uYW1lfSB7dXNlckluZm8ubGFzdF9uYW1lfSFcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPllvdXIgTm90ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIXVzZXJOb3RlcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTm90ZXMubWFwKChub3RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Tm90ZSBub3RlPXtub3RlfSBrZXk9e25vdGUuaWR9IC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZW50cmFsaXplcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZW50cmFsaXplcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvY3JlYXRlLW5vdGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Q3JlYXRlIG5ldyBub3RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHtjYWxsYmFja1VybDogXCIvXCJ9KX0+TG9nIE91dDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Q2VudHJhbGl6ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvQ2VudHJhbGl6ZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1BhZGRlZENhcmQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOb3RlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDaXJjdWxhclByb2dyZXNzIiwiTGluayIsInVzZVJvdXRlciIsIlBhZGRlZENhcmQiLCJzdHlsZWQiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIkNlbnRyYWxpemVyIiwiZGl2IiwiVXNlclByb2ZpbGVDYXJkIiwicm91dGVyIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInVzZXJOb3RlcyIsInNldFVzZXJOb3RlcyIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXIiLCJwdXNoIiwiaDEiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiaDMiLCJociIsIm1hcCIsIm5vdGUiLCJpZCIsInN0eWxlIiwiYWxpZ25TZWxmIiwiaHJlZiIsIm9uQ2xpY2siLCJjYWxsYmFja1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User/UserProfileCard.js\n"));

/***/ })

});