import Vue from 'vue'
import Router from 'vue-router'

import detailRoutes from './detail-routes';
import submitRoutes from './submit-routes';

Vue.use(Router)

let routes = [{
	path: '/',
	redirect: './list'
}, {
	path: '/login',
	name: 'login',
	component: () =>
		import ('@/views/login/login'),
	meta: {
		title: '关联账号'
	}
}, {
	path: '/forgetpwd',
	name: 'forgetpwd',
	component: () =>
		import ('@/views/login/forget-pwd'),
	meta: {
		title: '忘记密码'
	}
}, {
	path: '/list',
	name: 'app',
	component: () =>
		import ('@/views/pages/list'),
	meta: {
		title: '列表'
	}
}, {
	path: '/personal',
	name: 'login',
	component: () =>
		import ('@/views/pages/personal'),
	meta: {
		title: '个人中心'
	}
}, {
	path: '/personal-info',
	name: '联系人信息',
	meta: {
		title: '联系人信息'
	},
	component: () =>
		import ('@/views/pages/personal-info')
}, {
	path: '/collect-article',
	name: '征文详情',
	meta: {
		title: '征文详情'
	},
	component: () =>
		import ('@/views/pages/collect-article')
}, ...detailRoutes, ...submitRoutes];

export default new Router({
	mode: 'history',
	routes: routes
});
