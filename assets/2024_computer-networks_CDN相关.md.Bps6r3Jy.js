import{_ as t,c as r,o as e,a4 as o}from"./chunks/framework.C5O6QHj3.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2024/computer-networks/CDN相关.md","filePath":"2024/computer-networks/CDN相关.md"}'),l={name:"2024/computer-networks/CDN相关.md"},a=o('<h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h2><p><strong>CDN （Content Delivery Network ）内容分发网络</strong>。</p><p>内容分发网络（Content Delivery Network，CDN）是建立并覆盖在承载网上，由不同区域的服务器组成的分布式网络。将源站资源缓存到全国各地的边缘服务器，供用户就近获取，降低源站压力。</p><h3 id="两个核心" tabindex="-1">两个核心： <a class="header-anchor" href="#两个核心" aria-label="Permalink to &quot;两个核心：&quot;">​</a></h3><ul><li><strong>缓存</strong></li><li><strong>回源</strong> （CDN 发现自己没有这个资源，向源站要这个资源）</li></ul><p>CDN 的核心点有两个，一个是<strong>缓存</strong>，一个是<strong>回源</strong>。</p><p>这两个概念都非常好理解。对标到上面描述的过程，“缓存”就是说我们把资源 copy 一份到 CDN 服务器上这个过程，“回源”就是说 CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程。</p><h3 id="回源策略" tabindex="-1">回源策略 <a class="header-anchor" href="#回源策略" aria-label="Permalink to &quot;回源策略&quot;">​</a></h3><p>CDN 的回源策略指的是当 CDN 边缘节点无法直接响应用户请求时,（本地缓存未命中、缓存已过期、或者根据配置规则需要回源获取最新资源时），需要从上游获取所需资源的策略和规则。</p><p>CDN 的回源策略通常包括以下几个方面:</p><ol><li><strong>就近原则</strong> 当用户请求某个资源时,CDN 边缘节点会优先从就近的其他边缘节点获取该资源。如果无法获取,才会向更远的边缘节点或者回源站点请求资源。这样可以最大限度减少网络传输时延,提高响应速度。</li><li><strong>缓存优先</strong> 边缘节点上会缓存常用资源,当收到用户请求时,优先命中本地缓存提供服务。只有当本地缓存未命中时,才会尝试从其他节点获取或回源。</li><li><strong>预热更新</strong> 对于一些重要的资源,CDN 服务商会在内容发布前,主动将资源分发预热到各边缘节点的缓存中,以便第一个用户请求时能够直接命中缓存。</li><li><strong>内容归类</strong> 服务商会根据内容的重要性、热点程度等对资源进行分类,制定不同的缓存策略和回源策略。热门资源可以在更多边缘节点缓存,不太热门的资源则缓存时间较短。</li><li><strong>负载均衡</strong> CDN 一般有多个回源站点,根据负载情况进行智能调度,防止单个回源站点过载。</li><li><strong>容灾备份</strong> 当主回源站点出现故障时,可以切换至备份回源站点获取资源,保证业务连续性。</li></ol><p>总的来说,CDN 的回源策略旨在尽量让用户就近获取资源、提高响应速度、节省带宽成本,并保证资源的高可用性。不同服务商会根据自身网络条件、业务需求等制定具体的回源策略。</p><p><strong>PS：阿里云回源策略：</strong></p><ol><li>用户 100%回源流量都将首先回源优先级为“主”的源站，如果某个源站健康检查连续 3 次都是失败的话，则 100%的流量都将选择优先级为“次”的源站回源。</li><li>如果主动健康检查成功的话，该源站就会重新标记为可用，恢复原来优先级。当所有源站的回源优先级一样时，CDN 将自动轮询回源</li></ol><p><a href="https://help.aliyun.com/knowledge_detail/40121.html?spm=a2c6h.13066369.0.0.100e5084r2erfr" target="_blank" rel="noreferrer">CDN 控制台可以配置多个源站：</a></p><p>在设置完成后，CDN 回源的时候就会按照设置的多个源站采用轮询的方式进行回源请求。因此，需要用户保证各源站对于的站点内容要一致，否则会导致 CDN 获取到的数据存在差异。</p><h3 id="阿里云-cdn-开启步骤" tabindex="-1">阿里云 CDN 开启步骤 <a class="header-anchor" href="#阿里云-cdn-开启步骤" aria-label="Permalink to &quot;阿里云 CDN 开启步骤&quot;">​</a></h3><ol><li>添加需要加速域名，配置源站信息 （OSS、IP 等）</li><li>推荐配置 （缓存过期时间、带宽封顶、监控警告、页面优化、智能压缩等）</li><li>完成 CNAME 配置</li></ol><hr><ol><li>A 记录就是把一个域名解析到一个 IP 地址（Address，特制数字 IP 地址）</li><li>CNAME 记录就是把域名解析到另外一个域名</li></ol><p>一个 CDN 网络往往有非常多的边际(edge)节点，当你购买了 CDN 服务又想用自己的域名的时候，直接把你的域名 CNAME 到 CDN 的域名就好了，然后当用户连接的时候往往能够连接到他们最近的节点。</p>',21),n=[a];function i(s,p,c,N,C,d){return e(),r("div",null,n)}const _=t(l,[["render",i]]);export{D as __pageData,_ as default};
