(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),u=e(1),i=(e(9),e(0)),s=function(t){var n=t.goods;return Object(i.jsx)("ul",{children:n.map((function(t){return Object(i.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(u.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(u.useState)(""),d=Object(r.a)(c,2),l=d[0],b=d[1],f=Object(u.useMemo)((function(){return function(){return a().then(o).catch((function(t){return b(t)}))}}),[]),j=Object(u.useMemo)((function(){return function(){return a().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).splice(0,5)})).then(o).catch((function(t){return b(t)}))}}),[]),h=Object(u.useMemo)((function(){return function(){return a().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o).catch((function(t){return b(t)}))}}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button","data-cy":"all-button",onClick:f,children:"Load all goods"}),Object(i.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:j,children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button","data-cy":"red-button",onClick:h,children:"Load red goods"}),l?Object(i.jsx)("p",{children:l}):Object(i.jsx)(s,{goods:e})]})};c.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.801ce0aa.chunk.js.map