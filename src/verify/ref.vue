<template>
    <!-- <sketch-rule
      :thick="thick"
      :scale="scale"
      :width="canvasBox().width"
      :height="canvasBox().height"
      :startX="startX"
      :startY="startY"
      :lines="lines"
    ></sketch-rule> -->
    <div>
      {{ canvasStore.getEditCanvas.scale }}
      <el-button @click="scaleHandler">变更scale</el-button>
      <el-button @click="canvasStore.setEditCanvas({ scale: 1, width: 1000, height: 1000, otherProp: { padding: 10}});
                      consoleLog();">通过action变更</el-button>
      <el-button @click="canvasStore.getEditCanvas.scale++;consoleLog();">通过get获取后变更</el-button>
    </div>
  </template>
  
  <script setup lang="ts">
  import SketchRule from "vue3-sketch-ruler"
  import 'vue3-sketch-ruler/lib/style.css'
  import { useCanvasStore } from '@/stores/canvasStore'
  
  // 标尺的厚度
  const thick = 20
  
  const canvasStore = useCanvasStore();
  
  // const editCanvas = toRefs(canvasStore.getEditCanvas);
  
  // 将 store 解构
  let scale0 = canvasStore.getEditCanvas.scale;
  let { scale: scale1 } = canvasStore.getEditCanvas;
  const { scale: scale2 } = toRefs(canvasStore.getEditCanvas);
  const scale3 = toRef(canvasStore.getEditCanvas, "scale");
  const scale4 = toRefs(canvasStore.getEditCanvas).scale;
  
  let padding = toRefs(canvasStore.getEditCanvas.otherProp).padding;
  
  watch(canvasStore.getEditCanvas, (val) => {
    console.log("watch -=====================-");
    consoleLog();
    padding = toRefs(val.otherProp).padding;
  })
  
  const consoleLog = () => {
    console.log("start ==================")
    console.log(canvasStore);
    console.log(canvasStore.editCanvas);
    console.log(canvasStore.getEditCanvas);
    console.log(canvasStore.getEditCanvas.scale);
    console.log("scale0" + scale0);
    console.log("scale1" + scale1);
    console.log("scale2" + scale2.value);
    console.log("scale3" + scale3.value);
    console.log("scale4" + scale4.value);
    console.log("end ==================")
  }
  consoleLog();
  
  const scaleHandler = () => {
    canvasStore.editCanvas.scale++;
    padding.value++;
    // editCanvas.otherProp.value.padding++;
    consoleLog();
  }
  
  </script>
  <style lang="scss">
  
  </style>