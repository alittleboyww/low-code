<template>
    <div class="container">
      <div class="left">
        <ComponentNav></ComponentNav>
      </div>
      <div class="mid">
        <ComponentEdit></ComponentEdit>
      </div>
      <!-- 展示所选元素的配置 -->
      <div class="right">
        <div class="component-config">
          <div class="config-content">

          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import ComponentNav from '@/pages/componentNav/index.vue'
import ComponentEdit from '@/pages/componentEdit/index.vue'
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
    .span-box {
      display: block;
    }
}
.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    .left {
        flex: 1;
        height: 100%;
        background-color: var(--vt-c-white);
        border-right: 1px solid var(--color-border-line);
    }
    
    .mid {
      flex: 2;
      // width: 50%;
      height: 100%;
      background-color: var(--vt-c-white);
      border-right: 1px solid var(--color-border-line);
      overflow: scroll;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    .right {
      flex: auto;
      // width: auto;
      height: 100%;
      background-color: var(--vt-c-white);
    }
}

</style>