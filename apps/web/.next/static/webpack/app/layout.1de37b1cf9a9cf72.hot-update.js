"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e02e38dd2f7c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQ5YzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlMDJlMzhkZDJmN2NcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_FaBook_FaHome_FaPen_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaBook,FaHome,FaPen!=!react-icons/fa */ \"(app-pages-browser)/../../node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdClose_react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MdClose!=!react-icons/md */ \"(app-pages-browser)/../../node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=GiHamburgerMenu!=!react-icons/gi */ \"(app-pages-browser)/../../node_modules/react-icons/gi/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../../node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [menuOpen, isMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const userDetails = useRecoilValue(atomUserData);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function menuHandler() {\n        isMenuOpen(()=>!menuOpen);\n    }\n    function logoutHandler() {\n        router.push(\"/login\");\n    }\n    // sample\n    const userDetails = {\n        name: \"demo\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-full border-2 flex flex-row justify-between py-4 bg-white fixed top-0 z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-4 justify-baseline items-baseline \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: ()=>menuHandler(),\n                                className: \" sm:hidden cursor-pointer ml-2 \",\n                                children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdClose_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdClose, {\n                                    className: \" w-6 h-5 -mb-1 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiHamburgerMenu, {\n                                    className: \" w-6 h-5 -mb-1 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"\".concat(menuOpen ? \"flex flex-col gap-5 py-6 items-baseline  border-1 absolute  w-full bg-primary px-5 mt-4 -ml-1 \" : \"hidden\", \" sm:hidden \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        onClick: ()=>menuHandler(),\n                                        className: \"cursor-pointer w-full hover:bg-secondary p-2 \",\n                                        href: \"/\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBook_FaHome_FaPen_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaHome, {\n                                                className: \"inline-block\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" Home\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        onClick: ()=>menuHandler(),\n                                        className: \"cursor-pointer w-full hover:bg-secondary p-2 \",\n                                        href: \"/assignment\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdClose_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdAssignmentReturned, {\n                                                className: \"inline-block\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" Assignment\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        onClick: ()=>menuHandler(),\n                                        className: \"cursor-pointer w-full hover:bg-secondary p-2 \",\n                                        href: \"/syllabus\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBook_FaHome_FaPen_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBook, {\n                                                    className: \"inline-block\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 17\n                                                }, this),\n                                                \" Syllabus\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        onClick: ()=>menuHandler(),\n                                        className: \"cursor-pointer w-full hover:bg-secondary p-2 \",\n                                        href: \"/notes\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBook_FaHome_FaPen_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPen, {\n                                                className: \"inline-block\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" Notes\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"text-primaryDark\",\n                        href: \"/\",\n                        children: \"ClassVault\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/contact\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"  flex-row gap-6 hidden sm:flex \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/notes\",\n                            children: \"Notes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/syllabus\",\n                            children: \"Syllabus\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/assignment\",\n                            children: \"Asssignmet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex flex-row gap-3 mr-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-10 text-xl h-auto rounded-full bg-primaryDark text-white text-center py-1 \".concat(userDetails.name ? \"inline-block\" : \"hidden\", \" \"),\n                        children: \"\".concat(userDetails.name ? userDetails.name[0] : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"cursor-pointer \".concat(userDetails.name ? \"hidden\" : \"\", \" \"),\n                        href: \"/login\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(userDetails.name ? \"inline-block\" : \"hidden\", \" \"),\n                        children: \"logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lokiislazy/Desktop/ClassVault/apps/web/app/components/navbar.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"JuPeyNZ4EzlOWoaKJ1QBI45QPBY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDWDtBQUUwQjtBQUVEO0FBQ0w7QUFDUjtBQUNHO0FBTzdCLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDeEMsb0RBQW9EO0lBQ3BELE1BQU1ZLFNBQVNKLDBEQUFTQTtJQUV4QixTQUFTSztRQUNQRixXQUFXLElBQU0sQ0FBQ0Q7SUFDcEI7SUFFQSxTQUFTSTtRQUNQRixPQUFPRyxJQUFJLENBQUM7SUFDZDtJQUVBLFNBQVM7SUFFVCxNQUFNQyxjQUFjO1FBQ2xCQyxNQUFNO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FDQ0MsU0FBUyxJQUFNVDtnQ0FDZk0sV0FBVTswQ0FFVFQseUJBQ0MsOERBQUNILGtGQUFPQTtvQ0FBQ1ksV0FBVTs7Ozs7eURBRW5CLDhEQUFDYixrR0FBZUE7b0NBQUNhLFdBQVU7Ozs7Ozs7Ozs7OzBDQUcvQiw4REFBQ0k7Z0NBQ0NKLFdBQVcsR0FJVixPQUhDVCxXQUNLLG1HQUNELFVBQ0w7O2tEQUVELDhEQUFDVCxpREFBSUE7d0NBQ0hxQixTQUFTLElBQU1UO3dDQUNmTSxXQUFZO3dDQUNaSyxNQUFNOzswREFFTiw4REFBQ3BCLDZGQUFNQTtnREFBQ2UsV0FBVTs7Ozs7OzRDQUFpQjs7Ozs7OztrREFHckMsOERBQUNsQixpREFBSUE7d0NBQ0hxQixTQUFTLElBQU1UO3dDQUNmTSxXQUFZO3dDQUNaSyxNQUFNOzswREFFTiw4REFBQ25CLCtGQUFvQkE7Z0RBQUNjLFdBQVU7Ozs7Ozs0Q0FBaUI7Ozs7Ozs7a0RBR25ELDhEQUFDbEIsaURBQUlBO3dDQUNIcUIsU0FBUyxJQUFNVDt3Q0FDZk0sV0FBWTt3Q0FDWkssTUFBTTtrREFFTiw0RUFBQ0M7OzhEQUNDLDhEQUFDdkIsNkZBQU1BO29EQUFDaUIsV0FBVTs7Ozs7O2dEQUFpQjs7Ozs7Ozs7Ozs7O2tEQUl2Qyw4REFBQ2xCLGlEQUFJQTt3Q0FDSHFCLFNBQVMsSUFBTVQ7d0NBQ2ZNLFdBQVk7d0NBQ1pLLE1BQU07OzBEQUVOLDhEQUFDckIsNEZBQUtBO2dEQUFDZ0IsV0FBVTs7Ozs7OzRDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEMsOERBQUNsQixpREFBSUE7d0JBQUNrQixXQUFVO3dCQUFtQkssTUFBTTtrQ0FBSzs7Ozs7O2tDQUc5Qyw4REFBQ0g7d0JBQUVGLFdBQVU7a0NBQ1gsNEVBQUNsQixpREFBSUE7NEJBQUN1QixNQUFNO3NDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUNKO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQ1gsNEVBQUNsQixpREFBSUE7NEJBQUN1QixNQUFNO3NDQUFVOzs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNIO3dCQUFFRixXQUFVO2tDQUNYLDRFQUFDbEIsaURBQUlBOzRCQUFDdUIsTUFBTTtzQ0FBYTs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDSDt3QkFBRUYsV0FBVTtrQ0FDWCw0RUFBQ2xCLGlEQUFJQTs0QkFBQ3VCLE1BQU07c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvQiw4REFBQ0o7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFDQ0YsV0FBVywrRUFFVixPQURDSCxZQUFZQyxJQUFJLEdBQUcsaUJBQWlCLFVBQ3JDO2tDQUNELEdBQStDLE9BQTVDRCxZQUFZQyxJQUFJLEdBQUdELFlBQVlDLElBQUksQ0FBQyxFQUFFLEdBQUc7Ozs7OztrQ0FDOUMsOERBQUNoQixpREFBSUE7d0JBQ0hrQixXQUFXLGtCQUFtRCxPQUFqQ0gsWUFBWUMsSUFBSSxHQUFHLFdBQVcsSUFBRzt3QkFDOURPLE1BQU07a0NBQ1A7Ozs7OztrQ0FHRCw4REFBQ0U7d0JBQU9QLFdBQVcsR0FBZ0QsT0FBN0NILFlBQVlDLElBQUksR0FBRyxpQkFBaUIsVUFBUztrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9FO0dBakh3QlI7O1FBR1BELHNEQUFTQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3g/ODk2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IEZhQm9vaywgRmFQZW4sIEZhSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgeyBNZEFzc2lnbm1lbnRSZXR1cm5lZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgR2lIYW1idXJnZXJNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQgeyBNZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7XG4gIFJlZ2lzdGVyTGluayxcbiAgTG9naW5MaW5rLFxufSBmcm9tIFwiQGtpbmRlLW9zcy9raW5kZS1hdXRoLW5leHRqcy9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBpc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgdXNlckRldGFpbHMgPSB1c2VSZWNvaWxWYWx1ZShhdG9tVXNlckRhdGEpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBtZW51SGFuZGxlcigpIHtcbiAgICBpc01lbnVPcGVuKCgpID0+ICFtZW51T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBsb2dvdXRIYW5kbGVyKCkge1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9XG5cbiAgLy8gc2FtcGxlXG5cbiAgY29uc3QgdXNlckRldGFpbHMgPSB7XG4gICAgbmFtZTogXCJkZW1vXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IGJnLXdoaXRlIGZpeGVkIHRvcC0wIHotMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBqdXN0aWZ5LWJhc2VsaW5lIGl0ZW1zLWJhc2VsaW5lIFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtZW51SGFuZGxlcigpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHNtOmhpZGRlbiBjdXJzb3ItcG9pbnRlciBtbC0yIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnVPcGVuID8gKFxuICAgICAgICAgICAgICA8TWRDbG9zZSBjbGFzc05hbWU9XCIgdy02IGgtNSAtbWItMSBcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEdpSGFtYnVyZ2VyTWVudSBjbGFzc05hbWU9XCIgdy02IGgtNSAtbWItMSBcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBtZW51T3BlblxuICAgICAgICAgICAgICAgID8gYGZsZXggZmxleC1jb2wgZ2FwLTUgcHktNiBpdGVtcy1iYXNlbGluZSAgYm9yZGVyLTEgYWJzb2x1dGUgIHctZnVsbCBiZy1wcmltYXJ5IHB4LTUgbXQtNCAtbWwtMSBgXG4gICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9IHNtOmhpZGRlbiBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1lbnVIYW5kbGVyKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIHctZnVsbCBob3ZlcjpiZy1zZWNvbmRhcnkgcC0yIGB9XG4gICAgICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFIb21lIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+IEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWVudUhhbmRsZXIoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGhvdmVyOmJnLXNlY29uZGFyeSBwLTIgYH1cbiAgICAgICAgICAgICAgaHJlZj17XCIvYXNzaWdubWVudFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWRBc3NpZ25tZW50UmV0dXJuZWQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz4gQXNzaWdubWVudFxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtZW51SGFuZGxlcigpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciB3LWZ1bGwgaG92ZXI6Ymctc2Vjb25kYXJ5IHAtMiBgfVxuICAgICAgICAgICAgICBocmVmPXtcIi9zeWxsYWJ1c1wifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8RmFCb29rIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+IFN5bGxhYnVzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWVudUhhbmRsZXIoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGhvdmVyOmJnLXNlY29uZGFyeSBwLTIgYH1cbiAgICAgICAgICAgICAgaHJlZj17XCIvbm90ZXNcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhUGVuIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+IE5vdGVzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeURhcmtcIiBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgQ2xhc3NWYXVsdFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvY29udGFjdFwifT5Db250YWN0PC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4LXJvdyBnYXAtNiBoaWRkZW4gc206ZmxleCBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9ub3Rlc1wifT5Ob3RlczwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3N5bGxhYnVzXCJ9PlN5bGxhYnVzPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYXNzaWdubWVudFwifT5Bc3NzaWdubWV0PC9MaW5rPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgey8qIG1vYmlsZSBzZWN0aW9uICAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gZmxleCBmbGV4LXJvdyBnYXAtMyBtci0yIFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAgdGV4dC14bCBoLWF1dG8gcm91bmRlZC1mdWxsIGJnLXByaW1hcnlEYXJrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcHktMSAke1xuICAgICAgICAgICAgdXNlckRldGFpbHMubmFtZSA/IFwiaW5saW5lLWJsb2NrXCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgfSBgfVxuICAgICAgICA+e2Ake3VzZXJEZXRhaWxzLm5hbWUgPyB1c2VyRGV0YWlscy5uYW1lWzBdIDogXCJcIn1gfTwvcD5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke3VzZXJEZXRhaWxzLm5hbWUgPyBcImhpZGRlblwiIDogXCJcIn0gYH1cbiAgICAgICAgICBocmVmPXtcIi9sb2dpblwifVxuICAgICAgICA+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dXNlckRldGFpbHMubmFtZSA/IFwiaW5saW5lLWJsb2NrXCIgOiBcImhpZGRlblwifSBgfT5cbiAgICAgICAgICBsb2dvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkZhQm9vayIsIkZhUGVuIiwiRmFIb21lIiwiTWRBc3NpZ25tZW50UmV0dXJuZWQiLCJHaUhhbWJ1cmdlck1lbnUiLCJNZENsb3NlIiwidXNlUm91dGVyIiwiTmF2YmFyIiwibWVudU9wZW4iLCJpc01lbnVPcGVuIiwicm91dGVyIiwibWVudUhhbmRsZXIiLCJsb2dvdXRIYW5kbGVyIiwicHVzaCIsInVzZXJEZXRhaWxzIiwibmFtZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJvbkNsaWNrIiwidWwiLCJocmVmIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});