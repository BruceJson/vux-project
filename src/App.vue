<template>
	<div class='app' style='height: 100%;'>
		<!-- <app-header></app-header> -->
		<app-body></app-body>
		<app-footer></app-footer>
		<!-- 完善信息弹框 -->
		<x-dialog class='complete_personal_info_dialog' v-model="showInfoDialog">
			<p class='dialog_title'>补全联系人信息</p>
			<group class='padding_top_1' label-width='2rem' label-align='left'>
				<x-input title="姓名" placeholder="必填" :required='true' placeholder-align="right" :show-clear="false" text-align='right' v-model='name'></x-input>
				<x-input title="联系电话" placeholder="必填" :required='true' placeholder-align="right" :show-clear="false" text-align='right' v-model='phone'></x-input>
				<x-input title="单位" placeholder="必填" :required='true' placeholder-align="right" :show-clear="false" text-align='right' v-model='company'></x-input>
				<x-input title="联系地址" placeholder="必填" :required='true' placeholder-align="right" :show-clear="false" text-align='right' v-model='address'></x-input>
				<x-textarea title="备注" placeholder="" :required='true' placeholder-align="right" :show-clear="false" text-align='right' v-model='desc'></x-textarea>
				<img @click='showInfoDialog=false' class='dialog_close' src="/static/image/16.png">
			</group>
		</x-dialog>
	</div>
</template>
<script>
import AppHeader from '@/views/layout/app-header';
import AppBody from '@/views/layout/app-body';
import AppFooter from '@/views/layout/app-footer';

import {
	XDialog,
	XInput,
	XTextarea,
	Group
} from 'vux';
export default {
	name: 'app',
	methods: {

	},
	components: {
		AppHeader,
		AppBody,
		AppFooter,
		XDialog,
		Group,
		XInput,
		XTextarea
	},
	data() {
		return {
			showInfoDialog: false,
			name: '',
			phone: '',
			company: '',
			address: '',
			desc: '',

		};
	}
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~@/assets/style/theme.less';
@import '~@/assets/style/common.less';
@import '~@/assets/style/vux-rewrite.less';
@import '~@/assets/style/app.less';


body {
	background-color: #fbf9fe;
}

.slide-fade-enter-active {
	transition: all .3s ease-in-out;
}

.slide-fade-enter {
	transform: translateY(10px);
	opacity: 0;
}

.fade-enter-active {
	transition: all .3s ease-in-out;
}

.fade-enter {
	opacity: 0;
}

</style>
