import{s as r,h as u,c as w,a as t,I as o,j as e,a6 as _,a7 as f,w as d,D as p,o as b,t as l}from"./chunks/framework.CVnMUigJ.js";/* empty css                              *//* empty css                              *//* empty css                      */const g=e("h1",{id:"switch",tabindex:"-1"},[t("Switch "),e("a",{class:"header-anchor",href:"#switch","aria-label":'Permalink to "Switch"'},"​")],-1),v=e("p",null,[t("This section presents the switch element that can be used in HTML forms. Each example includes the HTML code and styling using the "),e("code",null,"sf-switch"),t(" class.")],-1),y=e("h2",{id:"switch-1",tabindex:"-1"},[t("Switch "),e("a",{class:"header-anchor",href:"#switch-1","aria-label":'Permalink to "Switch"'},"​")],-1),x={class:"sf-switch"},S=["disabled"],k=e("span",null,"Some text",-1),F=e("h2",{id:"switch-multiple-radio",tabindex:"-1"},[t("Switch multiple (radio) "),e("a",{class:"header-anchor",href:"#switch-multiple-radio","aria-label":'Permalink to "Switch multiple (radio)"'},"​")],-1),P={class:"sf-switch multiple"},D={class:"sf-switch-toggle"},T=["disabled"],C=e("span",null,"off",-1),N=["disabled"],V=e("span",null,"on",-1),B=e("p",{class:"sf-switch-description"},"Some text",-1),L=e("h2",{id:"switch-multiple-checkbox",tabindex:"-1"},[t("Switch multiple (checkbox) "),e("a",{class:"header-anchor",href:"#switch-multiple-checkbox","aria-label":'Permalink to "Switch multiple (checkbox)"'},"​")],-1),M={class:"sf-switch multiple"},U={class:"sf-switch-toggle"},j=["disabled"],E=e("span",null,"off",-1),H=["disabled"],O=e("span",null,"on",-1),A=e("div",{class:"sf-switch-description"},"Some text",-1),I=e("h2",{id:"conclusion",tabindex:"-1"},[t("Conclusion "),e("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion"'},"​")],-1),J=e("p",null,[t("Using this example, you can create forms with switch elements. All elements are styled using the "),e("code",null,"sf-switch"),t(" class for a consistent look and feel.")],-1),X=JSON.parse('{"title":"Switch","titleTemplate":"Style-Forge.Form","description":"Switch | Style-Forge.Form: versatile component for easy creation, styling, and state management of switch toggles in web apps.","frontmatter":{"title":"Switch","titleTemplate":"Style-Forge.Form","description":"Switch | Style-Forge.Form: versatile component for easy creation, styling, and state management of switch toggles in web apps.","head":[["meta",{"name":"keywords","content":"style-forge, switch, toggle, input, styling, web development, frontend, switch elements, switch styles, responsive"}],["meta",{"property":"og:title","content":"Switch | Style-Forge.Form"}],["meta",{"property":"og:description","content":"Switch | Style-Forge.Form: versatile component for easy creation, styling, and state management of switch toggles in web apps."}],["meta",{"property":"og:url","content":"https://style-forge.dev/form/switch.html"}],["meta",{"name":"twitter:title","content":"Switch | Style-Forge.Form"}],["meta",{"name":"twitter:description","content":"Switch | Style-Forge.Form: versatile component for easy creation, styling, and state management of switch toggles in web apps."}]]},"headers":[],"relativePath":"form/switch.md","filePath":"form/switch.md","lastUpdated":1720990196000}'),q={name:"form/switch.md"},Y=Object.assign(q,{setup(z){const n=r(!0),s=r(!1),a=u(()=>s.value?" disabled":null);return(G,i)=>{const m=p("actions"),c=p("highlight");return b(),w("div",null,[g,t(),v,t(),o(m,{onDisabled:i[0]||(i[0]=h=>s.value=h),showLoading:!1}),y,t(),e("label",x,[_(e("input",{"onUpdate:modelValue":i[1]||(i[1]=h=>n.value=h),type:"checkbox",disabled:s.value},null,8,S),[[f,n.value]]),t(),k]),t(),o(c,{lang:"html"},{default:d(()=>[t(`
<label class="sf-switch">
  <input type="checkbox"`+l(n.value?" checked":null)+l(a.value)+` /> <span>Some text</span>
</label>
`,1)]),_:1}),t(),F,t(),e("div",P,[e("div",D,[e("label",null,[e("input",{name:"switch_radio",type:"radio",value:"off",checked:"",disabled:s.value},null,8,T),C]),t(),e("label",null,[e("input",{name:"switch_radio",type:"radio",value:"on",disabled:s.value},null,8,N),V])]),t(),B]),t(),o(c,{lang:"html"},{default:d(()=>[t(`
<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_radio" type="radio" value="off" checked`+l(a.value)+` /><span>off</span></label>
    <label><input name="switch_radio" type="radio" value="on"`+l(a.value)+` /><span>on</span></label>
  </div>
  <p class="sf-switch-description">Some text</p>
</div>
`,1)]),_:1}),t(),L,t(),e("div",M,[e("div",U,[e("label",null,[e("input",{name:"switch_checkbox",type:"checkbox",value:"off",disabled:s.value},null,8,j),E]),t(),e("label",null,[e("input",{name:"switch_checkbox",type:"checkbox",value:"on",disabled:s.value},null,8,H),O])]),t(),A]),t(),o(c,{lang:"html"},{default:d(()=>[t(`
<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_checkbox" type="checkbox" value="off"`+l(a.value)+` /><span>off</span></label>
    <label><input name="switch_checkbox" type="checkbox" value="on"`+l(a.value)+` /><span>on</span></label>
  </div>
  <div class="sf-switch-description">Some text</div>
</div>
`,1)]),_:1}),t(),I,t(),J])}}});export{X as __pageData,Y as default};
