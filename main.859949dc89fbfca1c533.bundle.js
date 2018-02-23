webpackJsonp([1],{0:function(n,e,t){n.exports=t("6sO2")},"6sO2":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("WT6e"),i=function(){},a=t("yEmc");function o(n){return null===n||void 0===n}var r=function(n){return n[n.READY=0]="READY",n[n.PLAYING=1]="PLAYING",n[n.PASS=2]="PASS",n}({}),u=function(){function n(n){this.ngRedux=n}return n.prototype.reset=function(){this.ngRedux.dispatch({type:n.RESET})},n.prototype.updateStatus=function(e){var t=this;this.ngRedux.dispatch({type:n.UPDATE_STATUS,payload:e}),e===r.PLAYING?this.timerId=setInterval(function(){t.ngRedux.dispatch({type:n.UPDATE_ELAPSED,payload:+t.ngRedux.getState().elapsedMs+1})},1e3):e===r.PASS&&(clearInterval(this.timerId),this.ngRedux.dispatch({type:n.UPDATE_HIGHESTSPEED,payload:this.ngRedux.getState().elapsedMs}))},n.prototype.updateLastSelectedCard=function(e){this.ngRedux.dispatch({type:n.UPDATE_LAST_SELECTED_CARD,payload:e})},n.prototype.updateCardFlipped=function(e){this.ngRedux.dispatch({type:n.UPDATE_CARD_FLIPPED,payload:e})},n.prototype.match=function(){this.ngRedux.dispatch({type:n.UPDATE_REMAINS,payload:+this.ngRedux.getState().remains-1})},n.prototype.flipCard=function(n){var e=this,t=this.ngRedux.getState();if(this.updateCardFlipped(n),t.status===r.READY&&this.updateStatus(r.PLAYING),o(t.lastSelectedCard))return this.updateLastSelectedCard(n);if(t.lastSelectedCard.name===n.name)return this.updateLastSelectedCard(null),this.match(),+t.remains-1||this.updateStatus(r.PASS);var l=t.lastSelectedCard;this.updateLastSelectedCard(null),setTimeout(function(){e.updateCardFlipped(l),e.updateCardFlipped(n)},1e3)},n.RESET="RESET",n.UPDATE_STATUS="UPDATE_STATUS",n.UPDATE_LAST_SELECTED_CARD="UPDATE_LAST_SELECTED_CARD",n.UPDATE_CARD_FLIPPED="UPDATE_CARD_FLIPPED",n.UPDATE_REMAINS="UPDATE_REMAINS",n.UPDATE_ELAPSED="UPDATE_ELAPSED",n.UPDATE_HIGHESTSPEED="UPDATE_HIGHESTSPEED",n}(),d=function(){function n(n){this.actions=n}return n.prototype.ngOnInit=function(){this.actions.updateStatus(r.READY),this.actions.reset()},n}(),p=function(){},s=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:160px;padding:5px;border-radius:5px;background-color:#5979ac;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:450px){[_nghost-%COMP%]{width:150px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:140px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:110px}a[_ngcontent-%COMP%]{font-size:18px}}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"h1",[["class","logo"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](2,0,null,null,1,"a",[["href","https://github.com/leftstick/angular2-memory-game"],["target","_blank"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Memory"])),(n()(),l["\u0275ted"](-1,null,["\n"]))],null,null)}var f=function(){},m=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:120px;padding:10px;background-color:#bbada0;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#eae0d1}.text[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width:450px){[_nghost-%COMP%]{width:105px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:95px}h2[_ngcontent-%COMP%]{font-size:20px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:90px}}"]],data:{}});function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""])),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](3,0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.title),n(e,4,0,t.text)})}var h=t("Xjw4"),x=t("TToO"),b=t("YaPU"),y=function(){function n(){}return Object(x.__decorate)([Object(a.select)(),Object(x.__metadata)("design:type",b.Observable)],n.prototype,"remains$",void 0),Object(x.__decorate)([Object(a.select)(),Object(x.__metadata)("design:type",b.Observable)],n.prototype,"highestSpeed$",void 0),n}(),_=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-negative:0;flex-shrink:0}"]],data:{}});function E(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"logo",[],null,null,null,c,s)),l["\u0275did"](1,49152,null,0,p,[],null,null),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](3,0,null,null,2,"info",[["title","Remains"]],null,null,null,g,m)),l["\u0275did"](4,49152,null,0,f,[],{title:[0,"title"],text:[1,"text"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef]),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](7,0,null,null,2,"info",[["title","Top"]],null,null,null,g,m)),l["\u0275did"](8,49152,null,0,f,[],{title:[0,"title"],text:[1,"text"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef])],function(n,e){var t=e.component;n(e,4,0,"Remains",l["\u0275unv"](e,4,1,l["\u0275nov"](e,5).transform(t.remains$))),n(e,8,0,"Top",l["\u0275unv"](e,8,1,l["\u0275nov"](e,9).transform(t.highestSpeed$)))},null)}var P=["8-ball","baked-potato","dinosaur","kronos","rocket","skinny-unicorn","that-guy","zeppelin","back"].map(function(n){return{name:n,flipped:!1,url:"/angular5-memory-game/assets/"+n+".png"}}),v=P.filter(function(n){return"back"!==n.name}),S=function(){function n(){this.flipped=new l.EventEmitter,this.backCard=P.find(function(n){return"back"===n.name})}return n.prototype.flip=function(n){n.flipped||this.flipped.emit(n)},n}(),C=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100px;height:121px;margin-right:3px;cursor:pointer;position:relative;-webkit-perspective:800px;perspective:800px}.card[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.card.flipped[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:100%;width:100%;position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background:#00f;-webkit-transform:rotateY(0);transform:rotateY(0)}.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{background:#00f;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@media screen and (max-width:450px){[_nghost-%COMP%]{width:92px;height:111px;margin-right:1px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:85px;height:102px;margin-right:1px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:70px;height:84px;margin-right:1px}}"]],data:{}});function A(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,"div",[["class","card"]],[[2,"flipped",null]],[[null,"click"]],function(n,e,t){var l=!0,i=n.component;return"click"===e&&(l=!1!==i.flip(i.info)&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](2,0,null,null,0,"img",[["class","front"]],[[8,"src",4]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](4,0,null,null,0,"img",[["class","back"]],[[8,"src",4]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n"]))],null,function(n,e){var t=e.component;n(e,0,0,t.info.flipped),n(e,2,0,l["\u0275inlineInterpolate"](1,"",t.info.url,"")),n(e,4,0,l["\u0275inlineInterpolate"](1,"",t.backCard.url,""))})}var R=function(){function n(n){this.actions=n}return n.prototype.trackByCards=function(n,e){return e._id},Object(x.__decorate)([Object(a.select)(),Object(x.__metadata)("design:type",b.Observable)],n.prototype,"cards$",void 0),n}(),w=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{margin-top:20px;width:100%;background-color:#fff;height:530px;border-radius:4px;padding:10px 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:distribute;align-content:space-around}card[_ngcontent-%COMP%]:nth-child(4n){margin-right:0}@media screen and (max-width:450px){[_nghost-%COMP%]{height:480px;padding:10px 0}}@media screen and (max-width:370px){[_nghost-%COMP%]{height:450px}}"]],data:{}});function k(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"card",[],null,[[null,"flipped"]],function(n,e,t){var l=!0;return"flipped"===e&&(l=!1!==n.component.actions.flipCard(t)&&l),l},A,C)),l["\u0275did"](1,49152,null,0,S,[],{info:[0,"info"]},{flipped:"flipped"})],function(n,e){n(e,1,0,e.context.$implicit)},null)}function T(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,2,null,k)),l["\u0275did"](1,802816,null,0,h.d,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef])],function(n,e){var t=e.component;n(e,1,0,l["\u0275unv"](e,1,0,l["\u0275nov"](e,2).transform(t.cards$)),t.trackByCards)},null)}var D=function(){function n(n){this.actions=n,this.status=r}return n.prototype.reset=function(n){!function(n){n&&(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault())}(n),this.actions.reset()},Object(x.__decorate)([Object(a.select)(),Object(x.__metadata)("design:type",b.Observable)],n.prototype,"status$",void 0),Object(x.__decorate)([Object(a.select)(),Object(x.__metadata)("design:type",b.Observable)],n.prototype,"elapsedMs$",void 0),n}(),O=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{position:relative;margin-top:10px;width:100%;height:20px;text-align:center;font-size:18px;font-weight:700}.hand[_ngcontent-%COMP%]{cursor:pointer}.elapsed[_ngcontent-%COMP%]{position:absolute;right:10px;font-size:15px;font-weight:400}"]],data:{}});function M(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Ready"]))],null,null)}function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Playing"]))],null,null)}function L(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[["class","hand"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.reset(t)&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Play again"]))],null,null)}function j(n){return l["\u0275vid"](0,[(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275and"](16777216,null,null,2,null,M)),l["\u0275did"](2,16384,null,0,h.e,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef]),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275and"](16777216,null,null,2,null,I)),l["\u0275did"](6,16384,null,0,h.e,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef]),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275and"](16777216,null,null,2,null,L)),l["\u0275did"](10,16384,null,0,h.e,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef]),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](13,0,null,null,2,"span",[["class","elapsed"]],null,null,null,null,null)),(n()(),l["\u0275ted"](14,null,[""," s"])),l["\u0275pid"](131072,h.a,[l.ChangeDetectorRef]),(n()(),l["\u0275ted"](-1,null,["\n"]))],function(n,e){var t=e.component;n(e,2,0,l["\u0275unv"](e,2,0,l["\u0275nov"](e,3).transform(t.status$))===t.status.READY),n(e,6,0,l["\u0275unv"](e,6,0,l["\u0275nov"](e,7).transform(t.status$))===t.status.PLAYING),n(e,10,0,l["\u0275unv"](e,10,0,l["\u0275nov"](e,11).transform(t.status$))===t.status.PASS)},function(n,e){var t=e.component;n(e,14,0,l["\u0275unv"](e,14,0,l["\u0275nov"](e,15).transform(t.elapsedMs$)))})}var U=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:450px;height:670px;border:4px solid #bdbdbd;border-radius:2px;background-color:#faf8ef;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:450px){[_nghost-%COMP%]{width:100%;height:100%;-ms-flex-pack:distribute;justify-content:space-around}}"]],data:{}});function N(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"dashboard",[],null,null,null,E,_)),l["\u0275did"](1,49152,null,0,y,[],null,null),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](3,0,null,null,1,"chessboard",[],null,null,null,T,w)),l["\u0275did"](4,49152,null,0,R,[u],null,null),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275eld"](6,0,null,null,1,"status",[],null,null,null,j,O)),l["\u0275did"](7,49152,null,0,D,[u],null,null)],null,null)}var F=l["\u0275ccf"]("memory-game",d,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"memory-game",[],null,null,null,N,U)),l["\u0275did"](1,114688,null,0,d,[u],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),Y=t("OE0E"),$=t("MTKS"),H=t("EF/a"),G=t("U/B2"),Z=t("2KeS"),z=Object(Z.combineReducers)({remains:function(n,e){return e.type===u.RESET||o(n)?8:e.type===u.UPDATE_REMAINS?e.payload:n},highestSpeed:function(n,e){if(e.type===u.RESET||o(n))return localStorage.getItem("highestSpeed")||9999;if(e.type===u.UPDATE_HIGHESTSPEED){if(!localStorage.getItem("highestSpeed"))return localStorage.setItem("highestSpeed",e.payload)||e.payload;if(localStorage.getItem("highestSpeed")>e.payload)return localStorage.setItem("highestSpeed",e.payload)||e.payload}return n},status:function(n,e){return e.type===u.RESET||o(n)?r.READY:e.type===u.UPDATE_STATUS?e.payload:n},cards:function(n,e){return e.type===u.RESET||o(n)?function(n){for(var e=n.slice(),t=e.length;t;t-=1){var l=Math.floor(Math.random()*t),i=e[t-1];e[t-1]=e[l],e[l]=i}return e}(v.concat(v).map(function(n,e){return{_id:e,name:n.name,flipped:n.flipped,url:n.url}})):e.type===u.UPDATE_CARD_FLIPPED?n.map(function(n){return n._id===e.payload._id?{_id:n._id,name:n.name,flipped:!n.flipped,url:n.url}:n}):n},lastSelectedCard:function(n,e){return e.type===u.RESET||void 0===n?null:e.type===u.UPDATE_LAST_SELECTED_CARD?e.payload:n},elapsedMs:function(n,e){return e.type===u.RESET||o(n)?0:e.type===u.UPDATE_ELAPSED?e.payload:n}}),B=function(){return function(n){this.ngRedux=n,this.ngRedux.configureStore(z,{},[],[])}}(),V=l["\u0275cmf"](i,[d],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[F]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](5120,l.LOCALE_ID,l["\u0275q"],[[3,l.LOCALE_ID]]),l["\u0275mpd"](4608,h.g,h.f,[l.LOCALE_ID,[2,h.j]]),l["\u0275mpd"](4608,l.Compiler,l.Compiler,[]),l["\u0275mpd"](5120,l.APP_ID,l["\u0275i"],[]),l["\u0275mpd"](5120,l.IterableDiffers,l["\u0275n"],[]),l["\u0275mpd"](5120,l.KeyValueDiffers,l["\u0275o"],[]),l["\u0275mpd"](4608,Y.b,Y.q,[h.c]),l["\u0275mpd"](6144,l.Sanitizer,null,[Y.b]),l["\u0275mpd"](4608,Y.e,Y.f,[]),l["\u0275mpd"](5120,Y.c,function(n,e,t,l,i){return[new Y.j(n,e),new Y.n(t),new Y.m(l,i)]},[h.c,l.NgZone,h.c,h.c,Y.e]),l["\u0275mpd"](4608,Y.d,Y.d,[Y.c,l.NgZone]),l["\u0275mpd"](135680,Y.l,Y.l,[h.c]),l["\u0275mpd"](4608,Y.k,Y.k,[Y.d,Y.l]),l["\u0275mpd"](6144,l.RendererFactory2,null,[Y.k]),l["\u0275mpd"](6144,Y.o,null,[Y.l]),l["\u0275mpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["\u0275mpd"](4608,Y.g,Y.g,[h.c]),l["\u0275mpd"](4608,Y.h,Y.h,[h.c]),l["\u0275mpd"](4608,$.DevToolsExtension,$.DevToolsExtension,[l.ApplicationRef,H.NgRedux]),l["\u0275mpd"](4608,u,u,[H.NgRedux]),l["\u0275mpd"](512,h.b,h.b,[]),l["\u0275mpd"](1024,l.ErrorHandler,Y.p,[]),l["\u0275mpd"](1024,l.APP_INITIALIZER,function(n){return[Y.r(n)]},[[2,l.NgProbeToken]]),l["\u0275mpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["\u0275mpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["\u0275Console"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["\u0275mpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["\u0275mpd"](512,Y.a,Y.a,[[3,Y.a]]),l["\u0275mpd"](512,G.NgReduxModule,G.NgReduxModule,[]),l["\u0275mpd"](1024,H.NgRedux,G._ngReduxFactory,[l.NgZone]),l["\u0275mpd"](512,B,B,[H.NgRedux]),l["\u0275mpd"](512,i,i,[])])});Object(l.enableProdMode)(),Y.i().bootstrapModuleFactory(V),document.head.removeChild(document.querySelector("#splash-spinner")),document.body.removeChild(document.querySelector(".spinner"))},Jnfr:function(n,e){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="Jnfr"}},[0]);