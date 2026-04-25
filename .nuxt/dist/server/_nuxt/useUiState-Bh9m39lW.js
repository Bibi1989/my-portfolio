import { toRef, isRef } from "vue";
import { u as useNuxtApp } from "../server.mjs";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (init) {
    nuxtApp._state[key] ??= { _default: init };
  }
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useUiState() {
  const category = useState("caseCategory", () => "all");
  const analyticsRange = useState("analyticsRange", () => "30d");
  const activityTab = useState("activityTab", () => "commits");
  return { category, analyticsRange, activityTab };
}
function useThemeToggle() {
  const isDark = useState("themeDark", () => false);
  const applyTheme = (dark) => {
    isDark.value = dark;
  };
  return {
    isDark,
    toggleTheme: () => applyTheme(!isDark.value)
  };
}
export {
  useThemeToggle as a,
  useUiState as u
};
//# sourceMappingURL=useUiState-Bh9m39lW.js.map
