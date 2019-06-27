(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-video"],{5238:function(e,t,n){"use strict";n.r(t);var i=n("b541"),o=n("55b7");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var u=n("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"55b7":function(e,t,n){"use strict";n.r(t);var i=n("6c7a"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"6c7a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},props:{isDownload:Number,video_list:Array,istype:Number},methods:{toVideoDetail:function(t){0==this.istype?e.navigateTo({url:"/pages/video/video?id="+t+"&istype="+this.istype}):e.navigateTo({url:"/pages/video1/video1?id="+t+"&istype="+this.istype})},toShare:function(t,n,i){e.share({provider:"weixin",scene:"WXSceneSession",type:4,title:t,imageUrl:n,mediaUrl:i,success:function(e){console.log(JSON.stringify(e)," at components\\common-video.vue:57")},fail:function(e){console.log(JSON.stringify(e)," at components\\common-video.vue:60")}})}}};t.default=n}).call(this,n("6e42")["default"])},b541:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-video-create-component',
    {
        'components/common-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("5238"))
        })
    },
    [['components/common-video-create-component']]
]);                
