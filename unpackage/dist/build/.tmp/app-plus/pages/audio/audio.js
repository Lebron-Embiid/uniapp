(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/audio/audio"],{"005c":function(t,e,n){"use strict";var o=n("bcf5"),a=n.n(o);a.a},"0af3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"audio_box"},[n("view",{staticClass:"audio_list"},[n("view",{staticClass:"audio_item"},[n("image",{class:1==t.isRotate?"rotate":"",attrs:{src:"../../static/audio_cd.png",mode:"widthFix"}}),n("view",{staticClass:"ai_title"},[t._v(t._s(t.title))]),n("view",{staticClass:"ai_info"},[t._v("听众："+t._s(t.look))]),n("imt-audio",{attrs:{continue:"",control:!1,autoplay:!0,src:t.src,duration:t.duration,eventid:"00f3aaf9-0",mpcomid:"00f3aaf9-0"},on:{click:t.changeRotate}})],1)])])},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"43f1":function(t,e,n){"use strict";n.r(e);var o=n("5230"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"49aa":function(t,e,n){"use strict";var o=n("7b42"),a=n.n(o);a.a},"50f1":function(t,e,n){"use strict";n.r(e);var o=n("af24"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},5230:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("c8f7"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{isRotate:!0,title:"",look:"",src:"",duration:0}},components:{imtAudio:o.default},methods:{changeRotate:function(t){1==this.isRotate?(this.isRotate=!1,console.log(this.isRotate)):(this.isRotate=!0,console.log(this.isRotate))}},onLoad:function(t){this.title=t.title,this.look=t.look,this.src=t.src,this.duration=parseInt(t.duration)}};e.default=i},"7b42":function(t,e,n){},"7fb0":function(t,e,n){"use strict";n.r(e);var o=n("0af3"),a=n("43f1");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("49aa");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"b17a41a2",null);e["default"]=u.exports},af24:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t.createInnerAudioContext(),o={data:function(){return{currentTime:"",durationTime:"",current:"",loading:!1,paused:!0,seek:!1}},props:{src:String,autoplay:Boolean,duration:Number,control:{type:Boolean,default:!0},continue:Boolean,color:{type:String,default:"#00001F"}},methods:{prev:function(){this.$emit("prev")},next:function(){this.$emit("next")},format:function(t){return"0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60)+":"+"0".repeat(2-String(Math.floor(t%60)).length)+Math.floor(t%60)},operation:function(){n.paused?(n.play(),this.loading=!0):n.pause()},change:function(t){n.seek(t.detail.value)}},onUnload:function(){n.pause(),this.current=0},created:function(){var t=this;n.src=this.src,this.current=0,this.durationTime=this.format(this.duration),n.obeyMuteSwitch=!1,n.autoplay=this.autoplay,n.onTimeUpdate(function(){t.seek||(t.current=n.currentTime)}),n.onPlay(function(){t.paused=!1,t.loading=!1}),n.onPause(function(){t.paused=!0}),n.onEnded(function(){t.continue?t.next():(t.paused=!0,t.current=0)}),n.onSeeked(function(){t.seek=!1})},watch:{src:function(t){n.src=t,this.current=0,n.play(),this.loading=!0},duration:function(t){this.durationTime=this.format(t)},current:function(t){this.currentTime=this.format(t)}}};e.default=o}).call(this,n("6e42")["default"])},bcf5:function(t,e,n){},c8f7:function(t,e,n){"use strict";n.r(e);var o=n("e82d"),a=n("50f1");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("005c");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},e82d:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"imt-audio"},[n("view",{staticClass:"audio-wrapper"},[n("view",{staticClass:"audio-number"},[t._v(t._s(t.currentTime))]),n("slider",{staticClass:"audio-slider",attrs:{activeColor:t.color,"block-size":"16",value:t.current,max:t.duration,eventid:"a6bbb1ba-0"},on:{changing:function(e){t.seek=!0,t.current=e.detail.value},change:t.change}}),n("view",{staticClass:"audio-number"},[t._v(t._s(t.durationTime))])]),n("view",{staticClass:"audio-control-wrapper",style:{color:t.color}},[t.control?n("view",{staticClass:"audio-control audio-control-prev",style:{borderColor:t.color},attrs:{eventid:"a6bbb1ba-1"},on:{click:t.prev}},[t._v("")]):t._e(),n("view",{staticClass:"audio-control audio-control-switch",class:{audioLoading:t.loading},style:{borderColor:t.color},attrs:{eventid:"a6bbb1ba-2"},on:{click:t.operation}},[t._v(t._s(t.loading?"":t.paused?"":""))]),t.control?n("view",{staticClass:"audio-control audio-control-next",style:{borderColor:t.color},attrs:{eventid:"a6bbb1ba-3"},on:{click:t.next}},[t._v("")]):t._e()])])},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},e85a:function(t,e,n){"use strict";n("283e");var o=i(n("b0ce")),a=i(n("7fb0"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))}},[["e85a","common/runtime","common/vendor"]]]);