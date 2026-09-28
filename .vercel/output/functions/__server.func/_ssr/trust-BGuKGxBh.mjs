import { m as spaces } from "./store-B4gPdKEf.mjs";
import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as TIER_LABEL } from "./router-C7V0OhOG.mjs";
import { t as LedgerChain } from "./ledger-chain-DxkKuAoJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-BGuKGxBh.js
var import_jsx_runtime = require_jsx_runtime();
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline-label",
					children: "Admin / Trust"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight",
					children: "Verification is a language"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-ink-soft",
					children: "Opinions may be posted. Farmgate may not masquerade as ledger truth. Badges mean specific review workflows."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					{
						t: "Self-declared",
						d: "Experience and opinion only. No ledger-backed claim language."
					},
					{
						t: "Agent-verified",
						d: "Captured by a recognized Field Agent, subject to audit."
					},
					{
						t: "Audit-verified",
						d: "Eligible for the strongest provenance and compliance presentation."
					}
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate rounded-[12px] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: x.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: x.d
					})]
				}, x.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Space queue"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-plate)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-recessed text-left text-xs uppercase tracking-wider text-ink-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Space"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Role"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Tier"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Agent"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: spaces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-hairline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: s.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: TIER_LABEL[s.verification]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-ink-soft",
								children: s.agentName ?? "—"
							})
						]
					}, s.id)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate rounded-[12px] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Hash-chained audit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 mt-1 text-sm text-ink-soft",
						children: "Every critical domain action carries actor, object, and previous hash. Nightly WORM export is inherited from the ledger spine."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerChain, {})
				]
			})
		]
	});
}
//#endregion
export { Trust as component };
