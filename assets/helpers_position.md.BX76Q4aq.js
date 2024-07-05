import{_ as a,c as l,a as s,j as t,a8 as i,o as e}from"./chunks/framework.CBnWxuuS.js";const U=JSON.parse('{"title":"Position Utilities","description":"","frontmatter":{},"headers":[],"relativePath":"helpers/position.md","filePath":"helpers/position.md","lastUpdated":1720215825000}'),n={name:"helpers/position.md"},h=t("h1",{id:"position-utilities",tabindex:"-1"},[s("Position Utilities "),t("a",{class:"header-anchor",href:"#position-utilities","aria-label":'Permalink to "Position Utilities"'},"​")],-1),o=t("p",null,"The position utility classes help manage the positioning of an element. These classes allow you to control the position properties easily.",-1),d=t("h2",{id:"css-classes",tabindex:"-1"},[s("CSS Classes "),t("a",{class:"header-anchor",href:"#css-classes","aria-label":'Permalink to "CSS Classes"'},"​")],-1),p=i('<table class="d:t w"><thead><tr><th colspan="2"></th><th colspan="2">Support</th></tr> <tr><th>Class</th><th>Description</th><th>Position class (1)</th><th>Full class (2)</th></tr></thead> <tbody><tr><td><b>pos:r</b></td><td>relative</td><td>✅</td><td>❌</td></tr> <tr><td><b>pos:a</b></td><td>absolute</td><td>✅</td><td>✅</td></tr> <tr><td><b>pos:s</b></td><td>sticky</td><td>✅</td><td>❌</td></tr> <tr><td><b>pos:f</b></td><td>fixed</td><td>✅</td><td>✅</td></tr> <tr><td><b>pos:static</b></td><td>static</td><td>❌</td><td>❌</td></tr></tbody></table>',1),k=i(`<div class="d:f:x auto wrap half"><table class="d:t w"><thead><tr><th colspan="2">Position class (1)</th></tr> <tr><th>Class</th><th>Description</th></tr></thead> <tbody><tr><td><b>top</b></td><td>top: 0</td></tr> <tr><td><b>left</b></td><td>left: 0</td></tr> <tr><td><b>right</b></td><td>right: 0</td></tr> <tr><td><b>bottom</b></td><td>bottom: 0</td></tr></tbody></table> <table class="d:t w"><thead><tr><th colspan="2">Full class (2)</th></tr> <tr><th>Class</th><th>Description</th></tr></thead> <tbody><tr><td><b>full</b></td><td>
top: 0;<br>
left: 0;<br>
right: 0;<br>
bottom: 0;
</td></tr></tbody></table></div>`,1),r=t("h2",{id:"relative",tabindex:"-1"},[s("relative "),t("a",{class:"header-anchor",href:"#relative","aria-label":'Permalink to "relative"'},"​")],-1),c=t("p",null,[s("The "),t("code",null,"pos:r"),s(" class sets the position property to "),t("code",null,"relative"),s(".")],-1),E=t("div",{class:"example"},[t("div",{class:"pos:r"},`
    Relatively Positioned
  `)],-1),_=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:r&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Relatively Positioned</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="absolute" tabindex="-1">absolute <a class="header-anchor" href="#absolute" aria-label="Permalink to &quot;absolute&quot;">​</a></h2>`,2),g=t("p",null,[s("The "),t("code",null,"pos:a"),s(" class sets the position property to "),t("code",null,"absolute"),s(".")],-1),u=t("div",{class:"example"},[t("div",{class:"pos:a"},`
    Absolutely Positioned
  `)],-1),y=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Absolutely Positioned</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="sticky" tabindex="-1">sticky <a class="header-anchor" href="#sticky" aria-label="Permalink to &quot;sticky&quot;">​</a></h2>`,2),b=t("p",null,[s("The "),t("code",null,"pos:s"),s(" class sets the position property to "),t("code",null,"sticky"),s(".")],-1),v=t("div",{class:"ov",style:{height:"100px"}},[t("div",{class:"example",style:{width:"1000px",height:"1000px"}},[t("div",{class:"pos:s top",style:{width:"150px"}},`
      Sticky Position
    `)])],-1),T=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Sticky Position</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="fixed" tabindex="-1">fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;fixed&quot;">​</a></h2>`,2),m=t("p",null,[s("The "),t("code",null,"pos:f"),s(" class sets the position property to "),t("code",null,"fixed"),s(".")],-1),C=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Fixed Position</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="static" tabindex="-1">static <a class="header-anchor" href="#static" aria-label="Permalink to &quot;static&quot;">​</a></h2>`,2),P=t("p",null,[s("The "),t("code",null,"pos:static"),s(" class sets the position property to "),t("code",null,"static"),s(".")],-1),f=t("div",{class:"example"},[t("div",{class:"pos:static"},`
    Statically Positioned
  `)],-1),A=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:static&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Statically Positioned</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="full" tabindex="-1">full <a class="header-anchor" href="#full" aria-label="Permalink to &quot;full&quot;">​</a></h2>`,2),x=t("p",null,[s("The "),t("code",null,"full"),s(" class sets the position to cover the entire container for absolutely or fixed positioned elements.")],-1),F=t("div",{class:"example"},[t("div",{class:"pos:a full"},`
    Full Position Absolute
  `)],-1),S=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos:a full&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Full Position Absolute</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1);function D(q,V,I,B,N,R){return e(),l("div",null,[h,s(),o,s(),d,s(),p,s(),k,s(),r,s(),c,s(),E,s(),_,s(),g,s(),u,s(),y,s(),b,s(),v,s(),T,s(),m,s(),C,s(),P,s(),f,s(),A,s(),x,s(),F,s(),S])}const $=a(n,[["render",D]]);export{U as __pageData,$ as default};
