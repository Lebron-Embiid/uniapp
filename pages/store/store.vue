<template>
	<view class="store_box">
		<view class="index_swiper">
			<view class="search_top"><text>请输入您要搜索的关键词</text><image src="../../static/search.png" mode="widthFix"></image></view>
		    <view class="page-section-spacing">
		        <swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval" :duration="duration">
		            <swiper-item v-for="(item,index) in swiperList" :key="index">
		                <view class="swiper-item"><image :src="item" mode="widthFix"></image></view>
		            </swiper-item>
		        </swiper>
		    </view>
		</view>
		<view class="store_content">
			<view class="store_nav">
				<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
					<view v-for="(tab, index) in tabBars" :key="tab.ref" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
					 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 800,
				swiperList: ["../../static/store_banner.jpg","../../static/store_banner.jpg","../../static/store_banner.jpg"],
				scrollLeft: 0,
				tabIndex: 0,
				tabBars: [
					{
						name: '艾璐卡',
						id: 0,
						ref: 'nav1'
					},{
						name: '纽西之谜',
						id: 1,
						ref: 'nav2'
					}
				]
			}
		},
		methods:{
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize('tab-bar'),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.tabIndex = index;
				}
			},
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
	.swiper{
		height: 428upx;
		.swiper-item image{
			display: block;
			width: 100%;
		}
	}
</style>
