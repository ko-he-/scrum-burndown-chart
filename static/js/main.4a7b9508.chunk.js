(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(349)},167:function(e,t,a){},168:function(e,t,a){},349:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(47),o=a.n(i),l=(a(167),a(168),a(127)),c=a(128),s=a(139),u=a(129),m=a(48),d=a(140),h=a(19),E=a(79),g=a.n(E),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={restTaskPoint:0},a.handleRestTaskPointChange=a.handleRestTaskPointChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleRestTaskPointChange",value:function(e){this.setState({restTaskPoint:e.target.value})}},{key:"render",value:function(){var e=this.props.title,t=new Date("2019/5/21").getTime(),a=new Date("2019/9/3").getTime(),n=(new Date).getTime(),i=25*(a-t)/864e5/14,o=25*(a-n)/864e5/14,l=[{time:t,capacityValue:i},{time:n,capacityValue:o},{time:a,capacityValue:0}],c=[{time:n,restValue:this.state.restTaskPoint},{time:a,restValue:0}],s=l.concat(c);return console.log(s),r.a.createElement("div",{className:"BurndownChart"},r.a.createElement("div",null,e,t.toString(),a.toString(),n.toString(),r.a.createElement("br",null),i,r.a.createElement("br",null),o,r.a.createElement("br",null),this.state.restTaskPoint),r.a.createElement("div",null,r.a.createElement(h.b,{width:"100%",height:300},r.a.createElement(h.a,{data:s},r.a.createElement(h.e,{dataKey:"time",type:"number",domain:["auto","auto"],tickFormatter:function(e){return g()(e).format("YYYY/MM/DD")}}),r.a.createElement(h.f,{type:"number",domain:["auto","auto"]}),r.a.createElement(h.d,{labelFormatter:function(e){return g()(e).format("YYYY/MM/DD")}}),r.a.createElement(h.c,{line:!0,dataKey:"capacityValue",fill:"#8884d8"}),r.a.createElement(h.c,{line:!0,dataKey:"restValue",fill:"#555555"})))),"//",r.a.createElement("div",null,"//  ",r.a.createElement("input",{value:this.state.restTaskPoint,onChange:this.handleRestTaskPointChange}),"//"))}}]),t}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{title:"BurndownChart"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.4a7b9508.chunk.js.map