<script setup lang="ts">
import { cvProjects } from "~/data/cv";
</script>

<template>
  <main
    class="overflow-hidden rounded-[6px] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
  >
    <section class="px-6 pb-6 pt-10">
      <p class="text-sm uppercase tracking-[0.2em] text-cyan-700">
        PROJECTS
      </p>
      <h1 class="mt-2 text-[46px] font-black leading-[0.95] text-slate-700">
        My
        <span class="text-[#1182c6]">Projects.</span>
      </h1>
      <p class="mt-3 max-w-[520px] text-md text-slate-500">
        Selected delivery highlights based on enterprise product work in
        healthcare, aviation, and education platforms.
      </p>
    </section>

    <section class="grid grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-2">
      <article
        v-for="item in cvProjects"
        :key="item.id"
        class="overflow-hidden rounded-xl border border-slate-200 bg-white p-6"
      >
        <span
          class="mb-2 block text-[9px] uppercase tracking-[0.2em] text-cyan-700"
          >{{ item.period }}</span
        >
        <h3 class="text-xl font-bold text-slate-700">
          {{ item.company }}
        </h3>
        <p class="mt-1 text-md text-slate-500">
          {{ item.role }} · {{ item.location }}
        </p>
        <div class="my-4 grid grid-cols-2 gap-4">
          <div>
            <p class="text-md uppercase text-slate-400">Delivery</p>
            <p class="text-sm text-slate-600">{{ item.highlights[0] }}</p>
          </div>
          <div>
            <p class="text-md uppercase text-slate-400">Impact</p>
            <p class="text-sm text-slate-600">{{ item.highlights[1] }}</p>
          </div>
        </div>
        <p class="text-xs text-slate-500">{{ item.highlights[2] }}</p>

        <div class="mt-4 flex items-center gap-2">
          <a
            :href="item.url || ''"
            v-if="item.url"
            target="_blank"
            class="text-xs font-semibold uppercase tracking-wide text-slate-500 border-b-2 border-[#1182c6]"
            >View Project</a
          >
        </div>
      </article>
    </section>
  </main>
</template>
