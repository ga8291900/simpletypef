(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-527ce26a"],{1904:function(t,a,s){},"35da":function(t,a,s){"use strict";var i=s("1904"),e=s.n(i);e.a},"5ea5":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"d-md-block sidebar"},[s("div",{staticClass:"sidebar-sticky"},[s("ul",{staticClass:"nav flex-column text-center my-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/all"}},[t._v("全部")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/coat"}},[t._v("外套")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/clothes"}},[t._v("上衣")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/pants"}},[t._v("下身")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/bag"}},[t._v("包款")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shopping/accessory"}},[t._v("配件")])],1)])])])},e=[],n=(s("35da"),s("2877")),r={},c=Object(n["a"])(r,i,e,!1,null,"3155a655",null);c.options.__file="Sidebar.vue";a["a"]=c.exports},be94:function(t,a,s){"use strict";function i(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}function e(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{},e=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(a){i(t,a,s[a])})}return t}s.d(a,"a",function(){return e})},e975:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container page_height py-5"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("Sidebar")],1),s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"row"},t._l(t.products[t.currentPage],function(a){return s("div",{key:a.id,staticClass:"col-md-6 mb-4"},[s("div",{staticClass:"card border-0 shadow-sm"},[s("router-link",{staticClass:"card-body badge-light",attrs:{to:{name:"Product",params:{id:a.id}}},on:{click:function(a){t.getProduct()}}},[s("div",{staticStyle:{height:"300px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("h5",{staticClass:"card-title"},[s("p",{staticClass:"h4 text-dark"},[t._v(t._s(a.title))]),s("p",{staticClass:"h4 text-dark"},[t._v(t._s(a.brand))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price===a.origin_price?s("div",{staticClass:"h6 mr-2 ml-auto"},[t._v("NT"+t._s(t._f("currency")(a.origin_price)))]):t._e(),a.price!==a.origin_price?s("del",{staticClass:"h6 mr-2 ml-auto"},[t._v("NT"+t._s(t._f("currency")(a.origin_price)))]):t._e(),a.price!==a.origin_price?s("div",{staticClass:"h5 text-danger"},[t._v("NT"+t._s(t._f("currency")(a.price)))]):t._e()])])],1)])}),0),s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination d-flex justify-content-center"},[s("li",{staticClass:"page-item",class:{disabled:0===t.currentPage}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){t.currentPage-=1}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),s("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.products.length,function(a){return s("li",{key:a,staticClass:"page-item",class:{active:t.currentPage===a-1}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){t.currentPage=a-1}}},[t._v(t._s(a))])])}),s("li",{staticClass:"page-item",class:{disabled:t.currentPage==t.products.length-1}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){t.currentPage+=1}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),s("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])])],1)},e=[],n=s("be94"),r=s("2f62"),c=s("5ea5"),l={name:"Shopping",components:{Sidebar:c["a"]},data:function(){return{tempProduct:{},isNew:!1,currentPage:0,status:{fileUploading:!1}}},computed:Object(n["a"])({isLoading:function(){return this.$store.state.isLoading}},Object(r["b"])(["products"])),methods:{getProducts:function(){this.$store.dispatch("getShoppingProducts")}},created:function(){this.getProducts()}},o=l,u=s("2877"),d=Object(u["a"])(o,i,e,!1,null,null,null);d.options.__file="Shopping_all.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-527ce26a.31b8d2ec.js.map