<template>
	<view>
		<view style="width: 100vw;height: 100vh;">
			<view class="top-image">
				<image class="banImg" src="@/static/image/index/title.png" mode=""></image>
			</view>
			<view class="content">
				<view class="info">
					<view class="heade-image">
						<view class="image" style="background: red;">
							<image src="@/static/image/index/head.png" style="width: 100%;height: 100%;"></image>
						</view>
						<view class="integral" style="text-align: right;color: #3e3e3e;padding-top: 12rpx;">
							党员积分：4560
						</view>
						<view class="integral" style="text-align: right;">
							查看积分详情
						</view>
					</view>
					<view class="title_loc">
						<view class="rod"></view>
						<view class="title">
							党员基本情况
						</view>
					</view>
					<view class="person-info">
						<view style="padding-bottom:22rpx">
							<view class="" style="float: left;padding-right: 60rpx;">
								<text style="font-weight: 600;">姓名:</text>
								<text style="margin-left: 20rpx;">李铮</text>
							</view>
							<text
								style="background-color: #E85656;color: aliceblue;padding: 4rpx 16rpx 4rpx 16rpx;border-radius: 10px;font-size: 12px;">在职党员</text>
						</view>
						<view style="padding-bottom:22rpx">
							<text style="font-weight: 600;">党龄：</text>
							<text>10年</text>
						</view>
						<view style="padding-bottom:22rpx">
							<view style="font-weight: 600;">所在党支部:</view>
							<view>枣庄市高新区兴仁街道党总支第三支部</view>
						</view>
						<view style="padding-bottom:22rpx">
							<text style="font-weight: 600;">志愿服务累计时长：</text>
							<text>20.0小时</text>
						</view>
					</view>

				</view>
				<view class="activity">
					<view class="title_loc" style="height: 80rpx;">
						<view class="rod"></view>
						<view class="title" style="font-weight: 600;">
							党员风采展示
						</view>
					</view>
					<view class="scrollFirst" style="white-space: nowrap;">
						<scroll-view enable-flex="true" scroll-x="true" class="scroll_first" @scrolltoupper="upper"
							@scrolltolower="lower" @scroll="scroll">
							<image src="@/static/image/index/activity.png" class="oipc" @click="preview"></image>
							<image src="@/static/image/index/activity.png" class="oipc" @click="preview"></image>
							<image src="@/static/image/index/activity.png" class="oipc" @click="preview"></image>
							<image src="@/static/image/index/activity.png" class="oipc" @click="preview"></image>
							<image src="@/static/image/index/activity.png" class="oipc" @click="preview"></image>
						</scroll-view>
					</view>

				</view>
				<view class="service">
					<view class="title_loc" style="display: flex;flex-direction: column;height: 80rpx;">
						<view class="head">
							<view class="headBox" style="display: flex;">
								<view class="rod"></view>
								<view class="title" style="font-weight: 600;">
									志愿服务
								</view>
							</view>

							<view class="viewAll" @click="tovoList">
								查看全部
							</view>
						</view>
					</view>
					<view class="scrollSecond" style="white-space: nowrap;margin-left: 20rpx;">
						<scroll-view class="scroll_second" scroll-x="true" @scroll="scroll" scroll-left="120">
							<view class="inblock" @click="toDetails">
								<image src="@/static/image/index/77.png" class="oipcSecondImage"></image>
								<view class="text">七夕主题活动</view>
							</view>
							<view class="inblock" @click="toDetails">
								<image src="@/static/image/index/help-old.png" class="oipcSecondImage"></image>
								<view class="text">帮助老年人清理卫生</view>
							</view>
							<view class="inblock" @click="toDetails">
								<image src="@/static/image/index/chahua.png" class="oipcSecondImage"></image>
								<view class="text">插画主题活动</view>
							</view>
							<view class="inblock" @click="toDetails">
								<image src="@/static/image/index/77.png" class="oipcSecondImage"></image>
								<view class="text">七夕主题活动</view>
							</view>
						</scroll-view>
					</view>




				</view>
				<view class="learning">
					<view class="title_loc" style="display: flex;flex-direction: column;height: 80rpx;">
						<view class="head">
							<view class="headBox" style="display: flex;">
								<view class="rod"></view>
								<view class="title" style="font-weight: 600;">
									党员学习活动清单
								</view>
							</view>
							<view class="viewAll">
								查看全部
							</view>
						</view>
					</view>
					<view class="main">
						<view class="mainInfo">
							<view>8月28日参加创城主题党日活动</view>
						</view>
						<view class="dashe"></view>
						<view class="mainInfo">
							<view>7月28日参加学习贯彻落实党旗党徽条例主题...</view>
						</view>
						<view class="dashe"></view>
						<view class="mainInfo">
							<view>6月28日参加创城主题党日活动</view>
						</view>
						<view class="dashe"></view>
						<view class="mainInfo">
							<view>5月28日参加创城主题党日活动</view>
						</view>
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

			}
		},
		onLoad() {
			// console.log(this.$u.config.v);
		},

		methods: {
			tovoList() {
				uni.navigateTo({
					url: '/pagesIndex/volunteerList/volunteerList'
				})
			},
			toDetails() {
				uni.navigateTo({
					url: '/pagesIndex/volunteerList/listDetails/listDetails'
				})
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


			// ··················滚动内容
			change(e) {
				this.current = e.detail.current;
			},
			// 触顶事件触发
			upper: function(e) {
				// console.log(e)
			},
			// 触底时间触发
			lower: function(e) {
				// console.log(e)
			},
			// 滚动即触发
			scroll: function(e) {
				// console.log(e)
			},
		}
	}
</script>

<style scoped>
	.top-image {
		width: 100vw;
		height: 376rpx;
		background-color: darkred;
	}

	.banImg {
		width: 100vw;
		height: 376rpx;
	}

	.content {
		position: absolute;
		top: 328rpx;
	}

	.info {
		width: 100vw;
		height: 416rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(135, 135, 135, 0.19);
		border-radius: 40rpx 40rpx 0px 0px;
		position: relative;
	}

	.scrollFirst {
		margin-left: 20rpx;
	}

	.scroll_first {
		height: 300rpx;
		display: flex;
		white-space: nowrap;
	}

	.scroll_second {
		white-space: nowrap;
		width: 100%;
	}

	.inblock {
		display: inline-block;
		position: relative;
	}

	.text {
		width: 240rpx;
		height: 66rpx;
		text-align: center;
		line-height: 66rpx;
		color: white;
		font-size: 24rpx;
		background-color: rgba(136, 134, 134, 0.6);
		position: absolute;
		bottom: 8rpx;
		left: 20rpx;
	}

	.oipc {
		width: 220rpx;
		height: 220rpx;
		margin: 20rpx 20rpx 0 20rpx;
		box-shadow: 0px 2rpx 10rpx #888888;
	}

	.oipcSecondImage {
		width: 240rpx;
		height: 320rpx;
		margin: 20rpx 20rpx 0 20rpx;
		box-shadow: 0px 2rpx 10rpx #888888;
	}


	.activity {
		width: 100vw;
		height: 364rpx;
		background: #FFFFFF;
		border-top: 10rpx solid rgba(135, 135, 135, 0.19);
	}

	.service {
		width: 100vw;
		height: 464rpx;
		background: #FFFFFF;
		border-top: 10rpx solid rgba(135, 135, 135, 0.19);
	}

	.learning {
		width: 100vw;
		height: 376rpx;
		background: #FFFFFF;
		border-top: 10rpx solid rgba(135, 135, 135, 0.19);
	}

	.heade-image {
		position: absolute;
		display: grid;
		grid-template-rows: 266rpx 1fr 1fr;
		top: -140rpx;
		right: 40rpx;
	}

	.image {
		width: 190rpx;
		height: 266rpx;
		text-align: right;
		justify-self: end;
	}

	.integral {
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #007CDB;
	}

	.title_loc {
		padding-top: 20rpx;
		margin-left: 40rpx;
		display: grid;
		grid-template-columns: 4rpx 1fr;
	}

	.rod {
		height: 50rpx;
		width: 4rpx;
		border: 2rpx solid #840001;
		background-color: #840001;
	}

	.title_loc .head {
		display: flex;
		justify-content: space-between;
	}

	.main {
		width: 90%;
		margin: 0 auto;

	}

	.mainInfo {
		line-height: 60rpx;
		height: 70rpx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		font-size: 28rpx;
		/* border-bottom: 1px dashed #E3E3E3; */
	}

	.dashe {
		width: 100%;
		height: 10rpx;
		background-image: linear-gradient(to right, #E3E3E3 0%, #E3E3E3 50%, transparent 50%);
		background-size: 30px 1px;
		background-repeat: repeat-x;
	}

	.viewAll {
		margin-right: 40rpx;
		color: #D22C2C;
		font-family: PingFangSC-Medium, PingFang SC;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		line-height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		margin-left: 14rpx;
	}

	.person-info {
		padding-left: 40rpx;
		padding-top: 46rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #3E3E3E;
		line-height: 42rpx;
	}
</style>
