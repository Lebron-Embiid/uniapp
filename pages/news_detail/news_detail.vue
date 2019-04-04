<template>
	<view class="detail_box">
		<view class="detail_title">{{title}}</view>
		<view class="news_icon">
			<view><image src="../../static/news_icon1.png" mode="widthFix"></image>{{look}}</view>
			<view><image src="../../static/news_icon2.png" mode="widthFix"></image>{{date}}</view>
		</view>
		<view class="detail_content">
			<view>法国时间1月20日，一辆承载初见之美的巴士在巴黎惊艳亮相。据悉，这辆由护肤品牌艾璐卡eloo Doca定制的“初见巴士”将环绕巴黎城一周，为冬日的巴黎带来一道
亮丽的风景线，并以暖心互动活动，唤醒人们初见时刻的美好回忆和幸福感受。</view>
			<image src="../../static/news_detail1.jpg" mode="widthFix"></image>
			<view>一周前，艾璐卡重回品牌诞生地法国，开启为期一周的溯源探秘之旅。两位创始人一路考察了艾璐卡产品的原料产地、生产工厂和产品检测实验室等地，所有的足迹都见证
了艾璐卡为美丽事业精益求精的初心和对产品品质的坚守。这次“初见巴士”在巴黎的亮相，让更多人认识艾璐卡、了解艾璐卡，更将艾璐卡的品牌影响力扩展至全世界。</view>
			<image src="../../static/news_detail2.jpg" mode="widthFix"></image>
			<view>艾璐卡“初见巴士”在环城巡游过程中，会不定时停靠巴黎街头与游客展开互动。车上的工作人员只从结伴而行的人群中挑选互动对象，这一神秘举动引发围观者好奇，许多
人跃跃欲试，场面热烈。</view>
			<image src="../../static/news_detail3.jpg" mode="widthFix"></image>
			<view>艾璐卡用别出心裁的“初见巴士”，唤醒人们对“初见”的美丽回忆，也唤醒了人们对“初生美肌”的强烈渴求。秉承自然平衡美学理念的艾璐卡，一直致力于寻找天然、
纯净、温和的美肤元素，采撷能焕发女性娇嫩肌肤的美丽能量，帮助肌肤恢复平衡，焕活肌肤初生之美，守护每一刻，都如初美丽。</view>
		</view>
		<view class="page_ul">
			<view class="page_left">
				<view class="prev">上一篇：焦恩俊携手多位知名歌手现身呦蓝周年庆</view>
				<view class="next">下一篇：走进艾璐卡工厂——见证护肤新革命</view>
			</view>
			<view class="page_share" @click="toShare"><image src="../../static/share.png" mode="widthFix"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
				look: "1.1w",
				date: "04.28"
			}
		},
		methods:{
			toShare: function(e){
				// this.version = plus.runtime.version;
				uni.getProvider({
					service: 'share',
					success: (e) => {
						
					},
					fail: (e) => {
						console.log('获取登录通道失败'+ JSON.stringify(e));
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7;
		padding: 10upx 0 30upx;
	}
	.detail_box{
		background: #fff;
		padding: 40upx 50upx;
		box-sizing: border-box;
		.detail_title{
			color: #333;
			font-size: 30upx;
		}
		.news_icon{
			color: #bbb;
			font-size: 22upx;
			margin: 10upx 0 20upx;
			view{
				display: inline-block;
				margin-right: 20upx;
				image{
					display: inline-block;
					vertical-align: middle;
					width: 20upx;
					height: 20upx !important;
					margin: 0 5upx 3upx 0;
				}
			}
		}
	}
	.detail_content{
		color: #252525;
		font-size: 24upx;
		image{
			display: block;
			max-width: 100%;
		}
	}
	.page_ul{
		margin-top: 40upx;
		overflow: hidden;
		color: #252525;
		font-size: 20upx;
		.page_left{
			width: 80%;
			margin-bottom: 10upx;
			float: left;
			view{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.page_share{
			float: right;
			padding: 15upx;
			image{
				display: block;
				width: 30upx;
				height: 32upx !important;
			}
		}
	}
</style>
