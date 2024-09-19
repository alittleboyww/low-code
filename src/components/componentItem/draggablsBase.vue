<template>
    <div class="itxst">
      <div>
          <!-- 
          group	如果一个页面有多个拖拽区域，通过设置group名称可以实现多个区域之间相互拖拽
          或者 { name: "...", pull: [true, false, 'clone', array , function], put: [true, false, array , function] }
          sort	是否开启排序,如果设置为false,它所在组无法排序
          delay	鼠标按下多少秒之后可以拖拽元素
          touchStartThreshold	鼠标按下移动多少px才能拖动元素
          disabled	:disabled= "true",是否启用拖拽组件
          animation	拖动时的动画效果，如设置animation=1000表示1秒过渡动画效果
          handle	:handle=".mover" 只有当鼠标在class为mover类的元素上才能触发拖到事件
          filter	:filter=".unmover" 设置了unmover样式的元素不允许拖动
          draggable	:draggable=".item" 样式类为item的元素才能被拖动
          ghost-class	:ghost-class="ghostClass" 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
          chosen-class	:ghost-class="hostClass" 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
          drag-class	:drag-class="dragClass"拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
          force-fallback	默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动，你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true
          fallback-class	默认false，克隆选中元素的样式到跟随鼠标的样式
          fallback-on-body	默认false，克隆的元素添加到文档的body中
          fallback-tolerance	按下鼠标移动多少个像素才能拖动元素，:fallback-tolerance="8"
          scroll	默认true,有滚动区域是否允许拖拽
          scroll-fn	滚动回调函数
          scroll-fensitivity	距离滚动区域多远时，滚动滚动条
          scroll-speed	滚动速度
          -->
  
          <draggable
            :list="state.list"
            item-key="id"
            ghost-class="ghost"
            chosen-class="chosen"
            animation="300"
            @start="onStart"
            @end="onEnd">
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import draggable from 'vuedraggable'
  
  const state = reactive({
    list: [
      { name: 'John', id: 1 },
      { name: 'Joao', id: 2 },
      { name: 'Jean', id: 3 },
      { name: 'Gerard', id: 4 }
    ],
  })
  // 拖拽开始事件
  const onStart = (e: any) => {
    console.log('onStart', e)
    e.dataTransfer.setData('isComponentDraggable', '1')
  }
  // 拖拽结束事件
  const onEnd = (e: any) => {
    console.log('onEnd', e)
  }
  </script>
  
  <style lang="scss">
  .itxst {
    width: 600px;
    display: flex;
  }
  .itxst > div:nth-of-type(1) {
    flex: 1;
  }
  .itxst > div:nth-of-type(2) {
    width: 270px;
    padding-left: 20px;
  }
  .item {
    border: solid 1px #eee;
    padding: 6px 10px;
    text-align: left;
  }
  
  .item:hover {
    cursor: move;
  }
  .item + .item {
    margin-top: 10px;
  }
  .ghost {
    border: solid 1px rgb(19, 41, 239);
  }
  .chosenClass {
    background-color: #f1f1f1;
  }
  </style>