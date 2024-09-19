
const map = new WeakMap();

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            map.get(entry.target).play();
            intersectionObserver.unobserve(entry.target);
        } else {
            map.get(entry.target).pause();
        }
    });
})

const isBroswerView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
}

export default function useSlideIn() {
    const vSlideIn = {
        mounted(el: HTMLElement) {
            // 在视口一下才需要监控
            if (!isBroswerView(el)) {
                return;
            }
            console.log('vSlideIn mounted')
            // web animation api
            const animation = el.animate([{
                transform: 'translateY(100px)',
                opacity: 0.5
            }, {
                transform: 'translateY(0)',
                opacity: 1
            }], {
                duration: 1000,
                easing: 'ease-out'
            });
            animation.pause();
            map.set(el, animation);
            intersectionObserver.observe(el);
        },
        onUnmounted(el: HTMLElement) {
            console.log('vSlideIn unmounted')
            intersectionObserver.unobserve(el);
            map.delete(el);
        }
    }
    return vSlideIn
}