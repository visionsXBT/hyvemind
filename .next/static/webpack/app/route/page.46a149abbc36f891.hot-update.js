"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/route/page",{

/***/ "(app-pages-browser)/./app/route/page.tsx":
/*!****************************!*\
  !*** ./app/route/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loading; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst REDIRECT_DELAY = 3500 // 3.5 seconds\n;\nconst REDIRECT_PATH = \"/welcome\";\nfunction Loading() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsMounted(true);\n        return ()=>setIsMounted(false);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!isMounted) return;\n        console.log(\"Setting up redirect timeout...\");\n        const timeout = setTimeout(()=>{\n            console.log(\"Timeout fired, attempting to redirect...\");\n            router.push(REDIRECT_PATH);\n            // Backup redirect method\n            setTimeout(()=>{\n                console.log(\"Backup redirect method...\");\n                window.location.href = REDIRECT_PATH;\n            }, 500);\n        }, REDIRECT_DELAY);\n        return ()=>{\n            console.log(\"Cleaning up timeout...\");\n            clearTimeout(timeout);\n        };\n    }, [\n        router,\n        isMounted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/loading.gif\",\n            alt: \"Loading...\",\n            width: 1280,\n            height: 720,\n            priority: true,\n            onError: (e)=>{\n                console.error(\"Failed to load image:\", e);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\route\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\route\\\\page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Loading, \"/xWvUj4GOET1mVb4wbM4EssfdWE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Loading;\nvar _c;\n$RefreshReg$(_c, \"Loading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yb3V0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ2E7QUFDQTtBQUUzQyxNQUFNSSxpQkFBaUIsS0FBSyxjQUFjOztBQUMxQyxNQUFNQyxnQkFBZ0I7QUFFUCxTQUFTQzs7SUFDdEIsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUk0sYUFBYTtRQUNiLE9BQU8sSUFBTUEsYUFBYTtJQUM1QixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNLLFdBQVc7UUFFaEJFLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1DLFVBQVVDLFdBQVc7WUFDekJILFFBQVFDLEdBQUcsQ0FBQztZQUNaSixPQUFPTyxJQUFJLENBQUNUO1lBRVoseUJBQXlCO1lBQ3pCUSxXQUFXO2dCQUNUSCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pJLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHWjtZQUN6QixHQUFHO1FBQ0wsR0FBR0Q7UUFFSCxPQUFPO1lBQ0xNLFFBQVFDLEdBQUcsQ0FBQztZQUNaTyxhQUFhTjtRQUNmO0lBQ0YsR0FBRztRQUFDTDtRQUFRQztLQUFVO0lBRXRCLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDcEIsbURBQUtBO1lBQ0pxQixLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUyxDQUFDQztnQkFDUmpCLFFBQVFrQixLQUFLLENBQUMseUJBQXlCRDtZQUN6Qzs7Ozs7Ozs7Ozs7QUFJUjtHQTdDd0JyQjs7UUFDUEwsc0RBQVNBOzs7S0FERksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3JvdXRlL3BhZ2UudHN4P2U2NDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBSRURJUkVDVF9ERUxBWSA9IDM1MDAgLy8gMy41IHNlY29uZHNcclxuY29uc3QgUkVESVJFQ1RfUEFUSCA9ICcvd2VsY29tZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSlcclxuICAgIHJldHVybiAoKSA9PiBzZXRJc01vdW50ZWQoZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgcmVkaXJlY3QgdGltZW91dC4uLicpXHJcblxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGltZW91dCBmaXJlZCwgYXR0ZW1wdGluZyB0byByZWRpcmVjdC4uLicpXHJcbiAgICAgIHJvdXRlci5wdXNoKFJFRElSRUNUX1BBVEgpXHJcbiAgICAgIFxyXG4gICAgICAvLyBCYWNrdXAgcmVkaXJlY3QgbWV0aG9kXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYWNrdXAgcmVkaXJlY3QgbWV0aG9kLi4uJylcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJFRElSRUNUX1BBVEhcclxuICAgICAgfSwgNTAwKVxyXG4gICAgfSwgUkVESVJFQ1RfREVMQVkpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0NsZWFuaW5nIHVwIHRpbWVvdXQuLi4nKVxyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcclxuICAgIH1cclxuICB9LCBbcm91dGVyLCBpc01vdW50ZWRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz1cIi9sb2FkaW5nLmdpZlwiXHJcbiAgICAgICAgYWx0PVwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgd2lkdGg9ezEyODB9XHJcbiAgICAgICAgaGVpZ2h0PXs3MjB9XHJcbiAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgaW1hZ2U6JywgZSlcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJFRElSRUNUX0RFTEFZIiwiUkVESVJFQ1RfUEFUSCIsIkxvYWRpbmciLCJyb3V0ZXIiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJjb25zb2xlIiwibG9nIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsIm9uRXJyb3IiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/route/page.tsx\n"));

/***/ })

});