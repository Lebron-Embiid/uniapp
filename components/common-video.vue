<template>
	<view class="common_box">
		<view class="video_item" v-for="(item,index) in video_list" :key="index" @click="toVideoDetail(item)">
			<view class="v_poster">
				<image :src="item.poster" class="poster_img" mode="widthFix"></image>
				<view class="v_play">
					<image src="../../static/play_btn.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="v_info">
				<view class="head_img">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="v_title">{{item.title}}</view>
				<view class="v_look">观看数：{{item.look}}</view>
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
			video_list: Array
		},
		methods:{
			toVideoDetail: function(res){
				uni.navigateTo({
					url: "/pages/video/video?id="+res.id+"&video="+res.video
				})
			}
		}
	}
</script>

<style>
</style>
