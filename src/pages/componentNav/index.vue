<template>
    <div class="left-content">
        <div class="component-list">
            <div v-for="item in componentList" 
                :key="item.comName"
                class="component-item"
                draggable="true"
                @dragstart="dragStartHandle($event, item)"
                @dragend="dragendHandle"
                @dblclick="dblclickHandle(item)"
            >
            <div class="component-body">
                <img v-if="item.icon" :src="item.icon"/>
                {{ item.name }}
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { componentList } from '@/packages/index';
import useDrag from '@/hooks/drag.hook';

const { dragStartHandle, dragendHandle, dblclickHandle } = useDrag();
</script>

<style lang="scss">
.left-content {
    .component-list{
        padding-top: 10px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-row-gap: 10px;
        
        // grid-template-rows: 100px 100px 100px;
        .component-item {
            width: 96%;
            margin: auto;
            .component-body {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px 10px;
                background: var(--color-com-bg);
                font-size: 12px;
                cursor: move;
                // border: 1px dashed #f6f7ff;
                border-radius: 3px;
                img {
                    width: 16px;
                    height: 16px;
                }
            }
            .component-body:hover {
                border: 1px dashed var(--color-guide-line);
                color: var(--color-guide-line);
            }
        }
    }
}

</style>