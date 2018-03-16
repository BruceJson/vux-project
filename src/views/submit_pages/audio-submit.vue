<template>
    <div class='page_box'>
        <div class='submit_page'>
            <div class='content_area'>
                <div ref='scroll_box' class='scroll absolute_full'>
                    <group class='padding_top_1' label-width='2rem' label-align='left'>
                        <x-input placeholder="请输入标题（30字以内）" placeholder-align="left" :required='true' :show-clear="false" text-align='left' v-model='title'></x-input>
                        <x-input placeholder="请输入作者" placeholder-align="left" :required='true' :show-clear="false" text-align='left' v-model='writer'></x-input>
                        <x-textarea placeholder="请输入稿件内容（5000字以内）" :show-counter="true" :height="150" :rows="8" :cols="20" v-model='desc'></x-textarea>
                    </group>
                    <div class='selectVideoBox'>
                        <audio-component></audio-component>
                        <div class='btn_add_audio'>
                            <img class='add_img' src="/static/image/audio_add.png">
                            <input type="file" name="">
                        </div>
                    </div>

                    <div style='height: 800px;'></div>
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
import AudioComponent from '@/components/audio'
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
    name: 'audio-submit',
    components: {
        Flexbox,
        FlexboxItem,
        XButton,
        XInput,
        Group,
        XTextarea,
        XDialog,
        AudioComponent
    },
    mounted() {
        window.onresize = () => {
            setTimeout(() => {
                // this.$refs.scroll_box.style.overflow = 'hidden';
            }, 1000);
        }
    },
    data() {
        return {
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

    }
};

</script>
<style type="text/css">
.player {
    position: relative;
    width: 100%;
    display: inline-block;
    overflow: hidden;
}

.player .player_inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.player .player_inner video {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
}

.video_box {
    position: relative;
    width: 100%;
    height: 100%;
}

.btn_add_audio {
    position: relative;
    margin-top: 0.3rem;
}

.btn_add_audio .add_img {
    width: 100%;
}

.btn_add_audio input[type='file'] {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

</style>
