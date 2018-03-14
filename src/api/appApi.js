import ajax from '@/tools/ajax'
import store from '@/store';

const fetch = process.env.NODE_ENV === 'development' ? ajax.doNet : ajax.doNet;

export default {
    // 获取稿库列表
    // options      {object}
    // state        string  稿件状态 （-2 草稿 -1审核未通过 0 投稿等待审核 1 审核通过等待采用 2 已采用 -100 删除 ，yitou:已投）
    // type         string  稿件类型
    // pageSize     string  每页条数
    // page         string  页数
    getArticleList: (options) => {
        // user_openid 否   string  用户标识
        // platform    否   string  
        // state   否   string  稿件状态 （-2 草稿 -1审核未通过 0 投稿等待审核 1 审核通过等待采用 2 已采用 -100 删除 ，yitou:已投）
        // pagesize    否   string  每页条数
        // page    否   string  页数
        return fetch({
            url: '/submission/manuscript/list',
            method: 'get',
            data: {
                user_openid: store.getters.rmtOpenId,
                platform: store.getters.platformId,
                state: options.state,
                pagesize: options.pageSize,
                page: options.page,
            }
        });
    },
    getAppList: (platformId) => {
        return fetch({
            url: '/platform/all-app',
            method: 'get',
            data: {
                platform: platformId
            }
        });
    }
}
