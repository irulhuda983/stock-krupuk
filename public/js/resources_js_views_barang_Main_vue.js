"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_barang_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Barang',
  data: function data() {
    return {
      isLoading: false,
      isFilter: false,
      dataset: [],
      payload: {
        id: null,
        minggu_ke: '',
        bulan: '',
        tahun: '',
        persediaan: '',
        permintaan: '',
        penjualan: '',
        produksi: ''
      },
      errors: {
        minggu_ke: null,
        bulan: null,
        tahun: null,
        persediaan: null,
        permintaan: null,
        penjualan: null,
        produksi: null
      },
      pageInfo: null,
      params: {
        filter: "",
        page: 1,
        limit: 10,
        sort: "created_at:desc"
      },
      page: 1,
      total: 10,
      totalRows: 200,
      limit: 5,
      disabled: true
    };
  },
  mounted: function mounted() {
    this.getDataset();
  },
  methods: {
    getDataset: function getDataset() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('dataset');

              case 3:
                res = _context.sent;
                _this.isLoading = false;
                _this.dataset = res.data.data;
                _this.pageInfo = res.data;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    uploadFile: function uploadFile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                data = new FormData();
                data.append("file", _this2.$refs.uploadFIle.files[0]);
                _context2.next = 5;
                return axios.post("dataset/import", data, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });

              case 5:
                res = _context2.sent;

                if (res.status === 200) {
                  _this2.getDataset();

                  _this2.$notify({
                    group: "notif",
                    title: "Berhasil",
                    type: 'success',
                    text: 'Berhasil upload dataset'
                  });
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative"
  }, [_c("div", {
    staticClass: "mb-5 w-full box-border flex items-center justify-between"
  }, [_c("div", {
    staticClass: "font-bold text-gray-600 text-lg 2xl:text-2xl"
  }, [_vm._v("Dataset")]), _vm._v(" "), _c("div", {
    staticClass: "text-xs flex items-center"
  }, [_c("svg", {
    staticClass: "h-4 w-4 mr-2",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "mr-2"
  }, [_vm._v("Dataset")]), _vm._v(" "), _c("span", {
    staticClass: "mr-2"
  }, [_vm._v("/")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full box-border flex justify-between items-center mb-5"
  }, [_c("div", {
    staticClass: "w-1/2 relative flex items-center"
  }, [_c("svg", {
    staticClass: "h-4 w-4 absolute text-gray-600 left-4",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    }
  })]), _vm._v(" "), _c("input", {
    staticClass: "pl-10 w-full bg-gray-200 px-4 py-3 outline-none text-xs rounded-lg focus:shadow-lg",
    attrs: {
      type: "text",
      placeholder: "cari bulan lalu enter ..."
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-center space-x-5"
  }, [_c("form", {
    staticClass: "flex",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.uploadFile();
      }
    }
  }, [_c("input", {
    ref: "uploadFIle",
    attrs: {
      type: "file"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500",
    attrs: {
      type: "submit"
    }
  }, [_c("svg", {
    staticClass: "w-4 mr-2",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }
  })]), _vm._v(" "), _c("span", [_vm._v("Import")])])]), _vm._v(" "), _c("button", {
    staticClass: "rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$refs.modalTambah.show();
      }
    }
  }, [_c("svg", {
    staticClass: "w-4 mr-2",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }
  })]), _vm._v(" "), _c("span", [_vm._v("Tambah")])])])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between w-full h-full space-x-4"
  }, [_c("div", {
    staticClass: "w-full h-full box-border overflow-auto flex flex-col bg-white"
  }, [_c("table", {
    staticClass: "w-full table-auto text-xs 2xl:text-sm mb-14"
  }, [_vm._m(0), _vm._v(" "), _vm.isLoading ? _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "w-full h-full box-border flex items-center justify-center mt-32"
  }, [_c("svg", {
    staticStyle: {
      margin: "auto",
      background: "none",
      display: "block",
      "shape-rendering": "auto"
    },
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "200px",
      height: "200px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid"
    }
  }, [_c("circle", {
    attrs: {
      cx: "50",
      cy: "50",
      r: "32",
      "stroke-width": "8",
      stroke: "#85a2b6",
      "stroke-dasharray": "50.26548245743669 50.26548245743669",
      fill: "none",
      "stroke-linecap": "round"
    }
  }, [_c("animateTransform", {
    attrs: {
      attributeName: "transform",
      type: "rotate",
      dur: "1s",
      repeatCount: "indefinite",
      keyTimes: "0;1",
      values: "0 50 50;360 50 50"
    }
  })], 1), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "50",
      cy: "50",
      r: "23",
      "stroke-width": "8",
      stroke: "#bbcedd",
      "stroke-dasharray": "36.12831551628262 36.12831551628262",
      "stroke-dashoffset": "36.12831551628262",
      fill: "none",
      "stroke-linecap": "round"
    }
  }, [_c("animateTransform", {
    attrs: {
      attributeName: "transform",
      type: "rotate",
      dur: "1s",
      repeatCount: "indefinite",
      keyTimes: "0;1",
      values: "0 50 50;-360 50 50"
    }
  })], 1)])])])])]) : _c("tbody", {
    staticClass: "bg-white"
  }, [_vm.dataset.length <= 0 ? [_vm._m(1)] : _vm._l(_vm.dataset, function (item, i) {
    return _c("tr", {
      key: i
    }, [_c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold",
      attrs: {
        width: "2%"
      }
    }, [_vm._v(_vm._s(i + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
    }, [_vm._v(_vm._s(item.bulan))]), _vm._v(" "), _c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
    }, [_vm._v(_vm._s(item.persediaan))]), _vm._v(" "), _c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
    }, [_vm._v(_vm._s(item.penjualan))]), _vm._v(" "), _c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"
    }, [_vm._v(_vm._s(item.permintaan))]), _vm._v(" "), _c("td", {
      staticClass: "px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize",
      attrs: {
        width: "25px"
      }
    }, [_c("button", {
      staticClass: "text-sx text-gray-400 hover:text-orange-500"
    }, [_c("svg", {
      staticClass: "w-4",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      }
    })])]), _vm._v(" "), _c("button", {
      staticClass: "text-sx text-gray-400 hover:text-red-500"
    }, [_c("svg", {
      staticClass: "w-4",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      }
    })])])])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "w-full absolute bottom-0 right-0 left-0 box-border overflow-hidden p-6 text-sm"
  }, [_vm.pageInfo != null ? _c("div", {
    staticClass: "w-full box-border flex items-center justify-between bg-white p-4 z-50 border-t border-gray-200"
  }, [_c("div", {
    staticClass: "text-2xs lg:text-xs"
  }, [_vm._v("Show " + _vm._s(_vm.total > _vm.pageInfo.meta.total ? _vm.pageInfo.meta.total : _vm.total) + " data from " + _vm._s(_vm.pageInfo ? _vm.pageInfo.meta.total : 0))]), _vm._v(" "), _c("div", [_vm.pageInfo ? _c("t-pagination", {
    attrs: {
      "total-items": _vm.pageInfo.meta.total,
      "per-page": parseInt(_vm.pageInfo.meta.per_page),
      limit: _vm.params.limit,
      disabled: _vm.disabled
    },
    on: {
      change: function change($event) {
        return _vm.getDataset();
      }
    },
    model: {
      value: _vm.pageInfo.meta.current_page,
      callback: function callback($$v) {
        _vm.$set(_vm.pageInfo.meta, "current_page", $$v);
      },
      expression: "pageInfo.meta.current_page"
    }
  }) : _vm._e()], 1)]) : _vm._e()])]), _vm._v(" "), _c("t-modal", {
    ref: "modalTambah"
  }, [_c("div", {
    staticClass: "w-full p-8"
  }, [_c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Bulan")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tahun")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Penjualan")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Permintaan")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Persediaan")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Produksi")]), _vm._v(" "), _c("t-input")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5"
  }, [_c("t-button", [_vm._v("Simpan")])], 1)])])])], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", {
    staticClass: "font-semibold text-gray-500"
  }, [_c("tr", {
    staticClass: "relative border-b shadow-md sticky top-0"
  }, [_c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
  }, [_vm._v("No.")]), _vm._v(" "), _c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
  }, [_vm._v("Bulan")]), _vm._v(" "), _c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
  }, [_vm._v("Penjualan")]), _vm._v(" "), _c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
  }, [_vm._v("Persediaan")]), _vm._v(" "), _c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"
  }, [_vm._v("Permintaan")]), _vm._v(" "), _c("th", {
    staticClass: "p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white",
    attrs: {
      width: "25px"
    }
  }, [_vm._v("Aksi")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("td", {
    staticClass: "px-3 py-10 text-center italic font-semibold",
    attrs: {
      colspan: "10"
    }
  }, [_vm._v("Tidak ada Data penjualan.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/barang/Main.vue":
/*!********************************************!*\
  !*** ./resources/js/views/barang/Main.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=740ea152& */ "./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/barang/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/barang/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/barang/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/barang/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_740ea152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=740ea152& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/barang/Main.vue?vue&type=template&id=740ea152&");


/***/ })

}]);