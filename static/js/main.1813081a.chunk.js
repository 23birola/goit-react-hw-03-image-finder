(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3yU8C",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__GSNDh"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__1Y5sF",modal:"Modal_modal__2nI7j"}},15:function(e,t,a){e.exports={spinnerWraper:"Loader_spinnerWraper__3HAM0"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__dA4d_"}},27:function(e,t,a){e.exports={button:"Button_button__2KF1k"}},34:function(e,t,a){},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__31Ppl",searchForm:"Searchbar_searchForm__1G-6X",searchFormButton:"Searchbar_searchFormButton__278qt","searchFormButton-label":"Searchbar_searchFormButton-label__1W2FD",searchFormInput:"Searchbar_searchFormInput__1Cq4S"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),o=(a(34),a(4)),i=a.n(o),l=a(16),u=a(7),m=a(8),h=a(9),b=a(11),p=a(10),d=a(5),g=a.n(d),j=a(1),f=function(e){var t=e.handleSubmit;return Object(j.jsx)("header",{className:g.a.searchbar,children:Object(j.jsxs)("form",{className:g.a.searchForm,onSubmit:t,children:[Object(j.jsx)("button",{type:"submit",className:g.a.searchFormButton,children:Object(j.jsx)("span",{className:g.a.searchFormButtonLabel})}),Object(j.jsx)("input",{className:g.a.searchFormInput,type:"text",name:"query",autoFocus:!0,placeholder:"Search images and photos"})]})})},O=a(13),y=a.n(O),v=function(e){var t=e.image,a=e.onClick;return Object(j.jsx)("li",{className:y.a.imageGalleryItem,children:Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,className:y.a.imageGalleryItemImage,onClick:a})})},x=a(26),_=a.n(x),I=function(e){var t=e.images,a=e.onSelectImg;return Object(j.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e){return Object(j.jsx)(v,{image:e,onClick:function(){return a(e.largeImageURL,e.tags)}},e.id)}))})},S=a(27),w=a.n(S),k=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:w.a.button,onClick:t,children:"Load more"})},C=a(14),F=a.n(C),L=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){var a=e.props.onClose;"Escape"===t.code&&a()},e.handleOverlayClick=function(t){var a=e.props.onClose;t.target===t.currentTarget&&a()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image;return Object(j.jsx)("div",{className:F.a.overlay,onClick:this.handleOverlayClick,children:Object(j.jsx)("div",{className:F.a.modal,children:Object(j.jsx)("img",{src:e.src,alt:e.alt,width:"800",height:"600"})})})}}]),a}(n.Component),N=a(28),D=a.n(N),G=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,n="21757079-036beeeb18b1a04124bd9f213",e.next=4,D.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12"));case 4:return r=e.sent,e.abrupt("return",r.data.hits);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=a(29),q=a.n(E),B=a(15),R=a.n(B),A=function(){return Object(j.jsx)("div",{className:R.a.spinnerWraper,children:Object(j.jsx)(q.a,{className:R.a.spinner,type:"Oval",color:"#3f51b5",height:50,width:50})})},M=a(6),U=(a(75),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,query:"",selectedImg:null,status:"IDLE"},e.handleSubmit=function(t){t.preventDefault();var a=t.target.elements.query.value.toLowerCase();if(!a.trim())return e.setState({page:1,status:"IDLE"}),M.b.error("Enter query",{position:"top-right"});e.state.query!==a&&e.setState({query:a,status:"LOADING",page:1,images:[]})},e.handleButtonClick=function(){return e.setState((function(e){return{page:e.page+1,status:"LOADING"}})),console.log(e.state.page)},e.onSelectImg=function(t,a){e.setState({selectedImg:{src:t,alt:a}}),console.log(t)},e.onModalClose=function(){e.setState({selectedImg:null})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.query,s=n.page,a.query===this.state.query&&a.page===this.state.page){e.next=17;break}return e.prev=2,e.next=5,G(r,s);case 5:if((c=e.sent).length){e.next=8;break}throw new Error;case 8:this.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(c)),status:"RESOLVED"}})),e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(2),console.log("\u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),M.b.error("wrong query",{position:"top-right"}),this.setState({status:"ERROR"}),e.abrupt("return");case 17:this.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 18:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status;return"IDLE"===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{handleSubmit:this.handleSubmit}),Object(j.jsx)(M.a,{})]}):"LOADING"===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{handleSubmit:this.handleSubmit}),Object(j.jsx)(A,{})]}):"RESOLVED"===a?Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{handleSubmit:this.handleSubmit}),Object(j.jsx)(I,{images:t,onSelectImg:this.onSelectImg}),Object(j.jsx)(k,{onClick:this.handleButtonClick}),this.state.selectedImg&&Object(j.jsx)(L,{image:this.state.selectedImg,onClose:this.onModalClose})]}):"ERROR"===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{handleSubmit:this.handleSubmit}),Object(j.jsx)(M.a,{})]}):void 0}}]),a}(n.Component)),W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),W()}},[[76,1,2]]]);
//# sourceMappingURL=main.1813081a.chunk.js.map