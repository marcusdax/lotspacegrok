import { g as storiesForSpace, l as lotsForSpace, p as spaceBySlug, t as useLotspace } from "./_ssr/store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as FollowButton, g as Button, n as Route, p as money, s as ROLE_LABEL } from "./_ssr/router-C7V0OhOG.mjs";
import { t as VerificationSeal } from "./_ssr/verification-seal-DbeF7mvu.mjs";
import { t as LotCard } from "./_ssr/lot-card-DZwJ-u3c.mjs";
import { t as LedgerChain } from "./_ssr/ledger-chain-DxkKuAoJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-W3Yj2Aos.js
var import_jsx_runtime = require_jsx_runtime();
function SpacePage() {
	const { slug } = Route.useParams();
	const space = spaceBySlug(slug);
	const tips = useLotspace((s) => s.tips);
	if (!space) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-ink-soft",
		children: "This Space is not on the ledger."
	});
	const lots = lotsForSpace(space.id);
	const stories = storiesForSpace(space.id);
	const tipTotal = tips.filter((t) => t.spaceId === space.id).reduce((a, t) => a + t.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-[16px] bg-navy text-inverse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56 md:h-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: space.cover,
							alt: "",
							className: "size-full object-cover opacity-70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "overline-label text-brass",
									children: [
										ROLE_LABEL[space.role],
										" · @",
										space.handle
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 font-display text-4xl tracking-tight",
									children: space.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-inverse/80",
									children: [
										space.district,
										", ",
										space.origin
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSeal, { tier: space.verification }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: space.id })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: space.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-recessed px-3 py-1 text-xs text-ink-soft",
					children: b
				}, b))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Followers",
						value: space.followers.toLocaleString()
					}),
					space.farmgateAvg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Farmgate avg",
						value: `${money(space.farmgateAvg)} / lb`
					}) : null,
					space.hectares ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Hectares",
						value: String(space.hectares)
					}) : null,
					space.members ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Members",
						value: String(space.members)
					}) : null,
					space.agentName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Field Agent",
						value: space.agentName
					}) : null,
					tipTotal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Tips received (you)",
						value: money(tipTotal)
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-base leading-relaxed text-ink-soft",
				children: space.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Lots"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-5 md:grid-cols-2",
				children: [lots.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotCard, { lot: l }, l.id)), lots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No lots published."
				}) : null]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-col gap-3",
					children: stories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "plate rounded-[12px] p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "overline-label",
								children: s.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: s.body
							})
						]
					}, s.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Ledger spine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 plate rounded-[12px] p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerChain, { limit: 4 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trust",
							children: "Full hash chain"
						})
					})
				] })]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] bg-recessed px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "overline-label",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-mono text-lg",
			children: value
		})]
	});
}
//#endregion
export { SpacePage as component };
