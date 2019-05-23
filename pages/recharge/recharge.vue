<template>
	<view class="withdraw_box">
		<view class="page_bg"></view>
		<form @submit="formSubmit">
			<view class="over_till">账户余额：<text>￥{{over_money}}</text></view> 
			
			<view class="section">
				<view class="left_txt">充值方式</view>
				<view class="txt">
					<!-- <picker @change="bindPickerChange" :value="index" :range="array"> -->
			            <!-- <view class="uni-input">{{array[index]}}</view> -->
			        <!-- </picker> -->
					<view class="uni-input">微信充值</view>
				</view>
			</view>
			<view class="section">
				<view class="left_txt">充值金额<text>*</text></view>
				<input type="number" name="money" @input="setMoney" :value="money" />
			</view> 
			<view class="btn-area">
				<button formType="submit" class="submit_btn">充值</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{ 
				over_money: "0",
				money: "",
				array: ['微信充值', '支付宝充值'],
				index: 0
			}
		},
		methods:{ 
			setMoney: function(e){
				this.money = e.detail.value;
			},
			bindPickerChange: function(e){
				this.index = e.target.value;
				console.log(this.index)
			},
			formSubmit: function(e){ 
				var that = this;
				console.log(that.money)
				uni.request({
					url: that.$api+'recharge/submit&access_token='+that.$access_token,
					method: 'POST',
					data:{
						pay_price: that.money,
						send_price: 0, 
						pay_type: "WECHAT_PAY", 
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if(res.data.code == 0){
							//充值返回数据
							var data = res.data.data
							var res = res.data.res
							 console.log(data)
							 console.log(res)
							
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 1000
							});
						}
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			that.over_money = opt.money;
			
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.over_till{
		font-size: 26upx;
		margin-bottom: 20upx;
		padding-left: 10upx;
		text{
			color: #f00;
		}
	}
	.withdraw_box{
		padding: 30upx 20upx;
		.section{
			background: #fff;
			padding: 0 20upx;
			height: 80upx;
			margin-bottom: 20upx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.left_txt{
				color: #00001f;
				font-size: 24upx;
				width: 120upx;
				margin-right: 30upx;
				border-right: 1upx solid #eee;
				text{
					color: #f00;
				}
			}
			.txt{
				color: #333;
				font-size: 20upx;
			}
			input{
				color: #333;
				font-size: 22upx;
			}
		}
		.submit_btn{
			width: 80%;
			margin-top: 100upx;
			color: #fff;
			font-size: 24upx;
			background: #00001f;
			border-radius: 5upx;
			padding: 10upx 0 12upx;
		}
	}
</style>
