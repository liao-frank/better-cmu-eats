(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(54)},24:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(24),n(3)),s=n(4),l=n(6),u=n(5),d=n(7),f=n(1),v=n(16),h=n.n(v),m=n(17),p=n.n(m),g=n(18),y=n.n(g),b=new(function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"get",value:function(){var e=this;return y.a.get("https://apis.scottylabs.org/dining/v1/locations").then(function(t){return e.format(t)})}},{key:"format",value:function(e){var t=e.data.locations,n=!0,a=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;j(c,new Date)}}catch(m){a=!0,r=m}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}var s={},l=!0,u=!1,d=void 0;try{for(var f,v=t[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var h=f.value;s[h.name]=h}}catch(m){u=!0,d=m}finally{try{l||null==v.return||v.return()}finally{if(u)throw d}}return s}}]),e}()),O=function(e){return 1e4*e.day+100*e.hour+e.min},j=function(e,t){var n=e.times,a=O(function(e){var t=new Date(e);return{day:t.getDay(),hour:t.getHours(),min:t.getMinutes()}}(t)),r=n.map(function(e){var t=O(e.start),n=O(e.end);return n>t?a>=t&&n>a:a>=t||n>a}).reduce(function(e,t){return e||t},!1),o=function(e){var t=new Date(e);return function(e){var n=new Date(t),a=(e.day+7-n.getDay())%7;return n.setDate(n.getDate()+a),n.setHours(e.hour),n.setMinutes(e.min),n.setSeconds(0),t>n&&n.setDate(n.getDate()+7),n.toJSON()}}(t),i=n.map(function(e){return o(r?e.end:e.start)}).sort()[0];return Object.assign(e,{isOpen:r,nextTime:i})},k=b,N=function(e){return"string"===typeof e||e.prototype.render},w=function(e){var t=function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).ref=r.a.createRef(),t.prevRect=void 0,t.prevScroll=void 0,t.componentWillNeedPaint=t.componentWillNeedPaint.bind(Object(f.a)(Object(f.a)(t))),t.componentWillPaint=t.componentWillPaint.bind(Object(f.a)(Object(f.a)(t))),t}return Object(d.a)(n,t),Object(s.a)(n,[{key:"getSnapshotBeforeUpdate",value:function(){return this.componentWillNeedPaint(),null}},{key:"componentDidUpdate",value:function(){this.componentWillPaint()}},{key:"componentDidMount",value:function(){this.componentWillNeedPaint()}},{key:"componentWillNeedPaint",value:function(){var e=this.getCurrentNode();if(e){var t=this.last(e),n=t.nextRect,a=t.nextScroll;this.first(n,a)}}},{key:"componentWillPaint",value:function(){var e=this,t=this.getCurrentNode();t&&(this.play(t,!1),requestAnimationFrame(function(){var n=e.last(t),a=n.nextRect,r=n.nextScroll;e.invert(t,{prevRect:e.prevRect,prevScroll:e.prevScroll},{nextRect:a,nextScroll:r}),requestAnimationFrame(function(){e.play(t)}),e.first(a,r)}))}},{key:"first",value:function(e,t){this.prevRect=e,this.prevScroll=t}},{key:"last",value:function(e){return{nextRect:e.getBoundingClientRect(),nextScroll:{x:window.scrollX,y:window.scrollY}}}},{key:"invert",value:function(e,t,n){var a=t.prevRect,r=t.prevScroll,o=n.nextRect,i=n.nextScroll,c=a.top+r.y-(o.top+i.y),s=a.left+r.x-(o.left+i.x);e.style.transition="none",e.style.transform="translate(".concat(s,"px, ").concat(c,"px)")}},{key:"play",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.style.transition=t?"":"none",e.style.transform="translate(0px, 0px)"}},{key:"getCurrentNode",value:function(){if(this.ref.current)return i.a.findDOMNode(this.ref.current)}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({ref:this.ref,onesec:this.componentWillPaint,willOnesec:this.componentWillNeedPaint},this.props))}}]),n}(r.a.Component);return Object.defineProperty(t,"name",{value:"Onesec"+e.name}),t},S=function(e){if(N(e))return w(e);throw new Error("Onesec can only be attached to stateful components")},C=(n(46),function(e){var t=e.active,n=e.onClick,a=["star","icon-32"];return t&&a.push("active"),r.a.createElement("div",{className:a.join(" "),onClick:n},r.a.createElement("div",{className:"icon-star-outline icon icon-32"}),r.a.createElement("div",{className:"icon-star icon icon-32"}))}),E=(n(48),S(function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.color,a=e.starred,o=e.toggleStarred,i=["card"];return n&&i.push(n),r.a.createElement("div",{className:i.join(" ")},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"subtitle"},this.props.children)),r.a.createElement("div",{className:"controls"},r.a.createElement(C,{onClick:o,active:a})))}}]),t}(a.Component))),x=(n(50),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).inputNode=void 0,n.focus=n.focus.bind(Object(f.a)(Object(f.a)(n))),n.clear=n.clear.bind(Object(f.a)(Object(f.a)(n))),n.onChange=n.onChange.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=["bar","flex-row"];return this.inputNode&&this.inputNode.value&&t.push("active"),r.a.createElement("div",{className:["search"].join(" "),onClick:this.focus},r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:"icon icon-24 icon-glass unselectable"}),r.a.createElement("input",{ref:function(t){e.inputNode=t},spellCheck:"false",onChange:this.onChange,placeholder:"Search"}),r.a.createElement("div",{className:"icon icon-24 icon-x",onClick:this.clear})))}},{key:"focus",value:function(){var e=this.inputNode;e&&e.focus()}},{key:"clear",value:function(){var e=this.inputNode;e&&(e.value=""),this.onChange({target:e})}},{key:"onChange",value:function(e){var t=this.props.onChange;t&&t(e.target.value)}}]),t}(a.PureComponent)),D=(n(52),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,locations:{},starred:n.getStarred(),searchTerm:"",dark:!1},n.toggleStarred=n.toggleStarred.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this,t=this.state.loading;return r.a.createElement("div",{className:"app"},r.a.createElement(x,{onChange:function(t){e.setState({searchTerm:t})}}),r.a.createElement("div",{className:"separator"}),t?r.a.createElement("div",{className:"message header"},"Loading..."):this.renderCards())}},{key:"renderCards",value:function(){var e=this,t=this.state.starred,n=this.getRenderedLocations();return this.sortLocations(n,"isOpen"),this.sortLocations(n,function(e){return t[e.name]||!1}),0===n.length?r.a.createElement("div",{className:"message header"},"Nothing to see here."):n.map(function(n){return r.a.createElement(E,{key:n.name,title:n.name,color:n.isOpen?"green":"red",starred:t[n.name]||!1,toggleStarred:function(){e.toggleStarred(n.name)}},r.a.createElement("div",{className:"header"},n.location),e.getTagline(n))})}},{key:"getRenderedLocations",value:function(){var e=this.state,t=e.locations,n=e.searchTerm,a=Object.keys(t);n&&(a=h.a.filter(n,a).map(function(e){return e.string}));return a.map(function(e){return t[e]})}},{key:"getTagline",value:function(e){var t=e.isOpen,n=e.nextTime,a=p()(n),r=t?"Closes ":"Opens ";return r+=a.fromNow().charAt(0).toLowerCase()+a.fromNow().slice(1),r+=" ("+a.calendar()+")"}},{key:"sortLocations",value:function(e,t){e.sort(function(e,n){var a,r;if("string"===typeof t)a=e[t],r=n[t];else{if("function"!==typeof t)return console.error("Failed to sort locations on "+t),0;a=t(e),r=t(n)}return a===r?0:a&&!r?-1:1})}},{key:"update",value:function(){this.retrieve()}},{key:"retrieve",value:function(){var e=this;k.get().then(function(t){e.setState({loading:!1,locations:t})}).catch(function(t){console.error(t),e.setState({loading:!1,locations:[]})})}},{key:"getStarred",value:function(){var e=localStorage.getItem("starred");return e?JSON.parse(e):{}}},{key:"toggleStarred",value:function(e){var t=this.state.starred,n=Object.assign({},t);n[e]=!n[e];var a=window.scrollY;this.setState({starred:n},function(){requestAnimationFrame(function(){window.scrollTo(0,a)})}),localStorage.setItem("starred",JSON.stringify(n))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.4a5d2372.chunk.js.map