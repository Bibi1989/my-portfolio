<script setup lang="ts">
import { cvSkills } from "~/data/cv";
</script>

<template>
  <main
    class="overflow-hidden rounded-[6px] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
  >
    <section class="px-6 pb-6 pt-8">
      <p class="text-sm uppercase tracking-[0.18em] text-slate-400">
        Technical SKILLS
      </p>
      <h1 class="mt-1 text-[56px] font-black leading-[0.92] text-slate-700">
        My
        <span class="text-[#1182c6]">Skills.</span>
      </h1>

      <div class="mt-5 grid grid-cols-2 gap-3">
        <article class="rounded bg-white p-4">
          <p class="text-sm uppercase text-slate-400">01</p>
          <h3 class="mt-1 text-md font-semibold text-slate-700">
            TypeScript Specialist
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            {{ cvSkills.languages.join(", ") }}
          </p>
        </article>
        <article class="rounded bg-white p-4">
          <p class="text-sm uppercase text-slate-400">02</p>
          <h3 class="mt-1 text-md font-semibold text-slate-700">
            Node.js Runtime
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            {{ cvSkills.backend.join(", ") }}
          </p>
        </article>
      </div>

      <div class="mt-3 grid grid-cols-3 gap-3">
        <article class="rounded bg-white p-3">
          <h4 class="text-lg font-semibold text-slate-700">React Framework</h4>
          <p class="mt-1 text-sm text-slate-500">
            {{ cvSkills.frontend.join(", ") }}
          </p>
        </article>
        <article class="rounded bg-white p-3">
          <h4 class="text-lg font-semibold text-slate-700">Tools and Platforms</h4>
          <p class="mt-1 text-sm text-slate-500">
            {{ cvSkills.platforms.join(", ") }}
          </p>
        </article>
        <article class="rounded bg-white p-3">
          <h4 class="text-lg font-semibold text-slate-700">Testing and QA</h4>
          <p class="mt-1 text-sm text-slate-500">
            {{ cvSkills.testing.join(", ") }}
          </p>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 px-6 py-6">
      <h2 class="text-[22px] font-bold text-slate-700">
        Engineering Principles
      </h2>
      <div class="mt-4 grid grid-cols-3 gap-4">
        <article class="rounded bg-white p-3">
          <h3 class="text-lg font-semibold text-slate-700">
            Databases and ORMs
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            Databases: {{ cvSkills.databases.join(", ") }}
          </p>
        </article>
        <article class="rounded bg-white p-3">
          <h3 class="text-lg font-semibold text-slate-700">Methodologies</h3>
          <p class="mt-1 text-sm text-slate-500">
            Methodologies: {{ cvSkills.methodologies.join(", ") }}
          </p>
        </article>
        <article class="rounded bg-white p-3">
          <h3 class="text-lg font-semibold text-slate-700">Frontend Architecture</h3>
          <p class="mt-1 text-sm text-slate-500">
            Frontend architecture focused on UI consistency and accessibility.
          </p>
        </article>
      </div>
      <div class="mt-4 grid grid-cols-2 overflow-hidden rounded bg-[#041038]">
        <aside class="space-y-2 bg-slate-700 p-4 text-slate-100">
          <h3 class="text-[13px] font-semibold">My Skills</h3>
          <p class="text-sm text-slate-300">
            My skills and experiences in the field of software development.
          </p>
          <ul class="space-y-1 pt-2 text-sm">
            <li>• TypeScript Specialist</li>
            <li>• Node.js Runtime</li>
            <li>• React Framework</li>
            <li>• Tools and Platforms</li>
            <li>• Testing and QA</li>
            <li>• Databases and ORMs</li>
            <li>• Methodologies</li>
            <li>• Frontend Architecture</li>
          </ul>
        </aside>
        <div class="relative min-h-[230px]">
          <div
            class="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded border border-cyan-400 bg-cyan-400/15 shadow-[0_0_24px_rgba(34,211,238,0.5)]"
          />
          <span
            class="absolute left-[22%] top-[48%] h-8 w-8 rounded bg-slate-700/80"
          />
          <span
            class="absolute left-[40%] top-[30%] h-8 w-8 rounded bg-slate-700/80"
          />
          <span
            class="absolute left-[67%] top-[45%] h-8 w-8 rounded bg-slate-700/80"
          />
          <span
            class="absolute left-[54%] top-[65%] h-8 w-8 rounded bg-slate-700/80"
          />
        </div>
      </div>
    </section>
  </main>
</template>
