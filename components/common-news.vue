<template>
	<view class="common_news">
		<view class="news_item" v-for="(item,index) in news_list" @click="toNewsDetail(item.id)" :key="index">
			<view class="item_left">
				<view class="news_title">{{item.title}}</view>
				<view class="news_info">{{item.info}}</view>
				<view class="news_icon">
					<view><image src="../../static/news_icon1.png" mode="widthFix"></image>{{item.look}}</view>
					<view><image src="../../static/news_icon2.png" mode="widthFix"></image>{{item.date}}</view>
				</view>
			</view>
			<view class="item_right">
				<image :src="item.src" lazy-load="true" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			news_list: Array
		},
		methods:{
			toNewsDetail: function(e){
				uni.navigateTo({
					url: "/pages/news_detail/news_detail?id="+e
				})
			}
		}
	}
</script>

<style>
</style>
