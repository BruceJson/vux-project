<template>
	<div class='app_footer' v-show="curType !== '2'">
		<div class='footer_item v_middle align_center' @click='itemClick(0)'>
			<div class='footer_item_inner inline_block vertical_middle'>
				<img :src="[curType === '0' ? '/static/image/1.active.png' : '/static/image/1.png']">
				<p :style="{'color': curType === '0' ? '#079AE3' : '#C4C4C4'}">稿库</p>
			</div>
		</div>
		<div class='footer_add_btn v_middle'>
			<img class='inline_block vertical_middle' @click='showDialog' src="/static/image/3.png">
		</div>
		<div class='footer_item v_middle align_center' @click='itemClick(1)'>
			<div class='footer_item_inner inline_block vertical_middle'>
				<img :src="[curType === '1' ? '/static/image/2.active.png' : '/static/image/2.png']">
				<p :style="{'color': curType === '1' ? '#079AE3' : '#C4C4C4'}">我的</p>
			</div>
		</div>
		<!-- dialog -->
		<div>
			<x-dialog class='add_submission_dialog' v-model='show'>
				<div class='dialog_inner' @click='show=false'>
					<div class='select_submission_list'>
						<div class='select_submission_item' @click.stop="addSubmission('0')">
							<img src="/static/image/4.png">
							<p>图文</p>
						</div>
						<div class='select_submission_item' @click.stop="addSubmission('1')">
							<img src="/static/image/5.png">
							<p>图集</p>
						</div>
						<div class='select_submission_item' @click.stop="addSubmission('2')">
							<img src="/static/image/6.png">
							<p>视频</p>
						</div>
						<div class='select_submission_item' @click.stop="addSubmission('3')">
							<img src="/static/image/7.png">
							<p>音频</p>
						</div>
					</div>
					<div class='footer_add_btn v_middle'>
						<img class='inline_block vertical_middle' @click.stop='show=false' src="/static/image/3.png">
					</div>
				</div>
			</x-dialog>
		</div>
	</div>
</template>
<script>
import { Tabbar, TabbarItem, XDialog } from 'vux';
export default {
	name: 'app-footer',
	components: {
		Tabbar,
		TabbarItem,
		XDialog
	},
	data() {
		console.log('this.$route', this.$route);
		return {
			show: false
		};
	},
	computed: {
		curType() {
			if (this.$route.path === '/' || this.$route.path === '/list') {
				return '0';
			} else if (this.$route.path === '/personal') {
				return '1';
			} else {
				return '2';
			}
		}
	},
	methods: {
		showDialog() {
			this.show = true;
		},
		hideDialog() {
			this.show = false;
		},
		addSubmission(type) {
			this.show = false;
			switch (type) {
				case '0':
					// 图文
					this.$router.push('/article-submit');
					break;
				case '1':
					// 图集
					this.$router.push('/image-submit');
					break;
				case '2':
					// 视频
					this.$router.push('/video-submit');
					break;
				case '3':
					// 音频
					this.$router.push('/radio-submit');
					break;
				default:
					break;
			};
		},
		itemClick(index) {
			if (index === 0) {
				this.$router.push('/list');
			} else {
				this.$router.push('/personal');
			}
		}
	}
}

</script>
