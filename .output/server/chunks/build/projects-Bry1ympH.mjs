import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as cvExperience } from './cv-B9Ziy4Ou.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-[6px] border-2 border-[#665cff] bg-[#edf1f5] shadow-[0_16px_40px_rgba(0,0,0,0.35)]" }, _attrs))}><section class="px-6 pb-6 pt-10"><p class="text-[8px] uppercase tracking-[0.2em] text-cyan-700">Projects from Professional Experience</p><h1 class="mt-2 text-[46px] font-black leading-[0.95] text-slate-700">Engineered Systems.</h1><p class="mt-3 max-w-[520px] text-[10px] text-slate-500">Selected delivery highlights based on enterprise product work in healthcare, aviation, and education platforms.</p></section><section class="grid grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(cvExperience), (item) => {
        _push(`<article class="overflow-hidden rounded-xl border border-slate-200 bg-white p-6"><span class="mb-2 block text-[9px] uppercase tracking-[0.2em] text-cyan-700">${ssrInterpolate(item.period)}</span><h3 class="text-xl font-bold text-slate-700">${ssrInterpolate(item.company)}</h3><p class="mt-1 text-[10px] text-slate-500">${ssrInterpolate(item.role)} · ${ssrInterpolate(item.location)}</p><div class="my-4 grid grid-cols-2 gap-4"><div><p class="text-[10px] uppercase text-slate-400"> Delivery </p><p class="text-sm text-slate-600">${ssrInterpolate(item.highlights[0])}</p></div><div><p class="text-[10px] uppercase text-slate-400"> Impact </p><p class="text-sm text-slate-600">${ssrInterpolate(item.highlights[1])}</p></div></div><p class="text-xs text-slate-500">${ssrInterpolate(item.highlights[2])}</p></article>`);
      });
      _push(`<!--]--></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-Bry1ympH.mjs.map
