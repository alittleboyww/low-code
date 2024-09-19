<template>
    <div>
      <img v-default-img="img"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import img from '@/assets/big.jpg';
  import useLoadImg from '@/directive/loadImg';
  
  const vDefaultImg = useLoadImg();
  
  </script>
  <style lang="scss">
  
  </style>