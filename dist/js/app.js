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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app/default.scss":
/*!**********************************!*\
  !*** ./src/css/app/default.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/app/default.scss?");

/***/ }),

/***/ "./src/js/admin/av.js":
/*!****************************!*\
  !*** ./src/js/admin/av.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function av_init() {\n  var APP_ID = 'hecbtpohmI9c098rarsJ1Kqb-gzGzoHsz';\n  var APP_KEY = 'xpSViR1zaxHetHbfXotcPdkL';\n  AV.init({\n    appId: APP_ID,\n    appKey: APP_KEY\n  });\n})());\n\n//# sourceURL=webpack:///./src/js/admin/av.js?");

/***/ }),

/***/ "./src/js/app/app.js":
/*!***************************!*\
  !*** ./src/js/app/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_default_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/app/default.scss */ \"./src/css/app/default.scss\");\n/* harmony import */ var _css_app_default_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_default_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _admin_av__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/av */ \"./src/js/admin/av.js\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play */ \"./src/js/app/play.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/js/app/app.js?");

/***/ }),

/***/ "./src/js/app/play.js":
/*!****************************!*\
  !*** ./src/js/app/play.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function play() {\n  var view = {\n    el: \".player\",\n    template: \"\\n        <audio src=\\\"{{url}}\\\" controls></audio>\\n        <button id=play>play</button>\\n        <button id=\\\"pause\\\">pause</button>\\n        \" // render(data){\n    //     let $content=$(this.template.replace('{{url}}',data.url))\n    //     $(this.el).html($content)\n    // }\n\n  };\n  var model = {\n    data: {},\n    getSong: function getSong(id) {\n      var _this = this;\n\n      var query = new AV.Query('playlist');\n      return query.get(id).then(function (song) {\n        Object.assign(_this.data, _objectSpread({\n          id: song.id\n        }, song.attributes));\n        return song;\n      }, function (error) {// 异常处理\n      });\n    }\n  };\n  var controller = {\n    init: function init(view, model) {\n      this.view = view;\n      this.model = model;\n      var id = this.getId();\n      this.model.getSong(id).then(function () {// this.view.render(this.model.data)\n      });\n      this.bindEvents();\n    },\n    getId: function getId() {\n      var id = window.location.search;\n\n      if (id.indexOf(\"?\") === 0) {\n        id = id.substr(1);\n      }\n\n      id = id.split('&').filter(function (a) {\n        return a;\n      });\n      var newId;\n\n      for (var i = 0; i < id.length; i++) {\n        var base = id[i].split('=');\n        var key = base[0];\n        var value = base[1];\n\n        if (key === 'id') {\n          newId = value;\n          break;\n        }\n      }\n\n      return newId;\n    },\n    bindEvents: function bindEvents() {\n      var _this2 = this;\n\n      $(this.view.el).on('click', 'button#play', function () {\n        console.log(1);\n\n        _this2.play();\n      });\n      $(this.view.el).on('click', 'button#pause', function () {\n        _this2.pause();\n      });\n    },\n    play: function play() {\n      console.log(this.a);\n      $(this.view.el).find(\"audio\")[0].play();\n    },\n    pause: function pause() {\n      $(this.view.el).find(\"audio\")[0].pause();\n    }\n  };\n  controller.init(view, model);\n})());\n\n//# sourceURL=webpack:///./src/js/app/play.js?");

/***/ })

/******/ });