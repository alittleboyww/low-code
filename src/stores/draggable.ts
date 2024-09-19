import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDraggableStore = defineStore('componentDraggable', () => {
    const isDraggable = ref(false);
    const getDraggable = computed(() => {
        return isDraggable.value;
    })
    const setDraggable = (value: boolean) => {
        isDraggable.value = value;
    }
    return {
        isDraggable,
        getDraggable,
        setDraggable
    }
})