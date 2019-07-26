<template>
	<view class="common_store">
		<view class="store_item" v-for="(item,index) in storeList" @click="toStoreDetail(item)" :key="index">
			<image :src="item.src" mode="aspectFit"></image>
			<view class="si_title">{{item.title}}</view>
			<view class="si_info">{{item.info}}</view>
			<view class="si_price">￥{{item.price}}<!-- <text>规格：{{item.type}}</text> --><text>已售：{{item.sales}}</text></view>
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
			    var that = this; 
				that.$level = uni.getStorageSync("level");
				if(that.$level == 4){
					uni.navigateTo({
						url: "/pages/store_detail/store_detail?id="+res.id
					})
					return false
				}
				
				
					if(res.cat_id != that.$level && res.cat_id != 3 ){
						uni.showToast({
							title:"你不是此商品的代理，没有权限购买",
							icon:'none',
						});
						
						
					     return false
					} 
				
				
				
				
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
				height: 32px;
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-wrap: break-word;
				word-break: break-all;
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
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					// float: right;
					color: #4d4d4d;
					font-size: 20upx;
				}
			}
		}
	 }
</style>
