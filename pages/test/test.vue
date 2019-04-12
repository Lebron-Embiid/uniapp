<template>
	<view class="test_box">
		<swiper class="swiper" :indicator-dots="indicatorDots" :circular="loop" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="rgba(255,255,255,.5)" indicator-active-color="rgba(255,255,255,1)">
			<swiper-item v-for="(item,index) in banners" :key="index">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="page-section page-section-gap" style="text-align: center;">
			<audio style="text-align: left" loop="true" :controls="controls" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<video id="myVideo" src="https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
				 controls></video>
		</view>
		<sunsin-upimg url="" :notli="false" :count="6" :upreduce="true" @onUpImg="upImgDatas" />
	</view>
</template>

<script>
import sunsinUpimg from '@/components/sunui-upimg/sunui-upimg.vue'
export default{
	data() {
		return{
			current: {
                poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553229257642&di=f7c0c773000c6a42f17d3781cc0df6e9&imgtype=0&src=http%3A%2F%2Fy.gtimg.cn%2Fmusic%2Fphoto_new%2FT002R800x800M000003HSxjs1TKIAq.jpg%3Fmax_age%3D2592000',
                name: '倒数',
                author: 'G.E.M.邓诗颖',
                src: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n2/23/43/994306111.mp3'
            },
            audioAction: {
                method: 'pause'
            },
			latitude: 39.909,
            longitude: 116.39742,
			covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '../../static/location.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '../../static/location.png'
            }],
			indicatorDots: true,
			autoplay: false,
			interval: 2000,
			duration: 500,
			loop: true,
			controls: true,
			banners:[
				"../../static/timg.jpg",
				"../../static/timg.jpg",
				"../../static/timg.jpg"
			]
		}
	},
	components:{
		sunsinUpimg
	},
    onReady: function(res) {
        this.videoContext = uni.createVideoContext('myVideo')
// 		uni.chooseLocation({
// 			success: function (res) {
// 				console.log('位置名称：' + res.name);
// 				console.log('详细地址：' + res.address);
// 				console.log('纬度：' + res.latitude);
// 				console.log('经度：' + res.longitude);
// 			}
// 		});
    },
	methods:{
		
	},
	//获取上传图片的所有信息,为数组
	upImgData(e){
		console.log('来了,伙计',e)
	}
}
</script>

<style>
	.test_box{
		text-align: center;
	}
	uni-swiper{
		height: 300px;
		margin-bottom: 20px;
	}
	uni-swiper-item{
		color: #fff;
		font-size: 28px;
	}
	uni-swiper-item uni-view{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	uni-image{
		display: block;
		width: 100%;
		height: 100%;
	}
	.uni-bg-red{
		background: red;
	}
	.uni-bg-green{
		background: green;
	}
	.uni-bg-blue{
		background: blue;
	}
</style>
