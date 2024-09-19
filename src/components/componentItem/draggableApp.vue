<template>
    <!-- 明天考虑一下拖拽api的情况  比如将一个按钮拖拽到 另一块地方-->
     <!-- 放组件的部分  -->
    <div class="component-container">
      <div class="component-item"  
        v-for="item in divList" 
        :key="item.name"
        draggable="true"
        @dragstart="dragStartHandle($event, item)"
        @dragend="dragendHandle"
        @dblclick="dblclickHandle(item)">
        {{ item.name }}
      </div>
    </div>
  
     <!-- 拖拽结果后的部分 -->
     <div class="drag-container"
      @drop="dragHandle"
      @dragover="dragoverHandle"
      @dragenter="dragoverHandle"
     >
        <DraggableIndex :component-list="componentList">
        </DraggableIndex>
     </div>
  </template>
  
  <script lang="ts" setup>
  import type { ComponentType } from '@/types/common-types';
  import { getTargetIndexAndDeep, MAX_DEEP } from '@/components/componentItem/index'
  import { cloneDeep } from 'lodash';
  import { useDraggableStore } from '@/stores/draggable';
  const draggableStore = useDraggableStore();
  
  const divList = ref<ComponentType[]>([{
    name: 'div1',
    type: 'div',
    className: 'component-item',
  },{
    name: 'span1',
    type: 'span',
    className: 'span-item'
  }])
  // 后面使用store来管理
  let dragComponent: ComponentType | null = null;
  let isDrag = false;
  const dragStartHandle = (e: DragEvent, item: ComponentType) => {
    e!.dataTransfer!.dropEffect = 'copy'
    dragComponent = cloneDeep(toRaw(item))
    dragComponent.name+= Math.floor((100 * Math.random()))
    dragComponent!.children = [] as ComponentType[]
    e!.dataTransfer!.setData('item', item.name)
    isDrag = true
  }
  const dragendHandle = (...args: any[]) => {
    console.log(args)
    console.log('dragendHandle')
    isDrag = false
  }
  const dblclickHandle = (item: any) => {
    console.log('dblclickHandle', item)
  }
  // 有一个index和一个deep, 通过这两个属性可以确定是哪个组件
  const componentList = ref<ComponentType[]>([])
  
  const dragHandle = (e: any) => {
    console.log('dragHandle')
    e.preventDefault()
    e.stopPropagation();
    let isComponentDraggable = draggableStore.getDraggable;
    if (!isComponentDraggable) {
      // 将被拖动的元素移动到选定的放置目标
      // 是根组件 则将其直接放入到最外层，不是根组件，需要判断现在组件的父级是谁
      if (isRoot(e)) {
        // 首层设置为根节点
        componentList.value.push(dragComponent!)
      } else {
        const { indexArr } = getTargetIndexAndDeep(e);
        console.log(indexArr)
        if (!isMaxDeep(indexArr)) return;
        let targetComponentObj = getTargetComponentObj(indexArr)
        
        const children = (targetComponentObj.children || []) as ComponentType[]
        children.push(dragComponent!)
        // 将拖拽的组件放入到目标组件的children中
        targetComponentObj.children = children
        console.log(targetComponentObj)
        console.log(componentList)
      }
    }
    console.log('componentList===================================', componentList)
  }
  const dragoverHandle = (e: any) => {
    console.log('dragoverHandle')
    e.preventDefault()
    e.stopPropagation()
  }
  
  const isRoot = (e: DragEvent) => {
    return (e!.target as HTMLElement)!.className === 'draggable-warp'
  }
  // 根据索引列表获取目标对象
  const getTargetComponentObj = (indexArr: number[]) => {
    if (indexArr.length === 1) {
      return componentList.value[indexArr[0]];
    }
    const warpObj = componentList.value[indexArr[0]];
    // indexArr去掉第一个
    indexArr.shift()
    return indexArr.reduce((pre: ComponentType, cur: number):ComponentType => {
      return pre.children?.[cur] as ComponentType
    }, warpObj)
  }
  
  const isMaxDeep = (indexArr: number[]) => {
    return indexArr.length <= MAX_DEEP
  }
  </script>
  
  <style scoped lang="scss">
  .component-container, .drag-container {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
  }
  .component-item {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  .span-item {
    color: red;
  }
  </style>