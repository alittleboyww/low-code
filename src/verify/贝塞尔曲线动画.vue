<template>
    <div>
      <el-input v-model="count"></el-input>
    </div>
    <div class="container">
      <div ref="ball" class="ball-container">
        <div class="ball"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  const ball = ref(null);
  const count = ref(100)
  let position = [];
  // 判断position大小，最多保存100个数据，并且先来的数据先出，维持在100个数据
  const cons = () => {
    let { x, y } = ball.value.getBoundingClientRect();
    position.push({ x, y });
    if (position.length > count.value) {
      position = position.slice(Math.max(0, position.length - count.value));
    }
    let midBalls = document.getElementsByClassName('mid-ball');
    while (midBalls.length > 0) {
      midBalls[0].remove();
    }
    console.log(position.length)
    let midDivs = document.createDocumentFragment();
    // 根据position生成div，并设置到对应的位置
    position.forEach((item, index) => {
      let div = document.createElement('div');
      div.className = 'mid-ball';
      div.style.position = 'fixed';
      div.style.width = '10px';
      div.style.height = '10px';
      div.style.borderRadius = '50%';
      div.style.backgroundColor = 'red';
      div.style.transition = 'all 0.5s';
      div.style.left = (item.x + 5) + 'px';
      div.style.top = (item.y + 5) + 'px';
      div.style.opacity = 1 - (count.value - index) / count.value;
      midDivs.appendChild(div);
    });
    document.body.appendChild(midDivs);
    requestAnimationFrame(() => {
      cons();
    });
  };
  onMounted(() => {
    requestAnimationFrame(() => {
      cons();
    })
  })
  </script>
  
  <style lang="scss">
  @property --x {
    syntax: "<length>";
    inherits: true;
    initial-value: 0px;
  }
  @property --y {
    syntax: "<length>";
    inherits: true;
    initial-value: 0px;
  }
  
  .container {
    width: 100%;
    height: 500px;
    background-color: aqua;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .ball-container{
      width: 20px;
      height: 20px;
      border: 1px solid black;
      border-radius: 50%;
  
      // 倒8运动 start
      // transform: translate(var(--x), var(--y));
      // animation: 8s moveX, 4s moveY;
      // animation-timing-function: cubic-bezier(0.5, 800, 0.5, -800);
      // animation-iteration-count: infinite;
      // 倒8运动 end
  
      // 弹跳运动
      transform: translate(var(--x), var(--y));
      // 3s bounceX  linear infinite,
      animation: 3s bounceX  linear infinite,
      1s bounceY cubic-bezier(0, -200, 1, -200) infinite;
    }
  }
  // 倒8运动 start
  // @keyframes moveX {
  //   to {
  //     --x: 1px
  //   }
  // }
  // @keyframes moveY {
  //   // 50% {
  //   //   --y: 0.1px
  //   // }
  //   // 75% {
  //   //   --y: -0.1px
  //   // }
  //   to {
  //     --y: 1px
  //   }
  // }
  // 倒8运动 end
  
  // 弹跳运动 start
  @keyframes bounceX {
    to {
      --x: 200px
    }
  }
  @keyframes bounceY {
    to {
      --y: 1px
    }
  }
  // 弹跳运动 end
  </style>