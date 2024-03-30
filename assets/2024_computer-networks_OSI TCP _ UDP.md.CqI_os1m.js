import{_ as a,c as t,o as e,a4 as o}from"./chunks/framework.C5O6QHj3.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2024/computer-networks/OSI TCP _ UDP.md","filePath":"2024/computer-networks/OSI TCP _ UDP.md"}'),r={name:"2024/computer-networks/OSI TCP _ UDP.md"},i=o('<h2 id="🎃-osi-七层模型" tabindex="-1">🎃 OSI 七层模型 <a class="header-anchor" href="#🎃-osi-七层模型" aria-label="Permalink to &quot;🎃 OSI 七层模型&quot;">​</a></h2><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/302528/1711714194131-f4c65c82-fdbd-4f59-a9e6-aa8070f22d14.webp#averageHue=%239cb571&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;height=794&amp;id=u2112a255&amp;originHeight=1587&amp;originWidth=1120&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=138006&amp;status=done&amp;style=none&amp;taskId=u8a8ad276-681a-42c7-b363-cfde5f5e5b0&amp;title=&amp;width=560" alt=""></p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711680879-3db3df74-9edf-434f-b798-d75aeead75d8.png#averageHue=%23ebebeb&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=uea0b48ee&amp;originHeight=728&amp;originWidth=1286&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u329b9415-082d-4620-bf9a-539b3641468&amp;title=" alt=""> 运输层也叫<strong>传输层</strong></p><h3 id="应用层-application-layer" tabindex="-1">应用层 (application layer) <a class="header-anchor" href="#应用层-application-layer" aria-label="Permalink to &quot;应用层 (application layer)&quot;">​</a></h3><p>应用层是体系结构中的最高层。应用层的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是<strong>应用进程间通信和交互的规则</strong>。这里的<strong>进程</strong>指主机中<strong>正在运行的程序</strong>。 在互联网中应用层协议很多：如<strong>域名系统 DNS、HTTPS 协议、支持电子邮件的 SMTP 协议</strong>等。 我们把应用层交互的数据单元称为<strong>报文（message）</strong></p><h3 id="传输层-transport-layer" tabindex="-1">传输层 (transport layer) <a class="header-anchor" href="#传输层-transport-layer" aria-label="Permalink to &quot;传输层 (transport layer)&quot;">​</a></h3><p>运输层的任务是负责<strong>两台主机中进程之间的通信</strong>提供<strong>通用的数据传输</strong>服务。应用进程利用该服务传送应用层报文。 运输层主要有两种协议</p><h5 id="传输控制协议-tcp-transmission-control-protocol" tabindex="-1">传输控制协议 TCP （Transmission Control Protocol） <a class="header-anchor" href="#传输控制协议-tcp-transmission-control-protocol" aria-label="Permalink to &quot;传输控制协议 TCP （Transmission Control Protocol）&quot;">​</a></h5><p>提供<strong>面向连接</strong>的、<strong>可靠的数据传输服务</strong>，数据传输单位是<strong>报文段</strong>（segment）</p><h5 id="用户数据报协议-udp-user-datagram-protocol" tabindex="-1">用户数据报协议 UDP （User Datagram Protocol） <a class="header-anchor" href="#用户数据报协议-udp-user-datagram-protocol" aria-label="Permalink to &quot;用户数据报协议 UDP （User Datagram Protocol）&quot;">​</a></h5><p>提供<strong>无连接</strong>的、<strong>尽最大努力（best-effort）<strong>的数据传输服务（不保证数据传输的可靠性），数据传输单位是</strong>用户数据报</strong></p><h3 id="网络层-network-layer" tabindex="-1">网络层 (network layer) <a class="header-anchor" href="#网络层-network-layer" aria-label="Permalink to &quot;网络层 (network layer)&quot;">​</a></h3><p>网络层负责为分组交换网上的不同<strong>主机</strong>提供通信服务。在发送数据时，网络层把运输层产生的<strong>报文段</strong>或<strong>用户数据报</strong>封装成<strong>分组</strong>或<strong>包</strong>进行传送。 在 TCP/IP 体系中，由于网络层使用 IP 协议，因此分组也叫<strong>IP 数据报</strong>，或简称<strong>数据报</strong>。（注意区别<strong>用户数据报协议 UDP</strong>） 无论在哪一层传送的数据单元，都可笼统地用**“分组**”表示 网络层的另一个任务就是要选择合适的路由，使源主机运输层所传下来的分组，能够通过网络中的路由器找到目的主机。 互联网使用的网络层协议是无连接的网际协议 IP（Internet Protocol）和许多路由选择协议，因此互联网的网络层也叫做<strong>网际层</strong>或<strong>IP 层</strong></p><h3 id="数据链路层-data-link-layer" tabindex="-1">数据链路层(data link layer) <a class="header-anchor" href="#数据链路层-data-link-layer" aria-label="Permalink to &quot;数据链路层(data link layer)&quot;">​</a></h3><p>简称<strong>链路层</strong>。在两个相邻结点之间传送数据时，数据链路层将网络层交下来的<strong>IP 数据报组装成帧（framing</strong>），在两个相邻结点间的链路上传送<strong>帧（frame</strong>）。每一帧包括<strong>数据和必要的控制信息</strong>（如同步信息、地址信息、差错控制等）。 <strong>控制信息</strong>还使接收端能检测到所收到的帧中有无差错。（数据链路层不仅要检错，而且要纠错）</p><h3 id="物理层-physical-layer" tabindex="-1">物理层（physical layer） <a class="header-anchor" href="#物理层-physical-layer" aria-label="Permalink to &quot;物理层（physical layer）&quot;">​</a></h3><p>在物理层上所传送数据的单位是<strong>比特</strong>。发送方发送 1 时，接收方应当收到 1 而不是 0。因此物理层要考虑用多大的电压代表 1 或 0，以及接收方如何识别发送方所发送的比特。 注意，传递信息所利用的一些物理媒介，如双绞线、同轴电缆、光缆、无线信道，并不在物理层协议之内而是在物理层协议下面。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711680869-9cf8cfea-50b9-4f37-917e-759b9c2c1343.png#averageHue=%23b8b8b8&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u33f43508&amp;originHeight=714&amp;originWidth=1356&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=udfe4e7c0-1f66-49e9-98a6-001d123d580&amp;title=" alt=""></p><h2 id="tcp-ip-的体系结构" tabindex="-1">TCP / IP 的体系结构 <a class="header-anchor" href="#tcp-ip-的体系结构" aria-label="Permalink to &quot;TCP / IP 的体系结构&quot;">​</a></h2><p>TCP/IP 四层模型包括以下 4 层:</p><ol><li><strong>应用层(Application Layer)</strong><ul><li>为应用程序提供服务,如 HTTP、FTP、SMTP 等协议都位于这一层。</li></ul></li><li><strong>传输层(Transport Layer)</strong><ul><li>为端到端的通信提供可靠的数据传输服务,主要协议有 TCP 和 UDP 协议。</li></ul></li><li><strong>网际层(Internet Layer)</strong><ul><li>负责设备到设备的数据传输,最主要的协议是 IP 协议。</li></ul></li><li><strong>网络接口层</strong>/链路层(Network Interface/Link Layer) <ul><li>负责操作单个跳数据传输,常见协议有以太网协议、WIFI 协议等。</li></ul></li></ol><p>这 4 层按自顶向下的顺序,每一层依赖于下一层提供更底层的网络传输服务。</p><ul><li>应用层定义了应用程序如何传输数据</li><li>传输层保证了端到端的通信可靠传输</li><li>网际层负责设备之间路由和寻址</li><li>网络接口层负责在相邻节点间传输数据</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711680857-119ef9f4-61b4-4a58-a9f8-0c5f325c5fa4.png#averageHue=%23c3c3c3&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u85b84bed&amp;originHeight=646&amp;originWidth=1146&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ude159e20-422f-417b-a579-f9868069878&amp;title=" alt=""><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711680878-5b9f3937-e478-4c2e-a604-265d592d59dc.png#averageHue=%23f3f3f3&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u49a2d042&amp;originHeight=508&amp;originWidth=1104&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u57d9655a-9734-4295-9950-31ddce0237d&amp;title=" alt=""> 这种很像沙漏计时器形状的 TCP/IP 协议族表明： TCP/IP 协议<strong>可以为各式各样的应用提供服务（everthing over IP）</strong>, 同时 TCP/IP 协议也<strong>允许 IP 协议在各式各样的网络构成的互联网上运行（IP over everything）</strong>。 从中不难看出 IP 协议在互联网中的核心作用。</p><h2 id="tcp-和-udp" tabindex="-1">TCP 和 UDP <a class="header-anchor" href="#tcp-和-udp" aria-label="Permalink to &quot;TCP 和 UDP&quot;">​</a></h2><p>TCP 和 UDP 都属于传输层。</p><h4 id="🌝udp-的特点" tabindex="-1">🌝UDP 的特点 <a class="header-anchor" href="#🌝udp-的特点" aria-label="Permalink to &quot;🌝UDP 的特点&quot;">​</a></h4><h5 id="_1-udp-是无连接的" tabindex="-1">1. UDP 是无连接的 <a class="header-anchor" href="#_1-udp-是无连接的" aria-label="Permalink to &quot;1. UDP 是无连接的&quot;">​</a></h5><p>即发送数据前不需要建立连接，因此减少了开销和发送数据之前的时延。</p><h5 id="_2-udp-使用尽最大努力交互-不可靠性" tabindex="-1">2. UDP 使用尽最大努力交互（不可靠性） <a class="header-anchor" href="#_2-udp-使用尽最大努力交互-不可靠性" aria-label="Permalink to &quot;2. UDP 使用尽最大努力交互（不可靠性）&quot;">​</a></h5><p>即不保证可靠交付，因此主机不需要维持复杂的连接状态表。</p><h5 id="_3-udp-是面向报文的" tabindex="-1">3. UDP 是面向报文的 <a class="header-anchor" href="#_3-udp-是面向报文的" aria-label="Permalink to &quot;3. UDP 是面向报文的&quot;">​</a></h5><p>发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。 UDP 对应用层交下来的报文，既不合并，也不拆分，而是<strong>保留这些报文的边界</strong>。也就是说，应用层交给 UDP 多长的报文，UDP 就照样发送，<strong>UDP 一次交付一个完整的报文</strong>。因此，应用程序必须选择合适大小的报文。 若报文太长，UDP 把它交给 IP 层后，IP 层在传送时可能要进行分片，这会降低 IP 层的效率。</p><h5 id="_4-udp-没有拥塞控制" tabindex="-1">4. UDP 没有拥塞控制 <a class="header-anchor" href="#_4-udp-没有拥塞控制" aria-label="Permalink to &quot;4. UDP 没有拥塞控制&quot;">​</a></h5><p>因此网络出现的拥塞不会使源主机的发送速率降低。这对某些实时应用很重要。很多实时应用（如 IP 电话、实时视频会议等）要求源主机以恒定的速率发送数据，并且允许在网络发送拥塞时丢失一些数据，但却不允许数据有太大的时延。</p><h5 id="_5-udp-支持一对一、一对多、多对一、多对多的交互通信" tabindex="-1">5. UDP 支持一对一、一对多、多对一、多对多的交互通信 <a class="header-anchor" href="#_5-udp-支持一对一、一对多、多对一、多对多的交互通信" aria-label="Permalink to &quot;5. UDP 支持一对一、一对多、多对一、多对多的交互通信&quot;">​</a></h5><h5 id="_6-udp-首部开销小" tabindex="-1">6. UDP 首部开销小 <a class="header-anchor" href="#_6-udp-首部开销小" aria-label="Permalink to &quot;6. UDP 首部开销小&quot;">​</a></h5><p>UDP 首部只有 8 个字节，比 TCP 的 20 个字节首部要短。</p><h3 id="🌝tcp-的特点" tabindex="-1">🌝TCP 的特点 <a class="header-anchor" href="#🌝tcp-的特点" aria-label="Permalink to &quot;🌝TCP 的特点&quot;">​</a></h3><h5 id="_1-tcp-是面向连接的运输层协议" tabindex="-1"><strong>1. TCP 是面向连接的运输层协议</strong> <a class="header-anchor" href="#_1-tcp-是面向连接的运输层协议" aria-label="Permalink to &quot;**1. TCP 是面向连接的运输层协议**&quot;">​</a></h5><p>应用程序在使用 TCP 协议前，必须先建立 TCP 连接。在传送数据完毕后，必须释放已经建立的 TCP 连接。</p><h5 id="_2-每一条-tcp-连接只能有两个端点-endpoint" tabindex="-1">2. 每一条 TCP 连接只能有两个端点（endpoint） <a class="header-anchor" href="#_2-每一条-tcp-连接只能有两个端点-endpoint" aria-label="Permalink to &quot;2. 每一条 TCP 连接只能有两个端点（endpoint）&quot;">​</a></h5><p>每一条 TCP 连接只能是点对点的</p><h5 id="_3-tcp-提供可靠交付的服务" tabindex="-1">3. TCP 提供可靠交付的服务 <a class="header-anchor" href="#_3-tcp-提供可靠交付的服务" aria-label="Permalink to &quot;3. TCP 提供可靠交付的服务&quot;">​</a></h5><p>通过 TCP 连接传送的数据，无差错、不丢失、不重复，并且按序到达。</p><h5 id="_4-tcp-提供全双工通信" tabindex="-1">4. TCP 提供全双工通信 <a class="header-anchor" href="#_4-tcp-提供全双工通信" aria-label="Permalink to &quot;4. TCP 提供全双工通信&quot;">​</a></h5><h5 id="_5-面向字节流" tabindex="-1">5. 面向字节流 <a class="header-anchor" href="#_5-面向字节流" aria-label="Permalink to &quot;5. 面向字节流&quot;">​</a></h5><p>TCP 中的<strong>流（stream）指的是流入到进程或从进程流出的字节序列</strong>。 面向字节流的含义是： 虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 <strong>TCP 把应用程序交下来的数据仅仅看成是一连串的无结构的字节流。</strong> TCP 和 UDP 在发送报文时所采用的方式完全不同。<strong>TCP 并不关心应用程序一次把多长的报文发送到 TCP 缓存中</strong>，而是根据对方给出的窗口值和当前网络拥塞的程度来决定一个报文段应该包含多少个字节。而 UDP 发送的报文长度是应用进程给出的。</p><h3 id="tcp-的连接" tabindex="-1">TCP 的连接 <a class="header-anchor" href="#tcp-的连接" aria-label="Permalink to &quot;TCP 的连接&quot;">​</a></h3><p>TCP 把<strong>连接作为最基本的抽象</strong>。TCP 的许多特性都与 TCP 是面向连接的这个基本的特性有关。 每一条 TCP 连接有两个端点。那么，TCP 连接的端点是什么呢？ TCP 连接的端点叫做<strong>套接字（socket）或插口</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>套接字 socket = (IP地址：端口号)</span></span></code></pre></div><p><strong>每一条 TCP 连接唯一地被通信两端的两个端点（即两个套接字）所确定。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>TCP连接 ：：= {socket1, socket2} = {(IP1 : port1) , (IP2 : port2)}</span></span></code></pre></div><p><strong>TCP 连接的端点是个很抽象的套接字，即（IP 地址 ：端口号）</strong> 同一个 IP 地址可以有多个不同的 TCP 连接，同一个端口号也可以出现在多个不同的 TCP 连接中。</p><h3 id="tcp-报文段首部格式" tabindex="-1">TCP 报文段首部格式 <a class="header-anchor" href="#tcp-报文段首部格式" aria-label="Permalink to &quot;TCP 报文段首部格式&quot;">​</a></h3><p><img src="https://zxd-blog-imgs.oss-cn-beijing.aliyuncs.com/imgs/20211208174614.png" alt="image-20211208174614307"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711680915-c1874219-c607-4d81-aa0d-88e2ff05da81.png#averageHue=%23e1e1e1&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u7f7e985e&amp;originHeight=872&amp;originWidth=1286&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ubca811f5-b283-43d1-8b7e-909b9506cae&amp;title=" alt=""> TCP 虽然是面向字节流的，但 TCP 传输的数据单元却是报文段。一个 TCP 报文段分为首部和数据两部分。</p><h4 id="首部个字段意义" tabindex="-1">首部个字段意义 <a class="header-anchor" href="#首部个字段意义" aria-label="Permalink to &quot;首部个字段意义&quot;">​</a></h4><h5 id="_1-源端口和目的端口" tabindex="-1">1.源端口和目的端口 <a class="header-anchor" href="#_1-源端口和目的端口" aria-label="Permalink to &quot;1.源端口和目的端口&quot;">​</a></h5><p>各占 2 字节，分别写入源端口号和目的端口号。</p><h5 id="_2-序号" tabindex="-1">2. 序号 <a class="header-anchor" href="#_2-序号" aria-label="Permalink to &quot;2. 序号&quot;">​</a></h5><p>占 4 字节。序号范围[0, $2^{32}$ - 1] ， 共 $2^{32}$ 序号。TCP 是面向字节流的。<strong>在一个 TCP 连接中传送的字节流中的每一个字节都按顺序编号。</strong></p><h5 id="_3-确认号" tabindex="-1">3. 确认号 <a class="header-anchor" href="#_3-确认号" aria-label="Permalink to &quot;3. 确认号&quot;">​</a></h5><p>占 4 字节，是<strong>期望收到对方下一个报文段的第一个数据字节的序号</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>若确认号 = N，则表明：到序号 N-1 为止的所有数据都已正确收到。</span></span></code></pre></div><h5 id="_4-数据偏移" tabindex="-1">4. 数据偏移 <a class="header-anchor" href="#_4-数据偏移" aria-label="Permalink to &quot;4. 数据偏移&quot;">​</a></h5><p>占 4 位，它指出 TCP 报文段的<strong>数据起始处</strong>距离 <strong>TCP 报文段的起始处</strong>有多远。 这个字段实际上<strong>指出 TCP 报文段的首部长度</strong>。</p><h5 id="_5-保留" tabindex="-1">5. 保留 <a class="header-anchor" href="#_5-保留" aria-label="Permalink to &quot;5. 保留&quot;">​</a></h5><p>占 6 位，保留为今后使用，目前置为 0。</p><h5 id="_6-6-个控制位" tabindex="-1">6. 6 个控制位 <a class="header-anchor" href="#_6-6-个控制位" aria-label="Permalink to &quot;6. 6 个控制位&quot;">​</a></h5><h6 id="_1-紧急-urg-urgent" tabindex="-1">1. 紧急 URG（URGent） <a class="header-anchor" href="#_1-紧急-urg-urgent" aria-label="Permalink to &quot;1. 紧急 URG（URGent）&quot;">​</a></h6><p>URG = 1, 表明紧急指针字段有效。比如中断命令（ctr+c）</p><h6 id="_2-确认-ack-acknowledgment" tabindex="-1">2. 确认 ACK （ACKnowledgment） <a class="header-anchor" href="#_2-确认-ack-acknowledgment" aria-label="Permalink to &quot;2. 确认 ACK （ACKnowledgment）&quot;">​</a></h6><p>当 ACK = 1 时确认号字段才有效。当 ACK = 0 时，确认号无效。TCP 规定，在连接建立后所有传送的报文段都必须把 ACK 置 1.</p><h6 id="_3-推送-psh-push" tabindex="-1">3. 推送 PSH （PuSH） <a class="header-anchor" href="#_3-推送-psh-push" aria-label="Permalink to &quot;3. 推送 PSH （PuSH）&quot;">​</a></h6><h6 id="_4-复位-rst-reset" tabindex="-1">4. 复位 RST （ReSeT） <a class="header-anchor" href="#_4-复位-rst-reset" aria-label="Permalink to &quot;4. 复位 RST （ReSeT）&quot;">​</a></h6><p>当 RST = 1 时，表明 TCP 连接中出现严重差错，必须释放连接，然后再重新建立运输连接。RST 置 1 还用来拒绝非法报文段或拒绝打开一个连接。RST 也叫重置位。</p><h6 id="_5-同步-syn-synchronization" tabindex="-1">5. 同步 SYN（SYNchronization） <a class="header-anchor" href="#_5-同步-syn-synchronization" aria-label="Permalink to &quot;5. 同步 SYN（SYNchronization）&quot;">​</a></h6><p>在连接建立时用来同步序号。 当 SYN = 1 而 ACK = 0 时，表明这是一个连接请求报文段。对方若同意建立连接，则应在响应的报文段中使 SYN = 1, ACK = 1。<strong>SYN 置 1 表示这是一个连接请求或连接接受报文。</strong></p><h6 id="_6-终止-fin-finis" tabindex="-1">6. 终止 FIN （FINis） <a class="header-anchor" href="#_6-终止-fin-finis" aria-label="Permalink to &quot;6. 终止 FIN （FINis）&quot;">​</a></h6><p>用来释放一个连接。当 FIN = 1 时，表明此报文段的发送发的数据已发送完毕，并要求释放运输连接。</p><h5 id="_7-窗口" tabindex="-1">7. 窗口 <a class="header-anchor" href="#_7-窗口" aria-label="Permalink to &quot;7. 窗口&quot;">​</a></h5><p>占 2 字节。值是 [0, 2^16 - 1]之间的整数。 <strong>窗口指的是发送本报文段的一方的接受窗口（而不是自己的发送窗口）。</strong><strong>窗口字段明确指出了现在允许对方发送的数据量</strong>。 窗口值经常动态的变化着。</p><h5 id="_8-校验和" tabindex="-1">8. 校验和 <a class="header-anchor" href="#_8-校验和" aria-label="Permalink to &quot;8. 校验和&quot;">​</a></h5><p>占 2 字节。校验和检验的范围包括<strong>首部</strong>和<strong>数据</strong>这两部分。 检测数据传输中是否有错，有错就丢弃。</p><h5 id="_9-紧急指针" tabindex="-1">9. 紧急指针 <a class="header-anchor" href="#_9-紧急指针" aria-label="Permalink to &quot;9. 紧急指针&quot;">​</a></h5><p>占 2 字节。紧急指针仅在 URG = 1 时才有意义。PS. 即使窗口为零时也可发送紧急数据。</p><h5 id="_10-选项" tabindex="-1">10. 选项 <a class="header-anchor" href="#_10-选项" aria-label="Permalink to &quot;10. 选项&quot;">​</a></h5><p>长度可变，最长可达 40 字节。当没有使用<strong>选项</strong>时，TCP 的首部长度是 20 字节。 （1kb 是 1024 字节，也就是 1024k）</p><h3 id="tcp-可靠传输的工作原理" tabindex="-1">TCP 可靠传输的工作原理 <a class="header-anchor" href="#tcp-可靠传输的工作原理" aria-label="Permalink to &quot;TCP 可靠传输的工作原理&quot;">​</a></h3><p>我们知道，TCP 发送的报文段是交给 IP 层传送的，但 IP 层只能提供尽最大努力服务，也就是说，<strong>TCP 下面的网络所提供的是不可靠的传输。</strong> 理想的传输条件有以下两个特点</p><ol><li>传输信道不产生差错</li><li>不管发送方以多快的速度发送数据，接受方总来得及处理收到的数据</li></ol><p>实际网络都不具备以上两个理想条件。但我们可以使用一些可靠传输协议，当出现差错时让发送方重传出现差错的数据，同时在接收方来不及处理收到的数据时，及时告诉发送发适当降低发送数据的速度。</p><h4 id="停止等待协议" tabindex="-1">停止等待协议 <a class="header-anchor" href="#停止等待协议" aria-label="Permalink to &quot;停止等待协议&quot;">​</a></h4><p>“停止等待” 就是每发送完一个分组就停止发送，等待对方的确认。在收到对方确认后再发送下一个分组。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711681668-8625cba4-f902-4b32-841c-b813bd930e5d.png#averageHue=%23f2f2f2&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u5c9b2749&amp;originHeight=542&amp;originWidth=1024&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u966c9dd3-380e-4bd8-8131-70d81cdca03&amp;title=" alt=""> 运输层传送的协议数据单元叫<strong>报文段</strong>，网络层传送的协议数据单元叫 <strong>IP 数据报</strong>。一般讨论问题时，可以把它们简称为<strong>分组</strong> 对于出现差错的情况，可靠传输协议是这样设计的： 发送方 A 只要超过一段时间仍没有收到确认，就认为刚才发送的分组丢失了，因而重传前面发送过的分组。这就叫<strong>超时重传</strong>。 要实现超时重传，就要在每发送完一个分组时设置一个<strong>超时计时器</strong>。</p><h5 id="信道利用率" tabindex="-1">信道利用率 <a class="header-anchor" href="#信道利用率" aria-label="Permalink to &quot;信道利用率&quot;">​</a></h5><p>停止等待协议的优点是简单，但缺点是信道利用率太低。<img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711681864-598a1a77-cf3e-439b-ad79-31302fd1f0f9.png#averageHue=%23f0f0f0&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u4d9b1095&amp;originHeight=322&amp;originWidth=926&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uedcf9ace-607f-4607-9315-a3c83e8a2ba&amp;title=" alt=""> 为了提高传输效率，发送方可以不使用低效率的停止等待协议，而是<strong>采用流水线传输</strong>。如下， <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711681937-1a148ec1-3e4f-406d-82e7-4a6d1fce9eb1.png#averageHue=%23dadada&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u12bd1a75&amp;originHeight=292&amp;originWidth=984&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uc5527ddb-85b8-42e3-b207-92836486727&amp;title=" alt=""> 流水线传输就是发送方可连续发送多个分组，不必每发完一个分组就停顿下来等待对方确认。这样可使信道上一直有数据不间断地传送。</p><h4 id="连续-arq-协议" tabindex="-1">连续 ARQ 协议 <a class="header-anchor" href="#连续-arq-协议" aria-label="Permalink to &quot;连续 ARQ 协议&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711681994-b2706b6a-e256-41d6-89f2-b869db762b9f.png#averageHue=%23ededed&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u18ffaa7e&amp;originHeight=446&amp;originWidth=860&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u70e2764c-5beb-4fc2-9ad6-0e8b9f8f04c&amp;title=" alt=""> 发送方维持一个发送窗口，它的意义是：<strong>位于发送窗口内的分组都可以连续发送出去，而不需要等待对方的确认</strong>。 连续 ARQ 协议规定，发送方每收到一个确认，就把发送窗口向前滑动一个分组的位置。 接收方一般都是采用<strong>累积确认</strong>的方式。就是说，接收方不必对收到的分组逐个发送确认，而是收到几个分组后，<strong>对按序到达的最后一个分组发送确认</strong>。表示：到这个分组为止的所有分组都已正确收到了。</p><hr><h2 id="🤣tcp-可靠传输的实现" tabindex="-1">🤣TCP 可靠传输的实现 <a class="header-anchor" href="#🤣tcp-可靠传输的实现" aria-label="Permalink to &quot;🤣TCP 可靠传输的实现&quot;">​</a></h2><p>TCP 主要提供了</p><ol><li><strong>校验和</strong></li><li><strong>序列号和确认应答</strong></li><li><strong>超时重传</strong></li><li><strong>流量控制（滑动窗口协议）</strong></li><li><strong>拥塞控制</strong>等保证数据的可靠传输。</li></ol><h4 id="_1-以字节为单位的滑动窗口" tabindex="-1">1. 以字节为单位的滑动窗口 <a class="header-anchor" href="#_1-以字节为单位的滑动窗口" aria-label="Permalink to &quot;1. 以字节为单位的滑动窗口&quot;">​</a></h4><p>TCP 的滑动窗口是以字节为单位的。现假定 A 收到了 B 发来的确认报文段，其中窗口是 20 字节，而确认号是 31（表明 B 期望收到的下一个序号是 31，序号 30 为止的数据已经收到了）。根据这两个数据，A 就构造出自己的发送窗口。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682064-e32de3c9-f086-458f-b186-50eec209ba75.png#averageHue=%23e6e6e6&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u5faa40b7&amp;originHeight=376&amp;originWidth=1146&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u8757a7e5-53f7-4fe7-8868-38f505d131a&amp;title=" alt=""><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682281-b3267f58-3d49-4d00-a79a-819845fb6297.png#averageHue=%23e1e1e1&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=uf3e9da05&amp;originHeight=544&amp;originWidth=1188&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ud422e3a6-f869-49c3-b90b-84ff47166ea&amp;title=" alt=""><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682503-de92a35c-4bca-4426-ae09-46c78623f96a.png#averageHue=%23ebebeb&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=ud6a7b0e1&amp;originHeight=486&amp;originWidth=1234&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u349f4bbd-bf42-43de-a139-30a4b8e6863&amp;title=" alt=""></p><h4 id="_2-超时重传时间的选择" tabindex="-1">2. 超时重传时间的选择 <a class="header-anchor" href="#_2-超时重传时间的选择" aria-label="Permalink to &quot;2. 超时重传时间的选择&quot;">​</a></h4><p>参考 计算机网络 第 7 版 P225</p><h4 id="_3-选择确认-sack" tabindex="-1">3. 选择确认 SACK <a class="header-anchor" href="#_3-选择确认-sack" aria-label="Permalink to &quot;3. 选择确认 SACK&quot;">​</a></h4><p>如果要使用选择确认 SACK，那么在建立 TCP 连接时，就要在 TCP 首部选项中加上“允许 SACK”的选项，双方必须都事先商定好。 然后，SACK 文档并没有指明发送方应当怎样响应 SACK。因此大多数的实现还是重传所有未被确认的数据块。</p><h2 id="tcp-的流量控制" tabindex="-1">TCP 的流量控制 <a class="header-anchor" href="#tcp-的流量控制" aria-label="Permalink to &quot;TCP 的流量控制&quot;">​</a></h2><p>所谓<strong>流量控制（flow control）就是让发送发的发送速率不要太快，要让接收方来得及接收。</strong> 利用滑动窗口机制可以很方便地在 TCP 连接上实现对发送方的流量控制。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682652-a57cd396-0387-4613-81b1-7f1b748a8b62.png#averageHue=%23e9e9e9&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=uaadb947d&amp;originHeight=634&amp;originWidth=1072&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u571b6100-dabf-469c-8457-67dda18aaa7&amp;title=" alt=""> 这里 rwnd 表示 receiver window ： 接收方的窗口。单位是字节。表明接收方目前能接收的数据容量。</p><h2 id="tcp-的拥塞控制" tabindex="-1">TCP 的拥塞控制 <a class="header-anchor" href="#tcp-的拥塞控制" aria-label="Permalink to &quot;TCP 的拥塞控制&quot;">​</a></h2><p>TCP 进行拥塞控制的算法有四种：</p><ol><li><strong>慢开始 （slow-start）</strong></li><li><strong>拥塞避免 (congestion avoidance)</strong></li><li><strong>快重传 (fast retransmit)</strong></li><li><strong>快恢复 (fast recover)</strong></li></ol><p>参考 计网 7 版 P232</p><hr><h2 id="tcp-的运输连接管理" tabindex="-1">TCP 的运输连接管理 <a class="header-anchor" href="#tcp-的运输连接管理" aria-label="Permalink to &quot;TCP 的运输连接管理&quot;">​</a></h2><p>TCP 是面向连接的协议。运输连接时用来传送 TCP 报文的。 TCP 运输连接的建立和释放是每一次面向连接的通信中必不可少的过程。 因此，运输连接有三个阶段：</p><ol><li><strong>连接建立</strong></li><li><strong>数据传送</strong></li><li><strong>连接释放</strong></li></ol><p>TCP 连接的建立采用客户服务器方式。主动发起连接建立的应用进程叫做客户（client），被动等待连接建立的应用进程叫做服务器（server）。</p><h3 id="tcp-的连接建立" tabindex="-1">TCP 的连接建立 <a class="header-anchor" href="#tcp-的连接建立" aria-label="Permalink to &quot;TCP 的连接建立&quot;">​</a></h3><p>TCP 建立连接的过程叫做握手，握手需要在客户和服务器之间交换三个 TCP 报文段。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682689-949509e9-2f1f-4392-9ab1-007af081b5d1.png#averageHue=%23ededed&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=ud35dcec6&amp;originHeight=614&amp;originWidth=1008&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ubc518536-ead9-4540-bb0f-d8fcecc172a&amp;title=" alt=""> 计网 7 中指出：首次采用<strong>三报文握手</strong>。 P 238 以前该教程采用“三次握手”这个广为流行的译名。但其实这是<strong>在一次握手过程中交换了三个报文，而并不是进行了三次握手</strong>。 这有点像两个人见面进行一次握手时，他们的手上下摇晃了三次，但并非进行了三次握手。 RFC 973 文档 表述：<strong>three way(three message) handshake</strong>, handshake 使用的是单数，表明是一次握手。</p><h4 id="🔥-三报文握手" tabindex="-1">🔥 三报文握手 <a class="header-anchor" href="#🔥-三报文握手" aria-label="Permalink to &quot;🔥 三报文握手&quot;">​</a></h4><ol><li>假定 A 运行 TCP 客户程序，B 运行 TCP 服务器程序，最初两端的 TCP 进程都处于<strong>CLOSED</strong>（关闭）状态。</li><li>A 主动打开连接，B 被动打开连接</li><li>一开始，B 的 TCP 服务器进程先<strong>创建传输控制块 TCB</strong>，准备接受客户进程的连接请求。B 服务器进程处于<strong>LISTEN</strong>（收听）状态，等待客户连接请求。</li><li>A 的 TCP 客户进程也是首先<strong>创建传输控制模块 TCB</strong>。然后，在打算建立 TCP 连接时，向 B 发出连接请求报文段。 <ol><li>同步位 <strong>SYN = 1</strong>，同时选择一个初始序号 <strong>seq = x</strong></li><li>TCP 规定，SYN 报文段（即 SYN=1 的报文段）不能携带数据，但要消耗掉一个序号。</li><li>这时 TCP 客户进程进入 **SYN-SENT(同步已发送)**状态</li></ol></li><li>B 收到连接请求报文段后，如果同意建立连接，向 A 发送确认 <ol><li>SYN = 1，ACK = 1，确认号 ack = x + 1, 同时也为自己选择一个初始序号 seq = y</li><li>这个报文也不能携带数据，但<strong>同样要消耗掉一个序号</strong></li><li>B 服务器进程进入 **SYN-RCVD（同步收到）**状态</li></ol></li><li>A 收到 B 的确认后，还要向 B 给出确认。 <ol><li>确认报文段的 ACK = 1，确认号 ack= y + 1, 自己的序号 seq = x + 1</li><li>TCP 规定，ACK 报文段可以携带数据。如果不携带数据则不消耗序号，这种情况下，下一个数据报文段序号仍是 seq=x+1</li><li>这时，TCP 连接已经建立， A 进入 <strong>ESTABLISHED （已建立连接）状态</strong></li></ol></li><li>B 收到 A 的确认后，也进入 <strong>ESTABLISHED （已建立连接）状态</strong></li></ol><p>以上连接建立的过程叫做 <strong>三报文握手</strong>，注意改名字了。three way handshake。 为什么 A 最后还要发送一次确认呢？ <strong>为了防止已失效的连接请求报文段突然又传送到了 B</strong>，因而产生错误。 正常情况： A 发送连接请求，但因连接请求报文丢失而未收到确认。A 再重传一次连接请求。后来收到确认，建立了连接。数据传输完毕后，就释放了连接。A 共发送两次连接请求报文段，第一个丢失，第二个重传到达了 B。 <strong>异常情况：</strong> A 发送的第一个连接请求报文并没有丢失，而是在某个网络结点滞留了，以致延误到连接释放的某个时间才到达 B。这本来是一个早已失效的报文段。这个时候 B 收到会误认为是 A 又发出一次新的连接请求，于是向 A 发出确认报文段，同意建立连接。如果不采用三次报文握手，只要 B 发出确认，新的连接就建立了。 然后这边 A 并没有发出建立连接请求，因此不会理睬 B 的确认。B 那边却以为新的运输连接已经建立了，并一直等待 A 发来数据。浪费 B 的资料。 <strong>三报文握手</strong>： 刚才的异常情况下，A 不会向 B 的确认发出确认。B 由于收不到确认，就知道 A 并没有要建立连接。</p><h3 id="tcp-连接的释放" tabindex="-1">TCP 连接的释放 <a class="header-anchor" href="#tcp-连接的释放" aria-label="Permalink to &quot;TCP 连接的释放&quot;">​</a></h3><p>数据传输结束后，通信的双方都可释放连接。现在 A 和 B 都处于 <strong>ESTABLISHED （已建立连接）状态</strong><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682750-c0400732-53ff-43c0-b58d-7755d3518463.png#averageHue=%23ececec&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u0a9e83c0&amp;originHeight=732&amp;originWidth=1024&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u1fec42e6-3c73-472e-a309-7a87c639d1a&amp;title=" alt=""></p><h4 id="🌝-四次挥手" tabindex="-1">🌝 四次挥手 <a class="header-anchor" href="#🌝-四次挥手" aria-label="Permalink to &quot;🌝 四次挥手&quot;">​</a></h4><ol><li>A 的应用进程先向其 TCP 发出连接释放报文段，并停止发送数据，主动关闭 TCP 连接。 <ol><li>A 把连释放报文段首部的终止控制位 FIN 置 1，其序号 seq = u, 它等于已发送数据的最后一个字节序号+1.</li><li>A 进入 <strong>FIN-WAIT-1 (终止等待 1)状态</strong>，等待 B 的确认</li><li>TCP 规定，FIN 报文段即使不携带数据，也消耗掉一个序号。</li></ol></li><li>B 收到连接释放报文段后发出确认。 <ol><li>确认号 ack = u + 1, 序号 seq = v（已发送序号+1）</li><li>B 进入 <strong>CLOSE-WAIT (关闭等待)状态</strong></li><li>TCP 服务器进程这时应通知高层应用进程，因而 A-&gt;B 这个方向的连接就释放了。</li><li>这时 TCP 处于 <strong>半关闭状态</strong>（half-close), 即 A 已经没有数据要发送了，但 B 若发送数据， A 仍要接收。也就是说，从 B -&gt; A 这个方向的连接并未关闭，这个状态会持续一段时间</li></ol></li><li>A 收到来自 B 的确认后，进入 <strong>FIN-WAIT-2 (终止等待 2)状态</strong>，等待 B 发出的连接释放报文段</li><li>若 B 已经没有要向 A 发送的数据，其应用进程就通知 TCP 释放连接。 <ol><li>这时 B 发出的连接释放报文段必须使用 FIN = 1。图中，还有 ACK = 1</li><li>假定 B 的序号为 w (在半关闭状态 B 可能又发送了一些数据) seq = w</li><li>B 还必须重复上次已发送过的确认号 ack = u + 1</li><li>这时 B 就进入 **LAST-ACK（最后确认）**状态，等待 A 确认</li></ol></li><li>A 在收到 B 的连接释放报文段后，必须对此发出确认。 <ol><li>在确认报文段中 ACK = 1， 确认号 ack = w + 1, 自己的序号 seq = u + 1（根据 TCP 标准，前面发送过的 FIN 报文段要消耗一个序号 所以，seq = u + 1）</li><li>然后 A 进入 <strong>TIME-WAIT (时间等待)状态</strong>。</li><li>此时 TCP 连接还没有释放掉。必须经过 <strong>时间等待计时器（TIME-WAIT）<strong>设置的 <strong>2MSL</strong> 后，A 才进入到</strong>CLOSED 状态</strong></li><li>时间 MSL 叫<strong>最长报文段寿命</strong>（Maximum Segment Lifetime） RFC 793 建议设为 2 分钟。TCP 允许不同的实现根据具体使用清空使用更小的 MSL 值。</li><li>从 A 进入到 TIME-WAIT 状态后，要进过 4 分钟才能进入到 CLOSED 状态，才能开始建立下一个新连接。</li></ol></li><li>B 只要收到了 A 发出的确认，就进入 CLOSED 状态。 <ol><li>同样，B 在撤销响应的传输控制块 TCB 后，就结束了这次的 TCP 连接。</li><li>我们注意到，B 结束 TCP 连接的时间要比 A 早一些。</li></ol></li></ol><p>为什么 A 要再 TIME-WAIT 状态必须等到 2MSL 的时间呢。</p><ol><li>为了保证 A 发送的最后一个 ACK 报文段能够到达 B</li><li>防止“<strong>已失效的连接请求报文段</strong>”出现在本连接中。</li></ol><p>参考： <a href="https://mp.weixin.qq.com/s/u56NcMs68sgi6uDpzJ61yw" target="_blank" rel="noreferrer">关于 TCP 三次握手和四次挥手，满分回答在此</a></p><h3 id="tcp-的有限状态机" tabindex="-1">TCP 的有限状态机 <a class="header-anchor" href="#tcp-的有限状态机" aria-label="Permalink to &quot;TCP 的有限状态机&quot;">​</a></h3><p><img src="https://zxd-blog-imgs.oss-cn-beijing.aliyuncs.com/imgs/20211208235925.png" alt="image-20211208235924886"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711682972-1eabaeea-2a56-4e34-a196-9d9e5a555b0b.png#averageHue=%23e6e6e6&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=ua867bb46&amp;originHeight=1130&amp;originWidth=1008&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u3ae3a7ff-0adc-44b6-857f-b980e200b72&amp;title=" alt=""></p><hr><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h2><p>HTTP 属于应用层协议，是<strong>面向事务</strong>（transaction-oriented）的。 是万维网上能够可靠地交换文件的重要基础。 <img src="https://zxd-blog-imgs.oss-cn-beijing.aliyuncs.com/imgs/20211207154746.png" alt="image-20211207154746435"><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683050-3bc71c9a-4feb-43fe-877b-504eb4023a8a.png#averageHue=%23e5e5e5&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=ue0406f37&amp;originHeight=734&amp;originWidth=1020&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ufe270e30-496e-43c3-a86f-8d8cac66a19&amp;title=" alt=""> 每个万维网网点都有一个服务器进程，它不断地监听 TCP 的端口 80，以便发现是否有浏览器向它发送连接建立请求。 <strong>HTTP 使用了面向连接的 TCP 作为运输层协议，保证了数据的可靠传输。<strong>但是</strong>HTTP 协议本身是无连接</strong>的。也就是说，虽然 HTTP 使用了 TCP 连接，但通信的双方在交换 HTTP 报文之前是不需要先建立 HTTP 连接。 HTTP 协议是<strong>无状态的</strong>。也就是说，同一个客户第二次访问同一个服务器上的页面时，服务器的相应与第一次被访问时的相同（假定服务器还没有把该页面更新），因为服务器并不记得曾经访问过的这个客户，也不记得为该客户曾经服务过多少次。 当用户在点击鼠标链接按某个 link 时，HTTP 协议首先要和服务器建立 TCP 链接。这需要使用三次报文握手。当建立 TCP 连接的三报文握手的前两部分完成后（经过了一个 RTT 时间），客户端就把 HTTP 请求报文，作为建立 TCP 连接三报文握手中的第三个报文的数据，发送给服务器。服务器收到 HTTP 请求报文后，就把所请求的文档作为响应报文返回给客户。 <img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683538-c7de3d12-11ec-4396-aed6-79a90fe151df.png#averageHue=%23ececec&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=ue3252168&amp;originHeight=622&amp;originWidth=902&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uc408b42c-5da8-41dd-9597-f64ce1b67e1&amp;title=" alt=""> 请求一个万维网文档所需的时间是该文档的<strong>传输时间</strong>加上<strong>两倍往返 RTT</strong>。一个 RTT 用于建立 TCP 连接，另一个 RTT 用于请求和接受相应数据。TCP 建立连接的三报文握手的第三个报文段中的数据，就是客户端对服务端的请求报文。 <strong>HTTP/1.0 的主要缺点，就是每请求一个文档就要有两倍 RTT 的开销。</strong> HTTP/1.1 协议较好的解决了这个问题，它使用了持续连接（persistent conncetion）。所谓持续连接就是服务器再发送响应后仍然在一段时间内保持这条连接，使同一个客户（浏览器）和该服务器可以继续在这条连接上传送后续的 HTTP 请求报文和响应报文。</p><h3 id="http-报文结构" tabindex="-1">HTTP 报文结构 <a class="header-anchor" href="#http-报文结构" aria-label="Permalink to &quot;HTTP 报文结构&quot;">​</a></h3><p>HTTP 有两类报文：</p><ul><li>请求报文 -- 从客户向服务器发送请求报文。</li><li>响应报文 -- 从服务器到客户的回答。<img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683392-bedac29e-ce0f-453d-bd13-9e5054d4a184.png#averageHue=%23ededed&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u46a54e29&amp;originHeight=540&amp;originWidth=1290&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u5970d851-790d-4ecc-b325-b02fee86fe7&amp;title=" alt=""></li></ul><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683535-d0aa1f4d-4dfa-48dc-8a40-01fc5ada0c5f.png#averageHue=%23e2e2e2&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u06cd7524&amp;originHeight=658&amp;originWidth=1540&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ua62086fe-7317-4a12-9194-42d68400c01&amp;title=" alt=""><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683847-db4f1bcf-f9aa-4f20-8424-a8d5f7adf68a.png#averageHue=%23e2e2e2&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u2fd37772&amp;originHeight=556&amp;originWidth=1020&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u55ebe974-f80c-4624-bae7-73e576a96b4&amp;title=" alt=""></p><h4 id="请求报文" tabindex="-1">请求报文 <a class="header-anchor" href="#请求报文" aria-label="Permalink to &quot;请求报文&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711683900-83e9dadd-1ff8-4c92-908f-f255aa90853a.png#averageHue=%23eaeaea&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u52d38be7&amp;originHeight=622&amp;originWidth=1550&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ue69c3873-5465-4fbb-9b8e-1b51ee0fa69&amp;title=" alt=""></p><h4 id="响应报文" tabindex="-1">响应报文 <a class="header-anchor" href="#响应报文" aria-label="Permalink to &quot;响应报文&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/png/302528/1711711684007-9062c033-7f8b-4715-bfd5-0e34e399a592.png#averageHue=%23e8e8e8&amp;clientId=ubf00410f-fb77-4&amp;from=paste&amp;id=u2e8e20fd&amp;originHeight=780&amp;originWidth=1514&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u13674f94-7328-43f7-be02-95efbf3f428&amp;title=" alt=""></p><h4 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h4><p>HTTP 是无状态的，但实际工作中，一些站点常常希望能够识别用户，跟踪用户状态。要做到这一点，可以在 HTTP 中使用 Cookie，<strong>Cookie 表示 HTTP 服务器和客户之间传递的状态信息</strong>。</p><h5 id="cookie-的工作原理" tabindex="-1">cookie 的工作原理 <a class="header-anchor" href="#cookie-的工作原理" aria-label="Permalink to &quot;cookie 的工作原理&quot;">​</a></h5><p>当用户 A 浏览某个使用 Cookie 的网站时，该网站的服务器就位 A 产生一个唯一的识别码，并以此作为索引在服务器的后端数据库中产生一个项目。接着在给 A 的 HTTP 响应报文中添加一个叫做 Set-cookie 的首部行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Set-cookie: 31d5d96e307aad66</span></span></code></pre></div><p>当 A 接收到这个响应时，其浏览器就在它管理的特定 Cookie 文件中添加一行，其中包括这个<strong>服务器的主机名</strong>和<strong>Set-cookie 后面给出的识别码</strong>。当 A 继续浏览这个网站时，每发送一个 HTTP 请求报文， 其浏览器就会从其 Cookie 文件中取出这个网站的识别码，并放到 HTTP 请求报文的 Cookie 首部行中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Cookie: 31d5d96e307aad66</span></span></code></pre></div><p>于是，这个网站就能跟踪用户 31d5d96e307aad66（用户 A）在该网站的活动。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li>计算机网络 第 7 版 谢希仁</li><li><a href="https://juejin.cn/post/6916073832335802382" target="_blank" rel="noreferrer">原来 TCP 为了保证可靠传输做了这么多</a></li></ol>',153),n=[i];function s(l,p,d,m,h,g){return e(),t("div",null,n)}const f=a(r,[["render",s]]);export{u as __pageData,f as default};
