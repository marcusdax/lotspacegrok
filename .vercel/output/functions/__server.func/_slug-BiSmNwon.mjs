import { f as spaceById, i as autopsyBySlug, t as useLotspace } from "./_ssr/store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { a as FollowButton, g as Button, h as score, i as Route$2, p as money } from "./_ssr/router-C7V0OhOG.mjs";
import { t as Waterfall } from "./_ssr/waterfall-BnOWPZvS.mjs";
import { n as farmgateIsLedgered } from "./_ssr/matching-C27sF5IT.mjs";
import { t as VerificationSeal } from "./_ssr/verification-seal-DbeF7mvu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BiSmNwon.js
var import_jsx_runtime = require_jsx_runtime();
function Autopsy() {
	const { slug } = Route$2.useParams();
	const lot = autopsyBySlug(slug);
	const addTip = useLotspace((s) => s.addTip);
	if (!lot) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No autopsy for this QR." });
	const space = spaceById(lot.spaceId);
	const ledgered = farmgateIsLedgered(lot);
	const beats = [
		{
			n: "01",
			t: "Face",
			d: space?.name ?? "Producer"
		},
		{
			n: "02",
			t: "Place",
			d: `${lot.district} · ${lot.origin} · ${lot.harvest}`
		},
		{
			n: "03",
			t: "Coffee",
			d: `${lot.varietal} · ${lot.process}${lot.score ? ` · ${score(lot.score)}` : ""}`
		},
		{
			n: "04",
			t: "Money",
			d: ledgered ? `${money(lot.farmgate)} farmgate, receipt-backed` : "Indicative only"
		},
		{
			n: "05",
			t: "Proof",
			d: lot.eudr ? "EUDR geolocation on file" : "Compliance still open"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-lg flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline-label",
				children: "Economic Autopsy · QR destination"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[16px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lot.image,
					alt: "",
					className: "aspect-[16/10] w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-tight",
				children: lot.title
			}), space ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 flex flex-wrap items-center gap-2 text-sm",
				children: [space.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSeal, {
					tier: space.verification,
					compact: true
				})]
			}) : null] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: beats.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[3rem_1fr] gap-3 rounded-[12px] bg-surface p-4 shadow-[var(--shadow-plate)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-brass-text",
						children: b.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: b.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: b.d
					})] })]
				}, b.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate rounded-[12px] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "The money"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 mt-1 text-xs text-muted",
						children: "A farmgate number without a receipt is commentary."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, { steps: lot.waterfall })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate rounded-[12px] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Reproducibility"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-ink-soft",
								children: "Who grew it?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: space?.name })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-ink-soft",
								children: "How was it processed?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right",
								children: lot.processNotes
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-ink-soft",
								children: "Where, exactly?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-mono",
								children: [
									lot.geo.lat.toFixed(3),
									", ",
									lot.geo.lng.toFixed(3)
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					space ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: space.id }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-2",
						children: [
							3,
							5,
							8,
							12
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "navy",
							onClick: () => {
								if (!space) return;
								addTip(space.id, n, lot.id);
								toast(`Tip ${money(n)} settled · fee ${money(n * .03)}`);
							},
							children: ["Tip ", money(n, 0)]
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted",
						children: "3% rail fee shown at settlement. Idempotent. No ads."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lots/$id",
							params: { id: lot.id },
							children: "Full lot record"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Autopsy as component };
