<template>
    <slotWarp>
      <template v-for="slotItem in slotsConfig" :key="slotItem.name" v-slot:[slotItem.name]="slotProps">
        <component :is="slotItem.component" :slotProps="slotProps" v-if="slotItem.isShow"></component>
      </template>
    </slotWarp>
</template>
  
  <script setup>
  import slotWarp from '@/verify/slotWarp.vue';
  import slotSub from '@/verify/slotSub.vue';
  
  const slotsConfig = ref([{
    name: 'default',
    // 默认插槽对应的组件
    component: markRaw(slotSub),
    isShow: true
  }, {
    name: 'test2',
    component: markRaw(slotSub),
    isShow: true
  }, {
    name: 'test',
    component: markRaw(slotSub),
    isShow: false
  }])
  </script>
  
  <style>
  </style>