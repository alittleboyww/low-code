<template>
    <div>
        <!-- <input v-model="com.name"></input>
        <input v-model="com.age"></input>

        <input v-model="props.modelValue.name"></input>
        <input v-model="props.modelValue.age"></input>

        <input v-model="props.normalObj.test"></input> -->
        <input v-model="props.modelValue"></input>
        <input v-model="props.obj.test"></input>
    </div>
    <div>
    <!-- {{ abc.age }}
    {{ abc.name }}
    <input type="text" v-model="abc.name">
    <input type="text" v-model="abc.age">
    <input type="text" v-model="normalObj.test">

    <input type="text" v-model="shallowReactiveBase.name">
    <input type="text" v-model="shallowReactiveBase.info.age">

    shallowReactiveBase.name: {{ shallowReactiveBase.name }}
    shallowReactiveBase.info.age: {{ shallowReactiveBase.info.age }} -->

    <!-- <input type="text" v-model="shallowRefBase.name">
    <input type="text" v-model="shallowRefBase.info.age">
    shallowRefBase.name: {{ shallowRefBase.name }}
    shallowRefBase.info.age: {{ shallowRefBase.info.age }} -->

    <!-- <input type="text" v-model="text">
    {{  text }}
    ----------------- -->
    <!-- <input type="text" v-model="com.name">
    <input type="text" v-model="com.age"> -->
    <!-- <computedProps v-model="abc" :normalObj="normalObj"></computedProps> -->
   </div>
  <!-- {{ test }}
  -
  {{ obj.test }} -->
</template>

<script setup>
// const test = ref(1);
// const obj = ref({
//   test: 1
// })
// window.test = test;
// window.obj = obj

// const proxy = new Proxy({
//   a: 1,
//   b:2
// }, {})
// console.log(proxy.a)

// const props = defineProps(['modelValue', 'obj'])

// console.log(props.modelValue === window.test.value)
// console.log(props.obj === window.obj.value)

// const comp = computed(() => props.modelValue)
// console.log(comp.value === window.test.value)

// props.obj.test++;
// props.modelValue++;
// const props = defineProps(['modelValue', 'normalObj'])
// console.log(props.modelValue)
// const com = computed(() => props.modelValue);

// import { debounce } from 'lodash';
// import computedProps from './verify/computedProps.vue';
// const baseObj = {
//   name: 'abc',
//   age: 20
// };
// const abc = ref(baseObj);
// const normalObj = {
//   test: 'test'
// }
// const raw = toRaw(abc);
// console.log(raw === abc)

// const rawBase = toRaw(abc.value);
// console.log(rawBase === baseObj);

// const reactiveBase = reactive(baseObj);
// const rawReactiveBase = toRaw(reactiveBase);
// console.log(rawReactiveBase  === baseObj);

// const shallowReactiveBase = shallowReactive({
//   name: 'abc',
//   info: {
//     age: 20,
//     color: 'red'
//   }
// })

// const shallowRefBase = shallowRef({
//   name: 'abc',
//   info: {
//     age: 20,
//     color: 'red'
//   }
// });

// setTimeout(() => {
//   shallowRefBase.value = {
//     name: '1111',
//     info: {
//       age: 21,
//       color: 'red'
//     }
//   }
// }, 3000);

// const useDebouncedRef = (val, delay = 200) => {
//   let timer;
//   return customRef((track, trigger) => {
//     return {
//       get() {
//         track();
//         return val;
//       },
//       set(newVal) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//           val = newVal;
//           trigger();
//         }, delay);
//       }
//     }
//   })
// }
// const text = useDebouncedRef('hello', 500);
// console.log(text.value);
// const debounce = (func, delay = 200) =>{
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   }
// }

// const throhll = (func, delay = 200) => {
//   let timer;
//   return function (...args) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.apply(this, args);
//         timer = null;
//       }, delay);
//     }
//   }
// }
</script>

