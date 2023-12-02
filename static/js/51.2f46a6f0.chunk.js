"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[51],{5051:function(n,e,r){r.r(e),r.d(e,{default:function(){return jn}});var t=r(9434),o=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.error},i=function(n){return n.filter.filterQuery},c=function(n){var e=function(n){return n.contacts.contacts}(n),r=i(n);return e.filter((function(n){return""===r||n.name.toLowerCase().includes(r.toLowerCase())}))},l=r(2791),s=r(6398),u=r(7462),d=r(3366),f=r(3733),v=r(4419),m=r(6934),p=r(1402),g=r(5527),h=r(5878),x=r(1217);function Z(n){return(0,x.Z)("MuiCard",n)}(0,h.Z)("MuiCard",["root"]);var b=r(184),w=["className","raised"],S=(0,m.ZP)(g.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),j=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCard"}),t=r.className,o=r.raised,a=void 0!==o&&o,i=(0,d.Z)(r,w),c=(0,u.Z)({},r,{raised:a}),l=function(n){var e=n.classes;return(0,v.Z)({root:["root"]},Z,e)}(c);return(0,b.jsx)(S,(0,u.Z)({className:(0,f.Z)(l.root,t),elevation:a?8:void 0,ref:e,ownerState:c},i))}));function y(n){return(0,x.Z)("MuiCardActions",n)}(0,h.Z)("MuiCardActions",["root","spacing"]);var C=["disableSpacing","className"],k=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,u.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),G=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,a=r.className,i=(0,d.Z)(r,C),c=(0,u.Z)({},r,{disableSpacing:o}),l=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,v.Z)(r,y,e)}(c);return(0,b.jsx)(k,(0,u.Z)({className:(0,f.Z)(l.root,a),ownerState:c,ref:e},i))}));function _(n){return(0,x.Z)("MuiCardContent",n)}(0,h.Z)("MuiCardContent",["root"]);var O=["className","component"],M=(0,m.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),N=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCardContent"}),t=r.className,o=r.component,a=void 0===o?"div":o,i=(0,d.Z)(r,O),c=(0,u.Z)({},r,{component:a}),l=function(n){var e=n.classes;return(0,v.Z)({root:["root"]},_,e)}(c);return(0,b.jsx)(M,(0,u.Z)({as:a,className:(0,f.Z)(l.root,t),ownerState:c,ref:e},i))})),E=r(4294),A=r(890),R=r(9439),q=r(3433),z=r(78),W=r(3457),L=r(7078),P=r(418),D=r(8519),F=r(5080),I=r(4942),T=function(n,e,r){var t,o,a=n.keys[0];if(Array.isArray(e))e.forEach((function(e,t){r((function(e,r){t<=n.keys.length-1&&(0===t?Object.assign(e,r):e[n.up(n.keys[t])]=r)}),e)}));else if(e&&"object"===typeof e){(Object.keys(e).length>n.keys.length?n.keys:(t=n.keys,o=Object.keys(e),t.filter((function(n){return o.includes(n)})))).forEach((function(t){if(-1!==n.keys.indexOf(t)){var o=e[t];void 0!==o&&r((function(e,r){a===t?Object.assign(e,r):e[n.up(t)]=r}),o)}}))}else"number"!==typeof e&&"string"!==typeof e||r((function(n,e){Object.assign(n,e)}),e)};function B(n){return n?"Level".concat(n):""}function V(n){return n.unstable_level>0&&n.container}function H(n){return function(e){return"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level),")")}}function K(n){return function(e){return 0===n.unstable_level?"var(--Grid-".concat(e,"Spacing)"):"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level-1),")")}}function Y(n){return 0===n.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(B(n.unstable_level-1),")")}var Q=function(n){var e=n.theme,r=n.ownerState,t=H(r),o={};return T(e.breakpoints,r.gridSize,(function(n,e){var a={};!0===e&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===e&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof e&&(a={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(e," / ").concat(Y(r)).concat(V(r)?" + ".concat(t("column")):"",")")}),n(o,a)})),o},$=function(n){var e=n.theme,r=n.ownerState,t={};return T(e.breakpoints,r.gridOffset,(function(n,e){var o={};"auto"===e&&(o={marginLeft:"auto"}),"number"===typeof e&&(o={marginLeft:0===e?"0px":"calc(100% * ".concat(e," / ").concat(Y(r),")")}),n(t,o)})),t},J=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=V(r)?(0,I.Z)({},"--Grid-columns".concat(B(r.unstable_level)),Y(r)):{"--Grid-columns":12};return T(e.breakpoints,r.columns,(function(n,e){n(t,(0,I.Z)({},"--Grid-columns".concat(B(r.unstable_level)),e))})),t},U=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=K(r),o=V(r)?(0,I.Z)({},"--Grid-rowSpacing".concat(B(r.unstable_level)),t("row")):{};return T(e.breakpoints,r.rowSpacing,(function(n,t){var a;n(o,(0,I.Z)({},"--Grid-rowSpacing".concat(B(r.unstable_level)),"string"===typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)))})),o},X=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=K(r),o=V(r)?(0,I.Z)({},"--Grid-columnSpacing".concat(B(r.unstable_level)),t("column")):{};return T(e.breakpoints,r.columnSpacing,(function(n,t){var a;n(o,(0,I.Z)({},"--Grid-columnSpacing".concat(B(r.unstable_level)),"string"===typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)))})),o},nn=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t={};return T(e.breakpoints,r.direction,(function(n,e){n(t,{flexDirection:e})})),t},en=function(n){var e=n.ownerState,r=H(e),t=K(e);return(0,u.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,u.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:"calc(".concat(r("row")," / -2) calc(").concat(r("column")," / -2)")},e.disableEqualOverflow&&{margin:"calc(".concat(r("row")," * -1) 0px 0px calc(").concat(r("column")," * -1)")}),(!e.container||V(e))&&(0,u.Z)({padding:"calc(".concat(t("row")," / 2) calc(").concat(t("column")," / 2)")},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:"".concat(t("row")," 0px 0px ").concat(t("column"))}))},rn=function(n){var e=[];return Object.entries(n).forEach((function(n){var r=(0,R.Z)(n,2),t=r[0],o=r[1];!1!==o&&void 0!==o&&e.push("grid-".concat(t,"-").concat(String(o)))})),e},tn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function r(n){return void 0!==n&&("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n&&n>0)}if(r(n))return["spacing-".concat(e,"-").concat(String(n))];if("object"===typeof n&&!Array.isArray(n)){var t=[];return Object.entries(n).forEach((function(n){var e=(0,R.Z)(n,2),o=e[0],a=e[1];r(a)&&t.push("spacing-".concat(o,"-").concat(String(a)))})),t}return[]},on=function(n){return void 0===n?[]:"object"===typeof n?Object.entries(n).map((function(n){var e=(0,R.Z)(n,2),r=e[0],t=e[1];return"direction-".concat(r,"-").concat(t)})):["direction-xs-".concat(String(n))]},an=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],cn=(0,F.Z)(),ln=(0,W.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){return e.root}});function sn(n){return(0,L.Z)({props:n,name:"MuiGrid",defaultTheme:cn})}var un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.createStyledComponent,r=void 0===e?ln:e,t=n.useThemeProps,o=void 0===t?sn:t,a=n.componentName,i=void 0===a?"MuiGrid":a,c=l.createContext(void 0),s=function(n,e){var r=n.container,t=n.direction,o=n.spacing,a=n.wrap,c=n.gridSize,l={root:["root",r&&"container","wrap"!==a&&"wrap-xs-".concat(String(a))].concat((0,q.Z)(on(t)),(0,q.Z)(rn(c)),(0,q.Z)(r?tn(o,e.breakpoints.keys[0]):[]))};return(0,v.Z)(l,(function(n){return(0,x.Z)(i,n)}),{})},m=r(J,X,U,Q,nn,en,$),p=l.forwardRef((function(n,e){var r,t,a,i,v,p,g,h,x=(0,P.Z)(),Z=o(n),w=(0,D.Z)(Z),S=l.useContext(c),j=w.className,y=w.children,C=w.columns,k=void 0===C?12:C,G=w.container,_=void 0!==G&&G,O=w.component,M=void 0===O?"div":O,N=w.direction,E=void 0===N?"row":N,A=w.wrap,q=void 0===A?"wrap":A,W=w.spacing,L=void 0===W?0:W,F=w.rowSpacing,I=void 0===F?L:F,T=w.columnSpacing,B=void 0===T?L:T,V=w.disableEqualOverflow,H=w.unstable_level,K=void 0===H?0:H,Y=(0,d.Z)(w,an),Q=V;K&&void 0!==V&&(Q=n.disableEqualOverflow);var $={},J={},U={};Object.entries(Y).forEach((function(n){var e=(0,R.Z)(n,2),r=e[0],t=e[1];void 0!==x.breakpoints.values[r]?$[r]=t:void 0!==x.breakpoints.values[r.replace("Offset","")]?J[r.replace("Offset","")]=t:U[r]=t}));var X=null!=(r=n.columns)?r:K?void 0:k,nn=null!=(t=n.spacing)?t:K?void 0:L,en=null!=(a=null!=(i=n.rowSpacing)?i:n.spacing)?a:K?void 0:I,rn=null!=(v=null!=(p=n.columnSpacing)?p:n.spacing)?v:K?void 0:B,tn=(0,u.Z)({},w,{level:K,columns:X,container:_,direction:E,wrap:q,spacing:nn,rowSpacing:en,columnSpacing:rn,gridSize:$,gridOffset:J,disableEqualOverflow:null!=(g=null!=(h=Q)?h:S)&&g,parentDisableEqualOverflow:S}),on=s(tn,x),cn=(0,b.jsx)(m,(0,u.Z)({ref:e,as:M,ownerState:tn,className:(0,f.Z)(on.root,j)},U,{children:l.Children.map(y,(function(n){var e;return l.isValidElement(n)&&(0,z.Z)(n,["Grid"])?l.cloneElement(n,{unstable_level:null!=(e=n.props.unstable_level)?e:K+1}):n}))}));return void 0!==Q&&Q!==(null!=S&&S)&&(cn=(0,b.jsx)(c.Provider,{value:Q,children:cn})),cn}));return p.muiName="Grid",p}({createStyledComponent:(0,m.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(n,e){return e.root}}),componentName:"MuiGrid2",useThemeProps:function(n){return(0,p.Z)({props:n,name:"MuiGrid2"})}}),dn=un,fn=r(9505),vn=function(n){var e=(0,t.I0)();return(0,b.jsx)(dn,{xs:4,lg:3,children:(0,b.jsxs)(j,{children:[(0,b.jsxs)(N,{children:[(0,b.jsx)(A.Z,{variant:"h5",children:n.name}),(0,b.jsx)(A.Z,{sx:{mb:.5},color:"text.secondary",children:n.number})]}),(0,b.jsx)(G,{children:(0,b.jsxs)(E.Z,{size:"small",onClick:function(){e((0,s.GK)(n.id))},color:"error",children:[(0,b.jsx)(fn.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),"Delete contact"]})})]})})},mn=r(697),pn=r(9164),gn=function(){var n=(0,t.v9)(c);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(pn.Z,{sx:{mt:2,flexGrow:1},maxWidth:"lg",children:(0,b.jsx)(mn.Z,{sx:{flexGrow:1},children:(0,b.jsx)(dn,{container:!0,spacing:{xs:4,md:4},columns:{xs:4,sm:8,md:12},children:n.length?n.map((function(n){return(0,b.jsx)(vn,{id:n.id,name:n.name,number:n.number},n.id)})):(0,b.jsx)("p",{children:"Your phonebook is empty. Add your contacts"})})})})})},hn=r(786),xn=r(8308),Zn=function(){var n=(0,t.I0)(),e=(0,t.v9)(i);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(pn.Z,{maxWidth:"xs",children:(0,b.jsxs)(mn.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(A.Z,{component:"h2",variant:"h5",children:"Contacts"}),(0,b.jsx)(xn.Z,{margin:"normal",fullWidth:!0,id:"filter",value:e,type:"text",label:"Contact filter",name:"filter",autoFocus:!0,required:!0,onChange:function(e){n((0,hn.p)(e.target.value))}})]})})})},bn=function(){var n=(0,l.useState)(""),e=(0,R.Z)(n,2),r=e[0],o=e[1],a=(0,l.useState)(""),i=(0,R.Z)(a,2),c=i[0],u=i[1],d=(0,l.useState)(!1),f=(0,R.Z)(d,2),v=f[0],m=f[1],p=(0,l.useState)(!1),g=(0,R.Z)(p,2),h=g[0],x=g[1],Z=(0,t.I0)(),w=function(n){return/^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]+(([' -][a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c])?[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]*)*$/.test(n)},S=function(n){return/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(n)};return(0,b.jsx)(pn.Z,{maxWidth:"xs",children:(0,b.jsxs)(mn.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(A.Z,{component:"h1",variant:"h5",children:"Add your contact"}),(0,b.jsxs)(mn.Z,{component:"form",onSubmit:function(n){n.preventDefault();var e=n.target;w(r)&&S(c)&&Z((0,s.uK)({name:e.elements.name.value,number:e.elements.number.value})),e.reset(),o(""),u(""),m(!1),x(!1)},sx:{mt:1},children:[(0,b.jsx)(xn.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Contact Name",name:"name",autoFocus:!0,value:r,onChange:function(n){o(n.target.value),m(!w(n.target.value))},error:v,helperText:v&&"Name may contain only letters, apostrophe, dash and spaces"}),(0,b.jsx)(xn.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone number",type:"tel",id:"phone",value:c,onChange:function(n){u(n.target.value),x(!S(n.target.value))},error:h,helperText:h&&"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,b.jsx)(E.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:v||h,children:"+ Add contact"})]})]})})},wn=r(2914),Sn=r(2027),jn=function(){var n=(0,t.I0)(),e=(0,t.v9)(o),r=(0,t.v9)(a);return(0,l.useEffect)((function(){n((0,s.yF)())}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(wn.ql,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsxs)("main",{children:[(0,b.jsx)(bn,{}),(0,b.jsx)(Zn,{}),e&&!r&&(0,b.jsx)(Sn.Z,{}),(0,b.jsx)(gn,{})]})]})}},9505:function(n,e,r){var t=r(4836);e.Z=void 0;var o=t(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}),"DeleteForeverOutlined");e.Z=i}}]);
//# sourceMappingURL=51.2f46a6f0.chunk.js.map