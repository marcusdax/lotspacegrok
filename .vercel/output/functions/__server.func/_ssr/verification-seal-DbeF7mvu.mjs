import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { _ as cn, l as TIER_LABEL } from "./router-C7V0OhOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verification-seal-DbeF7mvu.js
var import_jsx_runtime = require_jsx_runtime();
function VerificationSeal({ tier, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium", tier === "audit" ? "text-sage-deep bg-sage-tint" : tier === "agent" ? "text-brass-text bg-brass-tint" : "text-ink-soft bg-recessed"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
			className: "size-3.5",
			strokeWidth: 1.75
		}), compact ? tier === "audit" ? "Audit" : tier === "agent" ? "Agent" : "Self" : TIER_LABEL[tier]]
	});
}
//#endregion
export { VerificationSeal as t };
