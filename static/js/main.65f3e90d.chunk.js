(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),i=a.n(s),o=a(6),c=a(4),l=a(5),m=a(8),u=a(7),d=a(1),h=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(2),y=a.n(b),g=y.a.shape({name:y.a.string.isRequired}),f=y.a.shape({title:y.a.string.isRequired,user:y.a.shape(g).isRequired}),v=(y.a.arrayOf(f),y.a.arrayOf(g).isRequired,y.a.func.isRequired,a(19),function(e){var t=e.title,a=e.userName;return n.a.createElement("div",{className:"todo"},n.a.createElement("h3",{className:"todo__title"},n.a.createElement("b",null,"Task")," : ","".concat(t)),n.a.createElement("div",{className:"todo__status"},n.a.createElement("div",{className:"user__name"},n.a.createElement("b",null,"Name"),": ","".concat(a)),n.a.createElement("input",{type:"checkbox",className:"checkbox"})))}),E=function(e){var t=e.todos;return n.a.createElement("div",null,t.map((function(e){return n.a.createElement(v,{key:e.id,title:e.title,userName:e.userName})})))},N=a(3),S=(a(20),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",userName:"",errors:{titleError:!1,userNameError:!1}},e.handleChange=function(t){var a=t.target,r=a.name,n=a.value,s=a.type;n.length>32||e.setState((function(e){var t;return t={},Object(N.a)(t,r,"text"===s?n.replace(/[^\w] +/,""):n),Object(N.a)(t,"errors",Object(d.a)(Object(d.a)({},e.errors),{},Object(N.a)({},"".concat(r,"Error"),!1))),t}))},e.handleSubmit=function(t){t.preventDefault();var a=e.props,r=a.addTodo,n=a.users,s=e.state,i=s.title,o=s.userName,c=i.trim();if(c?e.setState((function(e){return{errors:Object(d.a)(Object(d.a)({},e.errors),{},{titleError:!1})}})):e.setState((function(e){return{errors:Object(d.a)(Object(d.a)({},e.errors),{},{titleError:!0})}})),o?e.setState((function(e){return{errors:Object(d.a)(Object(d.a)({},e.errors),{},{userNameError:!1})}})):e.setState((function(e){return{errors:Object(d.a)(Object(d.a)({},e.errors),{},{userNameError:!0})}})),c&&o){var l=n.find((function(e){return e.name===o}));e.setState({title:"",userName:""}),r(i,l)}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,r=t.userName,s=t.errors;return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"app__form"},n.a.createElement("div",{className:"input-elements"},n.a.createElement("label",{htmlFor:"title"},"Enter the title"),n.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Task",value:a,onChange:this.handleChange,className:"input is-small is-primary"}),s.titleError&&n.a.createElement("span",{className:"title-error"},"Please enter the title")),n.a.createElement("div",{className:"input-elements"},n.a.createElement("label",{htmlFor:"user-name"},"Choose a user"),n.a.createElement("div",{className:"control"},n.a.createElement("div",{className:"select is-primary is-small"},n.a.createElement("select",{name:"userName",id:"user-name",value:r,onChange:this.handleChange,className:"select is-primary"},n.a.createElement("option",null,"Choose a user"),Object(o.a)(e).map((function(e){return n.a.createElement("option",{key:e.id,value:e.name},e.name)}))))),s.userNameError&&n.a.createElement("span",{className:"username-error"},"Please choose a user")),n.a.createElement("button",{className:"button is-primary is-small",type:"submit"},"Add"))}}]),a}(n.a.Component)),j=p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{userName:h.find((function(t){return e.userId===t.id})).name})})),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={todos:j},e.addTodo=function(t,a){e.setState((function(e){var r={userId:a.id,id:e.todos.length+1,title:t,completed:!1,userName:a.name};return{todos:[].concat(Object(o.a)(e.todos),[r])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"app__title"},"Add todo form"),n.a.createElement("div",{className:"app__todos"},n.a.createElement(E,{todos:j}),n.a.createElement(S,{users:h,addTodo:this.addTodo})))}}]),a}(n.a.Component);i.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.65f3e90d.chunk.js.map