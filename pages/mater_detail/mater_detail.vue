<template>
	<view class="mater_detail">
		<view class="photo_head">
			<image :src="avatar" class="avatar_img" mode="widthFix"></image>
			<text class="ph_name">{{name}}</text>
			<block v-if="sign == 'true'">
				<text class="ph_sign">精选</text>
			</block>
			<text class="ph_txt">{{time}}</text>
		</view>
		<view class="photo_content">
			<view class="pc_item" @click="downloadMater(idx)" v-for="(mater,idx) in maters" :key="idx">
				<image :src="mater" class="c_img" mode="widthFix"></image>
				<image src="../../static/download.png" class="download_icon" mode="widthFix"></image>
			</view>
		</view>
		<view class="photo_bottom">
			<view class="pb_share"><image src="../../static/share.png" mode="widthFix"></image>一键转发</view>
			<view class="pb_num">浏览：{{num}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name: "",
				avatar: "",
				time: "",
				num: 0,
				sign: "",
				maters: []
			}
		},
		methods:{
			downloadMater: function(e){
				let that = this;
				uni.downloadFile({
					url: that.maters[e],
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
// 							uni.saveImageToPhotosAlbum({
// 								filePath: res.tempFilePath,
// 								success: function () {
// 									console.log('save success');
// 								}
// 							});
						}
					}
				});
			}
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: "/pages/release_mater/release_mater"
			})
		},
		onLoad(opt) {
			let that = this;
			that.name = opt.name;
			that.avatar = opt.avatar;
			that.time = opt.time;
			that.num = opt.num;
			that.sign = opt.sign;
			that.maters = opt.maters.split(",");
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7;}
	.mater_detail{
		padding: 60upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.photo_head{
		overflow: hidden;
		color: #00001f;
		font-size: 22upx;
		margin-bottom: 20upx;
		.avatar_img{
			display: inline-block;
			vertical-align: middle;
			width: 41upx;
			height: 41upx !important;
			margin: 0 10upx 6upx 0;
		}
		.ph_name{
			display: inline-block;
			vertical-align: middle;
			margin: 0 10upx 8upx 0;
			width: 130upx;
			max-width: 130upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.ph_txt{
			color: #6d6d6d;
			font-size: 20upx;
			float: right;
			margin-top: 8upx;
		}
		.ph_sign{
			color: #fff;
			font-size: 22upx;
			background: #f00;
			border-radius: 5upx;
			padding: 5upx 10upx 6upx;
		}
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
	.photo_bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		.pb_share{
			color: #282842;
			font-size: 20upx;
			image{
				display: inline-block;
				vertical-align: middle;
				width: 30upx;
				height: 32upx !important;
				margin: 0 20upx 5upx 0;
			}
		}
		.pb_num{
			color: #6d6d6d;
			font-size: 20upx;
		}
	}
</style>
