/** 
 * 这个文件是为了能够让从外界网站点击特定功能按钮（比如说：应用，用户认证）进入个人中心时，会进入一个对应的功能的界面，
 * 外界登录后，将特定的键存入cookie，这个文件就是对应的键值对，为了做项目内的功能型路由跳转
 */

const jumpOriginMap = {
    'userauth': '/user/realnameauth', // 用户认证
    'freecontributor': '/app/all/freecontribute' // 自由投稿app
};

export default jumpOriginMap;
