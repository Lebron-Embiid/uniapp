<template>
	<view class="logistics_box">
		<view class="logist_top">
			<!-- <view class="lt_img"><image :src="goods_pic" mode="widthFix"></image></view> -->
			<view class="lt_word">
				<view class="log_erpss">快递信息</view>
				<block>
					<view>{{express}}<text class="blue" @click="logerpssTap(order_id)">查看</text></view>	
					<view v-for="(item,index) in exprss_content" :key="index">{{item}}<text class="blue" @click="navbarTap(index)">查看</text></view>				
				</block>
				<!-- <view>官方电话<text class="red">{{phone}}</text></view> -->
			</view>
		</view>
		<view class="logist_content">
			<view class="lc_remark"><image src="../../static/car_icon1.png" mode="widthFix"></image>物流信息</view>
			<view class="logist_box">
				<view class="logist_item" v-for="(item,index) in logists" :key="index">
					<view class="li_box">
						<view class="li_title">{{item.AcceptStation}}</view>
						<view class="li_time">{{item.AcceptTime}}</view>
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
				order_id:'',
				express: "",
				express_no: "",
				phone: "",
				goods_pic: "",
				exprss_content:[],
				logists:[]
			}
		},
		methods:{
			navbarTap: function(e){
				//快递单号查询 
				var that = this;
				console.log(e)
				uni.request({
					url: that.$api+'order/express-other&order_id='+that.order_id+'&status='+e+'&type=mall&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						that.express = res.data.data.exprss_name; 
						that.express_no = res.data.data.express_no;
						that.goods_pic = res.data.data.goods_pic;
						that.exprss_content = res.data.data.exprss_content
						 
						that.logists = res.data.data.list
					},
					fail: () => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})					
					}
				});
			},
			logerpssTap:function(e){
				uni.navigateTo({
					url: "/pages/logistics/logistics?id="+e
				})
			},
			
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			that.order_id = opt.id;
			uni.request({
				url: that.$api+'order/express-detail&order_id='+opt.id+'&type=mall&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.express = res.data.data.exprss_name; 
					that.express_no = res.data.data.express_no;
					that.goods_pic = res.data.data.goods_pic;
					that.exprss_content = res.data.data.exprss_content 
					that.logists = res.data.data.list 
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
					&.blue{
						color: #00a0e9;
					}
				}
				&.log_erpss{
					font-size: 32upx;
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
