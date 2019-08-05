<template>
	<view class="complete_mater_box">
		<view class="page_bg"></view>
		<view class="complete_user_info">
			<form @submit="formSubmit">
				<view class="user_info">
					<view class="cui_title"><text>*</text>个人信息</view>
					<view class="section">
						<view class="section_title">姓名</view>
						<view class="section_right">
							<input type="text" name="username" @input="getUsername" placeholder="请输入您的姓名" :value="username" />
						</view>
					</view>
					<view class="section">
						<view class="section_title">年龄</view>
						<view class="section_right">
							<input type="number" name="age" @input="getAge" placeholder="请输入您的年龄" :value="age" />
						</view>
					</view>
					<view class="section">
						<view class="section_title">性别</view>
						<view class="section_right">
							<radio-group name="radio-group" @change="sexChange">
								<label v-for="(item, index) in radio_sex" :key="item.value"><radio :value="item.value" color="#12bc0a" :checked="item.value == sex_current" />{{item.name}}</label>
							</radio-group>
						</view>
					</view>
					<view class="section">
						<view class="section_title">婚否</view>
						<view class="section_right">
							<radio-group name="radio-group" @change="marryChange">
								<label v-for="(item, index) in radio_marry" :key="item.value"><radio :value="item.value" color="#12bc0a" :checked="item.value == marry_current" />{{item.name}}</label>
							</radio-group>
						</view>
					</view>
					<view class="section">
						<view class="section_title">育否</view>
						<view class="section_right">
							<radio-group name="radio-group" @change="bearChange">
								<label v-for="(item, index) in radio_bear" :key="item.value"><radio :value="item.value" color="#12bc0a" :checked="item.value == bear_current" />{{item.name}}</label>
							</radio-group>
						</view>
					</view>
					<view class="section">
						<view class="section_title">孩子数</view>
						<view class="section_right">
							<input type="text" name="children" @input="getChildren" placeholder="请输入您的孩子数" :value="children" />
						</view>
					</view>
				</view> 
				<view class="auth_name_box">
					<view class="cui_title"><text>*</text>实名认证</view>
					<view class="auth_ul">
						<view class="auth_item">
							<view class="ai_image" @click="selectCardUp">
								<image src="../../static/id_card_img1.jpg" class="bg_img" mode="widthFix"></image>
								<image :src="idcard_up" class="card_img" mode="widthFix"></image>
							</view>
							<text>身份证正面</text>
						</view>
						<view class="auth_item">
							<view class="ai_image" @click="selectCardDown">
								<image src="../../static/id_card_img1.jpg" class="bg_img" mode="widthFix"></image>
								<!-- <div class="card_img bs" :style="'background: url('+idcard_down+');'"></div> -->
								<image :src="idcard_down" class="card_img" mode="widthFix"></image>
							</view>
							<text>身份证反面</text>
						</view>
					</view>
					<!-- <block v-if="is_wx == 0">
						<button @click="appLogin(providerList)">微信授权登录</button>
					</block> -->
				</view>
				<view class="btn-area">
					<!-- <button formType="submit" class="submit_btn">保存并绑定微信</button> -->
					<button formType="submit" class="submit_btn">保存</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				username: "",
				age: "",
				children: 0,
				id_card: "",
				radio_sex: [{
                    value: '0',
                    name: '男'
                },
                {
                    value: '1',
                    name: '女'
                }],
				radio_marry: [{
                    value: '0',
                    name: '是'
                },
                {
                    value: '1',
                    name: '否'
                }],
				radio_bear: [{
                    value: '0',
                    name: '是'
                },
                {
                    value: '1',
                    name: '否'
                }],
				sex_current: 0,
				marry_current: 0,
				bear_current: 0,
				idcard_up: "",
				idcard_down: "",
				user_real:0,
				code: "",
				userinfo: "", 
				providerList: "",
				avatar_url:'',
				nickname:'',
				wechat_open_id:'', 
				is_wx: 0
			}
		},
		methods:{
			initProvider() {
				var that = this;
			    const filters = ['weixin'];
			    uni.getProvider({
			        service: 'oauth',
			        success: (res) => {
			            if (res.provider && res.provider.length) {
			                for (let i = 0; i < res.provider.length; i++) {
			                    if (~filters.indexOf(res.provider[i])) {
			                        that.providerList = res.provider[i];
									console.log(that.providerList);
			                    }
			                }
			            }
			        },
			        fail: (err) => {
			            console.error('获取服务供应商失败：' + JSON.stringify(err));
			        }
			    });
			},
			getUsername: function(e){
				this.username = e.detail.value;
				console.log(this.username)
			},
			getAge: function(e){
				this.age = e.detail.value;
				console.log(this.age)
			},
			getChildren: function(e){
				this.children = e.detail.value;
				console.log(this.children)
			},
			getIdcard: function(e){
				this.id_card = e.detail.value;
				console.log(this.id_card)
			},
			sexChange: function(e){
				for (let i = 0; i < this.radio_sex.length; i++) {
					if (this.radio_sex[i].value === e.target.value) {
						this.sex_current = i;
						break;
					}
				}
				console.log(this.sex_current)
			},
			marryChange: function(e){
				for (let i = 0; i < this.radio_marry.length; i++) {
					if (this.radio_marry[i].value === e.target.value) {
						this.marry_current = i;
						break;
					}
				}
				console.log(this.marry_current)
			},
			bearChange: function(e){
				for (let i = 0; i < this.radio_bear.length; i++) {
					if (this.radio_bear[i].value === e.target.value) {
						this.bear_current = i;
						break;
					}
				}
				console.log(this.bear_current)
			},
			selectCardUp: function(){
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						var uploadCard1 =  uni.uploadFile({
							url: that.$api+'default/upload-card', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data)
								var data = JSON.parse(uploadFileRes.data);
								if(data.code == 0){
									that.idcard_up = data.data.url;
								}else{
									uni.showToast({
										title:data.msg,
										icon:'none',
									});
								} 
							}
						});
					}
				});
			},
			selectCardDown: function(){
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: that.$api+'default/upload-card', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data)
								var data = JSON.parse(uploadFileRes.data);
 								// that.idcard_down = data.data.url;
								if(data.code == 0){
									that.idcard_down = data.data.url;
								}else{
									uni.showToast({
										title:data.msg,
										icon:'none',
									});
								}  
							},
							
							
						});
					}
				});				
			},
			appLogin: function(value){
				console.log(value);
				var that = this;
				console.log(that.$access_token)
				uni.login({
					provider: value,
					success: function (loginRes) {
						// 获取用户信息
						uni.getUserInfo({
							provider: value,
							success: function(infoRes) {
							 uni.request({
								url: that.$api+'user/agent-information/&access_token='+that.$access_token,
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
									if(res.data.code == 0){
										that.is_wx = 1;
										uni.showToast({
											title:res.data.msg,
											icon:'none',
										});
									}else{
										uni.showToast({
											title:res.data.msg,
											icon:'none',
										});
									}  
								}, 
							 });
							}
						});
					},
					fail:function(res){
						uni.showToast({
							title: '授权登录失败：' + res.errMsg,
							icon: 'none',
							duration: 1500
						})	
					}
				})
			},
			formSubmit: function(){ 
				let that = this; 
				if(that.username == ""){
					uni.showToast({
						title:"请填写姓名",
						icon:'none',
						duration: 1000
					});
					return false;
				}
				if(that.age == 0  ||  that.age == ''){
					uni.showToast({
						title:"请输入年龄",
						icon:'none',
						duration: 1000
					});
					return false;
				}
				console.log(that.idcard_up)
				console.log(that.idcard_down)
				if(that.idcard_up == 0){
					uni.showToast({
						title:"请上传身份证正面照",
						icon:'none',
						duration: 1000
					});
					return false;
				}
				if(that.idcard_down == 0){
					uni.showToast({
						title:"请上传身份证反面照",
						icon:'none',
						duration: 1000
					});
					return false;
				}
				 
				  
				uni.request({
					url: that.$api+'user/setting-edit&access_token='+that.$access_token,
					method: 'POST',
					data:{
						user_name: that.username,
						user_age: that.age,
						user_sex: that.sex_current,
						user_marry: that.marry_current,
						user_rear: that.bear_current,
						user_child: that.children,
						user_just: that.idcard_up,
						user_back: that.idcard_down, 
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {						
						var data = res.data.data;
						if(res.data.code == 0){
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 3000
							});
							
							uni.setStorageSync('user_name',that.username); 
							that.$user_name = uni.getStorageSync('user_name');
							
							
							setTimeout(function(){
								uni.reLaunch({ 
									url: "/pages/person/person"
								})
							},3500)
						
							
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 1000
							});
						}
					},
					fail: (res) => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}
		},
		onReady() {
			var that = this;
            that.initProvider();
			console.log(that.providerList)
        },
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			console.log(that.$access_token);
			if(that.$access_token == "" || that.$access_token == undefined){
				uni.showToast({
					title: "请先登录！",
					icon: "none",
					duration: 2000
				})
				setTimeout(function(){
					uni.reLaunch({
						url: "/pages/login/login"
					})
				},2000)
				return false;
			}
			uni.request({
				url: that.$api+'user/setting/&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var data = res.data.data
					if(res.data.code == 0){
						that.username = data.user_name;
						that.age = data.user_age;
						that.sex_current = data.user_sex;
						that.marry_current = data.user_marry;
						that.bear_current = data.user_rear;
						that.children = data.user_child;
						that.idcard_up = data.user_just;
						that.idcard_down = data.user_back; 
						that.user_real = data.user_real;
						that.is_wx = data.is_wx;
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}  
				},
				fail: (res) => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	.complete_user_info{
		.submit_btn{
			display: block;
			width: 80%;
			height: 72upx;
			line-height: 72upx;
			border: 0;
			color: #fff;
			font-size: 24upx;
			border-radius: 5upx;
			background: #00001f;
			margin: 100upx auto;
		}
		.cui_title{
			color: #262626;
			font-size: 32upx;
			padding: 30upx 30upx 10upx;
			text{
				color: #b70000;
				font-size: 28upx;
				margin-right: 5upx;
			}
		}
		.section{
			padding: 25upx 30upx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #F7F7F7;
			.section_title{
				color: #595959;
				font-size: 24upx;
				width: 120upx;
				margin-right: 30upx;
			}
			.section_right{
				color: #333;
				font-size: 22upx;
				input{
					color: #333;
					font-size: 22upx;
				}
				label{
					display: inline-flex;
					align-items: center;
					overflow: hidden;
					margin-right: 50upx;
					radio{
						transform: scale(.8);
					}
				}
			}
		}
		.user_info{
			background: #fff;
			margin-bottom: 10upx;
		}
		.auth_name_box{
			background: #fff;
			.auth_ul{
				padding: 0 30upx;
				margin: 30upx 0 0;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				border-bottom: 1px solid #F3F3F3;
				.auth_item{
					.ai_image{
						position: relative;
						border: 1px dashed #E0E0E0;
						width: 310upx;
						height: 230upx;
						.card_img{
							position: absolute;
							display: block;
							width: 310upx;
							height: 230upx !important;
							left: 0;
							top: 0;
							z-index: 2;
							&.bs{
								background-size: 100% 100% !important;
							}
						}
						.bg_img{
							display: block;
							width: 100%;
							height: 100% !important;
						}
					}
					text{
						display: block;
						width: 100%;
						text-align: center;
						color: #595959;
						font-size: 22upx;
						margin: 20upx 0;
					}
				}
			}
		}
	}
</style>
