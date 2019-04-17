<template>
	<view class="withdraw_box">
		<view class="page_bg"></view>
		<form @submit="formSubmit">
			<view class="over_till">账户剩余余额：<text>{{over_money}}</text>元</view>
			<view class="section">
				<view class="left_txt">姓名<text>*</text></view>
				<input type="text" name="name" @input="setName" :value="name" />
				<!-- <view class="txt">{{username}}</view> -->
			</view>
			<view class="section">
				<view class="left_txt">帐号<text>*</text></view>
				<input type="text" name="username" @input="setUserName" :value="username" />
				<!-- <view class="txt">{{username}}</view> -->
			</view>
			<view class="section">
				<view class="left_txt">提现金额<text>*</text></view>
				<input type="number" name="money" @input="setMoney" :value="money" />
			</view>
			<view class="section">
				<view class="left_txt">提现方式</view>
				<view class="txt">微信</view>
			</view>
			<view class="btn-area">
				<button formType="submit" class="submit_btn">提现</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name: "",
				username: "",
				over_money: "",
				money: ""
			}
		},
		methods:{
			setName: function(e){
				this.name = e.detail.value;
			},
			setUserName: function(e){
				this.username = e.detail.value;
			},
			setMoney: function(e){
				this.money = e.detail.value;
			},
			formSubmit: function(e){
				var that = this;
				if(that.name == ""){
					uni.showToast({
						title: "请输入姓名！",
						icon: "none"
					})
					return false;
				}
				if(that.username == ""){
					uni.showToast({
						title: "请输入账号！",
						icon: "none"
					})
					return false;
				}
				if(that.money == ""){
					uni.showToast({
						title: "请输入提现金额！",
						icon: "none"
					})
					return false;
				}
				uni.request({
					url: that.$api+'share/get-price&access_token='+that.$access_token,
					method: 'POST',
					data:{
						name: that.name,
						mobile: that.username,
						cash: that.money,
						pay_type: 0,
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						// if(res.data.code == 1){
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 1000
							});
							setTimeout(function(){
								that.name = "";
								that.username = "";
								that.money = "";
							},1000)
						// }
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
