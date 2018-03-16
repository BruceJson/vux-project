<template>
	<div class='collect_article_page'>
		<div class='img_box'>
			<img src="/static/image/test/5.jpg">
			<div class='info_box'>
				<div class='part1'>
					<p class='text_ellipsis title'>地球一小时-蓝天保卫战征文比赛蓝天保卫战征文比赛蓝天保卫战征文比赛蓝天保卫战征文比赛</p>
					<span class='state'>进行中</span>
				</div>
				<div class='part2'>
					<span>时间：</span>
					<span>2017/10/10 13:00 - 2018/10/10 13:00</span>
				</div>
			</div>
		</div>
		<div class='text_box' style='border-bottom: 1px solid #eee;'>
			征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容征文内容
		</div>
		<group title="参与组别" label-width="5em">
			<popup-picker style='border-bottom: 1px solid #eee;' popup-title="选择组别" title="组别" :data="groupList" v-model="group"></popup-picker>
		</group>
		<div class='submit_btn_area'>
			<x-button>立即投稿</x-button>
		</div>
	</div>
</template>
<script>
import ArticleInfoDialog from '@/views/dialog/article-info-dialog';
import {
	Group,
	PopupPicker,
	XButton
} from 'vux';
export default {
	name: 'collect-article',
	components: {
		Group,
		PopupPicker,
		XButton,
		ArticleInfoDialog
	},
	data() {
		return {
			preTitle: '',
			title: '',
			subTitle: '',
			writer: '',
			createTime: '',
			updateTime: '',
			submitTime: '',
			showInfoDialog: false,
			group: ['组别1'],
			groupList: [
				['组别1', '组别2', '组别3']
			]
		};
	},
	methods: {
		showInfoClickHandler() {
			this.showInfoDialog = true;
		}
	}
};

</script>

<style type="text/css" scoped>
body,
html {
	height: auto;
}

.app {
	height: auto !important;
}

.app_body {
	display: block !important;
}

.app_body_inner {
	position: relative;
	left: auto;
	top: auto;
	right: auto;
	bottom: auto;
}

.weui-cells__title {
	color: #434343 !important;
}

</style>
