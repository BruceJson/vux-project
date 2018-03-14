<template>
	<div class='page_box'>
		<div class='swiper_box'>
			<div style='margin-top: 15px;'>
				<x-input placeholder="请输入11位手机号">
					<i class='icon iconfont icon-shouji' slot="label" style="padding-right: 10px;display: block;width: 40px;font-size: 23px;"></i>
				</x-input>
				<x-input class="weui-vcode" placeholder="请输入验证码">
					<i class='icon iconfont icon-shouji' slot="label" style="padding-right: 10px;display: block;width: 40px;font-size: 23px;"></i>
					<x-button class='button_blue' slot="right" mini>发送验证码</x-button>
				</x-input>
				<x-input placeholder="请输入密码（6-15位字符组成）">
					<i class='icon iconfont icon-mima' slot="label" style="padding-right: 10px;display: block;width: 40px;font-size: 23px;"></i>
				</x-input>
				<p style='padding:0 15px;'>
					<checkbox :checked='true' @change='acceptCheckboxChange'>
						<span style='font-size: 0.23rem;'>我已阅读并同意</span>
					</checkbox>
					<a style='color: #049BE4;font-size: 0.23rem;' href='http://www.baidu.com'>注册协议</a>
				</p>
				<div class='submit_btn_area'>
					<x-button action-type="button">注册</x-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton } from 'vux';
import Checkbox from '@/components/checkbox';
export default {
	name: 'login',
	components: { Tab, TabItem, Swiper, SwiperItem, XInput, Group, XButton, Checkbox },
	data() {
		return {
			barActiveColor: '#049BE4',
			swiperIndex: 0
		}

	},
	methods: {
		tabItemClickHandler(index) {
			this.swiperIndex = index;
		},
		acceptCheckboxChange(checked) {
			console.log(checked);
		}
	}
};

</script>
