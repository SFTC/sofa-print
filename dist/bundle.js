module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBreak = exports.PrintPage = undefined;

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(7);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PrintPage = _index2.default;
exports.PageBreak = _index4.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  box-sizing: content-box;\n  background-color: #f5f5f5;\n  ', '\n'], ['\n  height: 100%;\n  box-sizing: content-box;\n  background-color: #f5f5f5;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: ', 'px;\n    padding: 0 calc((100% - ', 'px)/2);\n  '], ['\n    width: ', 'px;\n    padding: 0 calc((100% - ', 'px)/2);\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  height: 50px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  background: #f4f4f4;\n  box-shadow: 0 3px 5px #ccc;\n'], ['\n  ', '\n  height: 50px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  background: #f4f4f4;\n  box-shadow: 0 3px 5px #ccc;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: ', 'px;\n  '], ['\n    width: ', 'px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  line-height: 1.2;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  height: 28px;\n  user-select: none;\n  transition: all .3s cubic-bezier(.645,.045,.355,1);\n  color: rgba(0,0,0,.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n  outline: none;\n  margin-right: 10px;\n'], ['\n  line-height: 1.2;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  height: 28px;\n  user-select: none;\n  transition: all .3s cubic-bezier(.645,.045,.355,1);\n  color: rgba(0,0,0,.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n  outline: none;\n  margin-right: 10px;\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactToPrint = __webpack_require__(4);

var _reactToPrint2 = _interopRequireDefault(_reactToPrint);

var _styledComponents = __webpack_require__(5);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreviewBox = _styledComponents2.default.div(_templateObject, function (props) {
  return props.pageWidth && (0, _styledComponents.css)(_templateObject2, props.pageWidth, props.pageWidth);
});

var ActionBar = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.pageWidth && (0, _styledComponents.css)(_templateObject4, props.pageWidth);
});

var Button = _styledComponents2.default.button(_templateObject5);

var PrintPage = function (_React$Component) {
  _inherits(PrintPage, _React$Component);

  function PrintPage(props) {
    _classCallCheck(this, PrintPage);

    var _this = _possibleConstructorReturn(this, (PrintPage.__proto__ || Object.getPrototypeOf(PrintPage)).call(this, props));

    _this.state = {};
    _this.printMethod = _this.printMethod.bind(_this);
    _this.handlePrint = _this.handlePrint.bind(_this);
    _this.handleGoBack = _this.handleGoBack.bind(_this);
    return _this;
  }

  _createClass(PrintPage, [{
    key: 'printMethod',
    value: function printMethod() {
      document.getElementById('sofa-print-button').click();
    }
  }, {
    key: 'handlePrint',
    value: function handlePrint() {
      this.printMethod();
    }
  }, {
    key: 'handleGoBack',
    value: function handleGoBack() {
      this.props.goBack();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          previewStyle = _props.previewStyle,
          pageWidth = _props.pageWidth,
          showGoBackButton = _props.showGoBackButton;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactToPrint2.default, {
          trigger: function trigger() {
            return _react2.default.createElement('a', { style: { visibility: 'hidden' }, id: 'sofa-print-button', href: '#' });
          },
          content: function content() {
            return _this2.componentRef;
          }
        }),
        previewStyle ? _react2.default.createElement(
          PreviewBox,
          { pageWidth: pageWidth },
          _react2.default.createElement(
            ActionBar,
            { pageWidth: pageWidth },
            showGoBackButton && _react2.default.createElement(
              Button,
              { onClick: this.handleGoBack },
              '\u8FD4\u56DE'
            ),
            _react2.default.createElement(
              Button,
              { onClick: this.handlePrint },
              '\u6253\u5370'
            )
          ),
          _react2.default.createElement('div', { style: { height: '53px' } }),
          _react2.default.createElement(
            'div',
            { ref: function ref(el) {
                return _this2.componentRef = el;
              } },
            this.props.children
          )
        ) : _react2.default.createElement(
          'div',
          { ref: function ref(el) {
              return _this2.componentRef = el;
            } },
          this.props.children
        )
      );
    }
  }]);

  return PrintPage;
}(_react2.default.Component);

PrintPage.propTypes = {
  previewStyle: _propTypes2.default.bool,
  pageWidth: _propTypes2.default.number,
  goBack: _propTypes2.default.func,
  showGoBackButton: _propTypes2.default.bool
};
PrintPage.defaultProps = {
  previewStyle: false,
  pageWidth: 764,
  showGoBackButton: true,
  goBack: undefined
};

exports.default = PrintPage;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-to-print");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBreak = function PageBreak() {
  return _react2.default.createElement('div', { className: 'sofa-print-page-break' });
};

exports.default = PageBreak;

/***/ })
/******/ ]);