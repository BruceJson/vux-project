const getters = {
    rmtOpenId: state => state.user.rmtOpenId,
    wxOpenId: state => state.user.wxOpenId,
    platformId: state => state.user.platformId,
    userInfo: state => state.user.userInfo
};

export default getters;
