import{a4 as p,h as f,c as _,a as e,j as t,a6 as i,a7 as n,n as d,I as m,w as g,a9 as h,D as b,o as u,t as y}from"./chunks/framework.CVnMUigJ.js";/* empty css                              *//* empty css                      */const S=t("h1",{id:"shift",tabindex:"-1"},[e("Shift "),t("a",{class:"header-anchor",href:"#shift","aria-label":'Permalink to "Shift"'},"​")],-1),v=t("p",null,`The shift utility classes help manage the alignment of an element within a flex and grid container. These classes
allow you to control the alignment properties easily.`,-1),w=t("h2",{id:"css-classes",tabindex:"-1"},[e("CSS Classes "),t("a",{class:"header-anchor",href:"#css-classes","aria-label":'Permalink to "CSS Classes"'},"​")],-1),x=h('<table class="d:t w"><thead><tr><th>Class</th><th>Description</th></tr></thead> <tbody><tr><td><b>shift</b></td><td>margin: auto</td></tr> <tr><td><b>shift:t</b></td><td>top</td></tr> <tr><td><b>shift:l</b></td><td>left</td></tr> <tr><td><b>shift:r</b></td><td>right</td></tr> <tr><td><b>shift:b</b></td><td>bottom</td></tr> <tr><td><b>shift:t:l:r:b</b></td><td>margin: 0</td></tr></tbody></table>',1),T=h('<div class="info custom-block"><p class="custom-block-title">INFO</p> <p>All combinations of <code>:t, :l, :r,</code> and <code>:b</code> are <strong>possible</strong>, and the order (e.g., <code>:t:l</code> or <code>:l:t</code>) does not matter.</p></div>',1),k={class:"d:f:y"},C={class:"pos:s t"},V={class:"d:f wrap"},F={class:"sf-switch"},A=t("span",null,"Top",-1),P={class:"sf-switch"},H=t("span",null,"Left",-1),N={class:"sf-switch"},D=t("span",null,"Right",-1),E={class:"sf-switch"},I=t("span",null,"Bottom",-1),U={class:"d:f:x auto wrap half"},B={class:"d:f:y"},j=t("h2",{id:"flex",tabindex:"-1"},[e("Flex "),t("a",{class:"header-anchor",href:"#flex","aria-label":'Permalink to "Flex"'},"​")],-1),O={class:"example d:f wrap"},R={class:"d:f:y"},G=t("h2",{id:"grid",tabindex:"-1"},[e("Grid "),t("a",{class:"header-anchor",href:"#grid","aria-label":'Permalink to "Grid"'},"​")],-1),z={class:"example d:g wrap"},Q=JSON.parse('{"title":"Shift","titleTemplate":"Style-Forge.Helpers","description":"Shift | Style-Forge.Helpers: versatile component for easy management of element shifting in web apps.","frontmatter":{"title":"Shift","titleTemplate":"Style-Forge.Helpers","description":"Shift | Style-Forge.Helpers: versatile component for easy management of element shifting in web apps.","head":[["meta",{"name":"keywords","content":"style-forge, shift, element shifting, css transform, styling, web development, frontend, responsive"}],["meta",{"property":"og:title","content":"Shift | Style-Forge.Helpers"}],["meta",{"property":"og:description","content":"Shift | Style-Forge.Helpers: versatile component for easy management of element shifting in web apps."}],["meta",{"property":"og:url","content":"https://style-forge.dev/helpers/shift.html"}],["meta",{"name":"twitter:title","content":"Shift | Style-Forge.Helpers"}],["meta",{"name":"twitter:description","content":"Shift | Style-Forge.Helpers: versatile component for easy management of element shifting in web apps."}]]},"headers":[],"relativePath":"helpers/shift.md","filePath":"helpers/shift.md","lastUpdated":1720990196000}'),J={name:"helpers/shift.md"},W=Object.assign(J,{setup(L){const s=p({top:!1,left:!1,right:!1,bottom:!1}),r=f(()=>{const l=["shift"];return s.top&&l.push("t"),s.left&&l.push("l"),s.right&&l.push("r"),s.bottom&&l.push("b"),l.join(":")});return(l,o)=>{const c=b("highlight");return u(),_("div",null,[S,e(),v,e(),w,e(),x,e(),T,e(),t("div",k,[t("div",C,[t("div",V,[t("label",F,[i(t("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.top=a),type:"checkbox"},null,512),[[n,s.top]]),e(),A]),e(),t("label",P,[i(t("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.left=a),type:"checkbox"},null,512),[[n,s.left]]),e(),H]),e(),t("label",N,[i(t("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>s.right=a),type:"checkbox"},null,512),[[n,s.right]]),e(),D]),e(),t("label",E,[i(t("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>s.bottom=a),type:"checkbox"},null,512),[[n,s.bottom]]),e(),I])])]),e(),t("div",U,[t("div",B,[j,e(),t("div",O,[t("div",{class:d(r.value)},`
      Aligned Element (flex)
    `,2)])]),e(),t("div",R,[G,e(),t("div",z,[t("div",{class:d(r.value)},`
      Aligned Element (grid)
    `,2)])])]),e(),m(c,{lang:"html"},{default:g(()=>[e(`
<div class="`+y(r.value)+`">
  Aligned Element
</div>
`,1)]),_:1})])])}}});export{Q as __pageData,W as default};
