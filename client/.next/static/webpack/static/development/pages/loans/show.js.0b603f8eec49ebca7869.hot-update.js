webpackHotUpdate("static/development/pages/loans/show.js",{

/***/ "./pages/loans/show.js":
/*!*****************************!*\
  !*** ./pages/loans/show.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Show; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_RepaymentsRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/RepaymentsRow */ "./components/RepaymentsRow.js");
/* harmony import */ var _utils_loan__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/loan */ "./utils/loan.js");


















var Show =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Show, _Component);

  function Show() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Show);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Show)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "state", {
      rePayments: [],
      loanTitle: '',
      lenderAddress: '',
      borrowerAddress: '',
      loanContractAddress: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "componentDidMount", function () {
      _this.setState({
        rePayments: _this.props.rePayments,
        loanTitle: _this.props.loanTitle,
        lenderAddress: _this.props.lenderAddress,
        borrowerAddress: _this.props.borrowerAddress,
        loanContractAddress: _this.props.loanContractAddress
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderRows", function () {
      return _this.props.rePayments.map(function (rePayment, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_RepaymentsRow__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
          key: index,
          month: index,
          loanContractAddress: _this.props.loanContractAddress
        }, rePayment));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Show, [{
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"].Body;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Content, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Header, null, this.props.loanTitle), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Meta, null, this.props.loanContractAddress), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Description, null, "Lender: ", this.props.lenderAddress), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Card"].Description, null, "Borrower: ", this.props.borrowerAddress))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Table"], {
        celled: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Month"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Balance"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Payment"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Interest"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Principal"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null, "Status"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(HeaderCell, null))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Body, null, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var loanContractAddress, loan, rePaymentsCount, loanTitle, lenderAddress, borrowerAddress, rePayments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loanContractAddress = props.query.address;
                _context.next = 3;
                return Object(_utils_loan__WEBPACK_IMPORTED_MODULE_16__["default"])(loanContractAddress);

              case 3:
                loan = _context.sent;
                _context.next = 6;
                return loan.methods.getRepaymentsCount().call();

              case 6:
                rePaymentsCount = _context.sent;
                _context.next = 9;
                return loan.methods.loanTitle().call();

              case 9:
                loanTitle = _context.sent;
                _context.next = 12;
                return loan.methods.lender().call();

              case 12:
                lenderAddress = _context.sent;
                _context.next = 15;
                return loan.methods.borrower().call();

              case 15:
                borrowerAddress = _context.sent;
                _context.next = 18;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(rePaymentsCount)).fill().map(function (element, index) {
                  return loan.methods.rePayments(index).call();
                }));

              case 18:
                rePayments = _context.sent;
                return _context.abrupt("return", {
                  rePayments: rePayments,
                  loanTitle: loanTitle,
                  lenderAddress: lenderAddress,
                  borrowerAddress: borrowerAddress,
                  loanContractAddress: loanContractAddress
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Show;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);



/***/ })

})
//# sourceMappingURL=show.js.0b603f8eec49ebca7869.hot-update.js.map