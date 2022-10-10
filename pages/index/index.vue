<template>
	<view>		
		<scroll-view scroll-y style="width: 100vw;height: 100vh;">
			<view class="top-image">
				
			</view>
			<view class="content">
				<view class="info">
					<view class="heade-image" style="">
						<view class="image" style="background: red;">
							
						</view>
						<view class="integral" style="text-align: right;color: #3e3e3e;padding-top: 6px;">
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
						<view style="padding-bottom:11px">
							<view class="" style="float: left;padding-right: 30px;">
								姓名：李铮
							</view>
							<text style="background-color: #E85656;color: aliceblue;padding: 2px 8px 2px 8px;border-radius: 10px;font-size: 12px;">在职党员</text>
						</view>
						<view style="padding-bottom:11px">党龄：10年</view>
						<view style="padding-bottom:11px">
							<view>
								所在党支部:
							</view>
							<view>
								枣庄市高新区兴仁街道党总支第三支部
							</view>
						</view>
						<view style="padding-bottom:11px">志愿服务累计时长：20.0小时</view>
					</view>
					
				</view>
				<view class="activity">
					<view class="title_loc">
						<view class="rod"></view>
						<view class="title">
							党员风采展示
						</view>
					</view>
					
					
					
				</view>
				<view class="service">
					<view class="title_loc">
						<view class="rod"></view>
						<view class="title">
							志愿服务
						</view>
					</view>
					
					
					
				</view>
				<view class="learning">
					<view class="title_loc">
						<view class="rod"></view>
						<view class="title">
							党员活动学习清单
						</view>
					</view>
					
					
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		
		methods: {

		}
	}
</script>

<style>
	.top-image{
		width: 100vw;
		height: 188px;
		background-color: darkred;
	}
	.content{
		position: absolute;
		top: 164px;
	}
	.info{
		width: 100vw;
		height: 208px;
		background: #FFFFFF;
		box-shadow: 0px 0px 4px 0px rgba(135,135,135,0.19);
		border-radius: 20px 20px 0px 0px;
		position: relative;
	}
	.activity{
		width: 100vw;
		height: 182px;
		background: #FFFFFF;
		box-shadow: 0px 0px 4px 0px rgba(135,135,135,0.19);
	}
	
	.service{
		width: 100vw;
		height: 232px;
		background: #FFFFFF;
		box-shadow: 0px 0px 4px 0px rgba(135,135,135,0.19);
	}
	.learning{
		width: 100vw;
		height: 188px;
		background: #FFFFFF;
		box-shadow: 0px 2px 4px 0px rgba(135,135,135,0.19);
	}
	.heade-image{
		position: absolute;
		display: grid;
		grid-template-rows: 133px 1fr 1fr;
		top: -70px;
		right: 20px;
	}
	.image{
		width: 95px;
		height: 133px;
		text-align: right;
		justify-self: end;
	}
	.integral{
		font-size: 14px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #007CDB;
	}
	.title_loc{
		padding-top: 10px;
		margin-left: 20px;
		display: grid;
		grid-template-columns: 2px 1fr;
	}
	.rod{
		height: 25px;
		width: 2px;
		border: 1px solid #840001;
		background-color: #840001;
	}
	.title{
		line-height: 25px;
		font-size: 18px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		margin-left: 7px;
	}
	.person-info{
		padding-left: 20px;
		padding-top: 23px;
		font-size: 15px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #3E3E3E;
		line-height: 21px;
	}
	
</style>
