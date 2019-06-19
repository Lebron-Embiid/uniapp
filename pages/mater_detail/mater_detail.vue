<template>
	<view class="mater_detail">
		<view class="page_bg"></view>
		<view class="photo_head">
			<image :src="avatar" class="avatar_img" mode="widthFix"></image>
			<text class="ph_name">{{name}}</text>
			<block v-if="sign == 1">
				<text class="ph_sign">精选</text>
			</block>
			<text class="ph_txt">{{time}}</text>
		</view>
		<view class="md_title">{{title}}</view>
		<view class="photo_content">
			<view class="pc_item" @click="downloadMater(idx)" v-for="(mater,idx) in maters" :key="idx">
				<image :src="mater.cover_pic" class="c_img" mode="widthFix"></image>
				<image src="../../static/download.png" class="download_icon" mode="widthFix"></image>
			</view>
		</view>
		<view class="photo_bottom">
			<view class="pb_share" @click="toShare"><image src="../../static/share.png" mode="widthFix"></image>一键转发</view>
			<view class="pb_num">浏览：{{num}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				avatar: "",
				name: "",
				time: "",
				num: "",
				title: "",
				sign: "",
				maters: [
					// "../../static/mater_img1.jpg","../../static/mater_img2.jpg","../../static/mater_img3.jpg",
				],
				providerList: []
			}
		},
		methods:{
			initProvider() {
                const filters = ['weixin'];
                uni.getProvider({
                    service: 'share',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i]
                                    });
                                }
                            }
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
			toShare() {
				var that = this;
				// uni.showActionSheet({
				// 	itemList: ['分享到微信好友', '分享到微信朋友圈'],
				// 	success: function (res) {
				// 		if(res.tapIndex == 0){
				// 			// 分享到微信好友
				// 			uni.share({
				// 				provider: "weixin",
				// 				scene: "WXSceneSession",
				// 				type: 2,
				// 				// href: "http://yl.demenk.com/index.html",
				// 				// title: that.name+"分享",
				// 				// summary: that.name+"分享图片",
				// 				imageUrl: that.maters[0].cover_pic,
				// 				success: function (res) {
				// 					console.log(JSON.stringify(res));
				// 				},
				// 				fail: function (err) {
				// 					console.log(JSON.stringify(err));
				// 				}
				// 			});
				// 		}else if(res.tapIndex == 1){
							var len = that.maters.length;
							for(let i=0;i<len;i++){
								uni.saveImageToPhotosAlbum({					
									filePath: that.maters[i].cover_pic,				                
									success: function () { 
										var i_len = i+1;
										if(i_len == len){
											uni.setClipboardData({
												data: that.title
											});
											uni.showModal({
												title: "去微信或朋友圈分享",
												content: "文字已复制，图片已下载到手机！",
												confirmText: "打开微信",
												success: (res) => {
													if(res.confirm){
														if (plus.os.name == 'Android') {
																console.log(plus.os.name);
															plus.runtime.launchApplication(
																{
																	pname: 'com.tencent.mm'
																},
																function(e) {
																	console.log('Open system default browser failed: ' + e.message);
																}
															);
														} else if (plus.os.name == 'iOS') {
																console.log(plus.os.name);
															plus.runtime.launchApplication({ action: 'weixin://' }, function(e) {
																console.log('Open system default browser failed: ' + e.message);
															});
														}
													}
												},
												fail: (err) => {
													console.log(err)
												}
											})
											
										}
									},
									fail: () => {
										uni.showToast({
											title: '下载失败！',
											icon: 'none',
											duration: 1500
										})
									}
								});
							}
							// 判断平台
							console.log(plus.os.name)
							
							// 分享到微信朋友圈
							// uni.share({
							// 	provider: "weixin",
							// 	scene: "WXSenceTimeline",
							// 	type: 2,
							// 	// href: "http://yl.demenk.com/index.html",
							// 	// title: that.name+"分享",
							// 	// summary: that.name+"分享图片",
							// 	imageUrl: that.maters[0].cover_pic,
							// 	success: function (res) {
							// 		console.log(JSON.stringify(res));
							// 	},
							// 	fail: function (err) {
							// 		console.log(JSON.stringify(err));
							// 	}
							// });
						// } 
					// }
				// });
				
				
            },
			downloadMater: function(e){
				let that = this;
				console.log(that.maters[e])
				uni.showModal({
					title: "提示",
					content: "确定下载该图片？",
					success: (res) => {
						if(res.confirm){
							uni.request({
								url: that.$api+'user/order-source&access_token='+that.$access_token,
								method: 'POST',
								data:{
									tip:that.maters[e].id,
									url:that.maters[e].cover_pic,
									status:0,  
									},
								dataType: "json",
								header: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								success: res => {
									var data = res.data 
									if(data.code == 0){
										console.log(111)
										uni.saveImageToPhotosAlbum({					
											filePath: that.maters[e].cover_pic,				                
											success: function () { 
												uni.showToast({
													title: '下载成功',
													icon: 'none',
													duration: 1500
												})
											},
											fail: () => {
												uni.showToast({
													title: '下载失败！',
													icon: 'none',
													duration: 1500
												})
											}
										});
									}else{ 
										uni.showToast({
											title:data.msg,
											icon:'none',
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
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: "/pages/release_mater/release_mater"
			})
		},
		onReady() {
            this.initProvider();
        },
		onLoad(opt) {
			let that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			uni.request({
				url: that.$api+'default/source-detail&access_token='+that.$access_token+'&id='+opt.id,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var item = res.data.data;
					that.avatar = item.source.avatar_url;
					that.title = item.source.title;
					that.name = item.source.username;
					that.time = item.source.addtime;
					that.num = item.source.browse_id;
					that.sign = item.source.type;
					that.maters = item.topic;
				},
				fail: () => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
// 			that.name = opt.name;
// 			that.avatar = opt.avatar;
// 			that.time = opt.time;
// 			that.num = opt.num;
// 			that.sign = opt.sign;
// 			that.maters = opt.maters.split(",");
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.mater_detail{
		padding: 60upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.photo_head{
		overflow: hidden;
		color: #00001f;
		font-size: 22upx;
		margin-bottom: 20upx;
		.avatar_img{
			display: inline-block;
			vertical-align: middle;
			width: 41upx;
			height: 41upx !important;
			border-radius: 50%;
			margin: 0 10upx 6upx 0;
		}
		.ph_name{
			display: inline-block;
			vertical-align: middle;
			margin: 0 10upx 8upx 0;
			width: 130upx;
			max-width: 130upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.ph_txt{
			color: #6d6d6d;
			font-size: 20upx;
			float: right;
			margin-top: 8upx;
		}
		.ph_sign{
			color: #fff;
			font-size: 22upx;
			background: #f00;
			border-radius: 5upx;
			padding: 5upx 10upx 6upx;
		}
	}
	.photo_content{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		.pc_item{
			// width: 32%;
			// margin-right: 2%;
			margin-bottom: 20upx;
			position: relative;
			&:nth-of-type(3n){
				margin-right: 0;
			}
			.c_img{
				display: block;
				// width: 224upx;
				// height: 340upx !important;
			}
			.download_icon{
				position: absolute;
				right: 10upx;
				bottom: 8upx;
				z-index: 5;
				display: block;
				width: 36upx;
				height: 36upx !important;
			}
		}
	}
	.photo_bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		.pb_share{
			color: #282842;
			font-size: 20upx;
			image{
				display: inline-block;
				vertical-align: middle;
				width: 30upx;
				height: 32upx !important;
				margin: 0 20upx 5upx 0;
			}
		}
		.pb_num{
			color: #6d6d6d;
			font-size: 20upx;
		}
	}
	.md_title{
		font-size: 28upx;
		margin-bottom: 20upx;
	}
</style>
