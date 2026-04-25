import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    accent: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><h1 class="font-headline text-4xl font-black tracking-tighter text-on-surface md:text-6xl">${ssrInterpolate(__props.title)} `);
      if (__props.accent) {
        _push(`<span class="text-primary italic">${ssrInterpolate(__props.accent)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h1>`);
      if (__props.subtitle) {
        _push(`<p class="max-w-3xl text-base leading-relaxed text-on-surface-variant">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "PageHeader" });
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=PageHeader-BaviRGYY.js.map
