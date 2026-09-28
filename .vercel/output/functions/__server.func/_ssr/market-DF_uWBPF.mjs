import { i as __toESM } from "../_runtime.mjs";
import { c as lots } from "./store-B4gPdKEf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn } from "./router-C7V0OhOG.mjs";
import { r as rankedMarket, t as explainMatch } from "./matching-C27sF5IT.mjs";
import { t as LotCard } from "./lot-card-DZwJ-u3c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market-DF_uWBPF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var live = [
	"available",
	"sample_requested",
	"sample_sent",
	"offer",
	"negotiation"
];
function Market() {
	const [process, setProcess] = (0, import_react.useState)("all");
	const [onlyLive, setOnlyLive] = (0, import_react.useState)(true);
	const [brave, setBrave] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => {
		return rankedMarket().filter((l) => {
			if (onlyLive && !live.includes(l.state) && l.state !== "price_locked") return false;
			if (process !== "all" && l.process !== process) return false;
			if (brave && !l.braveFew) return false;
			return true;
		});
	}, [
		process,
		onlyLive,
		brave
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "overline-label",
						children: "Market"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight",
						children: "The offer sheet, live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-ink-soft",
						children: "Ranked by availability, fit, freshness, trust, and logistics — never by likes. Every farmgate figure is ledger-backed or labeled as commentary."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-muted",
					children: [
						rows.length,
						" lots · ",
						lots.length,
						" in catalog"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					[
						"all",
						"Washed",
						"Natural",
						"Red honey",
						"Anaerobic natural"
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setProcess(p),
						className: cn("h-10 rounded-full px-4 text-sm", process === p ? "bg-navy text-inverse" : "bg-recessed text-ink-soft hover:bg-hover"),
						children: p === "all" ? "All processes" : p
					}, p)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOnlyLive((v) => !v),
						className: cn("h-10 rounded-full px-4 text-sm", onlyLive ? "bg-oxblood text-inverse" : "bg-recessed text-ink-soft"),
						children: "Tradable"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setBrave((v) => !v),
						className: cn("h-10 rounded-full px-4 text-sm", brave ? "bg-brass-tint text-brass-text" : "bg-recessed text-ink-soft"),
						children: "Brave Few"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: rows.map((lot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotCard, {
					lot,
					why: explainMatch(lot)
				}, lot.id))
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-[12px] bg-recessed px-4 py-8 text-center text-sm text-ink-soft",
				children: "No lots match these constraints. Relax a filter — ranking never invents supply."
			}) : null
		]
	});
}
//#endregion
export { Market as component };
