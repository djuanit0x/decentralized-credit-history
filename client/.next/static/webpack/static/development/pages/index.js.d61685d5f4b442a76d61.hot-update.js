webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/loan.js":
/*!***********************!*\
  !*** ./utils/loan.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _getWeb3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeb3.js */ "./utils/getWeb3.js");
/* harmony import */ var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/Loan.json */ "./contracts/Loan.json");
var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Loan.json */ "./contracts/Loan.json", 1);




/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(address) {
    var web3;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_getWeb3_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

          case 2:
            web3 = _context.sent;
            return _context.abrupt("return", new web3.eth.Contract(_contracts_Loan_json__WEBPACK_IMPORTED_MODULE_3__.abi, address));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ })

})
//# sourceMappingURL=index.js.d61685d5f4b442a76d61.hot-update.js.map