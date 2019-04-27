<template>
	<view class="account_box">
		<view class="page_bg"></view>
		<view class="acc_item borbom notop" @click="toAddress" v-if="address == null || address == ''">
			<text>请选择收货地址</text>
			<view class="acc_right">
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="acc_item borbom notop default" @click="toAddress" v-else>
			<view class="default_address">
				<view class="oi_name">{{address.name}}<text>{{address.mobile}}</text></view>
				<view class="oi_address"><image src="../../static/car_icon2.png" mode="widthFix"></image>{{address.province}}{{address.city}}{{address.district}}{{address.detail}}</view>
			</view>
			<view class="acc_right">
				<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="acc_item borbom">
			<text>支付方式</text>
			<view class="acc_right pr45">
				在线支付
				<!-- <image src="../../static/next.png" mode="widthFix"></image> -->
			</view>
			<!-- <picker class="acc_right" @change="bindPickerChange" :value="index" :range="array">
				<view class="uni-input">{{array[index]}}</view>
				<image src="../../static/next.png" mode="widthFix"></image>
			</picker> -->
		</view>
		<view class="acc_content borbom">
			<view class="content_item" v-for="(item,index) in accountList" :key="index">
				<view class="ac_left"><image :src="item.goods_pic" mode="widthFix"></image></view>
				<view class="ac_right">
					<view class="ac_title">{{item.goods_name}}</view>
					<view class="ac_info"><text v-for="(attr,idx) in item.attr_list" :key="idx">{{attr.attr_group_name}}: {{attr.attr_name}}</text></view>
					<view class="ac_type"><text>x{{item.num}}</text>
				        <!-- <text class="ac_price">￥{{item.price}}</text> -->
				        <text class="ac_price">￥{{item.level_price}}</text> 					    
					</view>
				</view>
			</view>
		</view>
		<view class="acc_item borbom">
			<text>运费</text>
			<view class="pr45" style="color: #fa3930;">
				￥{{express_price}}
				<!-- <image src="../../static/next.png" mode="widthFix"></image> -->
			</view>
		</view>
		<view class="acc_mess borbom">
			<view class="txt">给买家留言</view>
			<input type="text" placeholder="请备注" name="content" @input="getMess" :value="content" />
		</view>
		<view class="fixed_account">
			<view class="fa_left">总计：￥{{all}}</view>
			<view class="fa_right" @click="toSubmit">提交</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				address: {
					id: "",
					name: "",
					mobile: "",
					province: "",
					city: "",
					district: "",
					detail: "",
					is_default: ""
				},
				content:'',
				cat_list : [],
				array: ['在线支付', '货到付款'],
				index: 0,
				express_price: 0,
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
				all: 118,
				level_price:0,
				total_price:0,
				mch_list:[],
			}
		},
		methods:{
			toAddress: function(){ 
				console.log(JSON.stringify(this.mch_list))
				uni.navigateTo({
					url: "/pages/address_list/address_list?mch_list="+JSON.stringify(this.mch_list)
				})
			},
// 			toAddress: function(e){
// 				uni.navigateTo({
// 					url: "/pages/address_list/address_list"
// 				})
// 			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			getMess:function(e){
				this.content = e.detail.value;
			},
			toSubmit: function(e){
				var that = this;
 				that.mch_list[0].show = false;
 				that.mch_list[0].show_length = 0;
 				that.mch_list[0].offline = 0;
  				that.mch_list[0].content = that.content,
 				uni.request({
					url: that.$api+'order/new-submit&access_token='+that.$access_token,
					method: 'POST',
					data: {
						payment:0,
						use_integral:1,
						formId:undefined,
						mch_list:JSON.stringify(that.mch_list)
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res.data)
						uni.showToast({
							title:'提交成功',
							icon: 'none',
							duration: 1500
						})	
						if(that.all < 10000){
							//订单提交成功跳转
							setTimeout(function(){
								uni.request({
									url: that.$api+'order/pay-data&access_token='+that.$access_token,
									method: 'GET',
									data: {
										order_id:res.data.data.order_id, 
										pay_type:'WECHAT_PAY',
										parent_user_id:0,
										condition:2,
							            cat_list:that.cat_list
									},
									dataType: "json",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									success: res => {
										uni.showToast({
											title:res.msg,
											icon: 'none',
											duration: 1500
										})	
									},
								})
							},1000)
						}else{
							 uni.navigateTo({ 
							 	// url: "/pages/information/information"
							 })
						}
						
					},
					fail: () => {
						uni.showToast({
							title:'提交失败',
							icon: 'none',
							duration: 1500
						})					
					}
				});
			}
		},
		onLoad(opt) {
			var data = JSON.parse(opt.data);
			var that = this;
			that.cat_list = opt.cat_list;  
			that.address = data.address;
			that.accountList = data.mch_list[0].goods_list;
			that.mch_list = data.mch_list; 
				console.log(that.mch_list)
			that.express_price = data.mch_list[0].express_price;
			that.level_price = data.mch_list[0].level_price;
			that.total_price = data.mch_list[0].total_price;
			that.all  = parseFloat(that.level_price)+parseFloat(that.express_price)
 // 			uni.request({
// 				url: that.$api+'order/pay-data&order_id=3&access_token='+that.$access_token,
// 				method: 'GET',
// 				dataType: "json",
// 				header: {
// 					'content-type': 'application/x-www-form-urlencoded'
// 				},
// 				success: res => {
// 					
// 				},
// 				fail: () => {
// 					uni.showToast({
// 						title: res.data.msg,
// 						icon: 'none',
// 						duration: 1500
// 					})					
// 				}
// 			});			
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
					margin: 0 0 5upx;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					word-break: break-all;
				}
				.ac_info,.ac_type{
					color: #747474;
					font-size: 22upx;
					margin-bottom: 10upx;
					text{
						margin-right: 10upx;
					}
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
	.default_address{
		width: 100%;
	}
	.acc_item.default .acc_right{
		width: 20%;
	}
	.oi_name{
		color: #333;
		font-size: 24upx;
		margin-bottom: 20upx;
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
</style>
