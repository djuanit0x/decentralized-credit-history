webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/loan.js":
/*!***********************!*\
  !*** ./utils/loan.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeb3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeb3.js */ "./utils/getWeb3.js");
/* harmony import */ var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/Loan.json */ "./contracts/Loan.json");
var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/Loan.json */ "./contracts/Loan.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (function (address) {
  var web3 = Object(_getWeb3_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return new web3.eth.Contract(_contracts_Loan_json__WEBPACK_IMPORTED_MODULE_1__.abi, address);
});

/***/ })

})
//# sourceMappingURL=index.js.3a2f86ff93e1f1e305be.hot-update.js.map