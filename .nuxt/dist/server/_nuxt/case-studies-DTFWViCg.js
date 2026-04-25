import { _ as __nuxt_component_0 } from "./PageHeader-BaviRGYY.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
const caseStudies = [
  {
    id: "neural-sync",
    title: "Neural-Sync Core",
    eyebrow: "Live Deployment // V2.4",
    tags: ["RUST", "GRPC"],
    problem: "High-frequency data contention across 128 distributed nodes causing consistency lag.",
    solution: "Lock-free actor model using sharded atomic buffers and ring-buffer propagation.",
    impactLabel: "System Impact",
    impactValue: "Reduced latency by 42%",
    categories: ["all", "architecture", "fullstack"]
  },
  {
    id: "vault-stream",
    title: "Vault.Stream",
    eyebrow: "Open Source // v1.0.4",
    tags: ["GO", "K8S"],
    problem: "Centralized secrets management creating a single point of failure in CI/CD.",
    solution: "Decentralized sidecar injection with zero-knowledge proof verification.",
    impactLabel: "System Impact",
    impactValue: "Zero-Downtime Deployment",
    categories: ["all", "opensource", "fullstack"]
  },
  {
    id: "solaris",
    title: "Solaris Mesh Network",
    eyebrow: "Complex Infrastructure // Case Study",
    tags: ["ELIXIR", "KAFKA", "AWS BARE-METAL"],
    problem: "Processing 1.2M telemetry events per second across non-reliable satellite links with zero data loss requirement.",
    solution: "Built a custom backpressure orchestration layer on top of OTP/GenStage with tiered disk-persisted queues.",
    impactLabel: "Data Throughput",
    impactValue: "1.2M events/sec",
    categories: ["all", "architecture"]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "case-studies",
  __ssrInlineRender: true,
  setup(__props) {
    const { category } = useUiState();
    const filters = [
      { id: "all", label: "All Projects" },
      { id: "architecture", label: "System Architecture" },
      { id: "opensource", label: "Open Source" },
      { id: "fullstack", label: "Full-Stack" }
    ];
    const filtered = computed(
      () => category.value === "all" ? caseStudies : caseStudies.filter((p) => p.categories.includes(category.value))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen max-w-6xl space-y-10 px-6 pb-24 pt-16" }, _attrs))}><section class="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Engineered",
        accent: "Systems."
      }, null, _parent));
      _push(`<div class="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider"><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(category) === f.id ? "bg-primary text-on-primary" : "border border-outline-variant/20 bg-surface-container text-on-surface-variant", "rounded-lg px-4 py-2 font-bold"])}">${ssrInterpolate(f.label)}</button>`);
      });
      _push(`<!--]--></div></section><section class="grid grid-cols-1 gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(filtered), (project) => {
        _push(`<article class="overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container p-8"><span class="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">${ssrInterpolate(project.eyebrow)}</span><h3 class="font-headline text-2xl font-bold text-on-surface">${ssrInterpolate(project.title)}</h3><div class="my-6 grid grid-cols-2 gap-6"><div><p class="text-[10px] uppercase text-on-surface-variant/60">Problem</p><p class="text-sm text-on-surface-variant">${ssrInterpolate(project.problem)}</p></div><div><p class="text-[10px] uppercase text-on-surface-variant/60">Solution</p><p class="text-sm text-on-surface-variant">${ssrInterpolate(project.solution)}</p></div></div><p class="font-mono text-xs text-secondary">${ssrInterpolate(project.impactLabel)}: ${ssrInterpolate(project.impactValue)}</p></article>`);
      });
      _push(`<!--]--></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=case-studies-DTFWViCg.js.map
