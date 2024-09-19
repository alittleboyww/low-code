import { defineStore } from 'pinia';
import { CanvasType, CanvasStoreType } from '@/types/common-types';

export const useCanvasStore = defineStore({
    id: 'canvas',
    state: (): CanvasStoreType => ({
        editCanvas: {
            width: 0,
            height: 0,
            scale: 1,
            otherProp: {
                padding: 0
            }
        }
    }),
    getters: {
        getEditCanvas: (state) => state.editCanvas,
    },
    actions: {
        setEditCanvas({ width, height, scale, otherProp }: CanvasType) { 
            this.editCanvas['width'] = width;
            this.editCanvas['height'] = height;
            this.editCanvas['scale'] = scale;
            this.editCanvas['otherProp'] = otherProp;
        }
    }
})