<template>
    <!-- <sketchRule></sketchRule> -->
     <div>
      <el-slider v-model="perspectiveJs" :min="0" :max="5000" :step="1"/>
      <el-slider v-model="perspectiveOriginJsX" :min="0" :max="100" :step="1"/>
      <el-slider v-model="perspectiveOriginJsY" :min="0" :max="100" :step="1"/>
     </div>
     <div class="warp">
        <div class="container">
        <div class="cube" :style=" {
          perspective: perspectiveJs + 'px',
          perspectiveOrigin: `${perspectiveOriginJsX}% ${perspectiveOriginJsY}%`
        }">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face left">3</div>
          <div class="face right">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
     </div>
     
  </template>
  
  <script lang="ts" setup>
  // import sketchRule from './verify/sketchRule.vue';
  // // 标尺的厚度
  // const thick = 20
  const perspectiveJs = ref(800);
  const perspectiveOriginJsX = ref(50);
  const perspectiveOriginJsY = ref(50);
  </script>
  
  <style lang="scss">
  .warp {
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    width: 200px;
    height: 200px;
    display: flex;
    background-color: hsl(0, 100%, 50%);
    // 父元素加上这个属性，子元素才能有3d效果
    // transform-style: preserve-3d;
  }
  
  .cube {
    // 主要是这个 perspective 的大小即离平面的位置
    // perspective-origin 设置的位置是 根据当前元素的宽高来计算的
    // 比如left top 即消失的点为当前元素的左上角
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    backface-visibility: visible;
  }
  
  .face {
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #ccc;
    border: 1px solid #000;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    transition: transform 1s;
  }
  
  .face {
    transform: rotateY(0deg) translateZ(100px);
  }
  .front {
    transform: translateZ(100px);
    background: rgba(0, 0, 0, 0.3);
  }
  .back {
    background: rgba(0, 255, 0, 1);
    color: black;
    transform: rotateY(180deg) translateZ(100px);
  }
  .left {
    background-color: antiquewhite;
    transform: rotateY(-90deg) translateZ(100px);
    color:aqua;
  }
  .right {
    background-color: aqua;
    transform: rotateY(90deg) translateZ(100px);
    color:antiquewhite;
  }
  .bottom {
    background-color: aquamarine;
    transform: rotateX(90deg) translateZ(100px);
    color: black;
  }
  .top {
    background-color: black;
    transform: rotateX(-90deg) translateZ(100px);
    color: aquamarine;
  }
  </style>
  