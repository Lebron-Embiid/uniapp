<template>
	<view class="order_box">
	<block v-if="orderList.length > 0">
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
						<button @click="toPay(item.id,item.pay,index)">去支付</button>
					</block>
					<block v-if="item.is_send == 1 && current == 2">			
						<block v-if="item.express != ''">
						   <button @click="logisticsOrder(item.id)">查看物流</button>
						</block>
						<button @click="queryOrder(item.id)">确认收货</button>
					</block>
					<block v-if="item.is_comment == 0 && current == 3">
						<button @click="toOrderComment(item.id)">评价</button>
					</block>
				</view>
			</view>
		</view>
	  </block>
	  <block v-else>
		  <view class="not_have">暂无相关订单</view>
	  </block>
	  <!-- <view class="pay_shadow" @tap="hideShadow" :class="[pay_shadow == true?'active':'']"></view>
	  <view class="pay_type_box" :class="[pay_shadow == true?'active':'']">
		<view class="pay_title">请选择支付方式</view>
		<view class="pt_item"><image src="/static/wx_icon.png" mode="widthFix"></image><text>微信</text></view>
		<view class="pt_item"><image src="/static/zfb_icon.png" mode="widthFix"></image><text>支付宝</text></view>
	  </view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pay_type: '-1', 
				// pay_shadow: false
				pay_list: ["微信支付","支付宝支付"]
			}
		},
		props:{
			current: Number,
			orderList: Array
		},
		onLoad() {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
		},
		methods:{
			// hideShadow(){
			// 	this.pay_shadow = false;
			// },
			toPay: function(id,all,index){
				var that = this; 
				console.log(that.pay_type)
				var order_no = that.orderList[index].order_no
				var goods_name = that.orderList[index].goods[0].goods_name;
				var order_id = that.orderList[index].id;
				console.log(id,order_no,goods_name,all,order_id)
				if(all >= 10000){
					uni.showToast({
						title:'联系平台下单',
						icon: 'none', 
					})	
					return false;
				} 
				uni.showActionSheet({
					itemList: that.pay_list,
					success: function (res) {
						if(res.tapIndex == 0){
							that.pay_type = 0;
							var url =  "http://yl.demenk.com/wxpayv3/index.php"; 
							var provider = "wxpay";
						}else{
							that.pay_type = 1;
							var url =  "http://yl.demenk.com/alipayrsa2/index.php";
							var provider = "alipay";
						}
						uni.request({  
							url: url,
							method: 'GET',
							dataType: "json",
							data: {				
								price:all,
								goods_name:goods_name,
								order_no:order_no, 
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							success: res => {					
								var list = res.data;
								if(that.pay_type == 0){
									var order_info = JSON.stringify({
											appid:list.appid,
											noncestr:list.noncestr,  
											package:"Sign=WXPay",
											partnerid:list.partnerid,
											prepayid:list.prepayid,
											timestamp: list.timestamp,
											sign:list.sign
									})	
								}else{
						        	var order_info =  list	
								}	 
						  
								uni.getProvider({
									service: "payment",
									success: function(res){
										uni.requestPayment({ 
											provider: provider,
											orderInfo: order_info,
											success: function (res) {
												uni.showToast({
													title: "支付成功！"
												})
												uni.request({
													url: that.$api+'order/wx-pay&order_id='+order_id+'&access_token='+that.$access_token,
													method: 'GET',
													dataType: "json", 
													header: {
														'content-type': 'application/x-www-form-urlencoded'
													},
													success: res => {
						
													}, 
												});
												
											},
											fail: function (err) {
												uni.showToast({
													title: "支付失败",
													icon: "none"
												})  
											}
										});
									}
								})
							},
							fail: (err) => {
								uni.showToast({
									title: "支付失败！",
									icon: "none"
								})  
							}
						});
					},
					fail: function (res) {
						console.log(res.errMsg);
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
			toOrderComment: function(e){
				uni.navigateTo({
					url: "/pages/order_comment/order_comment?id="+e
				})
			},
			logisticsOrder:function(e){
				uni.navigateTo({
					url: "/pages/logistics/logistics?id="+e
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
	.not_have{
		text-align: center;
		margin: 300upx 0 0;
		font-size: 28upx;
		color: #999;
	} 
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
	.pay_shadow{
		display: none;
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.5);
		z-index: 38;
		&.active{
			display: block;
		}
	}
	.pay_type_box{
		position: fixed;
		width: 60%;
		left: 50%;
		top: 36%;
		transform: translateX(-50%);
		z-index: 40;
		background: #fff;
		border-radius: 10upx;
		padding: 50upx 30upx;
		box-sizing: border-box;
		display: none;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		&.active{
			display: flex;
		}
		.pay_title{
			width: 100%;
			text-align: center;
			font-size: 30upx;
			margin-bottom: 50upx;
		}
		.pt_item{
			font-size: 24upx;
			text-align: center;
			image{
				display: block;
				width: 74upx;
				height: 69upx;
				margin: 0 auto 10upx;
			}
		}
	}
</style>
