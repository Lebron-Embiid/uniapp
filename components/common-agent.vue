<template>
	<view class="agent_box">
		<view class="agent_item" v-for="(item,index) in agentList" :key="index">
			<view class="ai_left">
				<image :src="item.avatar" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="ai_right">
				<view class="ar_time">加入时间：{{item.time}}</view>
				<view class="ar_type">{{item.type}}</view>
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
			agentList: Array
		}
	}
</script>

<style scoped lang="scss">
	.agent_box{
		.agent_item{
			background: #fff;
			padding: 25upx 20upx;
			box-sizing: border-box;
			border-bottom: 1px solid #DFDFDF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:first-of-type{
				border-top: 1px solid #EBEBEB;
			}
			.ai_left{
				color: #1a1a1a;
				font-size: 26upx;
				image{
					display: inline-block;
					vertical-align: middle;
					width: 57upx;
					height: 57upx !important;
					border-radius: 50%;
					margin: 0 15upx 8upx 0;
				}
			}
			.ai_right{
				text-align: right;
				.ar_time{
					color: #494949;
					font-size: 20upx;
					margin-bottom: 5upx;
				}
				.ar_type{
					color: #1a1a1a;
					font-size: 20upx;
				}
			}
		}
	}
</style>
