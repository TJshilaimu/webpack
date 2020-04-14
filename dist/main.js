/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./page/create.js":
/*!************************!*\
  !*** ./page/create.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_unite_redColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/unite/redColor */ \"./src/unite/redColor.js\");\n// import isPrime from '../src/unite/isPrime';\r\n\r\n\r\n\r\n\r\nvar divCenter = document.getElementById('divCenter');\r\nvar divContainer = document.getElementById('divContainer');\r\n// 给一个数字后，多这个数字进行处理，即加入到DIV元素中\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(n,isPrime){\r\n    var span = document.createElement('span');\r\n    if(isPrime){\r\n        var colors = Object(_src_unite_redColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        span.style.color= colors;\r\n        createCenter(n,colors)\r\n    }\r\n    span.innerText=n;\r\n    divContainer.appendChild(span);\r\n    divCenter.innerText=n;\r\n});\r\n\r\n// z中间产生的素数给予颜色，并生成飘走特效\r\n\r\nfunction createCenter(n,color){\r\n    var div = document.createElement('div');\r\n    div.className=\"center\";\r\n    div.innerText = n;\r\n    div.style.color=color;\r\n    document.body.appendChild(div);\r\n\r\n    getComputedStyle(div).left\r\n    div.style.transform = `translate(${Object(_src_unite_redColor__WEBPACK_IMPORTED_MODULE_0__[\"getIndex\"])(-300,300)}px,${Object(_src_unite_redColor__WEBPACK_IMPORTED_MODULE_0__[\"getIndex\"])(-300,300)}px)`;\r\n    div.style.opacity = 0;\r\n\r\n// getComputedStyle(div).left\r\n//     div.style.transform = 'translate(200px,200px)';\r\n//     div.style.opacity = 0;\r\n}\r\n\n\n//# sourceURL=webpack:///./page/create.js?");

/***/ }),

/***/ "./page/event.js":
/*!***********************!*\
  !*** ./page/event.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./page/create.js\");\n/* harmony import */ var _src_unite_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/unite/number */ \"./src/unite/number.js\");\n\r\n\r\n\r\nlet n= new _src_unite_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100);\r\nn.callback = function(num,isPrime){\r\n    Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(num,isPrime);\r\n}\r\nvar flag = false\r\nwindow.onclick=function(){\r\n\r\n    if(!flag){\r\n        n.start()\r\n        flag =true;\r\n    }else{\r\n        n.stop();\r\n        flag=false;\r\n\r\n    }\r\n\r\n    \r\n}\n\n//# sourceURL=webpack:///./page/event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/event */ \"./page/event.js\");\n\r\n// import isPrime from './unite/isPrime';\r\n// import redColor from './unite/redColor';\r\n// import NumberTimer from './unite/number'\r\n\r\n// var n= new NumberTimer();\r\n// n.onNumberCreated = function(n,isPrime){\r\n//     console.log(n,isPrime)\r\n// }\r\n\r\n\r\n// n.start()\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/unite/isPrime.js":
/*!******************************!*\
  !*** ./src/unite/isPrime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(n){\r\n    if(n<2){\r\n        return false;\r\n    }\r\n    for(let i = 2; i< n;i++){\r\n        if(n%i == 0){\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n});\n\n//# sourceURL=webpack:///./src/unite/isPrime.js?");

/***/ }),

/***/ "./src/unite/number.js":
/*!*****************************!*\
  !*** ./src/unite/number.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Number1; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/unite/isPrime.js\");\n\r\n\r\nclass Number1 {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.callback = null,\r\n            this.number = 1,\r\n            this.timer = null\r\n    }\r\n    start() {\r\n        //     console.log('11')\r\n        // if (this.timer) {\r\n        //     return\r\n        // }\r\n        // console.log('12')\r\n        //    if (this.timerId) {\r\n        //             return;\r\n        //         }\r\n        this.timer = setInterval(()=> {\r\n            this.callback && this.callback(this.number, Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.number))\r\n            this.number++;\r\n        }, this.duration)\r\n                // this.timerId = setInterval(function () {\r\n                //     this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number))\r\n                //     this.number++;\r\n                // }, this.duration)\r\n        // if (this.timerId) {\r\n        //     return;\r\n        // }\r\n        // this.timerId = setInterval(() => {\r\n        //     this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number))\r\n        //     this.number++;\r\n        // }, this.duration)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/unite/number.js?");

/***/ }),

/***/ "./src/unite/redColor.js":
/*!*******************************!*\
  !*** ./src/unite/redColor.js ***!
  \*******************************/
/*! exports provided: getIndex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndex\", function() { return getIndex; });\nvar colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\nfunction getIndex(min,max){\r\n    return Math.floor(Math.random()*(max-min)+min);\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(){\r\n    var index = getIndex(0,colors.length);\r\n    return colors[index];\r\n\r\n});\n\n//# sourceURL=webpack:///./src/unite/redColor.js?");

/***/ })

/******/ });