(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/EDR":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"0zOZ":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),l=n("q5FH"),c=n.n(l),i=n("8Jek"),s=n.n(i);function m(e){var a=e.className,n=e.children;return r.a.createElement("div",{className:s()(c.a.richtext,a),dangerouslySetInnerHTML:{__html:n}})}},"23aj":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),l=n("6EUB"),c=n("ab5g"),i=n("Zpkv"),s=n.n(i),m=n("97YO"),u=n("y30M"),o=n.n(u),d=n("J3C/");function E(e){var a=e.headline,n=e.children;return r.a.createElement("div",null,r.a.createElement(m.a,{level:3},a),r.a.createElement(d.a,null,n))}function v(e){var a=e.data;return r.a.createElement("div",{className:o.a.wrapper},a.map(function(e){return r.a.createElement(E,{key:e.headline,headline:e.headline},e.text)}))}var h=n("DGdZ"),p=n.n(h),f=[p.a.sizeOne,p.a.sizeTwo,p.a.sizeThree,p.a.sizeFour,p.a.sizeFive];function g(e){var a=e.size,n=void 0===a?1:a;return r.a.createElement("div",{className:f[n]})}var N=n("nO60"),b=n("0zOZ"),k=n("Ghh6"),z=n.n(k),w=function(e){var a=e.role,n=e.img,t=e.name,l=e.children;return r.a.createElement("div",{className:z.a.member},r.a.createElement("div",{className:z.a.memberImg,style:{backgroundImage:"url(".concat(n)}}),r.a.createElement("div",null,r.a.createElement(m.a,{level:3,className:z.a.memberName},t),r.a.createElement("span",{className:z.a.role},a),r.a.createElement(d.a,{className:z.a.memberDescription},l)))};function y(e){var a=e.data;return r.a.createElement("div",{className:z.a.team},a.map(function(e){return r.a.createElement(w,{role:e.role,key:e.name,img:"".concat(e.img),name:e.name},e.description)}))}var I=n("rtAX"),J=n.n(I);function T(e){var a=e.headline,n=e.children;return r.a.createElement("div",{className:J.a.wrapper},r.a.createElement(m.a,{level:4},a),r.a.createElement("p",{className:J.a.text},n))}var x=n("3vYx"),D=n("kk4H"),O=n.n(D);function _(e){var a=e.headline,n=e.data;return r.a.createElement("div",{className:O.a.list},r.a.createElement(m.a,{level:2},a),r.a.createElement("ul",{className:O.a.list},n.map(function(e){return r.a.createElement("li",{key:e,className:O.a.item},e)})))}n.d(a,"default",function(){return R});var q=[{img:"/static/lasse.jpg",role:"Konzeption",name:"Lasse Diercks",description:"Seit 9 Jahren Erfahrung mit der Benutzergerechten gestaltung von Oberflächen. Von UX bis zur technischen Umsetzung."},{img:"/static/hannes.jpg",role:"Entwicklung",name:"Hannes Diercks",description:"Entwickelt seit 10 Jahren Web basierte Applikationen. Am liebsten in JavaScript und ohne Server. In stabil und mit bedachter Developer Experience."}];function R(e){return r.a.createElement(c.a,{title:e.pageTitle,description:e.pageDescription},r.a.createElement("main",null,r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:s.a.headerText},r.a.createElement(m.a,{level:1,isRichText:!0},e.headline),r.a.createElement(x.a,null,e.subline)),r.a.createElement(N.a,{data:e.headerbuttons})),r.a.createElement(b.a,{className:s.a.mission},e.missionText),r.a.createElement(g,{size:3}),r.a.createElement(m.a,{level:2},"Warum Itertativ?"),r.a.createElement(v,{data:e.whyIterative}),r.a.createElement(b.a,{className:s.a.mission},e.howText),r.a.createElement(g,{size:3}),r.a.createElement(m.a,{level:2},"Qualitäten"),r.a.createElement(v,{data:e.tools}),r.a.createElement(T,{headline:"Mehr buzz?"},e.buzzwords),r.a.createElement(m.a,{level:2},"Team"),r.a.createElement(y,{data:q}),r.a.createElement(_,{headline:"Referenzen",data:e.references})))}R.getInitialProps=function(){return Object(l.a)("Startpage")}},"3vYx":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),l=n("lnJY"),c=n.n(l),i=n("8Jek"),s=n.n(i);function m(e){var a=e.children,n=e.small;return r.a.createElement("span",{className:s()(c.a.subline,n&&c.a.small)},a)}},"J3C/":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),l=n("R0I3"),c=n.n(l),i=n("8Jek"),s=n.n(i);function m(e){var a=e.children,n=void 0===a?"":a,l=e.margin,i=e.className;return r.a.createElement("p",{className:s()(c.a.paragraph,l&&c.a.margin,i)},n.split("\n").map(function(e,a){return r.a.createElement(t.Fragment,{key:a},e,r.a.createElement("br",null))}))}},nO60:function(e,a,n){"use strict";var t=n("q1tI"),r=n.n(t),l=n("dqeG"),c=n.n(l),i=n("RCZ+"),s=n.n(i),m=n("8Jek"),u=n.n(m);function o(e){var a=e.secondary,n=e.children,t=e.href;return r.a.createElement("a",{href:t,className:u()(s.a.button,a&&s.a.secondary)},n)}function d(e){var a=e.data;return r.a.createElement("div",{className:c.a.component},a.map(function(e){return r.a.createElement(o,{href:e.href,key:e.label,secondary:e.secondary},e.label)}))}n.d(a,"a",function(){return d})}},[["/EDR","5d41","9da1","ad9d"]]]);