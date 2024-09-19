<template>
  <div class="container">
    <canvas :width="canvasWidth + 'px'" :height="canvasHeight + 'px'"></canvas>
    <img :src="img" v-if="img"/>
  </div>
</template>

<script setup>
import imgData from "@/assets/base.jpg";
const canvasWidth = ref(0);
const canvasHeight = ref(0);
const img = ref(null);
onMounted(() => {
    canvasWidth.value = document.documentElement.clientWidth;
    canvasHeight.value = document.documentElement.clientHeight;
    nextTick().then(() => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const width = canvas.width;
        const height = canvas.height;
        console.log(width, height);
      
        // 生成12个圆
        // for(let i = 0; i < 4; i++) {
        //     for (let j = 0; j < 3; j++) {
        //         let x = 100 + i * 200;
        //         let y = 100 + j * 200;
        //         let r = Math.floor(Math.random() * 100);
                
        //         ctx.beginPath();
        //         // x y r startAngle endAngle anticlockwise(顺时针(false, 默认)，逆时针（true）)
        //         ctx.arc(x, y, r, 0, 2 * Math.PI, true);
        //         ctx.fillStyle = 'red';
        //         // 填充
        //         ctx.fill();
        //         // ctx.strokeStyle = 'red';
        //         // // 轮廓
        //         // ctx.stroke();
        //     }
        // }

        // start arcTo
        // let p0 = {x: 100, y: 100};
        // let p1 = {x: 100, y: 30};
        // let p2 = {x: 400, y: 100};
        // let r = 40;

        // ctx.beginPath();
        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 5;
        // ctx.moveTo(p0.x, p0.y);
        // ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
        // ctx.stroke();

        // 辅助线
        // ctx.beginPath();
        // ctx.moveTo(p0.x, p1.x);
        // ctx.lineTo(p1.x, p1.y);
        // ctx.lineTo(p2.x, p2.y);
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.arc(p0.x, p0.y, 5, 0, 2 * Math.PI, true);
        // ctx.fillStyle = 'black';
        // ctx.fill();

        // ctx.beginPath();
        // ctx.arc(p1.x, p1.y, 5, 0, 2 * Math.PI, true);
        // ctx.arc(p2.x, p2.y, 5, 0, 2 * Math.PI, true);
        // ctx.fillStyle = 'blue';
        // ctx.fill();

        // 二次贝塞尔曲线
        // ctx.beginPath();
        // ctx.moveTo(75, 25);
        // ctx.quadraticCurveTo(25, 25, 25, 62.5);
        // ctx.quadraticCurveTo(25, 100, 50, 100);
        // ctx.quadraticCurveTo(50, 120, 30, 125);
        // ctx.quadraticCurveTo(60, 120, 65, 100);
        // ctx.quadraticCurveTo(125, 100, 125, 62.5);
        // ctx.quadraticCurveTo(125, 25, 75, 25);
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.arc(25, 25, 5, 0, 2 * Math.PI, true);
        // ctx.arc(25, 100, 5, 0, 2 * Math.PI, true);
        // ctx.arc(50, 120, 5, 0, 2 * Math.PI, true);
        // ctx.arc(60, 120, 5, 0, 2 * Math.PI, true);
        // ctx.arc(125, 100, 5, 0, 2 * Math.PI, true);
        // ctx.arc(125, 25, 5, 0, 2 * Math.PI, true);
        // ctx.strokeStyle = 'black';
        // ctx.stroke();


        // ctx.beginPath();
        // ctx.arc(75, 25, 5, 0, 2 * Math.PI, true);
        // ctx.arc(25, 62.5, 5, 0, 2 * Math.PI, true);
        // ctx.arc(50, 100, 5, 0, 2 * Math.PI, true);
        // ctx.arc(30, 125, 5, 0, 2 * Math.PI, true);
        // ctx.arc(65, 100, 5, 0, 2 * Math.PI, true);
        // ctx.arc(125, 62.5, 5, 0, 2 * Math.PI, true);
        
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();


      //   let react = new Path2D();
      //   react.rect(10, 10, 100, 100);

      //   let circle = new Path2D();
      //   circle.moveTo(200, 200);
      //   circle.arc(75, 75, 50, 0,   Math.PI * 0.7, true);

      //   ctx.stroke(react);
      //   ctx.stroke(circle);

      // let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
      // ctx.fill(p);
      // let offset = 0;
      // const draw = () => {
      //     ctx.clearRect(180, 180, 400, 400);
      //     requestAnimationFrame(draw)
      //     ctx.beginPath();
      //     ctx.setLineDash([4, 4]);
      //     ctx.lineDashOffset = offset;
      //     offset += 2;
      //     if (offset > 16) {
      //         offset = 0;
      //     }
      //     ctx.strokeRect(200, 200, 300, 300);
      // }
      // requestAnimationFrame(draw);

      // let linearGradient = ctx.createLinearGradient(700, 10, 900, 10);

      // linearGradient.addColorStop(0, 'red');
      // // linearGradient.addColorStop(0.5, 'green');
      // linearGradient.addColorStop(1, 'blue');

      // ctx.fillStyle = linearGradient;
      // ctx.fillRect(700, 10, 200, 200);

      // let innerPosition = [1102, 112, 10];
      // let outerPosition = [1110, 110, 30];
      // let rect = [1000, 10, 300, 300];
      
      // ctx.beginPath();
      // ctx.arc(innerPosition[0], innerPosition[1], innerPosition[2], 0, 2 * Math.PI);
      // ctx.strokeStyle = 'red';
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.arc(outerPosition[0], outerPosition[1], outerPosition[2], 0, 2 * Math.PI);
      // ctx.strokeStyle = 'blue';
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.rect(rect[0], rect[1], rect[2], rect[3]);
      // ctx.strokeStyle = 'green';
      // ctx.stroke();

      // let radialGradient = ctx.createRadialGradient(innerPosition[0], innerPosition[1], innerPosition[2], 
      //                                                 outerPosition[0], outerPosition[1], outerPosition[2]);

      // radialGradient.addColorStop(0, '#fff');
      // radialGradient.addColorStop(0.9, 'gray');
      // radialGradient.addColorStop(1, "rgba(0,201,255,0.1)");
      // ctx.fillStyle = radialGradient;
      // ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);

      // const capture = (sourceCanvas, range) => {
      //     const midCanvas = document.createElement('canvas');
      //     midCanvas.width = range[2];
      //     midCanvas.height = range[3];
      //     const midCtx = midCanvas.getContext('2d');
      //     midCtx.drawImage(sourceCanvas, range[0], range[1], range[2], range[3], 0, 0, range[2], range[3]);
      //     return midCanvas.toDataURL();
      // }
      // img.value = capture(canvas, rect);

      // let image = new Image();
      // image.src = img.value;
      // image.onload = () => {
      //     //repeat，repeat-x，repeat-y 和 no-repeat。
      //     let pattern = ctx.createPattern(image, 'repeat');
      //     ctx.fillStyle = pattern;
      //     ctx.fillRect(1000, 350, rect[2] * 2, rect[3] * 2);
      // }

      // ctx.shadowOffsetX = 2;
      // ctx.shadowOffsetY = 2;
      // ctx.shadowBlur = 2;
      // ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      
      // ctx.font = "20px Times New Roman";
      // ctx.fillStyle = "red";
      // ctx.fillText("Hello World", 0, 600);


      // ctx.beginPath();
      // ctx.arc(30, 700, 30, 0, Math.PI * 2, true);
      // ctx.arc(30, 700, 15, 0, Math.PI * 2, true);
      // ctx.fill("nonzero");

      // ctx.translate(75, 75);
      // ctx.fillStyle = "black";
      // ctx.fillRect(-75, -75, 150, 150);

      // clip函数调用
      // ctx.beginPath();
      // ctx.arc(0, 0, 30, 0, Math.PI * 2);
      // ctx.clip();

      // const linearGradient = ctx.createLinearGradient(-75, 0, 75, 0);
      // linearGradient.addColorStop(0, "red");
      // linearGradient.addColorStop(1, "white");
      // ctx.fillStyle = linearGradient;
      // ctx.fillRect(-40, -40, 80, 80);

      // const drawStar = (ctx, r) => {
      //     // 接下来需要旋转画布 先保存一下状态
      //     ctx.save();
      //     ctx.fillStyle = 'red';
      //     ctx.fillRect(r, 0, 1, 1);
      //     ctx.beginPath();
      //     ctx.strokeStyle = 'white';
      //     ctx.moveTo(r, 0);
      //     for (var i = 0; i < 9; i++) {
      //         ctx.rotate(Math.PI / 5);
      //         if (i % 2 == 0) {
      //             ctx.lineTo((r / 0.525731) * 0.200811, 0);
      //         } else {
      //             ctx.lineTo(r, 0);
      //         }
      //     }
      //     ctx.closePath();
      //     ctx.stroke();
      //     ctx.restore();
      // }
      // for (let i = 0; i < 10; i++) {
      //     ctx.save();
      //     let r = Math.floor(Math.random() * 4) + 2
      //     ctx.translate(75 - Math.floor(Math.random() * (150 - r)), 75 - Math.floor(Math.random() * (150 - r)));
          
      //     ctx.fillStyle = "#fff";
      //     // 原点
      //     ctx.fillRect(0, 0, 1, 1);
      //     drawStar(ctx, r);
      //     ctx.restore()
      // }

      // // clip函数调用
      // ctx.beginPath();
      // ctx.arc(0, 0, 30, 0, Math.PI * 2);
      // ctx.clip();

      // const linearGradient2 = ctx.createRadialGradient(0, 0, 10, 0, 10, 40);
      // linearGradient2.addColorStop(0, "green");
      // linearGradient2.addColorStop(0.9, "blue");
      // linearGradient2.addColorStop(1, "rgba(255,255,255,0)");
      // ctx.fillStyle = linearGradient2;
      // ctx.fillRect(-40, -40, 80, 80);
      
      // let drawEarth = () => {
      //     // ctx.globalCompositeOperation = "destination-over";
      //     ctx.clearRect(0, 0, width, height);

      //     ctx.save();
      //     ctx.fillStyle = "black";
      //     ctx.fillRect(0, 0, width, height);
      //     ctx.translate(500, 500);

      //     // 画一个圆 代表地球
      //     ctx.save();

      //     // 先旋转地球角度，根据m毫秒进行选择
      //     let date = new Date();
      //     ctx.rotate((2 * Math.PI / 60) * date.getSeconds() + (2 * Math.PI / 60000) * date.getMilliseconds());
          
      //     // 移动地球，脱离原点位置
      //     ctx.translate(200, 0);
      //     ctx.beginPath();
      //     ctx.arc(0, 0, 20, 0, Math.PI * 2);
      //     ctx.fillStyle = "blue";
      //     ctx.fill();
          
      //     // 画有一个月亮，中心点为地球
      //     ctx.save();
      //     ctx.rotate(((2 * Math.PI) / 6) * date.getSeconds() + ((2 * Math.PI) / 6000) * date.getMilliseconds());
      //     ctx.translate(30, 0);

      //     ctx.beginPath();
      //     ctx.arc(0, 0, 5, 0, Math.PI * 2);
      //     ctx.fillStyle = "gray";
      //     ctx.fill();
      //     ctx.restore();

      //     ctx.restore();

      //     // 画一个太阳
      //     ctx.beginPath();
      //     ctx.arc(0, 0, 100, 0, Math.PI * 2);
      //     ctx.fillStyle = "yellow";
      //     ctx.fill();

      //     // 画一个地球轨道
      //     ctx.beginPath();
          
      //     ctx.arc(0, 0, 200, 0, Math.PI * 2);
      //     ctx.strokeStyle = "rgba(255,255,255,0.3)";
      //     ctx.stroke();

      //     ctx.restore();
      //     requestAnimationFrame(drawEarth);
      // } 
      // requestAnimationFrame(drawEarth);
      
      // 画钟表
      // let drawClock = () => {
      //     ctx.save();
      //     ctx.fillStyle = 'black';
      //     ctx.fillRect(0, 0, width, height);
      //     ctx.translate(300, 300);

      //     // 钟表外盘
      //     ctx.beginPath();
      //     ctx.arc(0, 0, 200, 0, Math.PI * 2);
      //     ctx.strokeStyle = "rgba(255,255,255,0.3)";
      //     ctx.stroke();

      //     ctx.rotate(-Math.PI / 2);
      //     // ctx.save();
          
      //     // 画刻度
      //     for (let i = 0; i < 60; i++) {
      //         ctx.save();
      //         ctx.rotate((Math.PI * 2) / 60 * i);
      //         let startX = 180;
      //         if (i % 5 === 0) {
      //             ctx.save();
      //             startX = 175;
      //             ctx.translate(startX - 10, 0);
      //             ctx.rotate(Math.PI / 2);
      //             ctx.rotate(-(Math.PI * 2) / 60 * i);
      //             ctx.font = "10px Arial";
      //             ctx.fillStyle = "rgba(255,255,255,0.8)";
      //             ctx.textAlign = "center";
      //             ctx.textBaseline = "middle";
                  
      //             ctx.fillText(i === 0 ? '12' : i / 5, 0, 0);
      //             // ctx.fillRect(0, 0, 1, 1);
      //             ctx.restore();
      //         }
      //         ctx.beginPath();
      //         ctx.moveTo(startX, 0);
      //         ctx.lineTo(190, 0);
      //         ctx.strokeStyle = "rgba(255,255,255,0.8)";
      //         ctx.stroke();
      //         ctx.restore();
      //     }
      //     // ctx.restore();

      //     let date = new Date();

      //     ctx.save();
      //     ctx.translate(80, 0);
      //     ctx.rotate(Math.PI / 2);
          
      //     ctx.font = "40px Arial";
      //     ctx.fillStyle = "rgba(255,255,255,0.8)";
      //     ctx.textAlign = "center";
      //     ctx.textBaseline = "middle";
      //     ctx.fillText(`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`, 0, 0);
      //     ctx.restore();

      //     // 画秒针
      //     ctx.save();
      //     ctx.lineWidth = 2;
      //     // 秒针旋转 Math.PI * 2 / 60 * date.getSeconds()
      //     ctx.rotate((Math.PI * 2) / 60 * date.getSeconds());
      //     ctx.beginPath();
      //     ctx.moveTo(-10, 0);
      //     ctx.lineTo(170, 0);
      //     ctx.lineCap = "round";
      //     ctx.strokeStyle = "red";
      //     ctx.stroke();
      //     ctx.restore();

      //     // 画分针
      //     ctx.save();
      //     // 分针旋转 Math.PI * 2 / 60 * date.getMinutes() + Math.PI * 2 / 3600 * date.getSeconds()
      //     ctx.lineWidth = 3;
      //     // 秒针旋转 Math.PI * 2 / 60 * date.getSeconds()
      //     ctx.rotate(Math.PI * 2 / 60 * date.getMinutes() + Math.PI * 2 / 3600 * date.getSeconds());
      //     ctx.beginPath();
      //     ctx.moveTo(-10, 0);
      //     ctx.lineTo(160, 0);
      //     ctx.strokeStyle = "blue";
      //     ctx.lineCap = "round";
      //     ctx.stroke();
      //     ctx.restore();
      //     // 画时针
      //     ctx.save();
      //     // 分针旋转 Math.PI * 2 / 60 * date.getMinutes() + Math.PI * 2 / 3600 * date.getSeconds()
      //     ctx.lineWidth = 4;
      //     // 秒针旋转 Math.PI * 2 / 60 * date.getSeconds()
      //     ctx.rotate(Math.PI * 2 / 12 * date.getHours() + Math.PI * 2 / (12 * 60) * date.getMinutes() + Math.PI * 2 / (12 * 60 * 60) * date.getSeconds());
      //     ctx.beginPath();
      //     ctx.moveTo(-10, 0);
      //     ctx.lineTo(160, 0);
      //     ctx.strokeStyle = "pink";
      //     ctx.lineCap = "round";
      //     ctx.stroke();
      //     ctx.restore();
          
      //     // 时针旋转 Math.PI * 2 / 12 * date.getHours() + Math.PI * 2 / （12 * 60） * date.getMinutes() + Math.PI * 2 / (12 * 60 * 60) * date.getSeconds()
          
      //     ctx.beginPath();
      //     ctx.arc(0, 0, 5, 0, Math.PI * 2);
      //     ctx.fillStyle = "gray";
      //     ctx.fill();

      //     ctx.restore();

      //     requestAnimationFrame(drawClock);
      // }
      // drawClock();
      
      // 鼠标轨迹
      // const mouseStroke = () => {
      //     // 鼠标跟踪效果
      //     let postion = {
      //         x: 100,
      //         y: 100,
      //         prevX: 100,
      //         prevY: 100,
      //         prevRotate: 0
      //     };
      //     document.addEventListener("mousemove", (event) => {
      //         postion.x = event.clientX;
      //         postion.y = event.clientY;
      //     })

      //     const mousePosition = () => {
      //         // ctx.clearRect(0, 0, width, height);
      //         // 通过不断叠加透明 实现长尾效果
      //         ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      //         ctx.fillRect(0, 0, width, height);
      //         ctx.save();
      //         ctx.translate(postion.x, postion.y);
      //         let newPosition = {
      //             x: postion.x - postion.prevX,
      //             y: postion.y - postion.prevY
      //         }
      //         let rotate = Math.atan2(newPosition.y, newPosition.x);
      //         if (rotate == 0) {
      //             ctx.rotate(postion.prevRotate);
      //             console.log("postion.prevRotate", postion.prevRotate)
      //         } else {
      //             ctx.rotate(rotate);
      //             postion.prevRotate = rotate;
      //         }
              
      //         postion.prevX = postion.x;
      //         postion.prevY = postion.y;
              
      //         ctx.beginPath();
      //         ctx.moveTo(10, 0);
      //         ctx.lineTo(-5, -5);
      //         ctx.lineTo(-5, 5);
      //         ctx.fillStyle = "black";
      //         ctx.fill();
      //         ctx.restore();
              
      //         requestAnimationFrame(mousePosition);
      //     }
      //     requestAnimationFrame(mousePosition);
      // }
      // mouseStroke();
      let image = new Image();
      image.src = imgData;
      let data = null;
      image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // console.log("imageData", imageData);
        data = imageData.data;
        // console.log("data", data);
        // for (let i = 0; i < data.length; i += 4) {
        //   let r = data[i];
        //   let g = data[i + 1];
        //   let b = data[i + 2];
        //   let a = data[i + 3];
        //   // let gray = (r + g + b) / 3;
        //   // data[i] = gray;
        //   // data[i + 1] = gray;
        //   // data[i + 2] = gray;
        //   // console.log("r, g, b, a", r, g, b, a);
        // }
      }

      window.addEventListener("mousemove", function (e) {
        pick(e);
      })
      const pick = (e) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // console.log("imageData", imageData);
        data = imageData.data;
        // console.log("e", e);
        let x = e.clientX;
        let y = e.clientY;
        let index = (y * canvas.width + x) * 4;
        let r = data[index];
        let g = data[index + 1];
        let b = data[index + 2];
        let a = data[index + 3];
        // console.log(`%c颜色`,`color: rgba(${r}, ${g}, ${b}, ${a})`);
        ctx.font = "20px Arial";
        ctx.fillStyle = `rgba(${255 - r}, ${255 - g}, ${255 - b}, ${a})`;
        ctx.fillText(`rgba(${r}, ${g}, ${b}, ${a})`, x, y);
      }
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
    background-color: antiquewhite;
}
canvas {
  display: block;
}
img {
  position: absolute;
  left: 0;
  top: 0;
  background-color: black;
}
</style>