<template>
	<div class='list_box'>
		<div class='header_tab'>
			<div class='header_tab_item' :class="{'active': tabIndex === 0}" @click='tabClick(0)'>
				<span class='vertical_middle title'>草稿</span>
				<span class='vertical_middle tip'>(12)</span>
			</div>
			<div class='header_tab_item' :class="{'active': tabIndex === 1}" @click='tabClick(1)'>
				<span class='vertical_middle title'>已投稿</span>
				<span class='vertical_middle tip'>(24)</span>
			</div>
		</div>
		<div class='submission_list'>
			<div class='absolute_full submission_list_inner'>
				<transition name='slide-fade'>
					<div class='draft_list' v-show='tabIndex === 0' ref='list0' @scroll='draftScroll'>
						<swipeout class="vux-1px-tb">
							<swipeout-item class='list_item' transition-mode="follow" v-for="(item, index) in list" :key="index">
								<div slot="right-menu">
									<swipeout-button class='btn_info' type="primary" @click.native='editBtnClickHandler(item)'>编辑稿件</swipeout-button>
									<swipeout-button class='btn_del' type="warn">删除</swipeout-button>
								</div>
								<div @click="itemClick(item)" slot="content" class='vux-1px-b vux-1px-t content'>
									<div class='left_box'>
										<img v-if="item.script_type === 'article'" src="/static/image/8.png">
										<img v-if="item.script_type === 'images'" src="/static/image/9.png">
										<img v-if="item.script_type === 'audio'" src="/static/image/10.png">
										<img v-if="item.script_type === 'video'" src="/static/image/11.png">
									</div>
									<div class='right_box'>
										<p class='p1'>
											<span class='title'>{{item.title}}</span>
											<span v-if="item.class === 'submissiontopicbox'" class='title_tip'>主题</span>
											<span v-if="item.class === 'submissiontopicbox'" class='desc'>[{{item.topic_title}}]</span>
										</p>
										<p class='p2'>
											<span class='time'>更新时间:{{item.updatetime}}</span>
										</p>
									</div>
								</div>
							</swipeout-item>
						</swipeout>
						<load-more tip="正在加载" :showDraftLoading='showDraftLoading'></load-more>
					</div>
				</transition>
				<transition name='slide-fade'>
					<div class='article_list' v-show='tabIndex === 1' ref='list1' @scroll='articleScroll'>
						<swipeout class="vux-1px-tb">
							<swipeout-item class='list_item' transition-mode="follow" v-for="(item, index) in list" :key="index">
								<div slot="right-menu">
									<swipeout-button class='btn_info' type="primary" @click.native='editBtnClickHandler(item)'>编辑稿件</swipeout-button>
									<swipeout-button class='btn_del' type="warn">删除</swipeout-button>
								</div>
								<div @click="itemClick(item)" slot="content" class='vux-1px-b vux-1px-t content'>
									<div class='left_box'>
										<img v-if="item.script_type === 'article'" src="/static/image/8.png">
										<img v-if="item.script_type === 'images'" src="/static/image/9.png">
										<img v-if="item.script_type === 'audio'" src="/static/image/10.png">
										<img v-if="item.script_type === 'video'" src="/static/image/11.png">
									</div>
									<div class='right_box'>
										<p class='p1'>
											<span class='title'>{{item.title}}</span>
											<span v-if="item.class === 'submissiontopicbox'" class='title_tip'>主题</span>
											<span v-if="item.class === 'submissiontopicbox'" class='desc'>[{{item.topic_title}}]</span>
										</p>
										<p class='p2'>
											<span class='time'>更新时间:{{item.updatetime}}</span>
											<span class='state' v-if="item.state === -1">
												<img class='vertical_middle' src="/static/image/12.png">
												<span class='vertical_middle'>未通过</span>
											</span>
											<span class='state' v-if="item.state === 0">
												<img class='vertical_middle' src="/static/image/13.png">
												<span class='vertical_middle'>已投递</span>
											</span>
											<span class='state' v-if="item.state === 2">
												<img class='vertical_middle' src="/static/image/14.png">
												<span class='vertical_middle'>已采用</span>
											</span>
											<span class='state' v-if="item.state === 1">
												<img class='vertical_middle' src="/static/image/15.png">
												<span class='vertical_middle'>已通过</span>
											</span>
										</p>
									</div>
								</div>
							</swipeout-item>
						</swipeout>
						<load-more tip="正在加载" :showArticleLoading='showArticleLoading'></load-more>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
import {
	Scroller,
	Swiper,
	SwiperItem,
	Swipeout,
	SwipeoutItem,
	SwipeoutButton,
	LoadMore
} from 'vux';

import tools from '@/tools';
import appApi from '@/api/appApi';
export default {
	name: 'list',

	created() {
		this.getList(true);
	},
	data() {
		console.log('this.query', this.$route);
		return {
			list: [{
				title: '图文稿件',
				type: 'article'
			}, {
				title: '图集稿件',
				type: 'image'
			}, {
				title: '主题稿件',
				type: 'theme'
			}, {
				title: '视频稿件',
				type: 'video'
			}, {
				title: '音频稿件',
				type: 'radio'
			}],
			// 根据query判断type，type有两种：draft/article
			tabIndex: !this.$route.query.type || this.$route.query.type === 'draft' ? 0 : 1,
			// draft-list
			showDraftLoading: true,
			draftScrollFlag: true,
			// article-list
			showArticleLoading: true,
			articleScrollFlag: true,
		}
	},
	components: {
		Scroller,
		Swiper,
		SwiperItem,
		Swipeout,
		SwipeoutItem,
		SwipeoutButton,
		LoadMore
	},
	methods: {
		// 获取列表
		getList(refresh) {
			let state;
			if (this.tabIndex === 0) {
				// 草稿
				state = '-2';
			} else {
				// 已投稿
				state = 'yitou';
			}

			appApi.getArticleList({
				state: state,
				pageSize: 10,
				page: 1
			}).then(resp => {
				console.log('列表获得成功~~');
				console.log(resp)
				var arr = resp.data && resp.data.list || [];
				if (refresh) {
					this.list = arr;
				} else {
					this.list = this.list.concat(arr);
				}
			});
		},
		// 切换按钮点击
		tabClick(index) {
			this.tabIndex = index;
			this.$refs['list' + index].scrollTop = 0;
			this.getList(true);
		},
		// 草稿列表滑动事件
		draftScroll(e) {
			var list = e.target;
			if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
				if (this.draftScrollFlag) {
					this.draftScrollFlag = false;
					console.log('draft-scrollEnd');
					setTimeout(() => {
						this.draftListScrollEnd();
						this.draftScrollFlag = true;
					}, 1000);
				}
			}
		},
		// 已投稿列表滑动事件
		articleScroll(e) {
			var list = e.target;
			if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
				if (this.articleScrollFlag) {
					this.articleScrollFlag = false;
					console.log('article-scrollEnd');
					setTimeout(() => {
						this.articleListScrollEnd();
						this.articleScrollFlag = true;
					}, 1000);
				}
			}
		},
		// 草稿列表滑动到底
		draftListScrollEnd() {
			this.getList();
		},
		// 已投稿列表滑动到底
		articleListScrollEnd() {
			this.getList();
		},
		// 列表项点击事件
		itemClick(item) {
			// 类型（article:图文，images:图集，video:视频，audio：音频）
			var type = item.script_type;
			switch (type) {
			case 'article':
				this.$router.push('/article-detail');
				break;
			case 'images':
				this.$router.push('/images-detail');
				break;
			case 'video':
				this.$router.push('/video-detail');
				break;
			case 'audio':
				this.$router.push('/audio-detail');
				break;
			default:
				break;
			}
		},
		// 编辑按钮点击
		editBtnClickHandler(item) {
			// 类型（article:图文，images:图集，video:视频，audio：音频）
			var type = item.script_type;
			switch (type) {
			case 'article':
				this.$router.push('/article-submit');
				break;
			case 'images':
				this.$router.push('/images-submit');
				break;
			case 'video':
				this.$router.push('/video-submit');
				break;
			case 'audio':
				this.$router.push('/audio-submit');
				break;	
			default:
				break;
			}
		}
	}
};

</script>
