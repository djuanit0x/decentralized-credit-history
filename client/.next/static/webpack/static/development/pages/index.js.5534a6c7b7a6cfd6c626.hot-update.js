webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contracts/LoanFactory.json */ "./contracts/LoanFactory.json");
var _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/LoanFactory.json */ "./contracts/LoanFactory.json", 1);
/* harmony import */ var _client_utils_loan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../client/utils/loan */ "./utils/loan.js");
/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getWeb3 */ "./utils/getWeb3.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
















var LoanIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LoanIndex, _Component);

  function LoanIndex() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LoanIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(LoanIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "renderLoans",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.props.loans);
              _context.next = 3;
              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(_this.props.loans.map(function (address) {
                // const loan = Loan(address).then(data => {
                //     console.log(data);
                // });
                var loan = Object(_client_utils_loan__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
                console.log(loan);
                debugger;
                return loan;
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var web3, accounts, networkId, deployedNetwork, instance, deployedLoans;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_utils_getWeb3__WEBPACK_IMPORTED_MODULE_13__["default"])();

            case 3:
              web3 = _context2.sent;
              _context2.next = 6;
              return web3.eth.getAccounts();

            case 6:
              accounts = _context2.sent;
              _context2.next = 9;
              return web3.eth.net.getId();

            case 9:
              networkId = _context2.sent;
              deployedNetwork = _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11__.networks[networkId];
              instance = new web3.eth.Contract(_contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11__.abi, deployedNetwork.address); // await instance.methods.createLoan().send({from: accounts[0]});

              _context2.next = 14;
              return instance.methods.getDeployedLoans().call();

            case 14:
              deployedLoans = _context2.sent;

              // Set web3, accounts, and contract to the state, and then proceed with an
              // example of interacting with the contract's methods.
              _this.setState({
                web3: web3,
                accounts: accounts,
                contract: instance
              }); // this.setState({web3, accounts, contract: instance}, this.runExample);


              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              // Catch any errors for any of the above operations.
              alert("Failed to load web3, accounts, or contract. Check console for details.");
              console.error(_context2.t0);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 18]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "runExample",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _this$state, accounts, contract;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state = _this.state, accounts = _this$state.accounts, contract = _this$state.contract; // Stores a given value, 5 by default

              console.log(accounts[0]);
              console.log(contract);
              _context3.next = 5;
              return contract.methods.createLoan().send({
                from: accounts[0]
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LoanIndex, [{
    key: "render",
    value: function render() {
      // if (!this.state.web3) {
      //     return <div>Loading Web3, accounts, and contract...</div>;
      // }
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Good to Go!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Your Truffle Box is installed and ready."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Smart Contract Example"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Try changing the value stored on ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "line 40"), " of App.js."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "The stored value is: ", this.state.storageValue), this.renderLoans());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {
        var deployedLoanContract, web3, networkId, deployedNetwork, loanFactoryInstance;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_utils_getWeb3__WEBPACK_IMPORTED_MODULE_13__["default"])();

              case 3:
                web3 = _context4.sent;
                _context4.next = 6;
                return web3.eth.net.getId();

              case 6:
                networkId = _context4.sent;
                deployedNetwork = _contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11__.networks[networkId];
                loanFactoryInstance = new web3.eth.Contract(_contracts_LoanFactory_json__WEBPACK_IMPORTED_MODULE_11__.abi, deployedNetwork.address);
                _context4.next = 11;
                return loanFactoryInstance.methods.getDeployedLoans().call();

              case 11:
                deployedLoanContract = _context4.sent;
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 17:
                return _context4.abrupt("return", {
                  loans: deployedLoanContract
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 14]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return LoanIndex;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoanIndex);

/***/ })

})
//# sourceMappingURL=index.js.5534a6c7b7a6cfd6c626.hot-update.js.map