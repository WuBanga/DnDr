var oe=Object.defineProperty,le=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var V=(t,u,n)=>u in t?oe(t,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[u]=n,c=(t,u)=>{for(var n in u||(u={}))X.call(u,n)&&V(t,n,u[n]);if(P)for(var n of P(u))W.call(u,n)&&V(t,n,u[n]);return t},C=(t,u)=>le(t,ie(u));var F=(t,u)=>{var n={};for(var r in t)X.call(t,r)&&u.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&P)for(var r of P(t))u.indexOf(r)<0&&W.call(t,r)&&(n[r]=t[r]);return n};import{j as Y,r as v,u as O,a as de,b as J,L as M,c as he,B as me,R as pe,d as I,e as Ee}from"./vendor.766819b4.js";const Ce=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};Ce();const e=Y.exports.jsx,o=Y.exports.jsxs,ge=()=>e("a",{href:"https://github.com/WuBanga/DnDr/issues",children:e("svg",{width:40,height:40,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 136 133",children:e("path",{fill:"#fff",d:"M67.866.003C30.386.003-.001 30.39-.001 67.878c0 29.987 19.446 55.425 46.417 64.404 3.396.62 4.633-1.475 4.633-3.275 0-1.609-.058-5.88-.091-11.542-18.88 4.1-22.863-9.1-22.863-9.1-3.087-7.842-7.537-9.929-7.537-9.929-6.163-4.208.466-4.125.466-4.125 6.813.48 10.396 6.996 10.396 6.996 6.054 10.37 15.888 7.375 19.754 5.637.617-4.383 2.367-7.375 4.309-9.07-15.071-1.713-30.917-7.538-30.917-33.546 0-7.409 2.646-13.467 6.987-18.213-.7-1.717-3.029-8.617.663-17.962 0 0 5.7-1.825 18.667 6.958a64.833 64.833 0 0116.991-2.283c5.763.025 11.571.775 16.992 2.283 12.958-8.783 18.646-6.958 18.646-6.958 3.704 9.345 1.375 16.245.675 17.962 4.35 4.746 6.979 10.804 6.979 18.213 0 26.075-15.87 31.812-30.992 33.491 2.438 2.096 4.609 6.238 4.609 12.571 0 9.071-.084 16.392-.084 18.617 0 1.816 1.221 3.929 4.667 3.266 26.95-8.995 46.38-34.416 46.38-64.395 0-37.488-30.392-67.875-67.88-67.875"})})}),E={SET:"set",TOGGLE_USED:"toggleUsed",RESET_USED:"resetUsed",TOGGLE_PREPARED:"togglePrepared",UPDATE_HITS:"updateHits",UPDATE_EXTRA_HITS:"updateExtraHits",UPDATE_MONEY:"updateMoney",UPDATE_EXPERIENCE:"updateExperience",UPDATE_LEVEL:"updateLevel",UPDATE_COMMENT:"updateComment"},ve=(t,u)=>{switch(u.type){case E.SET:return u.character;case E.TOGGLE_PREPARED:return De(t,u.spellId);case E.TOGGLE_USED:return Ne(t,u.spellId);case E.RESET_USED:return ye(t);case E.UPDATE_HITS:return xe(t,u.hits);case E.UPDATE_EXTRA_HITS:return Fe(t,u.extraHits);case E.UPDATE_MONEY:return _e(t,u.money);case E.UPDATE_EXPERIENCE:return Be(t,u.experience);case E.UPDATE_LEVEL:return be(t,u.level);case E.UPDATE_COMMENT:return fe(t,u.comment);default:throw new Error(`Unknown action type ${u.type}`)}},fe=(t,u)=>C(c({},t),{comment:u}),be=(t,u)=>C(c({},t),{level:u}),Be=(t,u)=>C(c({},t),{experience:u}),_e=(t,u)=>C(c({},t),{money:u}),Fe=(t,u)=>C(c({},t),{extraHits:u}),xe=(t,u)=>C(c({},t),{hits:u}),De=(t,u)=>C(c({},t),{spells:t.spells.map(n=>n.id===u?C(c({},n),{prepared:!n.prepared}):n)}),ye=t=>C(c({},t),{spells:t.spells.map(u=>C(c({},u),{used:!1}))}),Ne=(t,u)=>C(c({},t),{spells:t.spells.map(n=>n.id===u?C(c({},n),{used:!n.used}):n)}),$=v.exports.createContext(),K="characters",Ae=t=>{const{children:u}=t,[n,r]=v.exports.useState([]),[a,s]=v.exports.useState(!0);return v.exports.useEffect(()=>{setTimeout(()=>{const l=localStorage.getItem(K);l&&r(JSON.parse(l)),s(!1)},2e3)},[]),v.exports.useEffect(()=>{a||localStorage.setItem(K,JSON.stringify(n))},[n,a]),e($.Provider,{value:{characters:n,isLoading:a,setCharacters:r},children:u})},z=()=>{const t=v.exports.useContext($);if(t===void 0)throw new Error("useCharacters \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 CharactersProvider");const u=r=>{t.setCharacters(a=>[r,...a])},n=r=>{t.setCharacters(a=>a.filter(s=>s.id!==r))};return{characters:t.characters,isLoading:t.isLoading,addCharacter:u,deleteCharacter:n}},Q=t=>{const u=v.exports.useContext($);if(u===void 0)throw new Error("useCharacter \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 CharactersProvider");const{characters:n,isLoading:r,setCharacters:a}=u;return{character:n.find(i=>i.id===t),isLoading:r,dispatch:i=>{a(d=>d.map(g=>g.id===t?ve(g,i):g))}}},Te=t=>{const{rules:u}=t,n=a=>{const s={};let l=!1;for(const i of Object.keys(u)){const d=r(i,a[i]);d!==void 0&&(s[i]=d,l=!0)}return l?s:!0},r=(a,s)=>{const l=u[a];if(!!l)for(const i of l){if(i.validate)return i.validate(s)?void 0:i.errorMessage;if(!i.type)throw new Error("Rule type is not provided");if(!Z[i.type])throw new Error(`Unknown rule type: ${i.type}`);if(!Z[i.type](s))return i.errorMessage}};return{getErrorMessage:r,validate:n}},Z={required:t=>!(t===void 0||t==="")},Le=()=>e("p",{style:{color:"var(--red-color)"},children:"*"});const f=t=>{const d=t,{type:u="button",className:n,as:r,color:a}=d,s=F(d,["type","className","as","color"]),l=["button"];let i="button";switch(a){case"red":l.push("button--red");break;case"green":l.push("button--green");break}return r!==void 0&&(i=r),n&&l.push(n),e(i,c({className:l.join(" "),type:u},s))},ee=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 12H6"})}),H=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})});const T=t=>{const s=t,{icon:u,className:n}=s,r=F(s,["icon","className"]),a=["icon-button"];return n&&a.push(n),e("button",C(c({type:"button"},r),{className:a.join(" "),children:u?e("div",{className:"icon-button__icon",children:u}):null}))};const U=t=>{const a=t,{left:u,right:n}=a,r=F(a,["left","right"]);return o("div",{className:"input-container",children:[u,e("input",c({className:"input focusable",autocomplete:"off"},r)),n]})};const x=t=>{const{children:u}=t;return e("ul",{className:"list",children:u})},D=t=>{const{left:u,right:n,children:r}=t;return o("li",{className:"list-item",children:[u,e("div",{className:"list-text",children:r}),n]})},Se=t=>{const{cantrips:u=[],setCharacter:n}=t,[r,a]=v.exports.useState(""),s=()=>{r.length!==0&&(i(u.concat(r)),a(""))},l=d=>{i(u.slice(0,d).concat(u.slice(d+1)))},i=d=>{n(g=>C(c({},g),{cantrips:d}))};return o("div",{children:[o("div",{className:"list-add",children:[e("label",{htmlFor:"cantrips",children:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u044B:"}),e(U,{type:"text",name:"cantrips",value:r,onChange:d=>a(d.target.value),right:e(T,{icon:e(H,{}),onClick:s})})]}),e(x,{children:u.map((d,g)=>e(D,{right:e(T,{icon:e(ee,{}),onClick:S=>l(g)}),children:d},d))})]})};const ue=t=>{const{children:u}=t;return e("div",{className:"form-control",children:u})};const ke=t=>e("p",c({className:"error"},t));const G=t=>e("label",c({className:"label"},t)),p=t=>{const s=t,{name:u,label:n,error:r}=s,a=F(s,["name","label","error"]);return o(ue,{children:[e(G,{htmlFor:u,children:n}),e(U,c({name:u},a)),r?e(ke,{children:r}):null]})},te=()=>window.crypto.randomUUID();const we=t=>{const{spells:u=[],setCharacter:n}=t,[r,a]=v.exports.useState(""),s=()=>{r.length!==0&&(i(u.concat({id:te(),name:r,prepared:!1,used:!1})),a(""))},l=d=>{i(u.filter(g=>g.id!==d))},i=d=>{n(g=>C(c({},g),{spells:d}))};return o("div",{children:[o("div",{className:"list-add",children:[e("label",{htmlFor:"spells",children:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F:"}),e(U,{type:"text",name:"spells",value:r,onChange:d=>a(d.target.value),right:e(T,{icon:e(H,{}),onClick:s})})]}),e(x,{children:u.map(d=>e(D,{right:e(T,{icon:e(ee,{}),onClick:g=>l(d.id)}),children:d.name},d.id))})]})};const re=t=>e("textarea",c({className:"text-area focusable"},t)),Pe=t=>{const{name:u,value:n,onChange:r,label:a}=t;return o(ue,{children:[e(G,{htmlFor:u,children:a}),e(re,{name:u,value:n,onChange:r})]})};const ne={name:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0418\u043C\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],race:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0420\u0430\u0441\u0430" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],class:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041A\u043B\u0430\u0441\u0441" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],worldview:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],languages:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u042F\u0437\u044B\u043A\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],prehistory:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],savingThrows:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0421\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}]},Me={name:"",race:"",class:"",worldview:"",languages:"",prehistory:"",savingThrows:"",skills:"",equipment:"",spells:[],cantrips:[],strength:0,wisdom:0,dexterity:0,intelligence:0,charisma:0,hits:8,skillBonus:0,money:10,experience:0,level:1,extraHits:0,speed:30,constitution:1,comment:""},ae=t=>{const{initial:u,onSubmit:n}=t,[r,a]=v.exports.useState(u!=null?u:Me),[s,l]=v.exports.useState({}),[i,d]=v.exports.useState(!1),{validate:g}=Te({rules:ne}),S=N=>{N.preventDefault(),d(!0);const b=g(r);if(b!==!0){l(b);return}l({}),n(r)},m=N=>{var q;const j=N,{name:b,label:A,type:k="text"}=j,R=F(j,["name","label","type"]);return c({name:b,label:((q=ne[b])==null?void 0:q.some(_=>_.type==="required"))?o(v.exports.Fragment,{children:[A,e(Le,{})]}):A,type:k,value:r[b],onChange:_=>{let w;"target"in _?k==="number"?w=_.target.valueAsNumber:w=_.target.value:w=_,a(ce=>C(c({},ce),{[b]:w}))},error:s[b]},R)};return o("form",{className:"character-editor",onSubmit:S,children:[o("section",{className:"section",children:[e("h1",{children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"}),e(p,c({},m({name:"name",label:"\u0418\u043C\u044F"}))),e(p,c({},m({name:"race",label:"\u0420\u0430\u0441\u0430"}))),e(p,c({},m({name:"class",label:"\u041A\u043B\u0430\u0441\u0441"}))),e(p,c({},m({name:"speed",label:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",type:"number",min:0}))),e(p,c({},m({name:"worldview",label:"\u041C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435"}))),e(p,c({},m({name:"languages",label:"\u042F\u0437\u044B\u043A\u0438"}))),e(p,c({},m({name:"prehistory",label:"\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F"})))]}),o("section",{className:"section",children:[e("h1",{children:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),e(p,c({},m({name:"strength",label:"\u0421\u0438\u043B\u0430",type:"number",min:0}))),e(p,c({},m({name:"wisdom",label:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",type:"number",min:0}))),e(p,c({},m({name:"dexterity",label:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",type:"number",min:0}))),e(p,c({},m({name:"intelligence",label:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",type:"number",min:0}))),e(p,c({},m({name:"charisma",label:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430",type:"number",min:0}))),e(p,c({},m({name:"constitution",label:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",type:"number",min:1}))),e(p,c({},m({name:"hits",label:"\u0425\u0438\u0442\u044B (\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435)",type:"number",min:1}))),e(p,c({},m({name:"skillBonus",label:"\u0411\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430",type:"number"})))]}),o("section",{className:"section",children:[e("h1",{children:"\u041A\u043B\u0430\u0441\u0441\u043E\u0432\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),e(p,c({},m({name:"savingThrows",label:"\u0421\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438"}))),e(p,c({},m({name:"skills",label:"\u041D\u0430\u0432\u044B\u043A\u0438"}))),e(p,c({},m({name:"equipment",label:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435"}))),e(we,{spells:r.spells,setCharacter:a}),e(Se,{cantrips:r.cantrips,setCharacter:a})]}),o("section",{className:"section",children:[e("h1",{children:"\u0414\u0440\u0443\u0433\u043E\u0435"}),e(p,c({},m({name:"money",label:"\u0414\u0435\u043D\u044C\u0433\u0438",type:"number",min:0,step:.01}))),e(p,c({},m({name:"experience",label:"\u041E\u043F\u044B\u0442",type:"number",min:0}))),e(p,c({},m({name:"level",label:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",type:"number",min:1}))),e(p,c({},m({name:"extraHits",label:"\u0414\u043E\u043F.\u0445\u0438\u0442\u044B",type:"number"}))),e(Pe,c({},m({name:"comment",label:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"})))]}),e("div",{className:"buttons",children:e(f,{type:"submit",disabled:i,children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})})]})},Ie=()=>{const{addCharacter:t}=z(),u=O();return e(ae,{onSubmit:r=>{const a=te();r.id=a,t(r),u(`/${r.id}/game`)}})},L=t=>{const{label:u,name:n,step:r,value:a,onChange:s,min:l}=t;return o("div",{children:[e("label",{htmlFor:n,children:u}),e(U,{name:n,type:"number",step:r,value:a,min:l,onChange:i=>s(i.target.valueAsNumber)})]})},B=t=>{const{className:u,title:n,text:r}=t;return o("div",{className:u,children:[e("h1",{children:n}),e("p",{children:r})]})},y=t=>{const{title:u,value:n}=t,r=Ue(n);return o("div",{children:[e("h1",{children:u}),o("div",{children:[e("p",{children:n}),o("p",{children:["(",r>=0?"+":null,r,")"]})]})]})},Ue=t=>Math.floor((t-10)/2);const Re=t=>{const{isChecked:u,onCheck:n}=t;return e("input",{className:"checkbox",type:"checkbox",checked:u,onChange:n})},Oe=t=>{const{spells:u=[],onChange:n}=t,r=a=>{n(a)};return e(x,{children:u.map(a=>e(D,{left:e(Re,{isChecked:a.used,onCheck:()=>r(a.id)}),children:a.used?e("p",{children:e("strike",{children:a.name})}):e("p",{children:a.name})},a.id))})},$e=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})});const se=t=>{const{title:u,isOpen:n,onClose:r,children:a}=t;return n?de.exports.createPortal(e("div",{className:"modal-overlay",onClick:r,children:o("div",{className:"modal",onClick:s=>s.stopPropagation(),children:[o("div",{className:"modal__header",children:[e("h1",{children:u}),e(T,{icon:e($e,{}),onClick:r})]}),e("div",{className:"modal__content",children:a})]})}),document.body):null};const He=()=>{const t=J(),{character:u,isLoading:n,dispatch:r}=Q(t.characterId),[a,s]=v.exports.useState(!1);if(n)return e("div",{children:"Loading..."});const l=h=>{r({type:E.UPDATE_COMMENT,comment:h})},i=h=>{r({type:E.UPDATE_HITS,hits:h})},d=h=>{r({type:E.UPDATE_EXTRA_HITS,extraHits:h})},g=h=>{r({type:E.UPDATE_MONEY,money:h})},S=h=>{r({type:E.UPDATE_EXPERIENCE,experience:h})},m=h=>{r({type:E.UPDATE_LEVEL,level:h})},N=()=>{r({type:E.RESET_USED})},b=h=>{r({type:E.TOGGLE_USED,spellId:h})},A=h=>{r({type:E.TOGGLE_PREPARED,spellId:h})},k=()=>{s(!1)},R=()=>{s(!0)};return o("div",{className:"game",children:[o(se,{title:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",isOpen:a,onClose:k,children:[o("div",{children:[e("p",{children:"\u0412\u0441\u0435:"}),e(x,{children:u.spells.map(h=>e(D,{left:e(f,{onClick:()=>A(h.id),children:"+"}),children:h.name},h.id))})]}),o("div",{children:[e("p",{children:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435:"}),e(x,{children:u.spells.filter(h=>h.prepared===!0).map(h=>e(D,{left:e(f,{onClick:()=>A(h.id),children:"-"}),children:h.name},h.id))})]})]}),o("div",{className:"game__left-column",children:[o("section",{className:"game__character-info game__group",children:[o("div",{className:"game__left-column",children:[e("h1",{className:"game__character-name",children:u.name}),e("h2",{className:"game__character-subinfo",children:u.race}),e("h2",{className:"game__character-subinfo",children:u.class})]}),o("div",{className:"game__right-column",children:[e(B,{title:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",text:u.speed}),e(B,{title:"\u042F\u0437\u044B\u043A\u0438",text:u.languages}),e(B,{title:"\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F",text:u.prehistory})]})]}),o("section",{className:"game__character-stats game__group",children:[e(y,{title:"\u0421\u0438\u043B\u0430",value:u.strength}),e(y,{title:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",value:u.wisdom}),e(y,{title:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",value:u.dexterity}),e(y,{title:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",value:u.intelligence}),e(y,{title:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430",value:u.charisma}),e(y,{title:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",value:u.constitution}),e(B,{className:"game__character-oneline-stat",title:"\u0411\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430",text:`${u.skillBonus>=0?"+":"-"}${u.skillBonus}`}),e(L,{label:"\u0425\u0438\u0442\u044B (\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435)",name:"hits",value:u.hits,onChange:i}),e(L,{label:"\u0414\u043E\u043F.\u0445\u0438\u0442\u044B",name:"extraHits",value:u.extraHits,onChange:d})]}),o("section",{className:"game__character-other game__group",children:[e(L,{label:"\u0414\u0435\u043D\u044C\u0433\u0438",name:"money",step:.01,value:u.money,onChange:g}),e(L,{label:"\u041E\u043F\u044B\u0442",name:"experience",value:u.experience,onChange:S}),e(L,{label:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",name:"level",value:u.level,onChange:m}),o("div",{className:"game__comment game__character-oneline-stat",children:[e(G,{htmlFor:"comment",children:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),e(re,{name:"comment",value:u.comment,onChange:l})]})]})]}),o("div",{className:"game__right-column",children:[o("section",{children:[e(B,{title:"C\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438",text:u.savingThrows}),e(B,{title:"\u041D\u0430\u0432\u044B\u043A\u0438",text:u.skills}),e(B,{title:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",text:u.equipment})]}),o("section",{children:[o("div",{className:"game__character-spells",children:[e("h1",{children:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F"}),e(f,{onClick:R,children:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C"}),e(f,{onClick:N,children:"\u0421\u0431\u0440\u043E\u0441"})]}),e(Oe,{spells:u.spells.filter(h=>h.prepared===!0),onChange:b})]}),o("section",{children:[e("h1",{children:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u044B"}),e(x,{children:u.cantrips.map(h=>e(D,{children:h},h))})]}),e(M,{to:`/${u.id}/update`,children:e(f,{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"})})]})]})};const Ge=t=>{const{title:u,text:n,submitText:r,cancelText:a,isOpen:s,onClose:l,onSubmit:i,onCancel:d}=t;return e(se,{title:u,isOpen:s,onClose:l,children:o("div",{className:"submit-modal",children:[e("p",{className:"submit-modal__text",children:n}),o("div",{className:"submit-modal__buttons",children:[e(f,{color:"red",onClick:i,children:r}),e(f,{onClick:d,children:a})]})]})})};const je=t=>{const{character:u,onDelete:n}=t,[r,a]=v.exports.useState(!1),s=()=>{a(!1)},l=()=>{a(!0)};return o("div",{className:"character-card",children:[e(Ge,{title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",text:`\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430 ${u.name}?`,submitText:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",cancelText:"\u041E\u0442\u043C\u0435\u043D\u0430",isOpen:r,onClose:s,onSubmit:n,onCancel:s}),o("div",{className:"character-card__info",children:[e("h1",{className:"character-card__name",children:u.name}),e("p",{className:"character-card__text",children:u.race}),e("p",{className:"character-card__text",children:u.class})]}),o("div",{className:"character-card__buttons",children:[e(f,{className:"character-card__button",as:M,to:`/${u.id}/update`,children:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}),e(f,{className:"character-card__button",as:M,to:`/${u.id}/game`,children:"\u0418\u0433\u0440\u0430\u0442\u044C"}),e(f,{className:"character-card__button",color:"red",onClick:l,children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"})]})]})},qe=()=>e(M,{to:"/create",className:"character-card",children:e("div",{className:"character-card__plus",children:e(H,{})})});const Xe=()=>{const{characters:t,isLoading:u,deleteCharacter:n}=z();return u?e("div",{children:"Loading..."}):o("div",{className:"home",children:[t.map(r=>e(je,{character:r,onDelete:()=>n(r.id)},r.id)),e(qe,{})]})},We=()=>{const t=J(),u=O(),{character:n,isLoading:r,dispatch:a}=Q(t.characterId),s=l=>{a({type:E.SET,character:l}),u(`/${n.id}/game`)};if(!r)return e(ae,{initial:n,onSubmit:s})},Ve=()=>{const[t]=he(),u=t.get("path"),n=O();return u&&n(u),o(me,{basename:"/DnDr",children:[e(Ae,{children:e("main",{className:"app",children:o(pe,{children:[e(I,{path:"/",element:e(Xe,{})}),e(I,{path:"/create",element:e(Ie,{})}),e(I,{path:"/:characterId/update",element:e(We,{})}),e(I,{path:"/:characterId/game",element:e(He,{})})]})})}),e("footer",{className:"footer",children:e(ge,{})})]})};Ee.render(e(Ve,{}),document.getElementById("root"));
