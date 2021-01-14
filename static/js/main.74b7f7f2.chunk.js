(this.webpackJsonplearnifi=this.webpackJsonplearnifi||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(17),s=n.n(r),o=(n(31),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))}),l=n(6),d=n(2);n(8);var h=function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsx)("h1",{children:"Hello from Home"})})},j=n(18),b=n(19),x=n(11),p=n(25),m=n(24),f=n(20),O=n.n(f);var u=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.textfront})]})};var g=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.textback})]})},v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(x.a)(e)),e}return Object(b.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return Object(c.jsxs)(O.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal",children:[Object(c.jsxs)("div",{className:"card-side card-front",onClick:this.handleClick,style:{backgroundColor:"#"+this.props.color},children:[Object(c.jsx)(u,{name:this.props.name,textfront:this.props.textfront}),Object(c.jsx)("p",{className:"hint",children:"Click or Tap to flip"})]}),Object(c.jsxs)("div",{className:"card-side card-back",onClick:this.handleClick,style:{backgroundColor:"#"+(this.props.color+222222)},children:[Object(c.jsx)(g,{name:this.props.name,textback:this.props.textback}),Object(c.jsx)("p",{className:"hint",children:"Click or Tap to flip"})]})]})}}]),n}(i.a.Component),y=[{name:"MA",textfront:"Moving Average",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:224477},{name:"EMA",textfront:"Exponential Moving Average",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:334477},{name:"MACD",textfront:"Moving Average Divergence Convergence",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:226677},{name:"BOLL",textfront:"Bollinger Bands",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:224477},{name:"RSI",textfront:"Relative Strength Index",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:443377},{name:"KDJ",textfront:"Random Index",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:223355},{name:"OBV",textfront:"On-Balance Volume ",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:555577},{name:"VOL",textfront:"Volume",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:335566}];var k=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h2",{children:"Indicators"}),Object(c.jsx)("div",{className:"description",children:Object(c.jsx)("p",{children:'A technical indicator is a mathematical calculation based on the history and volumes exchanged of a certain asset. They are a fundamental part of technical analysis and are typically used to predict market trend. Generally they indicate wheter the price is in an "overbought" or "oversold" condition.'})}),Object(c.jsx)("div",{className:"cards-container",children:y.map((function(e,t){return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)(v,{name:e.name,textfront:e.textfront,textback:e.textback,color:e.bgcolor})},t)}))})]})})},C=[{name:"Line Charts",textfront:"Very simple type of chart, may be too simple for day traders. Often used in presentations and reports. Commonly used also to draw trend lines to anticipate potential price inflections.",textback:"Composed of a single line, that connects the closing prices at each time intervals.",bgcolor:234567},{name:"Candlestick Charts",textfront:"This chart utilizes the opening, closing, high and low price data. Candlestick charts give a lot of information, and it's the most common type of chart used by day traders. This large amount of information is sometimes perceived as too 'noisy'.",textback:"The candlestick is composed of 3 parts, the body, the upper tail and the lower tail. The body goes from the opening to the closing price. The upper and lower tails are thin lines that extend from the highest to the lowest prices reached. A green candle indicates a higher closing price than the opening one, a red one indicates a lower one.",bgcolor:543267},{name:"Bar Charts",textfront:"Also known as Open-High-Low-Close (OLHC), many traders find OHLC charts easier to follow than candlestick ones. The absence of color filters out information that is perceived as emotion from some traders.",textback:"The bars in an OLHC chart are composed of 3 parts, a vertical line, that extends from the lowest to the highest prices, and 2 horizontal lines, indicating the opening price (on the left) and the closing price (on the right) for each time interval.",bgcolor:324567},{name:"Point and Figures Charts",textfront:"Originally developed as a price recording system, it has become a charting method. This charting method focuses only on significant price moves, filtering out the 'noise'.",textback:"This type of chart is discretized, and consists of Xs and Os to represent price changes. X columns represent rising prices, and O columns represent falling prices. The substantial different of Point and Figure charts is that the time is not used on linear basis, instead, depending on the method, a new column is started everytime the price reaches certain levels.",bgcolor:444466},{name:"Other types of charts",textfront:"There are other types of charts used, but the majority of them has little differences compared to the aforementioned ones and give no extra information to traders.",textback:"Volume type charts are missing from these cards.",bgcolor:222222}];var w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h2",{children:"Charts"}),Object(c.jsx)("div",{className:"description",children:Object(c.jsx)("p",{children:"Charts are the main tools used for technical analysis. Charts plot the price history of a certain asset. The visual represantation allows to recognize rare or common price patterns, trends, support and resistance."})}),Object(c.jsx)("div",{className:"cards-container",children:C.map((function(e,t){return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)(v,{name:e.name,textfront:e.textfront,textback:e.textback,color:e.bgcolor})},t)}))})]})})};var N=function(){return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h2",{children:"Info"}),Object(c.jsx)("div",{})]})};var T=function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("div",{className:"error",children:[Object(c.jsx)("p",{className:"error-title",children:"Error 404"}),Object(c.jsx)("p",{children:"Check if the URL is correct, it seems like we can't find what you're looking for."})]})})};var F=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"sitename",children:Object(c.jsx)("h1",{children:"Learnifi"})}),Object(c.jsx)("div",{className:"topnav",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/charts",children:"Charts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/indicators",children:"Indicators"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/info",children:"Info"})})]})})]}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/indicators",children:Object(c.jsx)(k,{})}),Object(c.jsx)(d.b,{exact:!0,path:"/charts",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.b,{exact:!0,path:"/info",children:Object(c.jsx)(N,{})}),Object(c.jsx)(d.b,{exact:!0,path:"/",children:Object(c.jsx)(h,{})}),Object(c.jsx)(d.b,{exact:!0,path:"/cardscharts",children:Object(c.jsx)(h,{})}),Object(c.jsx)(d.b,{path:"/404",children:Object(c.jsx)(T,{})}),Object(c.jsx)(d.a,{to:"404"})]})]})};var L=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{className:"sitename",children:Object(c.jsx)("h1",{children:"Learnifi"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["Find me on ",Object(c.jsxs)("a",{className:"find",href:"https://github.com/colorde/filearn",target:"_blank",children:["Github",Object(c.jsx)("svg",{className:"icon",height:"24",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})]})]})}),Object(c.jsxs)("div",{className:"botnav",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/charts",children:"Charts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/indicators",children:"Indicators"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/info",children:"Info"})})]}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/colorde/filearn",children:"Contribute"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/terms of use",children:"Terms of Use"})})]})]})]})})},S=n(22),A=n(23);var I=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],i=t[1];return window.addEventListener("scroll",(function(){!n&&window.pageYOffset>400?i(!0):n&&window.pageYOffset<=400&&i(!1)})),Object(c.jsx)(A.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"flex":"none"}})};var B=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(F,{}),Object(c.jsx)(I,{}),Object(c.jsx)(L,{})]})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),o()},8:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.74b7f7f2.chunk.js.map