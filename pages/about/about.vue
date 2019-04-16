<template>
	<view class="about_box">
		<view class="page_bg"></view>
		<image :src="logo" mode="widthFix"></image>
		<view class="about_title">{{title}}</view>
		<view class="about_content">
			{{content}}
			<!-- <view>呦蓝致力于从世界各地优选美丽臻品，为中国消费者奉上自然、健康、安全、有效的美肤方案。秉承“生产和提供全球美丽臻品”的理念，呦蓝推出自有法国进口品牌“艾璐卡”，并与新西兰国宝级护肤品牌——纽西之谜达成战略合作。呦蓝以开放的姿态，携手创业女性，持续为顾客提供优质进口护肤品，帮助创业女性实现个人价值，释放个人潜能，提升收入水平。</view>
			<view class="ac_box">
				<view class="ac_head">呦蓝使命</view>
				<view class="ac_part">助力平凡女性创业，成就富足人生</view>
			</view>
			<view class="ac_box">
				<view class="ac_head">呦蓝愿景</view>
				<view class="ac_part">成为社交电商领域进口护肤品领导品牌</view>
			</view>
			<view class="ac_box">
				<view class="ac_head">呦蓝价值观</view>
				<view class="ac_part">聆听女性，激发潜能，至臻至美，创造卓越，回馈社会</view>
			</view>
			<view class="ac_box">
				<view class="ac_head">经营理念</view>
				<view class="ac_part">优选全球美丽臻品，赋予平凡女性创业更有价值的产品和平台</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title: "呦蓝YOULAN",
				logo: "",
				content: ""
			}
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
				fail: () => {
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
		image{
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
