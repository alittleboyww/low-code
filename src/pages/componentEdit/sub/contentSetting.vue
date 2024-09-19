<template>
    <div class="content-setting">
        <div class="setting-item content-eye" @click="elementStore.contentConfigSwitch()">
            <img :src="elementStore.getContentConfig.iconImg">
        </div>
        <!-- 缩放比例 -->
         <div class="setting-item content-scale">
            <el-slider
                v-model="elementStore.contentConfig.scale"
                :min="0.2"
                :max="1"
                :step="0.01"
                @input="inputSlider"
            />
         </div>
         <!-- 页面大小 及用户设置的宽高-->
        <div class="setting-item content-color" :class="!showColorWidth ? 'setting-item-hide' : ''">
            <el-color-picker v-model="elementStore.getContentConfig.gridColor" show-alpha :predefine="predefineColors" />
        </div>
        <div class="setting-item content-width" :class="!showColorWidth ? 'setting-item-hide' : ''">
            <el-input-number v-model="elementStore.getContentConfig.gridLineWidth" :min="10" :max="50" />
        </div>
    </div>
</template>

<script setup>
import { useElementStore } from '@/stores/elementStore'

const elementStore = useElementStore();

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const showColorWidth = computed(() => {
    return elementStore.getContentConfig.showGrid;
})
const inputSlider = (value) => {
    console.log(value)
}
</script>

<style lang="scss">
.content-setting {
    height: 35px;
    width: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid #f1e8e8;
    background: #f3f1f1ad;
    .setting-item {
        height: 100%;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        overflow: hidden;
        &.setting-item-hide{
            height: 0%;
        }
    }
    .content-scale {
        width: 120px;
        padding: 0 15px;
    }
    .content-eye {
        img {
            width:25px;
            height: 25px;
        }
    }
    .content-width {
        padding-left: 10px;
        width: 130px;
    }
}
</style>