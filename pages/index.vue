<script setup lang="ts">
const foundationCards = [
  {
    title: "Scalable Systems",
    text: "Designing modular microservices and enterprise workflows from the ground up.",
  },
  {
    title: "Type Safety",
    text: "Leveraging strict TypeScript contracts for end-to-end reliability.",
  },
  {
    title: "Performance Audit",
    text: "Data-driven optimization for low latency APIs and frontend delivery.",
  },
];

const latestLogs = [
  {
    title: "The Cost of Abstraction: Optimizing React Server Components",
    tag: "Architecture",
    date: "Mar 2026",
  },
  {
    title: "Why I built my stack to Kubernetes for Enterprise Apps",
    tag: "DevOps",
    date: "Feb 2026",
  },
];
</script>

<template>
  <main
    class="w-full container mx-auto overflow-hidden rounded-[6px] bg-[#edf1f5] shadow-[0_20px_70px_rgba(10,16,36,0.45)]"
  >
    <section class="grid grid-cols-5 gap-5 px-6 pb-8 pt-12">
      <div class="col-span-3">
        <p
          class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700"
        >
          Senior Full-Stack TypeScript Engineer
        </p>
        <h1
          class="text-[54px] font-black leading-[0.92] tracking-tight text-slate-700"
        >
          Precision
          <br />
          Engineering in <span class="text-[#1182c6]">JS/TS</span>
        </h1>
        <p
          class="mt-4 max-w-[330px] text-md leading-relaxed text-slate-500"
        >
          Architecting resilient full-stack systems with a focus on type safety,
          performance optimization, and industrial-grade scalability.
        </p>
        <div class="mt-4 flex items-center gap-2">
          <NuxtLink
            to="/experiences"
            class="rounded bg-[#4b5563] px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white"
          >
            View Experience
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-500"
          >
            View Projects
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-2">
        <div class="overflow-hidden rounded bg-slate-200 shadow-sm">
          <img
            src="/stitch/previews/screen-1.png"
            alt="Hero project visual"
            class="h-[190px] w-full object-cover"
          />
        </div>
        <div
          class="mt-2 w-fit rounded border border-slate-200 bg-white px-2 py-1 text-sm text-slate-500"
        >
          <p class="font-semibold text-[#1182c6]">6+</p>
          <p>Years of experience</p>
        </div>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <h2 class="text-[18px] font-bold text-slate-700">
        Architectural Foundations
      </h2>
      <div class="mt-3 grid grid-cols-3 gap-4">
        <article
          v-for="card in foundationCards"
          :key="card.title"
          class="rounded bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        >
          <p
            class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"
          >
            ◈
          </p>
          <h3 class="mt-1 text-md font-semibold text-slate-700">
            {{ card.title }}
          </h3>
          <p class="mt-1 text-sm leading-relaxed text-slate-500">
            {{ card.text }}
          </p>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <div class="mb-3 flex items-center justify-between">
        <h2 class="text-[18px] font-bold text-slate-700">
          Skills
        </h2>
        <NuxtLink
          to="/skills"
          class="text-sm font-semibold uppercase tracking-wide text-[#1182c6]"
          >View Skills →</NuxtLink
        >
      </div>
      <div class="grid grid-cols-5 gap-4">
        <article
          class="col-span-2 overflow-hidden rounded bg-[#223040] text-white"
        >
          <img
            src="/stitch/previews/screen-3.png"
            alt="QuantumLedger visual"
            class="h-[320px] w-full object-cover opacity-90"
          />
          <div class="p-3">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-300">
              Featured
            </p>
            <h3 class="text-[16px] font-bold">QuantumLedger v2</h3>
            <p class="text-sm text-slate-300">
              High-throughput distributed transaction protocol.
            </p>
          </div>
        </article>
        <article class="col-span-2 rounded bg-white p-3">
          <img
            src="/stitch/previews/screen-2.png"
            alt="Analytics engine visual"
            class="h-[180px] w-full rounded object-cover"
          />
          <h3 class="mt-2 text-[12px] font-bold text-slate-700">
            Analytics Engine
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            Live dashboards and data pipelines for operations intelligence.
          </p>
          <div class="mt-3 border-t border-slate-100 pt-3">
            <p class="text-sm uppercase tracking-[0.2em] text-[#1182c6]">
              ClusterSync Protocol
            </p>
            <p class="mt-1 text-sm text-slate-500">
              Coordination layer powering high-availability service mesh
              clusters.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <h2 class="text-[18px] font-bold text-slate-700">Latest Log</h2>
      <div class="mt-3 grid grid-cols-3 gap-4">
        <article class="rounded bg-white p-3">
          <p class="text-sm text-slate-500">
            Architecture reflections, production retrospectives, and traces of
            the engineering mindset.
          </p>
          <button
            type="button"
            class="mt-3 rounded border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600"
          >
            View all articles
          </button>
        </article>
        <article
          v-for="log in latestLogs"
          :key="log.title"
          class="col-span-1 rounded bg-white p-3"
        >
          <div
            class="mb-2 flex items-center justify-between text-[7px] uppercase tracking-[0.12em] text-slate-400"
          >
            <span>{{ log.tag }}</span>
            <span>{{ log.date }}</span>
          </div>
          <h3 class="text-md font-semibold leading-relaxed text-slate-700">
            {{ log.title }}
          </h3>
        </article>
      </div>
    </section>

    <footer
      class="flex items-center justify-between border-t border-slate-200 px-6 py-4 text-[7px] uppercase tracking-[0.15em] text-slate-400"
    >
      <p>© 2026 Bibi Aremieye · Senior Full-Stack Engineer</p>
      <div class="flex gap-3">
        <a href="mailto:bibirinbulu.aremieye@gmail.com">Contact</a>
        <a
          href="https://www.linkedin.com/in/bibirinbulu-aremieye-983831175/"
          target="_blank"
          rel="noreferrer"
          >LinkedIn</a
        >
        <a href="https://github.com/Bibi1989" target="_blank" rel="noreferrer"
          >GitHub</a
        >
      </div>
    </footer>
  </main>
</template>
