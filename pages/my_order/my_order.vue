<template>
	<view class="my_order_box">
		<view class="page_bg"></view>
		<view class="order_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 全部订单 -->
		<view class="order_list">
			<commonOrder :orderList="orderList" :current="currentTab"></commonOrder>
		</view>
		<!-- 待付款 -->
		<!-- <view class="order_list" v-show="currentTab == 1">
			<commonOrder :orderList="orderList"></commonOrder>
		</view> -->
		<!-- 待发货 -->
		<!-- <view class="order_list" v-show="currentTab == 2">
			<commonOrder :orderList="orderList"></commonOrder>
		</view> -->
		<!-- 待收货 -->
		<!-- <view class="order_list" v-show="currentTab == 3">
			<commonOrder :orderList="orderList"></commonOrder>
		</view> -->
		<!-- 已完成 -->
		<!-- <view class="order_list" v-show="currentTab == 4">
			<commonOrder :orderList="orderList"></commonOrder>
		</view> -->
	</view>
</template>

<script>
	import commonOrder from "@/components/common-order.vue"
	export default{
		data(){
			return{
				page0:1,
				page_count0:1,
				page1:1,
				page_count1:1,
				page2:1,
				page_coun2:1,
				page3:1,
				page_coun3:1,
				navbar:[
					{name:"待付款"},
					{name:"待发货"},
					{name:"待收货"},
					{name:"已完成"},
					// {name:"售后"}
				],
				currentTab: 0,
				orderList:[
// 					{
// 						id: 1,
// 						time: "2019-03-20 15:21",
// 						status: true,
// 						statusText: "等待您的付款",
// 						goods:[
// 							{
// 								id: 1,
// 								img: "../../static/order_img1.jpg",
// 								title: "艾璐卡柔雾丝绒唇釉",
// 								info: "持久滋润·饱满显色·细腻亮泽·抚平唇纹",
// 								type: "6.8ml",
// 								price: 168
// 							}
// 						],
// 						num: 1,
// 						pay: 168,
// 						finish: false
// 					}
				]
			}
		},
		components:{
			commonOrder
		},
		methods:{
			navbarTap: function(e){
				var that = this;
				that.currentTab = e;
				uni.request({
					url: that.$api+'order/list&status='+that.currentTab+'&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success: res => {
						var orderList = [];
						var goods = [];
						var item = res.data.data;
						for(let i in item.list){
// 							for(let j in item.list[i].goods_list){
// 								goods.push({
// 									id: item.list[i].goods_list[j].goods_id,
// 									img: item.list[i].goods_list[j].goods_pic,
// 									title: item.list[i].goods_list[j].goods_name,
// 									// info: "提亮  修颜   均匀   遮瑕   持久   保湿 ",
// 									type: item.list[i].goods_list[j].attr_list,
// 									price: item.list[i].goods_list[j].price,
// 									num: item.list[i].goods_list[j].num,
//  								})
// 							}
							orderList.push({
								id: item.list[i].order_id,
								order_no: item.list[i].order_no,
								time: item.list[i].addtime,
								status: !item.list[i].pay_type,
								// statusText: "已完成",
								goods: item.list[i].goods_list,
								pay: item.list[i].pay_price,
								is_pay: item.list[i].is_pay,
								is_send: item.list[i].is_send,
								is_confirm: item.list[i].is_confirm,
								is_comment: item.list[i].is_comment,
								apply_delete: item.list[i].apply_delete
							})
						}
						if(that.currentTab == 0){
							that.page_count0 = res.data.data.page_count;
						}else if(that.currentTab == 1){
							that.page_count1 = res.data.data.page_count;
						}else if(that.currentTab == 2){
							that.page_count2 = res.data.data.page_count;
						}else if(that.currentTab == 3){
							that.page_count3 = res.data.data.page_count;
						}
						that.orderList = orderList;
					},
					fail: () => {
						
					}
				})
			}
		},
		onLoad: function(opt){
			let that = this;
			that.currentTab = parseInt(opt.id);
			uni.request({
				url: that.$api+'order/list&status='+opt.id+'&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success: res => {
					var orderList = [];
					var goods = [];
					var item = res.data.data;
					for(let i in item.list){ 
						orderList.push({
							id: item.list[i].order_id,
							order_no: item.list[i].order_no,
							time: item.list[i].addtime,
							status: !item.list[i].pay_type,
							// statusText: "已完成",
							goods: item.list[i].goods_list,
							pay: item.list[i].total_price,
							// finish: item.list[i].pay_type,
							is_pay: item.list[i].is_pay,
							is_send: item.list[i].is_send,
							is_confirm: item.list[i].is_confirm,
							is_comment: item.list[i].is_comment,
							apply_delete: item.list[i].apply_delete
						})
					}
					that.page_count0 = res.data.data.page_count;
					that.orderList = orderList;
				},
				fail: () => {
					
				}
			})
		},
		//上拉触底
		onReachBottom(){
			let that = this;
			if(that.currentTab == 0){
				if(that.page0 == that.page_count0){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				that.page0 = parseInt(that.page0)+parseInt(1)	
				var page = that.page0		
			}else if(that.currentTab == 1){
				if(that.page1 == that.page_count1){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				that.page1  = parseInt(that.page1)+parseInt(1)	
				var page = that. page1		
			}else if(that.currentTab == 2){
				if(that.page2 == that.page_count2){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				that.page2 = parseInt(that.page2)+parseInt(1)	
				var page = that.page2		
			}else if(that.currentTab == 3){ 
				if(that.page3 == that.page_count3){
				   uni.showToast({
					title:"没有更多数据了",
					icon:'none',
				   });
				   return false;
				}
				that.page3 = parseInt(that.page3)+parseInt(1)	
				var page = that.page3	
			}
			 
		   
			uni.request({
				url: that.$api+'order/list&status='+that.currentTab+'&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				data:{page:page},
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success: res => {
					var orderList = [];
					var goods = [];
					var item = res.data.data;
					for(let i in item.list){ 
						orderList.push({
							id: item.list[i].order_id,
							order_no: item.list[i].order_no,
							time: item.list[i].addtime,
							status: !item.list[i].pay_type,
							// statusText: "已完成",
							goods: item.list[i].goods_list,
							pay: item.list[i].total_price,
							// finish: item.list[i].pay_type,
							is_pay: item.list[i].is_pay,
							is_send: item.list[i].is_send,
							is_confirm: item.list[i].is_confirm,
							is_comment: item.list[i].is_comment,
							apply_delete: item.list[i].apply_delete
						})
					}
					that.orderList = that.orderList.concat(orderList)
					 console.log(that.orderList)
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
	page{background: #f5f5f5 !important;overflow: hidden;}
	.order_nav{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 30;
		// margin: 35upx 0 25upx;
		padding: 0 30upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view{
			color: #797979;
			font-size: 24upx;
			padding: 30upx 0;
			border-bottom: 2upx solid transparent;
			&.active{
				color: #00001f;
				border-bottom: 2upx solid #00001F;
			}
		}
	}
	.order_list{
		margin-top: 55px;
	}
</style>
