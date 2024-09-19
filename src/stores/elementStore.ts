import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CreateComponentType, ContentConfigType, ContentConfigKeyType, ContentConfigValueType } from '@/packages/index.d'

import eyeShow from '@/assets/configImg/eye_show.svg';
import eyeHide from '@/assets/configImg/eye_hide.svg';

export const useElementStore = defineStore('element', () => {
    // state
    const selectedId = ref();
    const componentList = ref([] as CreateComponentType[]);
    const hoverTargetId = ref();
    const targetId = ref();

    // 默认容器配置
    const contentConfig = ref<ContentConfigType>({
        showGrid: true, // 是否显示网格
        iconImg: eyeShow,
        gridColor: 'rgb(224, 228, 232)', // 网格颜色
        gridLineWidth: 10, // 间距大小
        scale: 1, // 缩放比例
        width: 1920, // 容器宽度
        height: 1080, // 容器高度
    })

    // 参考线配置
    const guideLineConfig = ref({
        x: -99999,
        y: -99999,
    })

    // getters
    const getSelectedId = computed(() => {
        return selectedId.value;
    });
    const getHoverTargetId = computed(() => {
        return hoverTargetId.value;
    })
    const getComponentList = computed(() => {
        return componentList.value;
    })
    const getTargetId = computed(() => {
        return targetId.value;
    })
    const getContentConfig = computed(() => {
        return contentConfig.value;
    })
    const getGuideLineConfig = computed(() => {
        return guideLineConfig.value;
    })
    
    // actions
    const setSelectedId = (id: string) => {
        selectedId.value = id;
    }
    const addComponent = (component: CreateComponentType) => {
        componentList.value.push(component);
    }
    const setHoverTargetId = (id: string) => {
        hoverTargetId.value = id;
    }
    const setTargetId = (id: string) => {
        targetId.value = id;
    }
    const getTargetComponent = (id: string) => {
        return componentList.value.find(item => item.id === id);
    }
    
    const setContentConfig = <T extends ContentConfigKeyType>(key: T , value: ContentConfigType[T]) => {
        contentConfig.value[key] = value;
    }
    const contentConfigSwitch = () => {
        contentConfig.value.showGrid = !contentConfig.value.showGrid;
        contentConfig.value.iconImg = contentConfig.value.showGrid ? eyeShow : eyeHide;
    }
    const setGuideLineConfig = (x: number, y: number) => {
        if (x) guideLineConfig.value.x = x;
        if (y) guideLineConfig.value.y = y;
    }
    const setGuideLineConfigDefualt = () => {
        guideLineConfig.value.x = -99999;
        guideLineConfig.value.y = -99999;
    }
    return {
        selectedId,
        setSelectedId,
        getSelectedId,

        addComponent,
        getComponentList,
        
        setHoverTargetId,
        getHoverTargetId,
        hoverTargetId,

        setTargetId,
        getTargetId,
        targetId,

        getTargetComponent,

        contentConfig,
        getContentConfig,
        setContentConfig,
        contentConfigSwitch,

        guideLineConfig,
        getGuideLineConfig,
        setGuideLineConfig,
        setGuideLineConfigDefualt
    }
})