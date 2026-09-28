import { c as lots, f as spaceById, h as stories, n as usePersona, u as marketPulse } from "./store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as QrCode, m as ArrowRight, r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as FollowButton, g as Button, m as relativeDay, p as money } from "./router-C7V0OhOG.mjs";
import { r as rankedMarket, t as explainMatch } from "./matching-C27sF5IT.mjs";
import { t as LotCard } from "./lot-card-DZwJ-u3c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-sPJXTLr7.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const persona = usePersona();
	const featured = rankedMarket().slice(0, 3);
	const pulseStory = stories[0];
	const farm = spaceById("sp-mai");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-[16px] bg-navy text-inverse shadow-[var(--shadow-navy)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/highlands.jpg",
						alt: "Mist over arabica highlands in the Central Highlands of Vietnam",
						className: "absolute inset-0 size-full object-cover opacity-55"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "overline-label text-brass",
								children: "Folio 01 — Enter the Lot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em]",
								children: "Every farm a Space. Every lot a ledger. Every cup a connection."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 max-w-lg text-base leading-relaxed text-inverse/80",
								children: [
									"LotSpace is the social face of the Auctum Ledger — a living offer sheet where identity, provenance, and trade share one surface. You are viewing as ",
									persona.name,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/market",
										children: ["Open the market ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									className: "bg-inverse/10 text-inverse hover:bg-inverse/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/autopsy/$slug",
										params: { slug: "mai-washed-0118" },
										children: "Read an Economic Autopsy"
									})
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "grid grid-cols-2 gap-3 self-end",
							children: [
								{
									k: "Verified farms",
									v: String(marketPulse.verifiedFarms)
								},
								{
									k: "Live lots",
									v: String(marketPulse.liveLots)
								},
								{
									k: "Farmgate index",
									v: money(marketPulse.farmgateIndex)
								},
								{
									k: "Season GMV",
									v: `$${marketPulse.gmvSeason}M`
								}
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[8px] bg-inverse/10 px-4 py-3 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overline-label text-brass",
									children: m.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-2xl",
									children: m.v
								})]
							}, m.k))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "plate overflow-hidden rounded-[16px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: farm.cover,
							alt: "",
							className: "h-56 w-full object-cover md:h-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overline-label",
									children: "Featured Space"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl leading-tight",
									children: farm.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-ink-soft",
									children: farm.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid grid-cols-2 gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Farmgate avg"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-mono",
										children: [money(farm.farmgateAvg ?? 0), " / lb"]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Hectares"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: farm.hectares
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: farm.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "secondary",
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/space/$slug",
											params: { slug: farm.slug },
											children: "Open Space"
										})
									})]
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate flex flex-col gap-4 rounded-[16px] p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overline-label",
							children: "Market pulse"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "What is tradable now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-3",
							children: lots.filter((l) => l.state === "available").slice(0, 3).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/lots/$id",
								params: { id: l.id },
								className: "flex items-center justify-between gap-3 rounded-[8px] bg-recessed px-3 py-3 hover:bg-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: l.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted",
									children: l.code
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm",
									children: money(l.farmgate)
								})]
							}) }, l.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/market",
								children: "Match me to lots"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline-label",
					children: "Living offer sheet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "Ranked by fit, not engagement"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/market",
						children: "Full market"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: featured.map((lot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotCard, {
					lot,
					why: explainMatch(lot)
				}, lot.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate rounded-[16px] p-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overline-label",
							children: "Latest story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: pulseStory.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft",
							children: pulseStory.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted",
							children: relativeDay(pulseStory.publishedAt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/stories",
								children: "Stories feed"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative overflow-hidden rounded-[16px] bg-navy p-6 text-inverse",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
							className: "size-8 text-brass",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl",
							children: "Scan becomes a relationship"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-inverse/75",
							children: "Every bag can resolve to face, place, coffee, money, and proof. Tip and follow sit on the same page as the receipt."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "brass",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/autopsy/$slug",
								params: { slug: "mai-washed-0118" },
								children: "Open autopsy"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate flex flex-col gap-4 rounded-[16px] p-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 text-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "One Ledger. Four doors."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-sm text-ink-soft",
						children: "SMS, offline PWA, this social surface, and Field Agents all write to the same verified record. Social objects cannot contradict farmgate."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-muted",
					children: ["IVR/SMS MAU ", marketPulse.smsMau.toLocaleString()]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
