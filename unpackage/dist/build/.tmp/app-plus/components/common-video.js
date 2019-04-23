(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-video"],{"3c67":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},"590b":function(t,n,e){"use strict";e.r(n);var o=e("3c67"),u=e("be10");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var i=e("2877"),r=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"974a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},props:{isDownload:Number,video_list:Array},methods:{toVideoDetail:function(n){t.navigateTo({url:"/pages/video/video?id="+n})},toDownload:function(n){t.saveVideoToPhotosAlbum({filePath:n,success:function(){t.showToast({title:"视频正在下载！",icon:"none"})}})}}};n.default=e}).call(this,e("6e42")["default"])},be10:function(t,n,e){"use strict";e.r(n);var o=e("974a"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-video-create-component',
    {
        'components/common-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("590b"))
        })
    },
    [['components/common-video-create-component']]
]);                
