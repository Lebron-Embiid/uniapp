<template>
	<view class="my_agent_box">
		<view class="page_bg"></view>
		<!-- <view class="agent_nav" style="display: none;">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}({{item.num}}人)</view>
		</view> -->
		<!-- 一级代理 -->
		<view class="agent_list" v-show="currentTab == 0">
			<commonAgent :agentList="agentList1"></commonAgent>
			<!-- <block v-if="agentList1 == '' || agentList1.length == 0">
				<view class="not_have">暂无代理</view>
			</block> -->
		</view>
		<!-- 二级代理 -->
		<view class="agent_list" v-show="currentTab == 1">
			<commonAgent :agentList="agentList1"></commonAgent>				
		</view>
	</view>
</template>

<script>
	import commonAgent from '@/components/common-agent.vue'
	export default{
		data(){
			return{
				page_one:1,
				page_one_count:1,
				page_tow:1,
				page_tow_count:1,
				navbar:[{name:"一级代理",num: 0},{name:"二级代理",num: 5}],
				currentTab:0,
				agentList1: [
					// {
// 						id: 1,
// 						avatar: "../../static/avatar1.png",
// 						name: "小黄鸭",
// 						time: "2019-03-26",
// 						type: "天使代理"
					// }
				],
				agentList2: [
					// {
// 						id: 2,
// 						avatar: "../../static/avatar2.png",
// 						name: "小黄鸭",
// 						time: "2019-03-26",
// 						type: "天使代理"
					// }
				]
			}
		},
		components:{
			commonAgent
		},
		methods:{
			navbarTap: function(e){ 
				this.currentTab = e;
				var that = this;
				console.log(that.currentTab)
				uni.request({
					url: that.$api+'user/agent-list&access_token='+that.$access_token,
					method: 'GET',
					data:{level_id:that.currentTab},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						// if(res.data.code == 0){
							that.agentList1 = res.data.data.list;		 
						// }
						if(that.currentTab == 0){						
							that.page_one_count = res.data.data.data.page_count;	
						}else{							
							that.page_tow_count = res.data.data.data.page_count;	
						}
						console.log(1111)
						console.log(that.agentList1)
						
					},
					fail: (res) => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			setTimeout(function () {
			uni.request({
				url: that.$api+'user/agent-list&access_token='+that.$access_token,
				method: 'GET',
				data:{level_id:0},
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
						console.log(res)
					// if(res.data.code == 0){
						that.agentList1 = res.data.data.data.list;	
						that.page_one_count = res.data.data.data.page_count;	
						that.navbar[0].num	=  res.data.data.one_count;
						that.navbar[1].num	=  res.data.data.tow_count;
					// } 	
						console.log(1111)
						console.log(that.agentList1)
						console.log(that.page_one_count)
									
				},
				fail: (res) => {
					uni.showToast({
						title:res.data.msg,
						icon:'none',
					});
				}
			});
			}, 1000);
			uni.startPullDownRefresh(); 
		},
		onPullDownRefresh() {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			that.page_one=1;
			that.page_one_count=1;
			that.page_tow=1;
			that.page_tow_count=1;
			setTimeout(function () {
				uni.request({
					url: that.$api+'user/agent-list&access_token='+that.$access_token,
					method: 'GET',
					data:{level_id:0},
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
							console.log(res)
						// if(res.data.code == 0){
							that.agentList1 = res.data.data.data.list;	
							that.page_one_count = res.data.data.data.page_count;	
							that.navbar[0].num	=  res.data.data.one_count;
							that.navbar[1].num	=  res.data.data.tow_count;
						// } 	
							console.log(1111)
							console.log(that.agentList1)
							console.log(that.page_one_count)
										
					},
					fail: (res) => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
				uni.stopPullDownRefresh();
			}, 1000);
		},
		
		//上拉触底
		onReachBottom(){
			let that = this;
			uni.showLoading({
				title: "加载中"
			})
			console.log(that.page_one);
			if(that.currentTab == 0){
				if(that.page_one == that.page_one_count){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				 that.page_one = parseInt(that.page_one)+parseInt(1)	
				 var page = that.page_one
			}else{
				if(that.page_tow == that.page_tow_count){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				 that.page_tow = parseInt(that.page_tow)+parseInt(1)	
				 var page = that.page_tow
			} 						
			uni.request({
				url: that.$api+'user/agent-list&access_token='+that.$access_token,
				method: 'GET',
				data:{page:page,level_id:that.currentTab},
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					let agentList1 = res.data.data.data.list; 	 
					that.agentList1 = that.agentList1.concat(agentList1)
					uni.hideLoading();
				},
				fail: (res) => {
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
	page{background: #f5f5f7;}
	.agent_nav{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		background: #fff;
		border-bottom: 1px solid #EBEBEB;
		view{
			width: 50%;
			color: #222;
			font-size: 24upx;
			padding: 20upx;
			border-bottom: 1px solid transparent;
			&.active{
				border-bottom: 1px solid #44445B;				
			}
		}
	}
	.agent_list{
		// padding-top: 60px;
		box-sizing: border-box;
	}
</style>
