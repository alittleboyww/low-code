<template>
    <div ref="contextMenu" class="context-menu">
        <slot></slot>
        <Teleport to="body">
            <Transition 
                @beforeEnter="handlerBeforeEnter"
                @enter="handlerEnter"
                @after-enter="handlerAfterEnter">
                
                <div class="menu-list" :style="{ left: x + 'px', top: y + 'px' }" v-if="isShow">
                    <div class="menu-item" 
                        v-for="item in menuListComputed" 
                        :key="item.label"
                        @click="clickHandler(item.value)">
                        {{ item.value }}
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import useContextMenu from './contextMenu';
// 获取对象本身引用
const contextMenu = ref(null)

const innerProp = defineProps({
    menuList: {
        type: Array<{
            label: string,
            value: string,
        }>,
        default: () => []
    }
})

// 需要有一个东西控制 menu-list 位置、显示与隐藏
const { x, y, isShow } = useContextMenu(contextMenu)

const menuListComputed = computed(() => {
    return innerProp.menuList;
})

const innerEmits = defineEmits(['select'])

const clickHandler = (value: string) => {
    innerEmits("select", value)
}

const handlerBeforeEnter = (el: any) => {
    el.style.height = '0px';
}

const handlerEnter = (el: any) => {
    el.style.height = 'auto';
    const height = el.clientHeight;
    el.style.height = '0px';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            el.style.transition = 'height 0.3s';
            el.style.height = `${height}px`;
        })
    })
}

const handlerAfterEnter = (el: any) => {
    el.style.transition = 'none';
}

</script>

<style lang="scss">
.menu-list {
    position: fixed;
    width: 100px;
    height: auto;
    background-color: rgb(230, 239, 247);
    overflow: hidden;
    border-radius: 4px;
}
.menu-item {
    padding: 8px;
    border-bottom: 1px solid #ccc;
}
.menu-item:last-child {
    border: none;
}
</style>