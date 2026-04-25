<script setup lang="ts">
import { NAV, SITE } from '~/data/site'

const route = useRoute()

const isActive = (href: string) => {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <nav class="mx-auto flex w-full container items-center justify-between px-3 py-4 md:px-4">
      <NuxtLink to="/" class="text-lg font-bold tracking-tight text-slate-700">{{ SITE.name }}</NuxtLink>
      <div class="flex items-center gap-4 text-md font-medium text-slate-500">
        <NuxtLink
          v-for="item in NAV"
          :key="item.href"
          :to="item.href"
          class="transition-colors"
          :class="isActive(item.href) ? 'text-slate-800 border-b-4 border-[#1182c6]' : 'hover:text-slate-700'"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-slate-500">≡</span>
        <a :href="`mailto:${SITE.email}`" class="rounded bg-slate-800 px-2 py-1 text-sm font-semibold uppercase tracking-wide text-white">Resume</a>
      </div>
    </nav>
  </header>
</template>
