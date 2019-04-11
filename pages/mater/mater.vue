<template>
	<view class="mater_box">
		<view class="page_bg"></view>
		<view class="list_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<view class="mt44"></view>
		<view class="photo_mater" v-show="currentTab == 0">
			<view class="photo_box">
				<view class="photo_item" @click="toMaterDetail(item)" v-for="(item,index) in photo_list" :key="index">
					<view class="photo_head">
						<image :src="item.avatar" class="avatar_img" mode="widthFix"></image>
						<text class="ph_name">{{item.name}}</text>
						<text class="ph_txt">{{item.time}}</text>
						<text class="ph_txt">浏览：{{item.num}}</text>
						<block v-if="item.sign == true">
							<text class="ph_sign">精选</text>
						</block>
						<image src="../../static/share.png" class="share_img" mode="widthFix"></image>
					</view>
					<view class="photo_content">
						<view class="pc_item" v-for="(mater,idx) in item.maters" :key="idx">
							<image :src="mater" class="c_img" mode="widthFix"></image>
							<image src="../../static/download.png" class="download_icon" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="video_mater" v-show="currentTab == 1">
			<form @click="toSearch" class="form_box">
				<input type="text" disabled placeholder="请输入您要搜索的关键词" value="" />
				<button><image src="../../static/search.png" mode=""></image></button>
			</form>
			<view class="video_content">
				<commonVideo :video_list="video_list"></commonVideo>
			</view>
		</view>
	</view>
</template>

<script>
	import commonVideo from "../../components/common-video.vue"
	export default{
		data(){
			return{
				navbar:[{name:"图片"},{name:"视频"}],
				currentTab:0,
				photo_list:[
					{
						id: 1,
						avatar: "../../static/avatar1.png",
						name: "小黄鸭",
						time: "2018-03-24",
						num: 123,
						sign: true,
						maters: ["../../static/mater_img1.jpg","../../static/mater_img2.jpg","../../static/mater_img3.jpg"]
					},
					{
						id: 2,
						avatar: "../../static/avatar2.png",
						name: "小黄鸭",
						time: "2018-03-24",
						num: 123,
						sign: false,
						maters: ["../../static/mater_img4.jpg","../../static/mater_img5.jpg"]
					},
					{
						id: 3,
						avatar: "../../static/avatar1.png",
						name: "小黄鸭",
						time: "2018-03-24",
						num: 123,
						sign: true,
						maters: ["../../static/mater_img6.jpg","../../static/mater_img7.jpg","../../static/mater_img8.jpg"]
					}
				],
				video_list:[
					{
						poster: "../../static/video_poster1.jpg",
						avatar: "../../static/video_img.png",
						title: "冬季水嫩肌肤养成法",
						look: "1.5w",
						video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
					},
					{
						poster: "../../static/video_poster2.jpg",
						avatar: "../../static/video_img.png",
						title: "问题性肌肤全解分析—说说色斑那点事",
						look: "12w",
						video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
					},
					{
						poster: "../../static/video_poster3.jpg",
						avatar: "../../static/video_img.png",
						title: "问题性肌肤全解分析—痘痘肌",
						look: "1.7w",
						video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
					}
				]
			}
		},
		components:{
			commonVideo
		},
		methods:{
			navbarTap: function(e){
				this.currentTab = e;
			},
			toMaterDetail: function(res){
				uni.navigateTo({
					url: "/pages/mater_detail/mater_detail?id="+res.id
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
				url: "/pages/release_mater/release_mater"
			})
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.form_box{
		float: none;
		width: 100%;
		margin-top: 0;
		margin-bottom: 30upx;
	}
	.photo_mater,.video_mater{
		padding: 30upx 20upx;
		box-sizing: border-box;
	}
	.photo_box{
		overflow: hidden;
		.photo_item{
			border-bottom: 1upx solid #E6E6E6;
			margin-bottom: 30upx;
			.photo_head{
				overflow: hidden;
				color: #00001f;
				font-size: 26upx;
				margin-bottom: 15upx;
				.avatar_img{
					display: inline-block;
					vertical-align: middle;
					width: 41upx;
					height: 41upx !important;
					margin: 0 10upx 6upx 0;
				}
				.ph_name{
					display: inline-block;
					vertical-align: middle;
					margin: 0 10upx 8upx 0;
					width: 130upx;
					max-width: 130upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.ph_txt{
					color: #6d6d6d;
					font-size: 20upx;
					margin-right: 40upx;
				}
				.ph_sign{
					color: #fff;
					font-size: 22upx;
					background: #f00;
					border-radius: 5upx;
					padding: 5upx 10upx 6upx;
				}
				.share_img{
					display: block;
					width: 30upx;
					height: 32upx !important;
					float: right;
					margin-top: 8upx;
				}
			}
			.photo_content{
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				align-items: center;
				.pc_item{
					width: 32%;
					margin-right: 2%;
					margin-bottom: 20upx;
					position: relative;
					&:nth-of-type(3n){
						margin-right: 0;
					}
					.c_img{
						display: block;
						width: 224upx;
						height: 340upx !important;
					}
					.download_icon{
						position: absolute;
						right: 10upx;
						bottom: 8upx;
						z-index: 5;
						display: block;
						width: 36upx;
						height: 36upx !important;
					}
				}
			}
		}
	}
</style>
