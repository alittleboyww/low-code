<template>
    <div>
      <div class="ball" :style="{
        'animation-delay': -value + 's'
      }">
      </div>
      <div class="slider">
        <el-slider v-model="value" :min="0" :max="1" :step="0.01"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const value = ref(0)
  watch(value, (val) => {
    console.log(val)
  })
  </script>
  
  <style lang="scss">
  .ball {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    animation: move 1s linear forwards paused;
  }
  .slider {
    width: 100px;
  }
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(500px);
    }
  }
  </style>