import{g as J,h as o,P as W,_ as I,c as Q,f as E}from"./NonPlayerCard.vue_vue_type_script_setup_true_lang-065d797d.js";import{d as j,o as c,a as r,F as q,g as T,e as i,_ as z,r as u,h as L,b as R,t as U,u as l,i as X,p as Y,f as Z}from"./index-adc912a6.js";const ee={class:"box"},se=j({__name:"DraftPick",props:{choice:{}},emits:["choose"],setup(_){return(e,v)=>(c(),r("div",ee,[(c(!0),r(q,null,T(e.choice,(a,p)=>(c(),r("div",{key:p},[i(J,{onReveal:()=>{},name:a.name,team:a.team,position:a.position,index:a.index,revealed:!0,onClick:d=>e.$emit("choose",a,e.choice.filter(m=>m!=a)[0])},null,8,["name","team","position","index","onClick"])]))),128))]))}});const k=z(se,[["__scopeId","data-v-15723608"]]),A=_=>(Y("data-v-6587dc63"),_=_(),Z(),_),oe={key:0,class:"title"},te={key:1},ae={key:2},ne={key:3},le={key:4},ie={key:5},ce=A(()=>R("h1",{class:"title"},"Player 1's selection.",-1)),re=A(()=>R("h1",{class:"title"},"Player 2's selection",-1)),ue={key:6},y=2,C=4,g=5,b=5,pe=j({__name:"Draft",props:{optionsPerDraft:{},two_player:{type:Boolean}},setup(_){const e=_,v=u([]),a=u([]),p=u([]),d=u([]),m=u([]),w=u([]),G=u([]),K=u([]),S=L(()=>[...v.value,...a.value,...p.value,...d.value]),H=L(()=>[...m.value,...w.value,...G.value,...K.value]),M=u({name:""}),$=u({name:""});let D=[],x=[],B=[],O=[],N=[],f=0;function V(){v.value=[],a.value=[],p.value=[],d.value=[],m.value=[],w.value=[],G.value=[],K.value=[],D=Q(e.optionsPerDraft*y,e.optionsPerDraft*C,e.optionsPerDraft*g,e.optionsPerDraft*b),x=D.splice(0,e.optionsPerDraft*y),B=D.splice(0,e.optionsPerDraft*C),O=D.splice(0,e.optionsPerDraft*g),N=D.splice(0,e.optionsPerDraft*b),M.value=E(),$.value=E(),f=0}V();function F(s,t){switch(t){case o.GK:v.value.push(s);break;case o.DF:a.value.push(s);break;case o.MF:p.value.push(s);break;case o.FW:d.value.push(s);break}f=1-f}function P(s,t,n){switch(n){case o.GK:v.value.push(s),m.value.push(t);break;case o.DF:a.value.push(s),w.value.push(t);break;case o.MF:p.value.push(s),G.value.push(t);break;case o.FW:d.value.push(s),K.value.push(t);break}f=1-f}return(s,t)=>(c(),r(q,null,[R("button",{class:"button",onClick:V},"Reset"),s.two_player&&(v.value.length!==y||a.value.length!==C||p.value.length!==g||d.value.length!==b)?(c(),r("h1",oe," Player "+U(l(f)+1)+"'s turn. ",1)):X("",!0),v.value.length<y?(c(),r("div",te,[i(k,{choice:l(x).splice(0,e.optionsPerDraft),onChoose:t[0]||(t[0]=(n,h)=>s.two_player?P(n,h,l(o).GK):F(n,l(o).GK))},null,8,["choice"])])):a.value.length<C?(c(),r("div",ae,[i(k,{choice:l(B).splice(0,e.optionsPerDraft),onChoose:t[1]||(t[1]=(n,h)=>s.two_player?P(n,h,l(o).DF):F(n,l(o).DF))},null,8,["choice"])])):p.value.length<g?(c(),r("div",ne,[i(k,{choice:l(O).splice(0,e.optionsPerDraft),onChoose:t[2]||(t[2]=(n,h)=>s.two_player?P(n,h,l(o).MF):F(n,l(o).MF))},null,8,["choice"])])):d.value.length<b?(c(),r("div",le,[i(k,{choice:l(N).splice(0,e.optionsPerDraft),onChoose:t[3]||(t[3]=(n,h)=>s.two_player?P(n,h,l(o).FW):F(n,l(o).FW))},null,8,["choice"])])):s.two_player?(c(),r("div",ie,[ce,i(W,{players:S.value,hideCards:!1},null,8,["players"]),i(I,{onReveal:()=>{},name:M.value.name,prefix:"formations",revealed:!0},null,8,["name"]),re,i(W,{players:H.value,hideCards:!1},null,8,["players"]),i(I,{onReveal:()=>{},name:$.value.name,prefix:"formations",revealed:!0},null,8,["name"])])):(c(),r("div",ue,[i(W,{players:S.value,hideCards:!1},null,8,["players"]),i(I,{onReveal:()=>{},name:M.value.name,prefix:"formations",revealed:!0},null,8,["name"])]))],64))}});const he=z(pe,[["__scopeId","data-v-6587dc63"]]);export{he as D};
