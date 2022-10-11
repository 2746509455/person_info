<template>
	<view>
		<view class="banTab" @click="back">
			<u-navbar :height="40" :is-fixed="false" :is-back="true" title="志愿者服务详情">

			</u-navbar>
		</view>
		<view class="container">
			<!-- 顶部主图 -->
			<view class="banner">
				<image class="banImg" src="@/static/image/index/6dea2a1a2153f7051fbc0051a2ff252.png" mode=""></image>
			</view>
			<!-- 正文内容 -->
			<view class="details">
				<view class="title_col">
					<view class="red"></view>
					<view class="banTitle" style="font-weight: 600;">活动介绍</view>
				</view>
				<view class="title">活动名称:<view class="subTitle">七夕节主题活动</view>
				</view>
				<view class="title">活动类型:<view class="subTitle">文化艺术</view>
				</view>
				<view class="title">活动时间:<view class="subTitle">2022年10月8日上午10:00至11:30</view>
				</view>
				<view class="title">活动对象:<view class="subTitle">兴仁街道全体85岁以上老人</view>
				</view>
				<view class="title">活动内容介绍:</view>
				<view class="text">
					活动中，大家共同学习了七夕节的由来，重温了“牛郎织女”的爱情故事，分享了七夕节的民间习俗。随后，大家饱含情感地诵读了《七夕》、《鹊桥仙》、《秋夕》等经典诗篇，在美丽的诗句中感受传统文化的丰富内涵和深厚底蕴。
				</view>
			</view>


			<!-- 活动风采部分 -->
			<view class="activityImg">
				<view class="title_col">
					<view class="red"></view>
					<view class="banTitle" style="font-weight: 600;">活动风采</view>
				</view>
				<view class="img">
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<image src="@/static/image/index/activity.png" class="image" @click="preview"></image>
					<!-- <image src="@/static/image/index/activity.png" class="image" @click="preview"></image> -->
					<!-- <image src="@/static/image/index/activity.png" class="image" @click="preview"></image> -->
					<!-- <image :src="imageList" class="image" @click="preview"></image> -->
					<view class="image">
						<u-upload width="220rpx" height="220rpx" @on-uploaded="onUploaded" ref="uUpload" :action="action">
						</u-upload>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				// 上传路径
				imageList: [],
				action: 'http://www.example.com/upload'
			}
		},
		methods: {
			// 图片选择或者上传成功后，会保存在组件内部的lists数组中，数组元素为对象
			onUploaded(lists){
				console.log(this.lists);
				this.imageList = lists
				console.log(this.imageList);
			},

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
			back() {
				uni.navigateTo({
					url: '/pagesIndex/volunteerList/volunteerList'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.banTab{
		height: 80rpx;
	}
	.container {
		width: 100vw;
		padding-bottom: 20rpx;
		background-color: #f3f3f3;
	}

	.banner {
		width: 100%;
		height: 420rpx;

		.banImg {
			width: 100%;
			height: 100%;
		}
	}


	.details {
		width: 90%;
		margin: 40rpx auto;

		.title_col {
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.red {
				width: 4rpx;
				height: 50rpx;
				background-color: #840001;
			}

			.banTitle {
				margin-left: 20rpx;
				font-size: 36rpx;
				font-weight: 500;
				font-family: PingFangSC-Medium, PingFang SC;
			}
		}

		.title {
			width: 100%;
			height: 60rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: #000000;

			.subTitle {
				text-indent: 20rpx;
				color: #565656;
			}
		}

		.text {
			text-indent: 40rpx;
			font-size: 28rpx;
			letter-spacing: 1rpx;
			line-height: 48rpx;
		}
	}

	.activityImg {
		width: 90%;
		margin: 40rpx auto;

		.title_col {
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.red {
				width: 4rpx;
				height: 50rpx;
				background-color: #840001;
			}

			.banTitle {
				margin-left: 20rpx;
				font-size: 36rpx;
				font-weight: 500;
				font-family: PingFangSC-Medium, PingFang SC;
			}
		}

		.img {
			width: 100%;
			display: flex;
			// justify-content: space-between;
			flex-wrap: wrap;

			.image {
				width: 220rpx;
				height: 220rpx;
				margin: 5rpx 0 0 5rpx;
			}
		}
	}
</style>
