<template>
	<div class='app_body'>
		<div class='app_body_inner'>
			<transition name='slide-fade'>
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
export default {
	name: 'app-body',
	methods: {
		btnClick(index) {
			if (index === 0) {
				this.$router.push('/list');
			} else {
				this.$router.push('/personal');
			}
		}
	}
};

</script>
