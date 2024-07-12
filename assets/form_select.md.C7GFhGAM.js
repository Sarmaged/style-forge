/* empty css                              *//* empty css                              *//* empty css                      */import{s as h,h as a,c as v,a as e,I as c,j as t,n as _,w as m,D as f,o as O,t as s}from"./chunks/framework.CVnMUigJ.js";const x=t("h1",{id:"select",tabindex:"-1"},[e("Select "),t("a",{class:"header-anchor",href:"#select","aria-label":'Permalink to "Select"'},"​")],-1),k=t("p",null,[e("This section presents the select element that can be used in HTML forms. Each example includes the HTML code and styling using the "),t("code",null,"sf-select"),e(" class.")],-1),C=t("br",null,null,-1),D=t("hr",null,null,-1),P=t("br",null,null,-1),S=["disabled"],y=t("option",null,"Option 1",-1),L=t("option",null,"Option 2",-1),M=t("option",null,"Option 3",-1),N=t("h2",{id:"multiple",tabindex:"-1"},[e("Multiple "),t("a",{class:"header-anchor",href:"#multiple","aria-label":'Permalink to "Multiple"'},"​")],-1),T=["disabled"],j=t("option",null,"Option 1",-1),w=t("option",null,"Option 2",-1),B=t("option",null,"Option 3",-1),V=t("option",null,"Option 4",-1),E=t("h2",{id:"conclusion",tabindex:"-1"},[e("Conclusion "),t("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion"'},"​")],-1),H=t("p",null,[e("Using this example, you can create forms with select elements. All elements are styled using the "),t("code",null,"sf-select"),e(" class for a consistent look and feel.")],-1),F=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"form/select.md","filePath":"form/select.md","lastUpdated":1720810963000}'),U={name:"form/select.md"},G=Object.assign(U,{setup(z){const d=h(!1),o=h(!1),b=a(()=>d.value?"sf-loading":null),p=a(()=>o.value?" disabled":null),n=a(()=>["sf-select",b.value].filter(u=>u).join(" "));return(u,l)=>{const g=f("actions"),r=f("highlight");return O(),v("div",null,[x,e(),k,e(),c(g,{onDisabled:l[0]||(l[0]=i=>o.value=i),onLoading:l[1]||(l[1]=i=>d.value=i)}),C,e(),D,e(),P,e(),t("select",{class:_(n.value),disabled:o.value},[y,e(),L,e(),M],10,S),e(),c(r,{lang:"html"},{default:m(()=>[e(`
<select class="`+s(n.value)+'"'+s(p.value)+`>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
`,1)]),_:1}),e(),N,e(),t("select",{multiple:"",class:_(n.value),disabled:o.value},[j,e(),w,e(),B,e(),V],10,T),e(),c(r,{lang:"html"},{default:m(()=>[e(`
<select multiple class="`+s(n.value)+'"'+s(p.value)+`>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>
`,1)]),_:1}),e(),E,e(),H])}}});export{F as __pageData,G as default};
