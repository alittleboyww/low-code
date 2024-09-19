export default function useContextMenu(container: Ref<HTMLElement | null>) {
    const x = ref(0);
    const y = ref(0);
    const isShow = ref(false);

    function showMenu(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        x.value = e.clientX;
        y.value = e.clientY;
        isShow.value = true;
    }

    function hideMenu() {
        isShow.value = false;
    }

    onMounted(() => {
        container.value?.addEventListener('contextmenu', showMenu);
        // 需要先执行 设置第三个参数为true
        window.addEventListener('click', hideMenu, true);
        window.addEventListener('contextmenu', hideMenu, true);
    })
    onUnmounted(() => {
        container.value?.removeEventListener('contextmenu', showMenu);
        window.removeEventListener('click', hideMenu);
        window.removeEventListener('contextmenu', hideMenu);
    })

    return {
        x,
        y,
        isShow
    }
}