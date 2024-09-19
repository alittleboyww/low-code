<template>
    <div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button @click="handleClick">点击</el-button>
      <component :is="ElInput" v-model='input'></component>
      <MyInput v-model="text" :age="age" @update:age="updateAge" @update:moduleValue="updateModuleValue" other="wuli" v-bind="{ name: 'bind-name', otherProp: 'other-prop'}">
        <template #default="{ other }">
          <span>{{ other }}</span>
        </template>
      </MyInput>
      <MyInputGroup>
      </MyInputGroup>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ElInput } from 'element-plus'
  import { reactive, ref, provide } from 'vue'
  import { symbols } from '@/stores/storesSymbol'
  import { resolveComponent, defineComponent } from 'vue';
  import MyInput from '@/components/myInput/index.vue'
  import MyInputGroup from '@/components/myInput/inputGroup.vue'
  const input = ref('')
  const handleClick = () => {
    console.log(input.value)
  }
  
  const age = ref(12)
  const text = ref('')
  text.value = '123'
  
  const updateAge = (val: number) => {
    console.log(val)
    age.value = val
  }
  const updateModuleValue = (val: string) => {
    console.log(val)
    text.value = val
  }
  provide(symbols.TEXT, text)
  // const ElInput = resolveComponent('ElInput')
  // defineComponent({
  //   components: {
  //     "ElInput": ElInput
  //   }
  // })
  // const res = resolveComponent('ElInput')
  </script>
  
  <style lang="less">
  
  </style>