<template>
	<view class="my_promotion_box">
		<image :src="code_bg" class="code_bg" mode="widthFix"></image>
		<image :src="code_img" class="code_img" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code_bg: "../../static/tuiguang_bg.jpg",
				code_img: "../../static/code_img.jpg"
			}
		}
	}
</script>

<style scoped lang="scss">
	.code_bg{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		max-height: 100%;
		z-index: 3;
	}
	.code_img{
		position: relative;
		z-index: 5;
		width: 300upx;
		height: 300upx !important;
		top: 600upx;
		left: 50%;
		transform: translateX(-50%);
	}
	@media(max-width: 330px){
		.code_img{
			top: 500upx;
		}
	}
</style>
