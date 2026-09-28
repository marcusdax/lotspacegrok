import { o as ledger } from "./store-B4gPdKEf.mjs";
import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as hashShort, m as relativeDay } from "./router-C7V0OhOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ledger-chain-DxkKuAoJ.js
var import_jsx_runtime = require_jsx_runtime();
function LedgerChain({ limit }) {
	const rows = limit ? ledger.slice(-limit).reverse() : [...ledger].reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col",
		children: rows.map((ev, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid grid-cols-[12px_1fr] gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2.5 rounded-full bg-navy" }), i < rows.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-hairline" }) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-brass-text",
						children: ev.type
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-sm text-ink",
						children: [
							ev.actor,
							" · ",
							ev.object
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-[11px] text-muted",
						children: [
							hashShort(ev.hash),
							" · prev ",
							hashShort(ev.prev),
							" · ",
							relativeDay(ev.at)
						]
					})
				]
			})]
		}, ev.id))
	});
}
//#endregion
export { LedgerChain as t };
