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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function play() {\n  var view = {\n    el: \".player\",\n    template: \"\\n        <audio src=\\\"{{url}}\\\" ></audio>\\n        <div class=\\\"nav\\\">\\n        <div class=\\\"logo\\\"><svg class=\\\"topsvg\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 284 50\\\">\\n            <g fill=\\\"#fff\\\">\\n                <path d=\\\"m36.37 14.412c-2.115-1.367-4.707-2.117-7.377-2.251l-.595-2.174.018.021c-.023-.064-.043-.127-.063-.189l-.176-.643c-.406-1.86.333-2.748.713-3.067.064-.048.131-.097.204-.145 1.74-1.154 4.218.695 4.357.804 1.1 1.055 3.112 1.315 4.198.236 1.098-1.091.836-3.132-.261-4.223-1.708-1.698-6.95-4.426-11.41-1.467-4.01 2.659-4.09 6.402-3.431 8.565l.8 2.927c-1.339.383-2.624.933-3.797 1.647-4.391 2.676-6.594 7.192-6.04 12.391.564 5.335 4.575 9.208 9.536 9.208 5.267 0 9.551-4.262 9.551-9.501-.071-1.251-.057-1.236-.226-2.354-.165-1.091-1.783-6.218-1.783-6.218.994.229 1.923.602 2.725 1.12 9.06 5.856 5.289 15.176 5.118 15.583-2.495 5.954-7.934 9.509-14.923 9.754-4.555.16-8.919-1.535-12.289-4.772-3.554-3.41-5.591-8.189-5.591-13.11 0-7.414 4.687-14.14 11.662-16.749 1.453-.542 2.625-2.087 1.822-3.881-.632-1.41-2.344-1.895-3.796-1.352-9.156 3.418-15.307 12.251-15.307 21.981 0 6.43 2.664 12.675 7.308 17.14 4.283 4.111 9.793 6.349 15.595 6.349.264 0 .529-.004.793-.014 9.142-.32 16.585-5.251 19.9-13.164 2.071-4.807 3.225-15.684-7.231-22.445m-9.396 12.139c0 2.157-1.764 3.911-3.933 3.911-2.407 0-3.734-2.179-3.949-4.204-.408-3.861 1.619-5.959 3.392-7.04.719-.438 1.509-.781 2.335-1.029 0 0 1.912 6.05 2.061 6.99.164 1.037.094 1.372.094 1.372\\\"></path>\\n                <path d=\\\"m80.12 40.04c0 0-.333-2.724 0-3.144 7.73-9.758 7.56-22.887 7.56-22.887h4.738c-.082.452-2.448 16.971-12.298 26.03\\\"></path>\\n                <path d=\\\"m92.85 40.04c0 0 .333-2.724 0-3.144-7.729-9.758-8.131-22.887-8.131-22.887h-4.739c.082.452 3.02 16.971 12.87 26.03\\\"></path>\\n                <path d=\\\"m66.12 40.04c0 0-.332-2.724 0-3.144 7.711-9.758 8.138-22.887 8.138-22.887h4.727c-.081.452-3.038 16.971-12.865 26.03\\\"></path>\\n                <path d=\\\"m78.82 40.04c0 0 .332-2.724 0-3.144-7.71-9.758-7.515-22.887-7.515-22.887h-4.728c.081.452 2.417 16.971 12.243 26.03\\\"></path>\\n                <path d=\\\"m93.1 6.82l-28.11.201c-3.618-.045-5-.822-5-2.01 0 .757 0 37.4 0 41.02l5-.006v-36h26c1.756 0 3 .17 3 2v29c0 1.688-1.27 2.27-6.06 2.818-.408.047-.708 2.188-.708 2.188h5.881c3.547 0 5.881-1.355 5.881-5.428v-28.351c.0001-4.072-2.333-5.428-5.88-5.428\\\"></path>\\n                <path d=\\\"m154.33 10.02h37.67c-.106-1.835-.617-3.01-2.354-3.01h-37.67c.106 1.833.618 3.01 2.354 3.01\\\"></path>\\n                <path d=\\\"m191.6 20.02h-40.624c.108 1.835.627 3.01 2.39 3.01h40.623c-.108-1.835-.628-3.01-2.389-3.01\\\"></path>\\n                <path fill-rule=\\\"evenodd\\\" d=\\\"m232 37.03h-25.01v-3.01h25.01v3.01\\\"></path>\\n                <path d=\\\"m221.98 10.02v-3.996h-5v3.995h5\\\"></path>\\n                <path d=\\\"m237.61 9.03h-38.613c.107 1.816.623 2.979 2.376 2.979h38.614c-.107-1.817-.623-2.979-2.377-2.979\\\"></path>\\n                <path d=\\\"m238.62 20.05h-40.771c.106 1.835.619 3.01 2.363 3.01h40.771c-.107-1.836-.619-3.01-2.363-3.01\\\"></path>\\n                <path d=\\\"m192.76 39.03c-.751-2.811-2.252-8.094-2.252-8.094h-5.314c0 0 1.721 6.03 2.406 8.371.337 1.148.185 1.649.104 2.265-.21 1.587-.896 1.433-2.51 1.433h-23.03c-2.757 0-3.196-2.519-2.805-3.695 1.51-4.541 5.313-16.293 5.313-16.293h-5.313c0 0-3.673 11.45-5.153 16.01-.364 1.123-.271 2.446-.16 2.994.595 2.951 2.752 3.998 5.757 3.998h27.749c3 0 4.677-1.048 5.271-3.999.108-.549.332-1.493-.068-2.994\\\"></path>\\n                <path d=\\\"m230.34 24.87h-24.816c-2.188.021-3.546-.115-3.546-.602 0 0 0 14.237 0 17.453 0 4.063 1.755 4.212 5.317 4.212h29.545v-16.248c0-4.064-2.936-4.815-6.5-4.815m1.65 5.563v12.585h-22.665c-1.747 0-2.343-.427-2.343-1.798v-13.185h22.08c1.748 0 2.928-.157 2.928 1.198v1.2\\\"></path>\\n                <path d=\\\"m210.24 17.581v-.642-1.926h-5.235v1.926c0 1.534.444 3.056.974 4.086h7.02c-1.736 0-2.762-1.495-2.762-3.444\\\"></path>\\n                <path d=\\\"m233.98 16.939v-1.926h-5.236v1.926.642c0 1.949-1.023 3.444-2.764 3.444h7.03c.53-1.029.967-2.551.967-4.086\\\"></path>\\n                <path d=\\\"m261.99 13.02v28c0 1.704-.629 2.146-5.625 2.702-.426.047-1.377 2.285-1.377 2.285h6.276c3.407 0 5.726-.923 5.718-4.341-.018-8 0-28.638 0-28.638l-4.992-.008\\\"></path>\\n                <path d=\\\"m283.82 44.12c.38.664 0 .904 0 .904-3.755-.994-8.592-6.405-9.842-15h5.367c.0001 0 .891 7.844 4.475 14.1\\\"></path>\\n                <path fill-rule=\\\"evenodd\\\" d=\\\"m138.98 16.02h-23.99v-2.994h23.99v2.994\\\"></path>\\n                <path d=\\\"m138.02 6.771h-22.663c-4.02 0-5.367-.559-5.367-1.76 0 .736 0 7.626 0 11.147 0 3.961 1.175 5.867 4.771 5.867h23.259 5.963v-9.974c0-3.961-2.367-5.28-5.963-5.28m.971 12.257h-21.648c-1.761 0-2.36-.543-2.36-2.253v-6.759h21.649c1.761 0 2.36-.02 2.36 1.69v7.322z\\\"></path>\\n                <path d=\\\"m120 27.05c-2.535 3.611-7.836 9.777-14.92 13.465-.411.214-1.535 1.204-1.182 1.204.738 0 .308 0 2.363 0 4.674 0 17.408-9.327 19.06-14.669h-5.318\\\"></path>\\n                <path d=\\\"m131.52 27.05c-2.977 7.094-9.188 14.377-17.283 18.05-.421.19-1.24.827-.887.827.886 0 1.33 0 1.773 0 5.411 0 19.244-8.176 21.715-18.881h-5.318\\\"></path>\\n                <path d=\\\"m147 31.62c0-4.074-2.461-7.6-6.01-7.6h-28c-1.267-.03-1.884.167-2.197-.548-.226-.516-.883-.452-.883-.452-.686 4.109-1.573 7.03-5.299 9.05-.159.07-.978.863-.441.905 1.038.079 2.656-.217 3.532-.453 2.042-.551 3.583-3.196 5.288-5.504h26c1.769.007 2.712.957 2.712 2.788v6.337c0 2.745-.478 7.693-9.3 7.693-.411 0-.708 2.188-.708 2.188h4.709c6.263 0 10.598-2.224 10.598-10.334v-4.072z\\\"></path>\\n                <path d=\\\"m280.64 22.968h-27.681c-1.758 0-2.786.011-2.65-1.763.145-1.885.884-11.729.884-11.729 2.38-.002 19.912-.12 29.595-.69.567-.033.575-2.796 0-2.76-10.47.648-34.798.995-34.798.995s-.693 9.675-.98 13.724c-.291 4.081 2.043 5.29 5.595 5.29h32.392c-.107-1.87-.619-3.067-2.357-3.067\\\"></path>\\n                <path d=\\\"m244.15 44.12c-.369.664 0 .904 0 .904 3.641-.994 8.617-6.405 9.83-15h-5.203c0 0-1.152 7.844-4.627 14.1\\\"></path>\\n            </g>\\n        </svg></div>\\n        <div class=\\\"pointer\\\"><img src=\\\"../src/img/pointer.png\\\" alt=\\\"\\\">\\n        <div class=\\\"playbutton\\\">\\n            <div class=\\\"play\\\"><img src=\\\"../src/img/\\u64AD\\u653E.png\\\" alt=\\\"\\\"></div>\\n            <div class=\\\"pause\\\"><img src=\\\"../src/img/\\u6682\\u505C.png\\\" alt=\\\"\\\"></div>\\n        </div>\\n        </div> \\n    </div>\\n\\n    <div class=discWrapper>    \\n        <dic class=\\\"disc_light\\\"><img src=\\\"../src/img/dist-light.png\\\" alt=\\\"\\\">\\n            <div class=\\\"disc\\\"><img src=\\\"../src/img/dist.png\\\" alt=\\\"\\\"> \\n                <div class=\\\"disc_cover\\\"><img src=\\\"../src/img/nyancat.png\\\" alt=\\\"\\\" > \\n                    \\n                </div>\\n            </div>\\n        </dic>\\n    </div>\\n \\n    <div class=\\\"lyricsWrapper\\\">\\n        <h4>{{song}}</h4>\\n        <h6>{{singer}}</h6>\\n        <div class=lyrics>\\n            <p>{{lyrics}}</p>\\n        </div>\\n    </div>\\n    <div class=\\\"buttonWrapper\\\">\\n        <button id=open>\\u6253\\u5F00</button>\\n        <button id=download>\\u4E0B\\u8F7D</button>\\n    </div>\\n        \",\n    render: function render(data) {\n      var $content = $(this.template.replace('{{url}}', data.url).replace('{{song}}', data.song).replace('{{singer}}', data.singer).replace('{{lyrics}}', data.lyrics));\n      $(this.el).html($content);\n    }\n  };\n  var model = {\n    data: {\n      song: [],\n      playStatus: 'pausing'\n    },\n    getSong: function getSong(id) {\n      var _this = this;\n\n      var query = new AV.Query('playlist');\n      return query.get(id).then(function (song) {\n        Object.assign(_this.data.song, _objectSpread({\n          id: song.id\n        }, song.attributes));\n        return song;\n      }, function (error) {// 异常处理\n      });\n    }\n  };\n  var controller = {\n    init: function init(view, model) {\n      var _this2 = this;\n\n      this.view = view;\n      this.model = model;\n      var id = this.getId();\n      this.model.getSong(id).then(function () {\n        _this2.view.render(_this2.model.data.song);\n\n        _this2.bindEvents();\n      });\n    },\n    getId: function getId() {\n      var id = window.location.search;\n\n      if (id.indexOf(\"?\") === 0) {\n        id = id.substr(1);\n      }\n\n      id = id.split('&').filter(function (a) {\n        return a;\n      });\n      var newId;\n\n      for (var i = 0; i < id.length; i++) {\n        var base = id[i].split('=');\n        var key = base[0];\n        var value = base[1];\n\n        if (key === 'id') {\n          newId = value;\n          break;\n        }\n      }\n\n      return newId;\n    },\n    bindEvents: function bindEvents() {\n      var _this3 = this;\n\n      $(this.view.el).on('click', '.playbutton', function (e) {\n        if (_this3.model.data.playStatus === 'playing') {\n          _this3.model.data.playStatus = 'pausing';\n          $(e.currentTarget).removeClass('active');\n          $(_this3.view.el).find('.discWrapper').removeClass('active');\n\n          _this3.pause();\n        } else if (_this3.model.data.playStatus === 'pausing') {\n          _this3.model.data.playStatus = 'playing';\n\n          _this3.play();\n\n          $(e.currentTarget).addClass('active');\n          $(_this3.view.el).find('.discWrapper').addClass('active');\n        }\n      });\n      var audio = $(this.view.el).find(\"audio\")[0];\n\n      if (audio) {\n        audio.loop = false;\n        audio.addEventListener('ended', function () {\n          _this3.model.data.playStatus = 'pausing';\n          $(_this3.view.el).find('.playbutton').removeClass('active');\n          $(_this3.view.el).find('.discWrapper').removeClass('active');\n        }, false);\n      }\n    },\n    play: function play() {\n      $(this.view.el).find(\"audio\")[0].play();\n    },\n    pause: function pause() {\n      $(this.view.el).find(\"audio\")[0].pause();\n    }\n  };\n  controller.init(view, model);\n})());\n\n//# sourceURL=webpack:///./src/js/app/play.js?");

/***/ })

/******/ });