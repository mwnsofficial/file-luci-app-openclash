import{r as u,b as g,j as i,i as c,c as f,V as x,h as d}from"./index.1428ab75.js";import{d as h}from"./debounce.c2d20996.js";function v(t,n){if(t==null)return{};var o=_(t,n),r,e;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(e=0;e<s.length;e++)r=s[e],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function _(t,n){if(t==null)return{};var o={},r=Object.keys(t),e,s;for(s=0;s<r.length;s++)e=r[s],!(n.indexOf(e)>=0)&&(o[e]=t[e]);return o}var l=u.exports.forwardRef(function(t,n){var o=t.color,r=o===void 0?"currentColor":o,e=t.size,s=e===void 0?24:e,a=v(t,["color","size"]);return g("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[i("polyline",{points:"23 4 23 10 17 10"}),i("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]})});l.propTypes={color:c.exports.string,size:c.exports.oneOfType([c.exports.string,c.exports.number])};l.displayName="RotateCw";const b=l,y="_rotate_1dspl_1",m="_isRotating_1dspl_5",R="_rotating_1dspl_1",p={rotate:y,isRotating:m,rotating:R};function P(t){const n=t.size||16,o=f(p.rotate,{[p.isRotating]:t.isRotating});return i("span",{className:o,children:i(b,{size:n})})}const{useCallback:w,useState:j,useMemo:O}=d;function T(t){const[,n]=x(t),[o,r]=j(""),e=O(()=>h(n,300),[n]);return[w(a=>{r(a.target.value),e(a.target.value)},[e]),o]}const k="_input_16a1f_1",C={input:k};function $(t){const[n,o]=T(t.textAtom);return i("input",{className:C.input,type:"text",value:o,onChange:n,placeholder:t.placeholder})}export{P as R,$ as T,b as a};
