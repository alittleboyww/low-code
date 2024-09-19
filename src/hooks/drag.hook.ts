import type {  ConfigType, CreateComponentType } from "@/packages/index.d";
import { createComponent, fetchViewComponent } from "@/packages/loadComponent";
import { useElementStore } from "@/stores/elementStore";
import { componentInstall } from "@/tools/components";
import { toScale, reverseScale } from "@/tools/utils";

const updateComponentPosition = (item: CreateComponentType, x: number, y: number) => {
  x && (item.subConfig.x = x);
  y && (item.subConfig.y = y);
}

export default function useDrag() {
    const elementStore = useElementStore();
    const dragStartHandle = (e: DragEvent, item: any) => {
        console.log('dragStartHandle', item);
        // 如果是动态加载组件的话，这个地方需要将组件进行注册，拖拽完成后就可以根据这个组件创建一个新的组件
        // 安装视图组件
        componentInstall(item.comName, fetchViewComponent(item.comName));
        
        e.dataTransfer?.setData('component', JSON.stringify(item));
        e!.dataTransfer!.dropEffect = 'copy';
      }
      const dragendHandle = (e: DragEvent) => {
        e.dataTransfer?.clearData();
      }
      const dblclickHandle = (item: any) => {
        console.log(item);
      }
      const dragoverHandle = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation();
        console.log('dragoverHandle', e);
      }
      const dragHandle = async (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation();
        console.log('dragHandle', e);
        let drapDataStr = e.dataTransfer?.getData('component');
        if (!drapDataStr) {
          return;
        }
        const drapData: ConfigType = JSON.parse(drapDataStr);
        const newComponent = await createComponent(drapData);
        console.log(newComponent);
        const { scale } = elementStore.getContentConfig
        // 计算组件放的位置
        if (newComponent.subConfig.w && newComponent.subConfig.h) {
          const [endX, endY] = reverseScale(e.offsetX - newComponent.subConfig.w / 2, e.offsetY - newComponent.subConfig.h / 2, scale);
          updateComponentPosition(newComponent, endX, endY);
        } else {
          updateComponentPosition(newComponent, e.offsetX, e.offsetY)
        }
        
        elementStore.addComponent(newComponent);
        elementStore.setSelectedId(newComponent.id);
      }
      
    return { dragStartHandle, dragendHandle, dblclickHandle, dragoverHandle, dragHandle }
}