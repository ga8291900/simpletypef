(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222708"],{cf2a:function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container page_height py-5"},[r("div",{staticClass:"row justify-content-center"},[r("h3",{staticClass:"text-center col-md-12"},[e._v("購買人資訊")]),r("form",{staticClass:"col-md-6 my-5",on:{submit:function(a){return a.preventDefault(),e.createOrder(a)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useremail"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:e.form.user.email},on:{input:function(a){a.target.composing||e.$set(e.form.user,"email",a.target.value)}}}),e.errors.has("email")?r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("收件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(a){a.target.composing||e.$set(e.form.user,"name",a.target.value)}}}),e.errors.has("name")?r("span",{staticClass:"text-danger"},[e._v("請輸入姓名")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"usertel"}},[e._v("收件人電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:e.form.user.tel},on:{input:function(a){a.target.composing||e.$set(e.form.user,"tel",a.target.value)}}}),e.errors.has("tel")?r("span",{staticClass:"text-danger"},[e._v("請輸入電話")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[e._v("收件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(a){a.target.composing||e.$set(e.form.user,"address",a.target.value)}}}),e.errors.has("address")?r("span",{staticClass:"text-danger"},[e._v("請輸入地址")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[e._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"5"},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}})]),e._m(0)])])])},t=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-primary"},[e._v("送出訂單")])])}],o={name:"Order",data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder:function(){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ares_ecommerce_production","/order"),r=e.form;e.$validator.validate().then(function(s){s?e.$http.post(a,{data:r}).then(function(a){e.$store.dispatch("getCart"),e.$router.push("/checkout/".concat(a.data.orderId))}):e.$store.dispatch("alertMessage",{data:{message:"欄位不完整",status:"danger"}})})}}},i=o,l=r("2877"),n=Object(l["a"])(i,s,t,!1,null,null,null);n.options.__file="Order.vue";a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d222708.7a5f3826.js.map