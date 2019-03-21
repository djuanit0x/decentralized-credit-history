webpackHotUpdate("static/development/pages/loans/show.js",{

/***/ "./components/RepaymentsRow.js":
/*!*************************************!*\
  !*** ./components/RepaymentsRow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react_dist_commonjs_collections_Table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Table/Table */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Table/Table.js");
/* harmony import */ var semantic_ui_react_dist_commonjs_collections_Table_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_collections_Table_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getWeb3 */ "./utils/getWeb3.js");
/* harmony import */ var _utils_loan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/loan */ "./utils/loan.js");







var Row = semantic_ui_react_dist_commonjs_collections_Table_Table__WEBPACK_IMPORTED_MODULE_3___default.a.Row,
    Cell = semantic_ui_react_dist_commonjs_collections_Table_Table__WEBPACK_IMPORTED_MODULE_3___default.a.Cell;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loanContractAddress = _ref.loanContractAddress,
      month = _ref.month,
      balance = _ref.balance,
      date = _ref.date,
      interest = _ref.interest,
      monthToIsPaid = _ref.monthToIsPaid,
      payment = _ref.payment,
      principal = _ref.principal,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Row, {
    positive: +principal !== 0 && monthToIsPaid && +month !== 0,
    negative: +principal !== 0 && !monthToIsPaid && +month !== 0
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, month), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, date), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, balance), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, payment), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, interest), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, principal), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, +principal === 0 ? '' : monthToIsPaid ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "checkmark"
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "close"
  }), +principal === 0 ? 'None' : monthToIsPaid ? 'Paid' : 'Unpaid'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Cell, null, +principal === 0 ? '' : monthToIsPaid && +month !== 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    fluid: true,
    basic: true,
    color: "red",
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var loan, web3, accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_utils_loan__WEBPACK_IMPORTED_MODULE_6__["default"])(loanContractAddress);

            case 3:
              loan = _context.sent;
              _context.next = 6;
              return Object(_utils_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();

            case 6:
              web3 = _context.sent;
              _context.next = 9;
              return web3.eth.getAccounts();

            case 9:
              accounts = _context.sent;
              _context.next = 12;
              return loan.methods.markRePaymentAsUnPaid(+month).send({
                from: accounts[0]
              });

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 14]]);
    }))
  }, "Mark as Unpaid") : !monthToIsPaid && +month !== 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    fluid: true,
    basic: true,
    color: "green",
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var loan, web3, accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_utils_loan__WEBPACK_IMPORTED_MODULE_6__["default"])(loanContractAddress);

            case 3:
              loan = _context2.sent;
              _context2.next = 6;
              return Object(_utils_getWeb3__WEBPACK_IMPORTED_MODULE_5__["default"])();

            case 6:
              web3 = _context2.sent;
              _context2.next = 9;
              return web3.eth.getAccounts();

            case 9:
              accounts = _context2.sent;
              _context2.next = 12;
              return loan.methods.markRePaymentAsPaid(+month).send({
                from: accounts[0]
              });

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 14]]);
    }))
  }, "Mark as Paid") : ''));
});

/***/ })

})
//# sourceMappingURL=show.js.3ac7b710259d2989b211.hot-update.js.map