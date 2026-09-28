import { c as lots, f as spaceById, h as stories, m as spaces, t as useLotspace } from "./store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FollowButton, m as relativeDay, s as ROLE_LABEL } from "./router-C7V0OhOG.mjs";
import { t as VerificationSeal } from "./verification-seal-DbeF7mvu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/following-BMmWsi-6.js
var import_jsx_runtime = require_jsx_runtime();
function SpaceCard({ id, followSlot }) {
	const space = spaceById(id);
	if (!space) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "plate overflow-hidden rounded-[12px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/space/$slug",
			params: { slug: space.slug },
			className: "block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-28 overflow-hidden bg-recessed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: space.cover,
						alt: "",
						className: "size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-3 left-3 right-3 text-inverse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-tight",
							children: space.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-inverse/80",
							children: [
								ROLE_LABEL[space.role],
								" · ",
								space.district
							]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-2 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationSeal, {
				tier: space.verification,
				compact: true
			}), followSlot]
		})]
	});
}
function Following() {
	const followed = useLotspace((s) => s.followed);
	const mine = spaces.filter((s) => followed.includes(s.id));
	const feed = [...stories].filter((s) => followed.includes(s.spaceId)).sort((a, b) => a.publishedAt < b.publishedAt ? 1 : -1);
	const discover = spaces.filter((s) => !followed.includes(s.id)).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline-label",
					children: "Following"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight",
					children: "Your relationship graph"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-ink-soft",
					children: "Chronological on purpose. A follow is a relationship signal, not an algorithm subscription."
				})
			] }),
			mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-[12px] bg-recessed px-4 py-8 text-center text-sm",
				children: "Follow one farm. Discovery is cheaper than scrolling."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: mine.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceCard, {
					id: s.id,
					followSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: s.id })
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "From people you chose"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col divide-y divide-hairline rounded-[12px] bg-surface shadow-[var(--shadow-plate)]",
					children: feed.map((s) => {
						const space = spaceById(s.spaceId);
						const lot = s.lotId ? lots.find((l) => l.id === s.lotId) : void 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "px-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										space?.name,
										" · ",
										relativeDay(s.publishedAt)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink-soft",
									children: s.body
								}),
								lot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/lots/$id",
									params: { id: lot.id },
									className: "mt-2 inline-block font-mono text-xs text-oxblood",
									children: lot.code
								}) : null
							]
						}, s.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Discover one more farm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: discover.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceCard, {
					id: s.id,
					followSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: s.id })
				}, s.id))
			})] })
		]
	});
}
//#endregion
export { Following as component };
