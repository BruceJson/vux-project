<template>
	<x-header :title='title'></x-header>
</template>
<script>
import { XHeader } from 'vux'

export default {
	name: 'app-header',
	// data() {
	// 	console.log('this.$route', this.$route);
	// 	return {
	// 		title: '1111'
	// 	}
	// },
	computed: {
		title() {
			console.log('this.$route', this.$route);
			return this.$route.path === '/' ? '列表' : this.$route.matched[0].meta.title
		}
	},
	components: {
		XHeader
	}
};

</script>
