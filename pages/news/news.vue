<template>
	<view class="news_box">
		<view class="search_box">
			<form @click="toSearch" class="form_box">
				<input @input="getKeyword" type="text" placeholder="请输入您要搜索的关键词" name="keyword" value="" />
				<button><image src="../../static/search.png" mode="widthFix"></image></button>
			</form>
		</view>
		<view class="news_content">
			<commonNews :news_list="news_list"></commonNews>
		</view>
		<!-- <block v-if="news_list != ''">
			<view class="page_box">
				<view class="page_btn prev">上一页</view>
				<view class="page_btn next">上一页</view>
			</view>
		</block> -->
	</view>
</template>

<script>
	import util from "@/common/util.js"
	import commonNews from "@/components/common-news.vue"
	export default{
		data(){
			return{
				keyword:'',
				page:1,
				page_count:1,
				news_list:[
// 					{
// 						id: 1,
// 						title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
// 						info: "法国时间1月20日，由艾璐卡eloo Doca...",
// 						look: "1.1w",
// 						date: "04.28",
// 						src: "../../static/hot_img1.jpg"
// 					},
// 					{
// 						id: 2,
// 						title: "武钢体育馆·呦蓝YOULAN周年庆典完美落幕",
// 						info: "2017年10月10日，武汉武钢体育馆内...",
// 						look: "1.1w",
// 						date: "04.28",
// 						src: "../../static/hot_img2.jpg"
// 					},
// 					{
// 						id: 3,
// 						title: "艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",
// 						info: "法国时间1月20日，由艾璐卡eloo Doca...",
// 						look: "1.1w",
// 						date: "04.28",
// 						src: "../../static/hot_img3.jpg"
// 					},
// 					{
// 						id: 4,
// 						title: "武钢体育馆·呦蓝YOULAN周年庆典完美落幕",
// 						info: "2017年10月10日，武汉武钢体育馆内...",
// 						look: "1.1w",
// 						date: "04.28",
// 						src: "../../static/hot_img4.jpg"
// 					}
				]
			}
		},
		components:{
			commonNews
		},
		
		methods:{
			getKeyword: function(e){
				this.keyword = e.detail.value;
			},
			toSearch: function(e){
				let that = this;
				console.log(that.keyword)
				uni.request({
					url: that.$api+'default/article-list&page=1&cat_id=2',
					method: 'GET',
					data:{keyword:that.keyword},
					dataType: "json",
					success: res => {
						let news_list = [];
						for(let i in res.data.data.list){
							let item = res.data.data.list;
							news_list.push({
								id: item[i].id,
								title: item[i].title,
								info: item[i].describe,
								look: item[i].num,
								date: util.formatDate(parseInt(item[i].addtime)),
								src: item[i].cover_pic
							})
						}
						that.page_count = res.data.data.page_count;
						that.news_list = news_list;
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
		onLoad(opt) {
			let that = this;
			uni.request({
				url: that.$api+'default/article-list&page=1&cat_id=2',
				method: 'GET',
				success: res => {
					let news_list = [];
					for(let i in res.data.data.list){
						let item = res.data.data.list;
						news_list.push({
							id: item[i].id,
							title: item[i].title,
							info: item[i].describe,
							look: item[i].num,
							date: util.formatDate(parseInt(item[i].addtime)),
							src: item[i].cover_pic
						})
					}
					that.page_count = res.data.data.page_count;
					that.news_list = news_list;
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
			 
		   that.page = parseInt(that.page)+parseInt(1)	
			uni.request({
				url: that.$api+'default/article-list&cat_id=2',
				method: 'GET',
				data:{page:that.page,keyword:that.keyword},
				success: res => {
					let news_list = [];
					for(let i in res.data.data.list){
						let item = res.data.data.list;
						news_list.push({
							id: item[i].id,
							title: item[i].title,
							info: item[i].describe,
							look: item[i].num,
							date: util.formatDate(parseInt(item[i].addtime)),
							src: item[i].cover_pic
						})
					}
					that.news_list = that.news_list.concat(news_list)
					  console.log(that.news_list) 
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
	.search_box{
		padding: 20upx 20upx 40upx;
		box-sizing: border-box;
		background: #f5f5f7;
	}
	.form_box{
		float: none;
		width: 100%;
		margin-top: 0;
	}
	.news_content{
		padding: 30upx 20upx 0;
		box-sizing: border-box;
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
