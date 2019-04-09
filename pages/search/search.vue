<template>
	<view class="search_box">
		<view class="search_form">
			<view><image src="../../static/search.png" mode="widthFix"></image><input type="text" placeholder="请输入搜索内容" value="" /></view>
			<button @click="back">取消</button>
		</view>
		<view class="search_content">
			<view class="search_item" v-for="(item,index) in searchList" @click="toStoreDetail(item.id)" :key="index">
				<image :src="item.src" mode="widthFix"></image>
				<view class="si_title">{{item.title}}</view>
				<view class="si_info">{{item.info}}</view>
				<view class="si_price">￥{{item.price}}<text>规格：{{item.type}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				searchList:[
					{
						id: 1,
						src: "../../static/store_img1.jpg",
						title: "艾璐卡-山羊奶悦颜清透洁乳",
						info: "清洁皮肤，长效保湿滋润",
						price: 98,
						type: "3.5g"
					}
				]
			}
		},
		methods:{
			back: function(e){
				uni.navigateBack({
					delta: 1
				})
			},
			toStoreDetail: function(e){
				uni.navigateTo({
					url: "/pages/store_detail/store_detail?id="+e
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.search_form{
		padding: 10upx 20upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		view{
			width: 83%;
			background: #eee;
			border-radius: 10upx;
			position: relative;
			image{
				display: block;
				position: absolute;
				left: 20upx;
				top: 50%;
				transform: translateY(-50%);
				z-index: 2;
				width: 31upx;
				height: 31upx !important;
			}
			input{
				display: block;
				color: #333;
				font-size: 28upx;
				padding: 6upx 20upx 6upx 70upx;
			}
		}
		button{
			width: 15%;
			padding: 0;
			margin: 0;
			font-size: 28upx;
			background: none;
			&:after{
				border: 0;
			}
		}
	}
	.search_content{
		padding: 30upx 20upx;
		border-top: 1px solid #eee;
		.search_item{
			padding-bottom: 10upx;
			border-bottom: 1px solid #eee;
			overflow: hidden;
			image{
				display: block;
				float: left;
				width: 150upx;
				height: 130upx !important;
				margin-right: 30upx;
			}
			.si_title{
				color: #160c11;
				font-size: 22upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin: 10upx 0 5upx;
			}
			.si_info{
				color: #7d7d7d;
				font-size: 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin: 8upx 0 15upx;
			}
			.si_price{
				color: #00001f;
				font-size: 24upx;
				text{
					float: right;
					color: #4d4d4d;
					font-size: 18upx;
				}
			}
		}
	}
</style>
