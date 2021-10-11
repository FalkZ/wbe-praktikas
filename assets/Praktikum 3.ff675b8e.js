import{S as v,i as C,s as _,e as t,a as c,b as w,c as a,n as x,d as p}from"./vendor.6b7f9045.js";function O(j){let o,f,l,b,e,T=`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">equal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> a<span class="token operator">:</span> <span class="token number">321</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> b<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> a<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> b<span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,m,k,d,i,y,r,g,u,q=`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">findTag</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;([^>]+)></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findTag</span><span class="token punctuation">(</span><span class="token string">"&lt;header>Text&lt;/header"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findTag</span><span class="token punctuation">(</span><span class="token string">"blabla &lt;br> blabla"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findTag</span><span class="token punctuation">(</span><span class="token string">"blablablabla"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findTag</span><span class="token punctuation">(</span><span class="token string">"blabla &lt;> blabla"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`;return{c(){o=t("h1"),o.textContent="2.",f=c(),l=t("h2"),l.textContent="a",b=c(),e=t("pre"),m=c(),k=t("h2"),k.textContent="b",d=c(),i=t("p"),i.textContent="Ja, weil typeof Object",y=c(),r=t("h1"),r.textContent="3",g=c(),u=t("pre"),w(e,"class","language-js"),w(u,"class","language-js")},m(n,s){a(n,o,s),a(n,f,s),a(n,l,s),a(n,b,s),a(n,e,s),e.innerHTML=T,a(n,m,s),a(n,k,s),a(n,d,s),a(n,i,s),a(n,y,s),a(n,r,s),a(n,g,s),a(n,u,s),u.innerHTML=q},p:x,i:x,o:x,d(n){n&&p(o),n&&p(f),n&&p(l),n&&p(b),n&&p(e),n&&p(m),n&&p(k),n&&p(d),n&&p(i),n&&p(y),n&&p(r),n&&p(g),n&&p(u)}}}class L extends v{constructor(o){super();C(this,o,null,O,_,{})}}export{L as default};