<template>
	<view class="person_box">
		<view class="page_bg"></view>
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<view class="person_top">
			<view class="person_bg">
				<image src="../../static/person_bg.jpg" mode="widthFix"></image>
				<view class="person_layer"></view>
			</view>
			<view class="person_layer">
				<view class="settings" @click="toSettings"><image src="../../static/settings.png" mode="widthFix"></image></view>
				<view class="person_avatar"><image :src="avatar_url" mode="widthFix"></image></view>
				<view class="person_name">{{nickname}}</view>
			</view>
		</view>
		<view class="nav_box">
			<view class="nav_item radius">
				<view class="navigator">我的订单</view>
				<!-- <navigator class="navigator" url="../my_order/my_order?id=-1">我的订单<image src="../../static/next.png" mode="widthFix"></image></navigator> -->
			</view>
			<view class="order_box">
				<view class="order_item"><navigator url="/pages/my_order/my_order?id=0"><image src="../../static/order_icon1.png" mode="widthFix"></image>待付款<view v-if="status_0 != 0">{{status_0}}</view></navigator></view>
				<view class="order_item"><navigator url="/pages/my_order/my_order?id=1"><image src="../../static/order_icon2.png" mode="widthFix"></image>待发货<view v-if="status_1 != 0">{{status_1}}</view></navigator></view>
				<view class="order_item"><navigator url="/pages/my_order/my_order?id=2"><image src="../../static/order_icon3.png" mode="widthFix"></image>待收货<view v-if="status_2 != 0">{{status_2}}</view></navigator></view>
				<view class="order_item"><navigator url="/pages/my_order/my_order?id=3"><image src="../../static/order_icon4.png" mode="widthFix"></image>已完成</navigator></view>
			</view>
			<view class="nav_item">
				<navigator class="navigator" :url="'/pages/wallet/wallet?money='+money">我的钱包<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/my_agent/my_agent">我的会员<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/my_promotion/my_promotion">我的推广<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/car/car">我的购物车<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/my_mater/my_mater">我的素材<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/message_list/message_list">在线客服<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<!-- <view class="nav_item">
				<navigator class="navigator" url="/pages/feedback/feedback">我的客服<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view> -->
			
			
			<!-- <view class="nav_item">
				<view class="navigator" @click="clearSave">清除缓存</view>
			</view> -->
			
			<view class="nav_item">
				<view class="navigator" @click="logOut">退出登录</view>
			</view>
		</view>
		<view class="copy_txt">Copyright©2017-2022 呦蓝</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code:'',
				id:'',
				avatar_url:'',
				money:0,
				nickname:'',
				orders:[],
				status_0:0,
				status_1:0,
				status_2:0,
				status_3:0,
				mobile: "",
				invitation_code: ""
			}
		},
		methods:{
			toSettings: function(e){
				uni.navigateTo({
					url: "/pages/complete_mater/complete_mater"
				})
			},
			// clearSave: function(e){
			// 	var that = this;
			// 	that.$access_token = uni.setStorageSync('access_token','');
			// 	that.$level = uni.setStorageSync('level','');
			// 	uni.removeStorageSync('access_token');
			// 	uni.removeStorageSync('level');
			// 	uni.showToast({
			// 		title:"清除成功！",
			// 		icon:'none',
			// 	});
			// },
			logOut:function(){
				var that = this;  
 				that.$access_token = uni.setStorageSync('access_token','');
				that.$level = uni.setStorageSync('level','');
				uni.removeStorageSync('access_token');
				uni.removeStorageSync('level');
				uni.clearStorageSync();
				 uni.showToast({
				 	title:"退出成功",
				 	icon:'none',
				 });
				setTimeout(function(){
					uni.reLaunch({
						url: "/pages/login/login"
					})
				},1500)
			}
		},
		onShow:function(){
			var that = this;
			that.$user_name = uni.getStorageSync("user_name");
			if(that.$user_name == ""){
				uni.showToast({
					title: "请完善代理商资料！",
					icon: "none",
					duration: 2000
				})
				setTimeout(function(){
					uni.navigateTo({
						url: "/pages/complete_mater/complete_mater"
					})
				},2000)
				return false;
			}			
		},
		onLoad(opt) {
			var that = this;  
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			uni.request({
				url: that.$api+'user/user-info&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var data = res.data.data;
					that.code = data.user_info.code;
					that.id = data.user_info.id;
					that.avatar_url = data.user_info.avatar_url;
					that.money = data.user_info.money;
					that.nickname = data.user_info.nickname;
					that.orders = data.orders;
					that.status_0 = data.order_count.status_0;
					that.status_1 = data.order_count.status_1;
					that.status_2 = data.order_count.status_2;
					that.status_3 = data.order_count.status_3;
					that.mobile = data.user_info.mobile;
					that.invitation_code = data.user_info.invitation_code;
					var level = data.user_info.brand_id;
					uni.setStorageSync('level',level);
					that.$level = uni.getStorageSync("level");
					console.log(that.$level)
				}
				// fail: (res) => {
				// 	uni.showToast({
				// 		title:res.data.msg,
				// 		icon:'none',
				// 	});
				// }
			});
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				uni.request({
					url: that.$api+'user/user-info&access_token='+that.$access_token,
					dataType: "json",
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						var data = res.data.data;
						that.code = data.user_info.code;
						that.id = data.user_info.id;
						that.avatar_url = data.user_info.avatar_url;
						that.money = data.user_info.money;
						that.nickname = data.user_info.nickname;
						that.orders = data.orders;
						that.status_0 = data.order_count.status_0;
						that.status_1 = data.order_count.status_1;
						that.status_2 = data.order_count.status_2;
						that.status_3 = data.order_count.status_3;					
						var level = data.user_info.brand_id;
						that.invitation_code = data.user_info.invitation_code;
						uni.setStorageSync('level',level);
						that.$level = uni.getStorageSync("level");
						console.log(that.invitation_code)
					}
					// fail: (res) => {
					// 	uni.showToast({
					// 		title:res.data.msg,
					// 		icon:'none',
					// 	});
					// }
				});
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style lang="scss">
	.person_top{
		position: relative;
		.person_bg{
			position: relative;
			image{
				display: block;
				width: 100%;
				height: 340upx !important;
			}
			.person_layer{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				background: rgba(255,255,255,.1);
				z-index: 5;
			}
		}
		.person_layer{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 5;
			padding: 30upx 45upx;
			box-sizing: border-box;
			overflow: hidden;
			.settings{
				float: right;
				image{
					display: block;
					width: 41upx;
					height: 41upx !important;
				}
			}
			.person_avatar{
				display: block;
				width: 110upx;
				height: 110upx;
				border: 6upx solid #0d0b38;
				border-radius: 50%;
				margin: 50upx auto 10upx;
				box-sizing: border-box;
				image{
					display: block;
					width: 100%;
					height: 100% !important;
					border: 5upx solid #0a0a41;
					box-sizing: border-box;
					border-radius: 50%;
				}
			}
			.person_name{
				color: #fff;
				font-size: 28upx;
				text-align: center;
			}
		}
	}
// 	.person_top:after{
// 		background: rgba(0,0,31,.07);
// 	}
	.nav_box{
		padding: 0 20upx;
		box-sizing: border-box;
		overflow: hidden;
		transform: translateY(-75upx);
		position: relative;
		z-index: 10;
		.nav_item {
			.navigator{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20upx 40upx 20upx 25upx;
				background: #fff;
				margin-bottom: 5upx;
				color: #00001f;
				font-size: 26upx;
				image{
					display: block;
					width: 20upx;
					height: 34upx !important;
				}
			}
			&.radius navigator{
				border-top-left-radius: 5upx;
				border-top-right-radius: 5upx;
				border-bottom: 1upx solid #F1F1F1;
				margin-bottom: 0;
			}
		}
	}
	.order_box{
		padding: 0 30upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #00001f;
		font-size: 24upx;
		background: #fff;
		margin-bottom: 5upx;
		navigator{
			display: block;
			padding: 30upx;
			box-sizing: border-box;
			position: relative;
			view{
				position: absolute;
				right: 20upx;
				top: 20upx;
				display: block;
				width: 30upx;
				height: 30upx;
				line-height: 30upx;
				background: #f00;
				border-radius: 50%;
				color: #fff;
				font-size: 10upx;
				text-align: center;
			}
			image{
				display: block;
				width: 50upx;
				height: 41upx !important;
				margin: 0 auto 10upx;
			}
		}
	}
	.copy_txt{
		color: #999;
		font-size: 24upx;
		text-align: center;
		transform: translateY(-40upx);
	}
</style>