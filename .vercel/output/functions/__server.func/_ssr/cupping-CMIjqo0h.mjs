import { i as __toESM } from "../_runtime.mjs";
import { a as competition, s as lotById, t as useLotspace } from "./store-B4gPdKEf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn, g as Button, h as score } from "./router-C7V0OhOG.mjs";
import { t as CupScore } from "./cup-score-DIgPMA5_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cupping-CMIjqo0h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var axes = [
	"fragrance",
	"flavor",
	"aftertaste",
	"acidity",
	"body",
	"balance"
];
function Cupping() {
	const votes = useLotspace((s) => s.votes);
	const vote = useLotspace((s) => s.vote);
	const revealed = useLotspace((s) => s.revealedComp);
	const setRevealed = useLotspace((s) => s.setRevealed);
	const [active, setActive] = (0, import_react.useState)(competition[0].id);
	const entry = competition.find((c) => c.id === active);
	const lot = lotById(entry.lotId);
	const tableScore = (0, import_react.useMemo)(() => {
		const vals = axes.map((ax) => votes[`${entry.id}:${ax}`] ?? 7.5);
		return vals.reduce((a, b) => a + b, 0) / vals.length;
	}, [votes, entry.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline-label",
				children: "Reputation · Cupping"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Evidence, not vanity points"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-ink-soft",
				children: "Scores stay unrounded. Competitions are seasonal and tied to discovery — farmers do not “level up” dignity."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "plate rounded-[12px] p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Blind vessels · Harvest season 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: revealed ? "secondary" : "navy",
						onClick: () => setRevealed(!revealed),
						children: revealed ? "Hide identities" : "Reveal after judging"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: competition.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(c.id),
						className: cn("h-10 rounded-full px-4 text-sm", c.id === active ? "bg-navy text-inverse" : "bg-recessed"),
						children: revealed ? lotById(c.lotId)?.code : c.anonymousCode
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							lot.title,
							" ·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lots/$id",
								params: { id: lot.id },
								className: "text-oxblood underline-offset-2 hover:underline",
								children: lot.code
							})
						] }) : "Identity withheld until the table agrees."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-3",
						children: axes.map((ax) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capitalize",
									children: ax
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 6,
									max: 9,
									step: .08,
									value: votes[`${entry.id}:${ax}`] ?? 7.5,
									className: "mt-2 w-full accent-oxblood",
									onChange: (e) => vote(`${entry.id}:${ax}`, Number(e.target.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted",
									children: score(votes[`${entry.id}:${ax}`] ?? 7.5)
								})
							]
						}, ax))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[8px] bg-recessed p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "overline-label",
								children: "Table composite"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-4xl",
								children: score(tableScore)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									"Local table math only. Canonical cupping lives on the lot record",
									revealed ? ` (${score(lot.score)})` : "",
									"."
								]
							}),
							revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupScore, { value: lot.score })
							}) : null
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { Cupping as component };
