<template>
	<div class='page_box'>
		<div class='submit_page'>
			<div class='content_area'>
				<div class='scroll absolute_full'>
					<group class='padding_top_1' label-width='2rem' label-align='left'>
						<x-input placeholder="请输入标题（30字以内）" placeholder-align="left" :required='true' :show-clear="false" text-align='left' v-model='title'></x-input>
						<x-textarea placeholder="请输入稿件内容（5000字以内）" :show-counter="true" :height="150" :rows="8" :cols="20" v-model='desc'></x-textarea>
					</group>
					<div class='selectImgBox clx'>
						<div class='select_img_item'>
							<img src="/static/image/test/1.jpg">
							<img class='btn_edit btn_delete' src="/static/image/18.png">
							<img class='btn_edit btn_edit_info' src="/static/image/19.png" @click='editImgInfo(1)'>
						</div>
						<div class='select_img_item'>
							<img src="/static/image/test/2.jpg">
							<img class='btn_edit btn_delete' src="/static/image/18.png">
							<img class='btn_edit btn_edit_info' src="/static/image/19.png" @click='editImgInfo(1)'>
						</div>
						<div class='select_img_item'>
							<img src="/static/image/test/3.jpg">
							<img class='btn_edit btn_delete' src="/static/image/18.png">
							<img class='btn_edit btn_edit_info' src="/static/image/19.png" @click='editImgInfo(1)'>
						</div>
						<div class='select_img_item btn_add_img'>
							<img src="/static/image/17.png">
							<input type="file" name="">
						</div>
					</div>
				</div>
			</div>
			<flexbox class='bottom_btn_area'>
				<flexbox-item>
					<x-button>保存草稿</x-button>
				</flexbox-item>
				<flexbox-item>
					<x-button class='btn_yellow'>保存并投稿</x-button>
				</flexbox-item>
			</flexbox>
		</div>
		<x-dialog v-model="showEditImgDialog" class="dialog-demo">
			<div class='edit_img_dialog_inner'>
				<x-textarea placeholder="请输入图片描述内容（200字以内）" :show-counter="true" :height="200" :rows="8" :cols="20" v-model='desc'></x-textarea>
				<flexbox>
					<flexbox-item>
						<x-button @click.native="showEditImgDialog=false">取消</x-button>
					</flexbox-item>
					<flexbox-item>
						<x-button class='btn_yellow'>完成</x-button>
					</flexbox-item>
				</flexbox>
			</div>
		</x-dialog>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, XButton, XInput, Group, XTextarea, XDialog } from 'vux';
export default {
	name: 'image-submit',
	components: {
		Flexbox,
		FlexboxItem,
		XButton,
		XInput,
		Group,
		XTextarea,
		XDialog
	},
	data() {
		return {
			showContent004: false,
			showEditImgDialog: false,
			title: '',
			subTitle: '',
			preTitle: '',
			desc: ''
		}
	},
	methods: {
		editImgInfo() {
			this.showEditImgDialog = true;
		}
	}
};

</script>
