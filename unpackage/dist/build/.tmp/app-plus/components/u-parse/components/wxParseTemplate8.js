(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/u-parse/components/wxParseTemplate8"],{"2f2b":function(e,n,t){"use strict";t.r(n);var r=t("e3cb"),a=t("7218");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},"5e66":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/u-parse/components/wxParseTemplate9").then(t.bind(null,"5b3c"))},a=function(){return t.e("components/u-parse/components/wxParseImg").then(t.bind(null,"ac13"))},o=function(){return t.e("components/u-parse/components/wxParseVideo").then(t.bind(null,"4fb9"))},u=function(){return t.e("components/u-parse/components/wxParseAudio").then(t.bind(null,"6ea1"))},s={name:"wxParseTemplate8",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;if(n){var t=this.$parent;while(!t.preview||"function"!==typeof t.preview)t=t.$parent;t.navigate(n,e)}}}};n.default=s},7218:function(e,n,t){"use strict";t.r(n);var r=t("5e66"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},e3cb:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/u-parse/components/wxParseTemplate8-create-component',
    {
        'components/u-parse/components/wxParseTemplate8-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2f2b"))
        })
    },
    [['components/u-parse/components/wxParseTemplate8-create-component']]
]);                
