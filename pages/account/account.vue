<template>
	<view class="account_box">
		<view class="page_bg"></view>
		<view class="acc_item borbom notop">
			<text>请选择收货地址</text>
			<view class="acc_right" @click="toAddress">
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="acc_item borbom">
			<text>支付方式</text>
			<picker class="acc_right" @change="bindPickerChange" :value="index" :range="array">
				<view class="uni-input">{{array[index]}}</view>
				<image src="../../static/next.png" mode="widthFix"></image>
			</picker>
		</view>
		<view class="acc_content borbom">
			<view class="content_item" v-for="(item,index) in accountList" :key="index">
				<view class="ac_left"><image :src="item.img" mode="widthFix"></image></view>
				<view class="ac_right">
					<view class="ac_title">{{item.title}}</view>
					<view class="ac_info">{{item.info}}</view>
					<view class="ac_type"><text>x{{item.num}}</text><text>规格：{{item.type}}</text><text class="ac_price">￥{{item.price}}</text></view>
				</view>
			</view>
		</view>
		<view class="acc_item borbom">
			<text>运费</text>
			<view class="pr45">
				在线支付
				<!-- <image src="../../static/next.png" mode="widthFix"></image> -->
			</view>
		</view>
		<view class="acc_mess borbom">
			<view class="txt">给买家留言</view>
			<input type="text" placeholder="请备注" value="" />
		</view>
		<view class="fixed_account">
			<view class="fa_left">总计：￥{{all}}</view>
			<view class="fa_right">提交</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				array: ['在线支付', '货到付款'],
				index: 0,
				accountList:[
					{
						id: 1,
						img: "../../static/order_img1.jpg",
						title: "艾璐卡柔雾丝绒唇釉",
						info: "持久滋润·饱满显色·细腻亮泽·抚平唇纹",
						num: 1,
						type: "6.8ml",
						price: 118
					},
					{
						id: 2,
						img: "../../static/order_img2.jpg",
						title: "艾璐卡柔雾丝绒唇釉",
						info: "持久滋润·饱满显色·细腻亮泽·抚平唇纹",
						num: 1,
						type: "6.8ml",
						price: 138
					}
				],
				all: 118
			}
		},
		methods:{
			toAddress: function(e){
				uni.navigateTo({
					url: "/pages/address_list/address_list"
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			}
		},
		onLoad(opt) {
			var that = this;
			uni.request({
				url: that.$api+'&access_token='+that.$access_token,
				method: 'POST',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					
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
	page{background: #f5f5f5 !important;}
	.borbom{margin-bottom: 20upx;border-top: 1px solid #E0E0E0;border-bottom: 1px solid #E0E0E0;}
	.notop{border-top: 0;}
	.pr45{padding-right: 45upx;}
	.acc_item{
		background: #fff;
		padding: 25upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #2d2d2d;
		font-size: 24upx;
		.acc_right{
			width: 60%;
			text-align: right;
			view{
				display: inline-block;
			}
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 0 5upx 25upx;
				width: 20upx;
				height: 34upx !important;
			}
		}
	}
	.acc_content{
		padding: 40upx 25upx;
		background: #fff;
		.content_item{
			box-sizing: border-box;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20upx;
			&:last-of-type{
				margin-bottom: 0;
			}
			.ac_left{
				width: 20%;
				// margin-right: 30upx;
				width: 140upx;
				height: 140upx;
				border: 1px solid #EAEAEA;
				image{
					display: block;
					width: 139upx;
					height: 139upx !important;
				}
			}
			.ac_right{
				width: 75%;
				.ac_title{
					color: #1f1f1f;
					font-size: 28upx;
					margin: 10upx 0 5upx;
				}
				.ac_info,.ac_type{
					color: #747474;
					font-size: 22upx;
					margin-bottom: 20upx;
				}
				.ac_type{
					margin-bottom: 0;
					overflow: hidden;
					text{
						margin-right: 60upx;
					}
					.ac_price{
						float: right;
						color: #fa3930;
						font-size: 26upx;
						margin-right: 0;
					}
				}
			}
		}
	}
	.acc_mess{
		background: #fff;
		padding: 25upx;
		box-sizing: border-box;
		view{
			color: #2d2d2d;
			font-size: 24upx;
			margin-bottom: 10upx;
		}
		input{
			color: #606060;
			font-size: 24upx;
			display: block;
			width: 100%;
		}
	}
	.fixed_account{
		position: fixed;
		width: 100%;
		background: #fff;
		left: 0;
		bottom: 0;
		z-index: 20;
		height: 95upx;
		border-top: 1px solid #EBEBEB;
		box-sizing: border-box;
		overflow: hidden;
		.fa_left{
			float: left;
			width: 350upx;
			color: #fa3930;
			font-size: 24upx;
			padding: 0 25upx;
			box-sizing: border-box;
			line-height: 95upx;
		}
		.fa_right{
			float: right;
			width: 400upx;
			color: #fff;
			font-size: 28upx;
			line-height: 95upx;
			background: #fa3930;
			text-align: center;
		}
	}
</style>
