<template>
	<view>
		<view class="container">
			<view class="title">
				<image class="titleImg" src="@/static/image/login/zi.png" mode=""></image>
			</view>
			<view class="content">
				<view class="input">
					<view class="username">账号</view>
					<view class="passwordtext">密码</view>
					<input type="text" class="text">
					<input type="password" class="password">
				</view>
				<view class="btn">
					<button class="login" @click="login">登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api/index.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login() {
				api.Login({
					username: this.username,
					password: this.pasw
				}).then(res => {
					console.log(res);
					uni.navigateTo({
						url: '/pages/index/index'
					})
					uni.setStorageSync('config',res.data.Config)
				})
				
			}
		}
	}
</script>

<style scoped lang="less">
	.container{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// background-color: #d0d0d0;
		background-image: url('@/static/image/index/f108d2adaf56b1c3b5700cf86b88ae8.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.title{
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.titleImg{
		width: 435rpx;
		height: 136rpx;
	}
	.content{
		width: 90%;
		height: 600rpx;
		// background-color: aqua;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.input{
			width: 100%;
			height: 350rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			position: relative;
			.text{
				width: 50%;
				height: 92rpx;
				padding: 0 15%;
				border-radius: 58rpx;
				background-color: #DD000F;
				color: white;
			}
			.password{
				width: 50%;
				height: 92rpx;
				padding: 0 15%;
				border-radius: 58rpx;
				background-color: #DD000F;
				color: white;
			}
			.username{
				position: absolute;
				top: 19%;
				left: 15%;
				color: white;
				font-size: 30rpx;
			}
			.passwordtext{
				position: absolute;
				top: 69%;
				left: 15%;
				color: white;
				font-size: 30rpx;
			}
		}
		.btn{
			.login{
				width: 282rpx;
				height: 84rpx;
				background-color: white;
				border-radius: 56rpx;
				color: #E82956;
				font-size: 36rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
