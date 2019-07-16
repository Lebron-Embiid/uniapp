<template>
	<view class="my_mater_box">
		<view class="page_bg"></view>
		<view class="list_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<view class="mt44"></view>
		<!-- 我发布的素材 -->
		<view class="my_mater" v-show="currentTab == 0">
			<view class="my_item" v-for="(item,index) in myMaterList" @tap="toPreview(index)" :key="index">
				<image :src="item.cover_pic" mode="aspectFill"></image>
				<view class="my_down">{{item.lower}}</view>
			</view>
			<block v-if="myMaterList == '' || myMaterList.length == 0">
				<view class="not_have">暂无发布素材</view>
			</block>
		</view>
		<!-- 我下载的素材 -->
		<!-- <view class="my_mater my_down_mater" v-show="currentTab == 1">
			<view class="my_item" v-for="(item,index) in downList" :key="index">
				<image :src="item.url" mode="widthFix"></image> 				 
			</view>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navbar:[{id: 0,name:"我发布的素材"},{id: 1,name:"我下载的素材"}],
				currentTab:0,
				page_count:1,
				page_down_count:1,
				page:1,
				page_down:1,
				myMaterList: [
// 					{
// 						id: 1,
// 						src: "../../static/my_mater1.jpg",
// 						num: 59
// 					},
					
				],
				downList:[]
			}
		},
		methods:{
			navbarTap: function(e){ 
				var that = this;
				that.currentTab = e;
				console.log(that.currentTab)
				if(that.currentTab == 0){
					uni.request({
						url: that.$api+'user/topic-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							that.page_count = res.data.data.page_count;
							that.myMaterList = res.data.data.list 					
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}else{
					uni.redirectTo({
						url: "/pages/my_mater_dow/my_mater_dow"
					})
				}
			},
			toMaterDetail: function(e){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+e
				})
			},
			toPreview(cur){
				var that = this;
				var dow_imgs = [];
				for(let i in that.downList){
					dow_imgs.push(that.downList[i].url);
				}
				uni.previewImage({
					current: dow_imgs[cur],
					urls: dow_imgs
				});
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			// uni.showLoading({
			// 	title: "加载中"
			// })
			uni.request({
				url: that.$api+'user/topic-list&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.page_count = res.data.data.page_count;
					that.myMaterList = res.data.data.list
					// uni.hideLoading()
				},
				fail: (res) => {
					uni.showToast({
						title:res.msg,
						icon:'none',
					});
				}
			});	
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				if(that.currentTab == 0){
					uni.request({
						url: that.$api+'user/topic-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							that.page_count = res.data.data.page_count;
							that.myMaterList = res.data.data.list 					
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
						url: that.$api+'user/order-source-list&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							that.page_down_count = res.data.data.page_count;
							that.downList = res.data.data.list 					
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
			let that = this;
			console.log(that.currentTab)
			if(that.currentTab == 0){
				if(that.page == that.page_count){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				 
			   that.page = parseInt(that.page)+parseInt(1)	
				uni.request({
					url: that.$api+'user/topic-list&access_token='+that.$access_token,
					method: 'GET',
					data:{page:that.page},
					success: res => {
						let list = res.data.data.list;
						// var list = res.data.data.list;
						that.myMaterList = that.myMaterList.concat(list)
						console.log(that.myMaterList) 
						
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						})
					}
				});
			}else{
				if(that.page_down == that.page_down_count){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				} 
				that.page_down = parseInt(that.page_down)+parseInt(1)	
				uni.request({
					url: that.$api+'user/order-source-list&access_token='+that.$access_token,
					method: 'GET',
					data:{page:that.page_down},
					success: res => {
						let list = res.data.data.list;
 						that.downList = that.downList.concat(list)
						console.log(that.downList) 
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
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.my_mater{
		padding: 30upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		.my_item{
			width: 32%;
			overflow: hidden;
			margin-right: 2%;
			margin-bottom: 25upx;
			&:nth-of-type(3n){
				margin-right: 0;
			}
			image{
				display: block;
				width: 100%;
				height: 275upx !important;
				border-top-left-radius: 5upx;
				border-top-right-radius: 5upx;
			}
			.my_down{
				padding: 15upx 10upx;
				box-sizing: border-box;
				background: #00001f;
				color: #fff;
				font-size: 20upx;
				border-bottom-left-radius: 5upx;
				border-bottom-right-radius: 5upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	.my_down_mater .my_item{
		margin-bottom: 30upx;
	}
</style>
