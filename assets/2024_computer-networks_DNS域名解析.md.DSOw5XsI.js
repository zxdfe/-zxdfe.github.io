import{_ as t,c as o,o as a,a4 as e}from"./chunks/framework.C5O6QHj3.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2024/computer-networks/DNS域名解析.md","filePath":"2024/computer-networks/DNS域名解析.md"}'),r={name:"2024/computer-networks/DNS域名解析.md"},l=e('<h2 id="dns定义" tabindex="-1">DNS定义 <a class="header-anchor" href="#dns定义" aria-label="Permalink to &quot;DNS定义&quot;">​</a></h2><p>Domain Name System 域名系统， 是互联网使用的命名系统，用来把便于人们使用的域名转换为IP地址。<strong>域名是大小写无关的</strong>。 互联网的域名系统DNS被设计成一个联机<strong>分布式数据库系统</strong>，并采用客户服务器方式。 <strong>域名到IP地址的解析</strong>是由分布在互联网上的许多域名服务程序（简称<strong>域名服务器</strong>）共同完成的。 DNS的核心系统是一个三层的树状、分布式服务。对应域名的结构：</p><ol><li><strong>根域名服务器 （Root DNS Server）</strong><ul><li>管理顶级域名服务器，返回“com” “net” “cn”等顶级域名服务器的 IP 地址；</li><li>全世界目前有13组根域名服务器，又有数百台镜像。</li></ul></li><li><strong>顶级域名服务器（Top-level DNS Server）</strong><ul><li>管理各自域名下的权威域名服务器，比如 com 顶级域名服务器可以返回 apple.com 域名服务器的 IP 地址；</li></ul></li><li><strong>权威域名服务器（Authoritative DNS Server）</strong><ul><li>管理自己域名下主机的 IP 地址，比如 apple.com 权威域名服务器可以返回 <a href="https://www.apple.com" target="_blank" rel="noreferrer">www.apple.com</a> 的 IP 地址。</li></ul></li></ol><p>除了上面三种DNS服务器，还有一种不在DNS层次结构之中，但是很重要的DNS服务器，就是<strong>本地域名服务器</strong>（也被称为<strong>权威域名服务器</strong>）。本地域名服务器是电脑解析时的<strong>默认</strong>域名服务器，即电脑中设置的首选 DNS 服务器和备选 DNS 服务器。常见的有电信、联通、谷歌、阿里等的本地 DNS 服务。</p><h2 id="dns解析过程" tabindex="-1">DNS解析过程 <a class="header-anchor" href="#dns解析过程" aria-label="Permalink to &quot;DNS解析过程&quot;">​</a></h2><p>把<strong>域名映射到IP</strong>的过程，叫做<strong>域名解析</strong>。此过程是 计网7 中摘录。 真实情况要考虑缓存等。 域名到IP地址的解析过程要点如下： 当某一个应用进程需要把主机名解析为IP地址时，</p><ol><li>该应用进程就调用<strong>解析程序（resolver）</strong>，并成为DNS的一个客户，</li><li>把待解析的域名放在DNS请求报文中，以<strong>UDP 用户数据报</strong>的格式发送给本地域名服务器（使用 UDP 是为了减少开销）。</li><li>本地域名服务器在查找域名后，把对应的IP地址放在响应报文中返回。</li></ol><h2 id="🔥dns解析过程考虑dns缓存" tabindex="-1">🔥DNS解析过程考虑DNS缓存： <a class="header-anchor" href="#🔥dns解析过程考虑dns缓存" aria-label="Permalink to &quot;🔥DNS解析过程考虑DNS缓存：&quot;">​</a></h2><ol><li>首先搜索<strong>浏览器DNS缓存</strong>，缓存中维护一张域名与IP地址的对应表。</li><li>如果没有命中，<strong>系统DNS缓存</strong>。 Mac上 nslookup www.baidu.com可以查看系统缓存</li><li>hosts文件</li><li>路由器缓存</li><li>本地域名服务器（ISP 互联网服务提供商）</li><li>根域名服务器</li><li>顶级域名服务器</li><li>权威名服务器</li></ol><h2 id="🔥dns查询过程" tabindex="-1">🔥DNS查询过程 <a class="header-anchor" href="#🔥dns查询过程" aria-label="Permalink to &quot;🔥DNS查询过程&quot;">​</a></h2><p>DNS的查询过程，按查询方式不同，分为<strong>递归查询 和 迭代查询</strong>。 <strong>递归查询：</strong><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711700990075-cfa6301d-e459-485a-9671-6f33d98d3b6e.png#averageHue=%23f5f5f4&amp;clientId=u6c9893d2-729e-4&amp;from=paste&amp;id=ufd73bbf0&amp;originHeight=962&amp;originWidth=1242&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u5609d98e-c70b-4edd-a6b1-6f4562d410f&amp;title=" alt=""><strong>迭代查询:</strong><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711700990043-5d9d4eea-e3a7-4f1a-9e53-e6b3b28deef5.png#averageHue=%23f5f4f3&amp;clientId=u6c9893d2-729e-4&amp;from=paste&amp;id=ue7ff68da&amp;originHeight=1010&amp;originWidth=1242&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ub3da1bde-ee68-48ef-b841-1272f682cbe&amp;title=" alt=""> 在实际的网络中，一般采用两段式查询过程，即先递归，后迭代。从本地主机到本地域名服务器采用递归查询，而从本地域名服务器到最终结果则采用迭代方式查询 递归查询：<strong>主机和本地域名服务器ISP之间的查询方式是递归查询。</strong> 迭代查询：<strong>本地域名服务器和其他域名服务器之间的查询方式是迭代查询</strong>，防止根域名服务器压力过大。</p><h2 id="question" tabindex="-1">Question？ <a class="header-anchor" href="#question" aria-label="Permalink to &quot;Question？&quot;">​</a></h2><h2 id="_1-递归查询和迭代查询的区别" tabindex="-1">1. 递归查询和迭代查询的区别？ <a class="header-anchor" href="#_1-递归查询和迭代查询的区别" aria-label="Permalink to &quot;1. 递归查询和迭代查询的区别？&quot;">​</a></h2><p>**递归查询(Recursive Query)**是指某个DNS服务器在收到DNS查询请求后,如果自身无法回答该请求,就以DNS客户端的身份,代理发起查询去其他DNS服务器查询,直到得到最终结果后再将结果返回给启动查询的客户端。 **迭代查询(Iterative Query)**是指DNS服务器在收到查询时,如果无法直接回答,就会将自己能够查询到的下一级DNS服务器的地址提供给发initiator,由发起查询的客户端再次向下一级DNS服务器查询,如此循环直到最终找到答案或查无结果。 简单来说:</p><ul><li><strong>递归查询是DNS服务器代理客户端完成整个查询过程</strong></li><li><strong>迭代查询是将查询任务转移给客户端,由客户端自行按照返回的下一步地址继续查询</strong></li></ul><h2 id="_2-本地主机向isp发起dns查询时-使用的是udp报文协议-为什么" tabindex="-1">2. 本地主机向ISP发起DNS查询时，使用的是UDP报文协议，为什么？ <a class="header-anchor" href="#_2-本地主机向isp发起dns查询时-使用的是udp报文协议-为什么" aria-label="Permalink to &quot;2. 本地主机向ISP发起DNS查询时，使用的是UDP报文协议，为什么？&quot;">​</a></h2><ol><li><strong>低开销</strong><ol><li>DNS查询报文相对较小,不需要可靠的传输,使用轻量级的UDP比重量级的TCP更加高效。</li></ol></li><li><strong>传输可靠性要求低</strong><ol><li>对于DNS查询，偶尔丢失几个查询请求或者响应报文是可以接受的，不要求100%可靠性传输。</li></ol></li><li><strong>传统惯例</strong><ol><li>如果采用TCP协议需要重新设计DNS协议格式和实现</li></ol></li></ol><p>PS：DNS查询的时候，其实也会使用TCP协议，比如在涉及<strong>大量数据传输</strong>或对<strong>传输可靠性有较高要求</strong>的场景,DNS查询就更倾向于使用TCP协议替代默认的UDP协议,以保证数据的完整性和可靠性。</p><ol><li><strong>Zone Transfer(区域传输)</strong> 当一台DNS服务器需要从另一台服务器获取一个完整的区域数据库的副本时,需要使用TCP协议进行区域传输。区域数据量往往较大,使用UDP可能由于报文长度限制而被截断。</li><li><strong>DNS动态更新</strong> 当需要动态添加、修改或删除DNS记录时,为了保证更新操作的可靠性和原子性,通常会使用TCP协议。</li><li><strong>查询响应超长</strong> 当DNS查询的响应超过了UDP报文最大长度(通常为512字节)限制时,DNS服务器会自动切换到TCP协议传输响应数据。较长的响应一般出现在存在大量Additional区域数据的情形。</li></ol><h2 id="_3-前端可以做哪些dns查询优化" tabindex="-1">3. 前端可以做哪些DNS查询优化？ <a class="header-anchor" href="#_3-前端可以做哪些dns查询优化" aria-label="Permalink to &quot;3. 前端可以做哪些DNS查询优化？&quot;">​</a></h2><ol><li><strong>使用link rel=&quot;dns-prefetch&quot;预解析DNS</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//example.com&quot;&gt;</span></span></code></pre></div><p>当需要加载该域名资源时已经完成了DNS解析,可以减少DNS查询延迟。但需要权衡是否增加了不必要的DNS查询开销。</p><ol start="2"><li><strong>使用HTTP/2</strong></li></ol><p>HTTP/2支持多路复用,一个连接可以并行加载多个资源,从根本上减少了DNS查询的数量。但需要服务端和客户端都支持HTTP/2。</p><ol start="3"><li><strong>CDN分发</strong></li></ol><p>利用CDN进行资源分发,客户端就近访问节点,可以减少DNS查询的跨网络延迟</p>',27),n=[l];function s(i,p,d,g,c,S){return a(),o("div",null,n)}const h=t(r,[["render",s]]);export{D as __pageData,h as default};
