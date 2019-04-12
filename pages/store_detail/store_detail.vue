<template>
	<view class="store_detail">
		<view class="detail_banner">
			<commonSwiper :swiperList="swiperList"></commonSwiper>
		</view>
		<view class="detail_info borbom">
			<view class="di_title">{{title}}</view>
			<view class="di_info">{{info}}</view>
			<view class="di_price">￥{{price}}<text>规格：{{type}}</text></view>
		</view>
		<view class="auth_box borbom">
			<view><image src="../../static/ok.jpg" mode="widthFix"></image>正品保障</view>
			<view><image src="../../static/ok.jpg" mode="widthFix"></image>极速发货</view>
		</view>
		<view class="format_box borbom">
			<text>规格</text>
			<view class="format_select">
				规格<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="store_tab">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 商品详情 -->
		<view class="store_content1 mb98" v-show="currentTab == 0">
			<image src="../../static/detail_img.jpg" mode="aspectFill"></image>
		</view>
		<!-- 评价 -->
		<view class="store_content2 mb98" v-show="currentTab == 1">
				
		</view>
		<view class="fixed_bottom">
			<view class="fb_left" @click="toIndex"><image src="../../static/back_home.png" mode="widthFix"></image>首页</view>
			<view class="fb_center">加入购物车</view>
			<view class="fb_right">立即购买</view>
		</view>
	</view>
</template>

<script>
	import commonSwiper from "@/components/common-swiper.vue"
	export default{
		data(){
			return{
				swiperList: ["../../static/detail_banner.jpg","../../static/detail_banner.jpg","../../static/detail_banner.jpg"],
				navbar:[{name:"商品详情"},{name:"评价"}],
				currentTab:0,
				title: "艾璐卡山羊奶悦颜清透洁面乳",
				info: "深层清洁皮肤，长效保湿滋润",
				price: "98.00",
				type: "120g"
			}
		},
		components:{
			commonSwiper
		},
		methods:{
			navbarTap: function(e){
				console.log(e)
				this.currentTab = e;
			},
			toIndex: function(e){
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.borbom{
		border-bottom: 20upx solid #f7f7f7;
	}
	.mb98{
		margin-bottom: 98upx;
	}
	.detail_info{
		padding: 40upx 25upx;
		box-sizing: border-box;
		overflow: hidden;
		.di_title{
			color: #1f1f1f;
			font-size: 28upx;
		}
		.di_info{
			color: #787878;
			font-size: 24upx;
			margin: 5upx 0 15upx;
		}
		.di_price{
			color: #ff4446;
			font-size: 34upx;
			text{
				color: #a1a1a1;
				font-size: 22upx;
				margin-left: 70upx;
			}
		}
	}
	.auth_box{
		padding: 30upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
		view{
			float: left;
			margin-right: 30upx;
			color: #a1a1a1;
			font-size: 24upx;
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 8upx 6upx 0;
				width: 33upx;
				height: 33upx !important;
			}
		}
	}
	.format_box{
		overflow: hidden;
		padding: 30upx 20upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text{
			display: block;
			width: 15%;
			color: #1f1f1f;
			font-size: 30upx;
		}
		.format_select{
			width: 85%;
			color: #787878;
			font-size: 24upx;
			overflow: hidden;
			image{
				float: right;
				display: block;
				width: 20upx;
				height: 34upx !important;
			}
		}
	}
	.store_tab{
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1upx solid #EAEAEA;
		view{
			color: #00001f;
			font-size: 28upx;
			text-align: center;
			padding: 30upx 10upx;
			&.active{
				border-bottom: 1upx solid #00001F;
			}
		}
	}
	.store_content1,.store_content2{
		overflow: hidden;
		padding: 20upx 0;
		image{
			display: block;
			width: 100%;
		}
	}
	.fixed_bottom{
		position: fixed;
		width: 100%;
		height: 98upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		left: 0;
		bottom: 0;
		z-index: 20;
		background: #fff;
		border-top: 1upx solid #EAEAEA;
		.fb_left{
			width: 190upx;
			color: #666;
			font-size: 22upx;
			image{
				display: block;
				width: 36upx;
				height: 36upx !important;
				margin: 0 auto 10upx;
			}
		}
		.fb_center{
			width: 280upx;
			height: 98upx;
			line-height: 98upx;
			color: #fff;
			font-size: 30upx;
			background: #f4a522;
		}
		.fb_right{
			width: 280upx;
			height: 98upx;
			line-height: 98upx;
			color: #fff;
			font-size: 30upx;
			background: #fa3930;
		}
	}
</style>
