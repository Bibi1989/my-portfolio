import { _ as __nuxt_component_0$1 } from "./nuxt-link-321BPWqb.js";
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { a as useRoute, _ as _export_sfc } from "../server.mjs";
import { a as useThemeToggle, u as useUiState } from "./useUiState-Bh9m39lW.js";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ufo/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/defu/dist/defu.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/hookable/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/unctx/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
const SITE = {
  name: "Bibi Aremieye",
  github: "https://github.com/Bibi1989",
  linkedin: "https://www.linkedin.com/in/bibirinbulu-aremieye-983831175/",
  email: "bibirinbulu.aremieye@gmail.com"
};
const NAV = [
  { href: "/dashboard", label: "Profile" },
  { href: "/case-studies", label: "Projects" },
  { href: "/about", label: "Stack" },
  { href: "/", label: "Archive" },
  { href: "/analytics", label: "Insights" }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useThemeToggle();
    const isActive = (href) => {
      if (href === "/") return route.path === "/";
      return route.path.startsWith(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-primary/15 bg-header-bg shadow-dock backdrop-blur-3xl" }, _attrs))}><nav class="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-3 px-6 py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-headline text-lg font-black tracking-tighter text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(SITE).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(SITE).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden items-center gap-8 font-headline text-sm font-bold tracking-tight md:flex"><!--[-->`);
      ssrRenderList(unref(NAV), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.href,
          to: item.href,
          class: ["transition-all duration-300", isActive(item.href) ? "border-b-2 border-primary pb-1 text-primary" : "text-primary/60 hover:text-primary"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-2"><a${ssrRenderAttr("href", unref(SITE).linkedin)} target="_blank" rel="noreferrer" class="rounded-lg p-2 text-primary hover:bg-primary/10">in</a><a${ssrRenderAttr("href", unref(SITE).github)} target="_blank" rel="noreferrer" class="rounded-lg p-2 text-primary hover:bg-primary/10">gh</a><button type="button" class="rounded-lg p-2 text-primary hover:bg-primary/10">theme</button></div></nav></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "SiteHeader" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ActivityRail",
  __ssrInlineRender: true,
  setup(__props) {
    const { activityTab } = useUiState();
    const tabs = ["commits", "status", "network", "logs"];
    const feeds = {
      commits: [
        { meta: "COMMIT: 7ae91c0", time: "2M AGO", body: "feat: concurrent worker pool for stream processing" },
        { meta: "PR: #452", time: "1H AGO", body: "merged: core architecture redesign (alpha)" }
      ],
      status: [{ meta: "CLUSTER", time: "LIVE", body: "Node Cluster 04: 99.98% efficiency" }],
      network: [{ meta: "LATENCY", time: "4MS", body: "Edge POP — fra1 ↔ iad1" }],
      logs: [{ meta: "AUTH", time: "NOW", body: "Access granted to secure-archive-v2" }]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "fixed right-0 top-0 z-40 hidden h-full w-80 flex-col border-l border-primary/10 bg-surface-container-low xl:flex" }, _attrs))}><div class="border-b border-surface p-6 xl:mt-20"><h3 class="font-headline text-sm font-bold tracking-tight text-secondary">Activity Stream</h3><p class="font-mono text-[10px] uppercase tracking-widest text-primary/40">Real-time technical updates</p></div><div class="space-y-1 p-2 font-mono text-xs"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(activityTab) === tab ? "border-l-2 border-secondary bg-secondary/10 text-secondary" : "text-primary/40 hover:bg-primary/5", "flex w-full items-center gap-3 rounded-md px-4 py-3 text-left transition-colors"])}">${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div><div class="space-y-6 p-6"><!--[-->`);
      ssrRenderList(feeds[unref(activityTab)], (row) => {
        _push(`<div class="space-y-2"><div class="flex justify-between text-[10px] text-primary/30"><span>${ssrInterpolate(row.meta)}</span><span>${ssrInterpolate(row.time)}</span></div><p class="text-sm text-primary/80">${ssrInterpolate(row.body)}</p></div>`);
      });
      _push(`<!--]--></div></aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActivityRail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ActivityRail" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-primary/10 bg-footer-bg" }, _attrs))}><div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-primary/50 sm:flex-row sm:items-center sm:justify-between"><div>© 2026 Bibi Aremieye · Hamburg, Germany</div><div class="flex items-center gap-6"><a${ssrRenderAttr("href", unref(SITE).github)} target="_blank" rel="noreferrer" class="hover:text-secondary">GitHub</a><a${ssrRenderAttr("href", unref(SITE).linkedin)} target="_blank" rel="noreferrer" class="hover:text-secondary">LinkedIn</a><span class="text-secondary">Available for opportunities</span></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "SiteFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SiteHeader = __nuxt_component_0;
  const _component_ActivityRail = __nuxt_component_1;
  const _component_SiteFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background font-body text-on-background selection:bg-primary/30" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_ActivityRail, null, null, _parent));
  _push(`<div class="flex min-h-[calc(100vh-4rem)] flex-col xl:mr-80"><div class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-DoEMBT7_.js.map
