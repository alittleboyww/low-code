import defaultImg from '@/assets/small.png';

export default function useLoadImg() {
    const vDefaultImg = {
        mounted(el: any, binding: any) {
            // 先加载一个默认小的图片
            el.src = defaultImg;
            let img = document.createElement('img');
            console.log(binding);
            // 创建一个dom节点
            img.src = binding.value;
            img.onload = function () {
                el.src = binding.value;
            }
        },
        onUnmounted(el: any) {

        }
    }
    return vDefaultImg
}