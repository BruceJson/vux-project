import Mock from 'mockjs';

// 稿库列表
// user_openid 否   string  用户标识
// platform    否   string  平台标识
// state   否   string  稿件状态 （-2 草稿 -1审核未通过 0 投稿等待审核 1 审核通过等待采用 2 已采用 -100 删除 ，yitou:已投）
// class   否   string  稿件类型
// pagesize    否   string  每页条数
// page    否   string  页数
Mock.mock(/\/submission\/manuscript\/list/, 'get', {
    "state": 1,
    "data": {
        "count": 2,
        "list|10": [{
            "title": "测试图文——安徽警方通报女童被埋路基案：关注到网络猜测 正调查疑点",
            "type": "free",
            "updatetime": "2017-08-16 08:00:25",
            "info_key": "5993fa626049770006120777",
            "class": "submissionbox",
            "script_type": "article",
            "state": 2
        }, {
            "topic_title": "主题名称xxxxxxxxxx121212333312333 一一 小组2",
            "title": "测试图文稿——抗议不断 韩国“萨德”环评被迫再次被推迟",
            "type": "",
            "updatetime": "2017-08-11 06:15:13",
            "info_key": "598d4356d63fc6000b386112",
            "class": "submissiontopicbox",
            "script_type": "images",
            "state": 1
        }, {
            "topic_title": "主题名称xxxxxxxxxx121212333312333 一一 小组2",
            "title": "测试图文稿——抗议不断 韩国“萨德”环评被迫再次被推迟",
            "type": "",
            "updatetime": "2017-08-11 06:15:13",
            "info_key": "598d4356d63fc6000b386112",
            "class": "submissiontopicbox",
            "script_type": "video",
            "state": 0
        }, {
            "topic_title": "主题名称xxxxxxxxxx121212333312333 一一 小组2",
            "title": "测试图文稿——抗议不断 韩国“萨德”环评被迫再次被推迟",
            "type": "",
            "updatetime": "2017-08-11 06:15:13",
            "info_key": "598d4356d63fc6000b386112",
            "class": "submissiontopicbox",
            "script_type": "audio",
            "state": -1
        }, {
            "topic_title": "主题名称xxxxxxxxxx121212333312333 一一 小组2",
            "title": "测试图文稿——抗议不断 韩国“萨德”环评被迫再次被推迟",
            "type": "",
            "updatetime": "2017-08-11 06:15:13",
            "info_key": "598d4356d63fc6000b386112",
            "class": "submissiontopicbox",
            "script_type": "audio",
            "state": -2
        }]
    },
    "message": "获取数据成功",
    "page": null,
    "pagesize": null,
    "total": null,
    "errors": null
});

// 主题分组列表接口
// platform   是   string   平台标识
// Mock.mock('/submission/topic/group', {
//     "state": 1,
//     "data": {
//     {
//         "topic": {
//             "id": "59896cbf87f38019008b456a",
//             "title": "有分组的主题"
//         },
//         "group": [{
//             "id": "59896cbf87f38019008b456b",
//             "name": "小组1"
//         }]
//     }],
//     "message": "获取主题分组信息成功",
//     "page": null,
//     "pagesize": null,
//     "total": null,
//     "errors": null
// });

// 补全个人信息接口
// user_openid 是   string  用户标识
// name    是   string  姓名
// mobile  是   string  联系电话
// company 是   string  单位
// address 是   string  联系地址
// remarks 否   string  备注
Mock.mock('/submission/complete/info', {
    "state": 1,
    "message": "补全个人信息成功",
    "page": null,
    "pagesize": null,
    "total": null,
    "errors": null
});


// 稿件删除接口
// platform    是   string  平台标识
// info_key    是   string  稿件标识
Mock.mock('/submission/article/delete', {
    "state": 1,
    "message": "补全个人信息成功",
    "page": null,
    "pagesize": null,
    "total": null,
    "errors": null
});
