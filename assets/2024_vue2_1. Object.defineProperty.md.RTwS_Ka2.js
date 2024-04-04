import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.C5O6QHj3.js";const e="/assets/data.C22O_4xN.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2024/vue2/1. Object.defineProperty.md","filePath":"2024/vue2/1. Object.defineProperty.md"}'),t={name:"2024/vue2/1. Object.defineProperty.md"},l=n('<p><img src="'+e+`" alt="img"></p><h2 id="_1-object-defineproperty" tabindex="-1">1. Object.defineProperty() <a class="header-anchor" href="#_1-object-defineproperty" aria-label="Permalink to &quot;1. Object.defineProperty()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 语法：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, prop, descriptor)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 参数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 要定义属性的对象</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 要定义或修改的属性名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    descriptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 要定义或修改的属性描述符 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">是一个对象</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 作用：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; 在一个对象上定义一个新属性，或者修改一个对象的现有属性.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 返回值：传入的obj</span></span></code></pre></div><p>descriptor这个对象的6个属性 - <a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2FdefineProperty" target="_blank" rel="noreferrer">MDN 文档</a>。</p><ul><li><code>configurable</code>，属性是否可以被修改或者删除，默认 false。</li><li><code>enumerable</code>，属性是否可枚举，默认 false。（1. for in 遍历不出来 2. Object.keys() 枚举）</li><li><code>writable</code>, 属性值是否可写（修改），默认为false</li><li><code>value</code> , 属性对应的值，默认为undefined</li><li><code>get</code>，属性的 getter 函数，当访问该属性时，会调用此函数。</li><li><code>set</code>，属性的 setter 函数，当属性值被修改时（设置属性的值时），会调用此函数。</li></ul><p>注意：==&gt; <strong>writable / value 不能和 get / set 同时存在</strong></p><p>=&gt;规定： 数据描述符和存取描述符( <strong>get / set</strong> )不能混合使用</p><h4 id="描述符默认值" tabindex="-1">描述符默认值 <a class="header-anchor" href="#描述符默认值" aria-label="Permalink to &quot;描述符默认值&quot;">​</a></h4><ul><li>拥有布尔值的键 <code>configurable</code>、<code>enumerable</code> 和 <code>writable</code> 的默认值都是 <code>false</code>。</li><li>属性值和函数的键 <code>value</code>、<code>get</code> 和 <code>set</code> 字段的默认值为 <code>undefined</code>。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在对象中添加一个设置了存取描述符属性的示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存取属性 get / set</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 99</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 给obj这个对象添加一个age属性，值为num</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    configurable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enumerable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用了方法名称缩写（ES2015 特性）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 下面两个缩写等价于：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // get : function() { return value; },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // set : function(newValue) { value = newValue; },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;触发了get方法&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;触发了set方法&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newVal; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 点开obj的age属性，才会看到age的值，同时触发get （相当于读取get）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 当读取age属性值的时候，触发getter函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.age)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--------------&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 当设置age属性值的时候，触发setter函数  （set我们一般叫做setter函数）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 88</span></span></code></pre></div><p>通过给obj的age属性 设置getter和setter函数，我们可以监听obj的age属性的变化</p><p>=&gt; <a href="https://v2.cn.vuejs.org/v2/guide/reactivity.html" target="_blank" rel="noreferrer">https://v2.cn.vuejs.org/v2/guide/reactivity.html</a></p><p>=&gt; <a href="https://juejin.cn/post/6844903965180575751" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903965180575751</a></p>`,13),p=[l];function h(k,r,d,E,g,o){return a(),i("div",null,p)}const F=s(t,[["render",h]]);export{y as __pageData,F as default};