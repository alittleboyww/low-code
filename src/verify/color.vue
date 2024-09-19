<template>
    <!-- <DefaultApp></DefaultApp> -->
    <div class="container">
      <div class="color-box" v-for="color in colorList" :key="color" :style="{ backgroundColor: color }">
      </div>
    </div>
    <div>
      <el-button @click="loadMord">loadMord</el-button>
    </div>
  </template>
  
  <script setup>
  // import DefaultApp from './DefaultApp.vue';
  const colorList = ref([])
  // 每次加载256个颜色
  // 看处于第几行，则加载第几行
  const colorCount = 65535;
  
  // 没行展示16个颜色，在视口中则进行加载
  const loadColor = (r, g) => {
    let colors = [];
    let count = 0;
    for(let i = r; i < 256; i++) {
      for(let j = g; j < 256; j++) {
        for(let k = 0; k < 256; k++) {
          if (count < colorCount) {
            colors.push(`rgb(${i}, ${j}, ${k})`);
            count++;
          } else {
            break;
          }
        }
      }
    }
    colorList.value = colors;
  }
  let r = 0;
  let g = 0;
  loadColor(r, g);
  const loadMord = function() {
    r++;
    loadColor(r, g)
  }
  </script>
  
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .color-box {
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }
  </style>