/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaedalView = exports.BlockView = exports.ListView = void 0;\nvar BaedalView_1 = __webpack_require__(/*! ./view/BaedalView */ \"./src/view/BaedalView.ts\");\nObject.defineProperty(exports, \"BaedalView\", ({ enumerable: true, get: function () { return BaedalView_1.BaedalView; } }));\nvar BlockView_1 = __webpack_require__(/*! ./view/BlockView */ \"./src/view/BlockView.ts\");\nObject.defineProperty(exports, \"BlockView\", ({ enumerable: true, get: function () { return BlockView_1.BlockView; } }));\nvar ListView_1 = __webpack_require__(/*! ./view/ListView */ \"./src/view/ListView.ts\");\nObject.defineProperty(exports, \"ListView\", ({ enumerable: true, get: function () { return ListView_1.ListView; } }));\n\n\n//# sourceURL=webpack://extractmenu/./src/index.ts?");

/***/ }),

/***/ "./src/view/BaedalView.ts":
/*!********************************!*\
  !*** ./src/view/BaedalView.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaedalView = void 0;\nvar BaseView_1 = __webpack_require__(/*! ./BaseView */ \"./src/view/BaseView.ts\");\n/**\n *\n */\nvar BaedalView = /** @class */ (function (_super) {\n    __extends(BaedalView, _super);\n    function BaedalView() {\n        var _this_1 = _super !== null && _super.apply(this, arguments) || this;\n        _this_1._conCount = 1;\n        _this_1._drawMode = 0;\n        _this_1._listenersStore = {};\n        return _this_1;\n    }\n    BaedalView.prototype.draw = function () {\n        if (typeof this.container !== 'string') {\n            this.erase();\n            this.createBox(this.data, this.container);\n        }\n    };\n    Object.defineProperty(BaedalView.prototype, \"drawMode\", {\n        set: function (value) {\n            if (this._drawMode !== value) {\n                this._drawMode = value;\n                this.draw();\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    BaedalView.prototype.createBox = function (data, parent, delivery) {\n        if (data['template']) {\n            this.createColumn(data, parent);\n        }\n        else if (data['name']) {\n            this.createItem(data, parent, delivery);\n        }\n        else {\n            this.createContainer(data, parent);\n        }\n    };\n    BaedalView.prototype.createContainer = function (data, parent) {\n        for (var key in data) {\n            var conInner = document.createElement('div');\n            conInner.className = 'con-inner' + this._conCount;\n            this._conCount++;\n            this.createBox(data[key], conInner);\n            this._conCount--;\n            if (this._conCount === 1) {\n                var con = document.createElement('div');\n                con.className = 'con-name' + this._conCount;\n                con.innerHTML = key;\n                parent.appendChild(con);\n            }\n            parent.appendChild(conInner);\n        }\n    };\n    BaedalView.prototype.createColumn = function (data, parent) {\n        if (data.delivery === false) {\n            return;\n        }\n        var columnDOM = document.createElement('div');\n        columnDOM.className = 'column';\n        var itemsDOM = document.createElement('div');\n        itemsDOM.className = 'items';\n        var name = data.template.KR;\n        var items = data.items;\n        columnDOM.innerHTML = \"<b>\" + name + \"</b>\";\n        var len = items.length;\n        if (data.delivery) {\n            for (var i = 0; i < len; i++) {\n                this.createBox(items[i], itemsDOM, true);\n            }\n        }\n        else {\n            for (var i = 0; i < len; i++) {\n                this.createBox(items[i], itemsDOM);\n            }\n        }\n        parent.appendChild(columnDOM);\n        parent.appendChild(itemsDOM);\n    };\n    BaedalView.prototype.createItem = function (data, parent, delivery) {\n        if (!delivery) {\n            if (!data.delivery) {\n                return;\n            }\n        }\n        var itemDom = document.createElement('div');\n        itemDom.className = 'item-container';\n        itemDom.innerHTML = \"<div style=\\\"width:200px; font-size: 20px;\\\">\" + data.name.KR + \"</div>\";\n        this.createPrice(data.price, itemDom, data.packing);\n        this.createOpts(data.menuOptions, itemDom);\n        parent.appendChild(itemDom);\n    };\n    BaedalView.prototype.createPrice = function (price, parent, packingfee) {\n        var priceContainer = document.createElement('div');\n        priceContainer.className = 'price-con';\n        priceContainer.innerHTML = '<b>가격</b>';\n        for (var priceType in price) {\n            var priT = priceType === 'dessert' || priceType === 'meal' ? '' : priceType + ': ';\n            var priceString = \"\" + priT + (price[priceType] + (packingfee || 0)) + \"\\uC6D0\";\n            var pri = document.createElement('div');\n            pri.innerHTML = priceString;\n            priceContainer.appendChild(pri);\n        }\n        parent.appendChild(priceContainer);\n    };\n    BaedalView.prototype.createOpts = function (menuOpts, parent) {\n        if (this._drawMode === 0) {\n            var menuOptDom = document.createElement('div');\n            menuOptDom.className = 'opt-con';\n            for (var menuOptType in menuOpts) {\n                var innerOpt = document.createElement('div');\n                if (menuOptType === 'extra' || menuOptType === 'addEventBeverage') {\n                    innerOpt.innerHTML = '<b>추가</b>';\n                    innerOpt.className = 'extra';\n                    var optData = menuOpts[menuOptType];\n                    this.createExtraSimple(optData, innerOpt);\n                }\n                else if (menuOptType === 'perl') {\n                    innerOpt.innerHTML = '<b>펄 선택</b>';\n                    innerOpt.className = 'perl';\n                    var optData = menuOpts[menuOptType];\n                    this.createExtraSimple(optData, innerOpt);\n                }\n                else if (menuOptType === 'taste') {\n                    innerOpt.innerHTML = '<b>맛</b>';\n                    innerOpt.className = 'taste';\n                    var optData = menuOpts[menuOptType];\n                    this.createExtraSimple(optData, innerOpt);\n                }\n                else if (menuOptType === 'type') {\n                    innerOpt.innerHTML = '<b>종류</b>';\n                    innerOpt.className = 'type';\n                    var optData = menuOpts[menuOptType];\n                    this.createExtraSimple(optData, innerOpt);\n                }\n                else if (menuOptType === 'candle') {\n                    innerOpt.innerHTML = '<b>초</b>';\n                    innerOpt.className = 'candle';\n                    var optData = menuOpts[menuOptType];\n                    this.createExtraSimple(optData, innerOpt);\n                }\n                else if (menuOptType === 'sizeUp') {\n                    innerOpt.className = 'size-up';\n                    innerOpt.innerHTML = \"\\uC0AC\\uC774\\uC988\\uC5C5: \" + menuOpts[menuOptType] + \"\\uC6D0\";\n                }\n                menuOptDom.appendChild(innerOpt);\n            }\n            parent.appendChild(menuOptDom);\n        }\n        else if (this._drawMode === 1) {\n        }\n    };\n    BaedalView.prototype.createExtraSimple = function (simpleData, parent) {\n        for (var i = 0; i < simpleData.length; i++) {\n            var simple = document.createElement('div');\n            if (typeof simpleData[i] === 'number') {\n                simple.innerHTML = '<b>총 최대 추가 가능 갯수: 4</b>';\n            }\n            else {\n                var sd = simpleData[i];\n                var sdString = sd.KR;\n                if (sd.price) {\n                    sdString += \": \" + sd.price + \"\\uC6D0\";\n                    if (sd.maxNumber) {\n                        sdString += \"<i>(\" + sd.maxNumber + \"\\uAC1C \\uAE4C\\uC9C0 \\uCD94\\uAC00 \\uAC00\\uB2A5)</i>\";\n                    }\n                }\n                simple.innerHTML = sdString;\n            }\n            parent.appendChild(simple);\n        }\n    };\n    BaedalView.prototype.erase = function () {\n        if (typeof this.container !== 'string') {\n            this.removeEventListeners();\n            this.container.innerHTML = '';\n        }\n    };\n    BaedalView.prototype.removeEventListeners = function () {\n        var _this = this;\n        for (var listenerName in this._listenersStore) {\n            for (var i = 0; i < this._listenersStore[listenerName].length; i++) {\n                this._listenersStore[listenerName][i].removeEventListener('click', _this[listenerName]);\n            }\n        }\n    };\n    return BaedalView;\n}(BaseView_1.BaseView));\nexports.BaedalView = BaedalView;\n\n\n//# sourceURL=webpack://extractmenu/./src/view/BaedalView.ts?");

/***/ }),

/***/ "./src/view/BaseView.ts":
/*!******************************!*\
  !*** ./src/view/BaseView.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseView = void 0;\n/**\n *\n */\nvar BaseView = /** @class */ (function () {\n    function BaseView() {\n        this._data = {};\n        this._container = '';\n    }\n    Object.defineProperty(BaseView.prototype, \"container\", {\n        /**\n         * 컨테이너\n         */\n        get: function () {\n            return this._container;\n        },\n        set: function (container) {\n            this._container = container;\n            if (typeof this._container === 'string') {\n                this._container = document.getElementById(this._container) || 'There is no such element with id: ' + this._container;\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(BaseView.prototype, \"data\", {\n        /**\n         * 데이터\n         */\n        get: function () {\n            return this._data;\n        },\n        set: function (value) {\n            if (this._data !== value) {\n                this._data = value;\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return BaseView;\n}());\nexports.BaseView = BaseView;\n\n\n//# sourceURL=webpack://extractmenu/./src/view/BaseView.ts?");

/***/ }),

/***/ "./src/view/BlockView.ts":
/*!*******************************!*\
  !*** ./src/view/BlockView.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BlockView = void 0;\nvar BaseView_1 = __webpack_require__(/*! ./BaseView */ \"./src/view/BaseView.ts\");\n/**\n *\n */\nvar BlockView = /** @class */ (function (_super) {\n    __extends(BlockView, _super);\n    function BlockView() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this._semanticBox = {};\n        return _this;\n    }\n    BlockView.prototype.draw = function (doBuildBox) {\n        if (doBuildBox === void 0) { doBuildBox = true; }\n        if (doBuildBox) {\n            this.buildBox();\n        }\n    };\n    BlockView.prototype.buildBox = function () {\n        this._semanticBox = this._data;\n    };\n    BlockView.prototype._buildSemanticBox = function () {\n    };\n    BlockView.prototype._buildNormalBox = function () {\n    };\n    BlockView.prototype._buildBasicBox = function () {\n    };\n    return BlockView;\n}(BaseView_1.BaseView));\nexports.BlockView = BlockView;\n\n\n//# sourceURL=webpack://extractmenu/./src/view/BlockView.ts?");

/***/ }),

/***/ "./src/view/ListView.ts":
/*!******************************!*\
  !*** ./src/view/ListView.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ListView = void 0;\n/**\n *\n */\nvar ListView = /** @class */ (function () {\n    function ListView() {\n    }\n    return ListView;\n}());\nexports.ListView = ListView;\n\n\n//# sourceURL=webpack://extractmenu/./src/view/ListView.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});