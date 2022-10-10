// 全局请求封装
export default (url, method, params) => {
	const openid = uni.getStorageSync('openid')
	uni.showLoading({
		title: "加载中"
	});
	return new Promise((resolve, reject) => {
		wx.request({
			url: "http://information.sdkuma.com/index" + url,
			method: method,
			header: {
				'Content-type': 'application/json'
			},
			data: {
				...params 
			},
			success(response) {
				var res = response.data
				if(res.code != 1000){
					if(res.code == 1002){
						uni.showToast({
							title: '发生错误,请联系开发人员',
							duration: 2000
						});
					}else if(res.code == 1001){
						uni.showToast({
							title:res.msg,
							duration:2000,
							icon:"error"
						})
					}
				}else{
					resolve(res);
				}
			},
			fail(err) {
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};
