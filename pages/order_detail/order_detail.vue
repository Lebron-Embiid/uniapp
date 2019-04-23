<template>
	<view class="order_detail_box">
		<view class="order_top">
			<image src="../../static/order_bg.jpg" class="order_bg" mode="widthFix"></image>
			<view class="ot_layer">
				<view class="ot_word">
					<view>订单状态：已发货</view>
					<view>订单号：{{orders.order_no}}</view>
					<view>下单时间：{{orders.addtime}}</view>
				</view>
				<image src="../../static/car.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="order_info bb12">
			<!-- <view class="order_next" @click="toLogistics(id)"> -->
			<view class="order_next" v-if="orders.express_no != ''">
				<image src="../../static/car_icon1.png" class="icon" mode="widthFix"></image>
				<view class="on_center">
					<view class="oc_title">物流公司:{{orders.express}}</view>
					<view class="oc_time">物流单号:{{orders.express_no}}</view>
				</view>
				<!-- <image src="../../static/next.png" class="next" mode="widthFix"></image> -->
			</view>
			<view class="oi_name">{{orders.name}} <text>{{orders.mobile}} </text></view>
			<view class="oi_address"><image src="../../static/car_icon2.png" mode="widthFix"></image>{{orders.address}} </view>
		</view>
		<view class="order_content bb12">
			<view class="oc_remark">商品信息</view>
			<view class="order_item" v-for="(item,index) in orders.goods_list" :key="index">
				<view class="oi_left"><image :src="item.goods_pic" mode="widthFix"></image></view>
				<view class="oi_center">
					<view class="oi_title">{{item.name}}</view>
					<view class="oi_info"><text v-for="(attr,idx) in item.attr" :key="idx">{{attr.attr_group_name}}: {{attr.attr_name}}</text></view>
<!-- 					<view class="oi_type">规格：{{item.type}}</view>
 -->				</view>
				<view class="oi_right">
					<view class="oi_price">￥{{item.total_price}} <text class="oi_num">x{{item.num}}</text></view>
					<!-- <view class="oi_num">x{{item.num}}</view> -->
				</view>
			</view>
		</view>
		<!-- <view class="order_mess bb12"> -->
			<!-- <view class="om_remark">订单信息</view> -->
			<!-- <view class="om_item">配送方式：快递</view> -->
			<!-- <view class="om_item">创建时间：{{orders.addtime}}</view> -->
		<!-- </view> -->
		<view class="order_money">
			<view class="money_item">商品总价<text>￥{{orders.goods_total_price}}</text></view>
			<view class="money_item">配送费<text>￥{{orders.express_price}}</text></view>
			<view class="money_item">实付款<text class="red">￥{{orders.pay_price}}</text></view>
			<view class="money_btn">
				<!-- <button @click="toLogistics(id)">查看物流</button> -->
				<!-- <button class="ok" @click="toConfirm(id)">确认收货</button> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id: 1,
				orders:[
					{
						id: 1,
						time: "2019-03-20 15:21",
						status: true,
						statusText: "等待您的付款",
						img: "../../static/order_img1.jpg",
						title: "艾璐卡柔雾丝绒唇釉",
						info: "持久滋润·饱满显色·细腻亮泽·抚平唇纹",
						type: "6.8ml",
						price: 168,
						num: 1,
						pay: 168,
						finish: false
					}
				]
			}
		},
		methods:{
			toLogistics: function(e){
				uni.navigateTo({
					url: "/pages/logistics/logistics?id="+e
				})
			},
			toConfirm: function(e){
				var that = this;
				uni.request({
					url: that.$api+'order/confirm&order_id='+e+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
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
		},
		onLoad(opt) {
			var that = this;
			that.id = opt.id; 
			uni.request({
				url: that.$api+'order/detail&order_id='+that.id+'&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var orders = res.data.data;
					that.orders = orders;
					console.log(that.orders)
					 
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
	.order_top{
		position: relative;
		border-bottom: 6upx solid #f3f3f3;
		.order_bg{
			display: block;
			width: 100%;
			height: 200upx !important;
		}
		.ot_layer{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 5;
			padding: 0 25upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.ot_word{
				color: #fff;
				font-size: 24upx;
				view{
					margin-bottom: 5upx;
				}
			}
			image{
				// display: block;
				width: 99upx;
				height: 75upx !important;
				margin-right: 25upx;
				display: none;
			}
		}
	}
	.order_info{
		padding: 0 20upx 40upx;
		.order_next{
			padding: 25upx 0;
			border-bottom: 1px solid #E9E9E9;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icon{
				display: block;
				width: 37upx;
				height: 29upx !important;
			}
			.on_center{
				width: 90%;
				font-size: 20upx;
				.oc_title{
					color: #000;
					margin-bottom: 5upx;
				}
				.oc_time{
					color: #000;
				}
			}
			.next{
				display: block;
				width: 20upx;
				height: 34upx !important;
			}
		}
		.oi_name{
			color: #333;
			font-size: 24upx;
			margin: 30upx 0 20upx;
			text{
				margin-left: 25upx;
			}
		}
		.oi_address{
			color: #666;
			font-size: 20upx;
			image{
				display: inline-block;
				vertical-align: middle;
				width: 37upx;
				height: 29upx !important;
				margin: 0 5upx 5upx 0;
			}
		}
	}
	.oc_remark,.om_remark{
		padding-bottom: 10upx;
		border-bottom: 1px solid #F7F7F9;
		color: #333;
		font-size: 24upx;
	}
	.order_content{
		padding: 25upx 20upx 0;
		box-sizing: border-box;
		.order_item{
			overflow: hidden;
			padding: 10upx;
			box-sizing: border-box;
			// border-bottom: 1px solid #F7F7F9;
			.oi_left{
				float: left;
				margin: 10upx 30upx 0 0;
				width: 140upx;
				height: 140upx;
				border: 1px solid #EAEAEA;
				image{
					display: block;
					width: 139upx;
					height: 139upx !important;
				}
			}
			.oi_center{
				float: left;
				width: 70%;
				.oi_title{
					color: #1f1f1f;
					font-size: 26upx;
					margin: 10upx 0 5upx;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					word-break: break-all;
				}
				.oi_info,.oi_type{
					color: #747474;
					font-size: 22upx;
					margin-bottom: 10upx;
				}
				.oi_type{
					margin-bottom: 0;
				}
			}
			.oi_right{
				// float: right;
				.oi_price{
					color: #797979;
					font-size: 24upx;
					margin: 10upx 0 6upx;
					.oi_num{
						float: right;
						color: #868686;
						font-size: 20upx;
					}
				}
			}
		}
	}
	.order_mess{
		padding: 25upx 20upx 0;
		overflow: hidden;
		box-sizing: border-box;
		.om_item{
			padding: 20upx 0;
			color: #797979;
			font-size: 20upx;
			border-bottom: 1px solid #E5E5E5;
			&:last-of-type{
				border-bottom: 0;
			}
		}
	}
	.order_money{
		padding: 0 20upx;
		box-sizing: border-box;
		.money_item{
			padding: 20upx 0;
			color: #333;
			font-size: 20upx;
			border-bottom: 1px solid #E5E5E5;
			overflow: hidden;
			text{
				float: right;
				&.red{
					color: #fa3930;
				}
			}
		}
		.money_btn{
			margin-top: 20upx;
			text-align: right;
			button{
				display: inline-block;
				color: #333;
				font-size: 24upx;
				background: #fff;
				border: 1px solid #9B9B9B;
				margin-left: 25upx;
				&.ok{
					color: #fa3930;
					border: 1px solid #fa3930;
				}
				&:after{
					border: 0;
				}
			}
		}
	}
	.bb12{
		border-bottom: 12upx solid #f3f3f3;
	}
</style>
