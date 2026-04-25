import { _ as __nuxt_component_0 } from "./PageHeader-BaviRGYY.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-321BPWqb.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ufo/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/defu/dist/defu.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/hookable/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/unctx/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-screen-2xl px-6 py-12 xl:pr-80" }, _attrs))}><section class="mb-16 space-y-6 rounded-xl bg-surface-container-low p-8 md:p-12">`);
  _push(ssrRenderComponent(_component_PageHeader, {
    title: "TypeScript Full-Stack",
    accent: "Engineering Dashboard"
  }, null, _parent));
  _push(`<p class="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant"> Operational view of metrics, activity feed, and capability depth. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: "inline-flex rounded bg-gradient-to-br from-primary to-primary-container px-8 py-3 font-headline font-bold text-on-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Profile dashboard`);
      } else {
        return [
          createTextVNode("Profile dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/engineering.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const engineering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  engineering as default
};
//# sourceMappingURL=engineering-BucGN1d5.js.map
