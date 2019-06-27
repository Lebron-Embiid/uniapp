<template>
	<view class="content">
		
		<view class="list">
			<view class="tishi">若您忘记了密码，可在此重新设置新密码。</view>
			<view class="list-call">
				<image class="img" src="/static/1.png"></image>
				<input class="biaoti" type="number" v-model="phoneno" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/2.png"></image>
				<input class="biaoti" type="text" v-model="password" maxlength="32" placeholder="请输入新密码" :password="!showPassword" />
				<image class="img" :src="showPassword?'/static/op.png':'/static/cl.png'" @tap="display"></image>
			</view>
			<view class="list-call">
				<image class="img" src="/static/3.png"></image>
				<input class="biaoti" type="number" v-model="code" placeholder="验证码" />
				<view class="yzm" :class="{ yzms: second>0 }" @tap="getcode">{{yanzhengma}}</view>
			</view>
		</view>
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>修改密码</text>
		</view>

	</view>
</template>

<script>
	var tha,js;
	export default {
		data() {
			return {
				phoneno:'',
				second:0,
				code:"",
				showPassword:false,
				password:''
			}
		},
		onLoad(){
			tha = this;
		},
		computed:{
			yanzhengma(){
				if(this.second==0){
					return '获取验证码';
				}else{
					return this.second+'s';
				}
			}
		},
		methods: {
			display() {
			    this.showPassword = !this.showPassword
			},
			getcode(){
				if(this.second>0){
					return;
				}
				if(this.phoneno.length != 11){
					uni.showToast({
						title:"请填写正确的号码",
						icon: 'none'
					})	
					return false;
				}
				uni.request({
				    url: this.$api+'default/user-hand-binding', //仅为示例，并非真实接口地址。
				    data: {content:this.phoneno,code_type:'reg'},
					method: 'GET',
					dataType:'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
				    success: (res) => {
						if(res.data.code == 1){
							uni.showToast({title:res.data.msg,icon:'none'});
							tha.second = 0;
						}else{
							uni.showToast({title:res.data.msg});
							tha.second = 60;
							js = setInterval(function(){
								tha.second--;
								if(tha.second==0){
									clearInterval(js)
								}
							},1000)
						}
				    }
				});
			},
			bindLogin() { 
				if (this.phoneno == "" && this.phoneno.length != 11) {
				     uni.showToast({
				        icon: 'none',
				        title: '请填写正确的手机号'
				    });
				    return;
				} 
				if (this.password == "") {
				     uni.showToast({
				        icon: 'none',
				        title: '密码不为空'
				    });
				    return;
				} 
				if (this.code == "") {
				     uni.showToast({
				        icon: 'none',
				        title: '验证码不为空'
				    });
				    return;
				}  
 				uni.request({
 				    url: this.$api+'passport/forget',
 				    data: {
 						contact_way:this.phoneno,
 						password:this.password,
						code: this.code
 					},
 					method: 'POST',
 					dataType:'json',
 					header: {
 						'content-type': 'application/x-www-form-urlencoded'
 					},
 				    success: (res) => {
 						if(res.data.code!=1){
 							uni.showToast({title:res.data.msg,icon:'none'});
 						}else{
 						 
 							uni.showToast({title:res.data.msg,icon:'none',duration:1500});  
 							setTimeout(function(){
 								uni.reLaunch({
 									url: "/pages/login/login"
 								})
 							},1500)
 						}
 				    },
 					fail: () => {
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
		justify-content: center;
	}
	.tishi {
		color: #999999;
		font-size: 28upx;
		line-height: 50upx;
		margin-bottom: 50upx;
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
	.yzm {
		color: #FF7D13;
		font-size: 24upx;
		line-height: 58upx;
		width:150upx;
		text-align: center;
		height:58upx;
		border:1upx solid rgba(255,131,30,1);
		border-radius: 50upx;
	}
	.yzms {
		color: #999999 !important;
		border:1upx solid #999999;
	}
</style>
