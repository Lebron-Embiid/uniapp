<template>
	<view class="science_detail">
		<view class="page_bg"></view>
		<view class="si_question">{{question}}</view>
		<view class="si_answer">{{answer}}</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				question: "",
				answer: ""
			}
		},
		onLoad(opt) {
			let that = this;
			console.log(opt.id)
			uni.request({
				url: that.$api+'default/article-detail&id=1',
				data: {
					id: opt.id
				},
				method: 'GET',
				success: res => {
					that.question = res.data.data.title;
					that.answer = res.data.data.content;
				},
				fail: () => {
					uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					})
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.science_detail{
		padding: 50upx 45upx 100upx;
		box-sizing: border-box;
		background: #fff;
	}
	.si_question{
		color: #333;
		font-size: 26upx;
		margin-bottom: 20upx;
	}
	.si_answer{
		color: #333;
		font-size: 22upx;
	}
</style>
