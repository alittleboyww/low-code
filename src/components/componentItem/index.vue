<template>
    <template v-for="(item, index) in componentList" :key="index">
        <component :is="item.type" :class="item.className" :data-index="getCurrentIndex(index)">
            {{ item.name }}
            <template v-if="item.children && isMaxDeep(getCurrentIndex(index))">
                <ComponentItem :componentList="item.children" :parentIndex="getCurrentIndex(index)"/>
            </template>
        </component>
    </template>
</template>

<script setup lang="ts">
import type { ComponentType } from '@/types/common-types';
import { MAX_DEEP } from './index';
import ComponentItem from '@/components/componentItem/index.vue'

const prop = defineProps({
    componentList: {
        type: Array,
        default: () => [] as ComponentType[]
    },
    parentIndex: {
        type: String,
        default: ''
    }
})
const componentList = prop.componentList as ComponentType[];
const isMaxDeep = (index: string) => {
    return index.split('-').length <= MAX_DEEP;
};
const getCurrentIndex = (index: number) => {
    return prop.parentIndex ? prop.parentIndex + "-" + index : index.toString();
}
</script>

<style lang="scss" scoped>
.component-item {
  min-width: 50px;
  min-height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.span-item {
  color: red;
}
</style>