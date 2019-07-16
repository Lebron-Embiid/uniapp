<template>
	<view class="science_box">
		<view class="page_bg"></view>
		<view class="form_top">
			<form @click="toSearch" class="form_box">
				<input @input="getKeyword" type="text" placeholder="请输入您要搜索的关键词" value="" />
				<button><image src="../../static/search.png" mode=""></image></button>
			</form>
		</view>
		<view class="science_ul">
			<view class="science_item" v-for="(item,index) in science_list" @click="toDetail(item,index)" :key="index">
				<view class="si_question">{{item.question}}</view>
				<view class="si_answer"><text>答：</text><view>{{item.answer}}</view></view>
			</view>
		</view>
		<!-- <block v-if="science_list != ''">
		<view class="page_box">
			<view class="page_btn prev">上一页</view>
			<view class="page_btn next">上一页</view>
		</view>
		</block> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				page_count:1,
				page:1,
				keyword:'',
				science_list:[
					
				]
			}
		},
		methods:{
			getKeyword: function(e){
				this.keyword = e.detail.value;
			},
			toDetail: function(res,idx){
				uni.navigateTo({
					url: "/pages/science_detail/science_detail?id="+res.id
				})
			},
			toSearch: function(e){
				var that = this;
				console.log(that.keyword)
				uni.request({
					url: that.$api+'default/article-list&page=1&cat_id=3',
					method: 'GET',
					data:{keyword:that.keyword},
					dataType: "json",
					success: res => {
						var science_list = [];
						for(var i in res.data.data.list){
							var item = res.data.data.list;
							science_list.push({
								id: item[i].id,
								question: item[i].title,
								answer: item[i].describe
							})
						}
						that.science_list = science_list;
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
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: "/pages/message/message"
			})
		},
		onLoad(){
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			uni.request({
				url: that.$api+'default/article-list&page=1&cat_id=3',
				method: 'GET',
				success: res => {
					var science_list = [];
					for(var i in res.data.data.list){
						var item = res.data.data.list;
						science_list.push({
							id: item[i].id,
							question: item[i].title,
							answer: item[i].describe
						})
					}
					that.page_count = res.data.data.page_count;
					that.science_list = science_list;
				},
				fail: () => {
					uni.showToast({
						icon: 'none',
						title: res.data.msg,
						duration: 2000
					})
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
			uni.showLoading({
				title: "加载中"
			})	
			if(that.page)
		   that.page = parseInt(that.page)+parseInt(1)	
			uni.request({
				url: that.$api+'default/article-list&cat_id=3',
				method: 'GET',
				data:{page:that.page,keyword:that.keyword},
				success: res => {
					let news_list = [];
					for(let i in res.data.data.list){
						let item = res.data.data.list;
						news_list.push({
							id: item[i].id,
							question: item[i].title,
							answer: item[i].describe							
						})
					}
					that.science_list = that.science_list.concat(news_list)
					  console.log(that.science_list) 
					  uni.hideLoading();
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
	.form_top{
		padding: 20upx 20upx 40upx;
		overflow: hidden;
		box-sizing: border-box;
		.form_box{
			float: none;
			width: 100%;
			margin-top: 0;
		}
	}
	.science_item{
		background: #fff;
		padding: 40upx 25upx 50upx;
		box-sizing: border-box;
		margin-bottom: 15upx;
		.si_question{
			color: #333;
			font-size: 26upx;
			margin-bottom: 20upx;
		}
		.si_answer{
			color: #333;
			font-size: 22upx;
			display: flex;
			justify-content: flex-start;
			view{
				width: 90%;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-wrap: break-word;
				word-break: break-all;
			}
		}
	}
	.page_box{
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 60upx auto 100upx;
		.page_btn{
			width: 35%;
			color: #fff;
			font-size: 26upx;
			background: #000;
			border-radius: 5upx;
			text-align: center;
			padding: 14upx 0 16upx;
		}
		.prev{
			margin-right: 5%;
		}
	}
</style>
