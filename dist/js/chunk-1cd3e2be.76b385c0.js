(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd3e2be"],{6676:function(t,e,s){},d537:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Checkout")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-content bg padding-y"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"card"},[s("article",{staticClass:"card-body"},[t._m(1),s("p",[t._v(t._s(t.address))]),s("button",{staticClass:"btn btn-primary rounded-pill"},[t._v("Ubah Alamat")])])]),s("br"),s("div",{staticClass:"card mb-3"},[s("article",{staticClass:"card-body"},[t._m(2),s("div",{staticClass:"row"},t._l(t.orders,(function(e,a){return s("div",{key:e.id,staticClass:"col-md-6"},[s("figure",{staticClass:"itemside mb-3"},[s("div",{staticClass:"aside"},[s("img",{staticClass:"border img-xs",attrs:{src:t.image[a]}})]),s("figcaption",{staticClass:"info"},[s("p",[t._v(t._s(e.product.name))]),s("span",[t._v(t._s(e.qty)+" x "+t._s(t.formatPrice(e.product.price))+" = "+t._s(t.total[a]))])])])])})),0)]),s("article",{staticClass:"card-body border-top"},[s("dl",{staticClass:"row"},[s("dt",{staticClass:"col-sm-9"},[t._v(" Subtotal: "),s("span",{staticClass:"float-right text-muted"},[t._v(t._s(t.orders.length)+" items")])]),s("dd",{staticClass:"col-sm-3 text-right"},[s("strong",[t._v(t._s(t.formatPrice(t.totalAll())))])]),t._m(3),t._m(4),t._m(5),t._m(6),s("dt",{staticClass:"col-sm-9"},[t._v("Total:")]),s("dd",{staticClass:"col-sm-3 text-right"},[s("strong",{staticClass:"h5 text-dark"},[t._v(t._s(t.formatPrice(t.totalAll())))])])])])]),s("br"),s("div",[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}],staticClass:"col-sm-12 btn btn-primary rounded-pill"},[t._v("Pilih Pembayaran")]),s("b-modal",{attrs:{id:"my-modal",title:"Pilih Pembayaran","hide-footer":""}},[t._v(" Hello From My Modal! "),s("div",[s("b-form-group",{attrs:{label:"Individual radios"}},[s("b-form-radio",{attrs:{name:"some-radios",value:"A"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("Option A")]),s("b-form-radio",{attrs:{name:"some-radios",value:"B"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("Option B")])],1),s("div",{staticClass:"mt-3"},[t._v(" Selected: "),s("strong",[t._v(t._s(t.selected))])])],1)])],1)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"section-heading"},[s("h2",{staticClass:"section-title"},[t._v("Checkout")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"mb-4"},[s("h4",{staticClass:"card-title"},[t._v("Alamat Pengiriman")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"mb-4"},[s("h4",{staticClass:"card-title"},[t._v("Review cart")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dt",{staticClass:"col-sm-9"},[t._v(" Discount: "),s("span",{staticClass:"float-right text-muted"},[t._v("No discount")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dd",{staticClass:"col-sm-3 text-danger text-right"},[s("strong",[t._v("0")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dt",{staticClass:"col-sm-9"},[t._v(" Ongkos kirim: "),s("span",{staticClass:"float-right text-muted"},[t._v("Express delivery")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dd",{staticClass:"col-sm-3 text-right"},[s("strong",[t._v("0")])])}],n=(s("4160"),s("d81d"),s("13d5"),s("b0c0"),s("4fad"),s("159b"),s("3835")),o=s("d4ec"),l=s("bee2"),d=s("c427"),u=function(){function t(){Object(o["a"])(this,t)}return Object(l["a"])(t,[{key:"get",value:function(t){return d["a"].get("/user_profile/".concat(t))}},{key:"create",value:function(t){return d["a"].post("/user_profile",t)}},{key:"update",value:function(t){return d["a"].put("/user_profile",t)}},{key:"delete",value:function(t){return d["a"].delete("/user_profile/".concat(t))}}]),t}(),m=new u,f=s("d0b7"),v={name:"checkout",data:function(){return{user:[],address:"",orders:[],image:"",total:0,selected:""}},methods:{getUser:function(t){var e=this;m.get(t).then((function(t){e.user=t.data,e.address=e.user.address+" "+e.user.districts.name+", "+e.user.districts.cities.name+", "+e.user.districts.cities.provinces.name})).catch((function(t){console.log(t)}))},getOrder:function(t){var e=this;f["a"].get(t).then((function(t){e.orders=t.data,console.log(e.orders),e.image=e.orders.map((function(t){return t.product.images.length>0?"https://cembeliq.com:4433/images/"+t.product.images[0].name:"https://cembeliq.com:4433/images/default.png"})),e.total=e.orders.map((function(t){return e.formatPrice(t.qty*t.product.price)}))})).catch((function(t){console.log(t)}))},totalAll:function(){var t=[];return Object.entries(this.orders).forEach((function(e){var s=Object(n["a"])(e,2),a=s[1];t.push(a.product.price*a.qty)})),t.reduce((function(t,e){return t+e}),0)},wa:function(){window.open("https://api.whatsapp.com/send?phone=+628111070114&text=")}},mounted:function(){this.getUser(this.$store.state.auth.user.id),this.getOrder(this.$store.state.auth.user.id)}},_=v,p=s("2877"),h=Object(p["a"])(_,i,c,!1,null,null,null),b=h.exports,g={name:"app",components:{Checkout:b}},C=g,y=(s("d677"),Object(p["a"])(C,a,r,!1,null,null,null));e["default"]=y.exports},d677:function(t,e,s){"use strict";var a=s("6676"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-1cd3e2be.76b385c0.js.map