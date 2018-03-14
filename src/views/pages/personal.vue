<template>
	<div class='personal_box'>
		<div class='top_box'>
			<div class='part1'>
				<div class='part1_inner'>
					<div class='up'>
						<img src="/static/image/test1.png">
						<p>阿尔托利亚</p>
					</div>
					<div class='down'>
						<div class='item' @click="$router.push({
							path: '/list',
							query: {
								type: 'draft'
							}
						})">
							<div class='inner'>
								<p class='p1'>5</p>
								<p class='p2'>草稿</p>
							</div>
						</div>
						<div class='item' @click="$router.push({
							path: '/list',
							query: {
								type: 'article'
							}
						})">
							<div class='inner'>
								<p class='p1'>10</p>
								<p class='p2'>已投稿</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<group class='bottom_part'>
			<cell title="联系人信息" is-link link='/personal-info'></cell>
			<cell title="退出登录" is-link></cell>
		</group>
	</div>
</template>
<script>
import { Group, Cell } from 'vux';
export default {
	name: 'personal',
	components: {
		Group,
		Cell
	}
};

</script>
