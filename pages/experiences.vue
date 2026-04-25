<script setup lang="ts">
import { cvEducation, cvExperience, cvLanguages, cvProfile } from "~/data/cv";
</script>

<template>
  <main
    class="overflow-hidden rounded-[6px] border-2 border-[#665cff] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
  >
    <section class="grid grid-cols-4 gap-5 px-6 pb-5 pt-8">
      <div class="col-span-3">
        <h1 class="text-[62px] font-black leading-[0.9] text-slate-700">
          Senior Engineering
          <br />
          Architecture.
        </h1>
        <p class="mt-3 max-w-[360px] text-md text-slate-500">
          {{ cvProfile.summary }}
        </p>
      </div>
      <aside class="space-y-2 rounded bg-white p-3">
        <p class="text-sm uppercase tracking-[0.2em] text-slate-400">
          Primary Stack
        </p>
        <p class="text-sm text-slate-600">
          {{ cvProfile.role }}
        </p>
      </aside>
    </section>

    <section class="grid grid-cols-4 gap-4 px-6 pb-6">
      <div class="col-span-3 rounded bg-white p-4">
        <h2 class="text-md font-bold text-slate-700">Career Trajectory</h2>
        <div class="mt-3 space-y-4">
          <article
            v-for="item in cvExperience"
            :key="item.company"
            class="rounded border border-slate-100 bg-[#f7f9fc] p-3"
          >
            <div class="mb-2 flex items-center justify-between">
              <h3 class="text-md font-semibold text-slate-700">
                {{ item.role }} · {{ item.company }}
              </h3>
              <span class="text-sm uppercase text-slate-400">{{
                item.period
              }}</span>
            </div>
            <p class="text-sm text-slate-500">
              {{ item.highlights[0] }}
            </p>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <p class="rounded bg-white p-2 text-sm text-slate-500">
                {{ item.highlights[1] }}
              </p>
              <p class="rounded bg-white p-2 text-sm text-slate-500">
                {{ item.highlights[2] }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <aside class="space-y-3">
        <div class="rounded bg-white p-3">
          <h3 class="text-md font-semibold text-slate-700">Network & Reach</h3>
          <div class="mt-2 space-y-2 text-sm text-slate-600">
            <p class="rounded border border-slate-200 px-2 py-1">
              {{ cvProfile.email }}
            </p>
            <p class="rounded border border-slate-200 px-2 py-1">
              {{ cvProfile.phone }}
            </p>
            <p class="rounded border border-slate-200 px-2 py-1">
              {{ cvProfile.location }}
            </p>
          </div>
        </div>
        <div class="rounded bg-slate-700 p-3 text-slate-100">
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Status</p>
          <h3 class="mt-1 text-md font-semibold">Education</h3>
          <p class="mt-1 text-sm text-slate-300">
            {{ cvEducation }} · {{ cvLanguages.join(" · ") }}
          </p>
        </div>
      </aside>
    </section>
  </main>
</template>
