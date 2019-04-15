<template>
	<view class="logistics_box">
		<view class="logist_top">
			<view class="lt_img"><image src="../../static/order_img1.jpg" mode="widthFix"></image><view>1件商品</view></view>
			<view class="lt_word">
				<view>快递公司<text>{{express}}</text></view>
				<view>快递单号<text>{{express_no}}</text></view>
				<view>官方电话<text class="red">{{phone}}</text></view>
			</view>
		</view>
		<view class="logist_content">
			<view class="lc_remark"><image src="../../static/car_icon1.png" mode="widthFix"></image>物流信息</view>
			<view class="logist_box">
				<view class="logist_item" v-for="(item,index) in logists" :key="index">
					<view class="li_box">
						<view class="li_title">{{item.title}}</view>
						<view class="li_time">{{item.time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				express: "",
				express_no: "",
				phone: "",
				logists:[
// 					{
// 						title: "【深圳市】快件已送到代收点，感谢使用中通快递，期待再次为您服务！",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【深圳市】快件已到达 【深圳爱联】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【深圳市】 快件离开 【深圳中心】 发往 【深圳爱联】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【深圳市】 快件到达 【深圳中心】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【嘉兴市】 快件离开 【杭州中转部】 发往 【深圳中心】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【嘉兴市】 快件到达 【杭州中转部】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "【杭州市】 快件离开 【杭州临平区】 发往 【深圳中心】",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "已发货",
// 						time: "2018-11-23 19:28:12"
// 					},
// 					{
// 						title: "已下单",
// 						time: "2018-11-23 19:28:12"
// 					}
				]
			}
		},
		onLoad(opt) {
			var that = this;
			uni.request({
				url: that.$api+'order/express-detail&order_id=5&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.express = res.data.data.express;
					that.express_no = res.data.data.express_no;
					for(let i in res.data.data.list){
						var list = [];
						list.push({
							title: res.data.data.list[i].detail,
							time: res.data.data.list[i].datetime
						})
					}
					that.logists = list
				},
				fail: () => {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 1500
					})					
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	.logist_top{
		padding: 30upx;
		box-sizing: border-box;
		overflow: hidden;
		border-bottom: 18upx solid #f3f3f3;
		.lt_img{
			width: 176upx;
			height: 176upx;
			float: left;
			margin-right: 50upx;
			border: 1px solid #E7E7E7;
			position: relative;
			image{
				display: block;
				width: 176upx;
				height: 176upx !important;
			}
			view{
				position: absolute;
				width: 100%;
				height: 42upx;
				line-height: 42upx;
				color: #fff;
				font-size: 18upx;
				background: rgba(0,0,0,.60);
				left: 0;
				bottom: 0;
				z-index: 3;
				text-align: center;
			}
		}
		.lt_word{
			color: #333;
			font-size: 22upx;
			view{
				margin: 5upx 0 12upx;
				text{
					margin-left: 25upx;
					&.red{
						color: #fa3d34;
					}
				}
			}
		}
	}
	.logist_content{
		padding-bottom: 60upx;
		.lc_remark{
			padding: 25upx 30upx 20upx;
			box-sizing: border-box;
			color: #282828;
			font-size: 24upx;
			border-bottom: 1px solid #F0F0F0;
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 15upx 6upx 0;
				width: 37upx;
				height: 29upx !important;
			}
		}
		.logist_box{
			padding: 0 30upx;
			.logist_item{
				padding-left: 40upx;
				position: relative;
				:before{
					content: "";
					display: block;
					width: 1px;
					height: 100%;
					position: absolute;
					left: 10upx;
					top: 0;
					background: #E2E2E2;
					z-index: 1;
				}
				:after{
					content: "";
					display: block;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: #ccc;
					position: absolute;
					left: 0;
					top: 35upx;
					z-index: 2;
				}
				.li_box{
					padding: 30upx 0 20upx;
					border-bottom: 1px solid #F1F1F1;
					.li_title{
						color: #333;
						font-size: 22upx;
						margin-bottom: 5upx;
					}
					.li_time{
						color: #666;
						font-size: 20upx;
					}
				}
				&:first-of-type{
					.li_box{
						.li_title{
							color: #fa3d34;
						}
					}
					:after{
						background: #fa3d34;
					}
				}
			}
		}
	}
</style>
