<template>
	<view class="withdraw_box">
		<view class="page_bg"></view>
		<form @submit="formSubmit">
			<view class="over_till">账户余额：<text>￥{{over_money}}</text></view>
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
				<view class="txt">
					<view class="pic_box">
					<!-- <picker class="pic_box" @change="bindPickerChange" :value="index" :range="array"> -->
                        <view class="uni-input">{{array[index]}}</view>
						<!-- <image src="../../static/next.png" mode="widthFix"></image> -->
						
					</view>
                    <!-- </picker> -->
				</view>
			</view>
			<view class="section section_img">
				<view class="left_txt">二维码</view>
				<view class="img" @click="selectCode"><image :src="code_img" mode=""></image></view>
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
				over_money: "0",
				money: "",
				code_img: "",
				array: ['微信提现', '支付宝提现'],
				index: 0
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
			selectCode: function(e){
				var that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: that.$api+'default/upload-image', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
								var data = JSON.parse(uploadFileRes.data);
								// console.log(data.data.url);
								if(data.code == 1){
									uni.showToast({
										title:data.msg,
										icon:'none', 
									});
									return false;
								}
								that.code_img = data.data.url;
								console.log(that.code_img)
							}
						});
					}
				});
			},
			bindPickerChange: function(e){
				this.index = e.target.value;
			},
			formSubmit: function(e){
				console.log(this.money);
				var that = this;
				if(that.name == ''){
					uni.showToast({
						title:"姓名不为空",
						icon:'none', 
					});
					return false;
				} 
				console.log(that.username)
				if(that.username == ''){
					uni.showToast({
						title:"账号不为空",
						icon:'none', 
					});
					return false;
				}
				if(that.money == ''){
					uni.showToast({
						title:"提现金额不为空",
						icon:'none', 
					});
					return false;
				}
				if(that.code_img == ''){
					uni.showToast({
						title:"提现二维码不为空",
						icon:'none', 
					});
					return false;
				}
				uni.request({
					url: that.$api+'share/apply&access_token='+that.$access_token,
					method: 'POST',
					data:{
						name: that.name,
						mobile: that.username,
						cash: that.money,
						pay_type: that.index,
						form_id:'the formId is a mock one',
						cover_pic:that.code_img
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if(res.data.code == 0){
							uni.showToast({
								title:res.data.msg,
								icon:'none',
								duration: 1000
							});
							setTimeout(function(){
								 uni.switchTab({
								 	url: "/pages/person/person"
								 })
							},1000)
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
				width: 80%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.pic_box{
					width: 100%;
					view{
						display: inline-block;
					}
					image{
						display: block;
						float: right;
						width: 20upx;
						height: 34upx !important;
					}
				}
			}
			.img{
				width: 180upx;
				height: 180upx;
				border: 1px solid #eee;
				position: relative;
				&:after{
					content: "+";
					color: #999;
					font-size: 100upx;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					z-index: 0;
				}
				image{
					display: block;
					width: 100%;
					height: 100% !important;
					position: relative;
					z-index: 5;
				}
			}
			input{
				color: #333;
				font-size: 22upx;
			}
		}
		.section_img{
			height: auto;
			line-height: auto;
			padding: 30upx 20upx;
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
