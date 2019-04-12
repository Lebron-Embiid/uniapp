<template>
	<view class="my_order_box">
		<view class="page_bg"></view>
		<view class="order_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 全部订单 -->
		<view class="order_list" v-show="currentTab == 0">
			<commonOrder :orderList="orderList"></commonOrder>
		</view>
		<!-- 待付款 -->
		<view class="order_list" v-show="currentTab == 1">
			
		</view>
		<!-- 待发货 -->
		<view class="order_list" v-show="currentTab == 2">
			
		</view>
		<!-- 待收货 -->
		<view class="order_list" v-show="currentTab == 3">
			
		</view>
		<!-- 已完成 -->
		<view class="order_list" v-show="currentTab == 4">
			
		</view>
	</view>
</template>

<script>
	import commonOrder from "@/components/common-order.vue"
	export default{
		data(){
			return{
				navbar:[{name:"全部订单"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"已完成"}],
				currentTab: 0,
				orderList:[
					{
						id: 1,
						time: "2019-03-20 15:21",
						status: true,
						statusText: "等待您的付款",
						img: "../../static/order_img1.jpg",
						title: "艾璐卡柔雾丝绒唇釉",
						info: "持久滋润·饱满显色·细腻亮泽·抚平唇纹",
						type: "6.8ml",
						price: 168,
						num: 1,
						pay: 168,
						finish: false
					},
					{
						id: 2,
						time: "2019-03-20 15:21",
						status: false,
						statusText: "未发货",
						img: "../../static/order_img2.jpg",
						title: "艾璐卡山羊奶悦颜清透洁面乳",
						info: "深层清洁皮肤，长效保湿滋润",
						type: "120g",
						price: 168,
						num: 1,
						pay: 98,
						finish: false
					},
					{
						id: 3,
						time: "2019-03-20 15:21",
						status: false,
						statusText: "已发货",
						img: "../../static/order_img3.jpg",
						title: "艾璐卡山羊奶悦颜清透凝霜",
						info: "深层清洁皮肤，长效保湿滋润",
						type: "20ml",
						price: 168,
						num: 1,
						pay: 168,
						finish: false
					},
					{
						id: 4,
						time: "2019-03-20 15:21",
						status: false,
						statusText: "已完成",
						img: "../../static/order_img4.jpg",
						title: "艾璐卡水光美颜气垫 [象牙白]",
						info: "提亮  修颜   均匀   遮瑕   持久   保湿 ",
						type: "15g",
						price: 168,
						num: 1,
						pay: 158,
						finish: true
					}
				]
			}
		},
		components:{
			commonOrder
		},
		methods:{
			navbarTap: function(e){
				this.currentTab = e;
			}
		},
		onLoad: function(opt){
			let that = this;
			that.currentTab = opt.id;
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
