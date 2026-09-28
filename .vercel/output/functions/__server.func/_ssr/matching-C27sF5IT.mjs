import { c as lots } from "./store-B4gPdKEf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/matching-C27sF5IT.js
var CONSUMER_TASTE = [
	"washed",
	"floral",
	"citrus",
	"vietnam"
];
function explainMatch(lot) {
	const reasons = [];
	if (CONSUMER_TASTE.includes(lot.process.toLowerCase())) reasons.push(`you saved ${lot.process.toLowerCase()} lots`);
	if (lot.sensory.notes.some((n) => /blossom|jasmine|floral|bergamot|pomelo|hibiscus/.test(n))) reasons.push("you like floral registers");
	if (lot.origin.toLowerCase().includes("vietnam")) reasons.push("origin interest: Vietnam");
	if (lot.state === "available") reasons.push("this verified lot is available for sampling");
	if (!reasons.length) return null;
	return `Recommended because ${reasons.join(", ")}.`;
}
function rankedMarket() {
	const weight = (lot) => {
		let w = 0;
		if (lot.state === "available") w += 40;
		if (lot.state === "sample_sent") w += 28;
		if (lot.state === "offer") w += 24;
		if (lot.eudr) w += 12;
		if (lot.braveFew) w += 10;
		if (lot.score >= 86) w += 8;
		if (lot.kgAvailable > 0) w += 6;
		if (CONSUMER_TASTE.includes(lot.process.toLowerCase())) w += 10;
		return w;
	};
	return [...lots].sort((a, b) => weight(b) - weight(a));
}
function farmgateIsLedgered(lot) {
	return lot.state !== "pending" && lot.state !== "draft";
}
//#endregion
export { farmgateIsLedgered as n, rankedMarket as r, explainMatch as t };
