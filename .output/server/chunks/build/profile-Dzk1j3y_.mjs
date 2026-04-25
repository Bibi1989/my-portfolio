import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './virtual_public-n6zoYPex.mjs';
import { c as cvProfile } from './cv-B9Ziy4Ou.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-[6px] border-2 border-[#665cff] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]" }, _attrs))}><section class="grid grid-cols-5 gap-5 px-6 pb-8 pt-12"><div class="col-span-3"><p class="mb-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-700">${ssrInterpolate(unref(cvProfile).role)}</p><h1 class="text-[54px] font-black leading-[0.92] tracking-tight text-slate-700"> Precision<br>Engineering in <span class="text-[#1182c6]">JS/TS</span></h1><p class="mt-4 max-w-[340px] text-[10px] leading-relaxed text-slate-500">${ssrInterpolate(unref(cvProfile).summary)}</p><div class="mt-4 flex gap-2"><a class="rounded bg-[#4b5563] px-3 py-2 text-[8px] font-semibold uppercase text-white">View Engineering Blueprint</a><a class="rounded border border-slate-300 bg-white px-3 py-2 text-[8px] font-semibold uppercase text-slate-500">Explore</a></div></div><div class="col-span-2"><img${ssrRenderAttr("src", _imports_0)} alt="Profile preview" class="h-[190px] w-full rounded object-cover shadow-sm"><div class="mt-2 w-fit rounded border border-slate-200 bg-white px-2 py-1 text-[8px] text-slate-500"><p class="font-semibold text-[#1182c6]">${ssrInterpolate(unref(cvProfile).location)}</p><p>${ssrInterpolate(unref(cvProfile).email)}</p></div></div></section><section class="border-t border-slate-200 px-6 py-6"><h2 class="text-[18px] font-bold text-slate-700"> Architectural Foundations </h2><div class="mt-3 grid grid-cols-3 gap-4"><article class="rounded bg-white p-4"><p class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"> ◈ </p><h3 class="mt-1 text-[10px] font-semibold text-slate-700"> Scalable Systems </h3><p class="mt-1 text-[8px] text-slate-500"> Designing modular microservices and enterprise workflows. </p></article><article class="rounded bg-white p-4"><p class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"> ◈ </p><h3 class="mt-1 text-[10px] font-semibold text-slate-700"> Type Safety </h3><p class="mt-1 text-[8px] text-slate-500"> Leveraging strict TypeScript contracts for reliable systems. </p></article><article class="rounded bg-white p-4"><p class="text-[7px] font-semibold uppercase tracking-[0.2em] text-cyan-700"> ◈ </p><h3 class="mt-1 text-[10px] font-semibold text-slate-700"> Performance Audit </h3><p class="mt-1 text-[8px] text-slate-500"> Optimization for low latency APIs and frontend delivery. </p></article></div></section><section class="border-t border-slate-200 px-6 py-6"><div class="mb-3 flex items-center justify-between"><h2 class="text-[18px] font-bold text-slate-700"> Production Artifacts </h2><a class="text-[8px] font-semibold uppercase text-[#1182c6]">Today’s Archive →</a></div><div class="grid grid-cols-5 gap-4"><article class="col-span-2 overflow-hidden rounded bg-[#223040] text-white"><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-[320px] w-full object-cover opacity-90"><div class="p-3"><p class="text-[8px] uppercase tracking-[0.2em] text-slate-300"> Featured </p><h3 class="text-[16px] font-bold">QuantumLedger v2</h3></div></article><article class="col-span-2 rounded bg-white p-3"><img${ssrRenderAttr("src", _imports_2)} alt="" class="h-[180px] w-full rounded object-cover"><h3 class="mt-2 text-[12px] font-bold text-slate-700"> Analytics Engine </h3><p class="mt-1 text-[8px] text-slate-500"> Live dashboards and data pipelines for operations intelligence. </p></article></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-Dzk1j3y_.mjs.map
