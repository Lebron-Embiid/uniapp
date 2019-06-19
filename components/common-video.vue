<template>
	<view class="common_box">
		<view class="video_item" v-for="(item,index) in video_list" :key="index">
			<view class="v_poster" @click="toVideoDetail(item.id)">
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
				<block v-if="isDownload == 1">
					<view class="v_download" @click="toShare(item.title,item.poster,item.video)"><image src="../../static/share.png" mode="widthFix"></image></view>
				</block>
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
			isDownload: Number,
			video_list: Array,
			istype: Number,
		},
		methods:{
			toVideoDetail: function(e){
				if(this.istype == 0){
					uni.navigateTo({
						url: "/pages/video/video?id="+e+"&istype="+this.istype
					})
				}else{
					uni.navigateTo({
						url: "/pages/video1/video1?id="+e+"&istype="+this.istype
					})					
				}
			},
			toShare: function(title,pic,url){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 4,
					title: title,
					imageUrl: pic,
					mediaUrl: url,
					success: function (res) {
						console.log(JSON.stringify(res));
					},
					fail: function (err) {
						console.log(JSON.stringify(err));
					}
				});
			}
		}, 
	}
</script>

<style>
</style>
