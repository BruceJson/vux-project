// window.bootbox.setLocale('zh_CN')
const dialog = {
    alert: function (val) {
        window.bootbox.alert({
            message: val,
            size: 'small'
        })
    },
    /**
     * 带输入框的弹出框
     *options.title 标题
     *options.placeholder 默认填充
     *value 默认内容
     *options.callback 回调
     */
    prompt: function (options) {
        window.bootbox.prompt({
            title: options.title,
            value: options.value,
            inputOptions: {
                text: options.placeholder || ''
            },
            callback: options.callback || function () {}
        })
    },
    // 带确定取消按钮的弹出框
    confirm: function (title, sucCb) {
        window.bootbox.confirm(title, function (result) {
            result && sucCb()
        })
    },
    // 弹出一个几秒后消失的弹出框
    popTip: function (msg) {
        var dialog = window.bootbox.dialog({
            message: msg,
            closeButton: false
        })
        setTimeout(function () {
            dialog.modal('hide')
        }, 1500)
    }
}
export default dialog
