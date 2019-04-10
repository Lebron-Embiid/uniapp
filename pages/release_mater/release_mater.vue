<template>
	<view class="release_mater">
		<view class="release_box">
			<view class="release_item item_box" v-for="(item,index) in photos" :key="index">
				<image :src="item" class="photo_img" @click="previewPhoto(index)" mode="widthFix"></image>
				<image src="../../static/close.png" class="close_img" @click="deletePhoto(index)" mode="widthFix"></image>
			</view>
			<view class="release_btn item_box" @click="selectPhoto">
				<view class="btn_box">
					<image src="../../static/release_btn.png" mode="widthFix"></image>
					<text>上传素材</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				photos: []
			}
		},
		methods:{
			selectPhoto: function(e){
				var that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						var len = res.tempFilePaths.length;
						for(var i=0;i<len;i++){
							uni.getImageInfo({
								src: res.tempFilePaths[i],
								success: function (image) {
									console.log(image)
								}
							});
							that.photos.push(res.tempFilePaths[i])
						}
					}
				});
			},
			previewPhoto: function(e){
				var that = this;
				uni.previewImage({
					urls: that.photos,
					current: that.photos[e]
				});
			},
			deletePhoto: function(e){
				uni.showModal({
					title: "提示",
					content: "确定删除图片？",
					success: (res) => {
						if(res.confirm){
							this.photos.splice(e, 1);
						}
					}
				})
				
			}
		},
		onNavigationBarButtonTap: function(){
			uni.showModal({
				title: "提示",
				content: "确定发布？",
				success: (res) => {
					if(res.confirm){
						uni.navigateBack({
							delta: 1
						})
					}else{
						console.log(this.photos)
					}
				},
				fail: (err) => {
					console.log(err)
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.release_box{
		background: #fff;
		padding: 40upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.release_item{
		float: left;
		margin: 0 20upx 20upx 0;
		position: relative;
		.photo_img{
			display: block;
			width: 220upx;
			height: 270upx !important;
		}
		.close_img{
			display: block;
			width: 50upx;
			height: 50upx !important;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
		}
	}
	.release_btn{
		float: left;
		border: 1px dashed #EDEDED;
		width: 220upx;
		height: 270upx;
		margin: 0 20upx 20upx 0;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #9e9e9e;
		font-size: 24upx;
		image{
			display: block;
			width: 57upx;
			height: 47upx !important;
			margin: 0 auto 10upx;
		}
	}
	.item_box:nth-of-type(3n){
		margin-right: 0;
	}
</style>
