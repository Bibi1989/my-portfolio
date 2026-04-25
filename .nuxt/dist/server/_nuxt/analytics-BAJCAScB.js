import { _ as __nuxt_component_0 } from "./PageHeader-BaviRGYY.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { u as useUiState } from "./useUiState-Bh9m39lW.js";
import "../server.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/hookable/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/unctx/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/defu/dist/defu.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const { analyticsRange } = useUiState();
    const rangeIds = ["30d", "90d", "all"];
    const weeks = Array.from({ length: 52 }, (_, i) => i);
    const heatClass = (i, j) => {
      const n = (i * 17 + j * 31) % 11;
      if (n <= 1) return "bg-surface-container";
      if (n <= 3) return "bg-primary/20";
      if (n <= 5) return "bg-primary/40";
      if (n <= 7) return "bg-primary/60";
      if (n <= 9) return "bg-primary/80";
      return "bg-primary";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen max-w-6xl space-y-12 p-6 md:p-12" }, _attrs))}><header class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Living",
        accent: "Work"
      }, null, _parent));
      _push(`<div class="flex rounded-lg bg-surface-container-low p-1"><!--[-->`);
      ssrRenderList(rangeIds, (id) => {
        _push(`<button class="${ssrRenderClass([unref(analyticsRange) === id ? "bg-surface-container-high text-on-surface" : "text-on-surface/40", "rounded-md px-6 py-2 font-mono text-[10px] font-bold"])}">${ssrInterpolate(id)}</button>`);
      });
      _push(`<!--]--></div></header><section class="rounded-xl border-l-4 border-primary bg-surface-container-low p-8"><h2 class="mb-6 font-headline text-2xl font-bold">Contribution Density</h2><div class="grid max-w-full gap-1 overflow-x-auto pb-4" style="${ssrRenderStyle({ "grid-template-columns": "repeat(52, minmax(12px, 1fr))" })}"><!--[-->`);
      ssrRenderList(unref(weeks), (w) => {
        _push(`<div class="flex flex-col gap-1"><!--[-->`);
        ssrRenderList(7, (d) => {
          _push(`<div class="${ssrRenderClass(["h-3 w-3 rounded-sm", heatClass(w, d)])}"></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=analytics-BAJCAScB.js.map
