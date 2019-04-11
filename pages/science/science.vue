<template>
	<view class="science_box">
		<view class="page_bg"></view>
		<view class="form_top">
			<form @click="toSearch" class="form_box">
				<input type="text" disabled placeholder="请输入您要搜索的关键词" value="" />
				<button><image src="../../static/search.png" mode=""></image></button>
			</form>
		</view>
		<view class="science_ul">
			<view class="science_item" v-for="(item,index) in science_list" @click="toDetail(item,index)" :key="index">
				<view class="si_question">{{item.question}}</view>
				<view class="si_answer">答：{{item.answer}}</view>
			</view>
		</view>
		<view class="page_box">
			<view class="page_btn prev">上一页</view>
			<view class="page_btn next">上一页</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				science_list:[
					{
						id: 1,
						question: "呦蓝是做什么的？",
						answer: "呦蓝是一个社交电商品牌，为呦蓝生物科技（上海）有限公司所有，拥有自主美妆品牌艾璐卡和战略合作品牌纽西之谜..."
					},
					{
						id: 2,
						question: "呦蓝创立的初衷",
						answer: "首先，呦蓝汇聚全球力量寻找优质的护肤原料，为中国女性带来更高效，更高性价比的护肤美妆产品，让更多女性能够绽放肌肤如初之美..."
					},
					{
						id: 3,
						question: "如何做呦蓝的代理？",
						answer: "您可以拨打呦蓝官方客服电话：400-806-9192或添加呦蓝官方客服微信号：YOULAN-666888 进行咨询。感谢亲的支持。"
					},
					{
						id: 4,
						question: "呦蓝的产品正规吗？效果如何？",
						answer: "呦蓝现有两个品牌，艾璐卡和纽西之谜。呦蓝的产品在药监局都有备案，符合国家对于护肤美妆产品的各项要求，可以保证正规合格..."
					},
					{
						id: 5,
						question: "做呦蓝的代理都有哪些福利？",
						answer: "首先，呦蓝汇聚全球力量寻找优质的护肤原料，为中国女性带来更高效，更高性价比的护肤美妆产品，让更多女性能够绽放肌肤如初之美..."
					},
					{
						id: 6,
						question: "如何做呦蓝的代理？",
						answer: "1.以极低的创业成本拥有一份在家也可以做的事业；2.以远低于呦蓝产品市场零售价的价格购买呦蓝产品；"
					},
					{
						id: 7,
						question: "呦蓝的产品在药监局能查到备案吗？",
						answer: "可以的。艾璐卡和纽西之谜都可以，如果查不到，请检查网址是否正确，产品名称输入是否正确。"
					}
				]
			}
		},
		methods:{
			toDetail: function(res,idx){
				uni.navigateTo({
					url: "/pages/science_detail/science_detail?id="+res.id+"&question="+res.question+"&answer="+res.answer
				})
			},
			toSearch: function(e){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: "/pages/message/message"
			})
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
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-wrap: break-word;
			word-break: break-all;
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
