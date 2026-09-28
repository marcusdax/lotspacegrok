import { f as spaceById } from "./store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as MapPin } from "../_libs/lucide-react.mjs";
import { _ as cn, c as STATE_LABEL, f as kg, p as money } from "./router-C7V0OhOG.mjs";
import { n as farmgateIsLedgered } from "./matching-C27sF5IT.mjs";
import { t as CupScore } from "./cup-score-DIgPMA5_.mjs";
import { t as VerificationSeal } from "./verification-seal-DbeF7mvu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lot-card-DZwJ-u3c.js
var import_jsx_runtime = require_jsx_runtime();
function LotCard({ lot, why, dense }) {
	const space = spaceById(lot.spaceId);
	const ledgered = farmgateIsLedgered(lot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/lots/$id",
		params: { id: lot.id },
		className: cn("group plate plate-hover block overflow-hidden rounded-[12px] text-left", dense ? "" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/9] overflow-hidden bg-recessed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lot.image,
					alt: "",
					className: "size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-navy/90 px-2 py-1 font-mono text-[11px] text-inverse",
						children: lot.code
					}), lot.braveFew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-brass-tint/95 px-2 py-1 text-[11px] font-medium text-brass-text",
						children: "Brave Few"
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 right-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupScore, {
						value: lot.score,
						size: "sm"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-snug text-ink",
						children: lot.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-sm text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-3.5",
								strokeWidth: 1.75
							}),
							lot.district,
							" · ",
							space?.name
						]
					})] }), space ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSeal, {
						tier: space.verification,
						compact: true
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-3 gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[6px] bg-recessed px-2.5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "overline-label",
								children: "Farmgate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-1 font-mono text-ink",
								children: [money(lot.farmgate), !ledgered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] text-muted",
									children: "indicative"
								}) : null]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[6px] bg-recessed px-2.5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "overline-label",
								children: "Available"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-mono text-ink",
								children: lot.kgAvailable ? kg(lot.kgAvailable) : "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[6px] bg-recessed px-2.5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "overline-label",
								children: "State"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-ink",
								children: STATE_LABEL[lot.state]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ink-soft",
					children: [
						lot.varietal,
						" · ",
						lot.process,
						" · ",
						lot.harvest
					]
				}),
				why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-l-2 border-oxblood pl-3 text-sm text-ink-soft",
					children: why
				}) : null
			]
		})]
	});
}
//#endregion
export { LotCard as t };
