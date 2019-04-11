<template>
	<view class="wallet_box">
		<view class="page_bg"></view>
		<view class="withdraw_box">
			<view class="over_word">可用余额(元)</view>
			<view class="over_money">{{over_money}}</view>
			<view class="withdraw_btn" @click="toWithdraw">提现</view>
		</view>
		<view class="record_box">
			<view class="record_item" v-for="(item,index) in record_list" :key="index">
				<view class="record_info">
					<text class="ri_name">{{item.name}}</text>
					<text class="ri_time">{{item.time}}</text>
					<view class="ri_money">返利<text class="ri_red">{{item.money}}元</text></view>
				</view>
				<view class="record_content">
					<view class="rl_txt">购买</view>
					<view class="record_list">
						<view class="rl_item" v-for="(list,idx) in item.record" :key="idx">
							<view class="ri_name">{{list.title}}</view>
							<view class="ri_num">{{list.num}}箱</view>
						</view>
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
				over_money: "180.00",
				record_list: [
					{
						id: 1,
						name: "王志勇",
						time: "2019-03-25",
						money: 230,
						record:[
							{
								title: "艾璐卡-山羊奶悦颜清透洁乳",
								num: 100
							},
							{
								title: "艾璐卡-山羊奶悦颜清透柔肤液",
								num: 100
							},
							{
								title: "艾璐卡-山羊奶悦颜清透精华乳",
								num: 100
							}
						]
					},{
						id: 2,
						name: "凌苗苗",
						time: "2019-03-25",
						money: 230,
						record:[
							{
								title: "艾璐卡-蜗牛多效爆水霜",
								num: 100
							},
							{
								title: "艾璐卡-山羊奶悦颜清透精华乳",
								num: 100
							}
						]
					},{
						id: 3,
						name: "肖米",
						time: "2019-03-25",
						money: 230,
						record:[
							{
								title: "艾璐卡-山羊奶悦颜清透精华乳",
								num: 100
							}
						]
					},{
						id: 4,
						name: "凌苗苗",
						time: "2019-03-25",
						money: 230,
						record:[
							{
								title: "艾璐卡-蜗牛多效爆水霜",
								num: 100
							}
						]
					}
				]
			}
		},
		methods:{
			toWithdraw: function(e){
				uni.navigateTo({
					url: "/pages/withdraw/withdraw"
				})
			}
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
			.withdraw_btn{
				width: 80%;
				margin: 0 auto;
				color: #fff;
				font-size: 24upx;
				background: #00001f;
				padding: 20upx 0;
				border-radius: 5upx;
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
						display: inline-block;
						vertical-align: top;
						font-size: 24upx;
						margin-right: 30upx;
						max-width: 80upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.ri_time{
						display: inline-block;
						vertical-align: top;
						font-size: 20upx;
					}
					.ri_money{
						float: right;
						font-size: 24upx;
						.ri_red{
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
								float: left;
							}
						}
					}
				}
			}
		}
	}
</style>
