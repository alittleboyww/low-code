<template>
    <el-button type="primary" @click="toggle">Primary</el-button>
    <el-checkbox v-model="config.autoInsertSpace" label="autoInsertSpace" />
    <el-config-provider :locale="locale" 
                      :button="config" 
                      :message="config" 
                      :value-on-clear="null" 
                      :empty-values="[undefined, null]"
                      :size="'large'"
                      zIndex="1"
                      namespace="el">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
      <el-button>中文</el-button>
      <el-button @click="open">open</el-button>
  
      <el-select
        v-model="value1"  
        @change="handlerChange"
        placeholder="select"
        style="width: 200px;"
        clearable
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="value2"
        clearable
        style="width: 200px;"
        @change="handlerChange"
        placeholder="select"
        :options="options"
        :value-on-clear="() => undefined"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-config-provider>
  </template>
  
  
  <script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'
  import { ElMessage } from 'element-plus'
  
  const language = ref('zh-cn')
  
  const locale = computed(() => {
    if (language.value === 'zh-cn') {
      return zhCn
    } else {
      return en
    }
  })
  
  const toggle = () => {
    language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  }
  // 对按钮进行配置
  const config = reactive({
    autoInsertSpace: true,
    max: 3
  })
  // 对消息进行配置
  const open = () => {
    ElMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
  
  const value1 = ref('')
  const value2 = ref('')
  
  const options = [
    {
      value:'',
      label: 'All'
    },
    {
      value: 'Option11',
      label: 'Option1'
    },
    {
      value: 'Option22',
      label: 'Option2'
    },
    {
      value: 'Option33',
      label: 'Option3'
    },
    {
      value: 'Option44',
      label: 'Option4'
    },
  ]
  
  const handlerChange = (value: any) => {
    if ([undefined, null].includes(value)) {
      ElMessage(`value is: ${value}`)
    }
  }
  </script>
  
  <style>
  </style>