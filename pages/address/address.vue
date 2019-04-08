<template>
	<view class="address_box">
		<view class="add_item pd10">
			<text>收货人</text>
			<view>
				<input type="text" name="username" value="" />
			</view>
		</view>
		<view class="add_item pd10">
			<text>联系电话</text>
			<view>
				<input type="text" name="phone" value="" />
			</view>
		</view>
		<view class="add_item">
			<text>所在地区</text>
			<view>
				请选择
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="add_item pd10">
			<text>详细地址</text>
			<view>
				<input type="text" name="address" value="" />
			</view>
		</view>
		<view class="fixed_save">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	page{background: #efeef3;}
	.add_item{
		background: #fff;
		padding: 25upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #2d2d2d;
		font-size: 24upx;
		border-bottom: 1px solid #F2F2F2;
		view{
			width: 60%;
			text-align: right;
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 0 7upx 25upx;
				width: 20upx;
				height: 34upx !important;
			}
		}
	}
	.fixed_save{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 20;
		button{
			background: #fe4543;
			color: #fff;
			font-size: 28upx;
			border: 0;
			border-radius: 0;
			padding: 10upx 0;
			&:after{
				border: 0;
			}
		}
	}
	.pd10{padding: 15upx 25upx;}
</style>
