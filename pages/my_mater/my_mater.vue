<template>
	<view class="my_mater">
		<view class="my_item" v-for="(item,index) in myMaterList" :key="index">
			<image :src="item.cover_pic" mode="widthFix"></image>
			<view class="my_down">{{item.lower}}</view>
		</view>
		<view class="page_bg"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				page_count:1,
				page:1,
				myMaterList: [
// 					{
// 						id: 1,
// 						src: "../../static/my_mater1.jpg",
// 						num: 59
// 					},
					
				]
			}
		},
		methods:{
			toMaterDetail: function(e){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+e
				})
			}
		},
		onLoad(opt) {
			var that = this;
			uni.request({
				url: that.$api+'user/topic-list&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.page_count = res.data.data.page_count;
					that.myMaterList = res.data.data.list
 					
				},
				fail: () => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
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
				url: that.$api+'user/topic-list&access_token='+that.$access_token,
				method: 'GET',
				data:{page:that.page},
				success: res => {
					let list = res.data.data.list;
					// var list = res.data.data.list;
					that.myMaterList = that.myMaterList.concat(list)
					console.log(that.myMaterList) 
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
