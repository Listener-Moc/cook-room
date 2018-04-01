let PromiseAjax = (function () {
	let xhr;
	window.XMLHttpRequest 
		? xhr = new XMLHttpRequest()
		: xhr = new ActiveXObject("Microsoft.XMLHTTP");

	return function({method, url, async = true, data, withCredentials = false}) {
		return new Promise(function (resolve, reject) {
			xhr.withCredentials = withCredentials;
			xhr.onreadystatechange = function() {
				xhr.readyState === 4 && xhr.status === 200 
					? resolve(xhr.response, xhr)
					: reject(xhr.status, xhr)
			};

			xhr.open(method, url, async);
			xhr.send(data);
		});
	};
})();

PromiseAjax({
	method: 'get',
	url: 'http://www.baidu.com'
}).then((resData) => {
		console.log(resData)
	})
	.catch((status) => {
		console.error('error status:', status)
	})