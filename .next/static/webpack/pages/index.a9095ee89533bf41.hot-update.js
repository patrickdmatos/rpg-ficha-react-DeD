"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/localStorageService.ts":
/*!************************************!*\
  !*** ./src/localStorageService.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCharacterData: function() { return /* binding */ loadCharacterData; },\n/* harmony export */   saveCharacterData: function() { return /* binding */ saveCharacterData; }\n/* harmony export */ });\nconst LOCAL_STORAGE_KEY = \"characterData\";\nconst saveCharacterData = (data)=>{\n    try {\n        const serializedData = JSON.stringify(data);\n        localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);\n    } catch (error) {\n        console.error(\"Failed to save character data to local storage:\", error);\n    }\n};\nconst loadCharacterData = ()=>{\n    try {\n        const serializedData = localStorage.getItem(LOCAL_STORAGE_KEY);\n        if (serializedData === null) {\n            return null;\n        }\n        return JSON.parse(serializedData);\n    } catch (error) {\n        console.error(\"Failed to load character data from local storage:\", error);\n        return null;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYWxTdG9yYWdlU2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQTJEQSxNQUFNQSxvQkFBb0I7QUFFbkIsTUFBTUMsb0JBQW9CLENBQUNDO0lBQzlCLElBQUk7UUFDQSxNQUFNQyxpQkFBaUJDLEtBQUtDLFNBQVMsQ0FBQ0g7UUFDdENJLGFBQWFDLE9BQU8sQ0FBQ1AsbUJBQW1CRztJQUM1QyxFQUFFLE9BQU9LLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLG1EQUFtREE7SUFDckU7QUFDSixFQUFFO0FBRUssTUFBTUUsb0JBQW9CO0lBQzdCLElBQUk7UUFDQSxNQUFNUCxpQkFBaUJHLGFBQWFLLE9BQU8sQ0FBQ1g7UUFDNUMsSUFBSUcsbUJBQW1CLE1BQU07WUFDekIsT0FBTztRQUNYO1FBQ0EsT0FBT0MsS0FBS1EsS0FBSyxDQUFDVDtJQUN0QixFQUFFLE9BQU9LLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHFEQUFxREE7UUFDbkUsT0FBTztJQUNYO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbG9jYWxTdG9yYWdlU2VydmljZS50cz8zYzZjIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgV2VhcG9uID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZGFtYWdlOiBzdHJpbmc7XHJcbiAgICBudW1DdXJyZW50OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBudW1NYXg6IG51bWJlciB8IHN0cmluZztcclxuICAgIGF0dGFjazogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgcmVhY2g6IHN0cmluZztcclxuICAgIGRlZmVjdDogbnVtYmVyO1xyXG4gICAgYXJlYTogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBTa2lsbCA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByb2ZpY2llbmN5OiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBTcGVsbCA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBzY2hvb2w6IHN0cmluZztcclxuICAgIGNhc3RpbmdUaW1lOiBzdHJpbmc7XHJcbiAgICByYW5nZTogc3RyaW5nO1xyXG4gICAgY29tcG9uZW50czogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBDaGFyYWN0ZXJEYXRhID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGxheWVyOiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIHJhY2U6IHN0cmluZztcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZztcclxuICAgIGFsaWdubWVudDogc3RyaW5nO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHN0cmVuZ3RoOiBudW1iZXI7XHJcbiAgICAgICAgZGV4dGVyaXR5OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RpdHV0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgaW50ZWxsaWdlbmNlOiBudW1iZXI7XHJcbiAgICAgICAgd2lzZG9tOiBudW1iZXI7XHJcbiAgICAgICAgY2hhcmlzbWE6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBoaXRQb2ludHM6IHtcclxuICAgICAgICBjdXJyZW50OiBudW1iZXI7XHJcbiAgICAgICAgbWF4OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgYXJtb3JDbGFzczogbnVtYmVyO1xyXG4gICAgaW5pdGlhdGl2ZTogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIHdlYXBvbnM6IFdlYXBvbltdO1xyXG4gICAgc2tpbGxzOiBTa2lsbFtdO1xyXG4gICAgc3BlbGxzOiBTcGVsbFtdO1xyXG4gICAgZXF1aXBtZW50OiBzdHJpbmdbXTtcclxuICAgIGJhY2tncm91bmREZXRhaWxzOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICdjaGFyYWN0ZXJEYXRhJztcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlQ2hhcmFjdGVyRGF0YSA9IChkYXRhOiBDaGFyYWN0ZXJEYXRhKTogdm9pZCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9LRVksIHNlcmlhbGl6ZWREYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgY2hhcmFjdGVyIGRhdGEgdG8gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENoYXJhY3RlckRhdGEgPSAoKTogQ2hhcmFjdGVyRGF0YSB8IG51bGwgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfS0VZKTtcclxuICAgICAgICBpZiAoc2VyaWFsaXplZERhdGEgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhKSBhcyBDaGFyYWN0ZXJEYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBjaGFyYWN0ZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiTE9DQUxfU1RPUkFHRV9LRVkiLCJzYXZlQ2hhcmFjdGVyRGF0YSIsImRhdGEiLCJzZXJpYWxpemVkRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9hZENoYXJhY3RlckRhdGEiLCJnZXRJdGVtIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/localStorageService.ts\n"));

/***/ })

});