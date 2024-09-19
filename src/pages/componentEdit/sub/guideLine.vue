<template>
    <!-- 参考线 X -->
    <div class="guide-line-x" :style="{
        ...userGudieLineStyle('x')
    }">

    </div>
    <!-- 参考线y -->
    <div class="guide-line-y" :style="{
        ...userGudieLineStyle('y')
    }">
    </div>
</template>

<script setup>
// 1. 什么时候展示参考线(x, y) x对应left y对应top
// 选择的组件移动过程中，和其他组件对比， 当左侧、右侧、上方、下方、中心点位置相等时，展示对应的参考线位置
// 2. 不展示的时候，怎么清除 默认设置 left: -9999px; top: -9999px;
import useStyle from '@/hooks/style.hook';
// import { useElementStore } from '@/stores/elementStore';

const { userGudieLineStyle } = useStyle();

// const elementStore = useElementStore();

// setTimeout(() => {
//     elementStore.setGuideLineConfig(10, 10)
// }, 5000);

</script>

<style lang="scss">
.guide-line-x, .guide-line-y {
    z-index: 2;
    position: absolute;
}
.guide-line-x {
    top: 0;
    // left 由动态数据控制
    height: 100%;
    border-left: 1px dashed var(--color-guide-line)
}

.guide-line-y {
    left: 0;
    // top 由动态数据控制
    width: 100%;
    border-bottom: 1px dashed var(--color-guide-line);
}

</style>