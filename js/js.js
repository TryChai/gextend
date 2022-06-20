let {log} = console
// log('gg-test')
let host = window.location.host
let url = window.location.href
let myUrl = ['https://juejin.cn/post/6945796799860834340','https://juejin.cn/post/6963975875280781326',
    'https://juejin.cn/post/6976611660161089543','https://juejin.cn/post/6979127576409145374',
    'https://juejin.cn/post/7012543084923715591',
	'https://juejin.cn/post/7110986394710376462',
    'https://juejin.cn/post/6994241743688302600','https://juejin.cn/post/7095649611238342663']
let time = Math.floor(Math.random()* 30 + 20) *1000
if(myUrl.includes(url)){
    setInterval(()=>{
    window.location.reload()
    },time)
}

function addLoadEvent(func){   // 多个window.onload共用的封装函数
    var oldonload=window.onload; 
    if(typeof window.onload!='function'){ 
        window.onload=func; 
    }else{  // 是一个函数的话，把函数都加在onload之下
        window.onload=function(){ 
            oldonload(); 
            func(); 
        } 
    } 
}
function Copy(){
	document.body.addEventListener("copy", (e) => {
		//  阻止默认行为
		e.preventDefault();
		// 获取当前网址和复制的内容
		let url = window.location.href;
		let copyText =  window.getSelection().toString();
		// 整合
		// 将文本添加到剪切板中
		e.clipboardData.setData('text/plain',copyText);
	});
}
// addLoadEvent(Copy)
 document.addEventListener("DOMContentLoaded", Copy);
if(host == 'blog.csdn.net'){
	function csdn(){
		document.querySelector('.passport-login-container') && document.querySelector('.passport-login-container').remove()
		document.querySelector('.hide-article-box') && document.querySelector('.hide-article-box').remove()
		document.querySelector('#article_content') && (document.querySelector('#article_content').style.cssText='overflow: visible;')
		document.querySelectorAll('pre').forEach(pre=>{
			pre.style.cssText = 'user-select:auto !important'
			pre.style.cssText = '-webkit-user-select:auto !important'
		})
		document.querySelectorAll('code').forEach(code=>{
			code.style.cssText = 'user-select:auto !important'
			code.style.cssText = '-webkit-user-select:auto !important'
		})
		requestAnimationFrame(csdn)
	}
	 document.addEventListener("DOMContentLoaded", csdn);
	// addLoadEvent(csdn)
	
}
if(host == 'www.zhihu.com' || host == 'zhuanlan.zhihu.com'){
	function Zhihu(){
		document.querySelector('.Modal-wrapper') && document.querySelector('.Modal-wrapper').remove()
		window.onload = function (){
			document.querySelector('.Modal-wrapper') && document.querySelector('.Modal-wrapper').remove()
			setTimeout(()=>{
				document.querySelector('.Modal-wrapper') && document.querySelector('.Modal-wrapper').remove()
				log(document.querySelector('.Modal-wrapper'))
				document.querySelector('html').style.cssText ="overflow: !important"
			})
			
		}
	}
	 document.addEventListener("DOMContentLoaded", Zhihu);
	// addLoadEvent(Zhihu)
	
}