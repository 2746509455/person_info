<template>
	<view style="background-color: #f3f3f3;">
		<view class="banTab" @click="back">
			<u-navbar :height="40" :is-back="true" title="志愿者服务列表">
			
			</u-navbar>
		</view>
		<view class="container">
			<view class="white"></view>
			<view class="context">
				<view class="title">
					<view class="red"></view>
					<view class="subTitle">
						学习名称
					</view>
				</view>
				<view style="font-weight: 600;">
					8月28日参加创城主题党日活动
				</view>
				<view class="title">
					<view class="red"></view>
					<view class="subTitle">
						学习风采展示
					</view>
				</view>
				<view class="text">
					活动中，大家共同学习了七夕节的由来，重温了“牛郎织女”的爱情故事，分享了七夕节的民间习俗。随后，大家饱含情感地诵读了《七夕》、《鹊桥仙》、《秋夕》等经典诗篇，在美丽的诗句中感受传统文化的丰富内涵和深厚底蕴。
				</view>
			</view>
			<view class="images">
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
				<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 点击图片查看大图
			preview() {
				uni.previewImage({
					urls: ["/static/image/index/activity.png"],
					current: '',
					success: function(res) {
						console.log('查看大图')
					}
				})
			},
			back(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.banTab{
		height: 80rpx;
	}
	.container{
		width: 90%;
		margin: 0 auto;
		font-family: PingFangSC-Medium, PingFang SC;
	}
	.white{
		width: 100v;
		height: 100rpx;
	}
	.context{
		.title{
			height: 100rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.red{
				width: 4rpx;
				height: 40rpx;
				background-color: #c30000;
			}
			.subTitle{
				margin-left: 20rpx;
				font-weight: 600;
				font-size: 36rpx;
			}
		}
		.text{
			text-indent: 60rpx;
			line-height: 50rpx;
		}
	}
	.images{
		display: flex;
		flex-wrap: wrap;
		.image{
			width: 220rpx;
			height: 220rpx;
			margin: 5rpx 0 0 5rpx;
		}
	}
</style>
