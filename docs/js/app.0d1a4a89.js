(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SeeShells/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"134b":function(e,t,a){},5251:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("5f5b"),n=a("b1e0"),i=(a("f9e3"),a("2dd8"),a("8c4f")),o=a("0628"),l=a.n(o),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavigationBar"),a("div",{attrs:{id:"page"}},[a("router-view")],1)],1)},d=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"nav"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"75",height:"75"}}),r("router-link",{attrs:{to:"/SeeShells/"}},[r("b-navbar-brand",[e._v("SeeShells")])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("router-link",{attrs:{to:"/SeeShells/about"}},[r("b-navbar-item",[e._v("About")])],1),r("b-nav-item",{attrs:{href:"#"}},[e._v("Download the Program")]),r("router-link",{attrs:{to:"/SeeShells/team"}},[r("b-navbar-item",[e._v("Developer Team")])],1),r("b-nav-item",{attrs:{href:"https://github.com/RickLeinecker/SeeShells"}},[e._v("GitHub Page")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("Administrative")])]},proxy:!0}])},[r("b-dropdown-item",[r("router-link",{attrs:{to:"/SeeShells/register"}},[e._v("Register")])],1),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Login")])],1)],1)],1)],1)],1)},f=[],m={name:"NavigationBar"},p=m,h=(a("5e9e"),a("2877")),v=Object(h["a"])(p,u,f,!1,null,"eb051110",null),b=v.exports,g={name:"App",components:{NavigationBar:b}},w=g,_=(a("034f"),Object(h["a"])(w,c,d,!1,null,null,null)),y=_.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("h1",[e._v("Welcome to SeeShells")]),a("h6",[e._v("Extract Information - Create Timeline - Filter your information - Export Report or Raw data")]),a("button",{attrs:{type:"button"}},[e._v("Download SeeShells.exe")]),a("p"),a("p",[e._v(" SeeShells is essentially an information extraction software. The objective is to create a standalone open source executable that can run both online and offline. It will extract and parse through Windows Registry information. This data will then be converted into two forms. The first is a csv file that will contain all the raw data we obtain. The second is a human readable timeline. The timeline will provide an interactive easier to read visualization of the data extracted from the windows registries, which is otherwise difficult and time consuming to comb through and understand. ")])])}],C={name:"Home"},j=C,T=Object(h["a"])(j,S,x,!1,null,null,null),P=T.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"register"}},[e.show?a("b-form",{staticClass:"m-5",on:{submit:e.onRegister}},[a("b-form-group",{attrs:{label:"Username:"}},[a("b-form-input",{attrs:{required:"",placeholder:"Enter username"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Password:"}},[a("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),a("password",{attrs:{"strength-meter-only":!0},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),a("b-form-input",{attrs:{type:"password",required:"",placeholder:"Re-enter password"},model:{value:e.form.passwordconfirm,callback:function(t){e.$set(e.form,"passwordconfirm",t)},expression:"form.passwordconfirm"}}),a("div",{attrs:{id:"messages"}})],1),a("b-button",{attrs:{type:"register",variant:"primary"}},[e._v("Register")])],1):e._e()],1)},O=[],E=(a("b0c0"),a("f20a")),R=a.n(E),W={name:"RegisterForm",components:{Password:R.a},data:function(){return{form:{name:"",password:"",passwordconfirm:""},show:!0}},methods:{onRegister:function(e){e.preventDefault();var t="https://seeshells.herokuapp.com/";if(this.form.password==this.form.passwordconfirm){var a='{"username":"'+this.form.name+'", "password":"'+this.form.password+'"}',r=t+"register",s=new XMLHttpRequest;s.open("POST",r,!1),s.setRequestHeader("Content-type","application/json; charset=UTF-8");try{s.send(a);var n=JSON.parse(s.responseText);1==n.success?document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-info alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Registration sent! </strong>You must wait for a current administrator to approve you now. </div>'):document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong>'+n.error+" Please try again later. </div>")}catch(i){alert(i.message)}}else document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Passwords don\'t match! </strong>Re-enter the passwords. </div>')}}},$=W,A=(a("7197"),Object(h["a"])($,k,O,!1,null,null,null)),M=A.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"team"}},[r("h1",[e._v("Meet the Team")]),r("h4",{staticClass:"section-subheading text-muted"},[e._v("The SeeShells application is a Senior Design project built by five Computer Science students at UCF.")]),r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("cf05"),alt:"Sara"}}),r("div",{staticClass:"container"},[r("h2",[e._v("Sara Frackiewicz")]),r("p",{staticClass:"title"},[e._v("Project Manager, API, and Website")])])])]),r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("cf05"),alt:"Klayton"}}),r("div",{staticClass:"container"},[r("h2",[e._v(" Klayton Killough ")]),r("p",{staticClass:"title"},[e._v("WPF")])])])]),r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("cf05"),alt:"Aleks"}}),r("div",{staticClass:"container"},[r("h2",[e._v("Aleksander Stoyanov")]),r("p",{staticClass:"title"},[e._v("WPF")])])])]),r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("cf05"),alt:"Bridget"}}),r("div",{staticClass:"container"},[r("h2",[e._v("Bridget Woodye")]),r("p",{staticClass:"title"},[e._v("WPF")])])])]),r("div",{staticClass:"column"},[r("div",{staticClass:"card"},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("cf05"),alt:"Yara"}}),r("div",{staticClass:"container"},[r("h2",[e._v("Yara As-Saidi")]),r("p",{staticClass:"title"},[e._v("WPF and Website")])])])])])}],I={name:"team"},H=I,L=(a("7bbb"),Object(h["a"])(H,B,F,!1,null,null,null)),q=L.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("h1",[e._v("About Our Project")]),a("p",[e._v(" SeeShells is essentially an information extract software. The objective is to create a standalone open source executable that can run both online and offline. It will extract and parse through Windows Registry information. This data will then be converted into two forms. The first is a csv file that will contain all the raw data we obtain. The second is a human readable timeline. The timeline will provide an interactive easier to read visualization of the data extracted from the windows registries, which is otherwise difficult and time consuming to comb through and understand. The parsing and extraction of information has a slightly different process for each of the windows versions including Windows XP, Windows Vista Windows 7,8,8.1 and 10. In order to create a robust application we have set up a server to store database information on parsing different registry versions. ")]),a("p",[e._v(" In the long run our hope for this software is that it will expedite the process of extracting, parsing, and presenting the registry information in a way that is condensed and easily understandable. We hope others will benefit from our interactive timeline generated from the ShellBag information and we hope to make a great impact on the digital forensics community. ")])])}],z={name:"Home"},J=z,K=Object(h["a"])(J,D,N,!1,null,null,null),U=K.exports,Y="/SeeShells/",V=[{path:Y,component:P},{path:Y+"register",component:M},{path:Y+"team",component:q},{path:Y+"about",component:U}],X=V;r["default"].config.productionTip=!1,r["default"].use(s["a"]),r["default"].use(n["a"]),r["default"].use(i["a"]),r["default"].use(l.a);var G=new i["a"]({mode:"history",routes:X});new r["default"]({router:G,render:function(e){return e(y)}}).$mount("#app")},"5e9e":function(e,t,a){"use strict";var r=a("134b"),s=a.n(r);s.a},7197:function(e,t,a){"use strict";var r=a("d201"),s=a.n(r);s.a},"7bbb":function(e,t,a){"use strict";var r=a("5251"),s=a.n(r);s.a},"85ec":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.9b01295e.png"},d201:function(e,t,a){}});
//# sourceMappingURL=app.0d1a4a89.js.map