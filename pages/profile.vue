<script setup lang="ts">
import { cvProfile } from '~/data/cv'
</script>

<template>
  <main
    class="overflow-hidden rounded-[6px] border-2 border-[#665cff] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
  >
    <section class="grid grid-cols-5 gap-5 px-6 pb-8 pt-12">
      <div class="col-span-3">
        <p
          class="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-cyan-700"
        >
          {{ cvProfile.role }}
        </p>
        <h1
          class="text-[54px] font-black leading-[0.92] tracking-tight text-slate-700"
        >
          <!-- Precision<br />Engineering in -->
          <span class="text-[#1182c6]">JS/TS</span>
        </h1>
        <p
          class="mt-4 max-w-[340px] text-[10px] leading-relaxed text-slate-500"
        >
          {{ cvProfile.summary }}
        </p>
        <div class="mt-4 flex gap-2">
          <a
            class="rounded bg-[#4b5563] px-3 py-2 text-lg font-semibold uppercase text-white"
            >View Engineering Blueprint</a
          >
          <a
            class="rounded border border-slate-300 bg-white px-3 py-2 text-lg font-semibold uppercase text-slate-500"
            >Explore</a
          >
        </div>
      </div>
      <div class="col-span-2">
        <img
          src="/stitch/previews/screen-1.png"
          alt="Profile preview"
          class="h-[190px] w-full rounded object-cover shadow-sm"
        />
        <div
          class="mt-2 w-fit rounded border border-slate-200 bg-white px-2 py-1 text-lg text-slate-500"
        >
          <p class="font-semibold text-[#1182c6]">{{ cvProfile.location }}</p>
          <p>{{ cvProfile.email }}</p>
        </div>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <h2 class="text-[18px] font-bold text-slate-700">
        Architectural Foundations
      </h2>
      <div class="mt-3 grid grid-cols-3 gap-4">
        <article class="rounded bg-white p-4">
          <p
            class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"
          >
            ◈
          </p>
          <h3 class="mt-1 text-[10px] font-semibold text-slate-700">
            Scalable Systems
          </h3>
          <p class="mt-1 text-lg text-slate-500">
            Designing modular microservices and enterprise workflows.
          </p>
        </article>
        <article class="rounded bg-white p-4">
          <p
            class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"
          >
            ◈
          </p>
          <h3 class="mt-1 text-[10px] font-semibold text-slate-700">
            Type Safety
          </h3>
          <p class="mt-1 text-lg text-slate-500">
            Leveraging strict TypeScript contracts for reliable systems.
          </p>
        </article>
        <article class="rounded bg-white p-4">
          <p
            class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"
          >
            ◈
          </p>
          <h3 class="mt-1 text-[10px] font-semibold text-slate-700">
            Performance Audit
          </h3>
          <p class="mt-1 text-lg text-slate-500">
            Optimization for low latency APIs and frontend delivery.
          </p>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <div class="mb-3 flex items-center justify-between">
        <h2 class="text-[18px] font-bold text-slate-700">
          Production Artifacts
        </h2>
        <a class="text-lg font-semibold uppercase text-[#1182c6]"
          >Today’s Archive →</a
        >
      </div>
      <div class="grid grid-cols-5 gap-4">
        <article
          class="col-span-2 overflow-hidden rounded bg-[#223040] text-white"
        >
          <img
            src="/stitch/previews/screen-3.png"
            alt=""
            class="h-[320px] w-full object-cover opacity-90"
          />
          <div class="p-3">
            <p class="text-lg uppercase tracking-[0.2em] text-slate-300">
              Featured
            </p>
            <h3 class="text-[16px] font-bold">QuantumLedger v2</h3>
          </div>
        </article>
        <article class="col-span-2 rounded bg-white p-3">
          <img
            src="/stitch/previews/screen-2.png"
            alt=""
            class="h-[180px] w-full rounded object-cover"
          />
          <h3 class="mt-2 text-[12px] font-bold text-slate-700">
            Analytics Engine
          </h3>
          <p class="mt-1 text-lg text-slate-500">
            Live dashboards and data pipelines for operations intelligence.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>
