import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.C5O6QHj3.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2024/project-review/4. 七麦移动端重构.md","filePath":"2024/project-review/4. 七麦移动端重构.md"}'),n={name:"2024/project-review/4. 七麦移动端重构.md"},p=t(`<blockquote><p><strong>技术栈 Vue + Vant + webpack+ Vue-Router +Vuex</strong></p></blockquote><h2 id="基础组件的封装" tabindex="-1">基础组件的封装 <a class="header-anchor" href="#基础组件的封装" aria-label="Permalink to &quot;基础组件的封装&quot;">​</a></h2><blockquote><p>国家筛选组件封装</p></blockquote><ul><li>左侧menu固定，右侧地区可以滑动 ==&gt; better-scroll的插件</li><li>点击左侧menu，右侧list对应跳转到相应位置</li><li>右侧滚动，左侧高亮对应menu展示</li><li>其实原理和电梯导航几乎一致，当时效果实现出来还蛮兴奋的~~</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713191924680-2653c402-cb04-4e1d-903b-a98d350a5c92.png#averageHue=%23d4d2d0&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=746&amp;id=uc871dc2d&amp;originHeight=1492&amp;originWidth=876&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=395644&amp;status=done&amp;style=none&amp;taskId=ue2ed4c79-2192-4d8e-b4ee-c0a9146132a&amp;title=&amp;width=438" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713191908109-0a89baff-478c-4373-b1f1-20f56acf4306.png#averageHue=%23cbc7c7&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=763&amp;id=uf76ca377&amp;originHeight=1526&amp;originWidth=890&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=244053&amp;status=done&amp;style=none&amp;taskId=u4871f27a-486a-40cc-a410-27efc9de915&amp;title=&amp;width=445" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/gif/302528/1713193800072-10d83f47-974c-4cb5-ba89-906b92c5e554.gif#averageHue=%23c8c8cb&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=607&amp;id=u0026c34b&amp;originHeight=631&amp;originWidth=320&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=889952&amp;status=done&amp;style=none&amp;taskId=uf3101582-32a6-4139-85cf-9e6084ce673&amp;title=&amp;width=308" alt="ezgif.gif"></p><blockquote><p>右侧结构</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 右侧菜单 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;menu-right&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;areaScroll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(item,index) in totalArrs&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;area-li-hook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- 顶部title --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">strong</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{item.name}}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">strong</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- 下面的国家 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(el,idx) in item.countries&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;el.name&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;menu-right-content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 每个国家 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//右侧部分，计算每个大li的高度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">calculateHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //  每个li标签带有area-li-hook类名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arealist </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.areaScroll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.area-li-hook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 每个地区的高度添加到数组中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(height);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//从0开始 先push 0到listHeight数组中</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//遍历循环 arealist 将每个 li 的高度添加到数组中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arealist.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arealist[i];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 累加</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.clientHeight;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(height);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//得到的所有每个li 高度的数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><blockquote><p>右侧滚动，左侧高亮选中对应地区</p></blockquote><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 左侧menu li标签上</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{&#39;li-active&#39;:currentIndex === index}&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //根据右侧滚动的位置，确定左侧菜单的下标</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    currentIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hight1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight[i]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hight2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.listHeight[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //判断是否在两个高度之间 如果是 返回 当前索引</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scrollY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hight1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scrollY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hight2) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre></div><p>scrollY的计算</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//拿到右侧菜单的滚动对象</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.areaScroll </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.areaScroll, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  probeType: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//实时滚动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  click: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//监听 scroll 事件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.areaScroll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scroll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scrollY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pos.y)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//取绝对值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scrollY);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><blockquote><p>左侧点击区域，展示对应右边国家</p></blockquote><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //点击左侧列表跳转到右侧相应位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrollToCountry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (index) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取右侧所有类为area-li-hook节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> areaList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.areaScroll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.area-li-hook&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> areaList[index]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 跳转到点击的 area-li-hook 节点  花费时间为 250 毫秒</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.areaList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrollToElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="项目概览" tabindex="-1">项目概览 <a class="header-anchor" href="#项目概览" aria-label="Permalink to &quot;项目概览&quot;">​</a></h2><ul><li>qimai ： APP竞品调研数据平台</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713175003174-fef6cbe1-cd70-4f23-8cfd-f989f60f6515.png#averageHue=%23d3d3d2&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=820&amp;id=uab825133&amp;originHeight=1640&amp;originWidth=838&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=352685&amp;status=done&amp;style=none&amp;taskId=u26699f03-6e10-4600-b2df-12ab93662cd&amp;title=&amp;width=419" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713191976295-b2cff28d-39d2-40ad-9e24-7b7d1338b80c.png#averageHue=%23c7c6c5&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=848&amp;id=ud08b8d0b&amp;originHeight=1696&amp;originWidth=866&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=397748&amp;status=done&amp;style=none&amp;taskId=ue7d259e3-3e22-4022-b404-e7cd9983c3b&amp;title=&amp;width=433" alt="image.png"></p><h3 id="全球榜单" tabindex="-1">全球榜单 <a class="header-anchor" href="#全球榜单" aria-label="Permalink to &quot;全球榜单&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713178536396-076ebef3-a53a-4f0d-aada-871cd7059cf2.png#averageHue=%23e89376&amp;clientId=u6b61a6e1-4095-4&amp;from=paste&amp;height=757&amp;id=ud59d41b3&amp;originHeight=1514&amp;originWidth=864&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=429776&amp;status=done&amp;style=none&amp;taskId=u45c6d963-be36-43f8-850c-21f2b39e3b8&amp;title=&amp;width=432" alt="image.png"></p><h3 id="智投平台" tabindex="-1">智投平台 <a class="header-anchor" href="#智投平台" aria-label="Permalink to &quot;智投平台&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713175278463-892d1e67-61e2-4614-9c03-c7df510094fa.png#averageHue=%23cbcbcb&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=843&amp;id=u58e981c7&amp;originHeight=1686&amp;originWidth=860&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=311122&amp;status=done&amp;style=none&amp;taskId=u19227832-f442-44b0-9fbb-4bf6ba4934a&amp;title=&amp;width=430" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713192032428-28decbb6-7066-4737-b348-deef4591f148.png#averageHue=%23d4d3d3&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=785&amp;id=u704dc309&amp;originHeight=1570&amp;originWidth=862&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=329709&amp;status=done&amp;style=none&amp;taskId=u653b354f-beaf-4b44-aa19-b956785b38b&amp;title=&amp;width=431" alt="image.png"></p><h4 id="创建订单" tabindex="-1">创建订单 <a class="header-anchor" href="#创建订单" aria-label="Permalink to &quot;创建订单&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713192061999-72721d72-0344-4e28-8d4b-b407a95d29b8.png#averageHue=%23d6d6d6&amp;clientId=u6a619542-98fc-4&amp;from=paste&amp;height=897&amp;id=u63695404&amp;originHeight=1794&amp;originWidth=874&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=317265&amp;status=done&amp;style=none&amp;taskId=u14b81694-e62e-4896-b1af-a459b07bca9&amp;title=&amp;width=437" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713175528782-ba58e73a-354e-47be-b53d-738e1ad33c06.png#averageHue=%23d1d7d5&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=892&amp;id=u5576fd39&amp;originHeight=1784&amp;originWidth=890&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=219489&amp;status=done&amp;style=none&amp;taskId=u44cbf0d4-375e-48ba-8a1c-0c9e69a36d2&amp;title=&amp;width=445" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713175570111-6070e253-b766-4768-88e4-605e8a727b05.png#averageHue=%23dad8d6&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=823&amp;id=u8bbdf31e&amp;originHeight=1646&amp;originWidth=882&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=164197&amp;status=done&amp;style=none&amp;taskId=u5b8f876c-42db-4a93-af8f-432a6a093ba&amp;title=&amp;width=441" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713175659258-a94b5b00-f43d-46f9-ae42-979289de694c.png#averageHue=%23e3e2e1&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=785&amp;id=u63f716ad&amp;originHeight=1570&amp;originWidth=2826&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=468628&amp;status=done&amp;style=none&amp;taskId=ue964da84-0a1b-456d-bff4-2694bdce4c2&amp;title=&amp;width=1413" alt="image.png"></p><blockquote><p>支付的逻辑</p></blockquote><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1713176208159-96416d91-5108-43cc-9cc1-71186445fc8f.png#averageHue=%23dcdcdb&amp;clientId=uabe83078-08e6-4&amp;from=paste&amp;height=536&amp;id=uadbaf77d&amp;originHeight=1072&amp;originWidth=2376&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=781316&amp;status=done&amp;style=none&amp;taskId=u932f1b1b-2ed6-4868-b3a2-5c04a9cbebd&amp;title=&amp;width=1188" alt="image.png"></p><ul><li>首先在支付宝开发平台上我们需要有一个开发者账号，并且有开通移动支付</li><li>之后，我们会有一个APP ID, 一对公钥和私钥</li><li>当我们创建订单，点击支付时，会向后端发送请求，后端再创建一个支付订单，包括商品信息，金额，AppID</li><li>同时，后端还要用私钥对这个订单进行签名。签名后的订单会被发送到前端做确认，</li><li>然后在客户端会有一个带有签名的订单信息的表单，调用支付宝的 SDK 或者进行页面跳转，提交这个表单到支付宝的支付页面，在这个页面上，用户会完成支付操作。</li></ul>`,27),h=[p];function l(e,k,r,d,E,g){return a(),i("div",null,h)}const c=s(n,[["render",l]]);export{y as __pageData,c as default};
