<template>
    <div>
      <!-- el-button相关属性和事件分析 -->
       <el-button :type="btnTypeValue" @click="handleClick">主要按钮</el-button>
       <el-button @click="handleClickRound" 
        :plain="isPlain" 
        :round="isRound" 
        :circle="isCircle"
        :icon="btnIconValue"
        :link="isLink"
        :disabled="isDisabled"
        :text="textConfig.isText"
        :bg="textConfig.isBg"
        :size="btnSizeValue"
        >{{ btnRoundValue }}</el-button>
        <!-- icon两种方式，通过icon标签定义或者通过el-icon进行处理 -->
        <el-button type="primary">
          Upload<el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>
        <br/>
        <!-- 以按钮组的方式出现，常用于多项类似操作。 -->
        <el-button-group>
          <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
          <el-button type="primary">Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
        </el-button-group>
  
        <el-button loading>
          Loading
        </el-button>
        <el-button :loading-icon="Eleme" loading>loading-icon</el-button>
        <!-- loading 插槽 -->
        <el-button loading>
          <template #loading>
            <div class="custom-loading">
              <svg class="circular" viewBox="-10, -10, 50, 50">
                <path
                  class="path"
                  d="
                  M 30 15
                  L 28 17
                  M 25.61 25.61
                  A 15 15, 0, 0, 1, 15 30
                  A 15 15, 0, 1, 1, 27.99 7.5
                  L 15 15
                "
                  style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                />
              </svg>
            </div>
          </template>
          Loading
        </el-button>
  
        <el-button :tag="tagValue" v-bind="attr" color="#626aef" :dark="isDark">
          <template v-if="showIconSlot" #icon>
            <el-icon><Eleme /></el-icon>
          </template>
          {{ tagValue }}
          <el-icon><ArrowRight /></el-icon>
        </el-button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const btnType =  ['primary', 'success', 'info', 'warning', 'danger'] as const
  type BtnType = typeof btnType[number]
  const btnTypeValue = ref<BtnType>()
  const handleClick = () => {
    btnTypeValue.value = btnType[Math.floor(Math.random() * btnType.length)]
  }
  
  const btnRound = ['plain', 'round', 'circle'] as const
  type BtnRound = typeof btnRound[number]
  const btnRoundValue = ref<BtnRound>('circle')
  const handleClickRound = () => {
    btnRoundValue.value = btnRound[Math.floor(Math.random() * btnRound.length)]
  }
  const isPlain = computed(() => btnRoundValue.value == 'plain')
  const isRound = computed(() => btnRoundValue.value == 'round')
  const isCircle = computed(() => btnRoundValue.value == 'circle')
  
  import { Check, Edit, Delete, Message, Search, 
    Share, Upload, Download, ArrowLeft, ArrowRight, Eleme } from '@element-plus/icons-vue'
  const btnIcon = [Check, Edit, Delete, Message, Search, Share, Upload, Download] as const;
  type BtnIcon = typeof btnIcon[number]
  // icon组件本身就是响应式的，所以不需要使用ref，只监听最外层的.value即可，对于.value.property的监听不需要支持响应
  const btnIconValue = shallowRef<BtnIcon>(Check)
  const handleClickIcon = () => {
    let midIconValue = btnIcon[Math.floor(Math.random() * btnIcon.length)]
    btnIconValue.value = midIconValue
    // 使用shallowRef下面结果为true, 使用ref下面结果为false
    console.log(midIconValue == btnIconValue.value)
  }
  
  // isLink 和 isText是有冲突的
  const isDisabled = ref(false)
  const isLink = ref(true)
  const textConfig = ref({
    isText: true,
    isBg: true
  })
  const handleDisableAndLink = () => {
    isDisabled.value = !isDisabled.value
    isLink.value = false
    textConfig.value.isText = !textConfig.value.isText
  }
  
  const btnSize = ['large', 'small'] as const;
  type BtnSize = typeof btnSize[number]
  
  const btnSizeValue = ref<BtnSize>()
  const handleClickSize = () => {
    btnSizeValue.value = btnSize[Math.floor(Math.random() * btnSize.length)]
  }
  // button可自定义元素标签
  const tagList = ['div', 'span', 'a'];
  const tagValue = ref('div')
  const handleTagValue = () => {
    tagValue.value = tagList[Math.floor(Math.random() * tagList.length)]
  }
  
  const attr = ref({
    href:"http://www.baidu.com",
    target: "_blank",
    rel: "noopener noreferrer"
  })
  
  const isDark = ref(false)
  const handleDark = () => {
    isDark.value = !isDark.value
  }
  
  const showIconSlot = ref(false)
  const handleIconSlot = () => {
    showIconSlot.value = !showIconSlot.value
  }
  
  
  watch(btnTypeValue, (newVal) => {
    console.log(newVal);
    handleIconSlot();
    handleDark();
    handleTagValue();
    handleClickSize();
    handleClickRound();
    handleClickIcon();
    handleDisableAndLink();
  })
  </script>
  
  <style>
  .el-button .custom-loading .circular {
    margin-right: 6px;
    width: 18px;
    height: 18px;
    animation: loading-rotate 2s linear infinite;
  }
  .el-button .custom-loading .circular .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: var(--el-button-text-color);
    stroke-linecap: round;
  }
  </style>