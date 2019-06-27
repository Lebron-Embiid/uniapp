<template>
	<view class="agent_box">
		<view class="agent_item" v-for="(item,index) in agentList" :key="index">
			<view class="ai_left">
				<view class="ai_img">
					<image :src="item.avatar" mode="widthFix"></image>
					<span :class="[item.user_team == '' || item.user_team == null?'':'active']">{{item.user_team}}</span>
				</view>
				<view class="ai_info">
					<text>{{item.nickname}}</text>
					<view>{{item.username}}</view> 
				</view>
			</view>
			<view class="ai_right">
				<view class="ar_time">加入时间：{{item.addtime}}</view>
				<view class="ar_type" style="color: #FF4544;">					
						<text>A{{item.level}}</text>
						<text>N{{item.west}}</text> 			 
				</view>
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
				width: 60%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.ai_img{
					display: inline-block;
					width: 57upx;
					height: 57upx;
					margin-right: 30upx;
					position: relative;
					span{
						display: none;
						position: absolute;
						width: 30upx;
						height: 30upx;
						line-height: 30upx;
						right: -5upx;
						bottom: -5upx;
						border-radius: 50%;
						color: #fff;
						font-size: 18upx;
						background: #f00;
						text-align: center;
						&.active{
							display: block;
						}
					}
					image{
						display: inline-block;
						vertical-align: middle;
						width: 100%;
						height: 100% !important;
						border-radius: 50%;
						margin: 0 15upx 8upx 0;
					}
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
					text{
						margin-left: 10upx;
					}
				}
			}
		}
	}
</style>
