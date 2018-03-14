const common = {
    param2Obj(url) {
        const search = url.split('?')[1];
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    },

    refreshTo(routeUrl) {
        window.location.href = window.location.origin + routeUrl;
    },

    formatTime(type, time) {
        if (time) {
            var time = time * 1000;
            var dateTime = new Date(time);
            var year = dateTime.getFullYear();
            var month = dateTime.getMonth() + 1;
            var date = dateTime.getDate();
            var hour = dateTime.getHours();
            var min = dateTime.getMinutes();
            var sec = dateTime.getSeconds();
            if (type === 'yyyy-mm-dd') {
                return year + '-' + month + '-' + date;
            } else if (type === 'yyyy-mm-dd hh:mm:ss') {
                return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
            }
        } else {
            return '未知';
        }
    },

    getTimeByType(type) {
        var dateTime = new Date();
        var year = dateTime.getFullYear();
        var month = (dateTime.getMonth() + 1) + '';
        month = month.length < 2 ? ('0' + month) : month;
        var date = dateTime.getDate() + '';
        date = date.length < 2 ? ('0' + date) : date;
        var hour = dateTime.getHours() + '';
        date = hour.length < 2 ? ('0' + hour) : hour;
        var min = dateTime.getMinutes();
        min = min.length < 2 ? ('0' + min) : min;
        var sec = dateTime.getSeconds();
        dateTime = dateTime.length < 2 ? ('0' + dateTime) : dateTime;

        if (type === 'yyyymmdd') {
            return year + month + date;
        }
    },

    getBase64Img(file) {
        return new Promise((resolve, reject) => {
            // 看支持不支持FileReader
            if (!file || !window.FileReader) {
                reject('对不起，您的浏览器无法生成预览图片~');
                return;
            }
            if (/^image/.test(file.type)) {
                // 创建一个reader
                var reader = new FileReader()
                    // 将图片将转成 base64 格式
                reader.readAsDataURL(file)
                    // 读取成功后的回调
                reader.onloadend = function (e) {
                    if (this.result) {
                        resolve(this.result);
                    } else {
                        reject('生成预览图片失败~');
                    }
                }
            } else {
                reject('请选择图片类型文件~');
            }
        });
    },
}
export default common
