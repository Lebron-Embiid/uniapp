(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"060c":function(e,t,n){},"0779":function(e,t,n){"use strict";var i=n("060c"),c=n.n(i);c.a},2728:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"5fda":function(e,t,n){"use strict";n.r(t);var i=n("818d"),c=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=c.a},"818d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/citypicker/cityPicker")]).then(n.bind(null,"cf55"))},c={data:function(){return{cityPickerValueDefault:[0,0,0],themeColor:"#007AFF",pickerText:"请选择",arr:[],pic:[],name:"",phone:"",detail:""}},components:{cityPicker:i},methods:{onCancel:function(e){this.$refs.cityPicker.pickerCancel()},onConfirm:function(e){this.arr=[],console.log(e.label,e.cityCode);var t=e.cityCode;this.pickerText=e.label,this.pic=e.label.split("-"),console.log(this.pic);for(var n="",i=[t.length/2],c=0;c<t.length;c++)n+=t.charAt(c),(c+1)%2==0&&(i[c/2]=n,this.arr.push(i[c/2]),n="");console.log(this.arr)},showMulLinkageThreePicker:function(e){this.$refs.cityPicker.showPickerView()},getName:function(e){this.name=e.detail.value},getPhone:function(e){this.phone=e.detail.value},getDetail:function(e){this.detail=e.detail.value},saveAddress:function(t){var n=this;e.request({url:n.$api+"user/address-save&access_token="+n.$access_token,method:"POST",data:{name:n.name,mobile:n.phone,province_id:n.arr[0],province:n.pic[0],city_id:n.arr[1],city:n.pic[1],district_id:n.arr[2],district:n.pic[2],detail:n.detail},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){1==t.data.code&&(e.showToast({title:t.data.msg,icon:"none",duration:1500}),setTimeout(function(){e.navigateBack({delta:1})},1500))},fail:function(){e.showToast({title:res.data.msg,icon:"none",duration:1500})}})}},onLoad:function(){var t=this;e.request({url:t.$api+"user/address-save&access_token="+t.$access_token,dataType:"json",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}})},onBackPress:function(){if(this.$refs.cityPicker.showPicker)return this.$refs.cityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.cityPicker.showPicker&&this.$refs.cityPicker.pickerCancel()},onReachBottom:function(){},onPullDownRefresh:function(){}};t.default=c}).call(this,n("6e42")["default"])},8621:function(e,t,n){"use strict";n.r(t);var i=n("2728"),c=n("5fda");for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);n("0779");var a=n("2877"),r=Object(a["a"])(c["default"],i["a"],i["b"],!1,null,"23bf9275",null);t["default"]=r.exports}},[["5b03","common/runtime","common/vendor"]]]);