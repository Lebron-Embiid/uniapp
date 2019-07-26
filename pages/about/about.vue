<template>
	<view class="about_box">
		<view class="page_bg"></view>
		<image :src="logo" class="logo_img" mode="widthFix"></image>
		<view class="about_title">{{title}}</view>
		<view class="about_content">
			<block v-if="content!=''">
				<u-parse :content="content"></u-parse>
			</block>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default{
		data(){
			return{
				title: "",
				logo: "",
				content: ""
			}
		},
		components:{
			uParse
		},
		onLoad(opt) {
			var that = this;
			uni.request({
				url: that.$api+'default/about',
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var item = res.data.about;
					that.title = item.title;
					that.logo = item.cover_pic;
					that.content = item.content;
				},
				fail: (res) => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.about_box{
		padding: 40upx 20upx;
		box-sizing: border-box;
		background: #fff;
		.logo_img{
			display: block;
			width: 250upx;
			height: 145upx;
			margin: 0 auto 50upx;
		}
		.about_title{
			color: #00001f;
			font-size: 28upx;
			text-align: center;
			margin-bottom: 30upx;
		}
		.about_content{
			color: #151515;
			font-size: 22upx;
			line-height: 1.5;
			.ac_box{
				margin-top: 25upx;
				.ac_head{
					color: #000;
					font-size: 24upx;
				}
				.ac_part{
					color: #000;
					font-size: 20upx;
				}
			}
		}
	}
</style>
