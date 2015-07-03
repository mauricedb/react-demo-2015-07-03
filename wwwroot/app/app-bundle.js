/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Maurice on 7/3/2015.
	 */

	'use strict';

	var foo = __webpack_require__(1);

	foo.setName('Joe');
	foo.greet();

	var data = [1, 2, 3];

	data.forEach(function (n) {
	  console.log(n);
	});

	data.forEach(function (n) {
	  return console.log(n);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by Maurice on 7/3/2015.
	 */

	'use strict';

	var state = {};

	module.exports = {
	    greet: function greet() {
	        alert('Hello ' + state.name);
	    },
	    setName: function setName(name) {
	        state.name = name;
	    }
	};

/***/ }
/******/ ]);