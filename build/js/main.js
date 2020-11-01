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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/const.js":
/*!****************************!*\
  !*** ./source/js/const.js ***!
  \****************************/
/*! exports provided: MANIFESTO_DONT, MANIFESTO_FOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANIFESTO_DONT", function() { return MANIFESTO_DONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANIFESTO_FOR", function() { return MANIFESTO_FOR; });
const MANIFESTO_DONT = [
  `не-1`,
  `не-2`,
  `не-3`
];

const MANIFESTO_FOR = [
  `для-1`,
  `для-2`,
  `для-3`
];


/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./source/js/const.js");


const form = document.querySelector(`form`);
const result = document.querySelector(`.result`);
const MANIFESTO_DONT_MAX = _const_js__WEBPACK_IMPORTED_MODULE_0__["MANIFESTO_DONT"].length;
const MANIFESTO_FOR_MAX = _const_js__WEBPACK_IMPORTED_MODULE_0__["MANIFESTO_FOR"].length;

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  const number1 = Number(form.querySelector(`#number-1`).value);
  const result1 = result.querySelector(`#result-1`);
  result1.textContent = _const_js__WEBPACK_IMPORTED_MODULE_0__["MANIFESTO_DONT"][number1 - 1];

  const number2 = Number(form.querySelector(`#number-2`).value);
  const result2 = result.querySelector(`#result-2`);
  result2.textContent = _const_js__WEBPACK_IMPORTED_MODULE_0__["MANIFESTO_FOR"][number2 - 1];
});

form.addEventListener(`reset`, () => {
  const results = Array.from(result.children);
  results.forEach((result) => {
    result.textContent = ``;
  })
});

const randomValueButton = form.querySelector(`#random-value`);
randomValueButton.addEventListener(`click`, () => {
  form.querySelector(`#number-1`).value = Math.floor(Math.random() * MANIFESTO_DONT_MAX) + 1;
  form.querySelector(`#number-2`).value = Math.floor(Math.random() * MANIFESTO_FOR_MAX) + 1;
})


/***/ })

/******/ });
//# sourceMappingURL=main.js.map