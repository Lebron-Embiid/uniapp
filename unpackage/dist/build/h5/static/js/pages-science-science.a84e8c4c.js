(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-science-science"],{1419:function(e,n,t){var i=t("fdc0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("034bfe66",i,!0,{sourceMap:!1,shadowMode:!1})},"57fe":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"science_box"},[t("v-uni-view",{staticClass:"page_bg"}),t("v-uni-view",{staticClass:"form_top"},[t("v-uni-form",{staticClass:"form_box",on:{click:function(n){n=e.$handleEvent(n),e.toSearch(n)}}},[t("v-uni-input",{attrs:{type:"text",disabled:"",placeholder:"请输入您要搜索的关键词",value:""}}),t("v-uni-button",[t("v-uni-image",{attrs:{src:"/static/search.png",mode:""}})],1)],1)],1),t("v-uni-view",{staticClass:"science_ul"},e._l(e.science_list,function(n,i){return t("v-uni-view",{key:i,staticClass:"science_item",on:{click:function(t){t=e.$handleEvent(t),e.toDetail(n,i)}}},[t("v-uni-view",{staticClass:"si_question"},[e._v(e._s(n.question))]),t("v-uni-view",{staticClass:"si_answer"},[e._v("答："+e._s(n.answer))])],1)}),1),t("v-uni-view",{staticClass:"page_box"},[t("v-uni-view",{staticClass:"page_btn prev"},[e._v("上一页")]),t("v-uni-view",{staticClass:"page_btn next"},[e._v("上一页")])],1)],1)},a=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},9271:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{science_list:[{id:1,question:"呦蓝是做什么的？",answer:"呦蓝是一个社交电商品牌，为呦蓝生物科技（上海）有限公司所有，拥有自主美妆品牌艾璐卡和战略合作品牌纽西之谜..."},{id:2,question:"呦蓝创立的初衷",answer:"首先，呦蓝汇聚全球力量寻找优质的护肤原料，为中国女性带来更高效，更高性价比的护肤美妆产品，让更多女性能够绽放肌肤如初之美..."},{id:3,question:"如何做呦蓝的代理？",answer:"您可以拨打呦蓝官方客服电话：400-806-9192或添加呦蓝官方客服微信号：YOULAN-666888 进行咨询。感谢亲的支持。"},{id:4,question:"呦蓝的产品正规吗？效果如何？",answer:"呦蓝现有两个品牌，艾璐卡和纽西之谜。呦蓝的产品在药监局都有备案，符合国家对于护肤美妆产品的各项要求，可以保证正规合格..."},{id:5,question:"做呦蓝的代理都有哪些福利？",answer:"首先，呦蓝汇聚全球力量寻找优质的护肤原料，为中国女性带来更高效，更高性价比的护肤美妆产品，让更多女性能够绽放肌肤如初之美..."},{id:6,question:"如何做呦蓝的代理？",answer:"1.以极低的创业成本拥有一份在家也可以做的事业；2.以远低于呦蓝产品市场零售价的价格购买呦蓝产品；"},{id:7,question:"呦蓝的产品在药监局能查到备案吗？",answer:"可以的。艾璐卡和纽西之谜都可以，如果查不到，请检查网址是否正确，产品名称输入是否正确。"}]}},methods:{toDetail:function(e,n){uni.navigateTo({url:"/pages/science_detail/science_detail?id="+e.id+"&question="+e.question+"&answer="+e.answer})},toSearch:function(e){uni.navigateTo({url:"/pages/search/search"})}},onNavigationBarButtonTap:function(){uni.navigateTo({url:"/pages/message/message"})}};n.default=i},9839:function(e,n,t){"use strict";t.r(n);var i=t("9271"),a=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(n,e,function(){return i[e]})}(s);n["default"]=a.a},a21c:function(e,n,t){"use strict";t.r(n);var i=t("57fe"),a=t("9839");for(var s in a)"default"!==s&&function(e){t.d(n,e,function(){return a[e]})}(s);t("bda0");var o=t("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"d6a8118e",null);n["default"]=r.exports},bda0:function(e,n,t){"use strict";var i=t("1419"),a=t.n(i);a.a},fdc0:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-d6a8118e]{background:#f5f5f7!important}.form_top[data-v-d6a8118e]{padding:%?20?% %?20?% %?40?%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.form_top .form_box[data-v-d6a8118e]{float:none;width:100%;margin-top:0}.science_item[data-v-d6a8118e]{background:#fff;padding:%?40?% %?25?% %?50?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?15?%}.science_item .si_question[data-v-d6a8118e]{color:#333;font-size:%?26?%;margin-bottom:%?20?%}.science_item .si_answer[data-v-d6a8118e]{color:#333;font-size:%?22?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;word-break:break-all}.page_box[data-v-d6a8118e]{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:%?60?% auto %?100?%}.page_box .page_btn[data-v-d6a8118e]{width:35%;color:#fff;font-size:%?26?%;background:#000;border-radius:%?5?%;text-align:center;padding:%?14?% 0 %?16?%}.page_box .prev[data-v-d6a8118e]{margin-right:5%}body.?%PAGE?%[data-v-d6a8118e]{background:#f5f5f7!important}',""])}}]);