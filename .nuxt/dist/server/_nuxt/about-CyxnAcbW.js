import { _ as __nuxt_component_0 } from "./PageHeader-BaviRGYY.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/hookable/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/unctx/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/defu/dist/defu.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-screen-2xl space-y-8 px-6 pb-24 pt-24 xl:pr-80" }, _attrs))}><section class="space-y-6 py-12">`);
  _push(ssrRenderComponent(_component_PageHeader, {
    title: "Building scalable software",
    subtitle: "for regulated systems"
  }, null, _parent));
  _push(`<p class="max-w-3xl text-xl leading-relaxed text-on-surface-variant"> Full-stack engineer with production experience in aviation, healthcare, and cloud-native delivery. </p><p class="max-w-3xl text-sm leading-relaxed text-on-surface-variant"> Education: B.Eng. Mechanical Engineering, Niger Delta University (2006–2012). Languages: English (fluent), German (A2). </p></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-CyxnAcbW.js.map
