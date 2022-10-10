// 公共请求Http
const app = getApp()
// 公共请求地址
const BaseUrl = 'https://jiping.duocaikecheng.com/api_tea'
/**
 * 发送请求
 * @params
 * method: <String> 请求方式: POST/GET
 * url: <String> 请求路径
 * data: <Object> 请求参数
 */
module.exports = {
  request:function(url, data = {}, method = 'GET'){
    const token = wx.getStorageSync('token')
    const schoolId = wx.getStorageSync('school_id')
    const datas = {
      ...data,
      token:token,
      school_id:schoolId
    }
    return new Promise((resolve, reject)=>{
      wx.request({
        url: `${BaseUrl}${url}`,
        method,
        data:datas,
        header:{
          'Content-type': 'application/json'
        },
        success: (result) => {
          console.info(result,'AJAX返回')
          if (result.statusCode === 200) {
            // 将response的数据resolve出去
            const res = result.data
            if(res.code != 1000){
              if(res.code == 1002){
                wx.showModal({
                  content: '登录已过期，请重新登录',
                  title: '离线',
                  showCancel:false,
                  success: (result) => {
                    wx.removeStorageSync('userinfo')
                    wx.removeStorageSync('config')
                    wx.removeStorageSync('token')
                    wx.removeStorageSync('school_id')
                    wx.redirectTo({
                      url: '../login/login',
                    })
                  },
                  fail: (res) => {

                  },
                })
              }else if(res.code == 1001 ){
                wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
              }
            }else{
              if(res.login == 0){
                wx.setStorageSync('userinfo', res.data.user_info)
                wx.setStorageSync('config', res.data.config)
                wx.setStorageSync('token', res.data.token)
                wx.setStorageSync('school_id', res.data.school_id)
              }
              resolve(res)
            }
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'error'
            })
            reject(result);
          }
        },
        fail: (res) => {
          console.info(res,'AJAX错误信息')
          wx.showToast({
            title: '请求失败',
            icon: 'error'
          })
          reject(error);
        },
      })
    })
  }
}