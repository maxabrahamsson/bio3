(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(38)},26:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(5),o=n.n(i),l=(n(26),n(9)),c=n.n(l),s=n(10),d=n(11),u=n(12),m=n(19),f=n(13),h=n(20),p=n(14),E=n.n(p),v=n(18),w=n(7),g=n.n(w),k=n(42),y=n(40),b=n(41),Y=(n(35),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).exportPDF=function(){n.resume.save()},n.Index=function(){return n.renderPortfolio()},n.Pdf=function(){return n.renderPDFView()},n.initialize=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("data.json").then(function(e){return e.json()}).then(function(e){n.setState({data:e})}).catch(function(e){console.error(e)});case 2:case"end":return e.stop()}},e,this)})),n.state={data:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return 0===this.state.data.length?r.a.createElement("div",null):r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.a,{to:"/"},"Portfolio")),r.a.createElement("li",null,r.a.createElement(y.a,{to:"/pdf/"},"Traditional Resume")))),r.a.createElement(b.a,{path:"/",exact:!0,component:this.Index}),r.a.createElement(b.a,{path:"/pdf/",component:this.Pdf})))}},{key:"renderPDFView",value:function(){var e=this;return r.a.createElement("div",{style:{align:"center",width:"%100"}},r.a.createElement("button",{onClick:this.exportPDF},"Download PDF"),r.a.createElement(v.a,{paperSize:"Letter",fileName:"AhmetYildirim_Resume_"+g()().format("DDMMYYYY")+".pdf",title:"",subject:"",keywords:"",ref:function(t){return e.resume=t}},r.a.createElement("div",{style:{height:792,width:612,padding:"none",backgroundColor:"white",boxShadow:"5px 5px 5px black",margin:"auto",overflowX:"hidden",overflowY:"hidden",fontSize:11,fontFamily:"Calibri"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3",align:"center",style:{fontSize:18}},"Ahmet Yildirim")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3",align:"center",style:{borderBottomWidth:2,borderBottomColor:"black",borderBottomStyle:"solid"}},"Employment"))),r.a.createElement("tbody",null,this.state.data.companies.map(function(e,t){var n=g()(e.start,"DD.MM.YYYY"),a=g()(e.end,"DD.MM.YYYY");return[r.a.createElement("tr",{style:{fontWeight:"bold"},key:"tr_"+t},r.a.createElement("td",{align:"left"},e.title),r.a.createElement("td",{align:"center"},e.name),r.a.createElement("td",{align:"right"},n.format("MMM YYYY")," - ",a.format("MMM YYYY"))),r.a.createElement("tr",{key:"tr2_"+t},r.a.createElement("td",{colSpan:"3"},e.description))]}))))))}},{key:"renderPortfolio",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{width:"100%",float:"left"}},this.renderList("Education",this.state.data.education),this.renderList("Profiles",this.state.data.profiles)),r.a.createElement("div",{style:{width:"100%",float:"left"}},this.renderList("Publicity",this.state.data.publicity),this.renderList("Interests & Characteristics",this.state.data.interests)),r.a.createElement("div",{style:{width:"100%",float:"left"}},r.a.createElement("h2",{id:"works"},"Finished Projects & Works"),r.a.createElement("div",{style:{width:"100%",float:"left"},align:"left"},r.a.createElement("p",null,"This section of the portfolio was last updated on 2017 March. Please visit my LinkedIn profile for more up-to-date portfolio.")),r.a.createElement("div",{className:"App-intro"},this.state.data.projects.map(function(t,n){return e.renderProject(t.image,t.title,t.subtext,t.linkTo,n)}))),r.a.createElement("div",{style:{width:"100%",float:"left"}},r.a.createElement("h2",{id:"works"},"Experiments & Concept Projects"),r.a.createElement("div",{className:"App-intro"},this.state.data.experiments.map(function(t,n){return e.renderProject(t.image,t.title,t.subtext,t.linkTo,n)}))))}},{key:"componentDidMount",value:function(){this.initialize()}},{key:"renderProject",value:function(e,t,n,a,i){return r.a.createElement("div",{key:i},r.a.createElement("a",{href:a,className:"endislink"},r.a.createElement("div",{className:"endis"},r.a.createElement("div",{className:"resim",style:{backgroundImage:"url(\n                  ".concat(e,")")}},r.a.createElement("div",{className:"caption"},r.a.createElement("div",null,t," ",n&&r.a.createElement("span",{className:"subtext"},"(",n,")")))))))}},{key:"renderList",value:function(e,t){var n=this;return r.a.createElement("div",{style:x},r.a.createElement("h2",null,e),r.a.createElement("ul",null,t.map(function(e,t){return n.renderTextListItem(e.text,e.linkTo,t)})))}},{key:"renderTextListItem",value:function(e,t,n){return r.a.createElement("li",{key:n},t?r.a.createElement("a",{href:t},e):r.a.createElement("span",null,e))}}]),t}(a.Component)),x={width:"50%",float:"left"},P=Y,j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):M(e)})}}()}},[[21,2,1]]]);
//# sourceMappingURL=main.608f63d1.chunk.js.map