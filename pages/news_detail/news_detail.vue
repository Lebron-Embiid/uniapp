<template>
	<view class="detail_box">
		<view class="page_bg"></view>
		<view class="detail_title">{{title}}</view>
		<view class="news_icon">
			<view><image src="../../static/news_icon1.png" mode="widthFix"></image>{{look}}</view>
			<view><image src="../../static/news_icon2.png" mode="widthFix"></image>{{date}}</view>
		</view>
		<view class="detail_content">
			<u-parse :content="content"></u-parse>
			<!-- {{content}} -->
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
	import uParse from '@/components/u-parse/u-parse.vue'
	export default{
		data(){
			return{
				title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
				look: "1.1w",
				date: "04.28",
				content: "",
				node_type: ""
			}
		},
		components:{
			uParse
		},
		methods:{
			toShare: function(e){
				// this.version = plus.runtime.version;
// 				uni.getProvider({
// 					service: 'share',
// 					success: (e) => {
// 						
// 					},
// 					fail: (e) => {
// 						console.log('获取登录通道失败'+ JSON.stringify(e));
// 					}
// 				});
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function (res) {
						uni.showToast({
							title: JSON.stringify(res),
							icon: 'none',
							duration: 1500
						})
					},
					fail: function (err) {
						uni.showToast({
							title: JSON.stringify(err),
							icon: 'none',
							duration: 1500
						})
					}
				});
			}
		},
		onLoad(opt) {
			let that = this;
			console.log(opt.id)
			uni.request({
				url: that.$api+'default/article-detail&id=1',
				data: {
					id: opt.id
				},
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.title = res.data.data.title;
					that.look = res.data.data.num;
					that.date = res.data.data.addtime;
					that.content = res.data.data.content;
				},
				fail: () => {
					uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					})
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
		// padding: 10upx 0 30upx;
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
		font-size: 24upx !important;
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
