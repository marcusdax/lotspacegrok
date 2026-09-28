import { f as spaceById, n as usePersona } from "./store-B4gPdKEf.mjs";
import { S as Navigate, X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/me-CL8yvi91.js
var import_jsx_runtime = require_jsx_runtime();
function Me() {
	const persona = usePersona();
	const space = spaceById(persona.spaceId);
	if (!space) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Space missing." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/space/$slug",
		params: { slug: space.slug }
	});
}
//#endregion
export { Me as component };
