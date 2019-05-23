<template>
	<view class="science_box">
		<view class="page_bg"></view> 
		<view class="science_ul">
			<view class="science_item" :class="[item.show == 'true'?'':'active']" v-for="(item,index) in science_list" :key="index">
				<view class="si_question">{{item.content}}</view>
				<view class="si_answer"><text>答：</text><view>{{item.reply_content}}</view></view>
				<view class="si_showAll" @click="toShowAll(index)"><image src="../../static/next.png" mode=""></image><block v-if="item.show == 'true'">隐藏</block><block v-else>展开</block></view>
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
			toShowAll: function(e){
				if(this.science_list[e].show == "true"){
					this.science_list[e].show = "false";
				}else{
					this.science_list[e].show = "true"
				}
			},
			getKeyword: function(e){
				this.keyword = e.detail.value;
			}
		},
		onLoad(){
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			setTimeout(function () {
			uni.request({
				url: that.$api+'default/article-message-list&access_token='+that.$access_token,
				method: 'GET',
				success: res => {
					var science_list = res.data.data.list;					
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
			}, 1000);
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				uni.request({
					url: that.$api+'default/article-message-list&access_token='+that.$access_token,
					method: 'GET',
					success: res => {
						var science_list = res.data.data.list;					
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
			if(that.page)
		   that.page = parseInt(that.page)+parseInt(1)	
			uni.request({
				url: that.$api+'default/article-message-list&access_token='+that.$access_token,
				method: 'GET',
				data:{page:that.page},
				success: res => {
					let news_list =  res.data.data.list;						
					that.science_list = that.science_list.concat(news_list)
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
		padding: 40upx 25upx;
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
			}
		}
		.si_showAll,.si_showTitle{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 24upx;
			margin-top: 10upx;
			image{
				display: inline-block;
				width: 10upx;
				height: 17upx;
				transform: rotate(-90deg);
				margin-right: 15upx;
			}
		}
		&.active{
			.si_question{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.si_answer{
				view{
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					word-break: break-all;
				}
			}
			.si_showAll,.si_showTitle{
				image{
					transform: rotate(90deg)
				}
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
