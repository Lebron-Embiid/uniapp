<template>
	<view class="order_comment">
		<view class="page_bg"></view>
		<view class="goods-list">
			<view class="goods-item" v-for="(item,index) in goods_list" :key="item.id">
				<view class="flex-row score-row">
					<view class="flex-grow-0">
						<image class="goods-pic" :src="item.goods_pic"></image>
					</view>
					<view class="flex-grow-1 flex-row score-box">
						<view @click="setScore" :class="[item.score==3?'active':'']" class="score-item" :data-index="index" data-score="3">
							<image :src="'../../static/icon-comment-score-3'+[item.score==3?'.active':'']+'.png'" class="score_img"></image>
							<text>好评</text>
						</view>
						<view @click="setScore" :class="[item.score==2?'active':'']" class="score-item" :data-index="index" data-score="2">
							<image :src="'../../static/icon-comment-score-2'+[item.score==2?'.active':'']+'.png'" class="score_img"></image>
							<text>中评</text>
						</view>
						<view @click="setScore" :class="[item.score==1?'active':'']" class="score-item" :data-index="index" data-score="1">
							<image :src="'../../static/icon-comment-score-1'+[item.score==1?'.active':'']+'.png'" class="score_img"></image>
							<text>差评</text>
						</view>
					</view>
				</view>
				<view class="content-row">
					<view class="nowrap form-label">评价内容</view>
					<view>
						<textarea @input="contentInput" maxlength="2000" :value="item.content" :data-index="index" placeholder="请输入评价内容" placeholderStyle="color:#ccc"></textarea>
					</view>
				</view>
				<view class="pic-list">
					<view class="image-preview" v-for="(items,pic_index) in item.pic_list" :key="item.id">
						<text @click="deleteImage" :data-index="index" :data-pic_index="pic_index" class="image-del">×</text>
						<image mode="aspectFill" :src="items" style="width: 160upx;height: 160upx"></image>
					</view>
					<view @click="chooseImage" :data-index="index" class="image-picker" v-if="!item.pic_list||item.pic_list.length<6">
						<image src="../../static/icon-image-picker.png" style="width: 160upx;height: 160upx"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bar-bottom">
			<view @click="commentSubmit" class="submit-btn">提交</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				order_id: "",
				goods_list: []
			}
		},
		onLoad(opt) {
			var that = this;
			that.order_id = opt.id;
			uni.request({
				url: that.$api+"order/comment-preview&type=mall&access_token="+that.$access_token,
				method: "GET",
				data:{
					order_id: opt.id
				},
				success: function(res) {
					var goods_list = [];
					console.log(res.data.data.goods_list)
					for(let i in res.data.data.goods_list){
						goods_list.push({
							goods_id: res.data.data.goods_list[i].goods_id,
							goods_pic: res.data.data.goods_list[i].goods_pic,
							score: 3,
							content: "",
							pic_list: [],
							uploaded_pic_list: []
						})
					}
					that.goods_list = goods_list;
				}
			});
		},
		methods:{
			setScore: function(e) {
				var that = this;
				var score = parseInt(e.currentTarget.dataset.score);
				var index = parseInt(e.currentTarget.dataset.index);
				that.goods_list[index].score = score;
				console.log(that.goods_list)
			},
			contentInput: function(e) {
				var that = this;
				var index = parseInt(e.currentTarget.dataset.index);
				that.goods_list[index].content = e.detail.value;
			},
			chooseImage: function(e) {
				var that = this;
				var index = parseInt(e.currentTarget.dataset.index);
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						that.goods_list[index].pic_list = res.tempFilePaths;
						for(let i=0;i<that.goods_list[index].pic_list.length;i++){
							uni.uploadFile({
								url: that.$api+'default/upload-image', //图片接口
								filePath: res.tempFilePaths[i],
								name: 'image',
								success: (uploadFileRes) => {
									var data = JSON.parse(uploadFileRes.data);
									console.log(data.data.url)
									that.goods_list[index].uploaded_pic_list.push(data.data.url);
								}
							});
						}
					}
				});
			},
			deleteImage: function(e) {
				console.log(e)
				var that = this;
				var idx = parseInt(e.currentTarget.dataset.index);
				var pic_idx = parseInt(e.currentTarget.dataset.pic_index);
				uni.showModal({
					title: "提示",
					content: "确定删除该图片？",
					success: (res) => {
						if(res.confirm){
							that.goods_list[idx].pic_list.splice(pic_idx, 1);
							that.goods_list[idx].uploaded_pic_list.splice(pic_idx, 1);
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			commentSubmit: function(e) {
				var that = this;
				for(let i in that.goods_list){
					if(that.goods_list[i].content == ''){
						uni.showToast({
							title: "请填写评价内容！",
							icon: "none"
						})
						return false;
					}
				}
				console.log(that.goods_list)
			}
		}
	}
</script>

<style scoped>
	.goods-list{
		margin-bottom: 120upx;
	}
	.goods-item{
		border-bottom:1rpx solid #e3e3e3;
		margin-bottom:20rpx;
		background: #fff;
	}
	.score-row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #e3e3e3;
	}
	.goods-pic{
		display: block;
		width: 72upx;
		height: 72upx !important;
	}
	.score-box{
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.score-item{
		display: block;
		width: 30%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.score-item.active{
		color: #ff4544;
	}
	.score_img{
		display: block;
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
	.score-item text{
		font-size: 28upx;
	}
	.content-row{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 24upx 20upx;
		box-sizing: border-box;
		font-size: 28upx;
	}
	.form-label{
		margin-right: 24upx;
	}
	.content-row textarea{
		font-size: 28upx;
		padding: 5upx;
		box-sizing: border-box;
	}
	.pic-list{
		padding: 24upx 20upx;
		box-sizing: border-box;
	}
	.image-picker,.image-preview {
		display: inline-block;
		margin-left: 20upx;
		margin-top: 20upx;
	}

	.image-preview {
		position: relative;
	}

	.image-preview .image-del {
		position: absolute;
		top: -15upx;
		right: -15upx;
		height: 50upx;
		line-height: 1.1;
		text-align: center;
		width: 50upx;
		background: #ff4544;
		color: #fff;
		font-weight: bolder;
		border-radius: 999upx;
		font-size: 40upx;
		box-shadow: 0 1upx 2upx rgba(0,0,0,.2);
		z-index: 5;
	}
	.submit-btn{
		display: block;
		background: #00001F;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		position: fixed;
		left: 0;
		bottom: 0;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		z-index: 10;
	}
</style>
