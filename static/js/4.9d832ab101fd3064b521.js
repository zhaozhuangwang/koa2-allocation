webpackJsonp([4],{"02yl":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("4YfN"),e=a.n(s),n=a("9rMa"),o={name:"B",data:function(){return{}},methods:e()({},Object(n.b)(["modifyBName"]),{trunToA:function(){this.$router.push({path:"/ppp"})}}),computed:e()({},Object(n.c)(["resturantName"]))},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"componentsB"},[a("P",{staticClass:"title"},[t._v("组件B")]),t._v(" "),a("P",{staticClass:"titleName"},[t._v("餐馆名称："+t._s(t.resturantName))]),t._v(" "),a("div",[a("button",{staticClass:"btn",on:{click:function(i){t.modifyBName("B餐馆")}}},[t._v("修改为B餐馆")])]),t._v(" "),a("div",{staticClass:"marTop"},[a("button",{staticClass:"btn",on:{click:t.trunToA}},[t._v("跳转到A页面")])])],1)},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(t){a("PZPe")},"data-v-2c565574",null);i.default=c.exports},"0UV+":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("ZLEe"),e=a.n(s),n={name:"index",mounted:function(){!function(){var t,i=[{index:0,text:"胆经</br>子时",name:"icono-headphone"},{index:1,text:"肝经</br>丑时",name:"icono-iphone"},{index:2,text:"肺经</br>寅时",name:"icono-camera"},{index:3,text:"大肠经</br>卯时",name:"icono-cup"},{index:4,text:"胃经</br>辰时",name:"icono-calendar"},{index:5,text:"脾经</br>巳时",name:"icono-keyboard"},{index:6,text:"心经</br>午时",name:"icono-keyboard"},{index:7,text:"小肠经</br>未时",name:"icono-keyboard"},{index:8,text:"膀胱经</br>申时",name:"icono-keyboard"},{index:9,text:"肾经</br>酉时",name:"icono-keyboard"},{index:10,text:"心包经</br>戌时",name:"icono-keyboard"},{index:11,text:"三焦经</br>亥时",name:"icono-keyboard"}],a=1/i.length,s=(t="gbWheel",document.getElementById(t)),n=s.querySelector("ul.gb-wheel-line"),o=s.querySelector(".gb-wheel-list"),r=[],c=[],l=function(){var t,i=document.createElement("p");return e()({"":"",Webkit:"webkit",Moz:"",O:"o",ms:"ms"}).some(function(a){if(void 0!==i.style[a+(a?"T":"t")+"ransform"])return t=a?"-"+a.toLowerCase()+"-":"",!0}),{transform:(a="Transform",a=a.toLowerCase(),t?t+a:a)}.transform;var a}();i.forEach(function(t,i,s){r.push('<li class="gb-wheel-litem" style="'+l+": rotate("+(i*a+a/2)+'turn)"></li>'),c.push('<div class="gb-wheel-item">'),c.push('<div class="gb-wheel-icontent" style="'+l+": rotate("+i*a+'turn)">'),c.push('<p class="gb-wheel-iicon">'),c.push('<i class="'+t.name+'"></i>'),c.push("</p>"),c.push('<p class="gb-wheel-itext">'),c.push(t.text),c.push("</p>"),c.push("</div>"),c.push("</div>")}),n.innerHTML=r.join(""),o.innerHTML=c.join("")}()},methods:{}},o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"index"}},[i("div",{staticClass:"zhuan"},[i("div",{staticClass:"box"},[i("div",{staticClass:"semi-circle left"}),this._v(" "),i("div",{staticClass:"top-circle"},[i("span",{staticClass:"small-circle white"})]),this._v(" "),i("div",{staticClass:"bottom-circle"},[i("span",{staticClass:"small-circle black"})])]),this._v(" "),i("section",{staticClass:"gb-wheel-container",attrs:{id:"gbWheel"}},[i("div",{staticClass:"gb-wheel-content gb-wheel-run"},[i("ul",{staticClass:"gb-wheel-line"}),this._v(" "),i("div",{staticClass:"gb-wheel-list"})])])])])}]};var r=a("C7Lr")(n,o,!1,function(t){a("HWt8")},null,null);i.default=r.exports},"3BE3":function(t,i){},"8P3J":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"searchD",data:function(){return{dataS:"",imgUrl:"",imgCai:"http://img.zwyst.com/images/shiliao/shucai/",imgGuo:"http://img.zwyst.com/images/shiliao/shuiguo/",imgNai:"http://img.zwyst.com/images/shiliao/dannai/",imgZa:"http://img.zwyst.com/images/shiliao/zaliang/",imgLiao:"http://img.zwyst.com/images/shiliao/fuliao/",imgTa:"http://img.zwyst.com/images/shiliao/qita/",imgShide:"http://img.zwyst.com/images/xuejia/ruJia/shide/",imgQj:"http://img.zwyst.com/images/xuejia/daoJia/wuwei/",imgsiJi:"http://img.zwyst.com/images/yang/neijing/siji/",imgQin:"http://img.zwyst.com/images/qqsh/wuyin/guqin/fenlei/",imgQi:"http://img.zwyst.com/images/qqsh/qilei/",imgShu:"http://img.zwyst.com/images/qqsh/shufa/",imgHua:"http://img.zwyst.com/images/qqsh/guohua/",Cai:"Vegetables",Guo:"Fruits",Nai:"Milk",Za:"grain",Liao:"Material",Ta:"Other",shiDe:"shiDe",Qj:"qingjing",siJi:"siJi",qin:"qin",qi:"qi",shu:"shu",hua:"hua",shiLiao:!1,qita:!0,list:!1}},computed:{},mounted:function(){this.souData()},methods:{souData:function(){var t=this,i=this.$route.query.name;this.$http.get("http://m.zwyst.com/api/sou?name="+i,{}).then(function(i){if(t.dataS,1!=i.data.status)return!1;t.dataS=i.data.data[0],void 0!=t.dataS.alias&&(t.shiLiao=!0,t.list=!1,t.qita=!1),void 0!=t.dataS.list&&(t.shiLiao=!1,t.list=!0,t.qita=!1),t.dataS.id==t.Cai&&(t.imgUrl=t.imgCai),t.dataS.id==t.Guo&&(t.imgUrl=t.imgGuo),t.dataS.id==t.Nai&&(t.imgUrl=t.imgNai),t.dataS.id==t.Za&&(t.imgUrl=t.imgZa),t.dataS.id==t.Liao&&(t.imgUrl=t.imgLiao),t.dataS.id==t.Ta&&(t.imgUrl=t.imgTa),t.dataS.id==t.shiDe&&(t.imgUrl=t.imgshiDe),t.dataS.id==t.Qj&&(t.imgUrl=t.imgQj),t.dataS.id==t.siJi&&(t.imgUrl=t.imgsiJi),t.dataS.id==t.qin&&(t.imgUrl=t.imgQin),t.dataS.id==t.qi&&(t.imgUrl=t.imgQi),t.dataS.id==t.shu&&(t.imgUrl=t.imgShu),t.dataS.id==t.hua&&(t.imgUrl=t.imgHua)},function(t){})}}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"searchD"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.shiLiao,expression:"shiLiao"}],staticClass:"Liao"},[a("h2",{staticClass:"Liao_name",domProps:{textContent:t._s(t.dataS.name+"的功效与作用")}}),t._v(" "),a("p",{staticClass:"Liao_alias",domProps:{textContent:t._s(t.dataS.alias)}}),t._v(" "),a("div",{staticClass:"Liao_logo"},[a("div",{staticClass:"Liao_img"},[a("img",{attrs:{src:t.imgUrl+t.dataS.img,alt:""}})]),t._v(" "),a("p",{staticClass:"Liao_intro",domProps:{textContent:t._s(t.dataS.intro)}})]),t._v(" "),a("div",{staticClass:"Liao_benefit heise"},[a("h3",[t._v("食疗功效 ↡")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.benefit)}})]),t._v(" "),a("div",{staticClass:"Liao_nutrition heise"},[a("h3",[t._v("主要营养 ↡")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.nutrition)}})]),t._v(" "),a("div",{staticClass:"Liao_suitable heise"},[a("h3",[t._v("适宜人群 ↡")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.suitable)}})]),t._v(" "),a("div",{staticClass:"Liao_tabu heise"},[a("h3",[t._v("禁忌人群 ↡")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.tabu)}})]),t._v(" "),a("div",{staticClass:"Liao_effect heise"},[a("h3",[t._v("功效和作用")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.effect)}})]),t._v(" "),a("div",{staticClass:"Liao_select heise "},[a("h3",{staticClass:"yellow"},[t._v("如何挑选？")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.select)}})]),t._v(" "),a("div",{staticClass:"Liao_notice heise "},[a("h3",{staticClass:"yellow"},[t._v("要注意什么？")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.notice)}})]),t._v(" "),a("div",{staticClass:"Liao_save heise"},[a("h3",{staticClass:" yellow"},[t._v("如何保存？")]),t._v(" "),a("p",{domProps:{textContent:t._s(t.dataS.save)}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qita,expression:"qita"}],staticClass:"searchD"},[a("h2",{staticClass:"searchD_name",domProps:{textContent:t._s(t.dataS.name)}}),t._v(" "),a("div",{staticClass:"searchD_img"},[a("img",{attrs:{src:t.imgUrl+t.dataS.img,alt:""}})]),t._v(" "),a("p",{staticClass:"searchD_intro",domProps:{textContent:t._s(t.dataS.intro)}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.list,expression:"list"}],staticClass:"searchL"},[a("h2",{staticClass:"searchL_bt",domProps:{textContent:t._s(t.dataS.name)}}),t._v(" "),a("p",{staticClass:"searchL_intro",domProps:{textContent:t._s(t.dataS.intro)}}),t._v(" "),a("div",{staticClass:"searchL_logo"},t._l(t.dataS.list,function(i){return a("div",{key:i.menu,staticClass:"searchL_img"},[a("router-link",{attrs:{to:"/search/in?name="+(i.menu?i.menu:"")}},[a("img",{attrs:{src:i.img?t.dataS.img+i.img:"",alt:""}})]),t._v(" "),a("p",{staticClass:"searchL_name",domProps:{textContent:t._s(i.menu)}})],1)}))])])},staticRenderFns:[]};var n=a("C7Lr")(s,e,!1,function(t){a("kuR0")},null,null);i.default=n.exports},DOFz:function(t,i){},HWt8:function(t,i){},KUG6:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"search",data:function(){return{myData:"",listImg:"",Url:"",imgUrl:"",dt:"",now:-1,Count:!1,souNo:!1,model13:"",souClear:!1,path:this.$route.path,Liao:"Vegetables",shiLiao:"Vegetables",s:"shiLiao/in?name="}},computed:{},mounted:function(){this.gitUrl()},methods:{remoteMethod1:function(t){var i=this;""!==t?(this.loading1=!0,setTimeout(function(){i.loading1=!1;var a=i.list.map(function(t){return{value:t,label:t}});i.options1=a.filter(function(i){return i.label.toLowerCase().indexOf(t.toLowerCase())>-1})},200)):this.options1=[]},sou_clear:function(){this.myData="",this.dt=""},changeShow:function(){this.Count=!0},changeCount:function(){this.Count=!1},gitUrl:function(){}},watch:{dt:{handler:function(t,i){var a=this;if(""==this.dt)return this.souNo=!1,this.souClear=!1,this.myData="",this.Count=!1,!1;this.myData="",this.souClear=!0,this.Count=!0,this.$http.get("http://m.zwyst.com/api/sou?name="+this.dt,{}).then(function(t){if(1!=t.data.status)return a.souNo=!0,!1;a.myData=t.data.data,a.souNo=!1,a.myData.id==a.shiLiao&&(a.Url,a.s)},function(t){})},deep:!0}}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"search"}},[a("div",{staticClass:"pos-top"},[a("div",{staticClass:"sousuo"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"go_logo iconfont icon-fanhui5"})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dt,expression:"dt"}],ref:"type1",staticClass:"sou_input",attrs:{type:"text",placeholder:"请输入关键字搜索"},domProps:{value:t.dt},on:{focus:function(i){t.changeShow()},blur:function(i){i.preventDefault(),t.changeCount()},input:function(i){i.target.composing||(t.dt=i.target.value)}}}),t._v(" "),a("i",{staticClass:"sou_btn iconfont icon-sousuo1"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.souClear,expression:"souClear"}],staticClass:"sou_clear iconfont icon-shibai",on:{click:t.sou_clear}})],1)]),t._v(" "),a("div",{staticClass:"pos-fot"},t._l(t.myData,function(i){return a("div",{key:i.intro,staticClass:"search_div",attrs:{data:i.id}},[a("router-link",{attrs:{to:"/search/in?name="+(i.name?i.name:"")},domProps:{textContent:t._s(i.name)}}),t._v(" "),a("p",{staticClass:"info",domProps:{textContent:t._s(i.intro)}})],1)})),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.souNo,expression:"souNo"}],staticClass:"sou-no"},[t._v("抱歉，没有找到您查找的内容，我们会尽快更新知识库！")])])},staticRenderFns:[]};var n=a("C7Lr")(s,e,!1,function(t){a("3BE3")},null,null);i.default=n.exports},PZPe:function(t,i){},XFt8:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("4YfN"),e=a.n(s),n=a("9rMa"),o={name:"A",data:function(){return{}},methods:e()({},Object(n.b)(["modifyAName"]),{trunToB:function(){this.$router.push({path:"/qqq"})}}),computed:e()({},Object(n.c)(["resturantName"]))},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"componentsA"},[a("P",{staticClass:"title"},[t._v("组件A")]),t._v(" "),a("P",{staticClass:"titleName"},[t._v("餐馆名称："+t._s(t.resturantName))]),t._v(" "),a("div",[a("button",{staticClass:"btn",on:{click:function(i){t.modifyAName("A餐馆")}}},[t._v("修改为A餐馆")])]),t._v(" "),a("div",{staticClass:"marTop"},[a("button",{staticClass:"btn",on:{click:t.trunToB}},[t._v("跳转到B页面")])])],1)},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(t){a("DOFz")},"data-v-54b6c64b",null);i.default=c.exports},kuR0:function(t,i){}});