import { i as __toESM } from "../_runtime.mjs";
import { _ as threads, f as spaceById, t as useLotspace } from "./store-B4gPdKEf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn, g as Button, m as relativeDay } from "./router-C7V0OhOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-Bxykd4eC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Messages() {
	const [active, setActive] = (0, import_react.useState)(threads[0]?.id);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [extra, setExtra] = (0, import_react.useState)({});
	const persona = useLotspace((s) => s.personaId);
	const thread = threads.find((t) => t.id === active) ?? threads[0];
	const mine = extra[thread.id] ?? [];
	const all = [...thread.messages, ...mine];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "overline-label",
			children: "Messages / Deals"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl tracking-tight",
			children: "A thread that can become a trade"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-plate)] lg:grid-cols-[16rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-b border-hairline lg:border-b-0 lg:border-r",
				children: threads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: cn("flex w-full flex-col items-start px-4 py-3 text-left hover:bg-hover", t.id === thread.id && "bg-recessed"),
					onClick: () => setActive(t.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: t.messages.at(-1)?.body.slice(0, 48)
					})]
				}) }, t.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-96 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 border-b border-hairline px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: thread.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: thread.participantIds.map((id) => spaceById(id)?.name).join(" · ")
						})] }), thread.lotId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lots/$id",
								params: { id: thread.lotId },
								children: "Open lot"
							})
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-1 flex-col gap-3 overflow-y-auto p-4",
						children: all.map((m) => {
							const from = spaceById(m.fromId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "max-w-[36rem]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-muted",
									children: [
										from?.name,
										" · ",
										relativeDay(m.at),
										" · ",
										m.kind
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 rounded-[8px] bg-recessed px-3 py-2 text-sm leading-relaxed",
									children: m.body
								})]
							}, m.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex gap-2 border-t border-hairline p-3",
						onSubmit: (e) => {
							e.preventDefault();
							if (!draft.trim()) return;
							const fromId = persona === "farmer" ? "sp-mai" : persona === "agent" ? "sp-bao" : persona === "roaster" ? "sp-karmic" : "sp-linh";
							const msg = {
								id: `x-${Date.now()}`,
								fromId,
								body: draft.trim(),
								at: (/* @__PURE__ */ new Date()).toISOString(),
								kind: "chat"
							};
							setExtra((ex) => ({
								...ex,
								[thread.id]: [...ex[thread.id] ?? [], msg]
							}));
							setDraft("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							className: "h-11 flex-1 rounded-[6px] bg-canvas px-3 text-sm shadow-[0_0_0_1px_var(--color-muted)]",
							placeholder: "Write — prices belong in structured offers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Send"
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Messages as component };
