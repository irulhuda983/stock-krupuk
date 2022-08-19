/*! For license information please see 600.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[600],{2600:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){i=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,a){return t[e]=a}}function p(t,e,a,r){var i=e&&e.prototype instanceof f?e:f,n=Object.create(i.prototype),s=new k(r||[]);return n._invoke=function(t,e,a){var r="suspendedStart";return function(i,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw n;return P()}for(a.method=i,a.arg=n;;){var s=a.delegate;if(s){var o=g(s,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=d(t,e,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(t,a,s),n}function d(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var u={};function f(){}function v(){}function h(){}var b={};l(b,s,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(j([])));w&&w!==e&&a.call(w,s)&&(b=w);var _=h.prototype=f.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function m(t,e){function i(n,s,o,c){var l=d(t[n],t,s);if("throw"!==l.type){var p=l.arg,u=p.value;return u&&"object"==r(u)&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,o,c)}),(function(t){i("throw",t,o,c)})):e.resolve(u).then((function(t){p.value=t,o(p)}),(function(t){return i("throw",t,o,c)}))}c(l.arg)}var n;this._invoke=function(t,a){function r(){return new e((function(e,r){i(t,a,e,r)}))}return n=n?n.then(r,r):r()}}function g(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=d(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=h,l(_,"constructor",h),l(h,"constructor",v),v.displayName=l(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(m.prototype),l(m.prototype,o,(function(){return this})),t.AsyncIterator=m,t.async=function(e,a,r,i,n){void 0===n&&(n=Promise);var s=new m(p(e,a,r,i),n);return t.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(_),l(_,c,"Generator"),l(_,s,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return s.type="throw",s.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var o=a.call(n,"catchLoc"),c=a.call(n,"finallyLoc");if(o&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(o){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),z(a),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var i=r.arg;z(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:j(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},t}function n(t,e,a,r,i,n,s){try{var o=t[n](s),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,i)}const s={name:"Prediksi",data:function(){return{isLoading:!1,isPrediksi:!1,variable:[],fuzzyfikasi:[],inferensi:[],defuzzyfikasi:{},params:(t={permintaan:"",persediaan:""},e="persediaan",a="",e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t)};var t,e,a},methods:{getData:function(){var t,e=this;return(t=i().mark((function t(){var a,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("prediksi/show-prediksi",{params:e.params});case 3:a=t.sent,r=a.data,e.variable=r.variable,e.fuzzyfikasi=r.fuzzyfikasi,e.inferensi=r.inferensi,e.defuzzyfikasi=r.defuzzyfikasi,e.isPrediksi=!0,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.isPrediksi=!1;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,a=arguments;return new Promise((function(r,i){var s=t.apply(e,a);function o(t){n(s,r,i,o,c,"next",t)}function c(t){n(s,r,i,o,c,"throw",t)}o(void 0)}))})()},format:function(t){return parseFloat(t).toFixed(2)}}};const o=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative"},[e("div",{staticClass:"mb-5 w-full box-border flex items-center justify-between"},[e("div",{staticClass:"font-bold text-gray-600 text-lg 2xl:text-2xl"},[t._v("\n            Prediksi Stock\n        ")]),t._v(" "),e("div",{staticClass:"text-xs flex items-center"},[e("svg",{staticClass:"h-4 w-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),t._v(" "),e("span",{staticClass:"mr-2"},[t._v("Prediksi")]),t._v(" "),e("span",{staticClass:"mr-2"},[t._v("/")])])]),t._v(" "),0==t.isPrediksi?e("div",{staticClass:"w-full h-full box-border overflow-auto flex flex-col bg-white"},[e("div",{staticClass:"p-8 w-1/2"},[t._m(0),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.getData()}}},[e("div",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"text-xs",attrs:{for:""}},[t._v("Permintaan")]),t._v(" "),e("t-input",{model:{value:t.params.permintaan,callback:function(e){t.$set(t.params,"permintaan",e)},expression:"params.permintaan"}})],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"text-xs",attrs:{for:""}},[t._v("Penjualan")]),t._v(" "),e("t-input",{model:{value:t.params.penjualan,callback:function(e){t.$set(t.params,"penjualan",e)},expression:"params.penjualan"}})],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"text-xs",attrs:{for:""}},[t._v("Persediaan")]),t._v(" "),e("t-input",{model:{value:t.params.persediaan,callback:function(e){t.$set(t.params,"persediaan",e)},expression:"params.persediaan"}})],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("t-button",{attrs:{type:"submit"}},[t._v("Prediksi")])],1)])])])]):e("div",{staticClass:"w-full h-full box-border overflow-auto bg-white"},[e("div",{staticClass:"flex items-start justify-between w-full overflow-hidden"},[e("div",{staticClass:"p-4 w-2/5"},[e("h1",{staticClass:"font-semibold text-gray-500 mb-3"},[t._v("Fuzzyfikasi")]),t._v(" "),e("div",{staticClass:"w-full"},[e("table",{staticClass:"w-full table-auto text-xs 2xl:text-sm mb-14"},[t._m(1),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Persediaan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.persediaan.sedikit)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.persediaan.sedang)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.persediaan.banyak)))])]),t._v(" "),e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Permintaan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.permintaan.sedikit)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.permintaan.sedang)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.permintaan.banyak)))])]),t._v(" "),e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Penjualan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.penjualan.sedikit)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.penjualan.sedang)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.format(t.fuzzyfikasi.penjualan.banyak)))])])])])])]),t._v(" "),e("div",{staticClass:"p-4 w-2/5"},[e("h1",{staticClass:"font-semibold text-gray-500 mb-3"},[t._v("Nilai Penentu")]),t._v(" "),e("div",{staticClass:"w-full"},[e("table",{staticClass:"w-full table-auto text-xs 2xl:text-sm mb-14"},[t._m(2),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Persediaan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.persediaan.min))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.persediaan.mid))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.persediaan.max))])]),t._v(" "),e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Permintaan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.permintaan.min))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.permintaan.mid))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.permintaan.max))])]),t._v(" "),e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Penjualan")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.penjualan.min))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.penjualan.mid))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.penjualan.max))])]),t._v(" "),e("tr",[e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-left"},[t._v("Produksi")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.produksi.min))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.produksi.mid))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border border-gray-200 whitespace-nowrap capitalize text-center"},[t._v(t._s(t.variable.produksi.max))])])])])])]),t._v(" "),e("div",{staticClass:"px-4 py-12 w-1/5 flex items-center justify-center flex-col"},[e("div",{staticClass:"w-full h-52 bg-blue-500 text-white flex flex-col items-center justify-center text-white font-bold space-y-2"},[e("div",[t._v("HASIL")]),t._v(" "),e("div",[t._v(t._s(t.format(t.defuzzyfikasi.hasil)))])])])]),t._v(" "),e("div",{staticClass:"w-full overflow-hidden p-4 box-border"},[e("h1",{staticClass:"font-semibold text-gray-500 mb-3"},[t._v("Inferensi")]),t._v(" "),e("table",{staticClass:"w-full table-auto text-xs 2xl:text-sm mb-14"},[t._m(3),t._v(" "),e("tbody",t._l(t.inferensi,(function(a,r){return e("tr",{key:r},[e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold",attrs:{width:"2%"}},[t._v(t._s(r+1)+".")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(a.nama))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(t.format(a.permintaan)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(t.format(a.penjualan)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(t.format(a.persediaan)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(t.format(a.predikat)))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(t.format(a.hasil_predikat)))])])})),0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-2 border-b"},[t("h1",[this._v("Masukkan Data yang akan diprediksi")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"font-semibold text-gray-500"},[e("tr",[e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-left bg-white",attrs:{rowspan:"2"}},[t._v("Nama")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white",attrs:{colspan:"3"}},[t._v("Nilai")])]),t._v(" "),e("tr",[e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Sedikit")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Sedang")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Banyak")])])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"font-semibold text-gray-500"},[e("tr",[e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-left bg-white",attrs:{rowspan:"2"}},[t._v("Nama")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white",attrs:{colspan:"3"}},[t._v("Nilai")])]),t._v(" "),e("tr",[e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Sedikit")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Sedang")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize border border-gray-200 text-center bg-white"},[t._v("Banyak")])])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"font-semibold text-gray-500"},[e("tr",{staticClass:"relative border-b shadow-md sticky top-0"},[e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("No.")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Rule")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Permintaan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Penjualan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Persediaan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("ai")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("zi")])])])}],!1,null,null,null).exports}}]);