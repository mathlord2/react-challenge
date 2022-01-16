(this["webpackJsonpapp-template"]=this["webpackJsonpapp-template"]||[]).push([[0],{79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(22),s=a.n(r),l=(a(79),a(54)),i=a.n(l),u=a(60),o=a(23),d=(a(80),a(81),a(82),"#1c47be"),j="2px 2px 30px grey",b=a(43),h=(a(83),a(7)),p=function(e){return Object(h.jsxs)("div",{className:"inline",children:[Object(h.jsxs)("div",{style:{margin:"0px 10px"},children:[Object(h.jsx)(b.b,{className:"search"}),Object(h.jsx)("input",{placeholder:e.placeholder,value:e.value,onChange:e.onChange,style:{padding:"10px",paddingLeft:"35px",border:"3px solid "+d,borderRadius:"15px",textAlign:"left",width:"30vh",boxShadow:j}})]}),Object(h.jsx)("button",{onClick:e.onClick,style:{borderRadius:"20px",backgroundColor:d,boxShadow:j,color:"white",padding:"10px 20px",border:"none",opacity:e.disabled?.5:1},disabled:e.disabled,children:Object(h.jsx)(b.a,{})})]})},x=[{name:"Action",value:1},{name:"Adventure",value:2},{name:"Comedy",value:4},{name:"Mystery",value:7},{name:"Drama",value:8},{name:"Fantasy",value:10},{name:"Kids",value:15},{name:"Sci Fi",value:24}],m=[{name:"Airing",value:"airing"},{name:"Completed",value:"completed"},{name:"Upcoming",value:"to_be_aired"}],O=[{name:"G",value:"g"},{name:"PG",value:"pg"},{name:"PG-13",value:"pg12"},{name:"R",value:"r17"},{name:"R+",value:"r"},{name:"Rx",value:"rx"}],g=a(95),v=a(96),f=a(72),y=function(e){var t=Object(h.jsx)(g.a,{children:e.items.map((function(t){return Object(h.jsx)(g.a.Item,{onClick:function(){return e.setValue(t)},children:t.name},t.value)}))});return Object(h.jsx)(v.a,{overlay:t,children:Object(h.jsxs)("div",{style:{padding:"10px",border:"3px solid "+d,borderRadius:"15px",textAlign:"left",margin:"0px 10px",marginBottom:"20px",boxShadow:j},children:[e.value?e.value:e.default,Object(h.jsx)(f.a,{size:20,style:{marginLeft:"5px"}})]})})},S=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{style:{marginTop:"20px"},children:"Filters"}),Object(h.jsxs)("div",{className:"inline",children:[Object(h.jsx)(y,{items:x,value:e.genre.name,default:"Genre",setValue:e.changeGenre}),Object(h.jsx)(y,{items:m,value:e.status.name,default:"Status",setValue:e.changeStatus}),Object(h.jsx)(y,{items:O,value:e.rated.name,default:"Rated",setValue:e.changeRated})]})]})},C=a(58),k=a.n(C),R=a(93),w=a(94),A=(a(88),function(e){return Object(h.jsxs)(R.a,{className:"justify-content-center m-0",children:[e.searched&&Object(h.jsx)("p",{className:"marginTop",children:e.searching?"Loading ...":e.error?"Error occured, please try again :(":0===e.results.length?"No search results :(":e.results.length+" search results"}),e.results.length>0&&e.results.map((function(e){return Object(h.jsxs)(w.a,{className:"animeCard col-lg-3 col-md-6 col-12 text-center mx-3 mt-5",children:[Object(h.jsx)("img",{src:e.image_url,alt:"Anime"}),Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("p",{children:["Number of episodes: ",e.episodes]}),Object(h.jsxs)("p",{children:["Start date: ",k()(e.start_date).year()]}),Object(h.jsxs)("p",{children:["End date: ",k()(e.end_date).year()]}),Object(h.jsxs)("p",{children:["Rating: ",e.score]})]})]})}))]})});var N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(o.a)(r,2),l=s[0],d=s[1],j=Object(n.useState)(!1),b=Object(o.a)(j,2),x=b[0],m=b[1],O=Object(n.useState)(!1),g=Object(o.a)(O,2),v=g[0],f=g[1],y=Object(n.useState)(null),C=Object(o.a)(y,2),k=C[0],R=C[1],w=Object(n.useState)({}),N=Object(o.a)(w,2),F=N[0],G=N[1],L=Object(n.useState)({}),_=Object(o.a)(L,2),E=_[0],P=_[1],T=Object(n.useState)({}),V=Object(o.a)(T,2),B=V[0],D=V[1];Object(n.useEffect)((function(){""!==a&&x&&I(a)}),[F,E,B]);var I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(null),m(!0),f(!0),e.next=5,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"\n    &genre=").concat(F.value,"&status=").concat(E.value,"&rated=").concat(B.value)).then((function(e){return e.json()})).catch((function(e){return R(e)}));case 5:a=e.sent;try{d(a.results)}catch(n){R(n)}f(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{class:"App",children:[Object(h.jsx)("h1",{children:"AnimeSearch"}),Object(h.jsx)(p,{placeholder:"Search",value:a,onChange:function(e){c(e.target.value)},onClick:function(e){e.preventDefault(),I(a)},disabled:v}),Object(h.jsx)(S,{genre:F,status:E,rated:B,changeGenre:function(e){G(e)},changeStatus:function(e){P(e)},changeRated:function(e){D(e)}}),Object(h.jsx)("a",{onClick:function(){c(""),d([]),m(!1),R(null),G({}),P({}),D({})},children:Object(h.jsx)("p",{children:"Clear All"})}),Object(h.jsx)(A,{results:l,searching:v,searched:x,error:k})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),F()}},[[89,1,2]]]);
//# sourceMappingURL=main.fe7ea7a7.chunk.js.map