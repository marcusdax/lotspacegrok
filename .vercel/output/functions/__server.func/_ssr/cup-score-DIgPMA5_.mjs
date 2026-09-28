import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn, h as score, u as cupTier } from "./router-C7V0OhOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cup-score-DIgPMA5_.js
var import_jsx_runtime = require_jsx_runtime();
function CupScore({ value, size = "md" }) {
	if (!value) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-mono text-sm text-muted",
		children: "—"
	});
	const tier = cupTier(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-baseline gap-1 rounded-full font-mono font-medium", size === "lg" ? "px-3 py-1.5 text-lg" : size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm", tier === "outstanding" ? "bg-brass-tint text-ink" : tier === "excellent" ? "bg-oxblood text-inverse" : tier === "specialty" ? "bg-sage text-inverse" : "bg-recessed text-ink-soft"),
		children: score(value)
	});
}
//#endregion
export { CupScore as t };
