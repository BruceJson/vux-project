<template>
    <div class='audio_component'>
        <div class='audio_component_inner'>
            <div class='left_part'>
                <div class='wave_box'>
                    <i class='iconfont icon-wave2'></i>
                    <i class='iconfont icon-wave'></i>
                    <i class='iconfont icon-wave1'></i>
                </div>
                <div class='info_box'>
                    <p class='title'>Siri</p>
                    <p class='time'>
                        <span style='margin-right: 0.35rem;'>00:11:24</span>
                        <span>2017/10/29</span>
                    </p>
                </div>
            </div>
            <div class='right_part play_box' :class="[playState==='pause' ? 'pause' : 'play']" @click='playClickHandler'>
                <i class='iconfont icon-bofang play'></i>
                <i class='iconfont icon-bofang1 pause'></i>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'audio_component',
    data() {
        return {
            playState: 'pause'
        }
    },
    methods: {
        playClickHandler() {
            this.playState = this.playState === 'pause' ? 'play' : 'pause';

            this.$emit('change', this.playState);
        }
    }
};

</script>
<style type="text/css" scoped>
.audio_component {
    position: relative;
}

.audio_component_inner {
    position: relative;
    height: 1rem;
    width: 100%;
    border-right: 1px solid #049BE4;
    border-bottom: 1px solid #049BE4;
    display: flex;
    box-shadow: -1px -1px 5px 0 rgba(4, 155, 228, 0.2);
}

.audio_component_inner .left_part {
    display: flex;
    flex-grow: 1;
}

.audio_component_inner .left_part .wave_box {
    position: relative;
    width: 0.78rem;
}

.audio_component_inner .left_part .wave_box .iconfont {
    position: absolute;
    font-size: 0.6rem;
    top: 0.1rem;
    left: 0.1rem;
    color: #049BE4;
}

.audio_component_inner .left_part .info_box {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
}

.audio_component_inner .left_part .info_box .title {
    font-size: 0.3rem;
    color: #333;
}

.audio_component_inner .left_part .info_box .time {
    font-size: 0.16rem;
    color: #666666;
}

.audio_component_inner .right_part {
    display: flex;
    align-items: center;
    padding-right: 0.55rem;
}

.audio_component_inner .right_part i {
    font-size: 0.65rem;
    color: #049BE4;
}

.audio_component_inner .play_box.play .pause {
    display: none;
}

.audio_component_inner .play_box.play .play {
    display: block;
}

.audio_component_inner .play_box.pause .pause {
    display: block;
}

.audio_component_inner .play_box.pause .play {
    display: none;
}

</style>
