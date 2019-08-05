var CosAuth = require('./lib/cos-auth');
var config = require('./config');
var that = this;
// var uploadFile = function () {
	// console.log(232323)
    // 请求用到的参数
    var prefix = 'https://cos.' + config.Region + '.myqcloud.com/' + config.Bucket + '/'; // 这个是后缀式，签名也要指定 Pathname: '/' + config.Bucket + '/'
    var prefix = 'https://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com/';


    // 对更多字符编码的 url encode 格式
    var camSafeUrlEncode = function (str) {
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A');
    };

    // 获取临时密钥
    var stsCache;
    var getCredentials = function (callback) {
        if (stsCache && Date.now() / 1000 + 30 < stsCache.expiredTime) {
            callback();
            return;
        }
         uni.request({ 
			 url:"http://gao2.demenk.com/ceishi/sts_test.php",
			 dataType: 'json', 
            success: function (result) {
                var data = result.data;
				console.log(data)
                var credentials = data.credentials;
                if (credentials) {
                    stsCache = data
                } else {
                    uni.showModal({title: '临时密钥获取失败', content: JSON.stringify(data), showCancel: false});
                }
                callback(stsCache && stsCache.credentials);
            },
            error: function (err) {
                uni.showModal({title: '临时密钥获取失败', content: JSON.stringify(err), showCancel: false});
            }
        });
    };

    // 计算签名
    var getAuthorization = function (options, callback) {
        getCredentials(function (credentials) {
			console.log(credentials)
            callback({
                XCosSecurityToken: credentials.sessionToken,
                Authorization: CosAuth({
                    SecretId: credentials.tmpSecretId,
                    SecretKey: credentials.tmpSecretKey, 
                    Method: options.Method,
                    Pathname: options.Pathname,
                })
            });
        });
    };

    // 上传文件
    var uploadFile = function (filePath) { 
        var Key = filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名 
		console.log(getApp().globalData.pic_type);		
		var Key = Key + getApp().globalData.pic_type;
        getAuthorization({Method: 'POST', Pathname: '/'}, function (AuthData) {
            var requestTask = uni.uploadFile({
                url: prefix,
                name: 'file',
                filePath: filePath,
                formData: {
                    'key': Key,
                    'success_action_status': 200,
                    'Signature': AuthData.Authorization,
                    'x-cos-security-token': AuthData.XCosSecurityToken,
                    'Content-Type': '',
                },
                success: function (res) {
                    var url = prefix + camSafeUrlEncode(Key).replace(/%2F/g, '/');
                    if (res.statusCode === 200) {
						//上传成功
						getApp().globalData.url = url;
						uni.showToast({
							title: '上传成功',
							icon: 'success',
							duration: 2000
						})
                        // uni.showModal({title: '上传成功', content: url, showCancel: false});
						uni.hideLoading();
						uni.startPullDownRefresh(); 
                    } else {
						//上传失败
						uni.showToast({
							title: '上传失败',
							duration: 2000
						})
                        // uni.showModal({title: '上传失败', content: JSON.stringify(res), showCancel: false});
						uni.hideLoading();
                    }
                    console.log(res.statusCode);
                    console.log(url);
                },
                fail: function (res) {
                    uni.showModal({title: '上传失败', content: JSON.stringify(res), showCancel: false});
                }
            });
            requestTask.onProgressUpdate(function (res) {
				uni.showLoading({
					title: '上传中：'+res.progress+"%"
				});
                console.log('正在进度:', res);
            });
        });
    };
	// 选择文件
	 // uni.chooseVideo({
		// count: 1,
		// sourceType: ['album', 'camera'],
		// success: function (res) { 
		// 	var path = res.tempFilePath;
		// 	uploadFile(path);
		// 	},
		// })
// 	 
// };

module.exports = uploadFile;
