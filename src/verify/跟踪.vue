<template>
    <div class="container">
      <div class="warp warp1">
        <div class="card1"></div>
      </div>
      <div class="warp warp2">
        <div class="card2"></div>
      </div>
      <div class="warp warp3">
        <div class="card3"></div>
      </div>
      <div class="warp warp4">
        <div class="card4"></div>
      </div>
      <div class="warp warp5">
        <div class="card5"></div>
      </div>
      <div class="warp warp6">
        <div class="card6"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  // 节流函数
  const throttle = function (callback, delay) {
    let timer = null
    let inner = function () {
      if (timer) {
        return;
      }
      console.log(timer)
      timer = setTimeout(() => {
        callback()
        clearTimeout(timer)
        timer = null
      }, delay)
    }
    inner();
  }
  
  onMounted(() => {
    document.getElementsByClassName('container')[0].addEventListener('mousemove', (e) => {
      // throttle(() => {
        
      // }, 1000)
  
      const x = e.clientX
      const y = e.clientY
      console.log(x, y);
      let warps = document.getElementsByClassName('warp');
      for (let i = 0; i < warps.length; i++) {
        let warp = warps[i];
        let { top, left } = warp.getBoundingClientRect()
        warp.style.setProperty('--top', `${y - top}px`)
        warp.style.setProperty('--left', `${x - left}px`)
      }
    }, true)
  })
  </script>
  
  <style lang="scss">
  #app {
    height: 100%;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: rgb(32, 29, 29);
  }
  
  .warp1, .warp2, .warp3, .warp4, .warp5, .warp6 {
    // flex: 1;
    width: 600px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin: 10px; 
    background-color: rgb(65, 60, 60);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .warp1::before, .warp2::before, .warp3::before, .warp4::before, .warp5::before, .warp6::before {
    content: "";
    position: absolute;
    border-radius: inherit;
    top: var(--top, 1000px);
    left: var(--left, 1000px);
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    transform: translate(-300px, -100px);
    z-index: 2;
  }
  .card1, .card2, .card3, .card4, .card5, .card6 {
    position: absolute;
    // left right top bottom
    inset: 2px;
    background-color: rgb(117, 117, 117);
    border-radius: inherit;
    z-index: 3;
  }
  
  
  
  </style>