<template>
  <div>
    {{ age }}
    <el-button @click="age++">增加</el-button>
    <el-button @click="age--">减少</el-button>
    <!-- <el-input v-model="name.firstName"></el-input> -->
  </div>
</template>

<script lang="ts" setup>
//TODO 音频API 做到音频可视化
// VUE源码测试

const age = ref(1);

// watch(age, (newVal) => {
//   console.log("watch")
//   console.log(newVal);
// })

// watchEffect(() => {
//   console.log("watchEffect")
//   console.log(age.value);
// }, {
//   flush: 'pre' // pre dom 更新前 post dom 更新后(可获取到更新后的dom)
// })

// // 计算属性
// const doubleAge = computed(() => {
//   console.log("computed")
//   return age.value * 2;
// })

// console.log(doubleAge)

// const name = reactive({
//   firstName: '张',
//   lastName: '三'
// })

// const fullName = computed(() => {
//   console.log("computed")
//   return name.firstName + name.lastName;
// })

// console.log(fullName)

// watchEffect(() => {
//   console.log(fullName.value)
// })


</script>

<style lang="scss">

</style>