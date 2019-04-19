<template>
	<view class="store_detail">
		<view class="detail_banner">
			<commonSwiper :swiperList="swiperList" @preview="previewImgs"></commonSwiper>
		</view>
		<view class="detail_info borbom">
			<view class="di_title">{{title}}</view>
			<!-- <view class="di_info">{{info}}</view> -->
			<view class="di_price">￥{{price}}<text>规格：{{type}}</text></view>
		</view>
		<view class="auth_box borbom">
			<view><image src="../../static/ok.jpg" mode="widthFix"></image>正品保障</view>
			<view><image src="../../static/ok.jpg" mode="widthFix"></image>极速发货</view>
		</view>
		<view class="format_box borbom">
			<text>规格</text>
			<view class="format_select" @click="showFixed">
				规格<image src="../../static/next.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="store_tab">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 商品详情 -->
		<view class="store_content1 mb98" v-show="currentTab == 0">
			{{content}}
			<image src="../../static/detail_img.jpg" mode="aspectFill"></image>
		</view>
		<!-- 评价 -->
		<view class="store_content2 mb98" v-show="currentTab == 1">
				
		</view>
		<view class="fixed_bottom">
			<view class="fb_left" @click="toIndex"><image src="../../static/back_home.png" mode="widthFix"></image>首页</view>
			<view class="fb_center" @click="toAddCar">加入购物车</view>
			<view class="fb_right" @click="toBuy">立即购买</view>
		</view>
		
		<view class="fixed_shadow" @click="hideFixed" v-show="!fixed_show"></view>
		<view class="fixed_layer" :animation="animationData" v-show="!fixed_show">
			<view class="fixed_top">
				<view class="ft_img"><image :src="buy_img" mode="widthFix"></image></view>
				<view class="ft_info">
					<view class="fi_price">￥{{buy_price}}</view>
					<view class="fi_save">库存{{buy_save}}</view>
					<view class="fi_close" @click="hideFixed"><image src="../../static/close.png" mode="widthFix"></image></view>
				</view>
			</view>
			<view class="layer_format">
				<view class="format_item" v-for="(format,index) in buy_format" :key="index">
					<view class="format_name">{{format.name}}</view>
					<view class="format_list">
						<view class="fl_item" :class="[format.current[0] == index && format.current[1] == idx?'active':'']" v-for="(item,idx) in format.list" :key="idx" @click="selectFormat(format.id,item.attr_id,index,idx)">{{item.attr_name}}</view>
					</view>
				</view>
			</view>
			<view class="layer_num">
				<text>数量</text>
				<view class="num_box">
					<!-- 加数量 -->
					<view class="num_minus" @click="minus_num">-</view>
					<!-- 数量 -->
					<view class="num_quantity">{{buy_num}}</view>
					<!-- 加数量 -->
					<view class="num_plus" @click="plus_num">+</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonSwiper from "@/components/common-swiper.vue"
	export default{
		data(){
			return{
				swiperList: [
					// "../../static/detail_banner.jpg","../../static/detail_banner.jpg","../../static/detail_banner.jpg"
				],
				navbar:[{name:"商品详情"},{name:"评价"}],
				currentTab:0,
				id: "",
				title: "",
				info: "深层清洁皮肤，长效保湿滋润",
				price: "",
				type: "120g",
				content: "",
				fixed_show: 1,
				animationData: {},
				buy_img: "../../static/store_img1.jpg",
				buy_price: "999.00",
				buy_save: 7,
				buy_num: 1,
				is_format: 1,
				buy_format: [
// 					{
// 						id: 1,
// 						name: "颜色",
// 						list: [
// 							{
// 								id: 1,
// 								name: "黄色",
// 								current: -1
// 							},
// 							{
// 								id: 2,
// 								name: "绿色",
// 								current: -1
// 							}
// 						]
// 					}
				],
				mch_list: [],
				attr: []
			}
		},
		components:{
			commonSwiper
		},
		methods:{
			navbarTap: function(e){
				var that = this;
				that.currentTab = e;
				if(that.currentTab == 1){
					uni.request({
						url: that.$api+'order/comment-preview&order_id='+that.id+'&access_token='+that.$access_token,
						method: 'GET',
						dataType: "json",
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							
						},
						fail: () => {
							uni.showToast({
								title:res.data.msg,
								icon:'none',
							});
						}
					});
				}
			},
			toIndex: function(e){
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			previewImgs: function(e){
				let that = this;
				uni.previewImage({
					urls: that.swiperList,
					current: that.swiperList[e]
				})
			},
			toAddCar: function(e){
				var that = this;
				if(that.is_format != 0){
					that.fixed_show = 0;
					return false;
				}
				uni.request({
					url: that.$api+'cart/add-cart&access_token='+that.$access_token,
					method: 'POST',
					data: {
						goods_id: that.id,
						attr: JSON.stringify(that.attr),
						num: that.buy_num
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						// if(res.data.code == 1){
							uni.showToast({
								title: "添加购物车成功！",
								icon: "success"
							})
						// }
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			},
			toBuy:function(e){
				var that = this;
				if(that.is_format != 0){
					that.fixed_show = 0;
					return false;
				}
				var goods_list = [];
				goods_list.push({
					goods_id: that.id,
					num: that.buy_num,
					attr: that.buy_format
				})
				that.mch_list.push({
					mch_id: 0,
					goods_list: goods_list
				})
				console.log(that.mch_list);
				uni.request({
					url: that.$api+'order/new-submit-preview&access_token='+that.$access_token,
					method: 'POST',
					data: {
						mch_list: that.mch_list
					},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						// if(res.data.code == 1){
							uni.showToast({
								title: res.data.msg,
								icon: "success"
							})
						// }
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			},
			selectFormat: function(id,sid,index,idx){
				var that = this;
				that.attr[index] = {
					attr_group_id: that.buy_format[index].id,
					attr_group_name: that.buy_format[index].name,
					attr_id: that.buy_format[index].list[idx].attr_id,
					attr_name: that.buy_format[index].list[idx].attr_name,
				}
				
				that.buy_format[index].current = [index,idx];
				var len = that.buy_format.length;
				console.log(that.attr);
				if(that.attr.length == len){
					that.is_format = 0;
				}
			},
			minus_num: function(e){
				this.buy_num--;
				if(this.buy_num <= 0){
					this.buy_num = 1;
				}
			},
			plus_num: function(e){
				this.buy_num++;		
				if(this.buy_num >= 99){
					this.buy_num = 99;
				}		
			},
			showFixed: function(e){
				this.fixed_show = 0;
// 				var animation = uni.createAnimation({
// 					duration: 1000,
// 					timingFunction: 'ease',
// 				})
// 				this.animation = animation;
// 				animation.bottom("98upx").step();
// 				this.animationData = animation.export();
			},
			hideFixed: function(e){
				this.fixed_show = 1;
// 				var animation = uni.createAnimation({
// 					duration: 1000,
// 					timingFunction: 'ease',
// 				})
// 				this.animation = animation;
// 				animation.bottom("-100%").step();
// 				this.animationData = animation.export();
			}
		},
		onLoad(opt) {
			let that = this;
			that.id = opt.id;
			uni.request({
				url: that.$api+'default/goods&id=1',
				method: 'GET',
				data: {
					id: opt.id
				},
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					console.log(res.data);
					let swiperList = [];
					let formatList = [];
					let list = [];
					var item = res.data.data;
					for(let i in item.pic_list){
						swiperList.push(item.pic_list[i].pic_url);
					}
					for(let i in item.attr_group_list){
						formatList.push({
							id: item.attr_group_list[i].attr_group_id,
							name: item.attr_group_list[i].attr_group_name,
							list: item.attr_group_list[i].attr_list,
							current: [-1,-1]
						});
					}
					that.swiperList = swiperList;
					that.title = item.name;
					that.price = item.price;
					that.buy_format = formatList;
					console.log(that.buy_format)
				},
				fail: err => {
					uni.showToast({
						title: JSON.stringify(err),
						icon: 'none',
						duration: 1500
					})
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	.borbom{
		border-bottom: 20upx solid #f7f7f7;
	}
	.mb98{
		margin-bottom: 98upx;
	}
	.detail_info{
		padding: 40upx 25upx;
		box-sizing: border-box;
		overflow: hidden;
		.di_title{
			color: #1f1f1f;
			font-size: 28upx;
			margin-bottom: 15upx;
		}
		.di_info{
			color: #787878;
			font-size: 24upx;
			// margin: 5upx 0 15upx;
		}
		.di_price{
			color: #ff4446;
			font-size: 34upx;
			text{
				color: #a1a1a1;
				font-size: 22upx;
				margin-left: 70upx;
			}
		}
	}
	.auth_box{
		padding: 30upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
		view{
			float: left;
			margin-right: 30upx;
			color: #a1a1a1;
			font-size: 24upx;
			image{
				display: inline-block;
				vertical-align: middle;
				margin: 0 8upx 6upx 0;
				width: 33upx;
				height: 33upx !important;
			}
		}
	}
	.format_box{
		overflow: hidden;
		padding: 30upx 20upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text{
			display: block;
			width: 15%;
			color: #1f1f1f;
			font-size: 30upx;
		}
		.format_select{
			width: 85%;
			color: #787878;
			font-size: 24upx;
			overflow: hidden;
			image{
				float: right;
				display: block;
				width: 20upx;
				height: 34upx !important;
			}
		}
	}
	.store_tab{
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1upx solid #EAEAEA;
		view{
			color: #00001f;
			font-size: 28upx;
			text-align: center;
			padding: 30upx 10upx;
			&.active{
				border-bottom: 1upx solid #00001F;
			}
		}
	}
	.store_content1,.store_content2{
		overflow: hidden;
		padding: 20upx 0;
		image{
			display: block;
			width: 100%;
		}
	}
	.fixed_bottom{
		position: fixed;
		width: 100%;
		height: 98upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		left: 0;
		bottom: 0;
		z-index: 20;
		background: #fff;
		border-top: 1upx solid #EAEAEA;
		.fb_left{
			width: 190upx;
			color: #666;
			font-size: 22upx;
			image{
				display: block;
				width: 36upx;
				height: 36upx !important;
				margin: 0 auto 10upx;
			}
		}
		.fb_center{
			width: 280upx;
			height: 98upx;
			line-height: 98upx;
			color: #fff;
			font-size: 30upx;
			background: #f4a522;
		}
		.fb_right{
			width: 280upx;
			height: 98upx;
			line-height: 98upx;
			color: #fff;
			font-size: 30upx;
			background: #fa3930;
		}
	}
	.fixed_shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		left: 0;
		top: 0;
		z-index: 15;
	}
	.fixed_layer{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 98upx;
		background: #fff;
		z-index: 18;
		padding: 0 0 50upx;
		.fixed_top{
			overflow: hidden;
			padding: 20upx 25upx;
			box-sizing: border-box;
			border-bottom: 1px solid #F7F7F7;
			.ft_img{
				float: left;
				width: 120upx;
				height: 120upx;
				border: 1px solid #E5E4E4;
				margin-right: 20upx;
				image{
					display: block;
					width: 100%;
					height: 100% !important;
				}
			}
			.ft_info{
				overflow: hidden;
				.fi_price{
					color: #fa3930;
					font-size: 30upx;
					margin: 20upx 0 10upx;
				}
				.fi_save{
					color: #787878;
					font-size: 26upx;
				}
				.fi_close{
					position: absolute;
					right: 30upx;
					top: 30upx;
					image{
						display: block;
						width: 50upx;
						height: 50upx !important;
					}
				}
			}
		}
		.layer_format{
			padding: 30upx 25upx 10upx;
			box-sizing: border-box;
			border-bottom: 1px solid #F7F7F7;
			.format_item{
				margin-bottom: 10upx;
				.format_name{
					font-size: 28upx;
					margin-bottom: 20upx;
				}
				.format_list{
					overflow: hidden;
					.fl_item{
						float: left;
						width: 120upx;
						height: 50upx;
						line-height: 50upx;
						font-size: 28upx;
						text-align: center;
						background: #F7F7F7;
						border-radius: 5upx;
						margin: 0 20upx 20upx 0;
						&.active{
							color: #fff;
							background: #FF4444;
						}
					}
				}
			}
		}
		.layer_num{
			padding: 30upx 25upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				font-size: 28upx;
			}
			.num_box{
				overflow: hidden;
				view{
					float: left;
					margin-left: 10upx;
					width: 60upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					background: #EFEFEF;
					font-size: 34upx;
				}
				.num_quantity{
					width: 120upx;
					font-size: 28upx;
				}
			}
		}
	}
</style>
