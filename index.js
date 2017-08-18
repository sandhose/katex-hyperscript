const h = require("hyperscript");
const katex = require("katex");

const node = katex.renderHyperscript("L", {}, h);

console.log(node.outerHTML);
