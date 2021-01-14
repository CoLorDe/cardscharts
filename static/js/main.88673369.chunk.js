(this.webpackJsonplearnifi=this.webpackJsonplearnifi||[]).push([[0],{31:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(17),i=c.n(s),o=(c(31),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))}),l=c(6),d=c(2);c(8);var h=function(){return Object(a.jsx)("div",{className:"main",children:Object(a.jsx)("h1",{children:"Hello from Home"})})},j=c(18),b=c(19),x=c(11),p=c(25),m=c(24),f=c(20),O=c.n(f);var u=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:e.name}),Object(a.jsx)("p",{children:e.textfront})]})};var g=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:e.name}),Object(a.jsx)("p",{children:e.textback})]})},v=function(e){Object(p.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(x.a)(e)),e}return Object(b.a)(c,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return Object(a.jsxs)(O.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal",children:[Object(a.jsxs)("div",{className:"card-side card-front",onClick:this.handleClick,style:{backgroundColor:"#"+this.props.color},children:[Object(a.jsx)(u,{name:this.props.name,textfront:this.props.textfront}),Object(a.jsx)("p",{className:"hint",children:"Click or Tap to flip"})]}),Object(a.jsxs)("div",{className:"card-side card-back",onClick:this.handleClick,style:{backgroundColor:"#"+(this.props.color+222222)},children:[Object(a.jsx)(g,{name:this.props.name,textback:this.props.textback}),Object(a.jsx)("p",{className:"hint",children:"Click or Tap to flip"})]})]})}}]),c}(r.a.Component),y=[{name:"MA",textfront:"Moving Average",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:224477},{name:"EMA",textfront:"Exponential Moving Average",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:334477},{name:"MACD",textfront:"Moving Average Divergence Convergence",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:226677},{name:"BOLL",textfront:"Bollinger Bands",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:224477},{name:"RSI",textfront:"Relative Strength Index",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:443377},{name:"KDJ",textfront:"Random Index",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:223355},{name:"OBV",textfront:"On-Balance Volume ",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:555577},{name:"VOL",textfront:"Volume",textback:"Smooths out price data by creating a constantly updated average price",bgcolor:335566}];var k=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h2",{children:"Indicators"}),Object(a.jsx)("div",{className:"description",children:Object(a.jsx)("p",{children:'A technical indicator is a mathematical calculation based on the history and volumes exchanged of a certain asset. They are a fundamental part of technical analysis and are typically used to predict market trend. Generally they indicate wheter the price is in an "overbought" or "oversold" condition.'})}),Object(a.jsx)("div",{className:"cards-container",children:y.map((function(e,t){return Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(v,{name:e.name,textfront:e.textfront,textback:e.textback,color:e.bgcolor})},t)}))})]})})},C=[{name:"Line Charts",textfront:"Very simple type of chart, may be too simple for day traders. Often used in presentations and reports. Commonly used also to draw trend lines to anticipate potential price inflections.",textback:"Composed of a single line, that connects the closing prices at each time intervals.",bgcolor:234567},{name:"Candlestick Charts",textfront:"This chart utilizes the opening, closing, high and low price data. Candlestick charts give a lot of information, and it's the most common type of chart used by day traders. This large amount of information is sometimes perceived as too 'noisy'.",textback:"The candlestick is composed of 3 parts, the body, the upper tail and the lower tail. The body goes from the opening to the closing price. The upper and lower tails are thin lines that extend from the highest to the lowest prices reached. A green candle indicates a higher closing price than the opening one, a red one indicates a lower one.",bgcolor:543267},{name:"Bar Charts",textfront:"Also known as Open-High-Low-Close (OLHC), many traders find OHLC charts easier to follow than candlestick ones. The absence of color filters out information that is perceived as emotion from some traders.",textback:"The bars in an OLHC chart are composed of 3 parts, a vertical line, that extends from the lowest to the highest prices, and 2 horizontal lines, indicating the opening price (on the left) and the closing price (on the right) for each time interval.",bgcolor:324567},{name:"Point and Figures Charts",textfront:"Originally developed as a price recording system, it has become a charting method. This charting method focuses only on significant price moves, filtering out the 'noise'.",textback:"This type of chart is discretized, and consists of Xs and Os to represent price changes. X columns represent rising prices, and O columns represent falling prices. The substantial different of Point and Figure charts is that the time is not used on linear basis, instead, depending on the method, a new column is started everytime the price reaches certain levels.",bgcolor:444466},{name:"Other types of charts",textfront:"There are other types of charts used, but the majority of them has little differences compared to the aforementioned ones and give no extra information to traders.",textback:"Volume type charts are missing from these cards.",bgcolor:222222}];var w=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h2",{children:"Charts"}),Object(a.jsx)("div",{className:"description",children:Object(a.jsx)("p",{children:"Charts are the main tools used for technical analysis. Charts plot the price history of a certain asset. The visual represantation allows to recognize rare or common price patterns, trends, support and resistance."})}),Object(a.jsx)("div",{className:"cards-container",children:C.map((function(e,t){return Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(v,{name:e.name,textfront:e.textfront,textback:e.textback,color:e.bgcolor})},t)}))})]})})};var N=function(){return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h2",{children:"Info"}),Object(a.jsx)("div",{})]})};var T=function(){return Object(a.jsx)("div",{className:"main",children:Object(a.jsxs)("div",{className:"error",children:[Object(a.jsx)("p",{className:"error-title",children:"Error 404"}),Object(a.jsx)("p",{children:"Check if the URL is correct, it seems like we can't find what you're looking for."})]})})};var F=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"sitename",children:Object(a.jsx)("h1",{children:"Learnifi"})}),Object(a.jsx)("div",{className:"topnav",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/charts",children:"Charts"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/indicators",children:"Indicators"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/info",children:"Info"})})]})})]}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/cardscharts/indicators",children:Object(a.jsx)(k,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/cardscharts/charts",children:Object(a.jsx)(w,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/cardscharts/info",children:Object(a.jsx)(N,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/cardscharts/",children:Object(a.jsx)(h,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/cardscharts/cardscharts",children:Object(a.jsx)(h,{})}),Object(a.jsx)(d.b,{path:"/cardscharts/404",children:Object(a.jsx)(T,{})}),Object(a.jsx)(d.a,{to:"404"})]})]})};var L=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("div",{className:"sitename",children:Object(a.jsx)("h1",{children:"Learnifi"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:["Find me on ",Object(a.jsxs)("a",{className:"find",href:"https://github.com/colorde/filearn",target:"_blank",children:["Github",Object(a.jsx)("svg",{className:"icon",height:"24",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})]})]})}),Object(a.jsxs)("div",{className:"botnav",children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/charts",children:"Charts"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/indicators",children:"Indicators"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/info",children:"Info"})})]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/colorde/filearn",children:"Contribute"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/cardscharts/terms of use",children:"Terms of Use"})})]})]})]})})},S=c(22),A=c(23);var I=function(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),c=t[0],r=t[1];return window.addEventListener("scroll",(function(){!c&&window.pageYOffset>400?r(!0):c&&window.pageYOffset<=400&&r(!1)})),Object(a.jsx)(A.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:c?"flex":"none"}})};var B=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(F,{}),Object(a.jsx)(I,{}),Object(a.jsx)(L,{})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),o()},8:function(e,t,c){}},[[37,1,2]]]);
//# sourceMappingURL=main.88673369.chunk.js.map