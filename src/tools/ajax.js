// const co = require('co');
// const Client = require('aliyun-api-gateway').Client;
import axios from './axios-interceptor';
import commonCfg from '@cfg/common.conf.js';

// import store from '@/store';

// ajax方法类库
var ajax = {
    config: {
        host: commonCfg['API_DOMAIN']
    },
    // 普通ajax调用 ignoreHost
    doNet: function (req) {
        var options = {
            url: !req.ignoreHost ? (ajax.config.host + req.url) : req.url,
            method: req.method.toLowerCase(),
            headers: {
                'token': window.baseToken || '',
            },
            responseType: 'json'
        }
        if (req.method.toLowerCase() === 'get') {
            options.params = req.data || {}
        } else if (req.method.toLowerCase() === 'post') {
            options.data = req.data || {}
        }
        return axios(options)
    },
    // 普通ajax调用 ignoreHost
    doFormNet: function (req) {
        var options = {
            url: !req.ignoreHost ? (ajax.config.host + req.url) : req.url,
            method: req.method.toLowerCase(),
            headers: {
                'token': window.baseToken || '',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            onUploadProgress: function (progressEvent) {
                req.onProgress && req.onProgress(progressEvent)
            }
        }
        if (req.method.toLowerCase() === 'get') {
            options.params = req.data || {}
        } else if (req.method.toLowerCase() === 'post') {
            options.data = req.data || {}
        }
        return axios(options)
    },

    // 网关的ajax调用
    /**
     * options => {
     *   url: 'https://sdsdfsdfjslfkjsdklfjl',
     *   method: 'get',
     *   appid: '123123213',
     *   appsecret: '123123213213',
     *   data: {
     *     a: 1,
     *     b: 2
     *   }
     * }
     */
    // doGatewayNet: function (options) {
    //     const client = new Client(options.appid, options.appsecret)
    //     var url = ajax.config.host + options.url;
    //     return co(function* () {
    //         if (options.method.toLowerCase() === 'get') {
    //             try {
    //                 let result = yield client.get(url, {
    //                     query: options.data || {},
    //                     headers: {
    //                         'token': window.baseToken || '',
    //                         accept: 'application/json'
    //                     }
    //                 })
    //             } catch (err) {
    //                 console.log('===================+++++++ get has error ++++++===================')
    //                 console.log(err)
    //             }
    //         } else {
    //             try {
    //                 let result = yield client.post(url, {
    //                     data: options.data,
    //                     headers: {
    //                         'token': window.baseToken || '',
    //                         accept: 'application/json'
    //                     }
    //                 })
    //             } catch (err) {
    //                 console.log('===================+++++++ post has error ++++++===================')
    //                 console.log(err)
    //             }
    //         }
    //     })
    // }
}
export default ajax
