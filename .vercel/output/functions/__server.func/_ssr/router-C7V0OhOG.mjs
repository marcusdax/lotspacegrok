import { i as __toESM } from "../_runtime.mjs";
import { c as lots, d as personas, f as spaceById, h as stories, m as spaces, n as usePersona, t as useLotspace } from "./store-B4gPdKEf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as useNavigate, X as require_jsx_runtime, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, w as useRouter, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as Heart, i as Search, l as Compass, n as TriangleAlert, p as BookOpen, s as LayoutGrid, t as UserRound, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-B8Qmh-aF.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-oxblood text-inverse hover:bg-oxblood-deep",
			navy: "bg-navy text-inverse hover:bg-ink",
			secondary: "bg-surface text-ink shadow-[0_0_0_1px_var(--color-hairline)] hover:bg-hover",
			ghost: "bg-transparent text-ink hover:bg-hover",
			brass: "bg-brass-tint text-brass-text hover:bg-brass-tint/80",
			sage: "bg-sage text-inverse hover:bg-sage-deep",
			danger: "bg-danger text-inverse",
			link: "text-oxblood underline underline-offset-[3px] hover:text-oxblood-deep h-auto px-0"
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-[6px]",
			md: "h-11 px-4 text-sm rounded-[6px]",
			lg: "h-12 px-5 text-base rounded-[8px]",
			icon: "size-11 rounded-[6px]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C7V0OhOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function money(n, digits = 2) {
	return `$${n.toFixed(digits)}`;
}
function score(n) {
	return n.toFixed(2);
}
function kg(n) {
	return `${n.toLocaleString("en-US")} kg`;
}
function hashShort(h) {
	return `${h.slice(0, 8)}…${h.slice(-4)}`;
}
var ROLE_LABEL = {
	farmer: "Smallholder",
	agent: "Field Agent",
	coop: "Cooperative",
	exporter: "Exporter",
	roaster: "Roaster",
	consumer: "Consumer"
};
var TIER_LABEL = {
	self: "Self-declared",
	agent: "Agent-verified",
	audit: "Audit-verified"
};
var STATE_LABEL = {
	draft: "Draft",
	captured: "Agent captured",
	pending: "Pending verification",
	verified: "Verified",
	available: "Available",
	sample_requested: "Sample requested",
	sample_sent: "Sample sent",
	offer: "Offer open",
	negotiation: "Negotiation",
	price_locked: "Price-locked",
	contracted: "Contracted",
	fulfillment: "Fulfillment",
	delivered: "Delivered",
	archived: "Archived"
};
var LOT_STATES = [
	"draft",
	"captured",
	"pending",
	"verified",
	"available",
	"sample_requested",
	"sample_sent",
	"offer",
	"negotiation",
	"price_locked",
	"contracted",
	"fulfillment",
	"delivered",
	"archived"
];
function cupTier(n) {
	if (n >= 90) return "outstanding";
	if (n >= 85) return "excellent";
	if (n >= 80) return "specialty";
	return "below";
}
function relativeDay(iso) {
	const d = new Date(iso);
	const diff = Math.round(((/* @__PURE__ */ new Date("2026-09-27T12:00:00+07:00")).getTime() - d.getTime()) / 864e5);
	if (diff <= 0) return "Today";
	if (diff === 1) return "Yesterday";
	if (diff < 7) return `${diff} days ago`;
	return d.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short"
	});
}
function CompassMark({ className = "size-7" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "2",
				fill: "#1A2332"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 4 L18.2 13.8 L28 16 L18.2 18.2 L16 28 L13.8 18.2 L4 16 L13.8 13.8 Z",
				fill: "#F5F2EB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 6.2 L16.9 14.4 L16 16 L15.1 14.4 Z",
				fill: "#947642"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "2.1",
				fill: "#74362F"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "0.7",
				fill: "#F5F2EB"
			})
		]
	});
}
function CommandSearch() {
	const open = useLotspace((s) => s.searchOpen);
	const setOpen = useLotspace((s) => s.setSearchOpen);
	const [q, setQ] = (0, import_react.useState)("");
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen(!useLotspace.getState().searchOpen);
			}
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [setOpen]);
	const results = (0, import_react.useMemo)(() => {
		const n = q.trim().toLowerCase();
		if (!n) return {
			lots: lots.slice(0, 4),
			spaces: spaces.slice(0, 4)
		};
		return {
			lots: lots.filter((l) => `${l.code} ${l.title} ${l.process} ${l.varietal} ${l.district}`.toLowerCase().includes(n)),
			spaces: spaces.filter((s) => `${s.name} ${s.district} ${s.handle} ${s.role}`.toLowerCase().includes(n))
		};
	}, [q]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-navy/40 px-4 pt-[12vh]",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg overflow-hidden rounded-[12px] bg-surface shadow-[var(--shadow-navy)]",
			onClick: (e) => e.stopPropagation(),
			role: "dialog",
			"aria-label": "Search lots and Spaces",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				autoFocus: true,
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search lots, farms, roasters",
				className: "h-12 w-full border-b border-hairline bg-transparent px-4 text-base outline-none placeholder:text-muted"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-80 overflow-y-auto p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "overline-label px-2 py-2",
						children: "Lots"
					}),
					results.lots.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: cn("flex w-full items-center justify-between rounded-[6px] px-3 py-2.5 text-left text-sm hover:bg-hover"),
						onClick: () => {
							setOpen(false);
							nav({
								to: "/lots/$id",
								params: { id: l.id }
							});
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted",
							children: l.code
						})]
					}, l.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "overline-label px-2 py-2",
						children: "Spaces"
					}),
					results.spaces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-[6px] px-3 py-2.5 text-left text-sm hover:bg-hover",
						onClick: () => {
							setOpen(false);
							nav({
								to: "/space/$slug",
								params: { slug: s.slug }
							});
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: s.district
						})]
					}, s.id))
				]
			})]
		})
	});
}
var nav = [
	{
		to: "/",
		label: "Compass",
		icon: Compass
	},
	{
		to: "/market",
		label: "Market",
		icon: LayoutGrid
	},
	{
		to: "/stories",
		label: "Stories",
		icon: BookOpen
	},
	{
		to: "/following",
		label: "Following",
		icon: Heart
	},
	{
		to: "/me",
		label: "My Space",
		icon: UserRound
	}
];
var more = [
	{
		to: "/messages",
		label: "Messages"
	},
	{
		to: "/agent",
		label: "Agent"
	},
	{
		to: "/cupping",
		label: "Cupping"
	},
	{
		to: "/trust",
		label: "Trust"
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const persona = usePersona();
	const setPersona = useLotspace((s) => s.setPersona);
	const setSearch = useLotspace((s) => s.setSearchOpen);
	const [open, setOpen] = (0, import_react.useState)(false);
	const active = (to) => to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompassMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-tight",
								children: "LotSpace"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-4 hidden items-center gap-1 lg:flex",
							"aria-label": "Primary",
							children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex h-10 items-center gap-2 rounded-[6px] px-3 text-sm", active(item.to) ? "bg-navy text-inverse" : "text-ink-soft hover:bg-hover hover:text-ink"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-4",
									strokeWidth: 1.75
								}), item.label]
							}, item.to)), more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("flex h-10 items-center rounded-[6px] px-3 text-sm", active(item.to) ? "bg-navy text-inverse" : "text-ink-soft hover:bg-hover hover:text-ink"),
								children: item.label
							}, item.to))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "icon",
								"aria-label": "Search",
								onClick: () => setSearch(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "size-4",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex h-11 items-center gap-2 rounded-[6px] bg-surface px-2.5 shadow-[0_0_0_1px_var(--color-hairline)]",
									onClick: () => setOpen((v) => !v),
									"aria-expanded": open,
									"aria-haspopup": "listbox",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hidden text-left sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] uppercase tracking-[0.16em] text-brass-text",
											children: "Viewing as"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block max-w-32 truncate text-sm",
											children: persona.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-ink-soft" })]
								}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-[8px] bg-surface py-1 shadow-[var(--shadow-plate-hover)]",
									role: "listbox",
									children: personas.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: cn("flex w-full flex-col items-start px-3 py-2.5 text-left hover:bg-hover", p.id === persona.id && "bg-recessed"),
										onClick: () => {
											setPersona(p.id);
											setOpen(false);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-ink-soft",
											children: [
												ROLE_LABEL[p.role],
												" · ",
												p.blurb
											]
										})]
									}) }, p.id))
								}) : null]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "mx-auto w-full max-w-6xl px-4 pb-28 pt-6 lg:pb-12",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-canvas/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-5",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-[11px]", active(item.to) ? "text-oxblood" : "text-ink-soft"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-5",
							strokeWidth: 1.75
						}), item.label]
					}) }, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, {})
		]
	});
}
var styles_default = "/assets/styles-CwREuVVg.css";
var APP_NAME = "LotSpace";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "The offer sheet, made social. Every farm a Space, every lot a ledger, every cup a connection."
			},
			{
				name: "theme-color",
				content: "#221E1B"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,560;0,9..144,640;1,9..144,400;1,9..144,560&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-canvas text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "light",
					position: "bottom-right",
					toastOptions: { className: "font-[Archivo] !bg-surface !text-ink !border-hairline" }
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-sPJXTLr7.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./agent-DWPmXofH.mjs");
var Route$10 = createFileRoute("/agent")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./cupping-CMIjqo0h.mjs");
var Route$9 = createFileRoute("/cupping")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./following-BMmWsi-6.mjs");
var Route$8 = createFileRoute("/following")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./market-DF_uWBPF.mjs");
var Route$7 = createFileRoute("/market")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./me-CL8yvi91.mjs");
var Route$6 = createFileRoute("/me")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./messages-Bxykd4eC.mjs");
var Route$5 = createFileRoute("/messages")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
function FollowButton({ spaceId }) {
	const followed = useLotspace((s) => s.followed.includes(spaceId));
	const toggle = useLotspace((s) => s.toggleFollow);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: followed ? "secondary" : "primary",
		size: "sm",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggle(spaceId);
		},
		children: followed ? "Following" : "Follow"
	});
}
var Route$4 = createFileRoute("/stories")({ component: Stories });
function Stories() {
	const ordered = [...stories].sort((a, b) => a.publishedAt < b.publishedAt ? 1 : -1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline-label",
				children: "Stories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Origin, process, proof"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-ink-soft",
				children: "Media keeps its identity. A harvest clip is still a farm, a lot, and a timestamp — not a detached reel."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: ordered.map((s) => {
				const space = spaceById(s.spaceId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "plate overflow-hidden rounded-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: "aspect-[16/9] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overline-label",
									children: s.kind
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: relativeDay(s.publishedAt)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl leading-snug",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-ink-soft",
								children: s.body
							}),
							space ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/space/$slug",
									params: { slug: space.slug },
									className: "text-sm text-oxblood underline-offset-2 hover:underline",
									children: space.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowButton, { spaceId: space.id })]
							}) : null
						]
					})]
				}, s.id);
			})
		})]
	});
}
var $$splitComponentImporter$3 = () => import("./trust-BGuKGxBh.mjs");
var Route$3 = createFileRoute("/trust")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("../_slug-BiSmNwon.mjs");
var Route$2 = createFileRoute("/autopsy/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("../_id-DbaRNCrV.mjs");
var Route$1 = createFileRoute("/lots/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_slug-W3Yj2Aos.mjs");
var Route = createFileRoute("/space/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AgentRoute: Route$10.update({
		id: "/agent",
		path: "/agent",
		getParentRoute: () => Route$12
	}),
	CuppingRoute: Route$9.update({
		id: "/cupping",
		path: "/cupping",
		getParentRoute: () => Route$12
	}),
	FollowingRoute: Route$8.update({
		id: "/following",
		path: "/following",
		getParentRoute: () => Route$12
	}),
	MarketRoute: Route$7.update({
		id: "/market",
		path: "/market",
		getParentRoute: () => Route$12
	}),
	MeRoute: Route$6.update({
		id: "/me",
		path: "/me",
		getParentRoute: () => Route$12
	}),
	MessagesRoute: Route$5.update({
		id: "/messages",
		path: "/messages",
		getParentRoute: () => Route$12
	}),
	StoriesRoute: Route$4.update({
		id: "/stories",
		path: "/stories",
		getParentRoute: () => Route$12
	}),
	TrustRoute: Route$3.update({
		id: "/trust",
		path: "/trust",
		getParentRoute: () => Route$12
	}),
	AutopsySlugRoute: Route$2.update({
		id: "/autopsy/$slug",
		path: "/autopsy/$slug",
		getParentRoute: () => Route$12
	}),
	LotsIdRoute: Route$1.update({
		id: "/lots/$id",
		path: "/lots/$id",
		getParentRoute: () => Route$12
	}),
	SpaceSlugRoute: Route.update({
		id: "/space/$slug",
		path: "/space/$slug",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as _, FollowButton as a, STATE_LABEL as c, hashShort as d, kg as f, Button as g, score as h, Route$2 as i, TIER_LABEL as l, relativeDay as m, Route as n, LOT_STATES as o, money as p, Route$1 as r, ROLE_LABEL as s, router_exports as t, cupTier as u };
