(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{3079:function(t,e,a){"use strict";var n=a("80af"),o=a.n(n);o.a},"6cce":function(t,e,a){"use strict";a("1a7f");var n=i(a("b0ce")),o=i(a("dd13"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},"80af":function(t,e,a){},b20e:function(t,e,a){"use strict";a.r(e);var n=a("c459"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},b6f3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"news_box"},[a("view",{staticClass:"search_box"},[a("form",{staticClass:"form_box",attrs:{eventid:"5efb7a2b-1"},on:{click:t.toSearch}},[a("input",{attrs:{type:"text",placeholder:"请输入您要搜索的关键词",name:"keyword",value:"",eventid:"5efb7a2b-0"},on:{input:t.getKeyword}}),a("button",[a("image",{attrs:{src:"../../static/search.png",mode:"widthFix"}})])],1)],1),a("view",{staticClass:"news_content"},[a("commonNews",{attrs:{news_list:t.news_list,mpcomid:"5efb7a2b-0"}})],1)])},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},c459:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("0359")),o=i(a("edc6"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{keyword:"",page:1,page_count:1,news_list:[]}},components:{commonNews:o.default},methods:{getKeyword:function(t){this.keyword=t.detail.value},toSearch:function(e){var a=this;console.log(a.keyword),t.request({url:a.$api+"default/article-list&page=1&cat_id=2",method:"GET",data:{keyword:a.keyword},dataType:"json",success:function(t){var e=[];for(var o in t.data.data.list){var i=t.data.data.list;e.push({id:i[o].id,title:i[o].title,info:i[o].describe,look:i[o].num,date:n.default.formatDate(parseInt(i[o].addtime)),src:i[o].cover_pic})}a.page_count=t.data.data.page_count,a.news_list=e},fail:function(e){t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level"),t.request({url:a.$api+"default/article-list&page=1&cat_id=2",method:"GET",success:function(t){var e=[];for(var o in t.data.data.list){var i=t.data.data.list;e.push({id:i[o].id,title:i[o].title,info:i[o].describe,look:i[o].num,date:n.default.formatDate(parseInt(i[o].addtime)),src:i[o].cover_pic})}a.page_count=t.data.data.page_count,a.news_list=e},fail:function(e){t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})},onReachBottom:function(){var e=this;if(e.page==e.page_count)return t.showToast({title:"没有更多数据了",icon:"none"}),!1;t.showLoading({title:"加载中"}),e.page=parseInt(e.page)+parseInt(1),t.request({url:e.$api+"default/article-list&cat_id=2",method:"GET",data:{page:e.page,keyword:e.keyword},success:function(a){var o=[];for(var i in a.data.data.list){var s=a.data.data.list;o.push({id:s[i].id,title:s[i].title,info:s[i].describe,look:s[i].num,date:n.default.formatDate(parseInt(s[i].addtime)),src:s[i].cover_pic})}e.news_list=e.news_list.concat(o),console.log(e.news_list),t.hideLoading()},fail:function(e){t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})}};e.default=s}).call(this,a("6e42")["default"])},dd13:function(t,e,a){"use strict";a.r(e);var n=a("b6f3"),o=a("b20e");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("3079");var s=a("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"1ff2f450",null);e["default"]=c.exports}},[["6cce","common/runtime","common/vendor"]]]);