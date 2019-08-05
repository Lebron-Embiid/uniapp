<template>
	<view class="content">
		<view class="header">
			<image src="../../static/video_img.png"></image>
		</view>
		
		<view class="list">
			<view class="list-call">
				<image class="img" src="../../static/1.png"></image>
				<input class="biaoti" v-model="phoneno" type="number" maxlength="11" placeholder="输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="../../static/2.png"></image>
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
			</view>
			
		</view>
		
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>
		
		<view class="xieyi">
			<navigator url="/pages/forget/forget" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="/pages/register/register" open-type="navigate">注册账户</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			// uni.setStorageSync('access_token',this.$access_token);
			// uni.setStorageSync('level',this.$level);
		},
		data() {
			return {
				phoneno:'',
				password:''
			};
		},
		methods: {
		    bindLogin() {
				var that = this;
				if (this.phoneno.length != 11) {
				     uni.showToast({
				        icon: 'none',
				        title: '手机号不正确'
				    });
				    return;
				}
				uni.request({
				    url: that.$api+'passport/mobile-login',
				    data: {
						contact_way:this.phoneno,
						password:this.password
					},
					method: 'POST',
					dataType:'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
				    success: (res) => {
						if(res.data.code!=1){
							uni.showToast({title:res.data.data.msg,icon:'none'});
						}else{
							var access_token = res.data.data.access_token;
							console.log(res)
							if(res.data.data.is_wx == 0){
								uni.login({
									provider: "weixin",
									success: function (loginRes) {
										// 获取用户信息
										uni.getUserInfo({
											provider: "weixin",
											success: function(infoRes) {
											 uni.request({
												url: that.$api+'user/agent-information&access_token='+access_token,
												dataType: "json",
												method: 'POST',
												data:{
													"nickname": infoRes.userInfo.nickName,
												    "wechat_open_id": infoRes.userInfo.openId,
													"avatar_url": infoRes.userInfo.avatarUrl,
												},
												header: {
													'content-type': 'application/x-www-form-urlencoded'
												},
												success: res => {
													var data = res.data.data
													// if(rely.data.code == 0){
														that.is_wx = 1;
														uni.showToast({
															title:res.data.msg,
															icon:'none'
														});
														uni.clearStorageSync();
														uni.setStorageSync('user_name',res.data.data.user_name);
														uni.setStorageSync('access_token',res.data.data.access_token);
														uni.setStorageSync('level',res.data.data.level);
														that.$access_token = uni.getStorageSync('access_token');
														that.$level = uni.getStorageSync('level');
														that.$user_name = uni.getStorageSync('user_name');
														console.log(that.$access_token)
														console.log(that.$level)
														console.log(that.$user_name)
														if(res.data.data.user_name == ''){
															setTimeout(function(){
																uni.redirectTo({
																	url: "/pages/complete_mater/complete_mater"
																})
															},1500)
														}else{
															setTimeout(function(){
																uni.reLaunch({
																	url: "/pages/index/index"
																})
															},1500)
														}

													// }else{
													// 	uni.showToast({
													// 		title:rely.data.msg,
													// 		icon:'none',
													// 	});
													// }
												},
											 });
											}
										});
									},
									fail:function(err){
										uni.showToast({
											title: '授权登录失败',
											icon: 'none',
											duration: 1500
										})	
									}
								})
							}else{
								uni.clearStorageSync(); 
								uni.setStorageSync('user_name',res.data.data.user_name);
								uni.setStorageSync('access_token',res.data.data.access_token);
								uni.setStorageSync('level',res.data.data.level);
								uni.showToast({title:res.data.data.msg,icon:'none',duration:1500});
								that.$access_token = uni.getStorageSync('access_token');
								that.$level = uni.getStorageSync('level');
								that.$user_name = uni.getStorageSync('user_name');
								console.log(that.$access_token)
								console.log(that.$level)
								console.log(that.$user_name)
								if(res.data.data.user_name == ''){								
									setTimeout(function(){
										uni.redirectTo({
											url: "/pages/complete_mater/complete_mater"
										})
									},1500)
								}else{							
									setTimeout(function(){
										uni.reLaunch({
											url: "/pages/index/index"
										})
									},1500)
								}
							}

							
						}
				    },
					fail: (res) => {
						uni.showToast({title:res.data.msg,icon:'none'});
					}
				});
				
		    }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content:center;
		overflow: hidden;
	}
	.header {
		width:161upx;
		height:161upx;
		background:rgba(63,205,235,1);
		/* box-shadow:0upx 12upx 13upx 0upx rgba(63,205,235,0.47); */
		border-radius:50%;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
	}
	.header image{
		width:161upx;
		height:161upx;
		border-radius:50%;
	}
	
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 40upx;
		height: 40upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width:470upx;
		height:100upx;
		background:linear-gradient(-90deg,rgba(63,205,235,1),rgba(188,226,158,1));
		box-shadow:0upx 0upx 13upx 0upx rgba(164,217,228,0.2);
		border-radius:50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}
	.dlbutton-hover {
		background:linear-gradient(-90deg,rgba(63,205,235,0.9),rgba(188,226,158,0.9));
	}
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi text{
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
