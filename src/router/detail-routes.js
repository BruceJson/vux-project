const detailRoutes = [{
    path: '/article-detail',
    name: '图文详情',
    component: () =>
        import ('@/views/details/article-detail'),
    meta: {
        title: '图文详情'
    }
}, {
    path: '/images-detail',
    name: '图集详情',
    component: () =>
        import ('@/views/details/images-detail'),
    meta: {
        title: '图集详情'
    }
}, {
    path: '/audio-detail',
    name: '音频详情',
    component: () =>
        import ('@/views/details/audio-detail'),
    meta: {
        title: '音频详情'
    }
}, {
    path: '/video-detail',
    name: '视频详情',
    component: () =>
        import ('@/views/details/video-detail'),
    meta: {
        title: '视频详情'
    }
}];

export default detailRoutes;
