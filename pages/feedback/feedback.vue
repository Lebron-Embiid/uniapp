<template>
	<view class="feedback_box">
		<form @submit="formSubmit">
			<view class="section">
				<textarea @input="getMessage" :value="message" name="message" maxlength="-1" placeholder="请把您的问题留给我们，我们会提供让您满意的答复~~" />
			</view>
			<view class="section">
				<input @input="getUsername" type="text" name="username" value="" placeholder="称呼" />
			</view>
			<view class="section">
				<input @input="getPhone" type="text" name="phone" value="" placeholder="联系方式" />
			</view>
			<view class="btn-area">
				<button formType="submit">提交留言</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				message: "",
				username: "",
				phone: ""
			}
		},
		methods:{
			getMessage: function(e){
				this.message = e.detail.value;
			},
			getUsername: function(e){
				this.username = e.detail.value;
			},
			getPhone: function(e){
				this.phone = e.detail.value;
			},
			formSubmit: function(e){
				console.log(this.message,this.username,this.phone)
			}
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.feedback_box{
		.section{
			background: #fff;
			border: 1px solid #E2E2E2;
			border-left: 0;
			border-right: 0;
			margin-bottom: 15upx;
			padding: 20upx 25upx;
			box-sizing: border-box;
			textarea{
				display: block;
				width: 100%;
				color: #737373;
				font-size: 20upx;
			}
			input{
				padding: 0 25upx;
				box-sizing: border-box;
				color: #00001f;
				font-size: 20upx;
			}
		}
		.btn-area{
			button{
				width: 80%;
				color: #fff;
				font-size: 24upx;
				background: #00001f;
				border-radius: 5upx;
				padding: 6upx 0 8upx;
				margin-top: 70upx;
			}
		}
	}
</style>
