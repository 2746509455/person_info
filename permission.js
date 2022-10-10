const methodToPatch = ['navigateTo', 'redirectTo', 'switchTab', 'navigateBack']
methodToPatch.map(item => {
    const original = uni[item] // 
    uni[item] = function(opt = {}, needAuth) {
         if (needAuth && !store.getters.token) { // 需要登录且未登录
            uni.navigateTo({
                url: '/login'
            })  
         } else {
             return original.call(this, opt)
         }
    }
})