(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-video"],{5238:function(t,n,e){"use strict";e.r(n);var o=e("bdd9"),i=e("55b7");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);var a=e("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"55b7":function(t,n,e){"use strict";e.r(n);var o=e("6c7a"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=i.a},"6c7a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},props:{isDownload:Number,video_list:Array,istype:Number},methods:{toVideoDetail:function(n){t.navigateTo({url:"/pages/video/video?id="+n+"&istype="+this.istype})},toDownload:function(n){t.saveVideoToPhotosAlbum({filePath:n,success:function(){t.showToast({title:"视频正在下载！",icon:"none"})}})}}};n.default=e}).call(this,e("6e42")["default"])},bdd9:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-video-create-component',
    {
        'components/common-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("5238"))
        })
    },
    [['components/common-video-create-component']]
]);                
