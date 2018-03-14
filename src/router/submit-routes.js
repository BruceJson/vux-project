const submitRoutes = [{
    path: '/article-submit',
    name: '图文投稿',
    component: () =>
        import ('@/views/submit_pages/article-submit'),
    meta: {
        title: '图文投稿'
    }
}, {
    path: '/theme-submit',
    name: '主题投稿',
    component: () =>
        import ('@/views/submit_pages/theme-submit'),
    meta: {
        title: '主题投稿'
    }
}, {
    path: '/images-submit',
    name: '图集投稿',
    component: () =>
        import ('@/views/submit_pages/images-submit'),
    meta: {
        title: '图集投稿'
    }
}, {
    path: '/audio-submit',
    name: '音频投稿',
    component: () =>
        import ('@/views/submit_pages/audio-submit'),
    meta: {
        title: '音频投稿'
    }
}, {
    path: '/video-submit',
    name: '视频投稿',
    component: () =>
        import ('@/views/submit_pages/video-submit'),
    meta: {
        title: '视频投稿'
    }
}];

export default submitRoutes;
