(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/EDR":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"0zOZ":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),c=n("q5FH"),i=n.n(c),l=n("8Jek"),s=n.n(l);function m(e){var a=e.className,n=e.children;return r.a.createElement("div",{className:s()(i.a.richtext,a),dangerouslySetInnerHTML:{__html:n}})}},"23aj":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),c=n("6EUB"),i=n("ab5g"),l=n("Zpkv"),s=n.n(l),m=n("97YO"),u=n("DGdZ"),o=n.n(u),d=[o.a.sizeOne,o.a.sizeTwo,o.a.sizeThree,o.a.sizeFour,o.a.sizeFive];function E(e){var a=e.size,n=void 0===a?1:a;return r.a.createElement("div",{className:d[n]})}var h=n("nO60"),f=n("0zOZ"),v=n("Ghh6"),p=n.n(v),b=n("J3C/"),g=function(e){var a=e.role,n=e.img,t=e.name,c=e.children;return r.a.createElement("div",{className:p.a.member},r.a.createElement("div",{className:p.a.memberImg,style:{backgroundImage:"url(".concat(n)}}),r.a.createElement("div",null,r.a.createElement(m.a,{level:3,className:p.a.memberName},t),r.a.createElement("span",{className:p.a.role},a),r.a.createElement(b.a,{className:p.a.memberDescription},c)))};function N(e){var a=e.data;return r.a.createElement("div",{className:p.a.team},a.map(function(e){return r.a.createElement(g,{role:e.role,key:e.name,img:"".concat(e.img),name:e.name},e.description)}))}var k=n("ju2k"),w=n("3vYx"),z=n("kk4H"),I=n.n(z);function J(e){var a=e.headline,n=e.data;return r.a.createElement("div",{className:I.a.list},r.a.createElement(m.a,{level:2},a),r.a.createElement("ul",{className:I.a.list},n.map(function(e){return r.a.createElement("li",{key:e,className:I.a.item},e)})))}n.d(a,"default",function(){return O});var y=[{img:"/static/lasse.jpg",role:"Design",name:"Lasse Diercks",description:"Seit 9 Jahren Erfahrung mit der benutzergerechten Gestaltung von Oberflächen. Von UX bis zur technischen Umsetzung."},{img:"/static/hannes.jpg",role:"Entwicklung",name:"Hannes Diercks",description:"Entwickelt seit 10 Jahren Web basierte Applikationen. Am liebsten in JavaScript und ohne Server. In stabil und mit bedachter Developer Experience."}];function O(e){return r.a.createElement(i.a,{title:e.pageTitle,description:e.pageDescription},r.a.createElement("main",null,r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:s.a.headerText},r.a.createElement(m.a,{level:1,isRichText:!0},e.headline),r.a.createElement(w.a,null,e.subline)),r.a.createElement(h.a,{data:e.headerbuttons})),r.a.createElement(f.a,{className:s.a.mission},e.missionText),r.a.createElement(E,{size:2}),r.a.createElement(k.a,{headline:"Habt ihr eine Idee, die wir zum Leben erwecken sollen?"}),r.a.createElement(E,{size:2}),r.a.createElement(N,{data:y}),r.a.createElement(J,{headline:"Referenzen",data:e.references})))}O.getInitialProps=function(){return Object(c.a)("Startpage")}},"3vYx":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),c=n("lnJY"),i=n.n(c),l=n("8Jek"),s=n.n(l);function m(e){var a=e.children,n=e.small;return r.a.createElement("span",{className:s()(i.a.subline,n&&i.a.small)},a)}},"J3C/":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=n("q1tI"),r=n.n(t),c=n("R0I3"),i=n.n(c),l=n("8Jek"),s=n.n(l);function m(e){var a=e.children,n=void 0===a?"":a,c=e.margin,l=e.className;return r.a.createElement("p",{className:s()(i.a.paragraph,c&&i.a.margin,l)},n.split("\n").map(function(e,a){return r.a.createElement(t.Fragment,{key:a},e,r.a.createElement("br",null))}))}},ju2k:function(e,a,n){"use strict";n.d(a,"a",function(){return u});var t=n("q1tI"),r=n.n(t),c=n("97YO"),i=n("nO60"),l=n("gJsz"),s=n.n(l),m=[{label:"Anrufen",href:"tel:004915734376122"},{label:"Anschreiben",href:"mailto:contact@schubrake.de",secondary:!0}];function u(e){var a=e.headline;return r.a.createElement("div",{className:s.a.wrapper},r.a.createElement(c.a,{className:s.a.headline},a||"Habt ihr eine Idee die wir mal besprechen sollten?"),r.a.createElement(i.a,{data:m}))}},nO60:function(e,a,n){"use strict";var t=n("q1tI"),r=n.n(t),c=n("dqeG"),i=n.n(c),l=n("RCZ+"),s=n.n(l),m=n("8Jek"),u=n.n(m);function o(e){var a=e.secondary,n=e.children,t=e.href;return r.a.createElement("a",{href:t,className:u()(s.a.button,a&&s.a.secondary)},n)}function d(e){var a=e.data;return r.a.createElement("div",{className:i.a.component},a.map(function(e){return r.a.createElement(o,{href:e.href,key:e.label,secondary:e.secondary},e.label)}))}n.d(a,"a",function(){return d})}},[["/EDR","5d41","9da1","ad9d"]]]);