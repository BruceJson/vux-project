import ajax from './ajax.js'
const md5 = require('md5')
const axios = require('axios')
var getFileName = function (filename) {
    var pre = filename.split('.')[0]
    var next = filename.split('.')[1]
    return md5(pre) + '.' + next
}
var ossUploader = {
    // 本地调用方法
    // options = {
    //   file: file,
    //   platform: ***,
    //   onProgress: function(e){console.log(e)}
    //   done: function(obj){console.log(obj.url)}
    // }
    _ossUpload: function (options) {
        // 调用Api网关获取签名信息
        var appServer = '/oss/signature'
            // 从后台获取签名信息
        ajax.doNet({
            url: appServer,
            method: 'get',
            data: {
                platform: options.platform
            }
            // appid: options.appid,
            // appsecret: options.appsecret
        }).then(function (resp) {
            console.log(options)
            console.log('获取签名信息成功')
            var accessData = resp.data.data
            console.log(accessData)
                // 获取file对象
            var file = options.file
            var fileName = getFileName(file.name)
            console.log('======== filename =========')
            console.log(fileName)
                // 新建formdata
            var ossData = new FormData()
            ossData.append('OSSAccessKeyId', accessData.accessid)
            ossData.append('policy', accessData.policy)
            ossData.append('signature', accessData.signature)
            ossData.append('success_action_status', '201')
            ossData.append('key', accessData.dir + fileName)
            ossData.append('file', file, fileName)
            ossData.append('name', fileName)
            ajax.doFormNet({
                url: accessData.host,
                method: 'post',
                data: ossData,
                onProgress: options.onProgress,
                ignoreHost: true
            }).then(resp => {
                console.log('上传成功')
                console.log(resp)
                var url = 'http://storage.tmtsp.com/' + accessData.dir + fileName
                options.done({
                    url: url
                })
            }).catch(error => {
                // 上传失败
                console.log('上传失败')
            })
        }).catch(function (error) {
            console.error('获取用户签名失败')
            console.error(error)
        })
    }
}
export default ossUploader
