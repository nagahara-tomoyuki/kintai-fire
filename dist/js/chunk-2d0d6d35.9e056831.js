(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("新規登録画面")]),s("div",{staticClass:"form"},[s("label",{attrs:{for:"emial"}},[t._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form"},[s("label",{attrs:{for:"password"}},[t._v("password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form"},[s("button",{on:{click:t.Register}},[t._v("登録")])])])},o=[],i=s("bc3a"),n=s.n(i),r={data:function(){return{email:"",password:""}},methods:{Register:function(){n.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAR4HImtY6KRc9Mv0QjHsbWn0FLfl-JEgc",{email:this.email,password:this.password,returnSecureToken:!0}).then((function(t){console.log(t),alert("登録完了しました。ログインし直してください。")}))}}},l=r,c=s("2877"),p=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.9e056831.js.map