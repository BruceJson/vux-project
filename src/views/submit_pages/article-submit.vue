<template>
	<div class='page_box'>
		<div class='submit_page'>
			<div class='content_area'>
				<div class='scroll absolute_full'>
					<group class='padding_top_1' label-width='2rem' label-align='left'>
						<x-input placeholder="请输入标题（30字以内）" placeholder-align="left" :show-clear="false" text-align='left' v-model='title'></x-input>
						<group class='transition_3' gutter='0' style='overflow: hidden;' :style="{'max-height':showMore ? '3rem': '0'}">
							<!-- 站位 -->
							<x-input style='display: none;'></x-input>
							<x-input placeholder="请输入副标题（30字以内）" placeholder-align="left" :show-clear="false" text-align='left' v-model='subTitle'></x-input>
							<x-input placeholder="请输入引题（30字以内）" placeholder-align="left" :show-clear="false" text-align='left' v-model='preTitle'></x-input>
							<x-input placeholder="请输入作者（30字以内）" :required='true' placeholder-align="left" :show-clear="false" text-align='left' v-model='writer'></x-input>
						</group>
						<x-textarea placeholder="请输入稿件内容（5000字以内）" :show-counter="true" :height="100" :rows="8" :cols="20" v-model='desc'></x-textarea>
						<span class='show_more_arrow transition_3' :class='{up:showMore}' @click='showMore = !showMore'>
							<i class="iconfont icon-jiantouarrow483"></i>
						</span>
					</group>
					<div class='selectImgBox clx' style=''>
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
			<div class='submit_bottom_area'>
				<div class='item'>
					<div>
						<p class='icon align_center'>
							<i class='iconfont icon-chakan' style='font-size: 0.4rem;'></i>
						</p>
						<p style='margin-top: 0.05rem;'>预览</p>
					</div>
				</div>
				<div class='item'>
					<div>
						<p class='icon align_center' style='line-height: 1;margin-top: 0.1rem;'>
							<i class='iconfont icon-msnui-save' style='font-size: 0.4rem;'></i>
						</p>
						<p style='margin-top: 0.05rem;'>保存草稿</p>
					</div>
				</div>
				<div class='item'>
					<div>
						<p class='icon align_center'>
							<i class='iconfont icon-fabu2' style='font-size: 0.5rem;'></i>
						</p>
						<p style='margin-top: -0.03rem;'>投稿</p>
					</div>
				</div>
			</div>
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
import {
	Flexbox,
	FlexboxItem,
	XButton,
	XInput,
	Group,
	XTextarea,
	XDialog
} from 'vux';
export default {
	name: 'article-submit',
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
			showMore: false,
			showContent004: false,
			showEditImgDialog: false,
			title: '',
			subTitle: '',
			preTitle: '',
			writer: '',
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

<style type="text/css">
.submit_bottom_area {
	border-top: 1px solid #E6E6E6;
}

</style>
