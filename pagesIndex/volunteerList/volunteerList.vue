<template>
	<view>
<<<<<<< HEAD
		<view class="" @click="back">
			<u-navbar :height="40" :is-back="true" title="志愿者服务列表">
			
			</u-navbar>
		</view>
		
=======
		<u-navbar @leftClick="back" :is-fixed="false" :is-back="true" title="志愿者服务列表">
		
		</u-navbar>
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
		<view class="container">
			<!-- 顶部大图 -->
			<view class="banner">
				<image src="@/static/image/index/title.png" class="banImg"></image>
			</view>
			
			<!-- 正文 -->
			<view class="content">
				<view class="card">
					<view class="item" @click="toDetails">
						<view class="left">
							<image src="@/static/image/index/77.png" class="cardImg"></image>
						</view>
						<view class="right">
							<view class="title">七夕主题活动</view>
							<view class="subTitle">文化艺术</view>
							<view class="text">活动中，大家共同学习了七夕节的由来，重温了“牛郎织女”的爱情故事，分享了七夕节的民间习俗。随后，大家饱含……</view>
							<view class="timer">2022.10.08 15:18</view>
						</view>
					</view>
					
					
<<<<<<< HEAD
					<view class="item" @click="toDetails">
=======
					<view class="item">
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
						<view class="left">
							<image src="@/static/image/index/help-old.png" class="cardImg"></image>
						</view>
						<view class="right">
							<view class="title">复兴社区清理卫生集中活动</view>
							<view class="subTitle">卫生清理</view>
							<view class="text">按照“保障民生，提升品质，体现魅力”的原则，针对墙体破损脱落严重，粉刷墙体4380平方；针对单元楼道内乱停放车辆问题街道社区……</view>
							<view class="timer">2022.10.08 15:18</view>
						</view>
					</view>
					
					
<<<<<<< HEAD
					<view class="item" @click="toDetails">
=======
					<view class="item">
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
						<view class="left">
							<image src="@/static/image/index/chahua.png" class="cardImg"></image>
						</view>
						<view class="right">
							<view class="title">帮助老年人清理卫生</view>
							<view class="subTitle">困难帮扶</view>
							<view class="text">为落实市、区残疾人事业高质量发展工作部署，进一步提升街道残联服务能力水平。近日，兴仁街道组织开展残疾人基本情况入户核查…</view>
							<view class="timer">2022.10.08 15:18</view>
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
		methods: {
			toDetails(){
				uni.navigateTo({
					url:'/pagesIndex/volunteerList/listDetails/listDetails'
				})
			},
			back(){
<<<<<<< HEAD
=======
				console.log('返回');
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
<<<<<<< HEAD
			
			
=======
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
		}
	}
</script>

<style scoped lang="less">
	.container{
		width: 100vw;
<<<<<<< HEAD
		padding-top: 60rpx;
		background-color: #f3f3f3;
		padding-bottom: 190rpx;
=======
		margin-top: 80rpx;
		background-color: #f3f3f3;
		padding-bottom: 20rpx;
>>>>>>> 0d3a162e4e97bc5de0b294c2e8c72137cc8ebf80
	}
	.banner{
		width: 100%;
		height: 376rpx;
		.banImg{
			width: 100%;
			height: 100%;
		}
	}
	.content{
		margin-top: 40rpx;
		.card{
			width: 670rpx;
			// height: 140px;
			margin: 0 auto;
			.item{
				height: 288rpx;
				margin: 30rpx 0;
				box-sizing: border-box;
				border-bottom: 8rpx solid #B31B12;
				background-color: white;
				display: flex;
				font-family: PingFangSC-Medium, PingFang SC;
				.cardImg{
					width: 210rpx;
					height: 280rpx;
				}
				.right{
					position: relative;
					margin-left: 20rpx;
					.title{
						line-height: 60rpx;
						font-size: 28rpx;
						font-weight: 700;
					}
					.subTitle{
						line-height: 50rpx;
						font-size: 24rpx;
						color: #dc0000;
						font-weight: 700;
					}
					
					.text{
						letter-spacing: 2rpx;
						font-size: 24rpx;
						
					}
					.timer{
						font-size: 24rpx;
						width: 100%;
						display: flex;
						position: absolute;
						bottom: 0;
						justify-content: flex-end;
						color: #818181;
					}
				}
			}
		}
	}
</style>
