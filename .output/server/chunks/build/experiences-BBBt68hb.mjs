import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { c as cvProfile, a as cvExperience, b as cvEducation, d as cvLanguages } from './cv-B9Ziy4Ou.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "experiences",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-[6px] border-2 border-[#665cff] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]" }, _attrs))}><section class="grid grid-cols-4 gap-5 px-6 pb-5 pt-8"><div class="col-span-3"><h1 class="text-[62px] font-black leading-[0.9] text-slate-700"> Senior Engineering <br> Architecture. </h1><p class="mt-3 max-w-[360px] text-[10px] text-slate-500">${ssrInterpolate(unref(cvProfile).summary)}</p></div><aside class="space-y-2 rounded bg-white p-3"><p class="text-[8px] uppercase tracking-[0.2em] text-slate-400"> Primary Stack </p><p class="text-[9px] text-slate-600">${ssrInterpolate(unref(cvProfile).role)}</p></aside></section><section class="grid grid-cols-4 gap-4 px-6 pb-6"><div class="col-span-3 rounded bg-white p-4"><h2 class="text-[18px] font-bold text-slate-700">Career Trajectory</h2><div class="mt-3 space-y-4"><!--[-->`);
      ssrRenderList(unref(cvExperience), (item) => {
        _push(`<article class="rounded border border-slate-100 bg-[#f7f9fc] p-3"><div class="mb-2 flex items-center justify-between"><h3 class="text-[11px] font-semibold text-slate-700">${ssrInterpolate(item.role)} · ${ssrInterpolate(item.company)}</h3><span class="text-[8px] uppercase text-slate-400">${ssrInterpolate(item.period)}</span></div><p class="text-[9px] text-slate-500">${ssrInterpolate(item.highlights[0])}</p><div class="mt-2 grid grid-cols-2 gap-2"><p class="rounded bg-white p-2 text-[8px] text-slate-500">${ssrInterpolate(item.highlights[1])}</p><p class="rounded bg-white p-2 text-[8px] text-slate-500">${ssrInterpolate(item.highlights[2])}</p></div></article>`);
      });
      _push(`<!--]--></div></div><aside class="space-y-3"><div class="rounded bg-white p-3"><h3 class="text-[11px] font-semibold text-slate-700"> Network &amp; Reach </h3><div class="mt-2 space-y-2 text-[9px] text-slate-600"><p class="rounded border border-slate-200 px-2 py-1">${ssrInterpolate(unref(cvProfile).email)}</p><p class="rounded border border-slate-200 px-2 py-1">${ssrInterpolate(unref(cvProfile).phone)}</p><p class="rounded border border-slate-200 px-2 py-1">${ssrInterpolate(unref(cvProfile).location)}</p></div></div><div class="rounded bg-slate-700 p-3 text-slate-100"><p class="text-[8px] uppercase tracking-[0.2em] text-cyan-300"> Status </p><h3 class="mt-1 text-[12px] font-semibold"> Available for Consultancy </h3><p class="mt-1 text-[8px] text-slate-300">${ssrInterpolate(unref(cvEducation))} · ${ssrInterpolate(unref(cvLanguages).join(" · "))}</p></div></aside></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experiences.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=experiences-BBBt68hb.mjs.map
