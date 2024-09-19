<template>
    <div class="drag-app">
      <!-- 分为三块 -->
        <!-- 1. 组件列表 -->
  
        <!-- 2. 编辑区域 -->
  
        <!-- 3. 属性面板 -->
         
      <el-button @click="getComponent">点击加载</el-button>
      <div v-if="showComponent">
        <component :is="'comOne'"></component>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  import { fetchViewComponent } from '@/packages/globEagerPackages/index';
  
  const showComponent = ref(false);
  
  const getComponent = () => {
    console.log("getComponent");
    // comOne
    if (!window['$vue'].component("comOne")) {
      console.log("comOne");
      window['$vue'].component("comOne", fetchViewComponent("comOne"));
    }
    // comTwo
    if (!window['$vue'].component("comTwo")) {
      console.log("comTwo");
      window['$vue'].component("comTwo", fetchViewComponent("comTwo"));
    }
    showComponent.value = true;
  }
  
  onMounted(() => {
    console.log("onMounted");
  })
  
  </script>
  
  <style lang="scss">
  .drag-app {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  </style>