
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([3],{272:function(e,t,n){e.exports=n(273)},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=r(a),o=n(274),u=r(o),l=n(277),s=r(l),c=n(279),f=r(c),d=n(108),p=r(d),m=n(280),h=(r(m),n(0));r(h);t.default=function(){return i.default.createElement(p.default,null,i.default.createElement(u.default,null),i.default.createElement(s.default,null),i.default.createElement(f.default,null))}},274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=r(a),o=n(3),u=r(o),l=n(4),s=r(l),c=n(8),f=r(c),d=n(9),p=r(d),m=n(2),h=r(m),y=(n(20),n(0)),g=(r(y),n(275),n(77)),v=(r(g),n(78)),x=r(v),b=n(37),w=r(b),_=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return h.default.createElement(w.default,null,h.default.createElement(x.default,{title:"Welcome to your best fit ever.",body:"Unsize eliminates the questions of “will this fit me?” for online shoppers while making fashion more inclusive",ctaHref:"/#start",ctaText:"Get Started",primaryCta:!0,imgUrl:"/static/images/hero.png",layout:"imgRight",height:"400px",tabletHeight:"400px",mobileHeight:"400px"}))}}]),t}(h.default.Component);t.default=_},275:function(e,t,n){(function(e){function r(e,t){this._id=e,this._clearFn=t}var a=Function.prototype.apply;t.setTimeout=function(){return new r(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(276),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(74))},276:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[l]=r,u(l),l++}function a(e){delete s[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function o(e){if(c)setTimeout(o,0,e);else{var t=s[e];if(t){c=!0;try{i(t)}finally{a(e),c=!1}}}}if(!e.setImmediate){var u,l=1,s={},c=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&o(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){o(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(o,0,e)}}(),d.setImmediate=r,d.clearImmediate=a}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(74),n(72))},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=r(a),o=n(3),u=r(o),l=n(4),s=r(l),c=n(8),f=r(c),d=n(9),p=r(d),m=n(1),h=r(m),y=n(2),g=r(y),v=n(20),x=n(0),b=r(x),w=n(37),_=r(w),T=n(278),E=r(T),k=(0,h.default)(['\n  background-image: url("/static/images/quote_background.png");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 50px 0;\n  margin: 0;\n\n  @media (max-width: 768px) {\n    margin: 0 30px;\n    padding: 30px 0;\n  }\n\n  @media (max-width: 480px) {\n    margin: 20px 0;\n    background-size: contain;\n  }\n'],['\n  background-image: url("/static/images/quote_background.png");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 50px 0;\n  margin: 0;\n\n  @media (max-width: 768px) {\n    margin: 0 30px;\n    padding: 30px 0;\n  }\n\n  @media (max-width: 480px) {\n    margin: 20px 0;\n    background-size: contain;\n  }\n']),O=(0,h.default)(["\n  margin: 30px 60px 0 0;\n\n  @media (max-width: 768px) {\n    margin: 30px 10px;\n  }\n"],["\n  margin: 30px 60px 0 0;\n\n  @media (max-width: 768px) {\n    margin: 30px 10px;\n  }\n"]),D=(0,h.default)(["\n  margin-bottom: 0;\n"],["\n  margin-bottom: 0;\n"]),P=(0,h.default)(["\n  @media (min-width: 769px) {\n    margin: 30px 100px;\n  }\n"],["\n  @media (min-width: 769px) {\n    margin: 30px 100px;\n  }\n"]),C=v.H2.extend(k),R=v.H5.extend(O),j=v.H4.extend(D),I=(b.default.div(P),function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.getCaret=function(){return n.state.caretVisible?"|":"&nbsp;"},n.state={caretVisible:!0},n.interval=setInterval(function(){n.setState(function(e){return{caretVisible:!e.caretVisible}})},750),n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return g.default.createElement(_.default,null,g.default.createElement(v.H1,{align:"center"},"Why Unsize?"),g.default.createElement(j,{align:"center"},"You said:"),g.default.createElement(C,{style:{minHeight:"60px"},align:"center"},g.default.createElement(E.default,null,"My thighs aren't made for jeans",g.default.createElement(E.default.Backspace,{count:31,delay:1e3}),"These are all smalls 🙄",g.default.createElement(E.default.Backspace,{count:31,delay:1e3}),"Online shopping is a pain",g.default.createElement(E.default.Backspace,{count:31,delay:1e3}),"I never fit right 😔",g.default.createElement(E.default.Backspace,{count:31,delay:1e3}),"This is why I don't wear dresses 👗🙅‍♀️")),g.default.createElement(R,{align:"center"},"You talked and we listened. After a bit of research we came up with some ways remove the frustration and difficulty from online shopping."))}}]),t}(g.default.Component));t.default=I},278:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),f=n(2),d=r(f),p=n(10),m=r(p),h=n(12),y=r(h),g=n(13),v=r(g),x=n(14),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(x),w=["🔙","⏰"],_=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,a){var i=n.props.avgTypingDelay,o=n.props.stdTypingDelay;return n.props.delayGenerator(i,o,{line:e,lineIdx:t,character:r,charIdx:a,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return b.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,a=n.props.onLineTyped;return b.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):b.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise(function(e,i){n.setState({textLines:n.state.textLines.concat([""])},function(){b.eachPromise(r,n.typeCharacter,r,t).then(function(){return a(r,t)}).then(e).catch(i)})})},n.typeCharacter=function(e,t,r,a){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise(function(o){var u=n.state.textLines.slice();b.sleep(n.introducedDelay).then(function(){n.introducedDelay=null;var l="🔙"===e;if("⏰"===e)return void o();if(l&&a>0){for(var s=a-1,c=u[s],f=s;f>=0&&(!(c.length>0)||w.includes(c[0]));f--)s=f,c=u[s];u[s]=c.substr(0,c.length-1)}else u[a]+=e;n.setState({textLines:u},function(){var u=n.delayGenerator(r,a,e,t);i(e,t),setTimeout(o,u)})})})},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=b.extractTextFromElement(e.children)),n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return b.eachPromise(t,this.typeLine).then(function(){return e.onTypingDone()})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,r=this.state.isDone,a=b.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return c.default.createElement("div",{className:"Typist "+t},a,c.default.createElement(m.default,u({isDone:r},n)))}}]),t}(s.Component);_.propTypes={children:d.default.node,className:d.default.string,avgTypingDelay:d.default.number,stdTypingDelay:d.default.number,startDelay:d.default.number,cursor:d.default.object,onCharacterTyped:d.default.func,onLineTyped:d.default.func,onTypingDone:d.default.func,delayGenerator:d.default.func},_.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:b.gaussianRnd},t.default=_,_.Backspace=y.default,_.Delay=v.default},function(e,t){e.exports=n(2)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),a=n(5),i=n(6),o=n(7),u=n(8);e.exports=function(e,t){function n(e){var t=e&&(E&&e[E]||e[k]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function c(e){function n(n,r,i,u,l,c,f){if(u=u||O,c=c||i,f!==o)if(t)a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[i]?n?new s(null===r[i]?"The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,l,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function f(e){function t(t,n,r,a,i,o){var u=t[n];if(b(u)!==e)return new s("Invalid "+a+" `"+i+"` of type `"+w(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return c(t)}function d(e){function t(t,n,r,a,i){if("function"!=typeof e)return new s("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new s("Invalid "+a+" `"+i+"` of type `"+b(u)+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<u.length;l++){var c=e(u,l,r,a,i+"["+l+"]",o);if(c instanceof Error)return c}return null}return c(t)}function p(e){function t(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||O;return new s("Invalid "+a+" `"+i+"` of type `"+T(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}return c(t)}function m(e){function t(t,n,r,a,i){for(var o=t[n],u=0;u<e.length;u++)if(l(o,e[u]))return null;return new s("Invalid "+a+" `"+i+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?c(t):r.thatReturnsNull}function h(e){function t(t,n,r,a,i){if("function"!=typeof e)return new s("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=b(u);if("object"!==l)return new s("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var c in u)if(u.hasOwnProperty(c)){var f=e(u,c,r,a,i+"."+c,o);if(f instanceof Error)return f}return null}return c(t)}function y(e){function t(t,n,r,a,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,a,i,o))return null}return new s("Invalid "+a+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return r.thatReturnsNull;for(var n=0;n<e.length;n++){var a=e[n];if("function"!=typeof a)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",_(a),n),r.thatReturnsNull}return c(t)}function g(e){function t(t,n,r,a,i){var u=t[n],l=b(u);if("object"!==l)return new s("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var d=f(u,c,r,a,i+"."+c,o);if(d)return d}}return null}return c(t)}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var a,i=r.call(t);if(r!==t.entries){for(;!(a=i.next()).done;)if(!v(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function w(e){if(void 0===e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:O}var E="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",O="<<anonymous>>",D={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return c(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,a,i){var o=t[n];if(!e(o)){return new s("Invalid "+a+" `"+i+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return c(t)}(),instanceOf:p,node:function(){function e(e,t,n,r,a){return v(e[t])?null:new s("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return c(e)}(),objectOf:h,oneOf:m,oneOfType:y,shape:g};return s.prototype=Error.prototype,D.checkPropTypes=u,D.PropTypes=D,D}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";function n(e,t,n,a,i,o,u,l){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,i,o,u,l],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};e.exports=n},function(e,t,n){"use strict";var r=n(4),a=r;e.exports=a},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t,n,r,a){}e.exports=r},function(e,t,n){"use strict";var r=n(4),a=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,o,u){u!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),s=r(l),c=n(2),f=r(c);n(11);var d=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout(function(){return t.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},function(){e.setState({shouldRender:!0},function(){e._isReRenderingCursor=!1})})}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return s.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(l.Component);d.propTypes={blink:f.default.bool,show:f.default.bool,element:f.default.node,hideWhenDone:f.default.bool,hideWhenDoneDelay:f.default.number,isDone:f.default.bool},d.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=d},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a),o=n(2),u=r(o),l=function(){return i.default.createElement("noscript",null)};l.propTypes={count:u.default.number,delay:u.default.number},l.defaultProps={count:1,delay:0},t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a),o=n(2),u=r(o),l=function(){return i.default.createElement("noscript",null)};l.propTypes={ms:u.default.number.isRequired},t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e}function o(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=function(e,n,a){return e.then(function(){return t.apply(void 0,[n,a].concat(r))})};return Array.from(e).reduce(i,Promise.resolve())}function u(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function l(e){return e&&e.type===v.default}function s(e){return e&&e.type===b.default}function c(e){for(var t=e?[e]:[],n=[];t.length>0;){var r=t.pop();if(y.default.isValidElement(r))l(r)||s(r)?n.unshift(r):y.default.Children.forEach(r.props.children,function(e){t.push(e)});else if(Array.isArray(r)){var a=!0,i=!1,o=void 0;try{for(var u,c=r[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;t.push(f)}}catch(e){i=!0,o=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw o}}}else n.unshift(r)}return n}function f(e,t){var n=e.type,r=u(e.props,["children"]);return r.key="Typist-element-"+n+"-"+(Date.now()+Math.random()+Math.random()),y.default.createElement.apply(y.default,[n,r].concat(a(t)))}function d(e,t,n){if(n>=t.length)return[null,n];var r=n,a=function(e){var n=d(e,t,r),a=m(n,2),i=a[0],o=a[1];return r=o,i};if(y.default.isValidElement(e)&&!(l(e)||s(e)))return[f(e,y.default.Children.map(e.props.children,a)||[]),r];if(Array.isArray(e)){return[e.map(a),r]}return[t[r],r+1]}function p(e){var t=e.element,n=e.textLines;if(t)return d(t,n,0)[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var m=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.gaussianRnd=i,t.eachPromise=o,t.exclude=u,t.isBackspaceElement=l,t.isDelayElement=s,t.extractTextFromElement=c,t.cloneElement=f,t.cloneElementWithSpecifiedText=p;var h=n(1),y=r(h),g=n(12),v=r(g),x=n(13),b=r(x);t.sleep=function(e){return new Promise(function(t){return null!=e?setTimeout(t,e):t()})}}])},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=r(a),o=n(3),u=r(o),l=n(4),s=r(l),c=n(8),f=r(c),d=n(9),p=r(d),m=n(1),h=r(m),y=n(2),g=r(y),v=n(20),x=n(0),b=r(x),w=n(37),_=r(w),T=n(78),E=r(T),k=(0,h.default)(["\n  margin-bottom: 0;\n"],["\n  margin-bottom: 0;\n"]),O=(0,h.default)(["\n  margin: 15px auto;\n"],["\n  margin: 15px auto;\n"]),D=(0,h.default)(["\n  padding-left: 60px;\n  padding-right: 60px;\n"],["\n  padding-left: 60px;\n  padding-right: 60px;\n"]),P=(0,h.default)(["\n  max-height: 400px;\n  max-width: 40%;\n  @media (max-width: 768px) {\n    min-height: 600px;\n  }\n  @media (max-width: 480px) {\n    max-width: 100%;\n  }\n"],["\n  max-height: 400px;\n  max-width: 40%;\n  @media (max-width: 768px) {\n    min-height: 600px;\n  }\n  @media (max-width: 480px) {\n    max-width: 100%;\n  }\n"]),C=(0,h.default)(["\n  max-height: 400px;\n  max-width: 40%;\n  @media (max-width: 768px) {\n    min-height: 500px;\n  }\n  @media (max-width: 480px) {\n    max-width: 100%;\n  }\n"],["\n  max-height: 400px;\n  max-width: 40%;\n  @media (max-width: 768px) {\n    min-height: 500px;\n  }\n  @media (max-width: 480px) {\n    max-width: 100%;\n  }\n"]),R=v.H3.extend(k),j=v.H6.extend(O),I=v.P.extend(O),S=v.H1.extend(k),M=_.default.extend(D),A=b.default.div(P),L=b.default.div(C),W=function(e){function t(){(0,u.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this));return e.renderStepOne=function(){return g.default.createElement(A,null,e.state.stepOneClicked?g.default.createElement("div",null,g.default.createElement(R,null,"Step 1"),g.default.createElement(j,null,"Figure out your measurements with the help of Tailor, our bluetooth measuring device.")):g.default.createElement("div",null,g.default.createElement(R,null,"Meet Tailor"),g.default.createElement(I,null,"Meet our hardware! Ain't she a beaut? Aptly and affectionately called Tailor, our smart device can take your measurements accurately (up to an 1/8th of an centimeter)! The device then sends your measurements to our chrome extension via bluetooth so you can get to shopping sooner!")),g.default.createElement(v.Button,{style:{marginRight:"5px"},onClick:function(){return e.setState({stepOneClicked:!e.state.stepOneClicked})}},e.state.stepOneClicked?"Learn more":"Close"),g.default.createElement(v.Button,{primary:!0,disabled:!0},"Pre-order"))},e.renderStepTwo=function(){return g.default.createElement(A,null,e.state.stepTwoClicked?g.default.createElement("div",null,g.default.createElement(R,null,"Step 2"),g.default.createElement(j,null,"Download our Chrome Extension and automatically sync your measurements with Tailor.")):g.default.createElement("div",null,g.default.createElement(R,null,"Chrome Extension"),g.default.createElement(I,null,"Our chrome extension (the brains of the operation) tackles inconsistent and confusing sizing. With your measurements are entered, it works with select sites to automatically choose the best size for you. It’s with you for every step of the process to ensure you’re confident in your purchase.")),g.default.createElement(v.Button,{style:{marginRight:"5px"},onClick:function(){return e.setState({stepTwoClicked:!e.state.stepTwoClicked})}},e.state.stepTwoClicked?"Learn more":"Close"),g.default.createElement(v.Button,{primary:!0,disabled:!0},"Download"))},e.renderLastStep=function(){return g.default.createElement(L,null,g.default.createElement(R,null,"Step 3"),g.default.createElement(j,null,"Get shopping! Our extension works with a number of sites to choose the best size for you based on your measurements."))},e.state={stepOneClicked:!0,stepTwoClicked:!0},e}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return g.default.createElement(M,null,g.default.createElement(S,{align:"left"},"Get Started"),g.default.createElement(E.default,{contentComponent:this.renderStepOne,imgUrl:"https://media.giphy.com/media/xT1R9yrDcsDL5t65DW/giphy.gif",layout:"imgRight",height:"300px"}),g.default.createElement(E.default,{contentComponent:this.renderStepTwo,imgUrl:"/static/images/step_2.png",layout:"imgRight",height:"300px"}),g.default.createElement(E.default,{contentComponent:this.renderLastStep,imgUrl:"/static/images/step_1.png",layout:"imgRight",height:"300px"}))}}]),t}(g.default.Component);t.default=W},280:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a),o=n(2),u=r(o),l=n(0),s=r(l),c=n(20),f=n(37),d=r(f),p=(0,i.default)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  width: 100%;\n\n  img {\n    margin: 10px 0;\n    max-height: 40px;\n    @media (max-width: 768px) {\n      max-height: 30px;\n      height: auto;\n      width: auto;\n    }\n  }\n"],["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  width: 100%;\n\n  img {\n    margin: 10px 0;\n    max-height: 40px;\n    @media (max-width: 768px) {\n      max-height: 30px;\n      height: auto;\n      width: auto;\n    }\n  }\n"]),m=s.default.div(p),h=function(){return u.default.createElement(d.default,null,u.default.createElement(c.H4,{align:"center"},"We’ve partnered with the following brands for the official launch of our Chrome extension"),u.default.createElement(m,null,u.default.createElement("a",{href:"http://us.asos.com/",target:"_blank"},u.default.createElement(c.Image,{height:"50px",border:"yellow",src:"/static/images/retailers/asos.png"})),u.default.createElement("a",{href:"https://www.shopstyle.com/",target:"_blank"},u.default.createElement(c.Image,{height:"50px",border:"green",src:"/static/images/retailers/shopstyle.png"})),u.default.createElement("a",{href:"https://www.lyst.com/",target:"_blank"},u.default.createElement(c.Image,{height:"50px",border:"pink",src:"/static/images/retailers/lyst.png"}))))};t.default=h}},[272]);
            return { page: comp.default }
          })
        