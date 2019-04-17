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
				<view class="person_avatar"><image src="../../static/person_avatar.png" mode="widthFix"></image></view>
				<view class="person_name">Eason</view>
			</view>
		</view>
		<view class="nav_box">
			<view class="nav_item radius">
				<navigator class="navigator" url="../my_order/my_order?id=-1">我的订单<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="order_box">
				<view class="order_item"><navigator url="../my_order/my_order?id=0"><image src="../../static/order_icon1.png" mode="widthFix"></image>待付款</navigator></view>
				<view class="order_item"><navigator url="../my_order/my_order?id=1"><image src="../../static/order_icon2.png" mode="widthFix"></image>待发货</navigator></view>
				<view class="order_item"><navigator url="../my_order/my_order?id=2"><image src="../../static/order_icon3.png" mode="widthFix"></image>待收货</navigator></view>
				<view class="order_item"><navigator url="../my_order/my_order?id=3"><image src="../../static/order_icon4.png" mode="widthFix"></image>已完成</navigator></view>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/wallet/wallet">我的钱包<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<navigator class="navigator" url="/pages/my_agent/my_agent">我的代理<image src="../../static/next.png" mode="widthFix"></image></navigator>
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
				<navigator class="navigator" url="/pages/feedback/feedback">意见反馈<image src="../../static/next.png" mode="widthFix"></image></navigator>
			</view>
			<view class="nav_item">
				<view class="navigator">退出登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toSettings: function(e){
				uni.navigateTo({
					url: "/pages/settings/settings"
				})
			}
		},
		onLoad(opt) {
			var that = this;
			uni.request({
				url: that.$api+'user/user-info&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					
				},
				fail: () => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
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
			image{
				display: block;
				width: 50upx;
				height: 41upx !important;
				margin: 0 auto 10upx;
			}
		}
	}
</style>