<template>
	<view class="detail_box">
		<view class="page_bg"></view>
		<view class="detail_title">{{title}}</view>
		<view class="news_icon">
			<view><image src="../../static/news_icon1.png" mode="widthFix"></image>{{look}}</view>
			<view><image src="../../static/news_icon2.png" mode="widthFix"></image>{{date}}</view>
		</view>
		<view class="detail_content">
			<block v-if="content!=''">
				<u-parse :content="content"></u-parse>
			</block>
		</view>
		<view class="page_ul">
			<view class="page_left">
				<block v-if="last != null">
					<view class="prev" @click="Prev(last.id)">上一篇：{{last.title}}</view>
				</block>
				<block v-else>
					<view class="prev" >上一篇：无</view>
				</block>
				
				
				<block v-if="next != null">
					<view class="next" @click="Next(next.id)">下一篇：{{next.title}}</view>
				</block>
				<block v-else>
					<view class="next" >下一篇：无</view>
				</block>
				
				
			</view>
			<!-- #ifdef APP-PLUS -->  
			<view class="page_share" @click="toShare"><image src="../../static/share.png" mode="widthFix"></image></view>
			<!-- #endif -->
			
			<!-- #ifdef H5 -->  
			<view><image src="http://yl.demenk.com/web/statics/images/youlan_code.png" style="display: block;width: 50%;margin: 20upx auto;" mode="widthFix"></image></view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default{
		data(){
			return{
				id: "",
				title: "",
				look: "0",
				date: "",
				content: "",
				node_type: "",
				last:{},
				next:{},
				cover_pic:'',
				describe:'',
			}
		},
		components:{
			uParse
		},
		methods:{
			Prev:function(e){
				uni.navigateTo({
					url: "/pages/news_detail/news_detail?id="+e
				})
			},
			Next:function(e){
				uni.navigateTo({
					url: "/pages/news_detail/news_detail?id="+e
				})
			},
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
				var that = this;
				uni.showActionSheet({
					itemList: ['分享到微信好友', '分享到微信朋友圈'],
					success: function (res) {
						if(res.tapIndex == 0){
							// 分享到微信好友
							uni.share({
								provider: "weixin",
								scene: "WXSceneSession",
								type: 0,
								href: "http://yl.demenk.com/web/news/#/pages/news_detail/news_detail?id="+that.id,
								title: that.title,
								summary: that.describe,
								imageUrl: that.cover_pic,
								success: function (res) {
									console.log("success:" + JSON.stringify(res));
								},
								fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
								}
							});
						}else if(res.tapIndex == 1){
							// 分享到微信朋友圈
							uni.share({
								provider: "weixin",
								scene: "WXSenceTimeline",
								type: 0,
								href: "http://yl.demenk.com/web/news/#/pages/news_detail/news_detail?id="+that.id,
								title: that.title,
								summary: that.describe,
								imageUrl: that.cover_pic,
								success: function (res) {
									console.log("success:" + JSON.stringify(res));
								},
								fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
								}
							});
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}
		},
		onLoad(opt) {
			let that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			console.log(opt.id)
			uni.request({
				url: that.$api+'default/article-detail&id=1',
				data: {
					id: opt.id,
					article_cat_id:2
				},
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var data = res.data.data;
					console.log(data)
					that.id = data.mode.id;
					that.title = data.mode.title;
					that.look = data.mode.num;
					that.date = data.mode.addtime;
					that.content = data.mode.content;
					that.last = data.last;
					that.next = data.next;
					that.cover_pic = data.mode.cover_pic;
					that.describe = data.mode.describe;
					console.log(that.last)
					console.log(that.next)
			console.log(that.cover_pic)
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
		-webkit-user-select: text;
		color: #252525;
		font-size: 24upx !important;
		.wxParse{
			.img{
				display: block;
				width: 100% !important;
				max-width: 100% !important;
			}	
			image{
				display: block;
				width: 100% !important;
				max-width: 100% !important;
			}			
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
