<template>
	<view class="withdraw_box">
		<form @submit="formSubmit">
			<view class="section">
				<text>帐号</text>
				<view class="txt">{{username}}</view>
			</view>
			<view class="section">
				<text>余额</text>
				<view class="txt">{{over_money}}</view>
			</view>
			<view class="section">
				<text>提现金额</text>
				<input type="number" name="money" @input="setMoney" :value="money" />
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
				username: "Eason",
				over_money: "180.00",
				money: ""
			}
		},
		methods:{
			setMoney: function(e){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
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
			text{
				color: #00001f;
				font-size: 24upx;
				width: 120upx;
				margin-right: 30upx;
				border-right: 1upx solid #eee;
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
