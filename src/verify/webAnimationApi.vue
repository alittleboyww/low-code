<template>
    <div class="container">
      <div v-slide-in v-for="i in 10" :key="i" class="box" :class="`box-${i}`">
      </div>
    </div>
  </template>
  
  <script setup>
  import useSlideIn from '@/directive/slideIn'
  
  const vSlideIn = useSlideIn()
  
  </script>
  
  <style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .box {
    width: 80%;
    height: 300px;
    margin: 10px;
    border-radius: 10px;
  }
  
  .box-1 {
    background-color: #ff0000;
  }
  .box-2 {
    background-color: #00ff00;
  }
  .box-3 {
    background-color: #0000ff;
  }
  .box-4 {
    background-color: #ffff00;
  }
  .box-5 {
    background-color: #00ffff;
  }
  .box-6 {
    background-color: #ff00ff;
  }
  .box-7 {
    background-color: #800000;
  }
  .box-8 {
    background-color: #008000;
  }
  .box-9 {
    background-color: #000080;
  }
  .box-10 {
    background-color: #808000;
  }
  
  </style>