<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 获取openid并保存到到本地
			const openid = uni.getStorageSync('openid')
			if(openid){
				console.log('已获取到openid');
			}else{
				console.log('未获取到openid');
				// 获取code
				
				
				
				
				
			}
			
			
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
