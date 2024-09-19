<template>
    <div class="container">
      <ContextMenu
        class="menu1"
        :menu-list = "[{
          label: '菜单1',
          value: 'menu1'
        },
        {
          label: '菜单2',
          value: 'menu2'
        }]"
        @select="(value: string) => choose=value">
        <div>{{ choose }}</div>
      </ContextMenu>
      <ContextMenu
        class="menu2"
        :menu-list = "[{
          label: '菜单12',
          value: 'menu12'
        },
        {
          label: '菜单22',
          value: 'menu22'
        }]"
        @select="(value: string) => choose1=value">
        <div>{{ choose1 }}</div>
        <ContextMenu
          class="menu3"
          :menu-list = "[{
            label: '菜单13',
            value: 'menu13'
          },
          {
            label: '菜单23',
            value: 'menu23'
          }]"
          @select="(value: string) => choose2=value">
          <div>{{ choose2 }}</div>
        </ContextMenu>
      </ContextMenu>
    </div>
  </template>
  
  <script setup lang="ts">
  import ContextMenu from './verify/contextMenu.vue';
  
  const choose = ref('');
  const choose1 = ref('');
  const choose2 = ref('');
  
  </script>
  
  <style lang="scss">
  .container {
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu1 {
      width: 500px;
      height: 300px;
      background-color: bisque;
    }
    .menu2 {
      width: 500px;
      height: 300px;
      background-color: blueviolet;
    }
    .menu3 {
      width: 200px;
      height: 200px;
      background-color:burlywood;
    }
  }
  </style>