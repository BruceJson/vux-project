<template>
	<p class='checkbox' @click='checkboxClickHandler'>
		<i class='iconfont icon-huiyishiqueren_huabanfuben' :style="{'color': checkColor}"></i>
		<span>
			<slot>
				checkbox
			</slot>
		</span>
	</p>
</template>
<script type="text/javascript">
export default {
	name: 'checkbox',
	data() {
		return {
			selfChecked: this.checked,
		}
	},

	computed: {
		checkColor() {
			return this.selfChecked ? '#049BE4' : '#cccccc';
		}
	},
	methods: {
		checkboxClickHandler() {
			this.selfChecked = !this.selfChecked;

			this.$emit('change', this.selfChecked);
		}
	},
	props: ['checked']
};

</script>
<style type="text/css" scoped>


</style>
