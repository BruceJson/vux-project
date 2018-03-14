/**
 * 每个用户都对应了不同的权限，不同的权限对应不同的应用
 * 本地会有一个应用router map，这个map有着不同的role权限，
 * 这里用户登录的时候会给前端一系列的role信息，为了能和前后端统一，这个文件就是记录着每个应用对应的role
 */
const appKeyCfgMap = {
    'FREE_CONTRIBUTE': 'freecontributor', //自由投稿
    'MEDIA_UPLOAD': 'sourceupload', //素材上传
};
export default appKeyCfgMap;
