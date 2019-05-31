<template>
	<view class="index_box">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->  
		<view class="search_fixed">
			<view class="logo_box">
				<image :src="logo" mode="widthFix"></image>
			</view>
			<form @click="toSearch" class="form_box" hover-class="active">
				<input type="text" disabled placeholder="请输入您要搜索的关键词" value="" />
				<button><image src="/static/search.png" mode=""></image></button>
			</form>
		</view>
		<view class="uni-padding-wrap mt130">
            <view class="index_swiper">
				<commonSwiper :swiperList="swiperList"></commonSwiper>
            </view>
        </view>
		<view class="index_nav">
			<view class="nav_item" @click="toDetail(index,item.url)" v-for="(item,index) in navList" :key="index">
				<image :src="item.src" mode="widthFix"></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<view class="hot_product uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
                <text>热销产品</text>
            </view>
            <view class="scroll_box">
                <scroll-view class="scroll-view_H" scroll-x="true">
                    <view :id="item.ref" class="scroll-view-item_H" v-for="(item,index) in hot_products" @click="toProductDetail(item.id,item.cat_id)" :key="index">
						<div class="p_img"><image :src="item.src" mode="widthFix"></image></div>
						<view class="product_content">
							<view class="product_title">{{item.title}}</view>
							<view class="product_price">￥{{item.price}}<text>规格：{{item.format}}</text></view>
						</view>
					</view>
                </scroll-view>
            </view>
		</view>
		<view class="featured_material uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
		        <text>精选素材</text>
		    </view>
		    <view class="scroll_box">
		        <scroll-view class="scroll-view" scroll-x="true">
		            <view class="mater_item" v-for="(item,index) in mater_products" @click="toMaterDetail(item.id)" :key="index">
		            	<view class="m_img">
		            		<image :src="item.src" mode="aspectFill"></image>
		            	</view>
		            </view>
		        </scroll-view>
		    </view>
		</view>
		<view class="hot_news">
			<view class="uni-title">
		        <text>热门资讯</text>
		    </view>
			<view class="news_box">
				<commonNews :news_list="news_list"></commonNews>
			</view>
		</view>
	</view>
</template>

<script>
	import commonSwiper from "@/components/common-swiper.vue"
	import commonNews from "@/components/common-news.vue"
	import date from "@/common/util.js"
	export default{
		data(){
			return{
				logo: "../../static/logo.png",
				swiperList: [
					// "../../static/index_banner.jpg","../../static/index_banner.jpg","../../static/index_banner.jpg",
					],
				navList:[
					{
						url: "/pages/train/train",
						src: "../../static/nav_icon1.png",
						text: "培训"
					},{
						url: "/pages/news/news",
						src: "../../static/nav_icon2.png",
						text: "资讯"
					},{
						url: "/pages/science/science",
						src: "../../static/nav_icon3.png",
						text: "呦蓝百科"
					},{
						url: "/pages/about/about",
						src: "../../static/nav_icon4.png",
						text: "关于我们"
					}
				],
				hot_products:[
// 					{
// 						id: 1,
// 						ref:"demo1",
// 						src: "../../static/product_img1.jpg",
// 						title: "艾璐卡-山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳",
// 						info: "清洁皮肤，长效保湿滋润",
// 						price: 98,
// 						format: "3.5g"
// 					}
				],
				mater_products:[
// 					{
// 						id: 1,
// 						src: "../../static/chosen_img1.jpg"
// 					}
				],
				news_list:[
// 					{
// 						id: 1,
// 						title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
// 						info: "法国时间1月20日，由艾璐卡eloo Doca...",
// 						look: "1.1w",
// 						date: "04.28",
// 						src: "../../static/hot_img1.jpg"
// 					}
				]
			}
		},
		components:{
			commonSwiper,
			commonNews
		},
		methods:{
			toDetail: function(idx,url){
				if(idx == 0){
					uni.reLaunch({
						url: url
					})
				}else{
					uni.navigateTo({
						url: url
					})
				}
			},
			toProductDetail: function(id,cat_id){ 
				if(this.$level == 4){
					uni.navigateTo({
						url: "/pages/store_detail/store_detail?id="+id
					})
					return false
				}
				if(cat_id != this.$level && cat_id != 3){
					uni.showToast({
						title:"你不是此商品的代理，没有权限购买",
						icon:'none',
					});
				     return false
				} 
 				uni.navigateTo({
					url: "/pages/store_detail/store_detail?id="+id
				})
			},
			toMaterDetail: function(e){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+e
				})
			},
			toSearch: function(e){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		},
		onShow:function(){
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			if(that.$access_token == ""){
				uni.showToast({
					title: "请先登录！",
					icon: "none",
					duration: 2000
				})
				setTimeout(function(){
					uni.reLaunch({
						url: "/pages/login/login"
					})
				},2000)
			}
		},
		onLoad() {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
		
			console.log(that.$access_token);
			console.log(that.$level);
			// setTimeout(function () {	
			uni.request({
				url: that.$api+'default/index',
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var article = [];
					var mater_products = [];
					var hot_products = [];
					var swiperList = [];
					var item = res.data.data;
					for(let i in item.article){
						article.push({
							id: item.article[i].id,
							title: item.article[i].title,
							info: item.article[i].describe,
							look: item.article[i].num,
							date: date.formatDate(parseInt(item.article[i].addtime)),
							src: item.article[i].cover_pic
						})
					}
					for(let i in item.list){
						mater_products.push({
							id: item.list[i].id,
							src: item.list[i].cover_pic
						})
					}
					for(let i in item.goods){
						hot_products.push({
							id: item.goods[i].id,
							src: item.goods[i].cover_pic,
							cat_id: item.goods[i].cat_id,
							title: item.goods[i].name,
							// info: "清洁皮肤，长效保湿滋润",
							price: item.goods[i].price,
							format: item.goods[i].gauge, 
						})
					}
					for(let i in item.nav){
						swiperList.push(item.nav[i].pic_url)
					}
					that.news_list = article;
					that.mater_products = mater_products;
					that.hot_products = hot_products;
					that.swiperList = swiperList;
				},
				fail: () => {
					uni.showToast({title:res.data.msg,icon:'none'});
				}
			})
			// }, 1000);
			// uni.startPullDownRefresh(); 
		},
		// onPullDownRefresh() {
		// 	var that = this;
		// 	setTimeout(function () {
		// 		uni.request({
		// 			url: that.$api+'default/index',
		// 			method: 'GET',
		// 			dataType: "json",
		// 			header: {
		// 				'content-type': 'application/x-www-form-urlencoded'
		// 			},
		// 			success: res => {
		// 				var article = [];
		// 				var mater_products = [];
		// 				var hot_products = [];
		// 				var swiperList = [];
		// 				var item = res.data.data;
		// 				for(let i in item.article){
		// 					article.push({
		// 						id: item.article[i].id,
		// 						title: item.article[i].title,
		// 						info: item.article[i].describe,
		// 						look: item.article[i].num,
		// 						date: date.formatDate(parseInt(item.article[i].addtime)),
		// 						src: item.article[i].cover_pic
		// 					})
		// 				}
		// 				for(let i in item.list){
		// 					mater_products.push({
		// 						id: item.list[i].id,
		// 						src: item.list[i].cover_pic
		// 					})
		// 				}
		// 				for(let i in item.goods){
		// 					hot_products.push({
		// 						id: item.goods[i].id,
		// 						src: item.goods[i].cover_pic,
		// 						cat_id: item.goods[i].cat_id,
		// 						title: item.goods[i].name,
		// 						// info: "清洁皮肤，长效保湿滋润",
		// 						price: item.goods[i].price,
		// 						format: item.goods[i].gauge, 
		// 					})
		// 				}
		// 				for(let i in item.nav){
		// 					swiperList.push(item.nav[i].pic_url)
		// 				}
		// 				that.news_list = article;
		// 				that.mater_products = mater_products;
		// 				that.hot_products = hot_products;
		// 				that.swiperList = swiperList;
		// 			},
		// 			fail: () => {
		// 				uni.showToast({title:res.data.msg,icon:'none'});
		// 			}
		// 		})
		// 		uni.stopPullDownRefresh();
		// 	}, 1000);
		// }
	}
</script>

<style scoped lang="scss">
	.search_fixed{
		position: fixed;
		width: 100%;
		left: 0;
		top: var(--status-bar-height);
		z-index: 20;
		background: #00001f;
		padding: 0 20upx;
		box-sizing: border-box;
		height: 130upx;
		overflow: hidden;
		.logo_box{
			float: left;
			width: 117upx;
			height: 68upx;
			padding-top: 25upx;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
	.index_nav{
		padding: 30upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
		.nav_item{
			width: 25%;
			float: left;
			text-align: center;
			image{
				display: block;
				width: 88upx;
				height: 88upx;
				margin: 0 auto 5upx;
			}
			text{
				color: #160c11;
				font-size: 28upx;
			}
		}
	}
	.hot_product,.featured_material,.hot_news{
		.uni-title{
			color: #fff;
			font-size: 30upx;
			background: #000027;
			text-align: center;
			padding: 8upx 0 12upx;
		}
		.scroll_box{
			padding: 40upx 0 30upx 20upx;
			box-sizing: border-box;			
		}
	}
	.hot_product{
		.scroll-view_H{
			white-space: nowrap;
			.scroll-view-item_H{
				display: inline-block;
				width: 310upx;
				margin-right: 40upx;
				.p_img{
					padding: 10upx 0;
					border-right: 1upx solid #eee;
					margin: 0 auto 20upx;
					image{
						display: block;
						width: 250upx;
						height: 230upx;
						margin: 0 auto;
					}
				}
				&:last-of-type{
					margin-right: 0;
					.p_img{
						border-right: 0;
					}
				}
				.product_content{
					padding-right: 20upx;
					.product_title{
						color: #160c11;
						font-size: 22upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 8upx;
					}
					.product_info{
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color: #7d7d7d;
						font-size: 20upx;
						// margin: 5upx 0 8upx;
					}
					.product_price{
						color: #00001f;
						font-size: 24upx;
						text{
							float: right;
							color: #4d4d4d;
							font-size: 18upx;
						}
					}
				}
			}
		}
	}
	.featured_material{
		white-space: nowrap;
		.mater_item{
			display: inline-block;
			margin-right: 20upx;
			border-radius: 5upx;
			overflow: hidden;
			image{
				display: block;
				width: 224upx;
				height: 340upx !important;
				// width: 318upx;
				// height: 252upx;
			}
		}
	}
	.news_box{
		padding: 30upx 20upx 40upx;
		box-sizing: border-box;
	}
</style>
