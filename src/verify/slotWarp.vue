<template>
    <slotTemplate>
        <template v-for="slotName in slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps"></slot>
        </template>
    </slotTemplate>
</template>

<script setup>
// 这个是我的组件，我包含了原始组件，并在原始组件中添加了新的内容
import slotTemplate from '@/verify/slotTemplate.vue';

// const slots = ref([])

// 我是知道 slotTemplate 有哪些temlate有哪些slot的，但是不知道具体有哪些slot，所以需要动态的获取slot
const slotsOut = useSlots();

// for (const slotName in slotsOut) {
//     console.log(slotName);
//     slots.value.push(slotName)
// }
const slots = computed(() => {
    console.log(Object.keys(slotsOut));
    return Object.keys(slotsOut);
})

</script>

<style lang="scss">

</style>