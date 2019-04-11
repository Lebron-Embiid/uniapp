<template>
	<view class="address_box">
		<view class="page_bg"></view>
		<view class="add_item pd10">
			<text>收货人</text>
			<view class="acc_right">
				<input type="text" name="username" value="" />
			</view>
		</view>
		<view class="add_item pd10">
			<text>联系电话</text>
			<view class="acc_right">
				<input type="text" name="phone" value="" />
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
				<input type="text" name="address" value="" />
			</view>
		</view>
		<view class="fixed_save">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	import cityPicker from '../../components/citypicker/cityPicker.vue'
	import cityData from '../../common/city.data.js'
	export default{
		data(){
			return{
				cityPickerValueDefault: [0, 0, 1],
                themeColor: '#007AFF',
				pickerText: '请选择'
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
				console.log(e.label);
                this.pickerText = e.label;
            },
			showMulLinkageThreePicker(e){
				this.$refs.cityPicker.showPickerView();
			}
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
