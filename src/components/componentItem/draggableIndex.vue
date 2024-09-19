<template>
    <div class="draggable-warp">
        <draggable
            :list="componentList"
            group="componentGroup"
            item-key="name"
            ghost-class="ghost"
            chosen-class="chosenClass"
            animation="300"
            @start="onStart"
            @end="onEnd"
            >
            <template #item="{ element: item, index }">
                <component :is="item.type" :class="item.className" :data-index="getCurrentIndex(index)">
                    {{ item.name }}
                    <template v-if="isMaxDeep(getCurrentIndex(index))">
                        <DraggableIndex :componentList="item.children" :parentIndex="getCurrentIndex(index)"/>
                    </template>
                </component>
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import type { ComponentType } from '@/types/common-types';
import { MAX_DEEP } from './index';
import DraggableIndex from '@/components/componentItem/draggableIndex.vue'
import { useDraggableStore } from '@/stores/draggable';

const draggableStore = useDraggableStore();

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
const onStart = (e: any) => {
    console.log('onStart', e)
    console.log('componentList===================================', componentList)
    // 引入组件间数据共享 pinia
    draggableStore.setDraggable(true)
}
const onEnd = (e: any) => {
    console.log('onEnd', e)
    draggableStore.setDraggable(false)
}
</script>

<style lang="scss" scoped>
.draggable-warp {
    width: 100%;
    height: 100%;
}
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