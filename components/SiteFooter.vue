<script setup lang="ts">
import { SITE } from '~/data/site'
</script>

<template>
  <footer class="border-t border-primary/10 bg-footer-bg">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-primary/50 sm:flex-row sm:items-center sm:justify-between">
      <div>© 2026 Bibi Aremieye · Hamburg, Germany</div>
      <div class="flex items-center gap-6">
        <a :href="SITE.github" target="_blank" rel="noreferrer" class="hover:text-secondary">GitHub</a>
        <a :href="SITE.linkedin" target="_blank" rel="noreferrer" class="hover:text-secondary">LinkedIn</a>
        <span class="text-secondary">Available for opportunities</span>
      </div>
    </div>
  </footer>
</template>
