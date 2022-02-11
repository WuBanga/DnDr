var ee=Object.defineProperty,ue=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var q=(t,e,r)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))V.call(e,r)&&q(t,r,e[r]);if(L)for(var r of L(e))G.call(e,r)&&q(t,r,e[r]);return t},g=(t,e)=>ue(t,te(e));var P=(t,e)=>{var r={};for(var n in t)V.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&L)for(var n of L(t))e.indexOf(n)<0&&G.call(t,n)&&(r[n]=t[n]);return r};import{j,r as C,u as J,L as I,B as re,R as ne,a as U,b as ae}from"./vendor.bf6ee3aa.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};se();const le=t=>{const{rules:e}=t,r=a=>{const l={};let h=!1;for(const o of Object.keys(e)){const m=n(o,a[o]);m!==void 0&&(l[o]=m,h=!0)}return h?l:!0},n=(a,l)=>{const h=e[a];if(!!h)for(const o of h){if(o.validate)return o.validate(l)?void 0:o.errorMessage;if(!o.type)throw new Error("Rule type is not provided");if(!X[o.type])throw new Error(`Unknown rule type: ${o.type}`);if(!X[o.type](l))return o.errorMessage}};return{getErrorMessage:n,validate:r}},X={required:t=>!(t===void 0||t==="")};const u=j.exports.jsx,c=j.exports.jsxs,f=t=>{const{type:e="button",children:r,onClick:n,className:a}=t,l=["button"];return a&&l.push(a),u("button",{className:l.join(" "),type:e,onClick:n,children:r})};const k=t=>{const a=t,{left:e,right:r}=a,n=P(a,["left","right"]);return c("div",{className:"input-container",children:[e,u("input",s({className:"input focusable"},n)),r]})};const y=t=>{const{children:e}=t;return u("ul",{className:"list",children:e})},_=t=>{const{left:e,right:r,children:n}=t;return c("li",{className:"list-item",children:[e,u("div",{className:"list-text",children:n}),r]})},ce=t=>{const{cantrips:e=[],setCharacter:r}=t,[n,a]=C.exports.useState(""),l=()=>{n.length!==0&&(o(e.concat(n)),a(""))},h=m=>{o(e.slice(0,m).concat(e.slice(m+1)))},o=m=>{r(i=>g(s({},i),{cantrips:m}))};return c("div",{children:[c("div",{className:"list-add",children:[u("label",{htmlFor:"cantrips",children:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u044B:"}),u(k,{type:"text",name:"cantrips",value:n,onChange:m=>a(m.target.value),right:u(f,{onClick:l,children:"+"})})]}),u(y,{children:e.map((m,i)=>u(_,{right:u(f,{onClick:b=>h(i),children:"-"}),children:m},m))})]})};const Y=t=>{const{children:e}=t;return u("div",{className:"form-control",children:e})};const ie=t=>u("p",s({className:"error"},t)),R=t=>u("label",s({},t)),p=t=>{const l=t,{name:e,label:r,error:n}=l,a=P(l,["name","label","error"]);return c(Y,{children:[u(R,{htmlFor:e,children:r}),u(k,s({name:e},a)),n?u(ie,{children:n}):null]})},K=()=>window.crypto.randomUUID();const oe=t=>{const{spells:e=[],setCharacter:r}=t,[n,a]=C.exports.useState(""),l=()=>{n.length!==0&&(o(e.concat({id:K(),name:n,prepared:!1,used:!1})),a(""))},h=m=>{o(e.filter(i=>i.id!==m))},o=m=>{r(i=>g(s({},i),{spells:m}))};return c("div",{children:[c("div",{className:"list-add",children:[u("label",{htmlFor:"spells",children:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F:"}),u(k,{type:"text",name:"spells",value:n,onChange:m=>a(m.target.value),right:u(f,{onClick:l,children:"+"})})]}),u(y,{children:e.map(m=>u(_,{right:u(f,{onClick:i=>h(m.id),children:"-"}),children:m.name},m.id))})]})};const z=t=>u("textarea",s({className:"text-area focusable"},t)),de=t=>{const{name:e,value:r,onChange:n,label:a}=t;return c(Y,{children:[u(R,{htmlFor:e,children:a}),u(z,{name:e,value:r,onChange:n})]})};const me={name:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0418\u043C\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],race:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0420\u0430\u0441\u0430" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],class:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041A\u043B\u0430\u0441\u0441" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],wisdom:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],languages:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u042F\u0437\u044B\u043A\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],prehistory:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}],savingThrows:[{type:"required",errorMessage:'\u041F\u043E\u043B\u0435 "\u0421\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C'}]},Q=t=>{const{initial:e,onSubmit:r}=t,[n,a]=C.exports.useState(e!=null?e:{}),[l,h]=C.exports.useState({}),{validate:o}=le({rules:me}),m=b=>{b.preventDefault();const v=o(n);if(v!==!0){h(v);return}h({}),r(n)},i=b=>{var H;const d=b,{name:v,label:M,type:x="text",defaultValue:A=""}=d,O=P(d,["name","label","type","defaultValue"]);return s({name:v,label:M,type:x,value:(H=n[v])!=null?H:A,onChange:S=>{let T;"target"in S?x==="number"?T=S.target.valueAsNumber:T=S.target.value:T=S,a(Z=>g(s({},Z),{[v]:T}))},error:l[v]},O)};return c("form",{className:"character-editor",onSubmit:m,children:[c("section",{className:"section",children:[u("h1",{children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"}),u(p,s({},i({name:"name",label:"\u0418\u043C\u044F"}))),u(p,s({},i({name:"race",label:"\u0420\u0430\u0441\u0430"}))),u(p,s({},i({name:"class",label:"\u041A\u043B\u0430\u0441\u0441"}))),u(p,s({},i({name:"speed",label:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",defaultValue:30,type:"number",min:0}))),u(p,s({},i({name:"worldview",label:"\u041C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435"}))),u(p,s({},i({name:"languages",label:"\u042F\u0437\u044B\u043A\u0438"}))),u(p,s({},i({name:"prehistory",label:"\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F"})))]}),c("section",{className:"section",children:[u("h1",{children:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),u(p,s({},i({name:"strength",label:"\u0421\u0438\u043B\u0430",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"wisdom",label:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"dexterity",label:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"intelligence",label:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"charisma",label:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"constitution",label:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",defaultValue:1,type:"number",min:1}))),u(p,s({},i({name:"hits",label:"\u0425\u0438\u0442\u044B(\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435)",defaultValue:8,type:"number",min:1}))),u(p,s({},i({name:"skillBonus",label:"\u0411\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430",defaultValue:0,type:"number"})))]}),c("section",{className:"section",children:[u("h1",{children:"\u041A\u043B\u0430\u0441\u0441\u043E\u0432\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),u(p,s({},i({name:"savingThrows",label:"\u0421\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438"}))),u(p,s({},i({name:"skills",label:"\u041D\u0430\u0432\u044B\u043A\u0438"}))),u(p,s({},i({name:"equipment",label:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435"}))),u(oe,{spells:n.spells,setCharacter:a}),u(ce,{cantrips:n.cantrips,setCharacter:a})]}),c("section",{className:"section",children:[u("h1",{children:"\u0414\u0440\u0443\u0433\u043E\u0435"}),u(p,s({},i({name:"money",label:"\u0414\u0435\u043D\u044C\u0433\u0438",defaultValue:10,type:"number",min:0,step:.01}))),u(p,s({},i({name:"experience",label:"\u041E\u043F\u044B\u0442",defaultValue:0,type:"number",min:0}))),u(p,s({},i({name:"level",label:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",defaultValue:1,type:"number",min:1}))),u(p,s({},i({name:"extraHits",label:"\u0414\u043E\u043F.\u0445\u0438\u0442\u044B",defaultValue:0,type:"number"}))),u(de,s({},i({name:"comment",label:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"})))]}),u("div",{className:"buttons",children:u(f,{type:"submit",children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})})]})},B="characters",$=()=>{const[t,e]=C.exports.useState([]),[r,n]=C.exports.useState(!0);return C.exports.useEffect(()=>{setTimeout(()=>{const o=localStorage.getItem(B);o&&e(JSON.parse(o)),n(!1)},2e3)},[]),C.exports.useEffect(()=>{r||localStorage.setItem(B,JSON.stringify(t))},[t,r]),{characters:t,isLoading:r,addCharacter:o=>{e(m=>[...m,o])},updateCharacter:o=>{e(m=>m.filter(i=>i.id!==o.id).concat(o))},getCharacter:o=>JSON.parse(localStorage.getItem(B)).find(m=>m.id===o)}},he=()=>{const{addCharacter:t}=$();return u(Q,{onSubmit:r=>{const n=K();r.id=n,t(r)}})},D=t=>{const{label:e,name:r,step:n,value:a,onChange:l,min:h}=t;return c("div",{children:[u("label",{htmlFor:r,children:e}),u(k,{name:r,type:"number",step:n,value:a,min:h,onChange:o=>l(o.target.valueAsNumber)})]})},F=t=>{const{className:e,title:r,text:n}=t;return c("div",{className:e,children:[u("h1",{children:r}),u("p",{children:n})]})},N=t=>{const{title:e,value:r}=t,n=pe(r);return c("div",{children:[u("h1",{children:e}),c("div",{children:[u("p",{children:r}),c("p",{children:["(",n>=0?"+":"-",n,")"]})]})]})},pe=t=>Math.abs(Math.floor((t-10)/2));const Ee=t=>{const{isChecked:e,onCheck:r}=t;return u("input",{className:"checkbox",type:"checkbox",checked:e,onChange:r})},ge=t=>{const{spells:e=[],onChange:r}=t,n=a=>{r(a)};return u(y,{children:e.map(a=>u(_,{left:u(Ee,{isChecked:a.used,onCheck:()=>n(a.id)}),children:a.used?u("p",{children:u("strike",{children:a.name})}):u("p",{children:a.name})},a.id))})};const Ce=t=>{const{title:e,isOpen:r,onClose:n,children:a}=t;return r?u("div",{className:"modal-overlay",onClick:n,children:c("div",{className:"modal",onClick:l=>l.stopPropagation(),children:[c("div",{className:"modal__header",children:[u("h1",{children:e}),u(f,{type:"button",onClick:n,children:"x"})]}),u("div",{className:"modal__content",children:a})]})}):null},E={SET:"set",TOGGLE_USED:"toggleUsed",RESET_USED:"resetUsed",TOGGLE_PREPARED:"togglePrepared",UPDATE_HITS:"updateHits",UPDATE_EXTRA_HITS:"updateExtraHits",UPDATE_MONEY:"updateMoney",UPDATE_EXPERIENCE:"updateExperience",UPDATE_LEVEL:"updateLevel",UPDATE_COMMENT:"updateComment"},fe=(t,e)=>{switch(e.type){case E.SET:return e.character;case E.TOGGLE_PREPARED:return Ne(t,e.spellId);case E.TOGGLE_USED:return xe(t,e.spellId);case E.RESET_USED:return De(t);case E.UPDATE_HITS:return Be(t,e.hits);case E.UPDATE_EXTRA_HITS:return _e(t,e.extraHits);case E.UPDATE_MONEY:return ye(t,e.money);case E.UPDATE_EXPERIENCE:return be(t,e.experience);case E.UPDATE_LEVEL:return Fe(t,e.level);case E.UPDATE_COMMENT:return ve(t,e.comment);default:throw new Error(`Unknown action type ${e.type}`)}},ve=(t,e)=>g(s({},t),{comment:e}),Fe=(t,e)=>g(s({},t),{level:e}),be=(t,e)=>g(s({},t),{experience:e}),ye=(t,e)=>g(s({},t),{money:e}),_e=(t,e)=>g(s({},t),{extraHits:e}),Be=(t,e)=>g(s({},t),{hits:e}),Ne=(t,e)=>g(s({},t),{spells:t.spells.map(r=>r.id===e?g(s({},r),{prepared:!r.prepared}):r)}),De=t=>g(s({},t),{spells:t.spells.map(e=>g(s({},e),{used:!1}))}),xe=(t,e)=>g(s({},t),{spells:t.spells.map(r=>r.id===e?g(s({},r),{used:!r.used}):r)}),Ae=t=>{const[e,r]=C.exports.useState(!0),[n,a]=C.exports.useReducer(fe,void 0);return C.exports.useEffect(()=>{if(e)return;const l=JSON.parse(localStorage.getItem(B)).map(h=>h.id===n.id?n:h);localStorage.setItem(B,JSON.stringify(l))},[n,e]),C.exports.useEffect(()=>{const l=JSON.parse(localStorage.getItem(B)).find(h=>h.id===t);a({type:E.SET,character:l}),r(!1)},[t]),{character:n,isLoading:e,dispatch:a}};const Se=()=>{const t=J(),{character:e,isLoading:r,dispatch:n}=Ae(t.characterId),[a,l]=C.exports.useState(!1);if(r)return u("div",{children:"Loading..."});const h=d=>{n({type:E.UPDATE_COMMENT,comment:d})},o=d=>{n({type:E.UPDATE_HITS,hits:d})},m=d=>{n({type:E.UPDATE_EXTRA_HITS,extraHits:d})},i=d=>{n({type:E.UPDATE_MONEY,money:d})},b=d=>{n({type:E.UPDATE_EXPERIENCE,experience:d})},v=d=>{n({type:E.UPDATE_LEVEL,level:d})},M=()=>{n({type:E.RESET_USED})},x=d=>{n({type:E.TOGGLE_USED,spellId:d})},A=d=>{n({type:E.TOGGLE_PREPARED,spellId:d})},O=()=>{l(!1)},w=()=>{l(!0)};return c("div",{className:"game",children:[c(Ce,{title:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",isOpen:a,onClose:O,children:[c("div",{children:[u("p",{children:"\u0412\u0441\u0435:"}),u(y,{children:e.spells.map(d=>u(_,{left:u(f,{onClick:()=>A(d.id),children:"+"}),children:d.name},d.id))})]}),c("div",{children:[u("p",{children:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435:"}),u(y,{children:e.spells.filter(d=>d.prepared===!0).map(d=>u(_,{left:u(f,{onClick:()=>A(d.id),children:"-"}),children:d.name},d.id))})]})]}),c("div",{className:"game__left-column",children:[c("section",{className:"game__character-info game__group",children:[c("div",{className:"game__left-column",children:[u("h1",{className:"game__character-name",children:e.name}),u("h2",{className:"game__character-subinfo",children:e.race}),u("h2",{className:"game__character-subinfo",children:e.class})]}),c("div",{className:"game__right-column",children:[u(F,{title:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",text:e.speed}),u(F,{title:"\u042F\u0437\u044B\u043A\u0438",text:e.languages}),u(F,{title:"\u041F\u0440\u0435\u0434\u044B\u0441\u0442\u043E\u0440\u0438\u044F",text:e.prehistory})]})]}),c("section",{className:"game__character-stats game__group",children:[u(N,{title:"\u0421\u0438\u043B\u0430",value:e.strength}),u(N,{title:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",value:e.wisdom}),u(N,{title:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",value:e.dexterity}),u(N,{title:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",value:e.intelligence}),u(N,{title:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430",value:e.charisma}),u(N,{title:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",value:e.constitution}),u(F,{className:"game__character-oneline-stat",title:"\u0411\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430",text:`${e.skillBonus>=0?"+":"-"}${e.skillBonus}`}),u(D,{label:"\u0425\u0438\u0442\u044B (\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435)",name:"hits",value:e.hits,onChange:o}),u(D,{label:"\u0414\u043E\u043F.\u0445\u0438\u0442\u044B",name:"extraHits",value:e.extraHits,onChange:m})]}),c("section",{className:"game__character-other game__group",children:[u(D,{label:"\u0414\u0435\u043D\u044C\u0433\u0438",name:"money",step:.01,value:e.money,onChange:i}),u(D,{label:"\u041E\u043F\u044B\u0442",name:"experience",value:e.experience,onChange:b}),u(D,{label:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",name:"level",value:e.level,onChange:v}),c("div",{className:"game__comment game__character-oneline-stat",children:[u(R,{htmlFor:"comment",children:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),u(z,{name:"comment",value:e.comment,onChange:h})]})]})]}),c("div",{className:"game__right-column",children:[c("section",{children:[u(F,{title:"C\u043F\u0430\u0441\u0431\u0440\u043E\u0441\u043A\u0438",text:e.savingThrows}),u(F,{title:"\u041D\u0430\u0432\u044B\u043A\u0438",text:e.skills}),u(F,{title:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",text:e.equipment})]}),c("section",{children:[c("div",{className:"game__character-spells",children:[u("h1",{children:"\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F"}),u(f,{onClick:w,children:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C"}),u(f,{onClick:M,children:"\u0421\u0431\u0440\u043E\u0441"})]}),u(ge,{spells:e.spells.filter(d=>d.prepared===!0),onChange:x})]}),c("section",{children:[u("h1",{children:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u044B"}),u(y,{children:e.cantrips.map(d=>u(_,{children:d},d))})]}),u(I,{to:`/${e.id}/update`,children:u(f,{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"})})]})]})};const W=t=>{const{character:e}=t;return e===void 0?u(I,{to:"/create",className:"character",children:u("p",{className:"character__plus",children:"+"})}):c("div",{className:"character",children:[c("div",{className:"character__info",children:[u("h1",{className:"character__name",children:e.name}),u("p",{className:"character__text",children:e.race}),u("p",{className:"character__text",children:e.class})]}),u(I,{to:`/${e.id}/update`,children:u(f,{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"})}),u(I,{to:`/${e.id}/game`,children:u(f,{children:"\u0418\u0433\u0440\u0430\u0442\u044C"})})]})};const Te=()=>{const{characters:t,isLoading:e}=$();return e?u("div",{children:"Loading..."}):c("div",{className:"home",children:[t.map(r=>u(W,{character:r},r.id)),u(W,{})]})},Le=()=>{const t=J(),{updateCharacter:e,getCharacter:r}=$(),n=l=>{l.id,e(l)},a=r(t.characterId);return u(Q,{initial:a,onSubmit:n})},Pe=()=>u(re,{children:u("main",{className:"app",children:c(ne,{children:[u(U,{path:"/",element:u(Te,{})}),u(U,{path:"/create",element:u(he,{})}),u(U,{path:"/:characterId/update",element:u(Le,{})}),u(U,{path:"/:characterId/game",element:u(Se,{})})]})})});ae.render(u(Pe,{}),document.getElementById("root"));
