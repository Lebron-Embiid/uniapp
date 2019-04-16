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
			<cityPicker :themeColor="themeColor" ref="cityPicker" :pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel" @onConfirm="onConfirm"></cityPicker>
			<view class="acc_right" @click="showMulLinkageThreePicker">
				<view>{{pickerText}}</view>
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="add_item pd10">
			<text>详细地址</text>
			<view class="acc_right">
				<input type="text" name="address" :value="detail" @input="getDetail" />
			</view>
		</view>
		<view class="fixed_save" @click="saveAddress">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	import cityPicker from '@/components/citypicker/cityPicker.vue'
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
				detail: ""
			}
		},
		components:{
			cityPicker
		},
		methods:{
			onCancel(e) {
                this.$refs.cityPicker.pickerCancel();
            },
			onConfirm(e) {
				this.arr = [];
				console.log(e.label,e.cityCode);
				var str = e.cityCode;
                this.pickerText = e.label;
				this.pic = e.label.split("-");
				console.log(this.pic);
				var str1 = "";
				var arr = [str.length/2];
				for(let i=0;i<str.length;i++){
					str1+=str.charAt(i);
					if((i+1)%2==0){
						arr[i/2] = str1;
						this.arr.push(arr[i/2]);
						str1 = "";
					}
				}
				console.log(this.arr);
            },
			showMulLinkageThreePicker(e){
				this.$refs.cityPicker.showPickerView();
			},
			getName(e){
				this.name = e.detail.value;
			},
			getPhone(e){
				this.phone = e.detail.value;				
			},
			getDetail(e){
				this.detail = e.detail.value;				
			},
			saveAddress(e){
				var that = this;
				uni.request({
					url: that.$api+'user/address-save&access_token='+that.$access_token,
					method: 'POST',
					data:{
						name: that.name,
						mobile: that.phone,
						province_id: that.arr[0],
						province: that.pic[0],
						city_id: that.arr[1],
						city: that.pic[1],
						district_id: that.arr[2],
						district: that.pic[2],
						detail: that.detail
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if(res.data.code == 1){
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1500
							})
							setTimeout(function(){
								uni.navigateBack({
									delta: 1
								})
							},1500)
						}
					},
					fail: () => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
					}
				});
			}
		},
		onLoad() {
			var that = this;
			// console.log(that.$access_token)
			uni.request({
				url: that.$api+'user/address-save&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					
				},
				fail: () => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				},
			})
		},
        onBackPress() {
          if (this.$refs.cityPicker.showPicker) {
            this.$refs.cityPicker.pickerCancel();
            return true;
          }
        },
        onUnload() {
            if (this.$refs.cityPicker.showPicker) {
                this.$refs.cityPicker.pickerCancel();
            }
        },
		// 上拉加载
		onReachBottom(){
			
		},
		// 下拉刷新
		onPullDownRefresh(){
			
		}
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
