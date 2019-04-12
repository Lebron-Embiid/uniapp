<template>
	<view class="store_box">
		<view class="index_swiper">
			<view class="search_top" @click="toSearch"><text>请输入您要搜索的关键词</text><image src="../../static/search.png" mode="widthFix"></image></view>
			<commonSwiper :swiperList="swiperList"></commonSwiper>
		</view>
		<view class="store_content">
			<view class="store_nav">
				<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
			<view class="store_list" v-show="currentTab == 0">
					<commonStore :storeList="storeList1"></commonStore>
			</view>
			<view class="store_list" v-show="currentTab == 1">
					<commonStore :storeList="storeList2"></commonStore>
			</view>
		</view>
	</view>
</template>

<script>
	import commonSwiper from "@/components/common-swiper.vue"
	import commonStore from "@/components/common-store.vue"
	export default{
		data(){
			return{
				swiperList: ["../../static/store_banner.jpg","../../static/store_banner.jpg","../../static/store_banner.jpg"],
				scrollLeft: 0,
				tabIndex: 0,
				navbar: [
					{ name: '艾璐卡' },{ name: '纽西之谜'}
				],
				currentTab:0,
				storeList1:[
					{
						id: 1,
						src: "../../static/store_img1.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 2,
						src: "../../static/store_img2.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 3,
						src: "../../static/store_img3.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 4,
						src: "../../static/store_img4.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					}
				],
				storeList2:[
					{
						id: 5,
						src: "../../static/store_img5.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 6,
						src: "../../static/store_img6.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 7,
						src: "../../static/store_img7.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					},
					{
						id: 8,
						src: "../../static/store_img8.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					}
				]
			}
		},
		components:{
			commonSwiper,
			commonStore
		},
		methods:{
			navbarTap: function(e){
				console.log(e)
				this.currentTab = e;
			},
			toSearch: function(e){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
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
				&.active{
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