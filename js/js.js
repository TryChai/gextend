let {log} = console
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
javascript:!function () {
    function t(e) {
        e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation()
    }

    document.querySelectorAll("*").forEach(e => {
        "none" === window.getComputedStyle(e, null).getPropertyValue("user-select") && e.style.setProperty("user-select", "text", "important")
    }), ["copy", "cut", "contextmenu", "selectstart", "mousedown", "mouseup", "mousemove", "keydown", "keypress", "keyup"].forEach(function (e) {
        document.documentElement.addEventListener(e, t, {capture: !0})
    })
	HTMLElement.prototype.pressKey = function(e) {
		var doc = document.createEvent("UIEvents");
		doc.keyCode = e;
		doc.initEvent("keydown", true, true);
		this.dispatchEvent(doc);
	}
	document.onmouseup = function(){
		let text = selectText()
		if(text !== '' ){
			document.body.pressKey(17);
			document.body.pressKey(67);
		}
	};  
	document.addEventListener("keydown", function(e) {
		if(e.ctrlKey&&e.keyCode===70){
			document.body.pressKey(17);
			document.body.pressKey(86);
		  }
	})
	
	function selectText(){
		if(document.Selection){       
			//ie浏览器
			return document.selection.createRange().text;     	 
		}else{    
			//标准浏览器
			return window.getSelection().toString();	 
		}	 
	}
}();

	

	function csdn(){
		document.querySelector('#csdn-toolbar') && document.querySelector('#csdn-toolbar').remove()
		document.querySelector('#aswift_1') && document.querySelector('#aswift_1').remove()
		document.querySelector('#aswift_2') && document.querySelector('#aswift_2').remove()
		document.querySelector('#aswift_3') && document.querySelector('#aswift_3').remove()
		document.querySelector('#aswift_4') && document.querySelector('#aswift_4').remove()
		document.querySelector('#aswift_5') && document.querySelector('#aswift_5').remove()
		document.querySelector('.signin') && document.querySelector('.signin').remove()
		document.querySelector('.passport-login-container') && document.querySelector('.passport-login-container').remove()
		document.querySelector('.hide-preCode-box') && document.querySelector('.hide-preCode-box').remove()
		document.querySelector('.hide-article-box') && document.querySelector('.hide-article-box').remove()
		document.querySelector('#article_content') && (document.querySelector('#article_content').style.cssText='overflow: visible;')
		document.querySelectorAll('pre').forEach(pre=>{
			pre.style.cssText = 'user-select:auto !important;-webkit-user-select:auto !important;height:auto !important;max-height:fit-content !important'
		})
		document.querySelectorAll('code').forEach(code=>{
			code.style.cssText = 'user-select:auto !important;-webkit-user-select:auto !important'
		})
		requestAnimationFrame(csdn)
	}
	 document.addEventListener("DOMContentLoaded", csdn);
	// addLoadEvent(csdn)

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