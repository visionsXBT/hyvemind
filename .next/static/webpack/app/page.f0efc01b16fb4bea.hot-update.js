"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/typing-text.tsx":
/*!****************************************!*\
  !*** ./app/components/typing-text.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TypingText: function() { return /* binding */ TypingText; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ TypingText auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TypingText() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fullText = \"nothing to see here.\";\n    const [showCursor, setShowCursor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (text.length < fullText.length) {\n            const timeout = setTimeout(()=>{\n                setText(fullText.slice(0, text.length + 1));\n            }, 100);\n            return ()=>clearTimeout(timeout);\n        }\n    }, [\n        text\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setShowCursor((prev)=>!prev);\n        }, 500);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"Connection, monospace\",\n                    fontSize: \"35px\",\n                    color: \"#09f156\",\n                    textAlign: \"center\",\n                    marginBottom: \"10px\"\n                },\n                children: \"HYVENET\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\components\\\\typing-text.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"AdvancedPixel7, monospace\",\n                    fontSize: \"32px\",\n                    color: \"#09f156\",\n                    textAlign: \"center\"\n                },\n                children: [\n                    text,\n                    \"[ \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/route\",\n                        style: {\n                            fontFamily: \"AdvancedPixel7, monospace\",\n                            fontSize: \"32px\",\n                            color: \"#09f156\",\n                            textDecoration: \"none\",\n                            cursor: \"pointer\",\n                            padding: \"4px 8px\",\n                            display: \"inline-block\",\n                            marginLeft: \"4px\",\n                            animation: \"blink 1s step-end infinite\",\n                            visibility: showCursor ? \"visible\" : \"hidden\"\n                        },\n                        children: \"enter >\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\components\\\\typing-text.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    \" ]\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\components\\\\typing-text.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\hyvemain\\\\app\\\\components\\\\typing-text.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(TypingText, \"17vWBoDCC5yg90vbv+HfDTpAXLU=\");\n_c = TypingText;\nvar _c;\n$RefreshReg$(_c, \"TypingText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3R5cGluZy10ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUN0QjtBQUVyQixTQUFTSTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTU0sV0FBVztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUcsS0FBS0ssTUFBTSxHQUFHSCxTQUFTRyxNQUFNLEVBQUU7WUFDakMsTUFBTUMsVUFBVUMsV0FBVztnQkFDekJOLFFBQVFDLFNBQVNNLEtBQUssQ0FBQyxHQUFHUixLQUFLSyxNQUFNLEdBQUc7WUFDMUMsR0FBRztZQUNILE9BQU8sSUFBTUksYUFBYUg7UUFDNUI7SUFDRixHQUFHO1FBQUNOO0tBQUs7SUFFVEgsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxXQUFXQyxZQUFZO1lBQzNCUCxjQUFjUSxDQUFBQSxPQUFRLENBQUNBO1FBQ3pCLEdBQUc7UUFDSCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNBO2dCQUFJQyxPQUFPO29CQUNWQyxZQUFZO29CQUNaQyxVQUFVO29CQUNWQyxPQUFPO29CQUNQQyxXQUFXO29CQUNYQyxjQUFjO2dCQUNoQjswQkFDRzs7Ozs7OzBCQUdILDhEQUFDTjtnQkFBSUMsT0FBTztvQkFDVkMsWUFBWTtvQkFDWkMsVUFBVTtvQkFDVkMsT0FBTztvQkFDUEMsV0FBVztnQkFDYjs7b0JBQ0duQjtvQkFDQTtrQ0FDRCw4REFBQ0Ysa0RBQUlBO3dCQUNIdUIsTUFBSzt3QkFDTE4sT0FBTzs0QkFDTEMsWUFBWTs0QkFDWkMsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUEksZ0JBQWdCOzRCQUNoQkMsUUFBUTs0QkFDUkMsU0FBUzs0QkFDVEMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsV0FBVzs0QkFDWEMsWUFBWXpCLGFBQWEsWUFBWTt3QkFDdkM7a0NBQ0Q7Ozs7OztvQkFHQTs7Ozs7Ozs7Ozs7OztBQUlUO0dBOURnQko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvdHlwaW5nLXRleHQudHN4PzFkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHlwaW5nVGV4dCgpIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmdWxsVGV4dCA9ICdub3RoaW5nIHRvIHNlZSBoZXJlLidcclxuICBjb25zdCBbc2hvd0N1cnNvciwgc2V0U2hvd0N1cnNvcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRleHQubGVuZ3RoIDwgZnVsbFRleHQubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUZXh0KGZ1bGxUZXh0LnNsaWNlKDAsIHRleHQubGVuZ3RoICsgMSkpXHJcbiAgICAgIH0sIDEwMClcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KVxyXG4gICAgfVxyXG4gIH0sIFt0ZXh0XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q3Vyc29yKHByZXYgPT4gIXByZXYpXHJcbiAgICB9LCA1MDApXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBmb250RmFtaWx5OiAnQ29ubmVjdGlvbiwgbW9ub3NwYWNlJyxcclxuICAgICAgICBmb250U2l6ZTogJzM1cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzA5ZjE1NicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG4gICAgICB9fT5cclxuICAgICAgICB7J0hZVkVORVQnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgXHJcbiAgICAgICAgZm9udEZhbWlseTogJ0FkdmFuY2VkUGl4ZWw3LCBtb25vc3BhY2UnLCBcclxuICAgICAgICBmb250U2l6ZTogJzMycHgnLCBcclxuICAgICAgICBjb2xvcjogJyMwOWYxNTYnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgfX0+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgICAgeydbICd9XHJcbiAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICBocmVmPVwiL3JvdXRlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQWR2YW5jZWRQaXhlbDcsIG1vbm9zcGFjZScsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzJweCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzA5ZjE1NicsXHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNHB4JyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAnYmxpbmsgMXMgc3RlcC1lbmQgaW5maW5pdGUnLFxyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBzaG93Q3Vyc29yID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZW50ZXIgJmd0O1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7JyBdJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlR5cGluZ1RleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImZ1bGxUZXh0Iiwic2hvd0N1cnNvciIsInNldFNob3dDdXJzb3IiLCJsZW5ndGgiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInNsaWNlIiwiY2xlYXJUaW1lb3V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImhyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsInBhZGRpbmciLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImFuaW1hdGlvbiIsInZpc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/typing-text.tsx\n"));

/***/ })

});