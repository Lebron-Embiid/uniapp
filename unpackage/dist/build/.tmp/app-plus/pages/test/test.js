(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/test/test"],{"158c":function(t,e,n){"use strict";var r=n("2071"),o=n.n(r);o.a},2071:function(t,e,n){},"26fa":function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function i(t){var e,n,o,i,a,c;o=t.length,n=0,e="";while(n<o){if(i=255&t.charCodeAt(n++),n==o){e+=r.charAt(i>>2),e+=r.charAt((3&i)<<4),e+="==";break}if(a=t.charCodeAt(n++),n==o){e+=r.charAt(i>>2),e+=r.charAt((3&i)<<4|(240&a)>>4),e+=r.charAt((15&a)<<2),e+="=";break}c=t.charCodeAt(n++),e+=r.charAt(i>>2),e+=r.charAt((3&i)<<4|(240&a)>>4),e+=r.charAt((15&a)<<2|(192&c)>>6),e+=r.charAt(63&c)}return e}function a(t){var e,n,r,i,a,c,s;c=t.length,a=0,s="";while(a<c){do{e=o[255&t.charCodeAt(a++)]}while(a<c&&-1==e);if(-1==e)break;do{n=o[255&t.charCodeAt(a++)]}while(a<c&&-1==n);if(-1==n)break;s+=String.fromCharCode(e<<2|(48&n)>>4);do{if(r=255&t.charCodeAt(a++),61==r)return s;r=o[r]}while(a<c&&-1==r);if(-1==r)break;s+=String.fromCharCode((15&n)<<4|(60&r)>>2);do{if(i=255&t.charCodeAt(a++),61==i)return s;i=o[i]}while(a<c&&-1==i);if(-1==i)break;s+=String.fromCharCode((3&r)<<6|i)}return s}function c(t){var e,n,r,o;for(e="",r=t.length,n=0;n<r;n++)o=t.charCodeAt(n),o>=1&&o<=127?e+=t.charAt(n):o>2047?(e+=String.fromCharCode(224|o>>12&15),e+=String.fromCharCode(128|o>>6&63),e+=String.fromCharCode(128|o>>0&63)):(e+=String.fromCharCode(192|o>>6&31),e+=String.fromCharCode(128|o>>0&63));return e}function s(t){var e,n,r,o,i,a;e="",r=t.length,n=0;while(n<r)switch(o=t.charCodeAt(n++),o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=t.charAt(n-1);break;case 12:case 13:i=t.charCodeAt(n++),e+=String.fromCharCode((31&o)<<6|63&i);break;case 14:i=t.charCodeAt(n++),a=t.charCodeAt(n++),e+=String.fromCharCode((15&o)<<12|(63&i)<<6|(63&a)<<0);break}return e}t.exports={encode:i,decode:a,utf16to8:c,utf8to16:s}},"3d6f":function(t,e,n){},"3ff9c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)})}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("5570"),u=n("26fa");n("7ac1"),n("646e");var l=n("fdc0"),d={data:function(){return{imgs:[],upLen:"",upload_picture_list:[]}},name:"sun-upimg",props:{upImgConfig:{type:Object,default:function(){return c({oos:!0,aliConfig:{AccessKeySecret:"zmOJcaqKJB5e4gqtLunHcNoMBTdDgp",OSSAccessKeyId:"LTAIPcJL9J5OZr2G",oosDirectory:"mifanimg"},url:"https://j.dns06.net.cn/index.php?m=Api&c=index&a=uploadDownwind",notli:!1,count:3,upreduce:!0,bgColor:"#eee",iconColor:"#ddd",iconReplace:"https://www.playsort.cn/right.png",text:"添加图片",delIconColor:"",delIconText:""},"iconReplace","")}}},methods:{chooseImage:function(t){v(this,parseInt(t),this.upImgConfig.url)},uploadimage:function(t){h(this,t)},deleteImg:function(t){m(t,this)},previewImg:function(t){_(t,this)},previewImgs:function(t){C(t,this)}}};e.default=d;var f=function(){var t=new Date;t.setHours(t.getHours()+s.timeout);var e=t.toISOString(),n={expiration:e,conditions:[["content-length-range",0,5242880]]},r=u.encode(JSON.stringify(n));return r},p=function(t,e){var n=t.upImgConfig.aliConfig.AccessKeySecret||s.AccessKeySecret,r=l.HMAC(l.SHA1,e,n,{asBytes:!0}),o=l.util.bytesToBase64(r);return o},g=function(){var e=a(r.default.mark(function e(n,o,i,c){var u,l,d,g,h,m,v;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return u={aliyunFileKey:"".concat(o.upImgConfig.aliConfig.oosDirectory,"/")+(new Date).getTime()+Math.floor(150*Math.random())+".png",aliyunServerURL:n||s.uploadImageUrl,accessid:o.upImgConfig.aliConfig.OSSAccessKeyId||s.OSSAccessKeyId,url:o.upImgConfig.oos?n=o.upImgConfig.url||s.uploadImageUrl:n,oos:o.upImgConfig.oos},l=u.aliyunFileKey?u.aliyunFileKey:"",d=u.aliyunServerURL?u.aliyunServerURL:"",g=u.accessid?u.accessid:"",h=f(),m=p(o,h),e.next=8,t.uploadFile({url:u.url,filePath:i[c]["path"],name:"file",formData:{key:l,policy:h,OSSAccessKeyId:g,signature:m,success_action_status:"200"},success:function(){var e=a(r.default.mark(function e(n){var a,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(200!=n.statusCode){e.next=8;break}return a=u.oos?"":JSON.parse(n.data),s=u.oos?d+l:a.info,i[c]["path_server"]=s,o.upload_picture_list=i,e.next=7,o.$emit("onUpImg",o.upload_picture_list);case 7:t.hideLoading();case 8:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),fail:function(e){t.showLoading({title:"上传失败!"}),setTimeout(function(){t.hideLoading()},2e3),console.log(e)}});case 8:v=e.sent,v.onProgressUpdate(function(){var t=a(r.default.mark(function t(e){var n,a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=0,a=o.upload_picture_list.length;case 1:if(!(n<a)){t.next=8;break}return t.next=4,e.progress;case 4:i[n]["upload_percent"]=t.sent;case 5:n++,t.next=1;break;case 8:o.upload_picture_list=i;case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e,this)}));return function(t,n,r,o){return e.apply(this,arguments)}}(),h=function(){var t=a(r.default.mark(function t(e,n){var o,i;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=0,i=e.upload_picture_list.length;case 1:if(!(o<i)){t.next=8;break}if(0!=e.upload_picture_list[o]["upload_percent"]){t.next=5;break}return t.next=5,g(n,e,e.upload_picture_list,o);case 5:o++,t.next=1;break;case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),m=function(t,e){e.upload_picture_list.splice(t.currentTarget.dataset.index,1),e.imgs.splice(t.currentTarget.dataset.index,1),e.upload_picture_list=e.upload_picture_list},v=function(e,n,r){var o={count:n,url:r,notli:e.upImgConfig.notli,sourceType:e.upImgConfig.sourceType,sizeType:e.upImgConfig.sizeType};t.chooseImage({count:o.notli?o.count=9:o.count,sizeType:o.sizeType?["compressed"]:["original"],sourceType:o.sourceType?["album","camera"]:["camera"],success:function(t){for(var n=0,i=t.tempFiles.length;n<i;n++)t.tempFiles[n]["upload_percent"]=0,t.tempFiles[n]["path_server"]="",e.upload_picture_list.push(t.tempFiles[n]),e.upload_picture_list.length>o.count&&(e.upload_picture_list=e.upload_picture_list.slice(0,o.count));!o.notli&&o.count==e.upload_picture_list.length&&h(e,r),o.notli&&9==o.count&&h(e,r),o.notli?console.log("%c up-img提醒您，开启了最大上传图片模式(单次选择最多9张,选择完即上传)","color:#f00;font-weight:bold;"):console.log("%c up-img提醒您，开启了限制上传图片模式，目标数量为：".concat(o.count),"color:#f00;font-weight:bold;"),e.imgs=e.imgs.concat(t.tempFilePaths),e.upload_picture_list=e.upload_picture_list.slice(0,o.count)}})},_=function(e,n){t.previewImage({current:n.imgs[e.currentTarget.dataset.index],urls:n.imgs})},C=function(e,n){t.previewImage({current:n.imgs[e.currentTarget.dataset.idx],urls:n.imgs})}}).call(this,n("6e42")["default"])},4378:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("561c"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{current:{poster:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553229257642&di=f7c0c773000c6a42f17d3781cc0df6e9&imgtype=0&src=http%3A%2F%2Fy.gtimg.cn%2Fmusic%2Fphoto_new%2FT002R800x800M000003HSxjs1TKIAq.jpg%3Fmax_age%3D2592000",name:"倒数",author:"G.E.M.邓诗颖",src:"http://other.web.nf01.sycdn.kuwo.cn/resource/n2/23/43/994306111.mp3"},audioAction:{method:"pause"},latitude:39.909,longitude:116.39742,covers:[{latitude:39.909,longitude:116.39742,iconPath:"../../../static/location.png"},{latitude:39.9,longitude:116.39,iconPath:"../../../static/location.png"}],indicatorDots:!0,autoplay:!1,interval:2e3,duration:500,loop:!0,controls:!0,banners:[n("e191"),n("e191"),n("e191")]}},components:{sunsinUpimg:r.default},onReady:function(e){this.videoContext=t.createVideoContext("myVideo")},methods:{},upImgData:function(t){console.log("来了,伙计",t)}};e.default=i}).call(this,n("6e42")["default"])},5570:function(t,e,n){"use strict";var r="http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/",o={uploadImageUrl:"".concat(r),AccessKeySecret:"zmOJcaqKJB5e4gqtLunHcNoMBTdDgp",OSSAccessKeyId:"LTAIPcJL9J5OZr2G",timeout:87600};t.exports=o},"561c":function(t,e,n){"use strict";n.r(e);var r=n("c3ef"),o=n("ecc5");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("158c");var a=n("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"a2190912",null);e["default"]=c.exports},"5ee0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"test_box"},[n("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,circular:t.loop,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-color":"rgba(255,255,255,.5)","indicator-active-color":"rgba(255,255,255,1)"}},t._l(t.banners,function(t,e){return n("swiper-item",{key:e,attrs:{mpcomid:"06b4b98b-0-"+e}},[n("image",{attrs:{src:t,mode:""}})])})),n("view",{staticClass:"page-section page-section-gap",staticStyle:{"text-align":"center"}},[n("audio",{staticStyle:{"text-align":"left"},attrs:{loop:"true",controls:t.controls,src:t.current.src,poster:t.current.poster,name:t.current.name,author:t.current.author,action:t.audioAction,controls:""}})],1),t._m(0),n("sunsin-upimg",{attrs:{url:"",notli:!1,count:6,upreduce:!0,eventid:"06b4b98b-0",mpcomid:"06b4b98b-1"},on:{onUpImg:t.upImgDatas}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("video",{attrs:{id:"myVideo",src:"https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4",controls:""}})])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"646e":function(t,e,n){"use strict";var r=n("fdc0");(function(){var t=r.util,e=r.SHA1=function(n,r){var o=t.wordsToBytes(e._sha1(n));return r&&r.asBytes?o:r&&r.asString?t.bytesToString(o):t.bytesToHex(o)};e._sha1=function(e){var n=t.stringToWords(e),r=8*e.length,o=[],i=1732584193,a=-271733879,c=-1732584194,s=271733878,u=-1009589776;n[r>>5]|=128<<24-r%32,n[15+(r+64>>>9<<4)]=r;for(var l=0;l<n.length;l+=16){for(var d=i,f=a,p=c,g=s,h=u,m=0;m<80;m++){if(m<16)o[m]=n[l+m];else{var v=o[m-3]^o[m-8]^o[m-14]^o[m-16];o[m]=v<<1|v>>>31}var _=(i<<5|i>>>27)+u+(o[m]>>>0)+(m<20?1518500249+(a&c|~a&s):m<40?1859775393+(a^c^s):m<60?(a&c|a&s|c&s)-1894007588:(a^c^s)-899497514);u=s,s=c,c=a<<30|a>>>2,a=i,i=_}i+=d,a+=f,c+=p,s+=g,u+=h}return[i,a,c,s,u]},e._blocksize=16})(),t.exports=r},"6bc1":function(t,e,n){"use strict";n.r(e);var r=n("5ee0"),o=n("b741");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("e9ed");var a=n("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"738b":function(t,e,n){"use strict";n("d38b");var r=i(n("b0ce")),o=i(n("6bc1"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(o.default))},"7ac1":function(t,e,n){"use strict";var r=n("fdc0");(function(){var t=r.util;r.HMAC=function(e,n,r,o){r=r.length>4*e._blocksize?e(r,{asBytes:!0}):t.stringToBytes(r);for(var i=r,a=r.slice(0),c=0;c<4*e._blocksize;c++)i[c]^=92,a[c]^=54;var s=e(t.bytesToString(i)+e(t.bytesToString(a)+n,{asString:!0}),{asBytes:!0});return o&&o.asBytes?s:o&&o.asString?t.bytesToString(s):t.bytesToHex(s)}})(),t.exports=r},b741:function(t,e,n){"use strict";n.r(e);var r=n("4378"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},c3ef:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"sunsin_picture_list"},[t._l(t.upload_picture_list,function(e,r){return n("view",{key:r,staticClass:"sunsin_picture_item"},[n("image",{directives:[{name:"show",rawName:"v-show",value:e.upload_percent<100,expression:"item.upload_percent < 100"}],attrs:{src:e.path,mode:"aspectFill"}}),n("image",{directives:[{name:"show",rawName:"v-show",value:100==e.upload_percent,expression:"item.upload_percent == 100"}],attrs:{src:e.path_server,mode:"aspectFill","data-idx":r,eventid:"7a28eca7-0-"+r},on:{click:t.previewImgs}}),n("view",{directives:[{name:"show",rawName:"v-show",value:e.upload_percent<100,expression:"item.upload_percent < 100"}],staticClass:"sunsin_upload_progress",attrs:{"data-index":r,eventid:"7a28eca7-1-"+r},on:{click:t.previewImg}},[t._v(t._s(e.upload_percent)+"%")]),n("text",{staticClass:"del",style:"color:"+t.upImgConfig.delIconText+";background-color:"+t.upImgConfig.delIconColor,attrs:{"data-index":r,eventid:"7a28eca7-2-"+r},on:{click:t.deleteImg}},[t._v("×")])])}),n("view",[""==t.upImgConfig.iconReplace||void 0==t.upImgConfig.iconReplace?n("view",{directives:[{name:"show",rawName:"v-show",value:t.upload_picture_list.length<t.upImgConfig.count||t.upImgConfig.notli,expression:"upload_picture_list.length<upImgConfig.count || upImgConfig.notli"}],staticClass:"sunsin_picture_item"},[n("view",{staticClass:"sunsin-add-image",style:"background-color:"+t.upImgConfig.bgColor,attrs:{eventid:"7a28eca7-3"},on:{click:function(e){t.chooseImage(t.upImgConfig.count)}}},[n("text",{staticClass:"icon-cameraadd",style:"color:"+t.upImgConfig.iconColor}),n("view",{staticClass:"icon-text",style:"color:"+t.upImgConfig.iconColor},[t._v(t._s(t.upImgConfig.text))])])]):n("view",{directives:[{name:"show",rawName:"v-show",value:t.upload_picture_list.length<t.upImgConfig.count||t.upImgConfig.notli,expression:"upload_picture_list.length<upImgConfig.count || upImgConfig.notli"}],staticClass:"sunsin_picture_item"},[n("view",{staticClass:"sunsin-add-image",style:"background-color:#fff;",attrs:{eventid:"7a28eca7-4"},on:{click:function(e){t.chooseImage(t.upImgConfig.count)}}},[n("image",{staticStyle:{width:"160rpx",height:"160rpx"},attrs:{src:t.upImgConfig.iconReplace,mode:"widthFix"}})])])])],2)])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},e191:function(t,e,n){t.exports=n.p+"static/img/timg.fe077b6f.jpg"},e9ed:function(t,e,n){"use strict";var r=n("3d6f"),o=n.n(r);o.a},ecc5:function(t,e,n){"use strict";n.r(e);var r=n("3ff9c"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},fdc0:function(t,e,n){"use strict";var r={};(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=r.util={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&e.rotl(t,8)|4278255360&e.rotl(t,24);for(var n=0;n<t.length;n++)t[n]=e.endian(t[n]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")},stringToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t.charCodeAt(n)<<24-r%32;return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(n){if("function"==typeof btoa)return btoa(e.bytesToString(n));for(var r,o=[],i=0;i<n.length;i++)switch(i%3){case 0:o.push(t.charAt(n[i]>>>2)),r=(3&n[i])<<4;break;case 1:o.push(t.charAt(r|n[i]>>>4)),r=(15&n[i])<<2;break;case 2:o.push(t.charAt(r|n[i]>>>6)),o.push(t.charAt(63&n[i])),r=-1}void 0!=r&&-1!=r&&o.push(t.charAt(r));while(o.length%4!=0)o.push("=");return o.join("")},base64ToBytes:function(n){if("function"==typeof atob)return e.stringToBytes(atob(n));n=n.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],o=0;o<n.length;o++)switch(o%4){case 1:r.push(t.indexOf(n.charAt(o-1))<<2|t.indexOf(n.charAt(o))>>>4);break;case 2:r.push((15&t.indexOf(n.charAt(o-1)))<<4|t.indexOf(n.charAt(o))>>>2);break;case 3:r.push((3&t.indexOf(n.charAt(o-1)))<<6|t.indexOf(n.charAt(o)));break}return r}};r.mode={}})(),t.exports=r}},[["738b","common/runtime","common/vendor"]]]);