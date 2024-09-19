<template>
    <div>
        <el-input v-model="inputContent" placeholder="请输入内容">
        </el-input>
        <inputSub></inputSub>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useInputRefSotre, useInputStore }  from '@/stores/counter'
import { storeToRefs } from 'pinia';
import inputSub from "./inputSub.vue"
const inputContent = ref<string>('')
const store = useInputStore();
const store1 = useInputRefSotre();
watchEffect(() => {
    store.inputContent = inputContent.value;
    store1.inputContent = inputContent.value;
    console.log(inputContent.value)
})
</script>

<style lang="sass" scoped>

</style>