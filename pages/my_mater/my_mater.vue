<template>
	<view class="my_mater">
		<view class="my_item" v-for="(item,index) in myMaterList" @click="toMaterDetail(item.id)" :key="index">
			<image :src="item.src" mode="widthFix"></image>
			<view class="my_down">已有{{item.num}}人下载</view>
		</view>
		<view class="page_bg"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				myMaterList: [
					{
						id: 1,
						src: "../../static/my_mater1.jpg",
						num: 59
					},
					{
						id: 2,
						src: "../../static/my_mater2.jpg",
						num: 76
					},
					{
						id: 3,
						src: "../../static/my_mater3.jpg",
						num: 52
					},
					{
						id: 4,
						src: "../../static/my_mater4.jpg",
						num: 24
					},
					{
						id: 5,
						src: "../../static/my_mater5.jpg",
						num: 359
					},
					{
						id: 6,
						src: "../../static/my_mater6.jpg",
						num: 131
					},
					{
						id: 7,
						src: "../../static/my_mater7.jpg",
						num: 59
					},
					{
						id: 8,
						src: "../../static/my_mater8.jpg",
						num: 28
					},
					{
						id: 9,
						src: "../../static/my_mater9.jpg",
						num: 39
					}
				]
			}
		},
		methods:{
			toMaterDetail: function(e){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+e
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.my_mater{
		padding: 30upx 20upx;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		.my_item{
			overflow: hidden;
			margin-right: 20upx;
			margin-bottom: 25upx;
			&:nth-of-type(3n){
				margin-right: 0;
			}
			image{
				display: block;
				width: 224upx;
				height: 275upx !important;
				border-top-left-radius: 5upx;
				border-top-right-radius: 5upx;
			}
			.my_down{
				padding: 15upx 10upx;
				box-sizing: border-box;
				background: #00001f;
				color: #fff;
				font-size: 20upx;
				border-bottom-left-radius: 5upx;
				border-bottom-right-radius: 5upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
