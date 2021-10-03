(this["webpackJsonpusando-react-router-dom"]=this["webpackJsonpusando-react-router-dom"]||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(17),s=a.n(n),l=a(8),r=a(11),i=a(2),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,photo:e.image,name:e.name,species:e.species,gender:e.gender,origin:e.origin.name,status:e.status,episode:e.episode.length}}))}))},d=(a(24),a(7),a(25),a.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),o=(a(15),a(0)),u=function(e){return Object(o.jsx)("input",{className:"form__input",type:"text",placeholder:"Introduce tu b\xfasqueda",value:e.value,onChange:e.handleInput})},h=function(e){return Object(o.jsx)("option",{value:e.value,children:e.name})},m=(a(27),function(e){return console.log(e.filteredData),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("label",{htmlFor:"gender",className:"label",children:["G\xe9nero:",Object(o.jsxs)("select",{name:"gender",value:e.select,onChange:e.handleSelect,children:[Object(o.jsx)(h,{value:"all",name:"Todos"}),Object(o.jsx)(h,{value:"Male",name:"Hombre"}),Object(o.jsx)(h,{value:"Female",name:"Mujer"}),Object(o.jsx)(h,{value:"unknown",name:"Desconocido"})]})]}),Object(o.jsxs)("label",{htmlFor:"species",className:"label",children:["Especie:",Object(o.jsxs)("select",{name:"species",value:e.select,onChange:e.handleSelect,children:[Object(o.jsx)(h,{value:"all",name:"Todos"}),Object(o.jsx)(h,{value:"Human",name:"Humano"}),Object(o.jsx)(h,{value:"Alien",name:"Alien"})]})]}),Object(o.jsxs)("label",{htmlFor:"status",className:"label",children:["Estado:",Object(o.jsxs)("select",{name:"status",value:e.select,onChange:e.handleSelect,children:[Object(o.jsx)(h,{value:"all",name:"Todos"}),Object(o.jsx)(h,{value:"Alive",name:"Vivo"}),Object(o.jsx)(h,{value:"Dead",name:"Muerto"})]})]})]})}),b=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{value:e.inputName,handleInput:e.handleInput}),Object(o.jsx)(m,{select:e.select,handleSelect:e.handleSelect,filteredData:e.filteredData})]})},x=(a(28),function(e){return Object(o.jsx)(l.b,{to:"./character/".concat(e.characterData.id),children:Object(o.jsxs)("li",{className:"list__element",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"list__element--img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsxs)("div",{className:"list__element--text",children:[Object(o.jsx)("h2",{className:"name",children:e.characterData.name}),Object(o.jsx)("p",{className:"line",children:e.characterData.species})]})]},e.characterData.id)})}),O=(a(34),function(e){var t=e.list.map((function(t){return 0===e.list.length?Object(o.jsxs)("section",{className:"alternative",children:[Object(o.jsx)("h2",{children:"\xa1\xa1Eh!!"}),Object(o.jsx)("p",{children:" \xa1\xa1Esta no es su serie!!"})]}):Object(o.jsx)(x,{characterData:t},t.id)}));return Object(o.jsx)("ul",{className:"list",children:t})}),p=(a(35),function(e){return Object(o.jsxs)("section",{className:"detail",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"detail__img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsx)(l.b,{to:"/",children:"Back"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"detail__name",children:e.characterData.name}),Object(o.jsxs)("ul",{className:"detail__text",children:[Object(o.jsxs)("li",{className:"detail__text--line",children:["Especie : ",e.characterData.species]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["G\xe9nero: ",e.characterData.gender]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Origen: ",e.characterData.origin.name]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Estado: ",e.characterData.status]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Episodios: ",e.characterData.episode.length]})]})]})]},e.characterData.id)});var f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),u=l[0],h=l[1],m=Object(c.useState)("all"),x=Object(r.a)(m,2),f=x[0],g=x[1];Object(c.useEffect)((function(){j().then((function(e){n(e)}))}),[]);var v=Object(i.f)("/character/:id"),_=null!==v?v.params.id:"",D=a.find((function(e){return e.id===_})),N=a.filter((function(e){return e.name.toLocaleLowerCase().includes(u.toLocaleLowerCase())})).filter((function(e){return"all"===f||f===e.species||f===e.gender||f===e.status}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{className:"header__img",src:d,alt:"Rick and Morty"})}),Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)(i.c,{children:[Object(o.jsxs)(i.a,{exact:!0,path:"/",children:[Object(o.jsx)("form",{className:"form",children:Object(o.jsx)(b,{inputName:u,handleInput:function(e){e.preventDefault(),h(e.currentTarget.value)},select:f,handleSelect:function(e){e.preventDefault(),g(e.currentTarget.value)},filteredData:N})}),Object(o.jsx)(O,{list:N})]}),Object(o.jsx)(i.a,{path:"/character/:id",children:Object(o.jsx)(p,{characterData:D})}),Object(o.jsx)(i.a,{children:Object(o.jsx)("section",{children:"Aqu\xed no hay nada!"})})]})})]})};s.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))},7:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.fdfa56dc.chunk.js.map