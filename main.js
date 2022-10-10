import App from './App'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif


// uView
import uView from "uview-ui";
Vue.use(uView);
// 路由守卫
import './permission.js'


// function get_wx_openid(){
	
// 	var openid = localStorage.getItem('openid')

// 	if (!openid || openid == '') {
		
// 	  var WXInfo = localStorage.getItem('WXInfo') ? JSON.parse(localStorage.getItem('WXInfo')) : null
// 	  let str = window.location.href
// 	  var ua = navigator.userAgent.toLowerCase()
// 	  var isWeixin = ua.indexOf('micromessenger') !== -1 // 是否 在微信浏览   器内
// 	  let isURL = window.location.href.indexOf('code=') === -1 // 是否 没有授权重定向回来
	  
// 	  var code = getQueryVariable('code')
	  
// 	  if (isWeixin && isURL && !WXInfo&&!code) {
		
// 		getLogin()
		 
// 	  } else {
// 		  console.log("没有执行")
// 		  console.log("isWeixin",isWeixin)
// 		  console.log("isURL",isURL)
// 		  console.log("WXInfo",WXInfo)
// 		  console.log("code",code)
// 	  }
	  
// 	  var wxcode = code
// 	  localStorage.setItem('WXInfo', JSON.stringify(wxcode))
	  
// 	  console.log("wxcode:", localStorage.getItem('WXInfo'))
// 	  var WXInfo = localStorage.getItem('WXInfo') ? JSON.parse(localStorage.getItem('WXInfo')) : null
// 	  if (WXInfo) {
// 		  get_openid({
// 			  'code': WXInfo
// 		  }).then(res => {
// 			  localStorage.setItem('openid', res.data.openid)
// 		  }).catch(res => {
// 			  location.href=location.origin
// 		  })
// 	  }
// 	}
// }
// function getLogin(){
// 	let urlrouter = window.location.href.split('#/')[1] // 当前路由
// 	//hostName是后台服务器域名
// 	//url 是当前页面的地址。
// 	//appId 是公众号appid（注意：确定后台提供的appid和相关的token是同一个公众号的）
// 	//let hostName = 'xin'
// 	//let appId = 'wx285083ded0cffb8f'
	
// 	var api = {
// 		hostName: localStorage.getItem('huidiao'),
// 		wxAppId: 'wxdd7c5002fade7975'
// 	}
	
// 	api.hostName = encodeURI(api.hostName)
	
// 	let url = api.hostName // 重定向返回地址
	
// 	//url+='?token='+localStorage.getItem('token')

// 	let str = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + 
// 	api.wxAppId + 
// 	'&redirect_uri=' + url + 
// 	'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
	
// 	console.log("微信授权连接：", str)
// 	window.location.href = str
// }
// function getQueryVariable(variable)
// {
//        var query = window.location.search.substring(1);
//        var vars = query.split("&");
//        for (var i=0;i<vars.length;i++) {
//             var pair = vars[i].split("=");
//             if(pair[0] == variable){
// 				return pair[1];
// 			}
//        }
//        return(false);
// }

// get_wx_openid()