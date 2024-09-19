<template>
    <contentSetting></contentSetting>
    <el-scrollbar height="100%" width="100%">
        <div class="component-layer">
            <div class="component-edit" 
                :class="{'component-bg-show': elementStore.contentConfig.showGrid }"
                :style="{
                    ...useContentBgStyle(),
                    ...useContentStyle()
                }">
                <guideLine></guideLine>
                <div 
                    class="edit-content"
                    @mousedown="mousedownHandleUnStop"
                    @drop="dragHandle"
                    @dragover="dragoverHandle"
                    @dragenter="dragoverHandle">
                    <div v-for="(item, index) in elementStore.getComponentList" 
                        class="edit-shape"
                        :class="{
                            'edit-shape-hover': item.id === elementStore.getHoverTargetId,
                            'edit-shape-select': item.id === elementStore.getTargetId
                        }"
                        :key="item.id"
                        :style="{
                            ...useSizeStyle(item),
                            ...useBorderRadiusStyle(item),
                            ...userPositionStyle(item)
                        }"
                        @click="mouseClickHandle($event, item)"
                        @mousedown="mousedownHandle($event, item)"
                        @mouseenter="mouseenterHandle($event, item)"
                        @mouseleave="mouseleaveHandle($event, item)"
                        >
                        <component 
                            :class="item.subConfig.baseClassName"
                            :is="item.elementConfig.comName" 
                            :style="{
                                ...useSizeStyle(item)
                            }"
                            :contenteditable="useEditableStyle(item)"
                            :config="item.elementConfig" 
                            :subConfig="item.subConfig" 
                            :slotsConfig="item.slotsConfig"
                            :id="item.id" 
                            :index="index"
                            :defaultText="item.subConfig.defaultText">
                            {{ item.subConfig.defaultText ? item.subConfig.defaultText : ''}}
                        </component>
                        <!-- 锚点 开始 -->
                        <div 
                            class="cursor-point"
                            :class="point"
                            v-for="(point, index) in (elementStore.getTargetId == item.id) ? pointList : []"
                            :style="{
                                ...usePointPositionStyle(item, point, index, cursorResize),
                            }"
                            @mousedown="useMousePointHandle($event, point, item)"
                            ></div>
                    </div>
                </div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup>
import useMouse from '@/hooks/mouse.hook'; 
import useDrag from '@/hooks/drag.hook';
import { useElementStore } from '@/stores/elementStore'
import useStyle from '@/hooks/style.hook';
import contentSetting from './sub/contentSetting.vue';
import guideLine from './sub/guideLine.vue';
import { useWatchSubConfig } from '@/hooks/watch.hook';

const { mouseClickHandle, mousedownHandle, mouseenterHandle, mouseleaveHandle, mousedownHandleUnStop, useMousePointHandle } = useMouse();
const { dragHandle, dragoverHandle} = useDrag();
const { useSizeStyle, useEditableStyle, useBorderRadiusStyle, 
    userPositionStyle, useContentBgStyle, usePointPositionStyle,
    useContentStyle } = useStyle();
const elementStore = useElementStore();

// 锚点
const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb'];

// 光标朝向
const cursorResize = ['n', 'e', 's', 'w', 'nw', 'ne', 'sw', 'se'];

// 对组件数据进行监听
useWatchSubConfig();

</script>

<style lang="scss">
.component-layer {
    width: 100%;
    height: 100%;
    .component-edit {
        width: 100%;
        height: 100%;
        
        position: relative;

        background-position: left top;

        &::before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--vt-c-white);
            opacity: 1;
            transition: all 0.3s;
        }

        &.component-bg-show::before {
            opacity: 0;
        }
        .edit-content {
            width: 100%;
            height: 100%;

            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-content: flex-start;

            position: relative;

            overflow: hidden;
            .edit-shape {
                background-color: var(--com-bg-color);
                // border-radius: 8px;
                // border: 1px dashed #787be8;
                position: absolute;
                box-sizing: content-box;
                cursor: move;

                .cursor-point {
                    z-index: 1;
                    position: absolute;
                    width: 7px;
                    height: 7px;
                    background-color: var(--guide-white-line-color);
                    border-radius: 50%;
                    border-radius: 5px;
                    // background-color: #fff;
                    transform: translate(-40%, -30%);
                    &.t {
                        width: 15px;
                        transform: translate(-50%, -50%);
                    }
                    &.b {
                        width: 15px;
                        transform: translate(-50%, -30%);
                    }
                    &.l,
                    &.r {
                        height: 15px;
                    }
                    &.r {
                        transform: translate(-30%, -40%);
                    }
                    &.l {
                        transform: translate(-50%, -40%);
                    }
                    &.rt,
                    &.rb {
                        transform: translate(-30%, -30%);
                    }
                }
            }
            .edit-shape-hover {
                border: 1px dashed var(--guide-white-line-color);
            }
            .edit-shape-select {
                border: 1px solid var(--guide-white-line-color);
                z-index: 1;
            }
        }
    }
}
.component-layer:hover {
    opacity: 1;
}
</style>