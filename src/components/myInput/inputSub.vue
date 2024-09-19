<template>
  <div class="input-sub">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { symbols } from '@/stores/storesSymbol';
const text = inject(symbols.TEXT)
</script>

<style lang="scss" scoped>
</style>