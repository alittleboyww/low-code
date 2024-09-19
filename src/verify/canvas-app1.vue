<template>
    <div class="container">
      <canvas :width="canvasWidth + 'px'" :height="canvasHeight + 'px'"></canvas>
      <div class="content">
          THIS IS A CANVAS TEST
      </div>
    </div>
  </template>
  
  <script setup>
  const canvasWidth = ref(0);
  const canvasHeight = ref(0);
  let ctx = null;
  
  // 1. 画出 10个点
  class Point {
      constructor() {
          this.r = Math.floor(Math.random() * 5);
          this.x = Math.floor(Math.random() * (canvasWidth.value - this.r));
          this.y = Math.floor(Math.random() * (canvasHeight.value - this.r));
      
          this.xSpeed = Math.floor(Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
          this.ySpeed = Math.floor(Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
  
          this.lastMoveTime = null;
      }
      draw() {
          if (this.lastMoveTime !== null) {
              let t =  (Date.now() - this.lastMoveTime) / 1000;
              if (t > 0.1) {
                  t = 0.1
              }
              // 浏览器失焦后会导致t变得非常大，导致小球瞬间移动到屏幕外
              let prevX = this.x;
              let prevY = this.y;
  
              this.x += this.xSpeed * t;
              this.y += this.ySpeed * t;
              if ((this.x < this.r && prevX > this.r) || (this.x > (canvasWidth.value - this.r) && prevX < (canvasWidth.value - this.r))) {
                  this.xSpeed = -this.xSpeed;
              }
              if ((this.y < this.r && prevY > this.r)  || (this.y > (canvasHeight.value - this.r) && prevY < (canvasHeight.value - this.r))) {
                  // 如果 点一直在屏幕外，则重新生成点的位置
                  this.ySpeed = -this.ySpeed;
              }
              
          }
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
          ctx.fillStyle = "#fff";
          ctx.fill();
  
          this.lastMoveTime = Date.now();
      }
  }
  
  // 2. 将各个点链接成线，两个点之间大于某个像素 则连线，透明度根据线的长度进行设置
  
  class Graph {
      constructor(points) {
          this.points = points;
          this.distance = 100;
      }
      draw() {
          ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
          requestAnimationFrame(() => this.draw());
          this.points.forEach((point) => {
              point.draw();
          });
          for (let i = 0; i < this.points.length; i++) {
              for (let j = i + 1; j < this.points.length; j++) {
                  let dx = this.points[i].x - this.points[j].x;
                  let dy = this.points[i].y - this.points[j].y;
                  let distance = Math.sqrt(dx * dx + dy * dy);
                  if (distance < 200) {
                      ctx.beginPath();
                      ctx.moveTo(this.points[i].x, this.points[i].y);
                      ctx.lineTo(this.points[j].x, this.points[j].y);
                      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 200})`;
                      ctx.stroke();
                  }
              }
          }
      }
  }
  
  // 3. 点移动，会带动线移动，从而实现变更
  let pointCount = 100;
  let points = new Array(pointCount);
  onMounted(() => {
      canvasWidth.value = document.documentElement.clientWidth;
      canvasHeight.value = document.documentElement.clientHeight;
      
      nextTick().then(() => {
          const canvas = document.querySelector('canvas');
          ctx = canvas.getContext('2d');
          
          for (let i = 0; i < points.length; i++) {
              points[i] = new Point();
          }
          
          const graph = new Graph(points);
          requestAnimationFrame(() => graph.draw());
      })
  });
  
  
  </script>
  
  <style lang="scss">
  html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
  }
  #app {
      width: 100%;
      height: 100%;
  }
  .container {
      width: 100%;
      height: 100%;
      background-color: black;
      position: relative;
  }
  .content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      color: white;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
  
      letter-spacing: 10px;
      text-shadow: 1px 1px 0px gainsboro, 1px -1px 0px gainsboro, -1px 1px 0px gainsboro, -1px -1px 0px gainsboro, 1px 0px 0px gainsboro, -1px 0px 0px gainsboro, 0px 1px 0px gainsboro, 0px -1px 0px gainsboro;
  }
  canvas {
      // background-color: red;
      display: block;;
  }
  </style>