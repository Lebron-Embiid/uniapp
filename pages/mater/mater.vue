<template>
	<view class="mater_box">
		<view class="page_bg"></view>
		<view class="list_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<view class="mt44"></view>
		<view class="photo_mater" v-show="currentTab == 0">
			<form  class="form_box">
				<input type="text"  placeholder="请输入您要搜索的关键词" v-model="keywords" :value="keywords" />
				<button @click="toSearch"><image src="../../static/search.png" mode=""></image></button>
			</form>
			<view class="photo_box">
				<view class="photo_item" @click="toMaterDetail(item)" v-for="(item,index) in photo_list" :key="index">
					<view class="photo_head">
						<image :src="item.avatar" class="avatar_img" mode="widthFix"></image>
						<text class="ph_name">{{item.name}}</text>
						<text class="ph_txt">{{item.time}}</text>
						<text class="ph_txt">浏览：{{item.num}}</text>
						<block v-if="item.sign == 1">
							<text class="ph_sign">精选</text>
						</block>
						<!-- <text class="ph_download">前往下载&gt;</text> -->
						<!-- <image src="../../static/share.png" class="share_img" mode="widthFix"></image> -->
					</view>
					<view class="pc_title">{{item.title}}</view>
					<view class="photo_content">
						<view class="pc_item" v-for="(mater,idx) in item.maters" :key="idx">
							<image :src="mater.cover_pic" class="c_img" mode="aspectFill"></image>
							<!-- <image src="../../static/download.png" class="download_icon" mode="widthFix"></image> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="video_mater" v-show="currentTab == 1">
			<form   class="form_box">
				<input type="text"  placeholder="请输入您要搜索的关键词" v-model="keywords_video" :value="keywords_video" />
				<button @click="toSearch_video"><image src="../../static/search.png" mode=""></image></button>
			</form>
			<view class="video_content">
				<commonVideo :video_list="video_list" :istype="1" :isDownload="1"></commonVideo>
			</view>
		</view>
	</view>
</template>

<script>
	import commonVideo from "@/components/common-video.vue"
	export default{
		data(){
			return{
				navbar:[{name:"图片"},{name:"视频"}],
				currentTab:0,
				photo_list:[],
				video_list:[],
				page:1,
				page_id:1,
				page_source_count:1,
				page_movie_count:1,
				keywords: "",
				keywords_video: ""
			}
		},
		components:{
			commonVideo
		},
		methods:{
			navbarTap: function(e){
				var that = this;
				that.currentTab = e;
				uni.startPullDownRefresh(); 
				if(that.currentTab == 0){
					uni.request({
						url: that.$api+'default/source-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							var photo_list = [];
							var item = res.data.data;
							for(let i in item.list){
								photo_list.push({
									id: item.list[i].id,
									avatar: item.list[i].avatar_url,
									name: item.list[i].nickname,
									title: item.list[i].title,
									time: item.list[i].addtime,
									num: item.list[i].read_count,
									sign: item.list[i].type,
									maters: item.list[i].cover_pic[0]
								})
							}
							that.page_source_count = res.data.data.page_count;
							that.photo_list = photo_list;
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}else{
					uni.request({
						url: that.$api+'default/movies-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							var video_list = [];
							var item = res.data.data.list;
							var page_count = res.data.data.page_count; 
							for(let i in item){
								video_list.push({
									id: item[i].id,
									poster: item[i].cove_pic,
									avatar: item[i].avatar_url,
									title: item[i].title,
									look: item[i].num,
									video: item[i].url
								})
							}
							that.page_movie_count = res.data.data.page_count;
							that.video_list = video_list;
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
			toPreviewMater: function(e,idx){
				var that = this;
				var mater_list = [];
				for(let i in that.photo_list[e].maters){
					mater_list.push(that.photo_list[e].maters[i].cover_pic);
				}
				uni.previewImage({
					urls: mater_list,
					current: mater_list[idx],
					indicator: 'number'
				});
			},
			toMaterDetail: function(res){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+res.id+"&sign="+res.sign
				})
			},
			toSearch: function(e){				
				var that = this;
				 that.page = 1;
				uni.request({
					url: that.$api+'default/source-list&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					data:{keyword:that.keywords},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						var photo_list = [];
						var item = res.data.data;
						for(let i in item.list){
							photo_list.push({
								id: item.list[i].id,
								avatar: item.list[i].avatar_url,
								name: item.list[i].nickname,
								time: item.list[i].addtime,
								num: item.list[i].read_count,
								sign: item.list[i].type,
								maters: item.list[i].cover_pic[0]
							})
						}
						that.page_source_count = res.data.data.page_count;
						that.photo_list = photo_list;
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				}); 
			},
	        toSearch_video:function(e){
				var that = this;
				 that.page_id = 1;				
			    uni.request({
				 		url: that.$api+'default/movies-list&access_token='+that.$access_token,
				 		method: 'GET',
				 		dataType: "json",
					    data:{keyword:that.keywords_video},
				 		header: {
				 			'content-type': 'application/x-www-form-urlencoded'
				 		},
				 		success: res => {
				 			var video_list = [];
				 			var item = res.data.data.list;
				 			var page_count = res.data.data.page_count; 
				 			for(let i in item){
				 				video_list.push({
				 					id: item[i].id,
				 					poster: item[i].cove_pic,
				 					avatar: item[i].avatar_url,
				 					title: item[i].title,
				 					look: item[i].num,
				 					video: item[i].url
				 				})
				 			}
				 			that.page_movie_count = res.data.data.page_count;
				 			that.video_list = video_list;
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
		onNavigationBarButtonTap: function(){
			if(this.currentTab == 0){
				uni.navigateTo({
					url: "/pages/release_mater/release_mater"
				})
			}else{
				uni.navigateTo({
					url: "/pages/release_video/release_video"
				})
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
			setTimeout(function () {
			uni.request({
				url: that.$api+'default/source-list&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var photo_list = [];
					var item = res.data.data;
					for(let i in item.list){
						photo_list.push({
							id: item.list[i].id,
							avatar: item.list[i].avatar_url,
							name: item.list[i].nickname,
							title: item.list[i].title,
							time: item.list[i].addtime,
							num: item.list[i].read_count,
							sign: item.list[i].type,
							maters: item.list[i].cover_pic[0]
						})
					}
					that.page_source_count = res.data.data.page_count;
					that.photo_list = photo_list;
				},
				fail: () => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
			}, 1000);
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh(){
			var that = this;
			that.page = 1;
			that.page_id = 1;
			that.keywords = "";
			that.keywords_video = "";
			setTimeout(function () {
				if(that.currentTab == 0){
					uni.request({
						url: that.$api+'default/source-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							var photo_list = [];
							var item = res.data.data;
							for(let i in item.list){
								photo_list.push({
									id: item.list[i].id,
									avatar: item.list[i].avatar_url,
									name: item.list[i].nickname,
									title: item.list[i].title,
									time: item.list[i].addtime,
									num: item.list[i].read_count,
									sign: item.list[i].type,
									maters: item.list[i].cover_pic[0]
								})
							}
							that.page_source_count = res.data.data.page_count;
							that.photo_list = photo_list;
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}else{
					uni.request({
						url: that.$api+'default/movies-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							var video_list = [];
							var item = res.data.data.list;
							var page_count = res.data.data.page_count; 
							for(let i in item){
								video_list.push({
									id: item[i].id,
									poster: item[i].cove_pic,
									avatar: item[i].avatar_url,
									title: item[i].title,
									look: item[i].num,
									video: item[i].url
								})
							}
							that.page_movie_count = res.data.data.page_count;
							that.video_list = video_list;
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉触底
		onReachBottom(){
		    	var that = this;  
				if(that.currentTab == 0){
					if(that.page == that.page_source_count){
					   uni.showToast({
						title:"没有更多数据了",
						icon:'none',
					   });
					   return false;
					}
				   that.page = parseInt(that.page)+parseInt(1)				   
					uni.request({
						url: that.$api+'default/source-list&access_token='+that.$access_token,
						method: 'GET',
						data:{page:that.page,keywords:that.keywords},
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => { 
							var photo_list = []; 
							that.page_count = res.data.data.page_count; 
							var item_list = res.data.data.list; 
							  for(let i in item_list){
							  	photo_list.push({
							  		id: item_list[i].id,
							  		avatar: item_list[i].avatar_url,
							  		name: item_list[i].nickname,
									title: item.list[i].title,
							  		time: item_list[i].addtime,
							  		num: item_list[i].read_count,
							  		sign: item_list[i].type,
							  		maters: item_list[i].cover_pic[0]
							  	})
							  } 
							that.photo_list = that.photo_list.concat(photo_list)
						      console.log(that.photo_list)
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}else{
					console.log(that.page_id)
					console.log(that.page_movie_count)
					if(that.page_id == that.page_movie_count){
					   uni.showToast({
						title:"没有更多数据了",
						icon:'none',
					   });
					   return false;
					}
					that.page_id = parseInt(that.page_id)+parseInt(1)	
					uni.request({
						url: that.$api+'default/movies-list&access_token='+that.$access_token,
						method: 'GET',
						data:{page:that.page_id,keywords:that.keywords_video},
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							var video_list = [];
							var item = res.data.data.list;
							var page_count = res.data.data.page_count; 
							for(let i in item){
								video_list.push({
									poster: item[i].cove_pic,
									avatar: item[i].avatar_url,
									title: item[i].title,
									look: item[i].num,
									video: item[i].url
								})
							}
							
							that.video_list = that.video_list.concat(video_list) 
							console.log(that.video_list)
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
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.form_box{
		float: none;
		width: 100%;
		margin-top: 0;
		margin-bottom: 30upx;
	}
	.form_top{
		padding: 0 20upx;
		overflow: hidden;
		box-sizing: border-box;
		.form_box{
			float: none;
			width: 100%;
			margin: 0;
			margin-top: 20upx;
		}
	}
	.photo_mater,.video_mater{
		padding: 30upx 20upx;
		box-sizing: border-box;
	}
	.photo_box{
		overflow: hidden;
		.photo_item{
			border-bottom: 1upx solid #E6E6E6;
			margin-bottom: 30upx;
			.photo_head{
				overflow: hidden;
				color: #00001f;
				font-size: 26upx;
				margin-bottom: 15upx;
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
					margin: 0 10upx 6upx 0;
					width: 100upx;
					max-width: 130upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.ph_txt{
					color: #6d6d6d;
					font-size: 20upx;
					margin-right: 40upx;
				}
				.ph_sign{
					color: #fff;
					font-size: 22upx;
					background: #f00;
					border-radius: 5upx;
					padding: 5upx 10upx 6upx;
				}
				.ph_download{
					color: #f00;
					display: block;
					float: right;
					margin-top: 10upx;
					font-size: 22upx;
				}
				.share_img{
					display: block;
					width: 30upx;
					height: 32upx !important;
					float: right;
					margin-top: 8upx;
				}
			}
			.pc_title{
				font-size: 28upx;
				margin-bottom: 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #6d6d6d;
			}
			.photo_content{
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				align-items: center;
				.pc_item{
					width: 32%;
					margin-right: 2%;
					margin-bottom: 20upx;
					position: relative;
					&:nth-of-type(3n){
						margin-right: 0;
					}
					.c_img{
						display: block;
						width: 224upx;
						height: 340upx !important;
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
		}
	}
</style>
