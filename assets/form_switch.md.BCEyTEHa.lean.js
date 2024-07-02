import{s as u,h as _,c as m,a as s,I as n,j as e,a5 as b,a6 as f,w as d,D as p,o as w,t as l}from"./chunks/framework.CBnWxuuS.js";const v=e("h1",{id:"switch",tabindex:"-1"},[s("Switch "),e("a",{class:"header-anchor",href:"#switch","aria-label":'Permalink to "Switch"'},"​")],-1),x=e("p",null,[s("This section presents the switch element that can be used in HTML forms. Each example includes the HTML code and styling using the "),e("code",null,"sf-switch"),s(" class.")],-1),k=e("h2",{id:"switch-1",tabindex:"-1"},[s("Switch "),e("a",{class:"header-anchor",href:"#switch-1","aria-label":'Permalink to "Switch"'},"​")],-1),g={class:"sf-switch"},S=["disabled"],y=e("span",null,"Some text",-1),P=e("h2",{id:"switch-multiple-radio",tabindex:"-1"},[s("Switch multiple (radio) "),e("a",{class:"header-anchor",href:"#switch-multiple-radio","aria-label":'Permalink to "Switch multiple (radio)"'},"​")],-1),D={class:"sf-switch multiple"},C={class:"sf-switch-toggle"},N=["disabled"],T=e("span",null,"off",-1),V=["disabled"],B=e("span",null,"on",-1),L=e("p",{class:"sf-switch-description"},"Some text",-1),M=e("h2",{id:"switch-multiple-checkbox",tabindex:"-1"},[s("Switch multiple (checkbox) "),e("a",{class:"header-anchor",href:"#switch-multiple-checkbox","aria-label":'Permalink to "Switch multiple (checkbox)"'},"​")],-1),U={class:"sf-switch multiple"},j={class:"sf-switch-toggle"},E=["disabled"],H=e("span",null,"off",-1),O=["disabled"],A=e("span",null,"on",-1),I=e("div",{class:"sf-switch-description"},"Some text",-1),J=e("h2",{id:"conclusion",tabindex:"-1"},[s("Conclusion "),e("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion"'},"​")],-1),q=e("p",null,[s("Using this example, you can create forms with switch elements. All elements are styled using the "),e("code",null,"sf-switch"),s(" class for a consistent look and feel.")],-1),Q=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"form/switch.md","filePath":"form/switch.md","lastUpdated":1719921200000}'),z={name:"form/switch.md"},R=Object.assign(z,{setup(F){const o=u(!0),t=u(!1),a=_(()=>t.value?" disabled":null);return(G,i)=>{const r=p("actions"),c=p("highlight");return w(),m("div",null,[v,s(),x,s(),n(r,{onDisabled:i[0]||(i[0]=h=>t.value=h),showLoading:!1}),k,s(),e("label",g,[b(e("input",{"onUpdate:modelValue":i[1]||(i[1]=h=>o.value=h),type:"checkbox",disabled:t.value},null,8,S),[[f,o.value]]),s(),y]),s(),n(c,{lang:"html"},{default:d(()=>[s(`
<label class="sf-switch">
  <input type="checkbox"`+l(o.value?" checked":null)+l(a.value)+` /> <span>Some text</span>
</label>
`,1)]),_:1}),s(),P,s(),e("div",D,[e("div",C,[e("label",null,[e("input",{name:"switch_radio",type:"radio",value:"off",checked:"",disabled:t.value},null,8,N),T]),s(),e("label",null,[e("input",{name:"switch_radio",type:"radio",value:"on",disabled:t.value},null,8,V),B])]),s(),L]),s(),n(c,{lang:"html"},{default:d(()=>[s(`
<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_radio" type="radio" value="off" checked`+l(a.value)+` /><span>off</span></label>
    <label><input name="switch_radio" type="radio" value="on"`+l(a.value)+` /><span>on</span></label>
  </div>
  <p class="sf-switch-description">Some text</p>
</div>
`,1)]),_:1}),s(),M,s(),e("div",U,[e("div",j,[e("label",null,[e("input",{name:"switch_checkbox",type:"checkbox",value:"off",disabled:t.value},null,8,E),H]),s(),e("label",null,[e("input",{name:"switch_checkbox",type:"checkbox",value:"on",disabled:t.value},null,8,O),A])]),s(),I]),s(),n(c,{lang:"html"},{default:d(()=>[s(`
<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_checkbox" type="checkbox" value="off"`+l(a.value)+` /><span>off</span></label>
    <label><input name="switch_checkbox" type="checkbox" value="on"`+l(a.value)+` /><span>on</span></label>
  </div>
  <div class="sf-switch-description">Some text</div>
</div>
`,1)]),_:1}),s(),J,s(),q])}}});export{Q as __pageData,R as default};
