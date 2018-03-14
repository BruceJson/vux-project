<template>
    <div class='dialog'>
        <x-dialog v-model='showDialog'>
            <div class='dialog_header'>
                <p class='dialog_title'>稿件详情</p>
                <span class='dialog_close' @click="showDialog=false">
                    <i class='iconfont icon-close'></i>
                </span>
            </div>
            <div class='dialog_body'>
                <group gutter='0' label-width='2rem' label-align='left'>
                    <cell title="关联主题" :value="theme"></cell>
                    <cell title="分组类型" :value="groupType"></cell>
                    <cell title="稿件字数" :value="wordNum"></cell>
                    <cell title="创建时间" :value="createTime"></cell>
                    <cell title="投稿时间" :value="submitTime"></cell>
                    <cell title="采用媒体" :value="media"></cell>
                </group>
            </div>
            <div class='dialog_footer'>

            </div>
        </x-dialog>
    </div>
</template>
<script type="text/javascript">
import {
    XDialog,
    Group,
    Cell
} from 'vux';

export default {
    name: 'article-info-dialog',
    props: ['value'],
    components: {
        XDialog,
        Group,
        Cell
    },
    data() {
        return {
            theme: '关联主题',
            groupType: '类型1',
            wordNum: '1314',
            createTime: '2018-12-12 12:12',
            submitTime: '2018-12-12 12:12',
            media: '连云港日报'
        };
    },
    computed: {
        showDialog: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
};

</script>
<style type="text/css"></style>
