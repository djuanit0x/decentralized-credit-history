webpackHotUpdate("static/development/pages/loans/register.js",{

/***/ "./pages/loans/register.js":
/*!*********************************!*\
  !*** ./pages/loans/register.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterLoanForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contracts/LoanFactory.json */ "./contracts/LoanFactory.json");
var _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../contracts/LoanFactory.json */ "./contracts/LoanFactory.json", 1);
/* harmony import */ var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../contracts/Loan.json */ "./contracts/Loan.json");
var _contracts_Loan_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../contracts/Loan.json */ "./contracts/Loan.json", 1);
/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/getWeb3 */ "./utils/getWeb3.js");
/* harmony import */ var _utils_calculateRepayments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/calculateRepayments */ "./utils/calculateRepayments.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);


















var RegisterLoanForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterLoanForm, _Component);

  function RegisterLoanForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegisterLoanForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterLoanForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
      loading: false,
      loanTitle: '',
      borrowerAddress: '',
      startDate: '',
      tenor: '',
      interestRatePerYear: '',
      balanceRequested: '',
      origination: '',
      gracePeriod: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true
                },
                /*#__PURE__*/
                Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  var web3, accounts, networkId, deployedNetwork, loanFactoryInstance, _this$state, loanTitle, borrowerAddress, startDate, tenor, interestRatePerYear, balanceRequested, origination, gracePeriod, calculationSchedules, deployedLoanContract, deployedLoanContractLength, loanInstance;

                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return Object(_utils_getWeb3__WEBPACK_IMPORTED_MODULE_14__["default"])();

                        case 3:
                          web3 = _context.sent;
                          _context.next = 6;
                          return web3.eth.getAccounts();

                        case 6:
                          accounts = _context.sent;
                          _context.next = 9;
                          return web3.eth.net.getId();

                        case 9:
                          networkId = _context.sent;
                          deployedNetwork = _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_12__.networks[networkId];
                          loanFactoryInstance = new web3.eth.Contract(_contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_12__.abi, deployedNetwork.address);
                          _context.next = 14;
                          return loanFactoryInstance.methods.createLoan().send({
                            from: accounts[0]
                          });

                        case 14:
                          _this$state = _this.state, loanTitle = _this$state.loanTitle, borrowerAddress = _this$state.borrowerAddress, startDate = _this$state.startDate, tenor = _this$state.tenor, interestRatePerYear = _this$state.interestRatePerYear, balanceRequested = _this$state.balanceRequested, origination = _this$state.origination, gracePeriod = _this$state.gracePeriod;
                          calculationSchedules = Object(_utils_calculateRepayments__WEBPACK_IMPORTED_MODULE_15__["default"])(startDate, tenor, interestRatePerYear, balanceRequested, origination, gracePeriod);
                          _context.next = 18;
                          return loanFactoryInstance.methods.getDeployedLoans().call();

                        case 18:
                          deployedLoanContract = _context.sent;
                          _context.next = 21;
                          return loanFactoryInstance.methods.getDeployedLoansLength().call();

                        case 21:
                          deployedLoanContractLength = _context.sent;
                          loanInstance = new web3.eth.Contract(_contracts_Loan_json__WEBPACK_IMPORTED_MODULE_13__.abi, deployedLoanContract[deployedLoanContractLength - 1]);
                          _context.next = 25;
                          return loanInstance.methods.addAllRepaymentSchedules(calculationSchedules, borrowerAddress, loanTitle).send({
                            from: accounts[0]
                          });

                        case 25:
                          _context.next = 32;
                          break;

                        case 27:
                          _context.prev = 27;
                          _context.t0 = _context["catch"](0);
                          // Catch any errors for any of the above operations.
                          alert("Failed to load web3, accounts, or contract. Check console for details.");
                          console.error(_context.t0);

                          _this.setState({
                            loading: false
                          });

                        case 32:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this, [[0, 27]]);
                })));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegisterLoanForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "ui large header"
      }, "Register a Loan"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Loan Title"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.loanTitle,
        onChange: function onChange(event) {
          return _this2.setState({
            loanTitle: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Borrower Address"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.borrowerAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            borrowerAddress: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Starting Date"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "YYYY-MM-DD",
        labelPosition: "right",
        value: this.state.startDate,
        onChange: function onChange(event) {
          return _this2.setState({
            startDate: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Tenor"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "months",
        labelPosition: "right",
        value: this.state.tenor,
        onChange: function onChange(event) {
          return _this2.setState({
            tenor: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Balance Requested"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "rupiah",
        labelPosition: "right",
        value: this.state.balanceRequested,
        onChange: function onChange(event) {
          return _this2.setState({
            balanceRequested: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Interest Rate Per Year"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "%",
        labelPosition: "right",
        value: this.state.interestRatePerYear,
        onChange: function onChange(event) {
          return _this2.setState({
            interestRatePerYear: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Origination"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "%",
        labelPosition: "right",
        value: this.state.origination,
        onChange: function onChange(event) {
          return _this2.setState({
            origination: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Grace Period"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "months",
        labelPosition: "right",
        value: this.state.gracePeriod,
        onChange: function onChange(event) {
          return _this2.setState({
            gracePeriod: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        primary: true
      }, "Create")));
    }
  }]);

  return RegisterLoanForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); //         loanTitle: 'test form',
//         borrowerAddress: '0x0bD041752FB439Bd7D43b45d2c914FcfA0dfDD8f',
//         startDate: '2018-10-07',
//         tenor: '12',
//         interestRatePerYear: '24',
//         balanceRequested: '1500000',
//         origination: '3',
//         gracePeriod: '0'




/***/ })

})
//# sourceMappingURL=register.js.d5fae6326cfe6557d710.hot-update.js.map