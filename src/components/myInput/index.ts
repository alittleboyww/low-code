import { ref, reactive, useAttrs, useSlots, computed, onMounted} from 'vue'

export default function useInput(props : Record<string, any>, emit: Function) {
    const el = ref();
    const btn = ref();
    const attr = useAttrs();
    const slots = useSlots();
    const age = computed(() => {
        return props.age;
    })
    const modelValue = computed(() => {
        return props.modelValue;
    })

    const onInputMounted = onMounted(() => {
        console.log('onMounted');
    })

    const plusAge = () => {
        emit('update:age', age.value + 1);
    }
    const plusModelValue = () => {
        emit('update:modelValue', modelValue.value + "str")
    }
    return {
        el,
        btn,
        age,
        attr,
        slots,
        modelValue,
        onInputMounted,
        plusAge,
        plusModelValue
    }
}