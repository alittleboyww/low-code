<template>
    <div class="custom-loading">
        <svg class="circular" viewBox="-10, -10, 50, 50">
            <path
                class="path"
                d="
                M 30 15
                L 28 17
                M 25.61 25.61
                A 15 15, 0, 0, 1, 15 30
                A 15 15, 0, 1, 1, 27.99 7.5
                L 15 15
            "
                style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
            />
        </svg>
    </div>
</template>

<script setup>
// 组件传入的配置
const props = defineProps({});
// 外部传入的属性，即不在props中的属性
const attr = useAttrs();
// 传入组件的插槽
const slotsOut = useSlots();

console.log(attr, props, slotsOut);
</script>

<style lang="scss">
.el-button .custom-loading .circular {
    margin-right: 6px;
    width: 18px;
    height: 18px;
    animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: var(--el-button-text-color);
    stroke-linecap: round;
}
</style>