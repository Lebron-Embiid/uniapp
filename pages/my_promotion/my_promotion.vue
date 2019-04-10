<template>
	<view class="my_promotion_box">
		<image src="../../static/tuiguang_bg.jpg" class="code_bg" mode="widthFix"></image>
		<image src="../../static/code_img.jpg" class="code_img" mode="widthFix"></image>
	</view>
</template>

<script>
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
		width: 253upx;
		height: 253upx !important;
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
