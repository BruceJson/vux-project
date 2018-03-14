<template>
	<div class='personal_info_box'>
		<group label-width='2rem' label-align='left'>
			<x-input title="姓名" placeholder="请输入姓名（必填）" :required='true' placeholder-align="left" :show-clear="false" text-align='left' v-model='name'></x-input>
			<x-input title="联系电话" placeholder="请输入联系电话（必填）" :required='true' is-type='china-mobile' placeholder-align="left" :show-clear="false" text-align='left' v-model='phone'></x-input>
			<x-input title="单位" placeholder="请输入单位（必填）" :required='true' placeholder-align="left" :show-clear="false" text-align='left' v-model='company'></x-input>
			<x-address title="联系地址" v-model="address" :list="addressData" placeholder="请选择地址（必填）" value-text-align='left'></x-address>
			<x-textarea title="备注" placeholder="请输入备注" :show-counter="false" :height="100" :rows="8" :cols="20" v-model='desc'></x-textarea>
		</group>
		<p class='input_tip'>备注：个人隐私不对外公开，填写真实姓名与联系方式是为了记者追踪报道与薪酬邮寄；</p>
		<div class='submit_btn_area'>
			<x-button action-type="button">保存</x-button>
		</div>
	</div>
</template>
<script>
import { XButton, XInput, XAddress, ChinaAddressV4Data, XTextarea, Group } from 'vux';
export default {
	name: 'personal-info',
	components: {
		XButton,
		XInput,
		XAddress,
		XTextarea,
		Group
	},
	data() {
		return {
			name: '',
			phone: '',
			company: '',
			address: [],
			desc: '',
			addressData: ChinaAddressV4Data
		};
	}
};

</script>
