(function(t){function n(n){for(var i,c,r=n[0],s=n[1],l=n[2],p=0,m=[];p<r.length;p++)c=r[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&m.push(a[c][0]),a[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(n);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,r=1;r<e.length;r++){var s=e[r];0!==a[s]&&(i=!1)}i&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var i={},a={app:0},o=[];function c(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)c.d(e,i,function(n){return t[n]}.bind(null,i));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var u=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),a=e.n(i);a.a},1260:function(t,n,e){"use strict";var i=e("1c39"),a=e.n(i);a.a},"1c39":function(t,n,e){},"1d36":function(t,n,e){t.exports=e.p+"img/111.49a5dae2.jpg"},"246f":function(t,n,e){},"287a":function(t,n,e){},"365d":function(t,n,e){"use strict";var i=e("654c"),a=e.n(i);a.a},"38c8":function(t,n,e){},"406a":function(t,n,e){"use strict";var i=e("5ce0"),a=e.n(i);a.a},"507e":function(t,n,e){t.exports=e.p+"img/qr.f32e9989.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("db4d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},o=[],c={name:"app",components:{}},r=c,s=(e("034f"),e("2877")),l=Object(s["a"])(r,a,o,!1,null,null,null),u=l.exports,p=e("8c4f"),m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"top-logo",on:{click:t.company}},[e("van-image",{attrs:{radius:"10",width:"4rem",height:"4rem",fit:"contain",src:t.logo}}),t._m(0)],1),e("div",[e("van-notice-bar",{attrs:{scrollable:"",color:"#1989fa",background:"#ecf9ff","left-icon":"volume-o",text:"雄宇环保，宇宙第一，节能环保零污染，环保中的佼佼者，掌握核心科技"}})],1),e("div",{staticClass:"swipe-box"},[e("van-swipe",{staticClass:"my-swipe",attrs:{height:t.bannerHeight,autoplay:3e3}},t._l(t.images,(function(n,i){return e("van-swipe-item",{key:i},[e("van-image",{attrs:{height:t.bannerHeight,fit:"cover",src:n}})],1)})),1)],1),e("van-tabbar",{attrs:{"z-index":"999",route:""}},[e("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{replace:"",to:"/product",icon:"search"}},[t._v("产品")]),e("van-tabbar-item",{attrs:{replace:"",to:"/news",icon:"label-o"}},[t._v("新闻")]),e("van-tabbar-item",{attrs:{replace:"",to:"/contact",icon:"phone-o"}},[t._v("联系")])],1),e("keep-alive",[e("router-view")],1),t._m(1)],1)},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"logo-name"},[e("p",[t._v("雄宇环保科技有限公司")]),e("p",[t._v("xiong yu huan bao ltd")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"xy_footer"},[e("p",[t._v("Copyright © 雄宇环保科技有限公司 版权所有")]),e("p",[t._v("联系电话： 18735173681 地址:山西省太原市小店区康宁街万马仕广场12层1214室")]),e("p",{staticClass:"step"})])}],d=e("f889"),v=e("cf05"),h=e.n(v),g=e("1d36"),b=e.n(g),_=e("82a8"),x=e.n(_),w=e("cb73"),C=e.n(w);i["a"].use(d["a"]);var j={data:function(){return{images:[b.a,x.a,C.a],bannerHeight:150}},mounted:function(){var t=document.body.clientWidth;this.bannerHeight=t/375*150},computed:{logo:function(){return h.a}},methods:{company:function(){this.$router.push("/company")}}},y=j,k=(e("406a"),Object(s["a"])(y,m,f,!1,null,null,null)),q=k.exports,U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},[e("van-nav-bar",{attrs:{title:"公司详情","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"nav-content"},[e("router-view")],1)],1)},$=[],O={mounted:function(){console.log("nav---")},methods:{onClickLeft:function(){this.$router.go(-1)}}},E=O,P=(e("f5b4"),Object(s["a"])(E,U,$,!1,null,"4c6b3359",null)),A=P.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-content"},[e("div",{staticClass:"section-title"},[e("div",[t._v("最新供应")]),e("div",{staticClass:"more",on:{click:t.toProduct}},[t._v(" 最新更多 ")])]),e("van-grid",{attrs:{border:!0,gutter:"10","column-num":3}},t._l(t.newProducts,(function(n){return e("van-grid-item",{key:n.id},[e("van-image",{attrs:{src:n.picUrl}}),e("div",{staticClass:"font14 numberLine1 product-item-title"},[t._v(t._s(n.title))])],1)})),1)],1)},S=[],z={components:{},data:function(){return{newProducts:[{id:"20200907001",title:"WNS低氮冷凝式燃气蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},{id:"20200907002",title:"商用低氮冷凝热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1106146019159.jpg.thumb.jpg"},{id:"20200907003",title:"雄宇低氮贯流锅炉（技术引进产品）",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},{id:"20200907004",title:"WDR型卧式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1128236719159.jpg.thumb.jpg"},{id:"20200907005",title:"低氮真空热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1123356519159.jpg.thumb.jpg"},{id:"20200907006",title:"LDR型立式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1127135019159.jpg.thumb.jpg"}]}},methods:{toProduct:function(){this.$router.push("/product")}}},R=z,T=(e("e4e4"),Object(s["a"])(R,L,S,!1,null,null,null)),H=T.exports,M=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"introduce-content "},[e("p",[t._v("introduce")])])}],D={components:{},data:function(){return{}},methods:{}},I=D,W=(e("c36b"),Object(s["a"])(I,M,Q,!1,null,null,null)),J=W.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"product-content"},[t._m(0),t._l(t.newProducts,(function(t){return e("van-card",{key:t.id,attrs:{currency:"",price:"2.00",desc:"描述信息",title:t.title,thumb:t.picUrl}})}))],2)},V=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("div",{staticClass:"title"},[t._v("供应产品")]),e("div")])}],B={components:{},data:function(){return{newProducts:[{id:"20200907001",title:"WNS低氮冷凝式燃气蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},{id:"20200907002",title:"商用低氮冷凝热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1106146019159.jpg.thumb.jpg"},{id:"20200907003",title:"雄宇低氮贯流锅炉（技术引进产品）",picUrl:"http://img.maimaosi.com/1/202003/19/1101034819159.jpg.thumb.jpg"},{id:"20200907004",title:"WDR型卧式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1128236719159.jpg.thumb.jpg"},{id:"20200907005",title:"低氮真空热水锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1123356519159.jpg.thumb.jpg"},{id:"20200907006",title:"LDR型立式电加热蒸汽锅炉",picUrl:"http://img.maimaosi.com/1/202003/19/1127135019159.jpg.thumb.jpg"}]}},methods:{}},F=B,G=(e("9791"),Object(s["a"])(F,N,V,!1,null,null,null)),X=G.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact-content"},[e("span",[t._v(" 公司名称：山西雄宇环保科技有限公司 "),e("router-link",{attrs:{to:"/company"}},[t._v(" 👉 👉 公司介绍")])],1),t._v(" 公司地址：山西省太原市小店区康宁街万马仕广场12层1214室 "),e("br"),t._m(0),t._m(1),t._m(2),t._m(3),t._v("QQ号:1064297589 "),e("br")])},Z=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" 公司电话： "),e("a",{attrs:{href:"tel:"}},[t._v("xxx-xxxx")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" 电子邮件： "),e("a",{attrs:{href:"mailto:10642975897@qq.com"}},[t._v("1064297589@qq.com")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" 联 系 人：张世雄 （先生） "),e("br"),t._v("手机号码： "),e("a",{attrs:{href:"tel:18735173681"}},[t._v("18735173681")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wxewm"},[i("span",[t._v("添加微信：")]),i("img",{attrs:{src:e("507e"),alt:"微信二维码"}}),i("br"),t._v("微信号:nt18735173681 "),i("br")])}],K={components:{},data:function(){return{}},methods:{}},tt=K,nt=(e("b156"),Object(s["a"])(tt,Y,Z,!1,null,null,null)),et=nt.exports,it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"news-content"},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(n){t.refreshing=n},expression:"refreshing"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n){return e("van-cell",{key:n.linkUrl,attrs:{size:"large",title:n.label,"is-link":""},on:{click:function(e){return t.cellClick(n)}}})})),1)],1)],1)},at=[],ot={components:{},data:function(){return{list:[],listData:[{linkUrl:"https://mp.weixin.qq.com/s/ATbia-DMnidrYiT8k8-X5A",label:"【干货】碱度的测定"},{linkUrl:"https://mp.weixin.qq.com/s/05yA46IOAxQez9PnnU9gVg",label:"【干货】氯化物的测定"},{linkUrl:"https://mp.weixin.qq.com/s/Pv589zrbrHa4uft-AGnzHQ",label:"【干货】硬度的测定"},{linkUrl:"https://mp.weixin.qq.com/s/fdqpZV7zM0EXdHFFHq21Pg",label:"【干货】锅炉运行水质指标"},{linkUrl:"https://mp.weixin.qq.com/s/C7rtdK17RZShsZf0qoQMXA",label:"锅炉如何实现低氮排放？"},{linkUrl:"https://mp.weixin.qq.com/s/x5lN_uptH5osClmpBLTVMw",label:"低氮燃烧器选择考虑的主要参数"},{linkUrl:"https://mp.weixin.qq.com/s/uuJsA5vFJSC2eULeVRtuAQ",label:"对比 | 全预混冷凝锅炉 VS 普通锅炉"},{linkUrl:"https://mp.weixin.qq.com/s/cjmsQpO-64Wdmqnkl-hERg",label:"蒸汽锅炉与蒸汽发生器的对比"},{linkUrl:"https://mp.weixin.qq.com/s/wgnctfv-0bfU2IR7fhk46A",label:"低氮燃气锅炉与普通锅炉的区别"},{linkUrl:"https://mp.weixin.qq.com/s/h3lGEiJzudGR86SsRgmzCQ",label:"工业污染防治过程管控系统介绍"},{linkUrl:"https://mp.weixin.qq.com/s/tzP312MwxA6t7nI3HuqleQ",label:"蒸汽锅炉讲解"},{linkUrl:"https://mp.weixin.qq.com/s/dlbAIIEg14Am8-zY-auYLw",label:"全预混燃烧方式与大气式燃烧方式的"}],loading:!1,finished:!1,refreshing:!1}},methods:{cellClick:function(t){window.open(t.linkUrl,"_blank")},onLoad:function(){var t=this;setTimeout((function(){t.refreshing&&(t.refreshing=!1),t.list=t.listData,t.loading=!1,t.finished=!0}),1e3)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()}}},ct=ot,rt=(e("1260"),Object(s["a"])(ct,it,at,!1,null,null,null)),st=rt.exports,lt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"contact-content"},[i("div",{staticClass:"r_companydetail"},[i("div",{staticClass:"companyInfo"},[i("div",{staticClass:"companyLogo"},[i("img",{staticClass:"logo-icon",attrs:{src:e("cf05")}})]),i("div",{staticClass:"info-content"},[i("h1",{staticClass:"name"},[t._v("山西雄宇环保科技有限公司")]),i("p",{staticClass:"ind"},[t._v("电气机械/器材制造")]),i("p",{staticClass:"prop"},[t._v("民营")]),i("p",{staticClass:"scale"},[t._v("20人以下")])])]),i("div",{staticClass:"companyAdd boxsizing"},[i("p",{staticClass:"tit"},[t._v("公司地址")]),i("div",{staticClass:"add"},[i("i",{staticClass:"i_city"}),i("span",[t._v("山西省太原市小店区康宁街万马仕广场12层1214室")])])]),i("div",{staticClass:"company-box boxsizing"},[i("p",{staticClass:"tit"},[t._v("公司描述")]),i("div",{staticClass:"about-main"},[i("p",[t._v("山西雄宇环保科技有限公司是专业从事环保、热能技术开发和应用的公司。致力为客户提供环保节能锅炉、全预混高效冷凝锅炉、冷凝蒸汽锅炉、热水锅炉、真空锅炉、空气源热泵、壁挂炉、供暖工程（含BOT合同能源管理、供热管理、水处理工程、空调工程、热水供应工程的设备选型、系统设计、安装、调试、维护等全过程服务。主要经营：燃（油）气锅炉、电锅炉、空气源热泵、真空热水机组、燃烧器、燃气表、软水器、锅炉空调节能控制设备。")]),i("p",[t._v("公司在太原市小店经济开发区康宁街，在环保能源领域从事多年并有丰富经验，并在山西省内各地市太原市、晋城市设有销售服务网络，公司设有市场部、技术部、工程部、售后服务部等专业部门，拥有雄厚的经济、技术实力和健全的管理制度；公司为用户提供最佳的设备、最优的系统及完善的售后服务，做到投资、技术合理、设备先进、自动化程度高，以此来回报广大用户对我们工作的支持和信任。")]),i("p",[t._v("公司一定会不断进取，信守“以人为本、诚信敬业、共赢未来”的公司理念，力争在技术、品质、服务、管理等多方面成为全行业的典范！")]),i("p",[t._v("我们郑重承诺:")]),i("p",[t._v("用真诚、严谨、规范的工作态度和良好的工作作风赢得您的微笑！")]),i("p",[t._v("以雄厚的技术实力为您提供放心工程！")]),i("p",[t._v("为您提供人性化、亲情化的售前、售中、售后超值服务")]),i("p",[t._v("为了适应市场的发展，公司紧跟国家环保相关“煤改气、煤改电”政策， 大力推广相关环保设备，急需专业的技术人才、销售精英共同发展。")])])])])])}],pt={components:{},data:function(){return{}},methods:{onClickLeft:function(){this.$router.go(-1)}}},mt=pt,ft=(e("365d"),Object(s["a"])(mt,lt,ut,!1,null,null,null)),dt=ft.exports;i["a"].use(p["a"]);var vt=[{path:"/",component:q,children:[{path:"",name:"home",component:H}]},{path:"/introduce",component:q,children:[{path:"",name:"introduce",component:J}]},{path:"/product",component:q,children:[{path:"",name:"product",component:X}]},{path:"/news",component:q,children:[{path:"",name:"news",component:st}]},{path:"/contact",component:q,children:[{path:"",name:"contact",component:et}]},{path:"/company",component:A,children:[{path:"",name:"company",component:dt}]}],ht=new p["a"]({routes:vt}),gt=ht,bt=e("2f62"),_t={activeTabName:"/"},xt={},wt={changeTab:function(t,n){t.activeTabName=n}},Ct={namespaced:!0,state:_t,actions:xt,mutations:wt};i["a"].use(bt["a"]);var jt=!1,yt=new bt["a"].Store({modules:{tabBarStore:Ct},strict:jt}),kt=(e("38c8"),e("72a9"));e("6d4d");i["a"].use(kt["a"]),i["a"].config.productionTip=!1,i["a"].prototype.$store=yt,new i["a"]({store:yt,router:gt,render:function(t){return t(u)}}).$mount("#app")},"5ce0":function(t,n,e){},"654c":function(t,n,e){},"82a8":function(t,n,e){t.exports=e.p+"img/112.ca641a81.jpg"},"85ec":function(t,n,e){},"866b":function(t,n,e){},9791:function(t,n,e){"use strict";var i=e("246f"),a=e.n(i);a.a},b156:function(t,n,e){"use strict";var i=e("287a"),a=e.n(i);a.a},c36b:function(t,n,e){"use strict";var i=e("d8aa"),a=e.n(i);a.a},cb73:function(t,n,e){t.exports=e.p+"img/113.9215e7f5.jpg"},cf05:function(t,n,e){t.exports=e.p+"img/logo.06a67d80.png"},d669:function(t,n,e){},d8aa:function(t,n,e){},e4e4:function(t,n,e){"use strict";var i=e("d669"),a=e.n(i);a.a},f5b4:function(t,n,e){"use strict";var i=e("866b"),a=e.n(i);a.a}});
//# sourceMappingURL=app.02ef8ac1.js.map