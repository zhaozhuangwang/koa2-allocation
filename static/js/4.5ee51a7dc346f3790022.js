webpackJsonp([4],{"4IZO":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    wo shi dengLu ye\n")])},staticRenderFns:[]};var e=s("C7Lr")({},a,!1,function(t){s("MkdP")},"data-v-b88d73d4",null);i.default=e.exports},"7RNV":function(t,i){},IaEO:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("4YfN"),e=s.n(a),o=s("9rMa"),n={name:"shiLiao",data:function(){return{imgCai:"http://img.zwyst.com/images/shiliao/shucai/",imgGuo:"http://img.zwyst.com/images/shiliao/shuiguo/",imgNai:"http://img.zwyst.com/images/shiliao/dannai/",imgZa:"http://img.zwyst.com/images/shiliao/zaliang/",imgLiao:"http://img.zwyst.com/images/shiliao/fuliao/",imgTa:"http://img.zwyst.com/images/shiliao/qita/"}},computed:e()({},Object(o.c)(["shiliao"])),mounted:function(){this.getMenushiLiao()},methods:e()({},Object(o.b)(["getMenushiLiao"]))},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"shiLiao"}},[s("div",{staticClass:"shiLiao_div"},[s("h2",{staticClass:"shiLiao_title"},[t._v("蔬菜")]),t._v(" "),s("div",{staticClass:"shiLiao_cont"},t._l(t.shiliao.Vegetables,function(i,a){return s("div",{key:a,staticClass:"shiLiao_cont_div"},[s("router-link",{attrs:{to:"/shiLiao/in?name="+(i.name?i.name:"")}},[s("img",{attrs:{src:t.imgCai+i.img,alt:""}})]),t._v(" "),s("p",{staticClass:"shiLiao_cont_title",domProps:{textContent:t._s(i.name)}})],1)}))]),t._v(" "),s("div",{staticClass:"shiLiao_div"},[s("h2",{staticClass:"shiLiao_title"},[t._v("水果")]),t._v(" "),s("div",{staticClass:"shiLiao_cont"},t._l(t.shiliao.Fruits,function(i,a){return s("div",{key:a,staticClass:"shiLiao_cont_div"},[s("router-link",{attrs:{to:"/shiLiao/in?name="+(i.name?i.name:"")}},[s("img",{attrs:{src:t.imgGuo+i.img,alt:""}})]),t._v(" "),s("p",{staticClass:"shiLiao_cont_title",domProps:{textContent:t._s(i.name)}})],1)}))]),t._v(" "),s("div",{staticClass:"shiLiao_div"},[s("h2",{staticClass:"shiLiao_title"},[t._v("杂粮")]),t._v(" "),s("div",{staticClass:"shiLiao_cont"},t._l(t.shiliao.grain,function(i,a){return s("div",{key:a,staticClass:"shiLiao_cont_div"},[s("router-link",{attrs:{to:"/shiLiao/in?name="+(i.name?i.name:"")}},[s("img",{attrs:{src:t.imgZa+i.img,alt:""}})]),t._v(" "),s("p",{staticClass:"shiLiao_cont_title",domProps:{textContent:t._s(i.name)}})],1)}))]),t._v(" "),s("div",{staticClass:"shiLiao_div"},[s("h2",{staticClass:"shiLiao_title"},[t._v("杂粮")]),t._v(" "),s("div",{staticClass:"shiLiao_cont"},t._l(t.shiliao.Material,function(i,a){return s("div",{key:a,staticClass:"shiLiao_cont_div"},[s("router-link",{attrs:{to:"/shiLiao/in?name="+(i.name?i.name:"")}},[s("img",{attrs:{src:t.imgLiao+i.img,alt:""}})]),t._v(" "),s("p",{staticClass:"shiLiao_cont_title",domProps:{textContent:t._s(i.name)}})],1)}))]),t._v(" "),s("div",{staticClass:"shiLiao_div"},[s("h2",{staticClass:"shiLiao_title"},[t._v("其他")]),t._v(" "),s("div",{staticClass:"shiLiao_cont"},t._l(t.shiliao.Other,function(i,a){return s("div",{key:a,staticClass:"shiLiao_cont_div"},[s("router-link",{attrs:{to:"/shiLiao/in?name="+(i.name?i.name:"")}},[s("img",{attrs:{src:t.imgTa+i.img,alt:""}})]),t._v(" "),s("p",{staticClass:"shiLiao_cont_title",domProps:{textContent:t._s(i.name)}})],1)}))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"shiLiao_nav"},[i("p")])}]};var _=s("C7Lr")(n,l,!1,function(t){s("POj5")},null,null);i.default=_.exports},MkdP:function(t,i){},POj5:function(t,i){},iRXy:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("4YfN"),e=s.n(a),o=s("9rMa"),n={name:"shiLiao",data:function(){return{}},computed:e()({},Object(o.c)(["sldata","slimgUrl"])),mounted:function(){this.getdatashiLiao(this.$route)},methods:e()({},Object(o.b)(["getdatashiLiao"]))},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"Liao"}},[s("div",{staticClass:"Liao"},[s("h2",{staticClass:"Liao_name",domProps:{textContent:t._s(t.sldata.name+"的功效与作用")}}),t._v(" "),s("p",{staticClass:"Liao_alias",domProps:{textContent:t._s(t.sldata.alias)}}),t._v(" "),s("div",{staticClass:"Liao_logo"},[s("div",{staticClass:"Liao_img"},[s("img",{attrs:{src:t.slimgUrl+t.sldata.img,alt:""}})]),t._v(" "),s("p",{staticClass:"Liao_intro",domProps:{textContent:t._s(t.sldata.intro)}})]),t._v(" "),s("div",{staticClass:"Liao_benefit heise"},[s("h3",[t._v("食疗功效 ↡")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.benefit)}})]),t._v(" "),s("div",{staticClass:"Liao_nutrition heise"},[s("h3",[t._v("主要营养 ↡")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.nutrition)}})]),t._v(" "),s("div",{staticClass:"Liao_suitable heise"},[s("h3",[t._v("适宜人群 ↡")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.suitable)}})]),t._v(" "),s("div",{staticClass:"Liao_tabu heise"},[s("h3",[t._v("禁忌人群 ↡")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.tabu)}})]),t._v(" "),s("div",{staticClass:"Liao_effect heise"},[s("h3",[t._v("功效和作用")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.effect)}})]),t._v(" "),s("div",{staticClass:"Liao_select heise "},[s("h3",{staticClass:"yellow"},[t._v("如何挑选？")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.select)}})]),t._v(" "),s("div",{staticClass:"Liao_notice heise "},[s("h3",{staticClass:"yellow"},[t._v("要注意什么？")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.notice)}})]),t._v(" "),s("div",{staticClass:"Liao_save heise"},[s("h3",{staticClass:" yellow"},[t._v("如何保存？")]),t._v(" "),s("p",{domProps:{textContent:t._s(t.sldata.save)}})])])])},staticRenderFns:[]};var _=s("C7Lr")(n,l,!1,function(t){s("7RNV")},null,null);i.default=_.exports}});