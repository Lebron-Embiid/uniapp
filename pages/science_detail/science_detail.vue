<template>
	<view class="science_detail">
		<view class="si_question">{{question}}</view>
		<view class="si_answer">{{answer}}</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				question: "呦蓝是做什么的？",
				answer: "呦蓝是一个社交电商品牌，为呦蓝生物科技（上海）有限公司所有，拥有自主美妆品牌艾璐卡和战略合作品牌纽西之谜。同时，呦蓝也是一个知名的低成本创业平台，现拥有五大核心团队，包括迪儿团队、小猫姐团队、晴家团队、M团队和SUNNY团队，经销商人数突破二十万，帮助千千万万个平凡女性实现了经济独立，获得了自信和美丽。"
			}
		},
		onLoad(opt) {
			let that = this;
			console.log(opt)
			that.question = opt.question;
			that.answer = opt.answer;
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7;}
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
