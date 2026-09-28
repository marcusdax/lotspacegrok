import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn, p as money } from "./router-C7V0OhOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/waterfall-BnOWPZvS.js
var import_jsx_runtime = require_jsx_runtime();
function Waterfall({ steps }) {
	const max = Math.max(...steps.map((s) => s.amount), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col gap-3",
		children: steps.map((step, i) => {
			const last = i === steps.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "grid grid-cols-[1fr_auto] items-end gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-sm", last ? "font-medium text-ink" : "text-ink-soft"),
							children: step.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-ink",
							children: money(step.amount)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: [step.party, step.note ? ` · ${step.note}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-recessed",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("h-full rounded-full", last ? "bg-oxblood" : "bg-navy/70"),
							style: { width: `${Math.max(8, step.amount / max * 100)}%` }
						})
					})
				] })
			}, step.label);
		})
	});
}
//#endregion
export { Waterfall as t };
