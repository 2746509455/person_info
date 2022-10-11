<template>
	<view style="background-color: #f3f3f3;">
		<view class="banTab" @click="back">
			<u-navbar :height="40" :is-back="true" title="志愿者服务列表">

			</u-navbar>
		</view>
		<view class="container">
			<!-- 顶部主图 -->
			<view class="banner">
				<image class="banImg" src="@/static/image/index/title.png" mode=""></image>
			</view>
			<!-- 留白 -->
			<view class="white"></view>
			<!-- 增减积分详情 -->
			<view class="main">
				<view class="mainInfo">
					<view class="integral">加3积分</view>
					<view>8月28日参加创城主题党日活动</view>
				</view>
				<view class="dashe"></view>
				<view class="mainInfo">
					<view class="integral">加3积分</view>
					<view>7月28日参加学习贯彻落实党旗党徽条例主题...</view>
				</view>
				<view class="dashe"></view>
				<view class="mainInfo">
					<view class="integral">加3积分</view>
					<view>6月28日参加创城主题党日活动</view>
				</view>
				<view class="dashe"></view>
				<view class="mainInfo">
					<view class="integral">加3积分</view>
					<view>5月28日参加创城主题党日活动</view>
				</view>
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
			back() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.banTab {
		height: 80rpx;
	}

	.container {
		width: 100vw;
		height: calc(100vh - 80rpx);
	}

	.banner {
		width: 100%;
		height: 420rpx;

		.banImg {
			width: 100%;
			height: 100%;
		}
	}

	.white {
		width: 100vw;
		height: 50rpx;
	}

	.main {
		width: 90%;
		margin: 0 auto;

	}

	.mainInfo {
		line-height: 60rpx;
		height: 70rpx;
		text-overflow: ellipsis;
		font-size: 28rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		/* border-bottom: 1px dashed #E3E3E3; */
		.integral{
			width: 110rpx;
			color: #c70000;
		}
	}

	.dashe {
		width: 100%;
		height: 10rpx;
		background-image: linear-gradient(to right, #E3E3E3 0%, #E3E3E3 50%, transparent 50%);
		background-size: 30px 1px;
		background-repeat: repeat-x;
	}
</style>
