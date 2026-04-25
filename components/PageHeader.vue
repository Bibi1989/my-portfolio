<script setup lang="ts">
defineProps<{
  title: string
  accent?: string
  subtitle?: string
}>()
</script>

<template>
  <header class="space-y-4">
    <h1 class="font-headline text-4xl font-black tracking-tighter text-on-surface md:text-6xl">
      {{ title }}
      <span v-if="accent" class="text-primary italic"> {{ accent }}</span>
    </h1>
    <p v-if="subtitle" class="max-w-3xl text-base leading-relaxed text-on-surface-variant">
      {{ subtitle }}
    </p>
  </header>
</template>
