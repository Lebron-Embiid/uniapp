<template>
	<view class="common_store">
		<view class="store_item" v-for="(item,index) in storeList" @click="toStoreDetail(item)" :key="index">
			<image :src="item.src" mode="widthFix"></image>
			<view class="si_title">{{item.title}}</view>
			<view class="si_info">{{item.info}}</view>
			<view class="si_price">￥{{item.price}}<text>规格：{{item.type}}</text></view>
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
			storeList: Array
		},
		methods:{
			toStoreDetail: function(res){
				uni.navigateTo({
					url: "/pages/store_detail/store_detail?id="+res.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.common_store{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding-bottom: 30upx;
		.store_item{
			width: 50%;
			padding: 10upx 40upx 30upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #e5e5e5;
			&:nth-of-type(2n-1){
				border-right: 1upx solid #e5e5e5;
			}
			image{
				display: block;
				width: 250upx;
				height: 230upx !important;
				margin: 10upx auto 30upx;
			}
			.si_title{
				color: #160c11;
				font-size: 22upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.si_info{
				color: #7d7d7d;
				font-size: 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin: 5upx 0 10upx;
			}
			.si_price{
				color: #00001f;
				font-size: 24upx;
				text{
					float: right;
					color: #4d4d4d;
					font-size: 18upx;
				}
			}
		}
	 }
</style>
