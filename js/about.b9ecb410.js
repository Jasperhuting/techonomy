(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1467:function(t,e,a){},"1e6b":function(t,e,a){},"202f":function(t,e,a){"use strict";var s=a("bb06"),n=a.n(s);n.a},"2b78":function(t,e,a){},"417e":function(t,e,a){"use strict";var s=a("1e6b"),n=a.n(s);n.a},"644a":function(t,e,a){},6696:function(t,e,a){"use strict";var s=a("1467"),n=a.n(s);n.a},"6efe":function(t,e,a){},"70c4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("("+t._s(t.contacts.length)+") Contactpersonen")]),a("button",{staticClass:"button__text",on:{click:t.newContact}},[t._v(" Voeg contactpersoon toe ")]),a("tc-contacts",{attrs:{contacts:t.contacts,masterData:t.masterData}})],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.contacts,(function(e){return a("tc-contact",{key:e.id,attrs:{contact:e,masterData:t.masterData}})})),1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"contact__item"},[t._v(" "+t._s(t.contact.name)+" "),a("span",{staticClass:"contact__buttons"},[a("button",{staticClass:"button__icon",on:{click:t.editContact}},[a("vue-material-icon",{attrs:{name:"edit",size:16,color:"#2c3e50"}})],1),a("button",{staticClass:"button__icon",on:{click:t.deleteContact}},[a("vue-material-icon",{attrs:{name:"delete",size:16,color:"#2c3e50"}})],1)])])},m=[],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editContactModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Bedrijfsnaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)}),l=[],u={props:["id","name","title","cat_key"],name:"edit-contact",data:function(){return{formstate:{},model:{name:this.name,image:this.image}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("editContact",{name:this.model.name,key:this.cat_key,image:this.model.image}),this.$store.dispatch("setContacts"),this.$emit("close"))}}},d=u,v=(a("ab0b"),a("2877")),h=Object(v["a"])(d,c,l,!1,null,null,null),f=h.exports,p={data:function(){return{}},computed:{},props:["contact","masterData"],name:"contact",components:{},filters:{},methods:{editContact:function(){this.$modal.show(f,{title:"Wijzig contactpersoon",id:this.contact.id,name:this.contact.name,cat_key:this.contact.key},{scrollable:!0,height:"auto"})},deleteContact:function(){this.$store.dispatch("deleteContact",{key:this.contact.key}),this.$store.dispatch("setContacts")}}},g=p,_=(a("417e"),Object(v["a"])(g,r,m,!1,null,null,null)),b=_.exports,C={data:function(){return{}},computed:{},methods:{open:function(){}},props:["contacts","masterData"],name:"Contacts",components:{"tc-contact":b},filters:{}},$=C,k=(a("b1ea"),Object(v["a"])($,o,i,!1,null,null,null)),y=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newContactModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Contactnaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("label",[t._v("slack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.media,expression:"model.media"}],attrs:{type:"checkbox",name:"media",id:"slack"},domProps:{checked:Array.isArray(t.model.media)?t._i(t.model.media,null)>-1:t.model.media},on:{change:function(e){var a=t.model.media,s=e.target,n=!!s.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);s.checked?i<0&&t.$set(t.model,"media",a.concat([o])):i>-1&&t.$set(t.model,"media",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.model,"media",n)}}}),a("label",[t._v("mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.media,expression:"model.media"}],attrs:{type:"checkbox",name:"media",id:"mail"},domProps:{checked:Array.isArray(t.model.media)?t._i(t.model.media,null)>-1:t.model.media},on:{change:function(e){var a=t.model.media,s=e.target,n=!!s.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);s.checked?i<0&&t.$set(t.model,"media",a.concat([o])):i>-1&&t.$set(t.model,"media",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.model,"media",n)}}}),a("span",[t._v("Naam in slack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.slackName,expression:"model.slackName"}],attrs:{name:"slackName"},domProps:{value:t.model.slackName},on:{input:function(e){e.target.composing||t.$set(t.model,"slackName",e.target.value)}}}),a("span",[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.mail,expression:"model.mail"}],attrs:{name:"mail"},domProps:{value:t.model.mail},on:{input:function(e){e.target.composing||t.$set(t.model,"mail",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)},j=[],x={props:["id","name","title","slackName","mail"],name:"add-contact",data:function(){return{formstate:{},model:{name:"",mail:"",slackName:"",media:[]}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("addContact",{name:this.model.name,slackName:this.model.slackName,mail:this.model.mail,media:this.model.media}),this.$store.dispatch("setContacts"),this.$emit("close"))}}},D=x,N=(a("a8e7"),Object(v["a"])(D,w,j,!1,null,null,null)),z=N.exports,q={beforeCreate:function(){this.$store.dispatch("setContacts"),this.$store.dispatch("setMasterData")},data:function(){return{}},computed:{masterData:function(){return this.$store.getters.getMasterData},contacts:function(){return this.$store.getters.getContacts}},name:"ContactsPage",components:{"tc-contacts":y},methods:{newContact:function(){this.$modal.show(z,{title:"Nieuw contactpersoon",id:-1,name:"",mail:"",slackName:"",media:this.contacts.media},{scrollable:!0,height:"auto"})}}},E=q,S=Object(v["a"])(E,s,n,!1,null,null,null);e["default"]=S.exports},7211:function(t,e,a){"use strict";var s=a("94ed"),n=a.n(s);n.a},"7b54":function(t,e,a){"use strict";var s=a("2b78"),n=a.n(s);n.a},"7c70":function(t,e,a){},8031:function(t,e,a){"use strict";var s=a("9d9f"),n=a.n(s);n.a},"810d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("("+t._s(t.categories.length)+") Categorieën")]),a("button",{staticClass:"button__text",on:{click:t.newCategory}},[t._v(" Voeg categorie toe ")]),a("tc-categories",{attrs:{categories:t.categories,masterData:t.masterData}})],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.categories,(function(e){return a("tc-category",{key:e.id,attrs:{category:e,masterData:t.masterData}})})),1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"category__item"},[t._v(" "+t._s(t.category.name)+" "),a("span",{staticClass:"category__buttons"},[a("button",{staticClass:"button__icon",on:{click:t.editCategory}},[a("vue-material-icon",{attrs:{name:"edit",size:16,color:"#2c3e50"}})],1),a("button",{staticClass:"button__icon",on:{click:t.deleteCategory}},[a("vue-material-icon",{attrs:{name:"delete",size:16,color:"#2c3e50"}})],1)])])},m=[],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editCategoryModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Categorienaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)}),l=[],u={props:["id","name","title","cat_key"],name:"edit-category",data:function(){return{formstate:{},model:{name:this.name}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("editCategory",{name:this.model.name,key:this.cat_key}),this.$store.dispatch("setCategories"),this.$emit("close"))}}},d=u,v=(a("c608"),a("2877")),h=Object(v["a"])(d,c,l,!1,null,null,null),f=h.exports,p={data:function(){return{}},computed:{},props:["category","masterData"],name:"Category",components:{},filters:{},methods:{editCategory:function(){this.$modal.show(f,{title:"Wijzig categorie",id:this.category.id,name:this.category.name,cat_key:this.category.key},{scrollable:!0,height:"auto"})},deleteCategory:function(){this.$store.dispatch("deleteCategory",{key:this.category.key}),this.$store.dispatch("setCategories")}}},g=p,_=(a("8031"),Object(v["a"])(g,r,m,!1,null,null,null)),b=_.exports,C={data:function(){return{}},computed:{},methods:{open:function(){}},props:["categories","masterData"],name:"Categories",components:{"tc-category":b},filters:{}},$=C,k=(a("c70a"),Object(v["a"])($,o,i,!1,null,null,null)),y=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newCategoryModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Categorienaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)},j=[],x={props:["id","name","title"],name:"add-category",data:function(){return{formstate:{},model:{name:""}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("addCategory",{name:this.model.name}),this.$store.dispatch("setCategories"),this.$emit("close"))}}},D=x,N=(a("6696"),Object(v["a"])(D,w,j,!1,null,null,null)),z=N.exports,q={beforeCreate:function(){this.$store.dispatch("setCategories"),this.$store.dispatch("setMasterData")},data:function(){return{}},computed:{masterData:function(){return this.$store.getters.getMasterData},categories:function(){return this.$store.getters.getCategories}},name:"CategoriesPage",components:{"tc-categories":y},methods:{newCategory:function(){this.$modal.show(z,{title:"Nieuwe categorie",id:-1,name:""},{scrollable:!0,height:"auto"})}}},E=q,S=Object(v["a"])(E,s,n,!1,null,null,null);e["default"]=S.exports},"94ed":function(t,e,a){},"94f7":function(t,e,a){},"9d9f":function(t,e,a){},a8e7:function(t,e,a){"use strict";var s=a("b89a"),n=a.n(s);n.a},ab0b:function(t,e,a){"use strict";var s=a("7c70"),n=a.n(s);n.a},b1ea:function(t,e,a){"use strict";var s=a("6efe"),n=a.n(s);n.a},b89a:function(t,e,a){},bb06:function(t,e,a){},c608:function(t,e,a){"use strict";var s=a("644a"),n=a.n(s);n.a},c70a:function(t,e,a){"use strict";var s=a("d099"),n=a.n(s);n.a},c7af:function(t,e,a){"use strict";var s=a("94f7"),n=a.n(s);n.a},c96c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("("+t._s(t.customers.length)+") Bedrijven")]),a("button",{staticClass:"button__text",on:{click:t.newCustomer}},[t._v("Voeg bedrijf toe")]),a("tc-customers",{attrs:{customers:t.customers,masterData:t.masterData}})],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.customers,(function(e){return a("tc-customer",{key:e.id,attrs:{customer:e,masterData:t.masterData}})})),1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"customer__item"},[a("img",{staticClass:"customer__image",attrs:{src:t.customer.image}}),t._v(" "+t._s(t.customer.name)+" "),a("span",{staticClass:"customer__buttons"},[a("button",{staticClass:"button__icon",on:{click:t.editCustomer}},[a("vue-material-icon",{attrs:{name:"edit",size:16,color:"#2c3e50"}})],1),a("button",{staticClass:"button__icon",on:{click:t.deleteCustomer}},[a("vue-material-icon",{attrs:{name:"delete",size:16,color:"#2c3e50"}})],1)])])},m=[],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editCustomerModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Bedrijfsnaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("span",[t._v("Bedrijfslogo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.image,expression:"model.image"}],attrs:{name:"image"},domProps:{value:t.model.image},on:{input:function(e){e.target.composing||t.$set(t.model,"image",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)}),l=[],u={props:["id","name","title","cat_key","image"],name:"edit-customer",data:function(){return{formstate:{},model:{name:this.name,image:this.image}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("editCustomer",{name:this.model.name,key:this.cat_key,image:this.model.image}),this.$store.dispatch("setCustomers"),this.$emit("close"))}}},d=u,v=(a("202f"),a("2877")),h=Object(v["a"])(d,c,l,!1,null,null,null),f=h.exports,p={data:function(){return{}},computed:{},props:["customer","masterData"],name:"customer",components:{},filters:{},methods:{editCustomer:function(){this.$modal.show(f,{title:"Wijzig bedrijf",id:this.customer.id,name:this.customer.name,cat_key:this.customer.key,image:this.customer.image},{scrollable:!0,height:"auto"})},deleteCustomer:function(){this.$store.dispatch("deleteCustomer",{key:this.customer.key}),this.$store.dispatch("setCustomers")}}},g=p,_=(a("c7af"),Object(v["a"])(g,r,m,!1,null,null,null)),b=_.exports,C={data:function(){return{}},computed:{},methods:{open:function(){}},props:["customers","masterData"],name:"Customers",components:{"tc-customer":b},filters:{}},$=C,k=(a("7b54"),Object(v["a"])($,o,i,!1,null,null,null)),y=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newCustomerModal"},[a("h1",[t._v(t._s(t.title))]),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("validate",{attrs:{tag:"label"}},[a("span",[t._v("Bedrijfsnaam *")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],attrs:{required:"",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),a("span",[t._v("Bedrijfslogo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.image,expression:"model.image"}],attrs:{name:"image"},domProps:{value:t.model.image},on:{input:function(e){e.target.composing||t.$set(t.model,"image",e.target.value)}}}),a("field-messages",{attrs:{name:"name"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Naam is een verplicht veld")])])],1),a("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)},j=[],x={props:["id","name","title"],name:"add-customer",data:function(){return{formstate:{},model:{name:"",image:""}}},methods:{onSubmit:function(){this.formstate.$invalid||(this.$store.dispatch("addCustomer",{name:this.model.name,image:this.model.image}),this.$store.dispatch("setCustomers"),this.$emit("close"))}}},D=x,N=(a("7211"),Object(v["a"])(D,w,j,!1,null,null,null)),z=N.exports,q={beforeCreate:function(){this.$store.dispatch("setCustomers"),this.$store.dispatch("setMasterData")},data:function(){return{}},computed:{masterData:function(){return this.$store.getters.getMasterData},customers:function(){return this.$store.getters.getCustomers}},name:"CustomersPage",components:{"tc-customers":y},methods:{newCustomer:function(){this.$modal.show(z,{title:"Nieuwe bedrijf",id:-1,name:"",image:""},{scrollable:!0,height:"auto"})}}},E=q,S=Object(v["a"])(E,s,n,!1,null,null,null);e["default"]=S.exports},d099:function(t,e,a){},ea9e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo"},[a("h1",[t._v("Overzicht van wat er nog moet gebeuren")]),a("ol",{staticClass:"todo__overview"},[a("li",{staticClass:"todo__overview-item"},[t._v(" Form Validatie. ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" kijken welke documenten al gekoppeld zijn en deze uit de opties halen. ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" Bedrijven hebben nu een icoontje dit heb ik nu zelf gezet, mooie zou zijn automatisch en anders zelf kunnen instellen. ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" Algehele stijling. ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" Contacten edited is nog niet klaar ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" Contacten pagina laat nog niet alles zien. ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" Wanneer je een nieuw contract aanmaakt moet er een functie worden aangeroepen die de laatste documenten ophaalt en deze in de lijst zet. (heb ik al geschreven maar moet nog goed gekoppeld worden). ")])]),a("h2",[t._v("Bugs")]),a("ol",[a("li",{staticClass:"todo__overview-item"},[t._v(" Na deleten/opslaan/wijziging rendert de pagina niet goed ")]),a("li",{staticClass:"todo__overview-item"},[t._v(" wanneer je van menu item switched gaat het ook niet goed. ")])])])}],o=a("2877"),i={},r=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.b9ecb410.js.map