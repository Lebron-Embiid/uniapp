(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"22ca":function(t,e,i){"use strict";i.r(e);var n=i("de53"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},3434:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},4949:function(t,e,i){"use strict";var n=i("e20a"),a=i.n(n);a.a},ae56:function(t,e,i){"use strict";i.r(e);var n=i("3434"),a=i("22ca");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("4949");var d=i("2877"),c=Object(d["a"])(a["default"],n["a"],n["b"],!1,null,"284e17f0",null);e["default"]=c.exports},de53:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return Promise.all([i.e("common/vendor"),i.e("components/citypicker/cityPicker")]).then(i.bind(null,"d20f"))},a=function(){return i.e("components/jm-address/jm-address").then(i.bind(null,"d91c"))},o=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"c17c"))},d={data:function(){return{cityPickerValueDefault:[0,0,0],themeColor:"#007AFF",pickerText:"请选择",arr:[],pic:[],name:"",phone:"",province_id:"",city_id:"",district_id:"",detail:"",id:0}},components:{cityPicker:n,addressd:a,wPicker:o},methods:{childClick:function(t){this.province_id=t.province_id,this.city_id=t.city_id,this.district_id=t.district_id,console.log(this.province_id,this.city_id,this.district_id," at pages\\address\\address.vue:84")},toShowRegion:function(t){this.$refs.region.show()},onConfirm:function(t){console.log(t," at pages\\address\\address.vue:90");var e=this;e.cityPickerValueDefault=t.defaultVal,this.$refs.region.pickVal=t.defaultVal,e.pickerText=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2],e.province_id=t.checkValue[0],e.city_id=t.checkValue[1],e.district_id=t.checkValue[2]},getName:function(t){this.name=t.detail.value},getPhone:function(t){this.phone=t.detail.value},getDetail:function(t){this.detail=t.detail.value},addAddress:function(e){var i=this;return""==i.name?(t.showToast({title:"收货人不能为空",icon:"none",duration:1500}),!1):""==i.phone?(t.showToast({title:"联系电话不能为空",icon:"none",duration:1500}),!1):/^1[3456789]\d{9}$/.test(i.phone)?""==i.province_id||""==i.city_id||""==i.district_id?(t.showToast({title:"所在地区不能为空",icon:"none",duration:1500}),!1):""==i.detail?(t.showToast({title:"详细地址不能为空",icon:"none",duration:1500}),!1):void t.request({url:i.$api+"user/address-save&access_token="+i.$access_token,method:"POST",data:{name:i.name,mobile:i.phone,province_id:i.province_id,city_id:i.city_id,district_id:i.district_id,detail:i.detail},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},1500)},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}}):(t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1500}),!1)},editAddress:function(e){var i=this;return""==i.name?(t.showToast({title:"收货人不能为空",icon:"none",duration:1500}),!1):""==i.phone?(t.showToast({title:"联系电话不能为空",icon:"none",duration:1500}),!1):/^1[3456789]\d{9}$/.test(i.phone)?""==i.province_id||""==i.city_id||""==i.district_id?(t.showToast({title:"所在地区不能为空",icon:"none",duration:1500}),!1):""==i.detail?(t.showToast({title:"详细地址不能为空",icon:"none",duration:1500}),!1):void t.request({url:i.$api+"user/address-edit&access_token="+i.$access_token,method:"POST",data:{id:i.id,name:i.name,mobile:i.phone,province_id:i.province_id,city_id:i.city_id,district_id:i.district_id,detail:i.detail},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},1500)},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}}):(t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1500}),!1)}},onLoad:function(e){var i=this;i.$access_token=t.getStorageSync("access_token"),i.$level=t.getStorageSync("level"),t.request({url:i.$api+"user/address-detail&access_token="+i.$access_token,dataType:"json",method:"GET",data:{id:e.id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t," at pages\\address\\address.vue:310"),i.id=t.data.data.address_id,i.name=t.data.data.name,i.phone=t.data.data.mobile,i.arr[0]=t.data.data.district.province.id,i.arr[1]=t.data.data.district.city.id,i.pic[0]=t.data.data.district.province.name,i.pic[1]=t.data.data.district.city.name,i.pic[2]=t.data.data.district.district.name,i.arr[2]=t.data.data.district.district.id,i.detail=t.data.data.detail,""==i.pic[0]&&""==i.pic[1]&&""==i.pic[2]||(i.pickerText=i.pic[0]+"-"+i.pic[1]+"-"+i.pic[2]),console.log(i.arr,i.pic," at pages\\address\\address.vue:324")},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})},onReachBottom:function(){}};e.default=d}).call(this,i("6e42")["default"])},e20a:function(t,e,i){}},[["c773","common/runtime","common/vendor"]]]);