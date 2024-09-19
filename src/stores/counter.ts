import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useInputStore = defineStore("inputContent", {
  state: () => {
      return {
          inputContent: '' as string
      }
  },
  actions: {
      changeContent(value: string) {
          this.inputContent = value
      }
  },
  getters: {
      getInputContent(state) {
          return state.inputContent
      }
  }
})

export const useInputRefSotre = defineStore("inputRef", () => {
  const inputContent = ref<string>('')
  const getInputContent = computed(() => inputContent.value)
  const changeContent = (value: string) => {
    inputContent.value = value
  }
  return {
    inputContent,
    getInputContent,
    changeContent
  }
})