<template>
	<view class="address_box">
		<view class="page_bg"></view>
		<view class="add_item pd10">
			<text>收货人</text>
			<view class="acc_right">
				<input type="text" name="username" :value="name" @input="getName" />
			</view>
		</view>
		<view class="add_item pd10">
			<text>联系电话</text>
			<view class="acc_right">
				<input type="number" name="phone" maxlength="11" :value="phone" @input="getPhone" />
			</view>
		</view>
		<view class="add_item">
			<text>所在地区</text>
			<!-- <cityPicker :themeColor="themeColor" ref="cityPicker" :pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel" @onConfirm="onConfirm"></cityPicker> -->
			<w-picker 
				mode="region" 
				:defaultVal="cityPickerValueDefault" 
				@confirm="onConfirm" 
				ref="region" 
				:themeColor="themeColor" 
			></w-picker>
			<view class="acc_right" @tap="toShowRegion">
				<view>
				{{pickerText}}
				<!-- <addressd @changes="childClick" ref="address"></addressd> --><!-- {{pickerText}} --></view>
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="add_item pd10">
			<text>详细地址</text>
			<view class="acc_right">
				<input type="text" name="address" :value="detail" @input="getDetail" />
			</view>
		</view>
		<block v-if="id == 0">
			<view class="fixed_save" @click="addAddress">
				<button>保存</button>
			</view>
		</block>
		<block v-else>
			<view class="fixed_save" @click="editAddress">
				<button>修改</button>
			</view>			
		</block>
	</view>
</template>

<script>
	import cityPicker from '@/components/citypicker/cityPicker.vue'
	import addressd from "@/components/jm-address/jm-address.vue"
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default{
		data(){
			return{
				cityPickerValueDefault: [0, 0, 0],
                themeColor: '#007AFF',
				pickerText: '请选择',
				arr: [],
				pic: [],
				name: "",
				phone: "",
				province_id: "",
				city_id: "",
				district_id: "",
				detail: "",
				id:0
			}
		},
		components:{
			cityPicker,
			addressd,
			wPicker
		},
		methods:{
			childClick(e) {
				this.province_id = e.province_id;
				this.city_id = e.city_id;
				this.district_id = e.district_id;
				console.log(this.province_id,this.city_id,this.district_id)
            },
			toShowRegion(e){
				this.$refs.region.show();
			},
			onConfirm(e){
				console.log(e);
				var that = this;
				that.cityPickerValueDefault = e.defaultVal;
				this.$refs.region.pickVal = e.defaultVal;
				that.pickerText = e.checkArr[0]+'-'+e.checkArr[1]+'-'+e.checkArr[2];
				that.province_id = e.checkValue[0];
				that.city_id = e.checkValue[1];
				that.district_id = e.checkValue[2];
			},

			// onCancel(e) {
   //              this.$refs.cityPicker.pickerCancel();
   //          },
			// onConfirm(e) {
			// 	this.arr = [];
			// 	console.log(e.label,e.cityCode);
			// 	var str = e.cityCode;
   //              this.pickerText = e.label;
			// 	this.pic = e.label.split("-");
			// 	console.log(this.pic);
			// 	var str1 = "";
			// 	var arr = [str.length/2];
			// 	for(let i=0;i<str.length;i++){
			// 		str1+=str.charAt(i);
			// 		if((i+1)%2==0){
			// 			arr[i/2] = str1;
			// 			this.arr.push(arr[i/2]);
			// 			str1 = "";
			// 		}
			// 	}
			// 	console.log(this.arr);
   //          },
			// showMulLinkageThreePicker(e){
			// 	this.$refs.cityPicker.showPickerView();
			// },
			getName(e){
				this.name = e.detail.value;
			},
			getPhone(e){
				this.phone = e.detail.value;				
			},
			getDetail(e){
				this.detail = e.detail.value;				
			},
			//添加
			addAddress(e){
				var that = this;
				if(that.name == ''){
					uni.showToast({
						title: '收货人不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.phone == ''){
					uni.showToast({
						title: '联系电话不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(!(/^1[3456789]\d{9}$/.test(that.phone))){
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.province_id == '' || that.city_id == '' || that.district_id == ''){
					uni.showToast({
						title: '所在地区不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.detail == ''){
					uni.showToast({
						title: '详细地址不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				uni.request({
					url: that.$api+'user/address-save&access_token='+that.$access_token,
					method: 'POST',
					data:{
						name: that.name,
						mobile: that.phone,
						province_id: that.province_id, 
						city_id: that.city_id, 
						district_id: that.district_id, 
						detail: that.detail
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
						setTimeout(function(){
							uni.navigateBack({
							 delta:1
							})
						},1500)
					},
					fail: (res) => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
					}
				});
			},
			
			//修改
			editAddress(e){
				var that = this;
				if(that.name == ''){
					uni.showToast({
						title: '收货人不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.phone == ''){
					uni.showToast({
						title: '联系电话不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(!(/^1[3456789]\d{9}$/.test(that.phone))){
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.province_id == '' || that.city_id == '' || that.district_id == ''){
					uni.showToast({
						title: '所在地区不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.detail == ''){
					uni.showToast({
						title: '详细地址不能为空',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				uni.request({
					url: that.$api+'user/address-edit&access_token='+that.$access_token,
					method: 'POST',
					data:{
						id: that.id,
						name: that.name,
						mobile: that.phone,
						province_id: that.province_id, 
						city_id: that.city_id, 
						district_id: that.district_id, 
						detail: that.detail
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1500
							})
							setTimeout(function(){
								uni.navigateBack({
								 delta:1
								})
							},1500)
						
					},
					fail: (res) => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
					}
				});
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			// console.log(that.$access_token)
			uni.request({
				url: that.$api+'user/address-detail&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				data: {id:opt.id},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					console.log(res)
					that.id = res.data.data.address_id;
					that.name = res.data.data.name;
					that.phone = res.data.data.mobile;
					that.arr[0] = res.data.data.district.province.id;
					that.arr[1] =  res.data.data.district.city.id;
					that.pic[0] =  res.data.data.district.province.name;
					that.pic[1] = res.data.data.district.city.name;
					that.pic[2] =  res.data.data.district.district.name;
					that.arr[2] =  res.data.data.district.district.id;
					that.detail =  res.data.data.detail;
					if(that.pic[0] != '' || that.pic[1] != '' || that.pic[2] != ''){
						that.pickerText = that.pic[0]+'-'+that.pic[1]+'-'+that.pic[2];
					}
					console.log(that.arr,that.pic);
				},
				fail: (res) => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				},
			})
		},
        // onBackPress() {
        //   if (this.$refs.cityPicker.showPicker) {
        //     this.$refs.cityPicker.pickerCancel();
        //     return true;
        //   }
        // },
        // onUnload() {
        //     if (this.$refs.cityPicker.showPicker) {
        //         this.$refs.cityPicker.pickerCancel();
        //     }
        // },
		// 上拉加载
		onReachBottom(){
			
		},
	}
</script>

<style scoped lang="scss">
	page{background: #efeef3 !important;}
	.add_item{
		background: #fff;
		padding: 25upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #2d2d2d;
		font-size: 24upx;
		border-bottom: 1px solid #F2F2F2;
		.acc_right{
			width: 60%;
			text-align: right;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			view{
// 				overflow: hidden;
// 				text-overflow: ellipsis;
// 				white-space: nowrap;
			}
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 0 0 25upx;
				width: 20upx;
				height: 34upx !important;
			}
			input{
				display: block;
				width: 100%;
			}
		}
	}
	.fixed_save{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 20;
		button{
			background: #fe4543;
			color: #fff;
			font-size: 28upx;
			border: 0;
			border-radius: 0;
			padding: 10upx 0;
			&:after{
				border: 0;
			}
		}
	}
	.pd10{padding: 15upx 25upx;}
</style>
