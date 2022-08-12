/*! For license information please see 21.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21],{5021:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function n(){n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var n=e&&e.prototype instanceof h?e:h,o=Object.create(n.prototype),i=new L(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return E()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=p(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function d(){}function v(){}var w={};c(w,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,i)&&(w=g);var y=v.prototype=h.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,s,l){var c=p(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=p(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=v,c(y,"constructor",v),c(v,"constructor",d),d.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new x(u(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,r,a,n,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(a,n)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function s(t){o(i,a,n,s,l,"next",t)}function l(t){o(i,a,n,s,l,"throw",t)}s(void 0)}))}}const s={name:"Barang",data:function(){return{isLoading:!1,isFilter:!1,dataset:[],payload:{id:null,minggu_ke:"",bulan:"",tahun:"",persediaan:"",permintaan:"",penjualan:"",produksi:""},errors:{minggu_ke:null,bulan:null,tahun:null,persediaan:null,permintaan:null,penjualan:null,produksi:null},pageInfo:null,params:{filter:"",page:1,limit:10,sort:"created_at:desc"},page:1,total:10,totalRows:200,limit:5,disabled:!0}},mounted:function(){this.getDataset()},methods:{getDataset:function(){var t=this;return i(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("dataset");case 3:r=e.sent,t.isLoading=!1,t.dataset=r.data.data,t.pageInfo=r.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},uploadFile:function(){var t=this;return i(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(r=new FormData).append("file",t.$refs.uploadFIle.files[0]),e.next=5,axios.post("dataset/import",r,{headers:{"Content-Type":"multipart/form-data"}});case 5:200===e.sent.status&&(t.getDataset(),t.$notify({group:"notif",title:"Berhasil",type:"success",text:"Berhasil upload dataset"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}};const l=(0,r(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-auto w-full h-full box-border p-6 overflow-hidden flex flex-col relative"},[e("div",{staticClass:"mb-5 w-full box-border flex items-center justify-between"},[e("div",{staticClass:"font-bold text-gray-600 text-lg 2xl:text-2xl"},[t._v("Dataset")]),t._v(" "),e("div",{staticClass:"text-xs flex items-center"},[e("svg",{staticClass:"h-4 w-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),t._v(" "),e("span",{staticClass:"mr-2"},[t._v("Dataset")]),t._v(" "),e("span",{staticClass:"mr-2"},[t._v("/")])])]),t._v(" "),e("div",{staticClass:"w-full box-border flex justify-between items-center mb-5"},[e("div",{staticClass:"w-1/2 relative flex items-center"},[e("svg",{staticClass:"h-4 w-4 absolute text-gray-600 left-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})]),t._v(" "),e("input",{staticClass:"pl-10 w-full bg-gray-200 px-4 py-3 outline-none text-xs rounded-lg focus:shadow-lg",attrs:{type:"text",placeholder:"cari bulan lalu enter ..."}})]),t._v(" "),e("div",{staticClass:"flex items-center justify-center space-x-5"},[e("form",{staticClass:"flex",on:{submit:function(e){return e.preventDefault(),t.uploadFile()}}},[e("input",{ref:"uploadFIle",attrs:{type:"file"}}),t._v(" "),e("button",{staticClass:"rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500",attrs:{type:"submit"}},[e("svg",{staticClass:"w-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})]),t._v(" "),e("span",[t._v("Import")])])]),t._v(" "),e("button",{staticClass:"rounded-lg border border-gray-200 bg-gray-200 text-gray-500 font-semibold px-4 py-2 flex items-center hover:text-orange-500",on:{click:function(e){return e.preventDefault(),t.$refs.modalTambah.show()}}},[e("svg",{staticClass:"w-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})]),t._v(" "),e("span",[t._v("Tambah")])])])]),t._v(" "),e("div",{staticClass:"flex justify-between w-full h-full space-x-4"},[e("div",{staticClass:"w-full h-full box-border overflow-auto flex flex-col bg-white"},[e("table",{staticClass:"w-full table-auto text-xs 2xl:text-sm mb-14"},[t._m(0),t._v(" "),t.isLoading?e("tbody",[e("tr",[e("td",{attrs:{colspan:"10"}},[e("div",{staticClass:"w-full h-full box-border flex items-center justify-center mt-32"},[e("svg",{staticStyle:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[e("circle",{attrs:{cx:"50",cy:"50",r:"32","stroke-width":"8",stroke:"#85a2b6","stroke-dasharray":"50.26548245743669 50.26548245743669",fill:"none","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;360 50 50"}})],1),t._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"23","stroke-width":"8",stroke:"#bbcedd","stroke-dasharray":"36.12831551628262 36.12831551628262","stroke-dashoffset":"36.12831551628262",fill:"none","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;-360 50 50"}})],1)])])])])]):e("tbody",{staticClass:"bg-white"},[t.dataset.length<=0?[t._m(1)]:t._l(t.dataset,(function(r,a){return e("tr",{key:a},[e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize font-semibold",attrs:{width:"2%"}},[t._v(t._s(a+1)+".")]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(r.bulan))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(r.persediaan))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(r.penjualan))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize"},[t._v(t._s(r.permintaan))]),t._v(" "),e("td",{staticClass:"px-3 py-4 border-b border-gray-200 whitespace-nowrap capitalize",attrs:{width:"25px"}},[e("button",{staticClass:"text-sx text-gray-400 hover:text-orange-500"},[e("svg",{staticClass:"w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}})])]),t._v(" "),e("button",{staticClass:"text-sx text-gray-400 hover:text-red-500"},[e("svg",{staticClass:"w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])])])}))],2)])]),t._v(" "),e("div",{staticClass:"w-full absolute bottom-0 right-0 left-0 box-border overflow-hidden p-6 text-sm"},[null!=t.pageInfo?e("div",{staticClass:"w-full box-border flex items-center justify-between bg-white p-4 z-50 border-t border-gray-200"},[e("div",{staticClass:"text-2xs lg:text-xs"},[t._v("Show "+t._s(t.total>t.pageInfo.meta.total?t.pageInfo.meta.total:t.total)+" data from "+t._s(t.pageInfo?t.pageInfo.meta.total:0))]),t._v(" "),e("div",[t.pageInfo?e("t-pagination",{attrs:{"total-items":t.pageInfo.meta.total,"per-page":parseInt(t.pageInfo.meta.per_page),limit:t.params.limit,disabled:t.disabled},on:{change:function(e){return t.getDataset()}},model:{value:t.pageInfo.meta.current_page,callback:function(e){t.$set(t.pageInfo.meta,"current_page",e)},expression:"pageInfo.meta.current_page"}}):t._e()],1)]):t._e()])]),t._v(" "),e("t-modal",{ref:"modalTambah"},[e("div",{staticClass:"w-full p-8"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Bulan")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Tahun")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Penjualan")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Permintaan")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Persediaan")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("label",{attrs:{for:""}},[t._v("Produksi")]),t._v(" "),e("t-input")],1),t._v(" "),e("div",{staticClass:"w-full mb-5"},[e("t-button",[t._v("Simpan")])],1)])])])],1)}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"font-semibold text-gray-500"},[e("tr",{staticClass:"relative border-b shadow-md sticky top-0"},[e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("No.")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Bulan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Penjualan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Persediaan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white"},[t._v("Permintaan")]),t._v(" "),e("th",{staticClass:"p-3 whitespace-nowrap capitalize text-left sticky top-0 bg-white",attrs:{width:"25px"}},[t._v("Aksi")])])])},function(){var t=this._self._c;return t("tr",[t("td",{staticClass:"px-3 py-10 text-center italic font-semibold",attrs:{colspan:"10"}},[this._v("Tidak ada Data penjualan.")])])}],!1,null,null,null).exports}}]);