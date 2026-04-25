import { _ as __nuxt_component_0$1 } from './nuxt-link-321BPWqb.mjs';
import { mergeProps, defineComponent, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const SITE = {
  name: "Bibi Aremieye",
  github: "https://github.com/Bibi1989",
  linkedin: "https://www.linkedin.com/in/bibirinbulu-aremieye-983831175/",
  email: "bibirinbulu.aremieye@gmail.com"
};
const NAV = [
  { href: "/", label: "Profile" },
  { href: "/skills", label: "Skills" },
  { href: "/experiences", label: "Experience" },
  { href: "/projects", label: "Projects" }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isActive = (href) => {
      if (href === "/") return route.path === "/";
      return route.path.startsWith(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur" }, _attrs))}><nav class="mx-auto flex w-full max-w-[1200px] items-center justify-between px-3 py-2 md:px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-[10px] font-bold tracking-tight text-slate-700"
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
      _push(`<div class="flex items-center gap-4 text-[9px] font-medium text-slate-500"><!--[-->`);
      ssrRenderList(unref(NAV), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.href,
          to: item.href,
          class: ["transition-colors", isActive(item.href) ? "text-slate-800" : "hover:text-slate-700"]
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
      _push(`<!--]--></div><div class="flex items-center gap-2"><span class="text-[10px] text-slate-500">≡</span><a${ssrRenderAttr("href", `mailto:${unref(SITE).email}`)} class="rounded bg-slate-800 px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-white">Resume</a></div></nav></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SiteHeader" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SiteHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#1a1f2b] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:18px_18px] font-body text-slate-800" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
  _push(`<div class="mx-auto w-full max-w-[1200px] p-3 md:p-6">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C-50saej.mjs.map
