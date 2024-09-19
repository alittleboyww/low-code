<template>
    <div ref="el">
        <div>
            <el-button ref="btn" @click="plusAge">+1</el-button>
            {{ age }}
            <el-button ref="btn" @click="plusModelValue">plusModelValue</el-button>
            {{ modelValue }}
            <slot v-bind="attr"></slot>
            {{ store.inputContent }}/
            {{ store1.inputContent }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {useInputStore, useInputRefSotre}  from '@/stores/counter'
const props = defineProps(['age', 'name', 'modelValue']);
const emit = defineEmits(['update:age', 'update:name', 'update:modelValue']);
const store = useInputStore();
const store1 = useInputRefSotre();
import useInput from './index'
const { el, btn, age, plusAge, modelValue, attr, slots, plusModelValue} = useInput(props, emit);
</script>

<style lang="scss" scoped>

</style>