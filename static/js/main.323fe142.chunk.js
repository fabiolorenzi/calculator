(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c(0),i=c(16),a=c.n(i),s=c(12),r=(c(23),c(24),c(2)),u=c(9);var j=function(){var e=Object(l.useState)(""),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(l.useState)([]),s=Object(u.a)(a,2),r=s[0],j=s[1],o=Object(l.useState)([]),b=Object(u.a)(o,2),h=b[0],d=b[1],v=0,O=function(e){c.length<7&&i(c+e)},p=function(e){e.preventDefault(),c.length>0|"0"!==e.target.value&&O(e.target.value)},x=function(){var e=parseInt(c),t=r;t.push(e),j(t)};return Object(n.jsxs)("div",{className:"fullMachine",children:[Object(n.jsxs)("p",{id:"nameMachine",children:["Calculator ",Object(n.jsx)("b",{children:"by"})," L. Fabio"]}),Object(n.jsx)("div",{id:"output",children:Object(n.jsx)("h2",{children:c})}),Object(n.jsxs)("div",{className:"grid",children:[Object(n.jsxs)("div",{className:"firstLine",children:[Object(n.jsx)("button",{value:"0",onClick:p,children:"0"}),Object(n.jsx)("button",{id:"clearB",onClick:function(e){e.preventDefault(),i(""),j([]),d([]),v=0},children:"ON/C"}),Object(n.jsx)("button",{className:"oper",onClick:function(e){e.preventDefault(),x();for(var t=r,c=h,n=0;n<t.length;n++)if("\xf7"===c[n]){var l=n+1,a=t[n]/t[l];t[n]=a,t.splice(l,1),c.splice(n,1)}for(var s=0;s<t.length;s++)if("\xd7"===c[s]){var u=s+1,j=t[s]*t[u];t[s]=j,t.splice(u,1),c.splice(s,1)}v=t[0];for(var o=0;o<c.length;o++)if("+"===c[o]){var b=t[o+1];v+=b}else{var d=t[o+1];v-=d}i(v)},children:"="}),Object(n.jsx)("button",{className:"oper",onClick:function(e){e.preventDefault(),x();var t=h;t.push("+"),d(t),i("")},children:"+"})]}),Object(n.jsxs)("div",{className:"secondLine",children:[Object(n.jsx)("button",{value:"7",onClick:p,children:"7"}),Object(n.jsx)("button",{value:"8",onClick:p,children:"8"}),Object(n.jsx)("button",{value:"9",onClick:p,children:"9"}),Object(n.jsx)("button",{className:"oper",onClick:function(e){if(e.preventDefault(),0===c.length)O("-");else{x();var t=h;t.push("-"),d(t),i("")}},children:"-"})]}),Object(n.jsxs)("div",{className:"thirdLine",children:[Object(n.jsx)("button",{value:"4",onClick:p,children:"4"}),Object(n.jsx)("button",{value:"5",onClick:p,children:"5"}),Object(n.jsx)("button",{value:"6",onClick:p,children:"6"}),Object(n.jsx)("button",{className:"oper",onClick:function(e){e.preventDefault(),x();var t=h;t.push("\xd7"),d(t),i("")},children:"\xd7"})]}),Object(n.jsxs)("div",{className:"fourthLine",children:[Object(n.jsx)("button",{value:"1",onClick:p,children:"1"}),Object(n.jsx)("button",{value:"2",onClick:p,children:"2"}),Object(n.jsx)("button",{value:"3",onClick:p,children:"3"}),Object(n.jsx)("button",{className:"oper",onClick:function(e){e.preventDefault(),x();var t=h;t.push("\xf7"),d(t),i("")},children:"\xf7"})]})]})]})};var o=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.c,{children:Object(n.jsx)(r.a,{path:"/calculator",exact:!0,component:j})})})};a.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(o,{})}),document.getElementById("app"))}},[[30,1,2]]]);
//# sourceMappingURL=main.323fe142.chunk.js.map