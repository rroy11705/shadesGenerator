(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=(a(20),a(1)),s=a(14);function u(e){var t=e.toString(16);return 1===t.length?"0"+t:t}var m=function(e,t,a){return"#"+u(e)+u(t)+u(a)},i=function(e){var t=e.rgb,a=e.weight,o=Object(n.useState)(!1),c=Object(l.a)(o,2),u=c[0],i=c[1],h=t.join(","),f=m.apply(void 0,Object(s.a)(t));return Object(n.useEffect)((function(){var e=setTimeout((function(){i(!1)}),3e3);return function(){return clearTimeout(e)}}),[u]),r.a.createElement("article",{className:"color ".concat(parseInt(f.replace("#",""),16)<=parseInt("aaaaaa",16)&&"color-light"),style:{backgroundColor:"rgb(".concat(h,")")},onClick:function(){i(!0),navigator.clipboard.writeText(f)}},r.a.createElement("p",{className:"percent-value"},a,"%"),r.a.createElement("p",{className:"color-value"},f),u&&r.a.createElement("p",{className:"alert"},"copied to clipboard"))},h=a(6),f=a.n(h),d=a(8),b=a(7),E=a.n(b),p={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};f.a.setAppElement("#root");var g=function(){var e,t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(10),u=Object(l.a)(s,2),m=u[0],h=u[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),v=g[0],N=g[1],y=Object(n.useState)(new E.a("#f15025").all(m)),O=Object(l.a)(y,2),j=O[0],w=O[1],S=r.a.useState(!1),C=Object(l.a)(S,2),k=C[0],I=C[1];function x(){I(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{isOpen:k,onAfterOpen:function(){e.style.color="#f15025"},onRequestClose:x,style:p,contentLabel:"Info Modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h2",{ref:function(t){return e=t}},"How to use Shades Generator"),r.a.createElement("button",{className:"fa-icon"},r.a.createElement(d.b,{onClick:x},"close"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,"Choose a color code hex whose shades you want and choose the number of shades you want to generate."),r.a.createElement("p",null,"If you have choden ",r.a.createElement("strong",null,"N")," number of shades, then this Shades Generator would generate ",r.a.createElement("strong",null,"N/2")," shades which are lighter than your chosen shade, the color you have chosen (at 0%) and ",r.a.createElement("strong",null,"N/2")," shades which are darker."),r.a.createElement("p",null,"Default vaule for color is ",r.a.createElement("strong",null,"#f15025")," and default number of shades is ",r.a.createElement("strong",null,"20"),"."))),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"container-form"},r.a.createElement("h3",null,"Shades Generator"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{console.log(m);var t=new E.a(o).all(m);w(t),N(!1)}catch(v){N(!0),console.log(v)}}},r.a.createElement("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)},placeholder:"Color Code (#f15025)",className:"".concat(v?"error":null)}),r.a.createElement("input",{type:"number",placeholder:"Number of Shades (20)",onChange:function(e){return h(e.target.value?200/e.target.value:10)},className:"".concat(v?"error":null)}),r.a.createElement("button",{type:"submit",className:"btn"},"submit"))),r.a.createElement("div",{className:"container-info"},r.a.createElement("button",{className:"fa-icon"},r.a.createElement(d.a,{onClick:function(){I(!0)}})))),r.a.createElement("section",{className:"colors"},j.map((function(e,t){return r.a.createElement(i,Object.assign({key:t},e))}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e8bccce4.chunk.js.map