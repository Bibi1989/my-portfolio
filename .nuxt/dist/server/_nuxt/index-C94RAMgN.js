import { _ as __nuxt_component_0 } from "./nuxt-link-321BPWqb.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/hookable/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/unctx/dist/index.mjs";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/Users/bibirinbuluaremieye/Documents/portfolio-1/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const screens = [
      { key: "dashboard", href: "/dashboard", image: "/stitch/screenshots/engineering.png", title: "Profile Dashboard", desc: "Full-stack vs frontend vs backend modes." },
      { key: "case", href: "/case-studies", image: "/stitch/screenshots/case-studies.png", title: "Project Case Studies", desc: "Engineered systems — problems and impact." },
      { key: "analytics", href: "/analytics", image: "/stitch/screenshots/analytics.png", title: "Analytics Dashboard", desc: "Contribution density and repo health." },
      { key: "about", href: "/about", image: "/stitch/screenshots/architecture.png", title: "System Architecture", desc: "Chronology, principles, stack depth." },
      { key: "engineering", href: "/engineering", image: "/stitch/screenshots/engineering.png", title: "Engineering Dashboard", desc: "Hero, metrics, feed, proficiency." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-6 py-16" }, _attrs))}><div class="mb-14 max-w-2xl"><p class="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">Portfolio hub</p><h1 class="mb-4 font-headline text-4xl font-black tracking-tighter text-on-surface md:text-6xl"> Senior Full-Stack <span class="text-primary italic">TypeScript</span> Engineer </h1><p class="text-lg leading-relaxed text-on-surface-variant">Case studies, analytics, architecture, and engineering views.</p></div><ul class="grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(screens, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          class: "group block overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container hover:border-primary/30"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="aspect-[16/10] w-full overflow-hidden border-b border-outline-variant/10 bg-surface-container-low"${_scopeId}><img${ssrRenderAttr("src", item.image)} alt="" class="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"${_scopeId}></div><div class="space-y-2 p-6"${_scopeId}><h2 class="font-headline text-xl font-bold text-on-surface group-hover:text-primary"${_scopeId}>${ssrInterpolate(item.title)}</h2><p class="text-sm text-on-surface-variant"${_scopeId}>${ssrInterpolate(item.desc)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "aspect-[16/10] w-full overflow-hidden border-b border-outline-variant/10 bg-surface-container-low" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: "",
                    class: "h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "space-y-2 p-6" }, [
                  createVNode("h2", { class: "font-headline text-xl font-bold text-on-surface group-hover:text-primary" }, toDisplayString(item.title), 1),
                  createVNode("p", { class: "text-sm text-on-surface-variant" }, toDisplayString(item.desc), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C94RAMgN.js.map
