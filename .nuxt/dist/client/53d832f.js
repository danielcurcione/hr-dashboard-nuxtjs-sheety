(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,7,9],{219:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{id:"searchInput",type:"text",placeholder:"Search..."}})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"header-buttons"},[c("a",{attrs:{href:"https://github.com/danielcurcione/"}},[c("button",{staticClass:"button is-dark"},[c("img",{attrs:{src:n(221),width:"20px"}}),t._v("\n                GitHub\n              ")])]),t._v(" "),c("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing"}},[c("button",{staticClass:"button is-success"},[c("img",{attrs:{src:n(222),width:"15px"}}),t._v("\n                Spreadsheet\n              ")])])])}],l=(n(34),n(97),{props:["title","searchFilter","sortData"],methods:{search:function(){var s=document.getElementById("searchInput").value;this.$parent.search(s)},changeTab:function(t){this.$parent.changeTab(t)}}}),r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"content"},[c("nav",{staticClass:"level"},[c("div",{staticClass:"level-left"},[c("h2",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),c("div",{staticClass:"level-right"},[c("div",{directives:[{name:"show",rawName:"v-show",value:"true"===t.searchFilter,expression:"searchFilter === 'true'"}],staticClass:"level-item"},[c("div",{staticClass:"filters"},[c("div",{staticClass:"tabs is-toggle is-toggle-rounded is-small"},[c("ul",[t._l(t.sortData,(function(e){return[c("li",{key:e,attrs:{id:"filter_"+e}},[c("a",{on:{click:function(n){return t.changeTab(e)}}},[c("span",[t._v(" "+t._s(e)+" ")])])])]}))],2)])])]),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:"true"===t.searchFilter,expression:"searchFilter === 'true'"}],staticClass:"level-item"},[c("div",{staticClass:"field has-addons"},[t._m(0),t._v(" "),c("p",{staticClass:"control"},[c("button",{staticClass:"button",on:{click:function(e){return t.search()}}},[c("img",{attrs:{src:n(220),width:"15px"}})])])])]),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:"Info"===t.title,expression:"title === 'Info'"}],staticClass:"level-item"},[t._m(1)])])])])])}),c,!1,null,null,null);e.default=component.exports},220:function(t,e,n){t.exports=n.p+"img/search.1be6f69.svg"},221:function(t,e,n){t.exports=n.p+"img/github.9ee494a.png"},222:function(t,e,n){t.exports=n.p+"img/spreadsheets.5508b18.png"},223:function(t,e,n){t.exports=n.p+"img/trash.bb8494a.svg"},224:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODguMDIyIiBoZWlnaHQ9IjQ2Ni44MzQiIHZpZXdCb3g9IjAgMCA0ODguMDIyIDQ2Ni44MzQiPgogIDxnIGlkPSJzdGFyLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMC41OTMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNNDcxLjU2MywxNzMuNzc4bC0xNDUuNS0yMC44LTY0LjQtMTMyYy04LTE1LjQtMzAtMTIuMi0zNS4zLDBsLTY0LjQsMTMyLTE0NS42LDIwLjhjLTE2LjQsMS0yMS42LDIwLjktMTAuNCwzMy4ybDEwNSwxMDIuOS0yNSwxNDQuNWMtMi45LDE3LjgsMTYuNywyNy44LDI4LjEsMjAuOGwxMjkuOS02OC42LDEyOS45LDY3LjZjMTMuNiw3LDI5LjgtMi44LDI4LjEtMTkuN2wtMjUtMTQ0LjYsMTA1LTEwMi45QzQ5NC42NjMsMTkzLjQ3OCw0ODUuNTYzLDE3NS40NzgsNDcxLjU2MywxNzMuNzc4Wm0tMTI4LjksMTE0LjNjLTQuMiw1LjItNi4yLDExLjQtNS4yLDE3LjdsMTkuNywxMTYuNC0xMDMuOS01NS4xYy02LjctMi44LTEzLTIuOC0xOC43LDBsLTEwMy45LDU1LjEsMTkuNy0xMTYuNGMxLTcuMy0xLTEzLjUtNS4yLTE3LjdsLTg0LjEtODIuMSwxMTYuNC0xNi42YTE5LjAzNSwxOS4wMzUsMCwwLDAsMTQuNi0xMC40bDUyLTEwNSw1MiwxMDVjMy4xLDUuMiw4LjMsOS40LDE0LjYsMTAuNGwxMTYuMiwxNi42WiIvPgogIDwvZz4KPC9zdmc+Cg=="},226:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-content"},[e("img",{attrs:{src:n(229),width:"35px"}})])}],l={props:["id","title","client","fav","noContent"],data:function(){return{card:{name:this.title,client:this.client,favorite:this.favorite,id:this.id}}},methods:{addToFav:function(t){this.card.favorite=t?"X":"",this.$parent.addToFav(this.card)},remove:function(){this.$parent.remove(this.card)}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"card"},[t.noContent?c("div",{staticClass:"add-button"},[t._m(0)]):c("div",[c("header",{staticClass:"card-header"},[c("p",{staticClass:"card-header-title"},["Internal"===t.client?c("span",[t._v(" "+t._s(t.client)+" ")]):c("span",{staticClass:"external"},[t._v(" "+t._s(t.client)+" ")])]),t._v(" "),"X"===t.fav?c("div",{staticClass:"icon",on:{click:function(e){return t.addToFav(!1)}}},[c("img",{attrs:{src:n(228),width:"15px"}})]):c("div",{staticClass:"icon",on:{click:function(e){return t.addToFav(!0)}}},[c("img",{attrs:{src:n(224),width:"15px"}})]),t._v(" "),c("div",{staticClass:"icon",on:{click:function(e){return t.remove()}}},[c("img",{attrs:{src:n(223),width:"15px"}})])]),t._v(" "),c("nuxt-link",{staticStyle:{color:"black","text-decoration":"underline"},attrs:{to:"/"+t.client+"/"+t.title}},[c("div",{staticClass:"card-content"},[c("div",{staticClass:"content"},[t._v("\n            "+t._s(t.title)+" ↗\n        ")])])])],1)])}),c,!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(219).default})},227:function(t,e,n){"use strict";n.r(e);var c=n(24),l=n(98),r=n.n(l),o={data:function(){return{client:"Internal"}},methods:Object(c.a)({openDialog:function(t){this.clearDialog(),this.$parent.openDialog(t)},onChange:function(t){this.client=t.target.value},createNewCard:function(){this.$parent.createNewCard()},clearDialog:function(){document.getElementById("DescrInput").value="",document.getElementById("ClientSelect").value="Internal",this.client="Internal",document.getElementById("FavCheck").checked=!1}},"createNewCard",(function(){var t=this,e=document.getElementById("DescrInput").value,n=document.getElementById("FavCheck").checked||"",c=document.getElementById("ClientSelect").value;"External"===c&&(c=document.getElementById("ClientNameInput").value),n&&(n="X");r.a.post("https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards",{card:{name:e,client:c,favorite:n}}).then((function(e){t.$parent.openDialog(!1),t.$parent.readData(),t.clearDialog()}),(function(t){console.log(t)}))}))},d=n(21),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Aggiungi nuova Calls")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.openDialog(!1)}}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._m(0),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Cliente")]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{attrs:{id:"ClientSelect"},on:{change:function(e){return t.onChange(e)}}},[n("option",{attrs:{value:"Internal"}},[t._v("Internal")]),t._v(" "),n("option",{attrs:{value:"External"}},[t._v("External")])])])]),t._v(" "),"External"===t.client?n("div",{staticClass:"control",staticStyle:{"margin-top":"10px"}},[n("input",{staticClass:"input",attrs:{id:"ClientNameInput",type:"text",placeholder:"Nome cliente"}})]):t._e()]),t._v(" "),t._m(1)]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-success",on:{click:function(e){return t.createNewCard()}}},[t._v("Conferma")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Nome")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{id:"DescrInput",type:"text",placeholder:"Testo"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox",id:"FavCheck"}}),t._v("\n            Aggiungi ai preferiti\n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(219).default})},228:function(t,e,n){t.exports=n.p+"img/fav-active.0e91482.svg"},229:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwIDQ5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkwIDQ5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gcG9pbnRzPSIyMjIuMDMxLDQ5MCAyNjcuOTY5LDQ5MCAyNjcuOTY5LDI2Ny45NjkgNDkwLDI2Ny45NjkgNDkwLDIyMi4wMzEgMjY3Ljk2OSwyMjIuMDMxIDI2Ny45NjksMCAyMjIuMDMxLDAgDQoJMjIyLjAzMSwyMjIuMDMxIDAsMjIyLjAzMSAwLDI2Ny45NjkgMjIyLjAzMSwyNjcuOTY5ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},254:function(t,e,n){"use strict";n.r(e);var c=n(226),l=n(227),r=n(253),o={props:["data"],data:function(){return{addDialog:!1}},methods:{openDialog:function(t){this.addDialog=t},readData:function(){this.$parent.readData()},addToFav:function(t){this.$parent.addToFav(t)},remove:function(t){this.$parent.remove(t)}},components:{Card:c.default,AddDialog:l.default,SpringSpinner:r.a}},d=n(21),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content grid"},[n("div",{staticClass:"card-item",on:{click:function(e){return t.openDialog(!0)}}},[n("Card",{attrs:{noContent:!0}})],1),t._v(" "),t._l(t.data,(function(t){return n("div",{key:t.id,staticClass:"card-item"},[n("Card",{attrs:{id:t.id,title:t.name,client:t.client,fav:t.favorite}})],1)}))],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.addDialog,expression:"addDialog"}],staticClass:"add-dialog"},[n("AddDialog")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(226).default,AddDialog:n(227).default})}}]);