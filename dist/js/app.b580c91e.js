(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},s={app:0},r=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e8627aa8"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"cf731cd7"}[e]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/outfittera/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1788:function(e,t,n){"use strict";n("4160"),n("159b");var a=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("enter"),t.unobserve(e.target))}))}));t["a"]={bind:function(e){e.classList.add("before-enter"),a.observe(e)}}},"192f":function(e,t,n){e.exports=n.p+"img/cat8.82e6b770.png"},"1ab2":function(e,t,n){},"1b61":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEBSURBVHgBrVSLEcIgDI1OwAYyAiN0hI6gk+gG7Qa4CecEdQPcwBEiqeEa6Qfw+u5y7eXzEgIJwAIQsQlig3icMLCuhVIEZx3EYR6efHNkJsibA+h7k0FsP+NUNfmYrcoi2T2I2kisgvSCVC85xaw9FIITE1xqaEVfVAWhEqdqpMGy8gyV4D4TrFQOrDSVfLH34+mkcgT8iTT+CDuDCF+c6QSVEG16SsIH/1+gHjPCOLfxkdY+G8+xbWp0s+vPE3azGxZGOXpdwehZnNCsOcrl4PG7CEyS9Cp8UPjqNVKNvztwDY5777OkTEzzTcM/JJVYecSkgG3SUqSkB9gBXNm4xj7J6hrhezoTMQAAAABJRU5ErkJggg=="},2171:function(e,t,n){e.exports=n.p+"img/fb-gray.9b70bc26.svg"},"29a6":function(e,t,n){e.exports=n.p+"img/cat3.5d35346c.png"},"3a29":function(e,t,n){"use strict";var a=n("a026"),i=new a["a"]({name:"event-bus"});t["a"]=i},"3f73":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBhVMLccMwDLV3AWAG8xB0Q7COQSGkCLYxKINuCBYGHYNkCBYGaRE0DNyn5ulOdZ323b1TbOvzJDveGaSUaphXMLp57ME/730ji8oEtzBLsKPToRD8yOQ1/BdI8qnBH+ARfHZ3ID7gKk1Y6eY/+FNwDgwI2iIDZa8Ff9UxsX8buEuX2IIR3PD8SwpXM0pFjbSzBnt+b+VA+0bwCBOuFMAuVWbWzob7wayHh0L1yEp9tt/QXiQuJdizQiwlBsabCVC5Y5KdJqGVuXS5spICwZubBjRIn2JZeZ35jZWRHYwKWT/xoUSwpzKLhdN2eKeDTvge+B7Ev/amx5bn3266+xICFb1z/ZJnbfhP3MKRis9qvZuXGZyZi/SLOYy53wniohfgw5VI5wAAAABJRU5ErkJggg=="},"43e7":function(e,t,n){},"4ffa":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-img",{attrs:{src:e.icon},on:{click:e.openSearchBar}})},i=[],s=n("3a29"),r={props:["icon"],name:"search",components:{eventBus:s["a"]},data:function(){return{searchOpen:!1}},methods:{openSearchBar:function(){var e=this;e.searchOpen=!e.searchOpen,s["a"].$emit("isSearchBarOpen",e.searchOpen)}}},o=r,c=(n("7b81"),n("2877")),l=n("6544"),u=n.n(l),d=n("adda"),m=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=m.exports;u()(m,{VImg:d["a"]})},5418:function(e,t,n){"use strict";var a=n("e89e"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},s=[],r={name:"App",methods:{}},o=r,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),m=Object(c["a"])(o,i,s,!1,null,null,null),p=m.exports;u()(m,{VApp:d["a"]});n("d3b7");var h=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HomeComponent")],1)},f=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0 height100 home",attrs:{fluid:"","no-gutters":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuShow||e.searchBarShow,expression:"menuShow || \n   searchBarShow"}],staticClass:"black-screen",class:{"open-menu":e.menuShow,"open-search":e.searchBarShow},on:{click:e.closeWindow}}),n("searchBar"),n("Menu",{staticClass:"menu"}),n("v-row",{staticClass:"page-content height100",class:{"open-menu":e.menuShow,"open-search":e.searchBarShow},attrs:{"no-gutters":""}},[n("slideShows"),n("categories")],1)],1)},v=[],b=n("908d"),w=n("cbd5"),I=n("e0ad"),y=n("df48"),S=n("3a29"),O={name:"Home",components:{searchBar:w["a"],Menu:b["a"],slideShows:I["a"],categories:y["a"],eventBus:S["a"]},data:function(){return{menuLogo:n("d0a9"),isActive:"",menuShow:!1,searchBarShow:!1}},created:function(){var e=this;e.eventPass()},methods:{eventPass:function(){var e=this;S["a"].$on("menuOpen",(function(t){e.menuShow=t})),S["a"].$on("isSearchBarOpen",(function(t){e.searchBarShow=t}))},closeWindow:function(){var e=this;S["a"].$emit("menuOpen",!1),S["a"].$emit("isSearchBarOpen",!1),e.searchBarShow=!1,e.menuShow=!1}}},C=O,B=(n("5418"),n("a523")),N=n("0fd9"),M=Object(c["a"])(C,g,v,!1,null,null,null),T=M.exports;u()(M,{VContainer:B["a"],VRow:N["a"]});var V={name:"HomeView",components:{HomeComponent:T}},E=V,x=Object(c["a"])(E,A,f,!1,null,null,null),G=x.exports;a["a"].use(h["a"]);var L=[{path:"/",name:"Home",component:G},{path:"/fashion-mode",name:"FashionMode",component:function(){return n.e("about").then(n.bind(null,"24f2"))}},{path:"/travel-miles",name:"TravelMiles",component:function(){return n.e("about").then(n.bind(null,"24f2"))}},{path:"/lifestyle-makers",name:"LifestyleMakers",component:function(){return n.e("about").then(n.bind(null,"24f2"))}},{path:"/technology-and-machine",name:"TechnologyMachine",component:function(){return n.e("about").then(n.bind(null,"24f2"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"d7a9"))}},{path:"/mart",name:"Mart",component:function(){return n.e("about").then(n.bind(null,"7850"))}},{path:"/article/:id",name:"Article",component:function(){return n.e("about").then(n.bind(null,"213b"))}}],j=new h["a"]({routes:L,scrollBehavior:function(e,t,n){return{x:0,y:0}}}),k=j,Z=n("2f62");a["a"].use(Z["a"]);var Y=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=n("9483");Object(U["a"])("".concat("/outfittera/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var R=n("f309");a["a"].use(R["a"]);var D=new R["a"]({}),q=n("bc3a"),Q=n.n(q),W=n("a7fe"),z=n.n(W),X=n("7688"),P=n("1788"),F=n("f13c"),J=n.n(F);a["a"].use(X["a"]),a["a"].use(J.a),a["a"].directive("scrollanimation",P["a"]),a["a"].use(z.a,Q.a),a["a"].config.productionTip=!1,new a["a"]({router:k,store:Y,vuetify:D,render:function(e){return e(p)}}).$mount("#app")},6635:function(e,t,n){e.exports=n.p+"img/cat6.aaa4450d.png"},"678d":function(e,t,n){},"68e1":function(e,t,n){},"6bd8":function(e,t,n){e.exports=n.p+"img/cat7.a4a54474.png"},7853:function(e,t,n){e.exports=n.p+"img/cat2.77bbe239.png"},"7b81":function(e,t,n){"use strict";var a=n("678d"),i=n.n(a);i.a},"8be9":function(e,t,n){e.exports=n.p+"img/slideshow1.9e5e1d33.png"},"908d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-global-container",class:{open:e.isActive}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuShow,expression:"menuShow"}],staticClass:"menu-logo"},[n("v-img",{staticClass:"menu-logo",attrs:{src:e.menuLogo}})],1),n("transition",{attrs:{name:"slide-burger"}},[n("div",{class:{open:e.isActive},attrs:{id:"burger-menu"},on:{click:e.isMenuOpen}},[n("span"),n("span"),n("span"),n("span")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuShow,expression:"menuShow"}],staticClass:"menu-list"},[n("v-list",e._l(e.menus,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.path}},[n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t.title)+" ")])],1)],1)})),1),n("div",{staticClass:"menu-social",class:{open:e.menuShow}},[n("span",{staticClass:"connect"},[e._v("Connect To")]),n("ul",[n("li",[n("a",{attrs:{href:""}},[n("v-img",{attrs:{src:e.fbGrayIcon}})],1)]),n("li",[n("a",{attrs:{href:""}},[n("v-img",{attrs:{src:e.igGrayIcon}})],1)])])])],1)],1)},i=[],s=n("e0ad"),r=n("df48"),o=n("3a29"),c={name:"Home",components:{slideShows:s["a"],eventBus:o["a"],categories:r["a"]},data:function(){return{menuLogo:n("d0a9"),fbGrayIcon:n("2171"),igGrayIcon:n("d3cc"),isActive:"",menuShow:!1,menus:[{title:"Home",path:"/"},{title:"Fashion Mode",path:"/fashion-mode"},{title:"Travel Miles",path:"/travel-miles"},{title:"Lifestyle Makers",path:"/lifestyle-makers"},{title:"Technology & Machine",path:"/technology-and-machine"},{title:"Mart",path:"/mart"},{title:"About",path:"/about"}]}},mounted:function(){var e=this;e.eventPass()},methods:{eventPass:function(){var e=this;o["a"].$on("menuOpen",(function(t){e.menuShow=t,e.isActive=t}))},isMenuOpen:function(){var e=this;e.menuShow=!e.isActive,e.isActive=!e.isActive,o["a"].$emit("menuOpen",e.menuShow)}}},l=c,u=(n("fcad"),n("2877")),d=n("6544"),m=n.n(d),p=n("adda"),h=n("8860"),A=n("da13"),f=n("5d23"),g=Object(u["a"])(l,a,i,!1,null,null,null);t["a"]=g.exports;m()(g,{VImg:p["a"],VList:h["a"],VListItem:A["a"],VListItemContent:f["a"],VListItemTitle:f["b"]})},a266:function(e,t,n){e.exports=n.p+"img/logo-white.1c13c425.svg"},a926:function(e,t,n){"use strict";var a=n("ddd0"),i=n.n(a);i.a},bd4d:function(e,t,n){e.exports=n.p+"img/cat4.1a9f4d82.png"},c50b:function(e,t,n){e.exports=n.p+"img/cat5.823a63e5.png"},cbd5:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"search-bar",class:{open:e.isSearchBarOpen},attrs:{fluid:"","no-gutters":""}},[n("transition",{attrs:{name:"fade"}},[n("v-row",{directives:[{name:"show",rawName:"v-show",value:e.isSearchBarOpen,expression:"isSearchBarOpen"}],attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"12"}},[n("form",[n("v-text-field",{staticClass:"search-field",attrs:{align:"center",placeholder:e.placeholder,loading:"secondary"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("span",{staticClass:"mr-4 submit",on:{click:e.submit}},[n("v-img",{attrs:{src:e.searchIcon}})],1)],1)])],1)],1)],1)},i=[],s=n("3a29"),r={name:"search",components:{eventBus:s["a"]},data:function(){return{search:"",placeholder:"Type to search",isSearchBarOpen:!1,searchIcon:n("e760")}},mounted:function(){var e=this;s["a"].$on("isSearchBarOpen",(function(t){e.isSearchBarOpen=t}))},methods:{submit:function(){}}},o=r,c=(n("d047"),n("2877")),l=n("6544"),u=n.n(l),d=n("62ad"),m=n("a523"),p=n("adda"),h=n("0fd9"),A=n("8654"),f=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=f.exports;u()(f,{VCol:d["a"],VContainer:m["a"],VImg:p["a"],VRow:h["a"],VTextField:A["a"]})},d047:function(e,t,n){"use strict";var a=n("68e1"),i=n.n(a);i.a},d0a9:function(e,t,n){e.exports=n.p+"img/logo-black.67db83bf.svg"},d3cc:function(e,t,n){e.exports=n.p+"img/ig-gray.d7538eb3.svg"},ddd0:function(e,t,n){},df48:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"pa-8 categories",class:{open:e.isMenuOpen},attrs:{cols:"6",sm:"6",md:"6",lg:"6"}},e._l(e.categories,(function(t,a){return e.categories?n("v-row",{key:a,staticClass:"category",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"category-title",attrs:{cols:"6"}},[n("div",{staticClass:"title"},[e._v(e._s(t.categoryName))]),n("div",{attrs:{id:t.id}})]),n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"actions"},[t.previousId?n("div",{staticClass:"next"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:t.previousId,expression:"category.previousId"}],attrs:{href:"#"}},[e._v("Previous: "+e._s(t.previous)+" ")])]):e._e(),t.nextId?n("div",{staticClass:"previous"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:t.nextId,expression:"category.nextId"}],attrs:{href:"#"}},[e._v("Next: "+e._s(t.next))])]):e._e()])]),n("v-col",{staticClass:"articles",attrs:{cols:"12","no-gutters":""}},e._l(t.articles,(function(t){return n("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"items"},[n("router-link",{attrs:{to:"/article/"+t.id}},[n("v-img",{staticClass:"article-image",attrs:{src:t.images,eager:e.showImages}}),n("div",{staticClass:"source"},[e._v(e._s(t.source))]),n("div",{staticClass:"title"},[e._v(e._s(t.title))]),n("span",{staticClass:"desc"},[e._v(" "+e._s(t.description)+" ")])],1)],1)})),0)],1):e._e()})),1)},i=[],s=n("3a29"),r=(n("1788"),n("f13c")),o=n.n(r),c={name:"FreshStories",components:{eventBus:s["a"],VueScrollTo:o.a},data:function(){return{isMenuOpen:!1,showImages:!0,categories:[]}},created:function(){},mounted:function(){var e=this;s["a"].$on("menuOpen",(function(t){e.isMenuOpen=t})),this.initialize()},methods:{initialize:function(){var e=this;e.categories=[{id:"freshstories",categoryName:"Fresh Stories",previous:"",next:"Fashion Mode",nextId:"#fashionmode",articles:[{id:"article-1",images:n("f42e"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-2",images:n("29a6"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-3",images:n("7853"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:" Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-4",images:n("bd4d"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"}]},{id:"fashionmode",categoryName:"Fashion Mode",previous:"Fresh Stories",previousId:"#freshstories",next:"Technology & Machine",nextId:"#technologyandmachine",articles:[{id:"article-5",images:n("c50b"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-6",images:n("6635"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-7",images:n("192f"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:" Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"},{id:"article-8",images:n("6bd8"),source:"Lifestyle Markers",title:"Grand Ferdinand New Viennese Elegance",description:"Aliquam velit imperdiet pellente tristique integer scelerisque purus scelerisque quis libero potenti pellentesque quam est dignissim"}]}]},scrollTo:function(e){var t=this.$refs[e],n=t.offsetTop;window.scrollTo(0,n)}}},l=c,u=(n("a926"),n("2877")),d=n("6544"),m=n.n(d),p=n("62ad"),h=n("adda"),A=n("0fd9"),f=Object(u["a"])(l,a,i,!1,null,null,null);t["a"]=f.exports;m()(f,{VCol:p["a"],VImg:h["a"],VRow:A["a"]})},e065:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBxZDhDUZADIbbLwb4RrABGzCCVUzACDYwghGwgQ3OBmxQJSUXoQ4/PEnT9vr23sshEVUA8If7dMjLBM/oPUdhw9FKHXHES0XX5PYtcy/nxsW5kKWQUyLO4OI8WLp6NzO/C9dRnZ5ZKvrC1fmIYC08xaGcn42IqfQZJ19iE2kYS1ff/TCVb5d7eMYIb5gA5BDUIY0wAIoAAAAASUVORK5CYII="},e0ad:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"slide-images",attrs:{cols:"6",sm:"6",md:"6",lg:"6"}},[n("div",{staticClass:"slider-container",class:{open:e.isActive}},[n("img",{staticClass:"logo",attrs:{src:e.mainLogo}}),n("searchIcon",{staticClass:"search-icon",attrs:{icon:e.searchIcon}}),n("div",{staticClass:"slide-social-icons"},[n("ul",[n("li",[n("a",{attrs:{href:""}},[n("v-img",{staticClass:"facebook",attrs:{src:e.facebookIcon}})],1)]),n("li",[n("a",{attrs:{href:""}},[n("v-img",{staticClass:"instagram",attrs:{src:e.instagramIcon}})],1)])])]),n("VueSlickCarousel",e._b({staticClass:"height100"},"VueSlickCarousel",e.settings,!1),e._l(e.slideShows,(function(t){return n("div",{staticClass:"slide-item-container"},[n("v-img",{staticClass:"slide-item",attrs:{gradient:"to top right, rgba(83, 18, 124, 0), rgba(83, 18, 124, 0.47)",src:t.image}},[n("div",{staticClass:"slide-titles"},[n("div",{staticClass:"slide-title"},[e._v(e._s(t.title))]),n("div",{staticClass:"slide-sub-title"},[e._v(e._s(t.subTitle))])])])],1)})),0)],1)])},i=[],s=n("ade3"),r=n("a7ab"),o=n.n(r),c=(n("7b8d"),n("6a2c"),n("4ffa")),l=n("3a29"),u={name:"Home",components:{VueSlickCarousel:o.a,eventBus:l["a"],searchIcon:c["a"]},data:function(){return{searchIcon:n("1b61"),mainLogo:n("a266"),fbGrayIcon:n("2171"),igGrayIcon:n("d3cc"),facebookIcon:n("e065"),instagramIcon:n("3f73"),settings:Object(s["a"])({arrows:!0,autoplay:!0,dots:!1,adaptiveHeight:!0},"autoplay",!0),slideShows:[{image:n("8be9"),title:"The Lifestyle",subTitle:"feat. July Palafox"},{image:n("8be9"),title:"The Lifestyle",subTitle:"feat. July Palafox"},{image:n("8be9"),title:"The Lifestyle",subTitle:"feat. July Palafox"},{image:n("8be9"),title:"The Lifestyle",subTitle:"feat. July Palafox"}],menuLogo:n("d0a9"),isActive:"",menuShow:!1,menus:[{title:"Home",path:"/"},{title:"Fashion Mode",path:"/fashion-mode"},{title:"Travel Miles",path:"/travel-miles"},{title:"Lifestyle Makers",path:"/lifestyle-makers"},{title:"Technology & Machine",path:"/technology-and-machine"},{title:"Mart",path:"/mart"},{title:"About",path:"/about"}]}},mounted:function(){var e=this;e.eventPass()},methods:{eventPass:function(){var e=this;l["a"].$on("isSearchBarOpen",(function(t){e.menuShow=t})),l["a"].$on("menuOpen",(function(t){e.menuShow=t,e.isActive=t}))},isMenuOpen:function(){var e=this;e.menuShow=!e.isActive,e.isActive=!e.isActive,l["a"].$emit("menuOpen",e.menuShow)},openSearchBar:function(){var e=this;e.searchOpen=!e.searchOpen,l["a"].$emit("isSearchBarOpen",e.searchOpen)}}},d=u,m=(n("e844"),n("2877")),p=n("6544"),h=n.n(p),A=n("62ad"),f=n("adda"),g=Object(m["a"])(d,a,i,!1,null,null,null);t["a"]=g.exports;h()(g,{VCol:A["a"],VImg:f["a"]})},e760:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDUtMDlUMjA6MzE6MTgrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTE0VDEzOjIyOjAyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA1LTE0VDEzOjIyOjAyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzYWZhY2Q2LTI5YWMtNGI5NC04OGVhLThkNDZjOGE2MWVkNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjNjYTlkMDM2LWQyNGQtMjI0Zi05MTVhLWNhZDgxOTFmNjViYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU3MjgxNzEyLTAzOGUtNDU0Yi1hODRkLWQxZjAxOWZkZWM1YSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTcyODE3MTItMDM4ZS00NTRiLWE4NGQtZDFmMDE5ZmRlYzVhIiBzdEV2dDp3aGVuPSIyMDIwLTA1LTA5VDIwOjMxOjE4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTNhZmFjZDYtMjlhYy00Yjk0LTg4ZWEtOGQ0NmM4YTYxZWQ2IiBzdEV2dDp3aGVuPSIyMDIwLTA1LTE0VDEzOjIyOjAyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LmO+KAAACqUlEQVQ4ja2UT2jTYBjGn5TyyUgW0kk7cSnNugViN7ukvXRSK2N4FDwo05PX4S47KCh48eIOXnbQ0YMePAoDhR0VhrXgLs65poHRSTOaXlbWfmQtw1CoB02otZMNfU7f39/3vsnzvkw2u4JeTU5eXKSULjQaDanVavoBQBCEI44brPI8v2oYxYfu2fn5u7/d9XdPVFVLV6vWmq4XhN5HKKUDlNJxAA9Ylrsny/LM1taXfO85nzuIx6fmDKOYq9VqAiGkE42OfVBV7TIABgATj0/dUhTlJcty7Var6TeMYi4en5rrBTLZ7ApUVUsbRjHnOA4jiuFvoVBodnPz894f3wJAIpGM1OsHb03TVAkhnVhsIpNKTXuR+gGgVCqtO47DSJK0ZZqmZlmVfiwAwK+HNFEM71pWZaxatdYABLyUY7GJpVar6WdZrj00dPb6saQehUKhWUJIp1arCfn8x0UPaNv2DQAIh8VXx6V5XKSiGM4BAKV0wQM2m4cjAEDImXcnhbnief4RADQaDckDUkoHAGB7++vr0wJd27heBbps87/kY1muDQCqql067WXXh4IgHHnAQCCwBwC2bT85LdBxvl8FAI4brHpAQRCeAYBlVTKJRDJyUlgikYxUKtYdAOB5ftUD6nphORgMUsdxmP39/fcnBdbrB29c/2YyV7xm4QOAkRHxGiGkY1mVcUmSNv8WaSKRjIhiuGSapgYAo6Oj97v3fcDP368oF24TQjqmaWo7Ozu7iqK86C5+VdXS0ejYuq4XypZVGXfXy+Xy042NT2l3znT3Q1XV0qVSab3bV/0UDAbp8PC5x+Vy+ambtizLM6nUdJ7p12BjsYkl27ZvNpuH513jsyzXDgQCpiAIz3W9sNwbgAvtCzyNeqH/XCmp1HReluUZt0B+ANeTI114lBqgAAAAAElFTkSuQmCC"},e844:function(e,t,n){"use strict";var a=n("1ab2"),i=n.n(a);i.a},e89e:function(e,t,n){},f42e:function(e,t,n){e.exports=n.p+"img/cat1.b25e3960.png"},fcad:function(e,t,n){"use strict";var a=n("43e7"),i=n.n(a);i.a}});
//# sourceMappingURL=app.b580c91e.js.map