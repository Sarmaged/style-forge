import{a3 as u,h as r,c as _,a as e,j as t,a5 as n,a6 as d,n as c,I as f,w as p,D as g,o as v,t as m}from"./chunks/framework.CBnWxuuS.js";const b=t("h1",{id:"shift",tabindex:"-1"},[e("Shift "),t("a",{class:"header-anchor",href:"#shift","aria-label":'Permalink to "Shift"'},"​")],-1),x=t("p",null,"The shift utility classes help manage the alignment of an element within a flex container. These classes allow you to control the alignment properties easily.",-1),w={class:"d:f:y"},k={class:"pos:s top"},y={class:"d:f wrap"},V={class:"sf-switch"},E=t("span",null,"Top",-1),A={class:"sf-switch"},P=t("span",null,"Left",-1),S={class:"sf-switch"},U=t("span",null,"Right",-1),j={class:"sf-switch"},B=t("span",null,"Bottom",-1),C=t("h2",{id:"flex",tabindex:"-1"},[e("Flex "),t("a",{class:"header-anchor",href:"#flex","aria-label":'Permalink to "Flex"'},"​")],-1),D={class:"example d:f wrap"},N=t("h2",{id:"grid",tabindex:"-1"},[e("Grid "),t("a",{class:"header-anchor",href:"#grid","aria-label":'Permalink to "Grid"'},"​")],-1),T={class:"example d:g wrap"},z=JSON.parse('{"title":"Shift","description":"","frontmatter":{},"headers":[],"relativePath":"helpers/shift.md","filePath":"helpers/shift.md","lastUpdated":1720197695000}'),F={name:"helpers/shift.md"},I=Object.assign(F,{setup(G){const s=u({top:!1,left:!1,right:!1,bottom:!1}),o=r(()=>{const l=["shift"];return s.top&&l.push("top"),s.left&&l.push("left"),s.right&&l.push("right"),s.bottom&&l.push("bottom"),l});return r(()=>{const l=["Aligned Element"];return s.top&&l.unshift("top"),s.left&&l.unshift("left"),s.right&&l.unshift("right"),s.bottom&&l.unshift("bottom"),l}),(l,a)=>{const h=g("highlight");return v(),_("div",null,[b,e(),x,e(),t("div",w,[t("div",k,[t("div",y,[t("label",V,[n(t("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>s.top=i),type:"checkbox"},null,512),[[d,s.top]]),e(),E]),e(),t("label",A,[n(t("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>s.left=i),type:"checkbox"},null,512),[[d,s.left]]),e(),P]),e(),t("label",S,[n(t("input",{"onUpdate:modelValue":a[2]||(a[2]=i=>s.right=i),type:"checkbox"},null,512),[[d,s.right]]),e(),U]),e(),t("label",j,[n(t("input",{"onUpdate:modelValue":a[3]||(a[3]=i=>s.bottom=i),type:"checkbox"},null,512),[[d,s.bottom]]),e(),B])])]),e(),C,e(),t("div",D,[t("div",{class:c(o.value)},`
      Aligned Element (flex)
    `,2)]),e(),f(h,{lang:"html"},{default:p(()=>[e(`
<div class="example d:f">
  <div class="`+m(o.value.join(" "))+`">
    Aligned Element (flex)
  </div>
</div>
`,1)]),_:1}),e(),N,e(),t("div",T,[t("div",{class:c(o.value)},`
      Aligned Element (grid)
    `,2)]),e(),f(h,{lang:"html"},{default:p(()=>[e(`
<div class="example d:g">
  <div class="`+m(o.value.join(" "))+`">
    Aligned Element (grid)
  </div>
</div>
`,1)]),_:1})])])}}});export{z as __pageData,I as default};
