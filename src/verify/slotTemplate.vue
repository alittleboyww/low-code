<template>
    <div>
        slotTemplate
        <slot :data="data"></slot>
        slotTemplate1
        <div class="test">
            <slot name="test" :test="test"></slot>
        </div>
        
        slotTemplate2
        <div class="test2">
            <slot name="test2" :test2="test2"></slot>
        </div>
    </div>
</template>

<script setup>
// 这个相当于原始组件  我无法更改的
const data = ref({
    msg: 'hello'
})
const test = ref('test')
const test2 = ref('test2')
</script>

<style lang="scss">
</style>