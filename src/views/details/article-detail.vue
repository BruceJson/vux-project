<template>
	<div class='detail_page'>
		<div class='detail_page_inner'>
			<p class='little_title'>引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题引题</p>
			<p class='big_title'>标题标题标题标题标题标题标题标题标题标题标题标题</p>
			<p class='sub_title'>副标题副标题副标题副标题副标题副标题副标题副标题</p>
			<div class='writer_box'>
				<span class='span_writer'>作者/赵大伟</span>
				<button class='btn_article_info' @click='showInfoClickHandler'>稿件信息</button>
			</div>
			<div class='text_box'>
				<div class='img_list'>
					<img class='img_item' src="/static/image/test/3.jpg">
					<img class='img_item' src="/static/image/test/3.jpg">
					<img class='img_item' src="/static/image/test/3.jpg">
					<img class='img_item' src="/static/image/test/3.jpg">
				</div>
				<div class='text_content'>
					<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
				</div>
			</div>
		</div>
		<div class='edit_area'>
			<div>
				<p class='align_center'>
					<i class='iconfont icon-bianjimoban'></i>
				</p>
				<p>编辑</p>
			</div>
		</div>
		<article-info-dialog v-model='showInfoDialog'></article-info-dialog>
	</div>

</template>
<script>
import ArticleInfoDialog from '@/views/dialog/article-info-dialog';
export default {
	name: '图文稿件信息',
	components: {
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
			showInfoDialog: false
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

</style>
