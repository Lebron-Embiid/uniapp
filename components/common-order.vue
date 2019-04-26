<template>
	<view class="order_box">
		<view class="order_item" v-for="(item,index) in orderList" :key="index">
			<view class="order_top">
				<view>订单号：{{item.order_no}}</view>
				<view><image src="../../static/clock.png" mode="widthFix"></image>{{item.time}}</view>
				<!-- <text :class="[item.status?'active':'']">{{item.statusText}}</text> -->
			</view>
			<view class="order_info" @click="toOrderDetail(item.id)" v-for="(goods,idx) in item.goods" :key="idx">
				<view class="oi_left"><image :src="goods.goods_pic" mode="widthFix"></image></view>
				<view class="oi_center">
					<view class="oi_title">{{goods.goods_name}}</view>
					<view class="oi_info"><text v-for="(attr,idx) in goods.attr_list" :key="idx">{{attr.attr_group_name}}: {{attr.attr_name}}</text></view>
					<!-- <view class="oi_type">规格：{{goods.type}}</view> -->
				</view>
				<view class="oi_right">
					<view class="oi_price">￥{{goods.price}}</view>
					<view class="oi_num">x{{goods.num}}</view>
				</view>
			</view>
			<view class="order_bottom">
				<view class="ob_price"><view>商品实付：<text>￥{{item.pay}}</text></view></view>
				<view class="ob_btn">
					<block v-if="item.is_pay == 0 && current == 0">
						<button @click="toCancle(item.id)">取消订单</button>
						<button @click="toPay(item.id)">去支付</button>
					</block>
					<block v-if="item.is_send == 1 && current == 2">
						<button @click="queryOrder(item.id)">确认收货</button>
					</block>
					<block v-if="item.is_comment == 0 && current == 3">
						<button @click="toOrderDetail(item.id)">评价</button>
					</block>
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
			current: Number,
			orderList: Array
		},
		methods:{
			toPay: function(e){
				var that = this;
				uni.request({
					url: that.$api+'order/pay-data&order_id='+e+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			},
			toCancle: function(e){
				var that = this;
				uni.request({
					url: that.$api+'order/revoke&order_id='+e+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						}); 
						setTimeout(function(){
							 uni.redirectTo({
							 	url: "/pages/my_order/my_order?id="+that.current
							 })
						},1000)
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
						
					}
				});
			},
			toOrderDetail: function(e){
				console.log(e)
				uni.navigateTo({
					url: "/pages/order_detail/order_detail?id="+e
				})
			},
			queryOrder: function(e){
				var that = this;
				console.log(e)
				uni.request({
					url: that.$api+'order/confirm&order_id='+e+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						}); 
						setTimeout(function(){
							 uni.redirectTo({
							 	url: "/pages/my_order/my_order?id="+that.current
							 })
						},1000)
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
	}
</script>

<style scoped lang="scss">
	.order_item{
		background: #fff;
		padding: 25upx;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 20upx;
		.order_top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #F7F7F9;
			padding-bottom: 20upx;
			view{
				color: #797979;
				font-size: 22upx;
				image{
					display: inline-block;
					vertical-align: middle;
					margin: 0 10upx 5upx 0;
					width: 26upx;
					height: 26upx !important;
				}
			}
			text{
				font-size: 22upx;
				&.active{
					color: #fa3930;
				}
			}
		}
		.order_info{
			overflow: hidden;
			padding: 20upx 0 25upx;
			// margin-bottom: 20upx;
			border-bottom: 1px solid #F7F7F9;
			.oi_left{
				float: left;
				margin-right: 30upx;
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
				width: 420upx;
				.oi_title{
					color: #1f1f1f;
					font-size: 28upx;
					margin: 10upx 0 5upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.oi_info,.oi_type{
					color: #747474;
					font-size: 22upx;
					margin-bottom: 20upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.oi_type{
					margin-bottom: 0;
				}
			}
			.oi_right{
				float: right;
				text-align: right;
				.oi_price{
					color: #797979;
					font-size: 24upx;
					margin: 10upx 0 6upx;
				}
				.oi_num{
					color: #868686;
					font-size: 20upx;
				}
			}
		}
		.order_bottom{
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20upx;
			.ob_price{
				color: #797979;
				font-size: 22upx;
				text{
					color: #fa3930;
					font-size: 26upx;
				}
			}
			.ob_btn{
				overflow: hidden;
				button{
					float: left;
					color: #333;
					font-size: 24upx;
					background: #fff;
					border: 1px solid #9B9B9B;
					margin-left: 25upx;
					&:active{
						color: #fa3930;
						border: 1px solid #fa3930;
					}
					&:after{
						border: 0;
					}
				}
			}
		}
	}
</style>
