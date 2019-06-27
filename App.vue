<script>
	var wgtVer = null;  
	var wgtUrl = null;
	
	// 更新应用资源  
		function installWgt(path){  
			console.log(1111)
			plus.nativeUI.showWaiting("安装wgt文件...");  
			console.log(2222)
			plus.runtime.install(path,{},function(){  
			console.log(3333)
				plus.nativeUI.closeWaiting();  
				console.log("安装wgt文件成功！");  
				plus.nativeUI.alert("应用资源更新完成！",function(){  
					plus.runtime.restart();  
				});  
			},function(e){  
				plus.nativeUI.closeWaiting();  
				console.log("安装wgt文件失败["+e.code+"]："+e.message);  
				plus.nativeUI.alert("安装wgt文件失败["+e.code+"]："+e.message);  
			});  
		}  
	// 下载wgt文件   
		function downWgt(){  
			plus.nativeUI.showWaiting("下载wgt文件...");  
			plus.downloader.createDownload( wgtUrl, {filename:"unpackage/debug/"}, function(d,status){  
				if ( status == 200 ) {   
					console.log("下载wgt成功："+d.filename);  
					installWgt(d.filename); // 安装wgt包  
				} else {  
					console.log("下载wgt失败！");  
					plus.nativeUI.alert("下载wgt失败！");  
				}  
				plus.nativeUI.closeWaiting();  
			}).start();  
		}  
	export default {
		globalData:{
			pic_type: "",
			url: "",
			audio: ""
		},
		onLaunch: function () {
			this.$options.globalData.audio = uni.createInnerAudioContext();
			//#ifdef APP-PLUS
			console.log(plus.runtime.appid)
			console.log(plus.runtime.version)
			var server = "https://www.example.com/update"; //检查更新地址
			//升级检测数据
			var req = {
				"appid": plus.runtime.appid,
				"version": plus.runtime.version
			};
			uni.request({
				url: server,
				data: req,
				success: (res) => {
					if (res.statusCode == 200 && res.data.status === 1) {
						 //提醒用户更新
						uni.showModal({
							title: "更新提示",
							content: res.data.note,
							success: (res) => {
								if (res.confirm) {
									plus.runtime.openURL(res.data.url);
								}
							}
						})
					}
				}
			})
			//#endif
			//#ifdef APP-PLUS
			// console.log(plus.runtime.appid)
			// console.log(plus.runtime.version)
			// var server = "https://www.example.com/update"; //检查更新地址
			// //升级检测数据
			// var req = {
			// 	"appid": plus.runtime.appid,
			// 	"version": plus.runtime.version
			// };
			// uni.request({
			// 	url: server,
			// 	data: req,
			// 	success: (res) => {
			// 		if (res.statusCode == 200 && res.data.status === 1) {
			// 			 //提醒用户更新
			// 			uni.showModal({
			// 				title: "更新提示",
			// 				content: res.data.note,
			// 				success: (res) => {
			// 					if (res.confirm) {
			// 						plus.runtime.openURL(res.data.url);
			// 					}
			// 				}
			// 			})
			// 		}
			// 	}
			// })
			//#endif
			console.log('App Launch');
			//app启动时打开启动广告页
// 			var w = plus.webview.open(
// 				'hybrid/html/advertise/advertise.html',
// 				'本地地址',
// 				{ top: 0, bottom: 0, zindex: 999 },
// 				'fade-in',
// 				500
// 			);
// 			//设置定时器，4s后关闭启动广告页
// 			setTimeout(function() {
// 				plus.webview.close(w);
// 			}, 4000);
		},
		onShow: function () {
			var that = this;
			plus.runtime.getProperty(plus.runtime.appid,function(inf){  
				wgtVer=inf.version;  
				console.log("当前应用版本："+wgtVer); 
				uni.request({
				    url: that.$api+'default/edition', //仅为示例，并非真实接口地址。
				    data: {number:wgtVer},
					method: 'POST',
					dataType:'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
				    success: (res) => {
							console.log(res.data)
						if(res.data.code == 0){ 
							wgtUrl = res.data.data;
							// downWgt();
							uni.showModal({
								content: res.data.msg,
								confirmText:"升级APP",
								showCancel:false,
								success:function(){									
									// downWgt();
									console.log(uni.getSystemInfoSync().platform)
									plus.runtime.openURL(wgtUrl);
									// switch(uni.getSystemInfoSync().platform){
									// 	case 'android':
									// 		console.log('运行Android上')
									// 		plus.runtime.install(wgtUrl);
									// 		break;
									// 	case 'ios':
									// 		console.log('运行iOS上')
									// 		plus.runtime.openURL(wgtUrl);
									// 		break;
									// 	default:
									// 		console.log('运行在开发者工具上')
									// 		break;
									// }
								}
							})							 
						}
				    }
				});
				
			});
			
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// page{background: #fff;}
	.page_bg{background: #f5f5f7 !important;min-height: 100%;position: fixed;width: 100%;z-index: -1;left: 0;top: 0;}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #00001F;
	}
	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #00001F;
		top: 0;
		z-index: 999;
	}
	.mt44{
		margin-top: 44px;
	}
	.mt130{
		margin-top: 130upx;
	}
	uni-picker .uni-picker-item{
		font-size: 28upx;
	}
	.form_box{
		display: block;
		float: right;
		width: 530upx;
		background: #fff;
		margin-top: 30upx;
		position: relative;
		border-radius: 5px;
		input{
			width: 80%;
			height: 70upx;
			color: #9d9d9d;
			font-size: 22upx;
			padding: 0 20upx;
			box-sizing: border-box;
		}
		button{
			width: 31upx;
			height: 31upx;
			position: absolute;
			right: 30upx;
			top: 20upx;
			padding: 0;
			margin: 0;
			background: none;
			border: 0;
			&:after{
				border: 0;
			}
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
	.list_nav{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 20;
		background: #fff;
		color: #00001f;
		font-size: 28upx;
		text-align: center;
		overflow: hidden;
		view{
			width: 50%;
			float: left;
			padding: 20upx 0;
			border-bottom: 1upx solid #fff;
			&.active{
				border-bottom: 1upx solid #3E3E3E;
			}
		}
	}
	.index_swiper { 
		.uni-swiper-dots{
			bottom: 30upx;
			.uni-swiper-dot{
				width: 29upx;
				height: 5upx;
				border-radius: 20upx;
				background: rgba(255,255,255,.48);
			}
			.uni-swiper-dot-active{
				background: rgba(255,255,255,1);
			}
		}
	}
	// 视频样式
	.video_item{
		margin-bottom: 30upx;
		border-radius: 10upx;
		box-shadow: 0 0 20upx #D6D6DB;
		.v_poster{
			position: relative;
			.poster_img{
				display: block;
				width: 100%;
				height: 355upx !important;
			}
			.v_play{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,.22);
				z-index: 5;
				image{
					display: block;
					width: 72upx;
					height: 72upx !important;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		.v_info{
			background: #fff;
			padding: 25upx 25upx 35upx;
			box-sizing: border-box;
			position: relative;
			.head_img{
				float: left;
				margin-right: 25upx;
				image{
					display: block;
					width: 75upx;
					height: 75upx !important;
					border-radius: 50%;
				}
			}
			.v_title{
				color: #00001f;
				font-size: 24upx;
				margin: 5upx 0 6upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.v_look{
				color: #4f4f50;
				font-size: 20upx;
			}
			.v_download{
				position: absolute;
				right: 50upx;
				top: 45upx;
				z-index: 5;
				image{
					display: block;
					width: 40upx;
					height: 40upx !important;
				}
			}
		}
	}
	// 音频
	uni-audio{
		display: block;
	}
	
	.audio_list{
		padding: 30upx 20upx;
		box-sizing: border-box;
		.audio_item{
			background: #fff;
			margin-bottom: 20upx;
			border: 1upx solid #E6E6E6;
			padding: 50upx 30upx 40upx;
			box-sizing: border-box;
			border-radius: 10upx;
			.audio_img{
				position: relative;
				width: 269upx;
				height: 269upx !important;
				margin: 0 auto 50upx;
				.cd_img{
					display: block;
					width: 269upx;
					height: 269upx !important;
				}
				.logo_img{
					position: absolute;
					width: 89upx;
					height: 89upx !important;
					border-radius: 50%;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
				}
			}
			.ai_title{
				color: #00001f;
				font-size: 24upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	// 资讯
	.news_item{
		overflow: hidden;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #F0F0F0;
		margin-bottom: 10upx;
		.item_left{
			width: 450upx;
			float: left;
			padding-right: 20upx;
			box-sizing: border-box;
			.news_title{
				color: #333;
				font-size: 30upx;
				margin: 30upx 0 10upx;
				overflow : hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.news_info{
				color: #333;
				font-size: 22upx;
				margin: 20upx 0 50upx;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-wrap: break-word;
				word-break: break-all;
			}
			.news_icon{
				color: #bbb;
				font-size: 22upx;
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
		.item_right{
			width: 260upx;
			float: right;
			image{
				display: block;
				width: 260upx;
				height: 260upx !important;
			}
		}
	}
	.wxParse{
		-webkit-user-select: text;
	}
	.wxParse image,.wxParse .img,.wxParse image>img{
		display: block !important;
		max-width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
		opacity: 1 !important;
	}
	// .uni-video-fullscreen{
	// 	display: none !important;
	// }
</style>
