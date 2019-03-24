webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/getWeb3.js":
/*!**************************!*\
  !*** ./utils/getWeb3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_3__);




debugger;

var getWeb3 =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var web3, _web, provider, _web2, _getConfig, publicRuntimeConfig, RINKEBY_API, _provider, _web3;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
              _context.next = 21;
              break;
            }

            if (!window.ethereum) {
              _context.next = 14;
              break;
            }

            // Modern dapp browsers...
            web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.ethereum);
            _context.prev = 3;
            _context.next = 6;
            return window.ethereum.enable();

          case 6:
            return _context.abrupt("return", web3);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            throw _context.t0;

          case 12:
            _context.next = 18;
            break;

          case 14:
            if (!window.web3) {
              _context.next = 18;
              break;
            }

            // Legacy dapp browsers
            // Use Mist/MetaMask's provider.
            _web = window.web3;
            console.log('Injected web3 detected.');
            return _context.abrupt("return", _web);

          case 18:
            debugger;
            _context.next = 33;
            break;

          case 21:
            if (false) {}

            provider = new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider('http://localhost:8545');
            _web2 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(provider);
            console.log('No web3 instance injected, using Local web3.');
            return _context.abrupt("return", _web2);

          case 28:
            _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_3___default()(), publicRuntimeConfig = _getConfig.publicRuntimeConfig;
            RINKEBY_API = publicRuntimeConfig.RINKEBY_API;
            _provider = new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider("rinkeby.infura.io/v3/".concat(RINKEBY_API));
            _web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(_provider);
            return _context.abrupt("return", _web3);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function getWeb3() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

/***/ })

})
//# sourceMappingURL=index.js.ffd886b942b6c6704309.hot-update.js.map