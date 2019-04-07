<template>
	<view class="index_box">
		<view class="search_fixed">
			<view class="logo_box">
				<image :src="logo" mode="widthFix"></image>
			</view>
			<form @submit="formSubmit" class="form_box">
				<input type="text" placeholder="请输入您要搜索的关键词" value="" />
				<button formType="submit"><image src="../../static/search.png" mode=""></image></button>
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
                    <view :id="item.id" class="scroll-view-item_H" v-for="(item,index) in hot_products" :key="index">
						<div class="p_img"><image :src="item.src" mode="widthFix"></image></div>
						<view class="product_content">
							<view class="product_title">{{item.title}}</view>
							<view class="product_info">{{item.info}}</view>
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
		            <view :id="item.id" class="mater_item" v-for="(item,index) in mater_products" :key="index">
		            	<view class="m_img">
		            		<image :src="item.src" mode="widthFix"></image>
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
	import commonSwiper from "../../components/common-swiper.vue"
	import commonNews from "../../components/common-news.vue"
	export default{
		data(){
			return{
				logo: "../../static/logo.png",
				swiperList: ["../../static/index_banner.jpg","../../static/index_banner.jpg","../../static/index_banner.jpg"],
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
					{
						id:"demo1",
						src: "../../static/product_img1.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						format: "3.5g"
					},
					{
						id:"demo2",
						src: "../../static/product_img2.jpg",
						title: "艾璐卡-艾璐卡水漾唇膏",
						info: "长久保湿·丝滑质感",
						price: 118,
						format: "3.5g"
					},
					{
						id:"demo2",
						src: "../../static/product_img2.jpg",
						title: "艾璐卡-艾璐卡水漾唇膏",
						info: "长久保湿·丝滑质感",
						price: 118,
						format: "3.5g"
					}
				],
				mater_products:[
					{
						id: "mater1",
						src: "../../static/chosen_img1.jpg"
					},
					{
						id: "mater2",
						src: "../../static/chosen_img2.jpg"
					},
					{
						id: "mater3",
						src: "../../static/chosen_img1.jpg"
					}
				],
				news_list:[
					{
						id: 1,
						title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
						info: "法国时间1月20日，由艾璐卡eloo Doca...",
						look: "1.1w",
						date: "04.28",
						src: "../../static/hot_img1.jpg"
					},
					{
						id: 2,
						title: "武钢体育馆·呦蓝YOULAN周年庆典完美落幕",
						info: "2017年10月10日，武汉武钢体育馆内...",
						look: "1.1w",
						date: "04.28",
						src: "../../static/hot_img2.jpg"
					}
				]
			}
		},
		components:{
			commonSwiper,
			commonNews
		},
		methods:{
			toDetail(idx,url){
				if(idx == 0){
					uni.reLaunch({
						url: url
					})
				}else{
					uni.navigateTo({
						url: url
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.search_fixed{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
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
						width: 240upx;
						height: 240upx;
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
					}
					.product_info{
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color: #7d7d7d;
						font-size: 20upx;
						margin: 5upx 0 8upx;
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
				width: 318upx;
				height: 252upx;
			}
		}
	}
	.news_box{
		padding: 30upx 20upx 40upx;
		box-sizing: border-box;
	}
</style>
