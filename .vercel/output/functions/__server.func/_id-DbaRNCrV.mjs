import { f as spaceById, s as lotById, t as useLotspace } from "./_ssr/store-B4gPdKEf.mjs";
import { X as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as Bookmark, f as BookmarkCheck } from "./_libs/lucide-react.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { _ as cn, a as FollowButton, c as STATE_LABEL, f as kg, g as Button, h as score, o as LOT_STATES, p as money, r as Route$1 } from "./_ssr/router-C7V0OhOG.mjs";
import { t as Waterfall } from "./_ssr/waterfall-BnOWPZvS.mjs";
import { n as farmgateIsLedgered, t as explainMatch } from "./_ssr/matching-C27sF5IT.mjs";
import { t as CupScore } from "./_ssr/cup-score-DIgPMA5_.mjs";
import { a as PolarGrid, i as PolarRadiusAxis, n as Radar, o as ResponsiveContainer, r as PolarAngleAxis, t as RadarChart } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-DbaRNCrV.js
var import_jsx_runtime = require_jsx_runtime();
var keys = [
	"fragrance",
	"flavor",
	"aftertaste",
	"acidity",
	"body",
	"balance"
];
function CuppingRadar({ sensory }) {
	const data = keys.map((k) => ({
		axis: k[0].toUpperCase() + k.slice(1),
		value: sensory[k]
	}));
	if (!sensory.flavor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Not yet cupped."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
			data,
			cx: "50%",
			cy: "50%",
			outerRadius: "72%",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "#D9D3C9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
					dataKey: "axis",
					tick: {
						fill: "#58514B",
						fontSize: 11,
						fontFamily: "Archivo"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
					angle: 30,
					domain: [6, 9],
					tick: false,
					axisLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
					dataKey: "value",
					stroke: "#74362F",
					fill: "#74362F",
					fillOpacity: .18,
					strokeWidth: 1.5
				})
			]
		}) })
	});
}
var visible = [
	"captured",
	"pending",
	"verified",
	"available",
	"sample_sent",
	"offer",
	"price_locked",
	"contracted",
	"delivered"
];
function LotMachine({ current }) {
	const idx = LOT_STATES.indexOf(current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-wrap gap-1.5",
		children: visible.map((s) => {
			const on = LOT_STATES.indexOf(s) <= idx && idx >= 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: cn("rounded-full px-2.5 py-1 text-[11px]", s === current ? "bg-oxblood text-inverse" : on ? "bg-navy text-inverse" : "bg-recessed text-muted"),
				children: STATE_LABEL[s]
			}, s);
		})
	});
}
function LotPage() {
	const { id } = Route$1.useParams();
	const lot = lotById(id);
	const saved = useLotspace((s) => s.saved.includes(id));
	const toggleSave = useLotspace((s) => s.toggleSave);
	const requestSample = useLotspace((s) => s.requestSample);
	const samples = useLotspace((s) => s.samples);
	const placeOffer = useLotspace((s) => s.placeOffer);
	const offers = useLotspace((s) => s.offers.filter((o) => o.lotId === id));
	if (!lot) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lot not on the ledger." });
	const space = spaceById(lot.spaceId);
	const ledgered = farmgateIsLedgered(lot);
	const sampled = samples.some((s) => s.lotId === lot.id);
	const why = explainMatch(lot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[16px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lot.image,
						alt: "",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-brass-text",
							children: lot.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl tracking-tight",
							children: lot.title
						}),
						space ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/space/$slug",
							params: { slug: space.slug },
							className: "text-sm text-oxblood underline-offset-2 hover:underline",
							children: [
								space.name,
								" · ",
								lot.district
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupScore, {
									value: lot.score,
									size: "lg"
								}),
								lot.braveFew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-brass-tint px-3 py-1 text-xs text-brass-text",
									children: "Brave Few"
								}) : null,
								lot.eudr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-sage-tint px-3 py-1 text-xs text-sage-deep",
									children: "EUDR geolocated"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-danger-tint px-3 py-1 text-xs text-danger",
									children: "EUDR pending"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-recessed px-3 py-1 text-xs",
									children: STATE_LABEL[lot.state]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink-soft",
							children: lot.story
						}),
						why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-l-2 border-oxblood pl-3 text-sm text-ink-soft",
							children: why
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Farmgate",
									value: `${money(lot.farmgate)} / lb`,
									hint: ledgered ? "Ledger-backed" : "Not yet authoritative"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "FOB",
									value: lot.fob ? `${money(lot.fob)} / lb` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Available",
									value: lot.kgAvailable ? kg(lot.kgAvailable) : "Sold through"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Bags",
									value: String(lot.bags)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Varietal",
									value: lot.varietal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Process",
									value: lot.process
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Altitude",
									value: lot.altitude
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									label: "Harvest",
									value: lot.harvest
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								space ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: space.id }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									onClick: () => {
										toggleSave(lot.id);
										toast(saved ? "Removed from saved lots" : "Saved to your taste graph");
									},
									children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), saved ? "Saved" : "Save"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "navy",
									disabled: sampled || lot.state === "pending",
									onClick: () => {
										requestSample(lot.id);
										toast("Sample request written to Samples context");
									},
									children: sampled ? "Sample requested" : "Request sample"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "brass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/autopsy/$slug",
										params: { slug: lot.autopsySlug },
										children: "Economic Autopsy"
									})
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotMachine, { current: lot.state }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate rounded-[12px] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Cupping"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								"Unrounded SCA-style telemetry",
								lot.qGrader ? ` · ${lot.qGrader}` : "",
								lot.score ? ` · composite ${score(lot.score)}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuppingRadar, { sensory: lot.sensory }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: lot.sensory.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-recessed px-2.5 py-1 text-xs",
								children: n
							}, n))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate rounded-[12px] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Price waterfall"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 mt-1 text-xs text-muted",
							children: "Displayed numbers reference receipts. Chat cannot become the price."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, { steps: lot.waterfall })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate rounded-[12px] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-soft",
						children: lot.processNotes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-xs text-muted",
						children: [
							lot.geo.lat.toFixed(3),
							"° N, ",
							lot.geo.lng.toFixed(3),
							"° E"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "plate rounded-[12px] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Place an offer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Structured negotiation only. Free-form text is never the authoritative price."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex flex-wrap gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							const price = Number(fd.get("price"));
							const bags = Number(fd.get("bags"));
							if (!price || !bags) return;
							placeOffer(lot.id, price, bags);
							toast(`Offer ${money(price)} × ${bags} bags recorded`);
							e.currentTarget.reset();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["$/lb", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "price",
									type: "number",
									step: "0.01",
									min: 0,
									defaultValue: lot.farmgate,
									className: "mt-1 block h-11 w-28 rounded-[6px] bg-surface px-3 font-mono shadow-[0_0_0_1px_var(--color-muted)]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: ["Bags", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "bags",
									type: "number",
									min: 1,
									defaultValue: Math.min(5, lot.bags || 1),
									className: "mt-1 block h-11 w-24 rounded-[6px] bg-surface px-3 font-mono shadow-[0_0_0_1px_var(--color-muted)]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "self-end",
								disabled: lot.kgAvailable === 0,
								children: "Record offer"
							})
						]
					}),
					offers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: offers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "font-mono text-ink-soft",
							children: [
								money(o.price),
								" · ",
								o.bags,
								" bags · ",
								o.status
							]
						}, o.id))
					}) : null
				]
			})
		]
	});
}
function Fact({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[8px] bg-recessed px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline-label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-sm",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { LotPage as component };
