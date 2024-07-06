import{a3 as m,h,c as u,a as e,j as t,a5 as n,a6 as d,n as c,I as f,w as p,a8 as b,D as g,o as v,t as _}from"./chunks/framework.CBnWxuuS.js";const x=t("h1",{id:"shift",tabindex:"-1"},[e("Shift "),t("a",{class:"header-anchor",href:"#shift","aria-label":'Permalink to "Shift"'},"​")],-1),w=t("p",null,`The shift utility classes help manage the alignment of an element within a flex and grid container. These classes
allow you to control the alignment properties easily.`,-1),S=t("h2",{id:"css-classes",tabindex:"-1"},[e("CSS Classes "),t("a",{class:"header-anchor",href:"#css-classes","aria-label":'Permalink to "CSS Classes"'},"​")],-1),k=b("",1),y={class:"d:f:y"},C={class:"pos:s top"},T={class:"d:f wrap"},V={class:"sf-switch"},A=t("span",null,"Top",-1),P={class:"sf-switch"},E=t("span",null,"Left",-1),D={class:"sf-switch"},N=t("span",null,"Right",-1),U={class:"sf-switch"},j=t("span",null,"Bottom",-1),B=t("h2",{id:"flex",tabindex:"-1"},[e("Flex "),t("a",{class:"header-anchor",href:"#flex","aria-label":'Permalink to "Flex"'},"​")],-1),I={class:"example d:f wrap"},F=t("h2",{id:"grid",tabindex:"-1"},[e("Grid "),t("a",{class:"header-anchor",href:"#grid","aria-label":'Permalink to "Grid"'},"​")],-1),G={class:"example d:g wrap"},J=JSON.parse('{"title":"Shift","description":"","frontmatter":{},"headers":[],"relativePath":"helpers/shift.md","filePath":"helpers/shift.md","lastUpdated":1720258070000}'),O={name:"helpers/shift.md"},L=Object.assign(O,{setup(R){const s=m({top:!1,left:!1,right:!1,bottom:!1}),o=h(()=>{const a=["shift"];return s.top&&a.push("top"),s.left&&a.push("left"),s.right&&a.push("right"),s.bottom&&a.push("bottom"),a});return h(()=>{const a=["Aligned Element"];return s.top&&a.unshift("top"),s.left&&a.unshift("left"),s.right&&a.unshift("right"),s.bottom&&a.unshift("bottom"),a}),(a,l)=>{const r=g("highlight");return v(),u("div",null,[x,e(),w,e(),S,e(),k,e(),t("div",y,[t("div",C,[t("div",T,[t("label",V,[n(t("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>s.top=i),type:"checkbox"},null,512),[[d,s.top]]),e(),A]),e(),t("label",P,[n(t("input",{"onUpdate:modelValue":l[1]||(l[1]=i=>s.left=i),type:"checkbox"},null,512),[[d,s.left]]),e(),E]),e(),t("label",D,[n(t("input",{"onUpdate:modelValue":l[2]||(l[2]=i=>s.right=i),type:"checkbox"},null,512),[[d,s.right]]),e(),N]),e(),t("label",U,[n(t("input",{"onUpdate:modelValue":l[3]||(l[3]=i=>s.bottom=i),type:"checkbox"},null,512),[[d,s.bottom]]),e(),j])])]),e(),B,e(),t("div",I,[t("div",{class:c(o.value)},`
      Aligned Element (flex)
    `,2)]),e(),f(r,{lang:"html"},{default:p(()=>[e(`
<div class="example d:f">
  <div class="`+_(o.value.join(" "))+`">
    Aligned Element (flex)
  </div>
</div>
`,1)]),_:1}),e(),F,e(),t("div",G,[t("div",{class:c(o.value)},`
      Aligned Element (grid)
    `,2)]),e(),f(r,{lang:"html"},{default:p(()=>[e(`
<div class="example d:g">
  <div class="`+_(o.value.join(" "))+`">
    Aligned Element (grid)
  </div>
</div>
`,1)]),_:1})])])}}});export{J as __pageData,L as default};
