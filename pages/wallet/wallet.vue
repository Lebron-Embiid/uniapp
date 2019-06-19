<template>
	<view class="wallet_box">
		<view class="page_bg"></view>
		<view class="withdraw_box">
			<view class="over_word">可用余额(元)</view>
			<view class="over_money">￥{{over_money}}</view>
			<view class="over_btn_box">
				<view class="withdraw_btn" @click="toWithdraw">提现</view>
				<!-- <view class="withdraw_btn" @click="toRecharge">充值</view> -->
			</view>
		</view>
		<view class="record_box">
			<view class="record_item" v-for="(item,index) in record_list" :key="index">
				<view class="record_info">
					<view class="ri_name">{{item.nickname}}<text class="ri_time">{{item.addtime}}</text></view>
					<view class="ri_money_box">
						<view class="ri_money"><!-- <text class="ri_title">商品</text> --><text class="ri_red">{{item.content}}</text><text class="ri_num">×{{item.num}}</text></view>
						<view class="ri_money">可得积分<text class="rt_red">￥{{item.price}}</text></view>
					</view>
				</view>
				<!-- <view class="record_content" hidden>
					<view class="rl_txt">购买</view>
					<view class="record_list">
						<view class="rl_item" v-for="(list,idx) in item.record" :key="idx">
							<view class="ri_name">{{list.title}}</view>
							<view class="ri_num">{{list.num}}箱</view>
						</view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				page:1,
				page_count:1,
				over_money: "",
				record_list: [],
			}
		},
		methods:{
			toWithdraw: function(e){
				uni.navigateTo({
					url: "/pages/withdraw/withdraw?money="+this.over_money
				})
			},
			toRecharge: function(e){
				uni.navigateTo({
					url: "/pages/recharge/recharge?money="+this.over_money
				})
			}
		},
		onLoad(opt) {
			let that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			setTimeout(function () {
			that.over_money = opt.money;
			uni.request({
				url: that.$api+'recharge/index&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.over_money = res.data.data.money;
					that.record_list = res.data.data.rebate.list;
					that.page_count = res.data.data.rebate.page_count;
					console.log(res.data.data.rebate.list)
					console.log(that.record_list)
					console.log(that.page_count)
				},
				fail: err => {
					uni.showToast({
						title: JSON.stringify(err),
						icon: 'none',
						duration: 1500
					})
				}
			});
			}, 1000);
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				uni.request({
					url: that.$api+'recharge/index&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						that.over_money = res.data.data.money;
						that.record_list = res.data.data.rebate.list;
						that.page_count = res.data.data.rebate.page_count;
						console.log(res.data.data.rebate.list)
						console.log(that.record_list)
						console.log(that.page_count)
					},
					fail: err => {
						uni.showToast({
							title: JSON.stringify(err),
							icon: 'none',
							duration: 1500
						})
					}
				});
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉触底
		onReachBottom(){
			let that = this;
			if(that.page == that.page_count){
			   uni.showToast({
				title:"没有更多数据了",
				icon:'none',
			   });
			   return false;
			}			 
		   that.page = parseInt(that.page)+parseInt(1)	
			uni.request({
				url: that.$api+'recharge/index&access_token='+that.$access_token,
				method: 'GET',
				data:{page:that.page,keyword:that.keyword},
				success: res => {
					let list = res.data.data.rebate.list;   
					that.record_list = that.record_list.concat(list)
					  console.log(that.record_list) 
				},
				fail: () => {
					uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					})
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.wallet_box{
		.withdraw_box{
			padding: 100upx 50upx 60upx;
			box-sizing: border-box;
			background: #fff;
			text-align: center;
			color: #00001f;
			margin-bottom: 25upx;
			border-bottom: 1upx solid #DFDFDF;
			.over_word{
				font-size: 26upx;
			}
			.over_money{
				font-size: 60upx;
				margin: 0 0 60upx;
			}
			.over_btn_box{
				width: 80%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.withdraw_btn{
					width: 45%;
					color: #fff;
					font-size: 24upx;
					background: #00001f;
					padding: 20upx 0;
					border-radius: 5upx;
					margin: 0 auto;
				}
			}
		}
		.record_box{
			border-top: 1upx solid #EBEBED;
			.record_item{
				border-bottom: 1upx solid #ddd;
				padding: 30upx;
				box-sizing: border-box;
				background: #fff;
				.record_info{
					overflow: hidden;
					color: #222;
					.ri_name{
						display: block;
						font-size: 24upx;
						margin-bottom: 10upx;
						.ri_time{
							float: right;
							font-size: 20upx;
						}
					}
					.ri_money{
						display: flex;
						justify-content: space-between;
						align-items: flex-start;
						// float: right;
						font-size: 24upx;
						margin-bottom: 10upx;
						.rt_red{
							width: 84%;
							color: #d70d0d;
							margin-left: 10upx;
						}
						.ri_red{
							width: 80%;
							color: #d70d0d;
							margin-left: 10upx;
						}
					}
				}
				.record_content{
					color: #222;
					font-size: 24upx;
					overflow: hidden;
					.rl_txt{
						float: left;
						margin-right: 10upx;
					}
					.record_list{
						width: 80%;
						float: left;
						overflow: hidden;
						.rl_item{
							width: 100%;
							overflow: hidden;
							margin-bottom: 10upx;
							.ri_name{
								margin-right: 40upx;
								float: left;
								width: 65%;
								// overflow: hidden;
								// text-overflow: ellipsis;
								// white-space: nowrap;
							}
							.ri_num{
							    color: #d70d0d;
								float: left;
							}
						}
					}
				}
			}
		}
	}
</style>
