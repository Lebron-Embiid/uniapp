<template>
	<view class="store_box">
		<view class="index_swiper">
			<view class="search_top" @click="toSearch"><text>请输入您要搜索的关键词</text><image src="../../static/search.png" mode="widthFix"></image></view>
			<commonSwiper :swiperList="swiperList"></commonSwiper>
		</view>
		<view class="store_content">
			<view class="store_nav">
				<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==item.id ? 'active' : '']" @click="navbarTap(item.id)">{{item.name}}</view>
			</view>
			<view class="store_list">
				<commonStore :storeList="storeList"></commonStore>
			</view>
			<!-- <view class="store_list" v-show="currentTab == 1">
					<commonStore :storeList="storeList"></commonStore>
			</view>
			<view class="store_list" v-show="currentTab == 2">
					<commonStore :storeList="storeList"></commonStore>
			</view> -->
		</view>
	</view>
</template>

<script>
	import commonSwiper from "@/components/common-swiper.vue"
	import commonStore from "@/components/common-store.vue"
	export default{
		data(){
			return{
				page_count1:1,
				page1:1,
				page_count2:1,
				page2:1,
				page_count3:1,
				page3:1,
				swiperList: [
					// "../../static/store_banner.jpg","../../static/store_banner.jpg","../../static/store_banner.jpg",
				],
				scrollLeft: 0,
				tabIndex: 0,
				navbar: [
					// { name: '艾璐卡' },{ name: '纽西之谜'},{ name: '特价商品'}
				],
				currentTab:3,
                cat:[],
				storeList:[
// 					{
// 						id: 1,
// 						src: "../../static/store_img1.jpg",
// 						title: "艾璐卡-山羊奶悦颜清透洁乳",
// 						info: "清洁皮肤，长效保湿滋润",
// 						price: 98,
// 						type: "3.5g"
// 					},
// 					{
// 						id: 2,
// 						src: "../../static/store_img2.jpg",
// 						title: "艾璐卡-山羊奶悦颜清透洁乳",
// 						info: "清洁皮肤，长效保湿滋润",
// 						price: 98,
// 						type: "3.5g"
// 					},
// 					{
// 						id: 3,
// 						src: "../../static/store_img3.jpg",
// 						title: "艾璐卡-山羊奶悦颜清透洁乳",
// 						info: "清洁皮肤，长效保湿滋润",
// 						price: 98,
// 						type: "3.5g"
// 					},
// 					{
// 						id: 4,
// 						src: "../../static/store_img4.jpg",
// 						title: "艾璐卡-山羊奶悦颜清透洁乳",
// 						info: "清洁皮肤，长效保湿滋润",
// 						price: 98,
// 						type: "3.5g"
// 					}
				]
			}
		},
		components:{
			commonSwiper,
			commonStore
		},
		methods:{
			navbarTap: function(e){
				var that = this;
				that.currentTab = e; 
				that.page_count1 = 1;
				that.page_count2 = 1;
				that.page_count3 = 1;
				that.page1 = 1;
				that.page2 = 1;
				that.page3 = 1;
				uni.startPullDownRefresh(); 
					uni.request({
						url: that.$api+'default/goods-list&cat_id='+e+'&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							// if(res.data.code == 1){
								var storeList1 = [];
								var item = res.data.data;
								for(let i in item.list){
									storeList1.push({
										id: item.list[i].id,
										src: item.list[i].pic_url,
										cat_id: item.list[i].cat_id,
										title: item.list[i].name,
										// info: "清洁皮肤，长效保湿滋润",
										price: item.list[i].original_price,
										type: item.list[i].weight
									})
								}	
								that.storeList = storeList1;
								if(that.currentTab == 1){								
									that.page_count1 = res.data.data.page_count;
								}else if(that.currentTab == 2){
									that.page_count2 = res.data.data.page_count;
								}else if(that.currentTab == 3){
									that.page_count3 = res.data.data.page_count;
								}
								console.log(that.page_count1)
								console.log(that.page_count2)
								console.log(that.page_count3)
							// }
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				 
			},
			toSearch: function(e){
				uni.navigateTo({
					url: "/pages/search/search"
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
			console.log(that.$access_token,that.$level)
			setTimeout(function () {
			uni.request({
				url: that.$api+'default/shop&cat_id=1&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var navbar = [];
					var swiperList = [];
					var storeList = [];
					var item = res.data.data;
					for(let i in item.cat){
						navbar.push({
							id: item.cat[i].id,
							name: item.cat[i].name
						})
					}
					for(let i in item.list){
						storeList.push({
							id: item.list[i].id,
							src: item.list[i].pic_url,
							title: item.list[i].name,
							cat_id: item.list[i].cat_id,
							// info: "清洁皮肤，长效保湿滋润",
							price: item.list[i].original_price,
							type: item.list[i].weight
						})
					}
					for(let i in item.shop_banner){
						swiperList.push(item.shop_banner[i].pic_url)
					} 
					that.page_count1 = res.data.data.page_count;
					that.navbar = navbar;
					that.storeList = storeList;
					that.swiperList = swiperList;
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
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				uni.request({
					url: that.$api+'default/goods-list&cat_id='+that.currentTab+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						// if(res.data.code == 1){
							var storeList1 = [];
							var item = res.data.data;
							for(let i in item.list){
								storeList1.push({
									id: item.list[i].id,
									src: item.list[i].pic_url,
									cat_id: item.list[i].cat_id,
									title: item.list[i].name,
									// info: "清洁皮肤，长效保湿滋润",
									price: item.list[i].original_price,
									type: item.list[i].weight
								})
							}	
							that.storeList = storeList1;
							if(that.currentTab == 1){								
								that.page_count1 = res.data.data.page_count;
							}else if(that.currentTab == 2){
								that.page_count2 = res.data.data.page_count;
							}else if(that.currentTab == 3){
								that.page_count3 = res.data.data.page_count;
							}
							console.log(that.page_count1)
							console.log(that.page_count2)
							console.log(that.page_count3)
						// }
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
				uni.stopPullDownRefresh();
			}, 1000);
		},
			//上拉触底
		onReachBottom(){
			let that = this;
			if(that.currentTab == 1){	
				console.log(1111)
				console.log(that.page_count1)
				console.log(that.page1)
				if(that.page1 == that.page_count1){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}	
				that.page1 = parseInt(that.page1)+parseInt(1)							
				var page = that.page1;
			}else if(that.currentTab == 2){
				console.log(2222)
				console.log(that.page_count2)
				console.log(that.page2)
				if(that.page2 == that.page_count2){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}	
				that.page2 = parseInt(that.page2)+parseInt(1)
				var page = that.page2;
			}else if(that.currentTab == 3){
				console.log(33333)
				console.log(that.page_count3)
				console.log(that.page_count3)
				if(that.page3 == that.page_count3){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}	
				that.page3 = parseInt(that.page3)+parseInt(1)
				var page = that.page3; 
			} 
			
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: that.$api+'default/goods-list&cat_id='+that.currentTab+'&access_token='+that.$access_token,
				method: 'GET',
				data:{page:page},
				success: res => {
					let storeList = [];
					let item = res.data.data.list;
					for(let i in item){
						storeList.push({
							id: item[i].id,
							src: item[i].pic_url,
							title: item[i].name,
							cat_id: item[i].cat_id,
							// info: "清洁皮肤，长效保湿滋润",
							price: item[i].original_price,
							type: item[i].weight
						})
					}
					that.storeList = that.storeList.concat(storeList) 
					uni.hideLoading();
					console.log(that.storeList);
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
	.index_swiper{
		position: relative;
		.search_top{
			position: absolute;
			z-index: 5;
			width: 90%;
			left: 5%;
			top: 30upx;
			background: #fff;
			padding: 20upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 5upx;
			text{
				display: block;
				color: #9d9d9d;
				font-size: 22upx;
			}
			image{
				display: block;
				width: 31upx;
				height: 31upx !important;
			}
		}
	}
	.store_content{
		overflow: hidden;
		padding: 0 20upx;
		.store_nav{
			color: #4e4e4e;
			font-size: 28upx;
			text-align: center;
			margin-bottom: 40upx;
			view{
				padding: 20upx 10upx;
				border-bottom: 1upx solid transparent;
				display: inline-block;
				margin-left: 20upx;
				display: none;
				&.active{
					display: inline-block;
					color: #000027;
					border-bottom: 1upx solid #000;
				}
				&:last-of-type{
					// margin-right: 0;
				}
			}
		}
	}
</style>