<template>
    <el-button loading>
        <template v-for="(slotName) in slotsNameList" v-slot:[slotName]="slotProps">
             <component :is="getComponent(slotName)" v-bind="slotProps"></component>
        </template>
    </el-button>
</template>

<script setup>
import { ElButton } from 'element-plus';
import { each, find } from 'lodash';
// 组件传入的配置
const props = defineProps(['config', 'subConfig', 'slotsConfig']);
// 外部传入的属性，即不在props中的属性
const attr = useAttrs();
// 传入组件的插槽
const slotsOut = useSlots();

const computedSlots = computed(() => {
    return props.slotsConfig;
});

const slotsNameList = computed(() => {
    let slotsList = [];
    each(computedSlots.value, (item) => {
        slotsList.push(item.name);
    })
    return slotsList;
});

const getComponent = (slotName) => {
    console.log('getComponent', slotName);
    return find(computedSlots.value, (item) => item.name === slotName).component;
}

// console.log(props, attr, slotsOut);

// const slots = computed(() => {
//     console.log(Object.keys(slotsOut));
//     return Object.keys(slotsOut);
// })
// 属性值
// type: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
// icon
// plain
// round
// circle
// disabled
// text
</script>

<style lang="scss">
</style>