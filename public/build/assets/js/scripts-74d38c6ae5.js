/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
// jquery.pjax.js
// copyright chris wanstrath
// https://github.com/defunkt/jquery-pjax

(function($){

// When called on a container with a selector, fetches the href with
// ajax into the container or with the data-pjax attribute on the link
// itself.
//
// Tries to make sure the back button and ctrl+click work the way
// you'd expect.
//
// Exported as $.fn.pjax
//
// Accepts a jQuery ajax options object that may include these
// pjax specific options:
//
//
// container - Where to stick the response body. Usually a String selector.
//             $(container).html(xhr.responseBody)
//             (default: current jquery context)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// For convenience the second parameter can be either the container or
// the options object.
//
// Returns the jQuery object
function fnPjax(selector, container, options) {
  var context = this
  return this.on('click.pjax', selector, function(event) {
    var opts = $.extend({}, optionsFor(container, options))
    if (!opts.container)
      opts.container = $(this).attr('data-pjax') || context
    handleClick(event, opts)
  })
}

// Public: pjax on click handler
//
// Exported as $.pjax.click.
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//   $(document).on('click', 'a', $.pjax.click)
//   // is the same as
//   $(document).pjax('a')
//
//  $(document).on('click', 'a', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.click(event, container)
//  })
//
// Returns nothing.
function handleClick(event, container, options) {
  options = optionsFor(container, options)

  var link = event.currentTarget

  if (link.tagName.toUpperCase() !== 'A')
    throw "$.fn.pjax or $.pjax.click requires an anchor element"

  // Middle click, cmd click, and ctrl click should open
  // links in a new tab as normal.
  if ( event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey )
    return

  // Ignore cross origin links
  if ( location.protocol !== link.protocol || location.hostname !== link.hostname )
    return

  // Ignore anchors on the same page
  if (link.hash && link.href.replace(link.hash, '') ===
       location.href.replace(location.hash, ''))
    return

  // Ignore empty anchor "foo.html#"
  if (link.href === location.href + '#')
    return

  // Ignore event with default prevented
  if (event.isDefaultPrevented())
    return

  var defaults = {
    url: link.href,
    container: $(link).attr('data-pjax'),
    target: link
  }

  var opts = $.extend({}, defaults, options)
  var clickEvent = $.Event('pjax:click')
  $(link).trigger(clickEvent, [opts])

  if (!clickEvent.isDefaultPrevented()) {
    pjax(opts)
    event.preventDefault()
    $(link).trigger('pjax:clicked', [opts])
  }
}

// Public: pjax on form submit handler
//
// Exported as $.pjax.submit
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//  $(document).on('submit', 'form', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.submit(event, container)
//  })
//
// Returns nothing.
function handleSubmit(event, container, options) {
  options = optionsFor(container, options)

  var form = event.currentTarget

  if (form.tagName.toUpperCase() !== 'FORM')
    throw "$.pjax.submit requires a form element"

  var defaults = {
    type: form.method.toUpperCase(),
    url: form.action,
    data: $(form).serializeArray(),
    container: $(form).attr('data-pjax'),
    target: form
  }

  pjax($.extend({}, defaults, options))

  event.preventDefault()
}

// Loads a URL with ajax, puts the response body inside a container,
// then pushState()'s the loaded URL.
//
// Works just like $.ajax in that it accepts a jQuery ajax
// settings object (with keys like url, type, data, etc).
//
// Accepts these extra keys:
//
// container - Where to stick the response body.
//             $(container).html(xhr.responseBody)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// Use it just like $.ajax:
//
//   var xhr = $.pjax({ url: this.href, container: '#main' })
//   console.log( xhr.readyState )
//
// Returns whatever $.ajax returns.
function pjax(options) {
  options = $.extend(true, {}, $.ajaxSettings, pjax.defaults, options)

  if ($.isFunction(options.url)) {
    options.url = options.url()
  }

  var target = options.target

  var hash = parseURL(options.url).hash

  var context = options.context = findContainerFor(options.container)

  // We want the browser to maintain two separate internal caches: one
  // for pjax'd partial page loads and one for normal page loads.
  // Without adding this secret parameter, some browsers will often
  // confuse the two.
  if (!options.data) options.data = {}
  options.data._pjax = context.selector

  function fire(type, args, props) {
    if (!props) props = {}
    props.relatedTarget = target
    var event = $.Event(type, props)
    context.trigger(event, args)
    return !event.isDefaultPrevented()
  }

  var timeoutTimer

  options.beforeSend = function(xhr, settings) {
    // No timeout for non-GET requests
    // Its not safe to request the resource again with a fallback method.
    if (settings.type !== 'GET') {
      settings.timeout = 0
    }

    xhr.setRequestHeader('X-PJAX', 'true')
    xhr.setRequestHeader('X-PJAX-Container', context.selector)

    if (!fire('pjax:beforeSend', [xhr, settings]))
      return false

    if (settings.timeout > 0) {
      timeoutTimer = setTimeout(function() {
        if (fire('pjax:timeout', [xhr, options]))
          xhr.abort('timeout')
      }, settings.timeout)

      // Clear timeout setting so jquerys internal timeout isn't invoked
      settings.timeout = 0
    }

    options.requestUrl = parseURL(settings.url).href
  }

  options.complete = function(xhr, textStatus) {
    if (timeoutTimer)
      clearTimeout(timeoutTimer)

    fire('pjax:complete', [xhr, textStatus, options])

    fire('pjax:end', [xhr, options])
  }

  options.error = function(xhr, textStatus, errorThrown) {
    var container = extractContainer("", xhr, options)

    var allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options])
    if (options.type == 'GET' && textStatus !== 'abort' && allowed) {
      locationReplace(container.url)
    }
  }

  options.success = function(data, status, xhr) {
    var previousState = pjax.state;

    // If $.pjax.defaults.version is a function, invoke it first.
    // Otherwise it can be a static string.
    var currentVersion = (typeof $.pjax.defaults.version === 'function') ?
      $.pjax.defaults.version() :
      $.pjax.defaults.version

    var latestVersion = xhr.getResponseHeader('X-PJAX-Version')

    var container = extractContainer(data, xhr, options)

    // If there is a layout version mismatch, hard load the new url
    if (currentVersion && latestVersion && currentVersion !== latestVersion) {
      locationReplace(container.url)
      return
    }

    // If the new response is missing a body, hard load the page
    if (!container.contents) {
      locationReplace(container.url)
      return
    }

    pjax.state = {
      id: options.id || uniqueId(),
      url: container.url,
      title: container.title,
      container: context.selector,
      fragment: options.fragment,
      timeout: options.timeout
    }

    if (options.push || options.replace) {
      window.history.replaceState(pjax.state, container.title, container.url)
    }

    // Clear out any focused controls before inserting new page contents.
    try {
      document.activeElement.blur()
    } catch (e) { }

    if (container.title) document.title = container.title

    fire('pjax:beforeReplace', [container.contents, options], {
      state: pjax.state,
      previousState: previousState
    })
    context.html(container.contents)

    // FF bug: Won't autofocus fields that are inserted via JS.
    // This behavior is incorrect. So if theres no current focus, autofocus
    // the last field.
    //
    // http://www.w3.org/html/wg/drafts/html/master/forms.html
    var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0]
    if (autofocusEl && document.activeElement !== autofocusEl) {
      autofocusEl.focus();
    }

    executeScriptTags(container.scripts)

    // Scroll to top by default
    if (typeof options.scrollTo === 'number')
      $(window).scrollTop(options.scrollTo)

    // If the URL has a hash in it, make sure the browser
    // knows to navigate to the hash.
    if ( hash !== '' ) {
      // Avoid using simple hash set here. Will add another history
      // entry. Replace the url with replaceState and scroll to target
      // by hand.
      //
      //   window.location.hash = hash
      var url = parseURL(container.url)
      url.hash = hash

      pjax.state.url = url.href
      window.history.replaceState(pjax.state, container.title, url.href)

      var target = $(url.hash)
      if (target.length) $(window).scrollTop(target.offset().top)
    }

    fire('pjax:success', [data, status, xhr, options])
  }


  // Initialize pjax.state for the initial page load. Assume we're
  // using the container and options of the link we're loading for the
  // back button to the initial page. This ensures good back button
  // behavior.
  if (!pjax.state) {
    pjax.state = {
      id: uniqueId(),
      url: window.location.href,
      title: document.title,
      container: context.selector,
      fragment: options.fragment,
      timeout: options.timeout
    }
    window.history.replaceState(pjax.state, document.title)
  }

  // Cancel the current request if we're already pjaxing
  var xhr = pjax.xhr
  if ( xhr && xhr.readyState < 4) {
    xhr.onreadystatechange = $.noop
    xhr.abort()
  }

  pjax.options = options
  var xhr = pjax.xhr = $.ajax(options)

  if (xhr.readyState > 0) {
    if (options.push && !options.replace) {
      // Cache current container element before replacing it
      cachePush(pjax.state.id, context.clone().contents())

      window.history.pushState(null, "", stripPjaxParam(options.requestUrl))
    }

    fire('pjax:start', [xhr, options])
    fire('pjax:send', [xhr, options])
  }

  return pjax.xhr
}

// Public: Reload current page with pjax.
//
// Returns whatever $.pjax returns.
function pjaxReload(container, options) {
  var defaults = {
    url: window.location.href,
    push: false,
    replace: true,
    scrollTo: false
  }

  return pjax($.extend(defaults, optionsFor(container, options)))
}

// Internal: Hard replace current state with url.
//
// Work for around WebKit
//   https://bugs.webkit.org/show_bug.cgi?id=93506
//
// Returns nothing.
function locationReplace(url) {
  window.history.replaceState(null, "", "#")
  window.location.replace(url)
}


var initialPop = true
var initialURL = window.location.href
var initialState = window.history.state

// Initialize $.pjax.state if possible
// Happens when reloading a page and coming forward from a different
// session history.
if (initialState && initialState.container) {
  pjax.state = initialState
}

// Non-webkit browsers don't fire an initial popstate event
if ('state' in window.history) {
  initialPop = false
}

// popstate handler takes care of the back and forward buttons
//
// You probably shouldn't use pjax on pages with other pushState
// stuff yet.
function onPjaxPopstate(event) {
  var previousState = pjax.state;
  var state = event.state

  if (state && state.container) {
    // When coming forward from a separate history session, will get an
    // initial pop with a state we are already at. Skip reloading the current
    // page.
    if (initialPop && initialURL == state.url) return

    // If popping back to the same state, just skip.
    // Could be clicking back from hashchange rather than a pushState.
    if (pjax.state && pjax.state.id === state.id) return

    var container = $(state.container)
    if (container.length) {
      var direction, contents = cacheMapping[state.id]

      if (pjax.state) {
        // Since state ids always increase, we can deduce the history
        // direction from the previous state.
        direction = pjax.state.id < state.id ? 'forward' : 'back'

        // Cache current container before replacement and inform the
        // cache which direction the history shifted.
        cachePop(direction, pjax.state.id, container.clone().contents())
      }

      var popstateEvent = $.Event('pjax:popstate', {
        state: state,
        direction: direction
      })
      container.trigger(popstateEvent)

      var options = {
        id: state.id,
        url: state.url,
        container: container,
        push: false,
        fragment: state.fragment,
        timeout: state.timeout,
        scrollTo: false
      }

      if (contents) {
        container.trigger('pjax:start', [null, options])

        pjax.state = state
        if (state.title) document.title = state.title
        var beforeReplaceEvent = $.Event('pjax:beforeReplace', {
          state: state,
          previousState: previousState
        })
        container.trigger(beforeReplaceEvent, [contents, options])
        container.html(contents)

        container.trigger('pjax:end', [null, options])
      } else {
        pjax(options)
      }

      // Force reflow/relayout before the browser tries to restore the
      // scroll position.
      container[0].offsetHeight
    } else {
      locationReplace(location.href)
    }
  }
  initialPop = false
}

// Fallback version of main pjax function for browsers that don't
// support pushState.
//
// Returns nothing since it retriggers a hard form submission.
function fallbackPjax(options) {
  var url = $.isFunction(options.url) ? options.url() : options.url,
      method = options.type ? options.type.toUpperCase() : 'GET'

  var form = $('<form>', {
    method: method === 'GET' ? 'GET' : 'POST',
    action: url,
    style: 'display:none'
  })

  if (method !== 'GET' && method !== 'POST') {
    form.append($('<input>', {
      type: 'hidden',
      name: '_method',
      value: method.toLowerCase()
    }))
  }

  var data = options.data
  if (typeof data === 'string') {
    $.each(data.split('&'), function(index, value) {
      var pair = value.split('=')
      form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
    })
  } else if (typeof data === 'object') {
    for (key in data)
      form.append($('<input>', {type: 'hidden', name: key, value: data[key]}))
  }

  $(document.body).append(form)
  form.submit()
}

// Internal: Generate unique id for state object.
//
// Use a timestamp instead of a counter since ids should still be
// unique across page loads.
//
// Returns Number.
function uniqueId() {
  return (new Date).getTime()
}

// Internal: Strips _pjax param from url
//
// url - String
//
// Returns String.
function stripPjaxParam(url) {
  return url
    .replace(/\?_pjax=[^&]+&?/, '?')
    .replace(/_pjax=[^&]+&?/, '')
    .replace(/[\?&]$/, '')
}

// Internal: Parse URL components and returns a Locationish object.
//
// url - String URL
//
// Returns HTMLAnchorElement that acts like Location.
function parseURL(url) {
  var a = document.createElement('a')
  a.href = url
  return a
}

// Internal: Build options Object for arguments.
//
// For convenience the first parameter can be either the container or
// the options object.
//
// Examples
//
//   optionsFor('#container')
//   // => {container: '#container'}
//
//   optionsFor('#container', {push: true})
//   // => {container: '#container', push: true}
//
//   optionsFor({container: '#container', push: true})
//   // => {container: '#container', push: true}
//
// Returns options Object.
function optionsFor(container, options) {
  // Both container and options
  if ( container && options )
    options.container = container

  // First argument is options Object
  else if ( $.isPlainObject(container) )
    options = container

  // Only container
  else
    options = {container: container}

  // Find and validate container
  if (options.container)
    options.container = findContainerFor(options.container)

  return options
}

// Internal: Find container element for a variety of inputs.
//
// Because we can't persist elements using the history API, we must be
// able to find a String selector that will consistently find the Element.
//
// container - A selector String, jQuery object, or DOM Element.
//
// Returns a jQuery object whose context is `document` and has a selector.
function findContainerFor(container) {
  container = $(container)

  if ( !container.length ) {
    throw "no pjax container for " + container.selector
  } else if ( container.selector !== '' && container.context === document ) {
    return container
  } else if ( container.attr('id') ) {
    return $('#' + container.attr('id'))
  } else {
    throw "cant get selector for pjax container!"
  }
}

// Internal: Filter and find all elements matching the selector.
//
// Where $.fn.find only matches descendants, findAll will test all the
// top level elements in the jQuery object as well.
//
// elems    - jQuery object of Elements
// selector - String selector to match
//
// Returns a jQuery object.
function findAll(elems, selector) {
  return elems.filter(selector).add(elems.find(selector));
}

function parseHTML(html) {
  return $.parseHTML(html, document, true)
}

// Internal: Extracts container and metadata from response.
//
// 1. Extracts X-PJAX-URL header if set
// 2. Extracts inline <title> tags
// 3. Builds response Element and extracts fragment if set
//
// data    - String response data
// xhr     - XHR response
// options - pjax options Object
//
// Returns an Object with url, title, and contents keys.
function extractContainer(data, xhr, options) {
  var obj = {}

  // Prefer X-PJAX-URL header if it was set, otherwise fallback to
  // using the original requested url.
  obj.url = stripPjaxParam(xhr.getResponseHeader('X-PJAX-URL') || options.requestUrl)

  // Attempt to parse response html into elements
  if (/<html/i.test(data)) {
    var $head = $(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
    var $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
  } else {
    var $head = $body = $(parseHTML(data))
  }

  // If response data is empty, return fast
  if ($body.length === 0)
    return obj

  // If there's a <title> tag in the header, use it as
  // the page's title.
  obj.title = findAll($head, 'title').last().text()

  if (options.fragment) {
    // If they specified a fragment, look for it in the response
    // and pull it out.
    if (options.fragment === 'body') {
      var $fragment = $body
    } else {
      var $fragment = findAll($body, options.fragment).first()
    }

    if ($fragment.length) {
      obj.contents = $fragment.contents()

      // If there's no title, look for data-title and title attributes
      // on the fragment
      if (!obj.title)
        obj.title = $fragment.attr('title') || $fragment.data('title')
    }

  } else if (!/<html/i.test(data)) {
    obj.contents = $body
  }

  // Clean up any <title> tags
  if (obj.contents) {
    // Remove any parent title elements
    obj.contents = obj.contents.not(function() { return $(this).is('title') })

    // Then scrub any titles from their descendants
    obj.contents.find('title').remove()

    // Gather all script[src] elements
    obj.scripts = findAll(obj.contents, 'script[src]').remove()
    obj.contents = obj.contents.not(obj.scripts)
  }

  // Trim any whitespace off the title
  if (obj.title) obj.title = $.trim(obj.title)

  return obj
}

// Load an execute scripts using standard script request.
//
// Avoids jQuery's traditional $.getScript which does a XHR request and
// globalEval.
//
// scripts - jQuery object of script Elements
//
// Returns nothing.
function executeScriptTags(scripts) {
  if (!scripts) return

  var existingScripts = $('script[src]')

  scripts.each(function() {
    var src = this.src
    var matchedScripts = existingScripts.filter(function() {
      return this.src === src
    })
    if (matchedScripts.length) return

    var script = document.createElement('script')
    script.type = $(this).attr('type')
    script.src = $(this).attr('src')
    document.head.appendChild(script)
  })
}

// Internal: History DOM caching class.
var cacheMapping      = {}
var cacheForwardStack = []
var cacheBackStack    = []

// Push previous state id and container contents into the history
// cache. Should be called in conjunction with `pushState` to save the
// previous container contents.
//
// id    - State ID Number
// value - DOM Element to cache
//
// Returns nothing.
function cachePush(id, value) {
  cacheMapping[id] = value
  cacheBackStack.push(id)

  // Remove all entires in forward history stack after pushing
  // a new page.
  while (cacheForwardStack.length)
    delete cacheMapping[cacheForwardStack.shift()]

  // Trim back history stack to max cache length.
  while (cacheBackStack.length > pjax.defaults.maxCacheLength)
    delete cacheMapping[cacheBackStack.shift()]
}

// Shifts cache from directional history cache. Should be
// called on `popstate` with the previous state id and container
// contents.
//
// direction - "forward" or "back" String
// id        - State ID Number
// value     - DOM Element to cache
//
// Returns nothing.
function cachePop(direction, id, value) {
  var pushStack, popStack
  cacheMapping[id] = value

  if (direction === 'forward') {
    pushStack = cacheBackStack
    popStack  = cacheForwardStack
  } else {
    pushStack = cacheForwardStack
    popStack  = cacheBackStack
  }

  pushStack.push(id)
  if (id = popStack.pop())
    delete cacheMapping[id]
}

// Public: Find version identifier for the initial page load.
//
// Returns String version or undefined.
function findVersion() {
  return $('meta').filter(function() {
    var name = $(this).attr('http-equiv')
    return name && name.toUpperCase() === 'X-PJAX-VERSION'
  }).attr('content')
}

// Install pjax functions on $.pjax to enable pushState behavior.
//
// Does nothing if already enabled.
//
// Examples
//
//     $.pjax.enable()
//
// Returns nothing.
function enable() {
  $.fn.pjax = fnPjax
  $.pjax = pjax
  $.pjax.enable = $.noop
  $.pjax.disable = disable
  $.pjax.click = handleClick
  $.pjax.submit = handleSubmit
  $.pjax.reload = pjaxReload
  $.pjax.defaults = {
    timeout: 650,
    push: true,
    replace: false,
    type: 'GET',
    dataType: 'html',
    scrollTo: 0,
    maxCacheLength: 20,
    version: findVersion
  }
  $(window).on('popstate.pjax', onPjaxPopstate)
}

// Disable pushState behavior.
//
// This is the case when a browser doesn't support pushState. It is
// sometimes useful to disable pushState for debugging on a modern
// browser.
//
// Examples
//
//     $.pjax.disable()
//
// Returns nothing.
function disable() {
  $.fn.pjax = function() { return this }
  $.pjax = fallbackPjax
  $.pjax.enable = enable
  $.pjax.disable = $.noop
  $.pjax.click = $.noop
  $.pjax.submit = $.noop
  $.pjax.reload = function() { window.location.reload() }

  $(window).off('popstate.pjax', onPjaxPopstate)
}


// Add the state property to jQuery's event object so we can use it in
// $(window).bind('popstate')
if ( $.inArray('state', $.event.props) < 0 )
  $.event.props.push('state')

// Is pjax supported by this browser?
$.support.pjax =
  window.history && window.history.pushState && window.history.replaceState &&
  // pushState isn't reliable on iOS until 5.
  !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)

$.support.pjax ? enable() : disable()

})(jQuery);

//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a,b){function c(){mb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return j(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function e(a,b){return function(c){return m(a.call(this,c),b)}}function f(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function g(){}function h(a){z(a),j(this,a)}function i(a){var b=s(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function j(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function k(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&Ab.hasOwnProperty(b)&&(c[b]=a[b]);return c}function l(a){return 0>a?Math.ceil(a):Math.floor(a)}function m(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function n(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&hb(a,"Date",gb(a,"Date")+f*c),g&&fb(a,gb(a,"Month")+g*c),d&&mb.updateOffset(a,f||g)}function o(a){return"[object Array]"===Object.prototype.toString.call(a)}function p(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function r(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=bc[a]||cc[b]||b}return a}function s(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=r(c),b&&(d[b]=a[c]));return d}function t(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}mb[b]=function(e,f){var g,h,i=mb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=mb().utc().set(d,a);return i.call(mb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function v(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function w(a,b,c){return bb(mb([a,11,31+b-c]),b,c).week}function x(a){return y(a)?366:365}function y(a){return a%4===0&&a%100!==0||a%400===0}function z(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[tb]<0||a._a[tb]>11?tb:a._a[ub]<1||a._a[ub]>v(a._a[sb],a._a[tb])?ub:a._a[vb]<0||a._a[vb]>23?vb:a._a[wb]<0||a._a[wb]>59?wb:a._a[xb]<0||a._a[xb]>59?xb:a._a[yb]<0||a._a[yb]>999?yb:-1,a._pf._overflowDayOfYear&&(sb>b||b>ub)&&(b=ub),a._pf.overflow=b)}function A(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a,b){return b._isUTC?mb(a).zone(b._offset||0):mb(a).local()}function D(a,b){return b.abbr=a,zb[a]||(zb[a]=new g),zb[a].set(b),zb[a]}function E(a){delete zb[a]}function F(a){var b,c,d,e,f=0,g=function(a){if(!zb[a]&&Bb)try{require("./lang/"+a)}catch(b){}return zb[a]};if(!a)return mb.fn._lang;if(!o(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,d=B(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&q(e,d,!0)>=b-1)break;b--}f++}return mb.fn._lang}function G(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function H(a){var b,c,d=a.match(Fb);for(b=0,c=d.length;c>b;b++)d[b]=hc[d[b]]?hc[d[b]]:G(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function I(a,b){return a.isValid()?(b=J(b,a.lang()),dc[b]||(dc[b]=H(b)),dc[b](a)):a.lang().invalidDate()}function J(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gb.lastIndex=0;d>=0&&Gb.test(a);)a=a.replace(Gb,c),Gb.lastIndex=0,d-=1;return a}function K(a,b){var c,d=b._strict;switch(a){case"Q":return Rb;case"DDDD":return Tb;case"YYYY":case"GGGG":case"gggg":return d?Ub:Jb;case"Y":case"G":case"g":return Wb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Vb:Kb;case"S":if(d)return Rb;case"SS":if(d)return Sb;case"SSS":if(d)return Tb;case"DDD":return Ib;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Mb;case"a":case"A":return F(b._l)._meridiemParse;case"X":return Pb;case"Z":case"ZZ":return Nb;case"T":return Ob;case"SSSS":return Lb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Sb:Hb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Hb;case"Do":return Qb;default:return c=new RegExp(T(S(a.replace("\\","")),"i"))}}function L(a){a=a||"";var b=a.match(Nb)||[],c=b[b.length-1]||[],d=(c+"").match(_b)||["-",0,0],e=+(60*d[1])+u(d[2]);return"+"===d[0]?-e:e}function M(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[tb]=3*(u(b)-1));break;case"M":case"MM":null!=b&&(e[tb]=u(b)-1);break;case"MMM":case"MMMM":d=F(c._l).monthsParse(b),null!=d?e[tb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[ub]=u(b));break;case"Do":null!=b&&(e[ub]=u(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=u(b));break;case"YY":e[sb]=mb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[sb]=u(b);break;case"a":case"A":c._isPm=F(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[vb]=u(b);break;case"m":case"mm":e[wb]=u(b);break;case"s":case"ss":e[xb]=u(b);break;case"S":case"SS":case"SSS":case"SSSS":e[yb]=u(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=L(b);break;case"dd":case"ddd":case"dddd":d=F(c._l).weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=u(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=mb.parseTwoDigitYear(b)}}function N(a){var c,d,e,f,g,h,i,j;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[sb],bb(mb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(j=F(a._l),g=j._week.dow,h=j._week.doy,d=b(c.gg,a._a[sb],bb(mb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=cb(d,e,f,h,g),a._a[sb]=i.year,a._dayOfYear=i.dayOfYear}function O(a){var c,d,e,f,g=[];if(!a._d){for(e=Q(a),a._w&&null==a._a[ub]&&null==a._a[tb]&&N(a),a._dayOfYear&&(f=b(a._a[sb],e[sb]),a._dayOfYear>x(f)&&(a._pf._overflowDayOfYear=!0),d=Z(f,0,a._dayOfYear),a._a[tb]=d.getUTCMonth(),a._a[ub]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?Z:Y).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function P(a){var b;a._d||(b=s(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],O(a))}function Q(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function R(a){if(a._f===mb.ISO_8601)return void V(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=F(a._l),h=""+a._i,i=h.length,j=0;for(d=J(a._f,g).match(Fb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(K(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),hc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),M(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[vb]<12&&(a._a[vb]+=12),a._isPm===!1&&12===a._a[vb]&&(a._a[vb]=0),O(a),z(a)}function S(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function T(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function U(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=j({},a),b._pf=c(),b._f=a._f[f],R(b),A(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));j(a,d||b)}function V(a){var b,c,d=a._i,e=Xb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Zb.length;c>b;b++)if(Zb[b][1].exec(d)){a._f=Zb[b][0]+(e[6]||" ");break}for(b=0,c=$b.length;c>b;b++)if($b[b][1].exec(d)){a._f+=$b[b][0];break}d.match(Nb)&&(a._f+="Z"),R(a)}else a._isValid=!1}function W(a){V(a),a._isValid===!1&&(delete a._isValid,mb.createFromInputFallback(a))}function X(b){var c=b._i,d=Cb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?W(b):o(c)?(b._a=c.slice(0),O(b)):p(c)?b._d=new Date(+c):"object"==typeof c?P(b):"number"==typeof c?b._d=new Date(c):mb.createFromInputFallback(b)}function Y(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function Z(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function $(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function _(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ab(a,b,c){var d=rb(Math.abs(a)/1e3),e=rb(d/60),f=rb(e/60),g=rb(f/24),h=rb(g/365),i=d<ec.s&&["s",d]||1===e&&["m"]||e<ec.m&&["mm",e]||1===f&&["h"]||f<ec.h&&["hh",f]||1===g&&["d"]||g<=ec.dd&&["dd",g]||g<=ec.dm&&["M"]||g<ec.dy&&["MM",rb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,_.apply({},i)}function bb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=mb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function cb(a,b,c,d,e){var f,g,h=Z(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:x(a-1)+g}}function db(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?mb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=F().preparse(c)),mb.isMoment(c)?(b=k(c),b._d=new Date(+c._d)):d?o(d)?U(b):R(b):X(b),new h(b))}function eb(a,b){var c,d;if(1===b.length&&o(b[0])&&(b=b[0]),!b.length)return mb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function fb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),v(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function gb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function hb(a,b,c){return"Month"===b?fb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ib(a,b){return function(c){return null!=c?(hb(this,a,c),mb.updateOffset(this,b),this):gb(this,a)}}function jb(a){mb.duration.fn[a]=function(){return this._data[a]}}function kb(a,b){mb.duration.fn["as"+a]=function(){return+this/b}}function lb(a){"undefined"==typeof ender&&(nb=qb.moment,qb.moment=a?d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",mb):mb)}for(var mb,nb,ob,pb="2.7.0",qb="undefined"!=typeof global?global:this,rb=Math.round,sb=0,tb=1,ub=2,vb=3,wb=4,xb=5,yb=6,zb={},Ab={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_tzm:null,_isUTC:null,_offset:null,_pf:null,_lang:null},Bb="undefined"!=typeof module&&module.exports,Cb=/^\/?Date\((\-?\d+)/i,Db=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Eb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Fb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Gb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Hb=/\d\d?/,Ib=/\d{1,3}/,Jb=/\d{1,4}/,Kb=/[+\-]?\d{1,6}/,Lb=/\d+/,Mb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Nb=/Z|[\+\-]\d\d:?\d\d/gi,Ob=/T/i,Pb=/[\+\-]?\d+(\.\d{1,3})?/,Qb=/\d{1,2}/,Rb=/\d/,Sb=/\d\d/,Tb=/\d{3}/,Ub=/\d{4}/,Vb=/[+-]?\d{6}/,Wb=/[+-]?\d+/,Xb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yb="YYYY-MM-DDTHH:mm:ssZ",Zb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],$b=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],_b=/([\+\-]|\d\d)/gi,ac=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),bc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},cc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},dc={},ec={s:45,m:45,h:22,dd:25,dm:45,dy:345},fc="DDD w W M D d".split(" "),gc="M D H h m s w W".split(" "),hc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+m(Math.abs(a),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return m(this.weekYear(),4)},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return m(this.isoWeekYear(),4)},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return u(this.milliseconds()/100)},SS:function(){return m(u(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+":"+m(u(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+m(u(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},ic=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];fc.length;)ob=fc.pop(),hc[ob+"o"]=f(hc[ob],ob);for(;gc.length;)ob=gc.pop(),hc[ob+ob]=e(hc[ob],2);for(hc.DDDD=e(hc.DDD,3),j(g.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=mb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=mb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return bb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),mb=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=c(),db(g)},mb.suppressDeprecationWarnings=!1,mb.createFromInputFallback=d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),mb.min=function(){var a=[].slice.call(arguments,0);return eb("isBefore",a)},mb.max=function(){var a=[].slice.call(arguments,0);return eb("isAfter",a)},mb.utc=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=d,g._strict=f,g._pf=c(),db(g).utc()},mb.unix=function(a){return mb(1e3*a)},mb.duration=function(a,b){var c,d,e,f=a,g=null;return mb.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=Db.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:u(g[ub])*c,h:u(g[vb])*c,m:u(g[wb])*c,s:u(g[xb])*c,ms:u(g[yb])*c}):(g=Eb.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new i(f),mb.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},mb.version=pb,mb.defaultFormat=Yb,mb.ISO_8601=function(){},mb.momentProperties=Ab,mb.updateOffset=function(){},mb.relativeTimeThreshold=function(b,c){return ec[b]===a?!1:(ec[b]=c,!0)},mb.lang=function(a,b){var c;return a?(b?D(B(a),b):null===b?(E(a),a="en"):zb[a]||F(a),c=mb.duration.fn._lang=mb.fn._lang=F(a),c._abbr):mb.fn._lang._abbr},mb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),F(a)},mb.isMoment=function(a){return a instanceof h||null!=a&&a.hasOwnProperty("_isAMomentObject")},mb.isDuration=function(a){return a instanceof i},ob=ic.length-1;ob>=0;--ob)t(ic[ob]);mb.normalizeUnits=function(a){return r(a)},mb.invalid=function(a){var b=mb.utc(0/0);return null!=a?j(b._pf,a):b._pf.userInvalidated=!0,b},mb.parseZone=function(){return mb.apply(null,arguments).parseZone()},mb.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)},j(mb.fn=h.prototype,{clone:function(){return mb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=mb(this).utc();return 0<a.year()&&a.year()<=9999?I(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):I(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return A(this)},isDSTShifted:function(){return this._a?this.isValid()&&q(this._a,(this._isUTC?mb.utc(this._a):mb(this._a)).toArray())>0:!1},parsingFlags:function(){return j({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=I(this,a||mb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,-1),this},diff:function(a,b,c){var d,e,f=C(a,this),g=6e4*(this.zone()-f.zone());return b=r(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-mb(this).startOf("month")-(f-mb(f).startOf("month")))/d,e-=6e4*(this.zone()-mb(this).startOf("month").zone()-(f.zone()-mb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:l(e)},from:function(a,b){return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(mb(),a)},calendar:function(a){var b=a||mb(),c=C(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){return y(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=$(a,this.lang()),this.add({d:a-b})):b},month:ib("Month",!0),startOf:function(a){switch(a=r(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=r(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+mb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+mb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+C(a,this).startOf(b)},min:d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),this>a?this:a}),max:d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=L(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?n(this,mb.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,mb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?mb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return v(this.year(),this.month())},dayOfYear:function(a){var b=rb((mb(this).startOf("day")-mb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=bb(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=bb(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=bb(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return w(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return w(this.year(),a.dow,a.doy)},get:function(a){return a=r(a),this[a]()},set:function(a,b){return a=r(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=F(b),this)}}),mb.fn.millisecond=mb.fn.milliseconds=ib("Milliseconds",!1),mb.fn.second=mb.fn.seconds=ib("Seconds",!1),mb.fn.minute=mb.fn.minutes=ib("Minutes",!1),mb.fn.hour=mb.fn.hours=ib("Hours",!0),mb.fn.date=ib("Date",!0),mb.fn.dates=d("dates accessor is deprecated. Use date instead.",ib("Date",!0)),mb.fn.year=ib("FullYear",!0),mb.fn.years=d("years accessor is deprecated. Use year instead.",ib("FullYear",!0)),mb.fn.days=mb.fn.day,mb.fn.months=mb.fn.month,mb.fn.weeks=mb.fn.week,mb.fn.isoWeeks=mb.fn.isoWeek,mb.fn.quarters=mb.fn.quarter,mb.fn.toJSON=mb.fn.toISOString,j(mb.duration.fn=i.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=l(e/1e3),h.seconds=a%60,b=l(a/60),h.minutes=b%60,c=l(b/60),h.hours=c%24,f+=l(c/24),h.days=f%30,g+=l(f/30),h.months=g%12,d=l(g/12),h.years=d},weeks:function(){return l(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)},humanize:function(a){var b=+this,c=ab(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=mb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=mb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=r(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=r(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:mb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(ob in ac)ac.hasOwnProperty(ob)&&(kb(ob,ac[ob]),jb(ob.toLowerCase()));kb("Weeks",6048e5),mb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},mb.lang("en",{ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Bb?module.exports=mb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(qb.moment=nb),mb}),lb(!0)):lb()}).call(this);
(function(a){if(typeof define==="function"&&define.amd){define(["moment"],a)}else{if(typeof exports==="object"){module.exports=a(require("../moment"))}else{a(window.moment)}}}(function(a){return a.lang("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(b,d,c){var e=b*100+d;if(e<600){return"凌晨"}else{if(e<900){return"早上"}else{if(e<1130){return"上午"}else{if(e<1230){return"中午"}else{if(e<1800){return"下午"}else{return"晚上"}}}}}},calendar:{sameDay:function(){return this.minutes()===0?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return this.minutes()===0?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return this.minutes()===0?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var b,c;b=a().startOf("week");c=this.unix()-b.unix()>=7*24*3600?"[下]":"[本]";return this.minutes()===0?c+"dddAh点整":c+"dddAh点mm"},lastWeek:function(){var b,c;b=a().startOf("week");c=this.unix()<b.unix()?"[上]":"[本]";return this.minutes()===0?c+"dddAh点整":c+"dddAh点mm"},sameElse:"LL"},ordinal:function(b,c){switch(c){case"d":case"D":case"DDD":return b+"日";case"M":return b+"月";case"w":case"W":return b+"周";default:return b}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}));
/*! emojify.js - v0.9.2 - 
 * Copyright (c) Hassan Khan 2014 
 */!function(a){"use strict";var b=function(){function b(a){return" "===a||"	"===a||"\r"===a||"\n"===a||""===a}function c(a,b,c){var d=i.createElement("img");d.setAttribute("title",":"+c+":"),d.setAttribute("alt",":"+c+":"),d.setAttribute("class","emoji"),d.setAttribute("src",q.img_dir+"/"+c+".png"),d.setAttribute("align","absmiddle"),a.splitText(b.index),a.nextSibling.nodeValue=a.nextSibling.nodeValue.substr(b[0].length,a.nextSibling.nodeValue.length),d.appendChild(a.splitText(b.index)),a.parentNode.insertBefore(d,a.nextSibling)}function d(a){if(a[1]&&a[2]){var b=a[2];if(l[b])return b}else for(var c=3;c<a.length-1;c++)if(a[c])return n[c-2][1]}function e(a,b){return"<img title=':"+b+":' alt=':"+b+":' class='emoji' src='"+q.img_dir+"/"+b+".png' align='absmiddle' />"}function f(){this.lastEmojiTerminatedAt=-1}function g(a,b){if(!a)return a;b||(b=e);var c=new f;return a.replace(p,function(){var a=Array.prototype.slice.call(arguments,0,-2),d=arguments[arguments.length-2],e=arguments[arguments.length-1],f=c.validate(a,d,e);return f?b(arguments[0],f):arguments[0]})}function h(a){"undefined"==typeof a&&(a=q.only_crawl_id?i.getElementById(q.only_crawl_id):i.body);for(var b,e=q.ignored_tags,g=i.createTreeWalker(a,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,function(a){return 1!==a.nodeType?NodeFilter.FILTER_ACCEPT:e[a.tagName]||a.classList.contains("no-emojify")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP},!1),h=[];null!==(b=g.nextNode());)h.push(b);h.forEach(function(a){for(var b,e=[],g=new f;null!==(b=p.exec(a.data));)g.validate(b,b.index,b.input)&&e.push(b);for(var h=e.length;h-->0;){var i=d(e[h]);c(a,e[h],i)}})}var i=a.window.document,j="+1,-1,100,109,1234,8ball,a,ab,abc,abcd,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,astonished,atm,b,baby,baby_bottle,baby_chick,baby_symbol,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,bar_chart,barber,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_nib,black_square,black_square_button,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,book,bookmark,bookmark_tabs,books,boom,boot,bouquet,bow,bowling,bowtie,boy,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,car,card_index,carousel_horse,cat,cat2,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cl,clap,clapper,clipboard,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couple,couple_with_heart,couplekiss,cow,cow2,credit_card,crocodile,crossed_flags,crown,cry,crying_cat_face,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,de,deciduous_tree,department_store,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy,dizzy_face,do_not_litter,dog,dog2,dollar,dolls,dolphin,donut,door,doughnut,dragon,dragon_face,dress,dromedary_camel,droplet,dvd,e-mail,ear,ear_of_rice,earth_africa,earth_americas,earth_asia,egg,eggplant,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,email,end,envelope,es,euro,european_castle,european_post_office,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire,fire_engine,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four,four_leaf_clover,fr,free,fried_shrimp,fries,frog,frowning,fu,fuelpump,full_moon,full_moon_with_face,game_die,gb,gem,gemini,ghost,gift,gift_heart,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grin,grinning,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,hand,handbag,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honey_pot,honeybee,horse,horse_racing,hospital,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,joy,joy_cat,jp,key,keycap_ten,kimono,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing_smiling_eyes,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leo,leopard,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,m,mag,mag_right,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,man,man_with_gua_pi_mao,man_with_turban,mans_shoe,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,money_with_wings,moneybag,monkey,monkey_face,monorail,moon,mortar_board,mount_fuji,mountain_bicyclist,mountain_cableway,mountain_railway,mouse,mouse2,movie_camera,moyai,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new,new_moon,new_moon_with_face,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,ok,ok_hand,ok_woman,older_man,older_woman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,open_file_folder,open_hands,open_mouth,ophiuchus,orange_book,outbox_tray,ox,page_facing_up,page_with_curl,pager,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil,pencil2,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig,pig2,pig_nose,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up,point_up_2,police_car,poodle,poop,post_office,postal_horn,postbox,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit,rabbit2,racehorse,radio,radio_button,rage,rage1,rage2,rage3,rage4,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ram,ramen,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat,repeat_one,restroom,revolving_hearts,rewind,ribbon,rice,rice_ball,rice_cracker,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,ru,rugby_football,runner,running,running_shirt_with_sash,sa,sagittarius,sailboat,sake,sandal,santa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,seven,shaved_ice,sheep,shell,ship,shipit,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_imp,smirk,smirk_cat,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speech_balloon,speedboat,squirrel,star,star2,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,surfer,sushi,suspect,suspension_railway,sweat,sweat_drops,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger,tiger2,tired_face,tm,toilet,tokyo_tower,tomato,tongue,top,tophat,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,v,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale,whale2,wheelchair,white_check_mark,white_circle,white_flower,white_large_square,white_square,white_square_button,wind_chime,wine_glass,wink,wink2,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz",k=j.split(/,/),l=k.reduce(function(a,b){return a[b]=!0,a},{}),m={named:/:([a-z0-9A-Z_-]+):/,blush:/:-?\)/g,scream:/:-o/gi,smirk:/[:;]-?]/g,smiley:/[:;]-?d/gi,stuck_out_tongue_closed_eyes:/x-d/gi,stuck_out_tongue_winking_eye:/[:;]-?p/gi,rage:/:-?[\[@]/g,disappointed:/:-?\(/g,sob:/:['’]-?\(|:&#x27;\(/g,kissing_heart:/:-?\*/g,wink:/;-?\)/g,pensive:/:-?\//g,confounded:/:-?s/gi,flushed:/:-?\|/g,relaxed:/:-?\$/g,mask:/:-x/gi,heart:/<3|&lt;3/g,broken_heart:/<\/3|&lt;&#x2F;3/g,thumbsup:/:\+1:/g,thumbsdown:/:\-1:/g},n=Object.keys(m).map(function(a){return[m[a],a]}),o=n.map(function(a){var b=a[0],c=b.source||b;return c=c.replace(/(^|[^\[])\^/g,"$1"),"("+c+")"}).join("|"),p=new RegExp(o,"gi"),q={emojify_tag_type:"div",only_crawl_id:null,img_dir:"images/emoji",ignored_tags:{SCRIPT:1,TEXTAREA:1,A:1,PRE:1,CODE:1}};return f.prototype={validate:function(a,c,e){function f(){return g.lastEmojiTerminatedAt=j+c,h}var g=this,h=d(a);if(h){var i=a[0],j=i.length;return 0===c?f():e.length===i.length+c?f():b(e.charAt(c-1))?f():b(e.charAt(i.length+c))?f():this.lastEmojiTerminatedAt===c?f():void 0}}},{defaultConfig:q,emojiNames:k,setConfig:function(a){Object.keys(q).forEach(function(b){b in a&&(q[b]=a[b])})},replace:g,run:h}}();return a.emojify=b,"function"==typeof define&&define.amd&&define([],function(){return b}),b}(this);
// extension:
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

(function ($, window, document) {
    'use strict';

    // Main function
    $.fn.scrollUp = function (options) {

        // Ensure that only one scrollUp exists
        if (!$.data(document.body, 'scrollUp')) {
            $.data(document.body, 'scrollUp', true);
            $.fn.scrollUp.init(options);
        }
    };

    // Init
    $.fn.scrollUp.init = function (options) {

        // Define vars
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options),
            triggerVisible = false,
            animIn, animOut, animSpeed, scrollDis, scrollEvent, scrollTarget, $self;

        // Create element
        if (o.scrollTrigger) {
            $self = $(o.scrollTrigger);
        } else {
            $self = $('<a/>', {
                id: o.scrollName,
                href: '#top'
            });
        }

        // Set scrollTitle if there is one
        if (o.scrollTitle) {
            $self.attr('title', o.scrollTitle);
        }

        $self.appendTo('body');

        // If not using an image display text
        if (!(o.scrollImg || o.scrollTrigger)) {
            $self.html(o.scrollText);
        }

        // Minimum CSS to make the magic happen
        $self.css({
            display: 'none',
            position: 'fixed',
            zIndex: o.zIndex
        });

        // Active point overlay
        if (o.activeOverlay) {
            $('<div/>', {
                id: o.scrollName + '-active'
            }).css({
                position: 'absolute',
                'top': o.scrollDistance + 'px',
                width: '100%',
                borderTop: '1px dotted' + o.activeOverlay,
                zIndex: o.zIndex
            }).appendTo('body');
        }

        // Switch animation type
        switch (o.animation) {
            case 'fade':
                animIn = 'fadeIn';
                animOut = 'fadeOut';
                animSpeed = o.animationSpeed;
                break;

            case 'slide':
                animIn = 'slideDown';
                animOut = 'slideUp';
                animSpeed = o.animationSpeed;
                break;

            default:
                animIn = 'show';
                animOut = 'hide';
                animSpeed = 0;
        }

        // If from top or bottom
        if (o.scrollFrom === 'top') {
            scrollDis = o.scrollDistance;
        } else {
            scrollDis = $(document).height() - $(window).height() - o.scrollDistance;
        }

        // Scroll function
        scrollEvent = $(window).scroll(function () {
            if ($(window).scrollTop() > scrollDis) {
                if (!triggerVisible) {
                    $self[animIn](animSpeed);
                    triggerVisible = true;
                }
            } else {
                if (triggerVisible) {
                    $self[animOut](animSpeed);
                    triggerVisible = false;
                }
            }
        });

        // how to call it (with a 1500ms timeout):
        $(window).scrollEnd(function(){
            $self[animOut](animSpeed);
            triggerVisible = false;
        }, 1200);

        if (o.scrollTarget) {
            if (typeof o.scrollTarget === 'number') {
                scrollTarget = o.scrollTarget;
            } else if (typeof o.scrollTarget === 'string') {
                scrollTarget = Math.floor($(o.scrollTarget).offset().top);
            }
        } else {
            scrollTarget = 0;
        }

        // To the top
        $self.click(function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: scrollTarget
            }, o.scrollSpeed, o.easingType);
        });
    };

    // Defaults
    $.fn.scrollUp.defaults = {
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation in speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    };

    // Destroy scrollUp plugin and clean all modifications to the DOM
    $.fn.scrollUp.destroy = function (scrollEvent) {
        $.removeData(document.body, 'scrollUp');
        $('#' + $.fn.scrollUp.settings.scrollName).remove();
        $('#' + $.fn.scrollUp.settings.scrollName + '-active').remove();

        // If 1.7 or above use the new .off()
        if ($.fn.jquery.split('.')[1] >= 7) {
            $(window).off('scroll', scrollEvent);

        // Else use the old .unbind()
        } else {
            $(window).unbind('scroll', scrollEvent);
        }
    };

    $.scrollUp = $.fn.scrollUp;

})(jQuery, window, document);

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.1.6';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   * 
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;
    
    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() == "resolved") {
        return this;
      }
      
      if (current == 0) {
        NProgress.start();
      }
      
      initial++;
      current++;
      
      $promise.always(function() {
        current--;
        if (current == 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });
      
      return this;
    };
    
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent')
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/*!
	Autosize v1.18.9 - 2014-05-27
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):!1;o?(t=u.getBoundingClientRect().width,(0===t||"number"!=typeof t)&&(t=parseInt(o.width,10)),e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseInt(o[i],10)})):t=p.width(),s.style.width=Math.max(t,0)+"px"}function a(){var a={};if(t=u,s.className=i.className,s.id=i.id,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=!u.value&&i.placeholder?(p.attr("placeholder")||"")+i.append:u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",f&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width(),y=p.css("resize");p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===y?p.css("resize","none"):"both"===y&&p.css("resize","horizontal"),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}})(window.jQuery||window.$);
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+abap+actionscript+ada+apacheconf+apl+applescript+asciidoc+aspnet+autoit+autohotkey+bash+basic+batch+c+brainfuck+bro+bison+csharp+cpp+coffeescript+ruby+css-extras+d+dart+diff+docker+eiffel+elixir+erlang+fsharp+fortran+gherkin+git+glsl+go+graphql+groovy+haml+handlebars+haskell+haxe+http+icon+inform7+ini+j+jade+java+json+julia+keyman+kotlin+latex+less+livescript+lolcode+lua+makefile+markdown+matlab+mel+mizar+monkey+nasm+nginx+nim+nix+nsis+objectivec+ocaml+oz+parigp+parser+pascal+perl+php+php-extras+powershell+processing+prolog+properties+protobuf+puppet+pure+python+q+qore+r+jsx+rest+rip+roboconf+crystal+rust+sas+sass+scss+scala+scheme+smalltalk+smarty+sql+stylus+swift+tcl+textile+twig+typescript+verilog+vhdl+vim+wiki+xojo+yaml */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},tokenize:function(e,t){var a=n.Token,r=[e],i=t.rest;if(i){for(var l in i)t[l]=i[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],c=u.inside,g=!!u.lookbehind,h=!!u.greedy,f=0,d=u.alias;if(h&&!u.pattern.global){var p=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,p+"g")}u=u.pattern||u;for(var m=0,y=0;m<r.length;y+=(r[m].matchedStr||r[m]).length,++m){var v=r[m];if(r.length>e.length)break e;if(!(v instanceof a)){u.lastIndex=0;var b=u.exec(v),k=1;if(!b&&h&&m!=r.length-1){if(u.lastIndex=y,b=u.exec(e),!b)break;for(var w=b.index+(g?b[1].length:0),_=b.index+b[0].length,A=m,S=y,P=r.length;P>A&&_>S;++A)S+=(r[A].matchedStr||r[A]).length,w>=S&&(++m,y=S);if(r[m]instanceof a||r[A-1].greedy)continue;k=A-m,v=e.slice(y,S),b.index-=y}if(b){g&&(f=b[1].length);var w=b.index+f,b=b[0].slice(f),_=w+b.length,x=v.slice(0,w),O=v.slice(_),j=[m,k];x&&j.push(x);var N=new a(l,c?n.tokenize(b,c):b,d,b,h);j.push(N),O&&j.push(O),Array.prototype.splice.apply(r,j)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=(o?" ":"")+s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.abap={comment:/^\*.*/m,string:/(`|')(\\?.)*?\1/m,"string-template":{pattern:/(\||\})(\\?.)*?(?=\||\{)/,lookbehind:!0,alias:"string"},"eol-comment":{pattern:/(^|\s)".*/m,lookbehind:!0,alias:"comment"},keyword:{pattern:/(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,lookbehind:!0},number:/\b\d+\b/,operator:{pattern:/(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,lookbehind:!0},"string-operator":{pattern:/(\s)&&?(?=\s)/,lookbehind:!0,alias:"keyword"},"token-operator":[{pattern:/(\w)(?:->?|=>|[~|{}])(?=\w)/,lookbehind:!0,alias:"punctuation"},{pattern:/[|{}]/,alias:"punctuation"}],punctuation:/[,.:()]/};
Prism.languages.actionscript=Prism.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),Prism.languages.actionscript["class-name"].alias="function",Prism.languages.markup&&Prism.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\\1|\\?(?!\1)[\w\W])*\2)*\s*\/?>/,lookbehind:!0,inside:{rest:Prism.languages.markup}}});
Prism.languages.ada={comment:/--.*/,string:/"(?:""|[^"\r\f\n])*"/i,number:[{pattern:/\b[0-9](?:_?[0-9])*#[0-9A-F](?:_?[0-9A-F])*(?:\.[0-9A-F](?:_?[0-9A-F])*)?#(?:E[+-]?[0-9](?:_?[0-9])*)?/i},{pattern:/\b[0-9](?:_?[0-9])*(?:\.[0-9](?:_?[0-9])*)?(?:E[+-]?[0-9](?:_?[0-9])*)?\b/i}],"attr-name":/\b'\w+/i,keyword:/\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,"boolean":/\b(?:true|false)\b/i,operator:/<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,punctuation:/\.\.?|[,;():]/,"char":/'.'/,variable:/\b[a-z](?:[_a-z\d])*\b/i};
Prism.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(\w,?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}},variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,regex:/\^?.*\$|\^.*\$?/};
Prism.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:/'(?:[^'\r\n]|'')*'/,number:/¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[\+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,"function":/[-+×÷⌈⌊∣|⍳?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}};
Prism.languages.applescript={comment:[/\(\*(?:\(\*[\w\W]*?\*\)|[\w\W])*?\*\)/,/--.+/,/#.+/],string:/"(?:\\?.)*?"/,number:/\b-?\d*\.?\d+([Ee]-?\d+)?\b/,operator:[/[&=≠≤≥*+\-\/÷^]|[<>]=?/,/\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],keyword:/\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,"class":{pattern:/\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,alias:"builtin"},punctuation:/[{}():,¬«»《》]/};
!function(a){var i={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}};a.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:i,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{"function":/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:i.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:i,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|TM|R)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}},i.inside.interpreted.inside.rest={macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity},a.languages.asciidoc["passthrough-block"].inside.rest={macro:a.languages.asciidoc.macro},a.languages.asciidoc["literal-block"].inside.rest={callout:a.languages.asciidoc.callout},a.languages.asciidoc.table.inside.rest={"comment-block":a.languages.asciidoc["comment-block"],"passthrough-block":a.languages.asciidoc["passthrough-block"],"literal-block":a.languages.asciidoc["literal-block"],"other-block":a.languages.asciidoc["other-block"],"list-punctuation":a.languages.asciidoc["list-punctuation"],"indented-block":a.languages.asciidoc["indented-block"],comment:a.languages.asciidoc.comment,title:a.languages.asciidoc.title,"attribute-entry":a.languages.asciidoc["attribute-entry"],attributes:a.languages.asciidoc.attributes,hr:a.languages.asciidoc.hr,"page-break":a.languages.asciidoc["page-break"],admonition:a.languages.asciidoc.admonition,"list-label":a.languages.asciidoc["list-label"],callout:a.languages.asciidoc.callout,macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity,"line-continuation":a.languages.asciidoc["line-continuation"]},a.languages.asciidoc["other-block"].inside.rest={table:a.languages.asciidoc.table,"list-punctuation":a.languages.asciidoc["list-punctuation"],"indented-block":a.languages.asciidoc["indented-block"],comment:a.languages.asciidoc.comment,"attribute-entry":a.languages.asciidoc["attribute-entry"],attributes:a.languages.asciidoc.attributes,hr:a.languages.asciidoc.hr,"page-break":a.languages.asciidoc["page-break"],admonition:a.languages.asciidoc.admonition,"list-label":a.languages.asciidoc["list-label"],macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity,"line-continuation":a.languages.asciidoc["line-continuation"]},a.languages.asciidoc.title.inside.rest={macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity},a.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})}(Prism);
Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive tag":{pattern:/<%\s*@.*%>/i,inside:{"page-directive tag":/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,rest:Prism.languages.markup.tag.inside}},"directive tag":{pattern:/<%.*%>/i,inside:{"directive tag":/<%\s*?[$=%#:]{0,2}|%>/i,rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,Prism.languages.insertBefore("inside","punctuation",{"directive tag":Prism.languages.aspnet["directive tag"]},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp comment":/<%--[\w\W]*?--%>/}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp script":{pattern:/(<script(?=.*runat=['"]?server['"]?)[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.csharp||{}}});
Prism.languages.autoit={comment:[/;.*/,{pattern:/(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,lookbehind:!0}],url:{pattern:/(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^\s*)#\w+/m,lookbehind:!0,alias:"keyword"},"function":/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,"boolean":/\b(?:True|False)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,punctuation:/[\[\]().,:]/};
Prism.languages.autohotkey={comment:{pattern:/(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,lookbehind:!0},string:/"(([^"\n\r]|"")*)"/m,"function":/[^\(\); \t,\n\+\*\-=\?>:\\\/<&%\[\]]+?(?=\()/m,tag:/^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,variable:/%\w+%/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,punctuation:/[\{}[\]\(\):,]/,"boolean":/\b(true|false)\b/,selector:/\b(AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,constant:/\b(a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,builtin:/\b(abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,symbol:/\b(alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,important:/#\b(AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,keyword:/\b(Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i};
!function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);
Prism.languages.basic={string:/"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,comment:{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},number:/(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,keyword:/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,"function":/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,punctuation:/[,;:()]/};
!function(e){var r=/%%?[~:\w]+%?|!\S+!/,t={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},n=/"[^"]*"/,i=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:n,parameter:t,variable:r,number:i,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:n,parameter:t,variable:r,number:i,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:n,parameter:t,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:i,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:n,parameter:t,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:i,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(Prism);
Prism.languages.c=Prism.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0},directive:{pattern:/(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,lookbehind:!0,alias:"keyword"}}},constant:/\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/}),delete Prism.languages.c["class-name"],delete Prism.languages.c["boolean"];
Prism.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/};
Prism.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(TODO|FIXME|XXX)\b/}},string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"boolean":/\b(T|F)\b/,"function":{pattern:/(?:function|hook|event) [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/,inside:{keyword:/^(?:function|hook|event)/}},variable:{pattern:/(?:global|local) [a-zA-Z0-9_]+/i,inside:{keyword:/(?:global|local)/}},builtin:/(@(load(-(sigs|plugin))?|unload|prefixes|ifn?def|else|(end)?if|DIR|FILENAME))|(&?(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,constant:{pattern:/const [a-zA-Z0-9_]+/i,inside:{keyword:/const/}},keyword:/\b(break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,punctuation:/[{}[\];(),.:]/};
Prism.languages.bison=Prism.languages.extend("c",{}),Prism.languages.insertBefore("bison","comment",{bison:{pattern:/^[\s\S]*?%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:Prism.languages.c}},comment:Prism.languages.c.comment,string:Prism.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}});
Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i}),Prism.languages.insertBefore("csharp","keyword",{"generic-method":{pattern:/[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,alias:"function",inside:{keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});
Prism.languages.cpp=Prism.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),Prism.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}});
!function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\?[^\\])*?'/,greedy:!0},{pattern:/"(?:\\?[^\\])*?"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\?[\s\S])*?`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},rest:e.languages.javascript}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"]}(Prism);
!function(e){e.languages.ruby=e.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:n}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:n}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:n}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:n}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:n}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:n}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:n}}]}(Prism);
Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:\.\w]+/,id:/#[-:\.\w]+/,attribute:/\[[^\]]+\]/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/});
Prism.languages.d=Prism.languages.extend("clike",{string:[/\b[rx]"(\\.|[^\\"])*"[cwd]?/,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/,/\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/,/\bq"(.)[\s\S]*?\1"/,/'(?:\\'|\\?[^']+)'/,/(["`])(\\.|(?!\1)[^\\])*\1[cwd]?/],number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,lookbehind:!0}],keyword:/\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),Prism.languages.d.comment=[/^\s*#!.+/,{pattern:/(^|[^\\])\/\+(?:\/\+[\w\W]*?\+\/|[\w\W])*?\+\//,lookbehind:!0}].concat(Prism.languages.d.comment),Prism.languages.insertBefore("d","comment",{"token-string":{pattern:/\bq\{(?:|\{[^}]*\}|[^}])*\}/,alias:"string"}}),Prism.languages.insertBefore("d","keyword",{property:/\B@\w*/}),Prism.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}});
Prism.languages.dart=Prism.languages.extend("clike",{string:[/r?("""|''')[\s\S]*?\1/,/r?("|')(\\?.)*?\1/],keyword:[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/],operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),Prism.languages.insertBefore("dart","function",{metadata:{pattern:/@\w+/,alias:"symbol"}});
Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m],deleted:/^[-<].*$/m,inserted:/^[+>].*$/m,diff:{pattern:/^!(?!!).+$/m,alias:"important"}};
Prism.languages.docker={keyword:{pattern:/(^\s*)(?:ONBUILD|FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|COPY|VOLUME|USER|WORKDIR|CMD|LABEL|ENTRYPOINT)(?=\s)/im,lookbehind:!0},string:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,comment:/#.*/,punctuation:/---|\.\.\.|[:[\]{}\-,|>?]/};
Prism.languages.eiffel={string:[/"([^[]*)\[[\s\S]+?\]\1"/,/"([^{]*)\{[\s\S]+?\}\1"/,/"(?:%\s+%|%"|.)*?"/],comment:/--.*/,"char":/'(?:%'|.)+?'/,keyword:/\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,"boolean":/\b(?:True|False)\b/i,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/};
Prism.languages.elixir={comment:{pattern:/(^|[^#])#(?![{#]).*/m,lookbehind:!0},regex:/~[rR](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|[^}])+\}|<(?:\\>|[^>])+>)[uismxfr]*/,string:[{pattern:/~[cCsSwW](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|#\{[^}]+\}|[^}])+\}|<(?:\\>|[^>])+>)[csa]?/,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,inside:{}},{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:"symbol"},"attr-name":/\w+:(?!:)/,capture:{pattern:/(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,lookbehind:!0,alias:"function"},argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:"variable"},attribute:{pattern:/@[\S]+/,alias:"variable"},number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,"boolean":/\b(?:true|false|nil)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},Prism.languages.elixir.string.forEach(function(e){e.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:Prism.util.clone(Prism.languages.elixir)}}}});
Prism.languages.erlang={comment:/%.+/,string:/"(?:\\?.)*?"/,"quoted-function":{pattern:/'(?:\\.|[^'\\])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^'\\])+'/,alias:"atom"},"boolean":/\b(?:true|false)\b/,keyword:/\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,number:[/\$\\?./,/\d+#[a-z0-9]+/i,/(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/],"function":/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/};
Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*[\w\W]*?\*\)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,string:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,number:[/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/,/\b-?0b[01]+(y|uy)?\b/,/\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/,/\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/]}),Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/^[^\r\n\S]*#.*/m,alias:"property",inside:{directive:{pattern:/(\s*#)\b(else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}});
Prism.languages.fortran={"quoted-number":{pattern:/[BOZ](['"])[A-F0-9]+\1/i,alias:"number"},string:{pattern:/(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,inside:{comment:{pattern:/(&(?:\r\n?|\n)\s*)!.*/,lookbehind:!0}}},comment:/!.*/,"boolean":/\.(?:TRUE|FALSE)\.(?:_\w+)?/i,number:/(?:\b|[+-])(?:\d+(?:\.\d*)?|\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,keyword:[/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i,/\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,/\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,/\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],operator:[/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,{pattern:/(^|(?!\().)\/(?!\))/,lookbehind:!0}],punctuation:/\(\/|\/\)|[(),;:&]/};
Prism.languages.gherkin={pystring:{pattern:/("""|''')[\s\S]+?\1/,alias:"string"},comment:{pattern:/((^|\r?\n|\r)[ \t]*)#.*/,lookbehind:!0},tag:{pattern:/((^|\r?\n|\r)[ \t]*)@\S*/,lookbehind:!0},feature:{pattern:/((^|\r?\n|\r)[ \t]*)(Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):([^:]+(?:\r?\n|\r|$))*/,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]+/,lookbehind:!0},keyword:/[^:\r\n]+:/}},scenario:{pattern:/((^|\r?\n|\r)[ \t]*)(Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|ghantoH|Grundlage|Hannergrond|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|Lýsing Atburðarásar|Lýsing Dæma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]*/,lookbehind:!0},keyword:/[^:\r\n]+:/}},"table-body":{pattern:/((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,lookbehind:!0,inside:{outline:{pattern:/<[^>]+?>/,alias:"variable"},td:{pattern:/\s*[^\s|][^|]*/,alias:"string"},punctuation:/\|/}},"table-head":{pattern:/((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)/,inside:{th:{pattern:/\s*[^\s|][^|]*/,alias:"variable"},punctuation:/\|/}},atrule:{pattern:/((?:\r?\n|\r)[ \t]+)('ach|'a|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cando|Cand|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|Entonces|En|Epi|E|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kadar|Kada|Kad|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|ugeholl|Und|Un|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t]+)/,lookbehind:!0},string:{pattern:/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/,inside:{outline:{pattern:/<[^>]+?>/,alias:"variable"}}},outline:{pattern:/<[^>]+?>/,alias:"variable"}};
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.glsl=Prism.languages.extend("clike",{comment:[/\/\*[\w\W]*?\*\//,/\/\/(?:\\(?:\r\n|[\s\S])|.)*/],number:/\b(?:0x[\da-f]+|(?:\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?)[ulf]*\b/i,keyword:/\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/}),Prism.languages.insertBefore("glsl","comment",{preprocessor:{pattern:/(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,lookbehind:!0,alias:"builtin"}});
Prism.languages.go=Prism.languages.extend("clike",{keyword:/\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,builtin:/\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,"boolean":/\b(_|iota|nil|true|false)\b/,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,number:/\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,string:/("|'|`)(\\?.|\r|\n)*?\1/}),delete Prism.languages.go["class-name"];
Prism.languages.graphql={comment:/#.*/,string:{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,"boolean":/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":/[a-z_]\w*(?=\s*:)/i,keyword:[{pattern:/(fragment\s+(?!on)[a-z_]\w*\s+|\.\.\.\s*)on\b/,lookbehind:!0},/\b(?:query|fragment|mutation)\b/],operator:/!|=|\.{3}/,punctuation:/[!(){}\[\]:=,]/};
Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,string:[{pattern:/("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,greedy:!0},{pattern:/("|'|\/)(?:\\?.)*?\1/,greedy:!0}],number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),Prism.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(setup|given|when|then|and|cleanup|expect|where):/}),Prism.languages.insertBefore("groovy","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}}),Prism.hooks.add("wrap",function(e){if("groovy"===e.language&&"string"===e.type){var t=e.content[0];if("'"!=t){var n=/([^\\])(\$(\{.*?\}|[\w\.]+))/;"$"===t&&(n=/([^\$])(\$(\{.*?\}|[\w\.]+))/),e.content=e.content.replace(/&amp;/g,"&").replace(/&lt;/g,"<"),e.content=Prism.highlight(e.content,{expression:{pattern:n,lookbehind:!0,inside:Prism.languages.groovy}}),e.classes.push("/"===t?"regex":"gstring")}}});
!function(e){e.languages.haml={"multiline-comment":{pattern:/((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*((?:\r?\n|\r)\2[\t ]+.+)*/,lookbehind:!0,alias:"comment"},"multiline-code":[{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*((?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*((?:\r?\n|\r)\2[\t ]+.+)/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*((?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,lookbehind:!0,inside:{rest:e.languages.ruby}}],filter:{pattern:/((?:^|\r?\n|\r)([\t ]*)):[\w-]+((?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},markup:{pattern:/((?:^|\r?\n|\r)[\t ]*)<.+/,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,lookbehind:!0},tag:{pattern:/((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,lookbehind:!0,inside:{attributes:[{pattern:/(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,lookbehind:!0},"attr-name":/[\w:-]+(?=\s*!?=|\s*[,)])/,punctuation:/[=(),]/}},{pattern:/\[[^\]]+\]/,inside:{rest:e.languages.ruby}}],punctuation:/[<>]/}},code:{pattern:/((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,lookbehind:!0,inside:{rest:e.languages.ruby}},interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.ruby}},punctuation:{pattern:/((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,lookbehind:!0}};for(var t="((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+",r=["css",{filter:"coffee",language:"coffeescript"},"erb","javascript","less","markdown","ruby","scss","textile"],n={},a=0,i=r.length;i>a;a++){var l=r[a];l="string"==typeof l?{filter:l,language:l}:l,e.languages[l.language]&&(n["filter-"+l.filter]={pattern:RegExp(t.replace("{{filter_name}}",l.filter)),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[l.language]}})}e.languages.insertBefore("haml","filter",n)}(Prism);
!function(e){var a=/\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:a,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)*?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,"boolean":/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\w\W]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\w\W]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.code=e.code.replace(a,function(a){return e.tokenStack.push(a),"___HANDLEBARS"+e.tokenStack.length+"___"}))}),e.hooks.add("after-highlight",function(a){if("handlebars"===a.language){for(var n,t=0;n=a.tokenStack[t];t++)a.highlightedCode=a.highlightedCode.replace("___HANDLEBARS"+(t+1)+"___",e.highlight(n,a.grammar,"handlebars").replace(/\$/g,"$$$$"));a.element.innerHTML=a.highlightedCode}})}(Prism);
Prism.languages.haskell={comment:{pattern:/(^|[^-!#$%*+=?&@|~.:<>^\\\/])(--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\w\W]*?-})/m,lookbehind:!0},"char":/'([^\\']|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,string:{pattern:/"([^\\"]|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,greedy:!0},keyword:/\b(case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,import_statement:{pattern:/(\r?\n|\r|^)\s*import\s+(qualified\s+)?([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*(\s+as\s+([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*)?(\s+hiding\b)?/m,inside:{keyword:/\b(import|qualified|as|hiding)\b/}},builtin:/\b(abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,number:/\b(\d+(\.\d+)?(e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,operator:/\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*`/,hvariable:/\b([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*\b/,constant:/\b([A-Z][_a-zA-Z0-9']*\.)*[A-Z][_a-zA-Z0-9']*\b/,punctuation:/[{}[\];(),.:]/};
Prism.languages.haxe=Prism.languages.extend("clike",{string:{pattern:/(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^}]+\})/,lookbehind:!0,inside:{interpolation:{pattern:/^\$\w*/,alias:"variable"}}}}},keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,operator:/\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/}),Prism.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/}}),Prism.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#\w+/,alias:"builtin"},metadata:{pattern:/@:?\w+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"variable"}}),Prism.languages.haxe.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.haxe),delete Prism.languages.haxe["class-name"];
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )[0-9]+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)};
Prism.languages.icon={comment:/#.*/,string:/(["'])(?:(?!\1)[^\\\r\n]|\\.|_(?:\r?\n|\r))*\1/,number:/\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,"builtin-keyword":{pattern:/&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,alias:"variable"},directive:{pattern:/\$\w+/,alias:"builtin"},keyword:/\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,"function":/(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,operator:/[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,punctuation:/[\[\](){},;]/};
Prism.languages.inform7={string:{pattern:/"[^"]*"/,inside:{substitution:{pattern:/\[[^\]]+\]/,inside:{delimiter:{pattern:/\[|\]/,alias:"punctuation"}}}}},comment:/\[[^\]]+\]/,title:{pattern:/^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,alias:"important"},number:{pattern:/(^|[^-])(?:(?:\b|-)\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,lookbehind:!0},verb:{pattern:/(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,lookbehind:!0},property:{pattern:/(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,lookbehind:!0,alias:"symbol"},position:{pattern:/(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,lookbehind:!0,alias:"variable"},punctuation:/[.,:;(){}]/},Prism.languages.inform7.string.inside.substitution.inside.rest=Prism.util.clone(Prism.languages.inform7),Prism.languages.inform7.string.inside.substitution.inside.rest.text={pattern:/\S(?:\s*\S)*/,alias:"comment"};
Prism.languages.ini={comment:/^[ \t]*;.*$/m,important:/\[.*?\]/,constant:/^[ \t]*[^\s=]+?(?=[ \t]*=)/m,"attr-value":{pattern:/=.*/,inside:{punctuation:/^[=]/}}};
Prism.languages.j={comment:/\bNB\..*/,string:/'(?:''|[^'\r\n])*'/,keyword:/\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,verb:{pattern:/(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[\^?]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,alias:"keyword"},number:/\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,adverb:{pattern:/[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,alias:"builtin"},operator:/[=a][.:]|_\./,conjunction:{pattern:/&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,alias:"variable"},punctuation:/[()]/};
!function(e){e.languages.jade={comment:{pattern:/(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},filter:{pattern:/(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:e.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,"function":/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:e.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:{rest:e.languages.javascript}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:{rest:e.languages.javascript}},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}}],punctuation:/[.\-!=|]+/};for(var t="(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+",n=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","hogan","less","livescript","markdown","mustache","plates",{filter:"sass",language:"scss"},"stylus","swig"],a={},i=0,r=n.length;r>i;i++){var s=n[i];s="string"==typeof s?{filter:s,language:s}:s,e.languages[s.language]&&(a["filter-"+s.filter]={pattern:RegExp(t.replace("{{filter_name}}",s.filter),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[s.language]}})}e.languages.insertBefore("jade","filter",a)}(Prism);
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),Prism.languages.insertBefore("java","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}});
Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json;
Prism.languages.julia={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,keyword:/\b(abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|let|local|macro|module|print|println|quote|return|try|type|typealias|using|while)\b/,"boolean":/\b(true|false)\b/,number:/\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?\b/i,operator:/\+=?|-=?|\*=?|\/[\/=]?|\\=?|\^=?|%=?|÷=?|!=?=?|&=?|\|[=>]?|\$=?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.keyman={comment:/\bc\s.*/i,"function":/\[\s*((CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*([TKU]_[a-z0-9_?]+|".+?"|'.+?')\s*\]/i,string:/("|')((?!\1).)*\1/,bold:[/&(baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,/\b(bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],keyword:/\b(any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,atrule:/\b(ansi|begin|unicode|group|using keys|match|nomatch)\b/i,number:/\b(U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\,()]/,tag:/\$(keyman|kmfl|weaver|keymanweb|keymanonly):/i};
!function(n){n.languages.kotlin=n.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,lookbehind:!0},"function":[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete n.languages.kotlin["class-name"],n.languages.insertBefore("kotlin","string",{"raw-string":{pattern:/(["'])\1\1[\s\S]*?\1{3}/,alias:"string"}}),n.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),n.languages.insertBefore("kotlin","function",{label:{pattern:/\w+@|@\w+/,alias:"symbol"}});var e=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:"variable"},rest:n.util.clone(n.languages.kotlin)}},{pattern:/\$\w+/,alias:"variable"}];n.languages.kotlin.string.inside=n.languages.kotlin["raw-string"].inside={interpolation:e}}(Prism);
!function(a){var e=/\\([^a-z()[\]]|[a-z\*]+)/i,n={"equation-command":{pattern:e,alias:"regex"}};a.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$(?:\\?[\w\W])*?\$|\\\((?:\\?[\w\W])*?\\\)|\\\[(?:\\?[\w\W])*?\\\]/,inside:n,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,lookbehind:!0,inside:n,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},"function":{pattern:e,alias:"selector"},punctuation:/[[\]{}&]/}}(Prism);
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});
Prism.languages.livescript={"interpolated-string":{pattern:/("""|")(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:{variable:{pattern:/(^|[^\\])#[a-z_](?:-?[a-z]|\d)*/m,lookbehind:!0},interpolation:{pattern:/(^|[^\\])#\{[^}]+\}/m,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^#\{|\}$/,alias:"variable"}}},string:/[\s\S]+/}},comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0}],string:[{pattern:/('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/<\[[\s\S]*?\]>/,greedy:!0},/\\[^\s,;\])}]+/],regex:[{pattern:/\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,greedy:!0,inside:{comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0}}},{pattern:/\/(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}/,greedy:!0}],keyword:{pattern:/(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,lookbehind:!0},"keyword-operator":{pattern:/(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,lookbehind:!0,alias:"operator"},"boolean":{pattern:/(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,lookbehind:!0},argument:{pattern:/(^|(?!\.&\.)[^&])&(?!&)\d*/m,lookbehind:!0,alias:"variable"},number:/\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,identifier:/[a-z_](?:-?[a-z]|\d)*/i,operator:[{pattern:/( )\.(?= )/,lookbehind:!0},/\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],punctuation:/[(){}\[\]|.,:;`]/},Prism.languages.livescript["interpolated-string"].inside.interpolation.inside.rest=Prism.languages.livescript;
Prism.languages.lolcode={comment:[/\bOBTW\s+[\s\S]*?\s+TLDR\b/,/\bBTW.+/],string:{pattern:/"(?::.|[^"])*"/,inside:{variable:/:\{[^}]+\}/,symbol:[/:\([a-f\d]+\)/i,/:\[[^\]]+\]/,/:[)>o":]/]}},number:/(-|\b)\d*\.?\d+/,symbol:{pattern:/(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,lookbehind:!0,inside:{keyword:/A(?=\s)/}},label:{pattern:/((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,lookbehind:!0,alias:"string"},"function":{pattern:/((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,lookbehind:!0},keyword:[{pattern:/(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,lookbehind:!0},/'Z(?=\s|,|$)/],"boolean":{pattern:/(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,lookbehind:!0},variable:{pattern:/(^|\s)IT(?=\s|,|$)/,lookbehind:!0},operator:{pattern:/(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,lookbehind:!0},punctuation:/\.{3}|…|,|!/};
Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,"function":/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/};
Prism.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,lookbehind:!0},string:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,builtin:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,symbol:{pattern:/^[^:=\r\n]+(?=\s*:(?!=))/m,inside:{variable:/\$+(?:[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:[/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,{pattern:/(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,lookbehind:!0}],operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/};
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);
Prism.languages.matlab={string:/\B'(?:''|[^'\n])*'/,comment:[/%\{[\s\S]*?\}%/,/%.+/],number:/\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,keyword:/\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,"function":/(?!\d)\w+(?=\s*\()/,operator:/\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,punctuation:/\.{3}|[.,;\[\](){}!]/};
Prism.languages.mel={comment:/\/\/.*/,code:{pattern:/`(?:\\.|[^\\`\r\n])*`/,alias:"italic",inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"}}},string:/"(?:\\.|[^\\"\r\n])*"/,variable:/\$\w+/,number:/(?:\b|-)(?:0x[\da-fA-F]+|\d+\.?\d*)/,flag:{pattern:/-[^\d\W]\w*/,alias:"operator"},keyword:/\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,"function":/\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,operator:[/\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,:;?\[\](){}]/},Prism.languages.mel.code.inside.rest=Prism.util.clone(Prism.languages.mel);
Prism.languages.mizar={comment:/::.+/,keyword:/@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,parameter:{pattern:/\$(?:10|\d)/,alias:"variable"},variable:/\w+(?=:)/,number:/(?:\b|-)\d+\b/,operator:/\.\.\.|->|&|\.?=/,punctuation:/\(#|#\)|[,:;\[\](){}]/};
Prism.languages.monkey={string:/"[^"\r\n]*"/,comment:[/^#Rem\s+[\s\S]*?^#End/im,/'.+/],preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,alias:"comment"},"function":/\w+(?=\()/,"type-char":{pattern:/(\w)[?%#$]/,lookbehind:!0,alias:"variable"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+((?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/};
Prism.languages.nasm={comment:/;.*$/m,string:/("|'|`)(\\?.)*?\1/m,label:{pattern:/(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,lookbehind:!0,alias:"function"},keyword:[/\[?BITS (16|32|64)\]?/m,{pattern:/(^\s*)section\s*[a-zA-Z\.]+:?/im,lookbehind:!0},/(?:extern|global)[^;\r\n]*/im,/(?:CPU|FLOAT|DEFAULT).*$/m],register:{pattern:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(bp|sp|si|di)|[cdefgs]s)\b/i,alias:"variable"},number:/(\b|-|(?=\$))(0[hx][\da-f]*\.?[\da-f]+(p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-\/%<>=&|$!]/};
Prism.languages.nginx=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},keyword:/\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i}),Prism.languages.insertBefore("nginx","keyword",{variable:/\$[a-z_]+/i});
Prism.languages.nim={comment:/#.*/,string:/(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,number:/\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,keyword:/\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,"function":{pattern:/(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,inside:{operator:/\*$/}},ignore:{pattern:/`[^`\r\n]+`/,inside:{punctuation:/`/}},operator:{pattern:/(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,lookbehind:!0},punctuation:/[({\[]\.|\.[)}\]]|[`(){}\[\],:]/};
Prism.languages.nix={comment:/\/\*[\s\S]*?\*\/|#.*/,string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,lookbehind:!0,inside:{antiquotation:{pattern:/^\$(?=\{)/,alias:"variable"}}}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:"variable"},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,"function":/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,"boolean":/\b(?:true|false)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},Prism.languages.nix.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.nix);
Prism.languages.nsis={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|[#;].*)/,lookbehind:!0},string:/("|')(\\?.)*?\1/,keyword:/\b(Abort|Add(BrandingImage|Size)|AdvSplash|Allow(RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(Font|Gradient|Image)|BrandingText|BringToFront|Call(InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(Directory|Font|ShortCut)|Delete(INISec|INIStr|RegKey|RegValue)?|Detail(Print|sButtonText)|Dialer|Dir(Text|Var|Verify)|EnableWindow|Enum(RegKey|RegValue)|Exch|Exec(Shell|Wait)?|ExpandEnvStrings|File(BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(Close|First|Next|Window)|FlushINI|Get(CurInstType|CurrentAddress|DlgItem|DLLVersion(Local)?|ErrorLevel|FileTime(Local)?|FullPathName|Function(Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(ButtonText|Colors|Dir(RegKey)?)|InstProgressFlags|Inst(Type(GetText|SetText)?)|Int(CmpU?|Fmt|Op)|IsWindow|Lang(DLL|String)|License(BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(Set|Text)|Manifest(DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(Dialogs|Exec)|NSISdl|OutFile|Page(Callbacks)?|Pop|Push|Quit|Read(EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(AutoClose|BrandingImage|Compress|Compressor(DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(InstDetails|UninstDetails|Window)|Silent(Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(INIStr|RegBin|RegDWORD|RegExpandStr|RegStr|Uninstaller)|XPStyle)\b/,property:/\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(CR|CU|DD|LM|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,variable:/\$[({]?[-_\w]+[)}]?/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/--?|\+\+?|<=?|>=?|==?=?|&&?|\|?\||[?*\/~^%]/,punctuation:/[{}[\];(),.:]/,important:/!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)\b/i};
Prism.languages.objectivec=Prism.languages.extend("c",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/});
Prism.languages.ocaml={comment:/\(\*[\s\S]*?\*\)/,string:[/"(?:\\.|[^\\\r\n"])*"/,/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i],number:/\b-?(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,type:{pattern:/\B['`][a-z\d_]*/i,alias:"variable"},directive:{pattern:/\B#[a-z\d_]+/i,alias:"function"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,"boolean":/\b(?:false|true)\b/,operator:/:=|[=<>@^|&+\-*\/$%!?~][!$%&\*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,punctuation:/[(){}\[\]|_.,:;]/};
Prism.languages.oz={comment:/\/\*[\s\S]*?\*\/|%.*/,string:/"(?:[^"\\]|\\[\s\S])*"/,atom:{pattern:/'(?:[^'\\]|\\.)*'/,alias:"builtin"},keyword:/[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,"function":[/[a-z][A-Za-z\d]*(?=\()/,{pattern:/(\{)[A-Z][A-Za-z\d]*/,lookbehind:!0}],number:/\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,variable:/\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,"attr-name":/\w+(?=:)/,operator:/:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,punctuation:/[\[\](){}.:;?]/};
Prism.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:/"(?:[^"\\]|\\.)*"/,keyword:function(){var r=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return r=r.map(function(r){return r.split("").join(" *")}).join("|"),RegExp("\\b(?:"+r+")\\b")}(),"function":/\w[\w ]*?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/};
Prism.languages.parser=Prism.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.\{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},"function":{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/}),Prism.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:Prism.languages.parser.keyword,variable:Prism.languages.parser.variable,"function":Prism.languages.parser.function,"boolean":/\b(?:true|false)\b/,number:/\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,escape:Prism.languages.parser.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:Prism.languages.parser.punctuation}}}),Prism.languages.insertBefore("inside","punctuation",{expression:Prism.languages.parser.expression,keyword:Prism.languages.parser.keyword,variable:Prism.languages.parser.variable,"function":Prism.languages.parser.function,escape:Prism.languages.parser.escape,"parser-punctuation":{pattern:Prism.languages.parser.punctuation,alias:"punctuation"}},Prism.languages.parser.tag.inside["attr-value"]);
Prism.languages.pascal={comment:[/\(\*[\s\S]+?\*\)/,/\{[\s\S]+?\}/,/\/\/.*/],string:/(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,keyword:[{pattern:/(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,lookbehind:!0}],number:[/[+-]?(?:[&%]\d+|\$[a-f\d]+)/i,/([+-]|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],operator:[/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,{pattern:/(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,lookbehind:!0}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/};
Prism.languages.perl={comment:[{pattern:/(^\s*)=\w+[\s\S]*?=cut.*/m,lookbehind:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0}],string:[/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,/\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/,/\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,/\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,/\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,/\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,/("|`)(?:[^\\]|\\[\s\S])*?\1/,/'(?:[^'\\\r\n]|\\.)*'/],regex:[/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/,/\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/,/\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,/\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,/\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,/\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,{pattern:/(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,lookbehind:!0},/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*>|\b_\b/,alias:"symbol"},vstring:{pattern:/v\d+(\.\d+)*|\d+(\.\d+){2,}/,alias:"string"},"function":{pattern:/sub [a-z0-9_]+/i,inside:{keyword:/sub/}},keyword:/\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,punctuation:/[{}[\];(),:]/};
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(n){return e.tokenStack.push(n),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var n,a=0;n=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",Prism.highlight(n,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));
Prism.languages.insertBefore("php","variable",{"this":/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}});
Prism.languages.powershell={comment:[{pattern:/(^|[^`])<#[\w\W]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(`?[\w\W])*?"/,greedy:!0,inside:{"function":{pattern:/[^`]\$\(.*?\)/,inside:{}}}},{pattern:/'([^']|'')*'/,greedy:!0}],namespace:/\[[a-z][\w\W]*?\]/i,"boolean":/\$(true|false)\b/i,variable:/\$\w+\b/i,"function":[/\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(Csv|Json|StringData)|Convert-Path|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-Process|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(Command|Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(Job|PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(Computer|Service)|Restore-Computer|Resume-(Job|Service)|Save-Help|Select-(Object|String|Xml)|Send-MailMessage|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-Object|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData|Help|List|TypeData)|Use-Transaction|Wait-(Event|Job|Process)|Where-Object|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i,/\b(ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(and|x?or)|(Not)?(Like|Match|Contains|In)|Replace|Join|is(Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},Prism.languages.powershell.string[0].inside.boolean=Prism.languages.powershell.boolean,Prism.languages.powershell.string[0].inside.variable=Prism.languages.powershell.variable,Prism.languages.powershell.string[0].inside.function.inside=Prism.util.clone(Prism.languages.powershell);
Prism.languages.processing=Prism.languages.extend("clike",{keyword:/\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),Prism.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z][A-Za-z\d_]*)\b/,alias:"variable"}}),Prism.languages.processing["function"].pattern=/[a-z0-9_]+(?=\s*\()/i,Prism.languages.processing["class-name"].alias="variable";
Prism.languages.prolog={comment:[/%.+/,/\/\*[\s\S]*?\*\//],string:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,variable:/\b[A-Z_]\w*/,"function":/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+\.?\d*/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/};
Prism.languages.properties={comment:/^[ \t]*[#!].*$/m,"attr-value":{pattern:/(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|.)+/m,lookbehind:!0},"attr-name":/^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[ =:]| )/m,punctuation:/[=:]/};
Prism.languages.protobuf=Prism.languages.extend("clike",{keyword:/\b(package|import|message|enum)\b/,builtin:/\b(required|repeated|optional|reserved)\b/,primitive:{pattern:/\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,alias:"symbol"}});
!function(e){e.languages.puppet={heredoc:[{pattern:/(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,alias:"string",inside:{punctuation:{pattern:/(\().+?(?=\))/,lookbehind:!0}}}],"multiline-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},regex:{pattern:/((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,lookbehind:!0,inside:{"extended-regex":{pattern:/^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,inside:{comment:/#.*/}}}},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,inside:{"double-quoted":{pattern:/^"[\s\S]*"$/,inside:{}}}},variable:{pattern:/\$(?:::)?\w+(?:::\w+)*/,inside:{punctuation:/::/}},"attr-name":/(?:\w+|\*)(?=\s*=>)/,"function":[{pattern:/(\.)(?!\d)\w+/,lookbehind:!0},/\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],number:/\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,"boolean":/\b(?:true|false)\b/,keyword:/\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,datatype:{pattern:/\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,alias:"symbol"},operator:/=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,punctuation:/[\[\]{}().,;]|:+/};var n=[{pattern:/(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,lookbehind:!0,inside:{"short-variable":{pattern:/(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}},delimiter:{pattern:/^\$/,alias:"variable"},rest:e.util.clone(e.languages.puppet)}},{pattern:/(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}}];e.languages.puppet.heredoc[0].inside.interpolation=n,e.languages.puppet.string.inside["double-quoted"].inside.interpolation=n}(Prism);
!function(e){e.languages.pure={"inline-lang":{pattern:/%<[\s\S]+?%>/,inside:{lang:{pattern:/(^%< *)-\*-.+?-\*-/,lookbehind:!0,alias:"comment"},delimiter:{pattern:/^%<.*|%>$/,alias:"punctuation"}}},comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0},/#!.+/],string:/"(?:\\.|[^"\\\r\n])*"/,number:{pattern:/((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,lookbehind:!0},keyword:/\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,"function":/\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,special:{pattern:/\b__[a-z]+__\b/i,alias:"builtin"},operator:/(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,punctuation:/[(){}\[\];,|]/};var t=["c",{lang:"c++",alias:"cpp"},"fortran","ats","dsp"],a="%< *-\\*- *{lang}\\d* *-\\*-[\\s\\S]+?%>";t.forEach(function(t){var r=t;if("string"!=typeof t&&(r=t.alias,t=t.lang),e.languages[r]){var i={};i["inline-lang-"+r]={pattern:RegExp(a.replace("{lang}",t.replace(/([.+*?\/\\(){}\[\]])/g,"\\$1")),"i"),inside:e.util.clone(e.languages.pure["inline-lang"].inside)},i["inline-lang-"+r].inside.rest=e.util.clone(e.languages[r]),e.languages.insertBefore("pure","inline-lang",i)}}),e.languages.c&&(e.languages.pure["inline-lang"].inside.rest=e.util.clone(e.languages.c))}(Prism);
Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/};
Prism.languages.q={string:/"(?:\\.|[^"\\\r\n])*"/,comment:[{pattern:/([\t )\]}])\/.*/,lookbehind:!0},{pattern:/(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,lookbehind:!0},/^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,/^#!.+/m],symbol:/`(?::\S+|[\w.]*)/,datetime:{pattern:/0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,alias:"number"},number:/\b-?(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,keyword:/\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,adverb:{pattern:/['\/\\]:?|\beach\b/,alias:"function"},verb:{pattern:/(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,alias:"operator"},punctuation:/[(){}\[\];.]/};
Prism.languages.qore=Prism.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\])*\1/,variable:/\$(?!\d)\w+\b/,keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,"boolean":/\b(?:true|false)\b/i,operator:{pattern:/(^|[^\.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},"function":/\$?\b(?!\d)\w+(?=\()/});
Prism.languages.r={comment:/#.*/,string:/(['"])(?:\\?.)*?\1/,"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},"boolean":/\b(?:TRUE|FALSE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:NaN|Inf)\b/,/\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/],keyword:/\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/};
!function(a){var e=a.util.clone(a.languages.javascript);a.languages.jsx=a.languages.extend("markup",e),a.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,a.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var s=a.util.clone(a.languages.jsx);delete s.punctuation,s=a.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:s}),a.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:s,alias:"language-javascript"}},a.languages.jsx.tag)}(Prism);
Prism.languages.rest={table:[{pattern:/(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,lookbehind:!0,inside:{punctuation:/\||(?:\+[=-]+)+\+/}},{pattern:/(\s*)(?:=+ +)+=+((?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,lookbehind:!0,inside:{punctuation:/[=-]+/}}],"substitution-def":{pattern:/(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,lookbehind:!0,inside:{substitution:{pattern:/^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,alias:"attr-value",inside:{punctuation:/^\||\|$/}},directive:{pattern:/( +)[^:]+::/,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}}}},"link-target":[{pattern:/(^\s*\.\. )\[[^\]]+\]/m,lookbehind:!0,alias:"string",inside:{punctuation:/^\[|\]$/}},{pattern:/(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,lookbehind:!0,alias:"string",inside:{punctuation:/^_|:$/}}],directive:{pattern:/(^\s*\.\. )[^:]+::/m,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}},comment:{pattern:/(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,lookbehind:!0},title:[{pattern:/^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,inside:{punctuation:/^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}},{pattern:/(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,lookbehind:!0,inside:{punctuation:/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}}],hr:{pattern:/((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,lookbehind:!0,alias:"punctuation"},field:{pattern:/(^\s*):[^:\r\n]+:(?= )/m,lookbehind:!0,alias:"attr-name"},"command-line-option":{pattern:/(^\s*)(?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,lookbehind:!0,alias:"symbol"},"literal-block":{pattern:/::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,inside:{"literal-block-punctuation":{pattern:/^::/,alias:"punctuation"}}},"quoted-literal-block":{pattern:/::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,inside:{"literal-block-punctuation":{pattern:/^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,alias:"punctuation"}}},"list-bullet":{pattern:/(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,lookbehind:!0,alias:"punctuation"},"doctest-block":{pattern:/(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,lookbehind:!0,inside:{punctuation:/^>>>/}},inline:[{pattern:/(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,lookbehind:!0,inside:{bold:{pattern:/(^\*\*).+(?=\*\*$)/,lookbehind:!0},italic:{pattern:/(^\*).+(?=\*$)/,lookbehind:!0},"inline-literal":{pattern:/(^``).+(?=``$)/,lookbehind:!0,alias:"symbol"},role:{pattern:/^:[^:]+:|:[^:]+:$/,alias:"function",inside:{punctuation:/^:|:$/}},"interpreted-text":{pattern:/(^`).+(?=`$)/,lookbehind:!0,alias:"attr-value"},substitution:{pattern:/(^\|).+(?=\|$)/,lookbehind:!0,alias:"attr-value"},punctuation:/\*\*?|``?|\|/}}],link:[{pattern:/\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,alias:"string",inside:{punctuation:/^\[|\]_$/}},{pattern:/(?:\b[a-z\d](?:[_.:+]?[a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,alias:"string",inside:{punctuation:/^_?`|`$|`?_?_$/}}],punctuation:{pattern:/(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,lookbehind:!0}};
Prism.languages.rip={comment:/#.*/,keyword:/(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,builtin:/@|\bSystem\b/,"boolean":/\b(?:true|false)\b/,date:/\b\d{4}-\d{2}-\d{2}\b/,time:/\b\d{2}:\d{2}:\d{2}\b/,datetime:/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,character:/\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,lookbehind:!0},symbol:/:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,string:/("|')(\\?.)*?\1/,number:/[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,punctuation:/(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,reference:/[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/};
Prism.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*)[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/};
!function(e){e.languages.crystal=e.languages.extend("ruby",{keyword:[/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|self|sizeof|struct|super|then|type|typeof|union|unless|until|when|while|with|yield|__DIR__|__FILE__|__LINE__)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[0-9a-fA-F_]*[0-9a-fA-F]|(?:[0-9](?:[0-9_]*[0-9])?)(?:\.[0-9_]*[0-9])?(?:[eE][+-]?[0-9_]*[0-9])?)(?:_(?:[uif](?:8|16|32|64))?)?\b/});var t=e.util.clone(e.languages.crystal);e.languages.insertBefore("crystal","string",{attribute:{pattern:/@\[.+?\]/,alias:"attr-name",inside:{delimiter:{pattern:/^@\[|\]$/,alias:"tag"},rest:t}},expansion:[{pattern:/\{\{.+?\}\}/,inside:{delimiter:{pattern:/^\{\{|\}\}$/,alias:"tag"},rest:t}},{pattern:/\{%.+?%\}/,inside:{delimiter:{pattern:/^\{%|%\}$/,alias:"tag"},rest:t}}]})}(Prism);
Prism.languages.rust={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:[/b?r(#*)"(?:\\?.)*?"\1/,/b?("|')(?:\\?.)*?\1/],keyword:/\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,attribute:{pattern:/#!?\[.+?\]/,alias:"attr-name"},"function":[/[a-z0-9_]+(?=\s*\()/i,/[a-z0-9_]+!(?=\s*\(|\[)/i],"macro-rules":{pattern:/[a-z0-9_]+!/i,alias:"function"},number:/\b-?(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,"closure-params":{pattern:/\|[^|]*\|(?=\s*[{-])/,inside:{punctuation:/[\|:,]/,operator:/[&*]/}},punctuation:/[{}[\];(),:]|\.+|->/,operator:/[-+*\/%!^=]=?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/};
Prism.languages.sas={datalines:{pattern:/^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,alias:"string",inside:{keyword:{pattern:/^(\s*)(?:(?:data)?lines|cards)/i,lookbehind:!0},punctuation:/;/}},comment:[{pattern:/(^\s*|;\s*)\*.*;/m,lookbehind:!0},/\/\*[\s\S]+?\*\//],datetime:{pattern:/'[^']+'(?:dt?|t)\b/i,alias:"number"},string:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,keyword:/\b(?:data|else|format|if|input|proc\s\w+|quit|run|then)\b/i,number:/(?:\B-|\b)(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,operator:/\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,punctuation:/[$%@.(){}\[\];,\\]/};
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var a=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:a,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:a,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);
Prism.languages.scala=Prism.languages.extend("java",{keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,string:[{pattern:/"""[\W\w]*?"""/,greedy:!0},{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0}],builtin:/\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,number:/\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,symbol:/'[^\d\s\\]\w*/}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala["function"];
Prism.languages.scheme={comment:/;.*/,string:/"(?:[^"\\\r\n]|\\.)*?"|'[^('\s]*/,keyword:{pattern:/(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,lookbehind:!0},builtin:{pattern:/(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,lookbehind:!0},number:{pattern:/(\s|\))[-+]?[0-9]*\.?[0-9]+(?:\s*[-+]\s*[0-9]*\.?[0-9]+i)?\b/,lookbehind:!0},"boolean":/#[tf]/,operator:{pattern:/(\()(?:[-+*%\/]|[<>]=?|=>?)/,lookbehind:!0},"function":{pattern:/(\()[^\s()]*(?=\s)/,lookbehind:!0},punctuation:/[()]/};
Prism.languages.smalltalk={comment:/"(?:""|[^"])+"/,string:/'(?:''|[^'])+'/,symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*?\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:nil|true|false|self|super|new)\b/,character:{pattern:/\$./,alias:"string"},number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/};
!function(e){var t=/\{\*[\w\W]+?\*\}|\{[\w\W]+?\}/g,a="{literal}",n="{/literal}",r=!1;e.languages.smarty=e.languages.extend("markup",{smarty:{pattern:t,inside:{delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\?.)*?\1/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],"function":[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|\->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/}}}),e.languages.insertBefore("smarty","tag",{"smarty-comment":{pattern:/\{\*[\w\W]*?\*\}/,alias:["smarty","comment"]}}),e.hooks.add("before-highlight",function(e){"smarty"===e.language&&(e.tokenStack=[],e.code=e.code.replace(t,function(t){return t===n&&(r=!1),r?t:(t===a&&(r=!0),e.tokenStack.push(t),"___SMARTY"+e.tokenStack.length+"___")}))}),e.hooks.add("after-highlight",function(t){if("smarty"===t.language){for(var a,n=0;a=t.tokenStack[n];n++)t.highlightedCode=t.highlightedCode.replace("___SMARTY"+(n+1)+"___",e.highlight(a,t.grammar,"smarty").replace(/\$/g,"$$$$"));t.element.innerHTML=t.highlightedCode}})}(Prism);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
!function(n){var t={url:/url\((["']?).*?\1\)/i,string:/("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,number:/\b\d+(?:\.\d+)?%?/,"boolean":/\b(?:true|false)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],punctuation:/[{}()\[\];:,]/};t.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:n.util.clone(t)},t.func={pattern:/[\w-]+\([^)]*\).*/,inside:{"function":/^[^(]+/,rest:n.util.clone(t)}},n.languages.stylus={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},"atrule-declaration":{pattern:/(^\s*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:t}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:t}},statement:{pattern:/(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:t}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:t.interpolation}},rest:t}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,lookbehind:!0,inside:{interpolation:t.interpolation,punctuation:/[{},]/}},func:t.func,string:t.string,interpolation:t.interpolation,punctuation:/[{}()\[\];:.]/}}(Prism);
Prism.languages.swift=Prism.languages.extend("clike",{string:{pattern:/("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),Prism.languages.swift.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.swift);
Prism.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/,lookbehind:!0},{pattern:/(\$){[^}]+}/,lookbehind:!0},{pattern:/(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/m,lookbehind:!0}],"function":{pattern:/(^\s*proc[ \t]+)[^\s]+/m,lookbehind:!0},builtin:[{pattern:/(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,lookbehind:!0},/\b(elseif|else)\b/],scope:{pattern:/(^\s*)(global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^\s*|\[)(after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,punctuation:/[{}()\[\]]/};
!function(e){var i="(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",n={css:{pattern:/\{[^}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/};e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:RegExp("^[a-z]\\w*(?:"+i+"|[<>=()])*\\."),inside:{modifier:{pattern:RegExp("(^[a-z]\\w*)(?:"+i+"|[<>=()])+(?=\\.)"),lookbehind:!0,inside:e.util.clone(n)},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:RegExp("^[*#]+(?:"+i+")?\\s+.+","m"),inside:{modifier:{pattern:RegExp("(^[*#]+)"+i),lookbehind:!0,inside:e.util.clone(n)},punctuation:/^[*#]+/}},table:{pattern:RegExp("^(?:(?:"+i+"|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:"+i+"|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:"+i+"|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:e.util.clone(n)},punctuation:/\||^\./}},inline:{pattern:RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:"+i+")?.+?\\1"),inside:{bold:{pattern:RegExp("((^\\*\\*?)(?:"+i+")?).+?(?=\\2)"),lookbehind:!0},italic:{pattern:RegExp("((^__?)(?:"+i+")?).+?(?=\\2)"),lookbehind:!0},cite:{pattern:RegExp("(^\\?\\?(?:"+i+")?).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:RegExp("(^@(?:"+i+")?).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:RegExp("(^\\+(?:"+i+")?).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:RegExp("(^-(?:"+i+")?).+?(?=-)"),lookbehind:!0},span:{pattern:RegExp("(^%(?:"+i+")?).+?(?=%)"),lookbehind:!0},modifier:{pattern:RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])"+i),lookbehind:!0,inside:e.util.clone(n)},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:RegExp('"(?:'+i+')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:RegExp('(^"(?:'+i+')?)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:RegExp('(^")'+i),lookbehind:!0,inside:e.util.clone(n)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:RegExp("!(?:"+i+"|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:RegExp("(^!(?:"+i+"|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:RegExp("(^!)(?:"+i+"|[<>=()])+"),lookbehind:!0,inside:e.util.clone(n)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}});var t={inline:e.util.clone(e.languages.textile.phrase.inside.inline),link:e.util.clone(e.languages.textile.phrase.inside.link),image:e.util.clone(e.languages.textile.phrase.inside.image),footnote:e.util.clone(e.languages.textile.phrase.inside.footnote),acronym:e.util.clone(e.languages.textile.phrase.inside.acronym),mark:e.util.clone(e.languages.textile.phrase.inside.mark)};e.languages.textile.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.textile.phrase.inside.inline.inside.bold.inside=t,e.languages.textile.phrase.inside.inline.inside.italic.inside=t,e.languages.textile.phrase.inside.inline.inside.inserted.inside=t,e.languages.textile.phrase.inside.inline.inside.deleted.inside=t,e.languages.textile.phrase.inside.inline.inside.span.inside=t,e.languages.textile.phrase.inside.table.inside.inline=t.inline,e.languages.textile.phrase.inside.table.inside.link=t.link,e.languages.textile.phrase.inside.table.inside.image=t.image,e.languages.textile.phrase.inside.table.inside.footnote=t.footnote,e.languages.textile.phrase.inside.table.inside.acronym=t.acronym,e.languages.textile.phrase.inside.table.inside.mark=t.mark}(Prism);
Prism.languages.twig={comment:/\{#[\s\S]*?#\}/,tag:{pattern:/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,inside:{ld:{pattern:/^(?:\{\{\-?|\{%\-?\s*\w+)/,inside:{punctuation:/^(?:\{\{|\{%)\-?/,keyword:/\w+/}},rd:{pattern:/\-?(?:%\}|\}\})$/,inside:{punctuation:/.*/}},string:{pattern:/("|')(?:\\?.)*?\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,"boolean":/\b(?:true|false|null)\b/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,operator:[{pattern:/(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],property:/\b[a-zA-Z_][a-zA-Z0-9_]*\b/,punctuation:/[()\[\]{}:.,]/}},other:{pattern:/\S(?:[\s\S]*\S)?/,inside:Prism.languages.markup}};
Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/});
Prism.languages.verilog={comment:/\/\/.*|\/\*[\w\W]*?\*\//,string:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,property:/\B\$\w+\b/,constant:/\B`\w+\b/,"function":/[a-z\d_]+(?=\()/i,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/};
Prism.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\\r\n]|\\?(?:\r\n|[\s\S]))*?"/,constant:/\b(?:use|library)\b/i,keyword:/\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,"boolean":/\b(?:true|false)\b/i,"function":/[a-z0-9_]+(?=\()/i,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*\/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,punctuation:/[{}[\];(),.:]/};
Prism.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,"function":/\w+(?=\()/,keyword:/\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/};
Prism.languages.wiki=Prism.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+).+?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?}}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:Prism.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),Prism.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[\w\W]*?>[\w\W]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[\w\W]*?>|<\/(?:nowiki|pre|source)>/i,inside:Prism.languages.markup.tag.inside}}}});
Prism.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,inside:{keyword:/^Rem/i}},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],symbol:/#(?:If|Else|ElseIf|Endif|Pragma)\b/i,keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,punctuation:/[.,;:()]/};
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};

/*!
 * jQuery.textcomplete.js
 *
 * Repositiory: https://github.com/yuku-t/jquery-textcomplete
 * License:     MIT
 * Author:      Yuku Takahashi
 */

;(function ($) {

  'use strict';

  /**
   * Exclusive execution control utility.
   */
  var lock = function (func) {
    var free, locked, queuedArgsToReplay;
    free = function () { locked = false; };
    return function () {
      var args = toArray(arguments);
      if (locked) {
        // Keep a copy of this argument list to replay later.
        // OK to overwrite a previous value because we only replay the last one.
        queuedArgsToReplay = args;
        return;
      }
      locked = true;
      var that = this;
      args.unshift(function replayOrFree() {
        if (queuedArgsToReplay) {
          // Other request(s) arrived while we were locked.
          // Now that the lock is becoming available, replay
          // the latest such request, then call back here to
          // unlock (or replay another request that arrived
          // while this one was in flight).
          var replayArgs = queuedArgsToReplay;
          queuedArgsToReplay = undefined;
          replayArgs.unshift(replayOrFree);
          func.apply(that, replayArgs);
        } else {
          locked = false;
        }
      });
      func.apply(this, args);
    };
  };

  /**
   * Convert arguments into a real array.
   */
  var toArray = function (args) {
    var result;
    result = Array.prototype.slice.call(args);
    return result;
  };

  /**
   * Get the styles of any element from property names.
   */
  var getStyles = (function () {
    var color;
    color = $('<div></div>').css(['color']).color;
    if (typeof color !== 'undefined') {
      return function ($el, properties) {
        return $el.css(properties);
      };
    } else {  // for jQuery 1.8 or below
      return function ($el, properties) {
        var styles;
        styles = {};
        $.each(properties, function (i, property) {
          styles[property] = $el.css(property);
        });
        return styles;
      };
    }
  })();

  /**
   * Default template function.
   */
  var identity = function (obj) { return obj; };

  /**
   * Memoize a search function.
   */
  var memoize = function (func) {
    var memo = {};
    return function (term, callback) {
      if (memo[term]) {
        callback(memo[term]);
      } else {
        func.call(this, term, function (data) {
          memo[term] = (memo[term] || []).concat(data);
          callback.apply(null, arguments);
        });
      }
    };
  };

  /**
   * Determine if the array contains a given value.
   */
  var include = function (array, value) {
    var i, l;
    if (array.indexOf) return array.indexOf(value) != -1;
    for (i = 0, l = array.length; i < l; i++) {
      if (array[i] === value) return true;
    }
    return false;
  };

  /**
   * Textarea manager class.
   */
  var Completer = (function () {
    var html, css, $baseList, _id;

    html = {
      list: '<ul class="dropdown-menu"></ul>'
    };
    css = {
      // Removed the 'top' property to support the placement: 'top' option
      list: {
        position: 'absolute',
        left: 0,
        zIndex: '100',
        display: 'none'
      }
    };
    $baseList = $(html.list).css(css.list);
    _id = 0;

    function Completer($el, option) {
      var focus;
      this.el = $el.get(0);  // textarea element
      focus = this.el === document.activeElement;
      this.$el = $el;
      this.id = 'textComplete' + _id++;
      this.strategies = [];
      this.option = option;
      if (focus) {
        this.initialize();
        this.$el.focus();
      } else {
        this.$el.one('focus.textComplete', $.proxy(this.initialize, this));
      }
    }

    /**
     * Completer's public methods
     */
    $.extend(Completer.prototype, {

      /**
       * Prepare ListView and bind events.
       */
      initialize: function () {
        var $list, globalEvents, appendTo, height;
        $list = $baseList.clone();
        this.listView = new ListView($list, this);
        this.$el.on({
          'keyup.textComplete': $.proxy(this.onKeyup, this),
          'keydown.textComplete': $.proxy(this.listView.onKeydown, this.listView)
        });
        appendTo = this.option.appendTo;
        if (appendTo) {
          // Append ListView to specified element.
          this.listView.appendTo(appendTo instanceof $ ? appendTo : $(appendTo));
        } else {
          this.listView.appendTo($('body'));
        }
        height = this.option.height;
        if (height) {
          $list.css("overflow-y", "auto");
          $list.height(height);
        }
        globalEvents = {};
        globalEvents['click.' + this.id] = $.proxy(this.onClickDocument, this);
        globalEvents['keyup.' + this.id] = $.proxy(this.onKeyupDocument, this);
        $(document).on(globalEvents);
      },

      /**
       * Register strategies to the completer.
       */
      register: function (strategies) {
        this.strategies = this.strategies.concat(strategies);
      },

      /**
       * Show autocomplete list next to the caret.
       */
      renderList: function (data) {
        if (this.clearAtNext) {
          this.listView.clear();
          this.clearAtNext = false;
        }
        if (data.length) {
          this.listView.strategy = this.strategy;
          if (!this.listView.shown) {
            this.listView
                .setPosition(this.getCaretPosition())
                .clear()
                .activate();
          }
          data = data.slice(0, this.strategy.maxCount);
          this.listView.render(data);
        }

        if (!this.listView.data.length && this.listView.shown) {
          this.listView.deactivate();
        }
      },

      searchCallbackFactory: function (free) {
        var self = this;
        return function (data, keep) {
          self.renderList(data);
          if (!keep) {
            // This is the last callback for this search.
            free();
            self.clearAtNext = true;
          }
        };
      },

      /**
       * Keyup event handler.
       */
      onKeyup: function (e) {
        if (this.skipSearch(e)) { return; }
        this.trigger(null, true);
      },

      /**
       * Public interface for invoking textcomplete.
       */
      trigger: function (text, suppress) {
        var searchQuery, term;
        text || (text = this.getTextFromHeadToCaret());
        searchQuery = this.extractSearchQuery(text);
        if (searchQuery.length) {
          term = searchQuery[1];
          if (suppress && this.term === term) {
            return; // Ignore shift-key or something.
          }
          this.term = term;
          this.search(searchQuery);
        } else {
          this.term = null;
          this.listView.deactivate();
        }
      },

      /**
       * Suppress searching if it returns true.
       */
      skipSearch: function (e) {
        switch (e.keyCode) {
          case 40: // DOWN
          case 38: // UP
            return true;
        }
        if (e.ctrlKey) switch (e.keyCode) {
          case 78: // Ctrl-N
          case 80: // Ctrl-P
            return true;
        }
      },

      onSelect: function (value) {
        var pre, post, newSubStr, sel, range, selection, remainder;
        pre = this.getTextFromHeadToCaret();
        remainder = pre.length;

        if (this.el.isContentEditable) {
          sel = window.getSelection();
          range = sel.getRangeAt(0);
          selection = range.cloneRange();
          selection.selectNodeContents(range.startContainer);
          var content = selection.toString();
          post = content.substring(range.startOffset);
        } else {
          post = this.el.value.substring(this.el.selectionEnd);
        }

        newSubStr = this.strategy.replace(value);

        if ($.isArray(newSubStr)) {
          post = newSubStr[1] + post;
          newSubStr = newSubStr[0];
        }

        pre = pre.replace(this.strategy.match, newSubStr);

        if (this.el.isContentEditable) {
          range.selectNodeContents(range.startContainer);
          range.deleteContents();
          var node = document.createTextNode(pre + post);
          range.insertNode(node);
          range.setStart(node, pre.length);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        } else {
          this.$el.val(pre + post);
          this.el.selectionStart = this.el.selectionEnd = pre.length;
        }

        this.$el.trigger('change')
                .trigger('textComplete:select', value);
        this.el.focus();
      },

      /**
       * Global click event handler.
       */
      onClickDocument: function (e) {
        if (e.originalEvent && !e.originalEvent.keepTextCompleteDropdown) {
          this.listView.deactivate();
        }
      },

      /**
       * Global keyup event handler.
       */
      onKeyupDocument: function (e) {
        if (this.listView.shown && e.keyCode === 27) { // ESC
          this.listView.deactivate();
          this.$el.focus();
        }
      },

      /**
       * Remove all event handlers.
       */
      destroy: function () {
        this.$el.off('.textComplete');
        $(document).off('.' + this.id);
        if (this.listView) { this.listView.destroy(); }
        this.$el.removeData('textComplete');
        this.$el = null;
      },

      // Helper methods
      // ==============

      getCaretPosition: function () {
        var caretPosition, textareaOffset;
        caretPosition = this.getCaretRelativePosition();
        textareaOffset = this.$el.offset();
        caretPosition.top += textareaOffset.top;
        caretPosition.left += textareaOffset.left;
        return caretPosition;
      },

      /**
       * Returns caret's relative coordinates from textarea's left top corner.
       */
      getCaretRelativePosition: function () {
        var properties, css, $div, $span, position, dir, scrollbar, range, node, $node;
        if (!this.el.isContentEditable) {
          // Browser native API does not provide the way to know the position of
          // caret in pixels, so that here we use a kind of hack to accomplish
          // the aim. First of all it puts a div element and completely copies
          // the textarea's style to the element, then it inserts the text and a
          // span element into the textarea.
          // Consequently, the span element's position is the thing what we want.
          properties = ['border-width', 'font-family', 'font-size', 'font-style',
            'font-variant', 'font-weight', 'height', 'letter-spacing',
            'word-spacing', 'line-height', 'text-decoration', 'text-align',
            'width', 'padding-top', 'padding-right', 'padding-bottom',
            'padding-left', 'margin-top', 'margin-right', 'margin-bottom',
            'margin-left', 'border-style', 'box-sizing'
          ];
          scrollbar = this.$el[0].scrollHeight > this.$el[0].offsetHeight;
          css = $.extend({
            position: 'absolute',
            overflow: scrollbar ? 'scroll' : 'auto',
            'white-space': 'pre-wrap',
            top: 0,
            left: -9999,
            direction: dir
          }, getStyles(this.$el, properties));

          $div = $('<div></div>').css(css).text(this.getTextFromHeadToCaret());
          $span = $('<span></span>').text('.').appendTo($div);
          this.$el.before($div);
          position = $span.position();
          position.top += $span.height() - this.$el.scrollTop();
          $div.remove();
        } else {
          range = window.getSelection().getRangeAt(0).cloneRange();
          node = document.createElement('span');
          range.insertNode(node);
          range.selectNodeContents(node);
          range.deleteContents();
          $node = $(node);
          position = $node.offset();
          position.left -= this.$el.offset().left;
          position.top += $node.height() - this.$el.offset().top;
        }
        dir = this.$el.attr('dir') || this.$el.css('direction');
        if (dir === 'rtl') { position.left -= this.listView.$el.width(); }
        return position;
      },

      getTextFromHeadToCaret: function () {
        var text, selectionEnd, range;
        if (this.el.isContentEditable) {
          if (window.getSelection) {
            // IE9+ and non-IE
            var range = window.getSelection().getRangeAt(0);
            var selection = range.cloneRange();
            selection.selectNodeContents(range.startContainer);
            text = selection.toString().substring(0, range.startOffset);
          }
        } else {
          selectionEnd = this.el.selectionEnd;
          if (typeof selectionEnd === 'number') {
            text = this.el.value.substring(0, selectionEnd);
          } else if (document.selection) {
            range = this.el.createTextRange();
            range.moveStart('character', 0);
            range.moveEnd('textedit');
            text = range.text;
          }
        }
        return text;
      },

      /**
       * Parse the value of textarea and extract search query.
       */
      extractSearchQuery: function (text) {
        var i, l, strategy, match;
        for (i = 0, l = this.strategies.length; i < l; i++) {
          strategy = this.strategies[i];
          match = text.match(strategy.match);
          if (match) { return [strategy, match[strategy.index]]; }
        }
        return [];
      },

      search: lock(function (free, searchQuery) {
        var term;
        this.strategy = searchQuery[0];
        term = searchQuery[1];
        this.strategy.search(term, this.searchCallbackFactory(free));
      })
    });

    return Completer;
  })();

  /**
   * Dropdown menu manager class.
   */
  var ListView = (function () {

    function ListView($el, completer) {
      this.data = [];
      this.$el = $el;
      this.index = 0;
      this.completer = completer;
      if (completer.option.listPosition) {
        this.setPosition = completer.option.listPosition;
      }

      this.$el.on('mousedown.textComplete', 'li.textcomplete-item',
                  $.proxy(this.onClick, this));
      this.$el.on('mouseover.textComplete', 'li.textcomplete-item',
                  $.proxy(this.onMouseover, this));
    }

    $.extend(ListView.prototype, {
      shown: false,

      render: function (data) {
        var html, i, l, index, val, str;

        html = '';

        if(this.strategy.header) {
          if ($.isFunction(this.strategy.header)) {
            str = this.strategy.header(data);
          } else {
            str = this.strategy.header;
          }
          html += '<li class="textcomplete-header">' + str + '</li>';
        }

        for (i = 0, l = data.length; i < l; i++) {
          val = data[i];
          if (include(this.data, val)) continue;
          index = this.data.length;
          this.data.push(val);
          html += '<li class="textcomplete-item" data-index="' + index + '"><a>';
          html +=   this.strategy.template(val);
          html += '</a></li>';
          if (this.data.length === this.strategy.maxCount) break;
        }

        if(this.strategy.footer) {
          if ($.isFunction(this.strategy.footer)) {
            str = this.strategy.footer(data);
          } else {
            str = this.strategy.footer;
          }
          html += '<li class="textcomplete-footer">' + str + '</li>';
        }

        this.$el.append(html);
        if (!this.data.length) {
          this.deactivate();
        } else {
          this.activateIndexedItem();
          this.setScroll();
        }
      },

      clear: function () {
        this.data = [];
        this.$el.html('');
        this.index = 0;
        return this;
      },

      activateIndexedItem: function () {
        this.$el.find('.active').removeClass('active');
        this.getActiveItem().addClass('active');
      },

      getActiveItem: function () {
        return $(this.$el.children('.textcomplete-item').get(this.index));
      },

      activate: function () {
        if (!this.shown) {
          this.$el.show();
          this.completer.$el.trigger('textComplete:show');
          this.shown = true;
        }
        return this;
      },

      deactivate: function () {
        if (this.shown) {
          this.$el.hide();
          this.completer.$el.trigger('textComplete:hide');
          this.shown = false;
          this.data = [];
          this.index = null;
        }
        return this;
      },

      setPosition: function (position) {
        var fontSize;
        // If the strategy has the 'placement' option set to 'top', move the
        // position above the element
        if(this.strategy.placement.indexOf('top') > -1) {
          // Move it to be in line with the match character
          fontSize = parseInt(this.$el.css('font-size'));
          // Overwrite the position object to set the 'bottom' property instead of the top.
          position = {
            top: 'auto',
            bottom: this.$el.parent().height() - position.top + fontSize,
            left: position.left
          };
        } else {
          // Overwrite 'bottom' property because once `placement: 'top'`
          // strategy is shown, $el keeps the property.
          position.bottom = 'auto';
        }

        if (this.strategy.placement.indexOf('absleft') > -1) {
          position.left = 0;
        }

        if (this.strategy.placement.indexOf('absright') > -1) {
          position.right = 0;
          position.left = 'auto';
        }

        this.$el.css(position);
        return this;
      },

      setScroll: function (e) {
        var $activeItem = this.getActiveItem();
        var itemTop = $activeItem.position().top;
        var itemHeight = $activeItem.outerHeight();
        var visibleHeight = this.$el.innerHeight();
        var visibleTop = this.$el.scrollTop();
        if (this.index === 0 || this.index === this.data.length - 1 || itemTop < 0) {
          this.$el.scrollTop(itemTop + visibleTop);
        } else if (itemTop + itemHeight > visibleHeight) {
          this.$el.scrollTop(itemTop + itemHeight + visibleTop - visibleHeight);
        }
      },

      select: function (index) {
        var self = this;
        this.completer.onSelect(this.data[index]);
        // Deactive at next tick to allow other event handlers to know whether
        // the dropdown has been shown or not.
        setTimeout(function () { self.deactivate(); }, 0);
      },

      onKeydown: function (e) {
        if (!this.shown) return;
        var modifiers = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey;
        if (e.keyCode === 38 || (e.ctrlKey && e.keyCode === 80)) {         // UP, or Ctrl-P
          e.preventDefault();
          if (this.index === 0) {
            this.index = this.data.length-1;
          } else {
            this.index -= 1;
          }
          this.activateIndexedItem();
          this.setScroll();
        } else if (e.keyCode === 40 || (e.ctrlKey && e.keyCode === 78)) {  // DOWN, or Ctrl-N
          e.preventDefault();
          if (this.index === this.data.length - 1) {
            this.index = 0;
          } else {
            this.index += 1;
          }
          this.activateIndexedItem();
          this.setScroll();
        } else if (!modifiers && (e.keyCode === 13 || e.keyCode === 9)) {  // ENTER or TAB
          e.preventDefault();
          this.select(parseInt(this.getActiveItem().data('index'), 10));
        }
        else if (e.keyCode === 33) {                                       // PAGEUP
          e.preventDefault();
          var target = 0;
          var threshold = this.getActiveItem().position().top - this.$el.innerHeight();
          this.$el.children().each(function (i) {
            if ($(this).position().top + $(this).outerHeight() > threshold) {
              target = i;
              return false;
            }
          });
          this.index = target;
          this.activateIndexedItem();
          this.setScroll();
        }
        else if (e.keyCode === 34) {                                       // PAGEDOWN
          e.preventDefault();
          var target = this.data.length - 1;
          var threshold = this.getActiveItem().position().top + this.$el.innerHeight();
          this.$el.children().each(function (i) {
            if ($(this).position().top > threshold) {
              target = i;
              return false;
            }
          });
          this.index = target;
          this.activateIndexedItem();
          this.setScroll();
        }
      },

      onClick: function (e) {
        var $e = $(e.target);
        e.preventDefault();
        e.originalEvent.keepTextCompleteDropdown = true;
        if (!$e.hasClass('textcomplete-item')) {
          $e = $e.parents('li.textcomplete-item');
        }
        this.select(parseInt($e.data('index'), 10));
      },

      onMouseover: function (e){
        var $e = $(e.target);
        e.preventDefault();
        if(!$e.hasClass('textcomplete-item')) {
          $e = $e.parents('li.textcomplete-item');
        }
        this.index = parseInt($e.data('index'), 10)
        this.activateIndexedItem();
      },

      destroy: function () {
        this.deactivate();
        this.$el.off('click.textComplete').remove();
        this.$el = null;
      },

      appendTo: function ($el) {
        $el.css({ position: 'relative' }).append(this.$el)
      }
    });

    return ListView;
  })();

  $.fn.textcomplete = function (strategies, option) {
    var i, l, strategy, dataKey;

    dataKey = 'textComplete';
    option || (option = {});

    if (strategies === 'destroy') {
      return this.each(function () {
        var completer = $(this).data(dataKey);
        if (completer) { completer.destroy(); }
      });
    }

    for (i = 0, l = strategies.length; i < l; i++) {
      strategy = strategies[i];
      if (!strategy.template) {
        strategy.template = identity;
      }
      if (strategy.index == null) {
        strategy.index = 2;
      }
      if (strategy.placement == null) {
        strategy.placement = '';
      }
      if (strategy.cache) {
        strategy.search = memoize(strategy.search);
      }
      strategy.maxCount || (strategy.maxCount = 10);
    }

    return this.each(function () {
      var $this, completer;
      $this = $(this);
      completer = $this.data(dataKey);
      if (!completer) {
        completer = new Completer($this, option);
        $this.data(dataKey, completer);
      }
      completer.register(strategies);
    });
  };

})(window.jQuery || window.Zepto);

var emojies = [
  '+1', '-1', '100', '1234', '8ball', 'a', 'ab', 'abc', 'abcd', 'accept',
  'aerial_tramway', 'airplane', 'alarm_clock', 'alien', 'ambulance', 'anchor',
  'angel', 'anger', 'angry', 'anguished', 'ant', 'apple', 'aquarius', 'aries',
  'arrow_backward', 'arrow_double_down', 'arrow_double_up', 'arrow_down',
  'arrow_down_small', 'arrow_forward', 'arrow_heading_down',
  'arrow_heading_up', 'arrow_left', 'arrow_lower_left', 'arrow_lower_right',
  'arrow_right', 'arrow_right_hook', 'arrow_up', 'arrow_up_down',
  'arrow_up_small', 'arrow_upper_left', 'arrow_upper_right',
  'arrows_clockwise', 'arrows_counterclockwise', 'art', 'articulated_lorry',
  'astonished', 'athletic_shoe', 'atm', 'b', 'baby', 'baby_bottle',
  'baby_chick', 'baby_symbol', 'back', 'baggage_claim', 'balloon',
  'ballot_box_with_check', 'bamboo', 'banana', 'bangbang', 'bank', 'bar_chart',
  'barber', 'baseball', 'basketball', 'bath', 'bathtub', 'battery', 'bear',
  'bee', 'beer', 'beers', 'beetle', 'beginner', 'bell', 'bento', 'bicyclist',
  'bike', 'bikini', 'bird', 'birthday', 'black_circle', 'black_joker',
  'black_large_square', 'black_medium_small_square', 'black_medium_square',
  'black_nib', 'black_small_square', 'black_square_button', 'blossom',
  'blowfish', 'blue_book', 'blue_car', 'blue_heart', 'blush', 'boar', 'boat',
  'bomb', 'book', 'bookmark', 'bookmark_tabs', 'books', 'boom', 'boot',
  'bouquet', 'bow', 'bowling', 'bowtie', 'boy', 'bread', 'bride_with_veil',
  'bridge_at_night', 'briefcase', 'broken_heart', 'bug', 'bulb',
  'bullettrain_front', 'bullettrain_side', 'bus', 'busstop',
  'bust_in_silhouette', 'busts_in_silhouette', 'cactus', 'cake', 'calendar',
  'calling', 'camel', 'camera', 'cancer', 'candy', 'capital_abcd', 'capricorn',
  'car', 'card_index', 'carousel_horse', 'cat', 'cat2', 'cd', 'chart',
  'chart_with_downwards_trend', 'chart_with_upwards_trend', 'checkered_flag',
  'cherries', 'cherry_blossom', 'chestnut', 'chicken', 'children_crossing',
  'chocolate_bar', 'christmas_tree', 'church', 'cinema', 'circus_tent',
  'city_sunrise', 'city_sunset', 'cl', 'clap', 'clapper', 'clipboard',
  'clock1', 'clock10', 'clock1030', 'clock11', 'clock1130', 'clock12',
  'clock1230', 'clock130', 'clock2', 'clock230', 'clock3', 'clock330',
  'clock4', 'clock430', 'clock5', 'clock530', 'clock6', 'clock630', 'clock7',
  'clock730', 'clock8', 'clock830', 'clock9', 'clock930', 'closed_book',
  'closed_lock_with_key', 'closed_umbrella', 'cloud', 'clubs', 'cn',
  'cocktail', 'coffee', 'cold_sweat', 'collision', 'computer', 'confetti_ball',
  'confounded', 'confused', 'congratulations', 'construction',
  'construction_worker', 'convenience_store', 'cookie', 'cool', 'cop',
  'copyright', 'corn', 'couple', 'couple_with_heart', 'couplekiss', 'cow',
  'cow2', 'credit_card', 'crescent_moon', 'crocodile', 'crossed_flags',
  'crown', 'cry', 'crying_cat_face', 'crystal_ball', 'cupid', 'curly_loop',
  'currency_exchange', 'curry', 'custard', 'customs', 'cyclone', 'dancer',
  'dancers', 'dango', 'dart', 'dash', 'date', 'de', 'deciduous_tree',
  'department_store', 'diamond_shape_with_a_dot_inside', 'diamonds',
  'disappointed', 'disappointed_relieved', 'dizzy', 'dizzy_face',
  'do_not_litter', 'dog', 'dog2', 'dollar', 'dolls', 'dolphin', 'door',
  'doughnut', 'dragon', 'dragon_face', 'dress', 'dromedary_camel', 'droplet',
  'dvd', 'e-mail', 'ear', 'ear_of_rice', 'earth_africa', 'earth_americas',
  'earth_asia', 'egg', 'eggplant', 'eight', 'eight_pointed_black_star',
  'eight_spoked_asterisk', 'electric_plug', 'elephant', 'email', 'end',
  'envelope', 'envelope_with_arrow', 'es', 'euro', 'european_castle',
  'european_post_office', 'evergreen_tree', 'exclamation', 'expressionless',
  'eyeglasses', 'eyes', 'facepunch', 'factory', 'fallen_leaf', 'family',
  'fast_forward', 'fax', 'fearful', 'feelsgood', 'feet', 'ferris_wheel',
  'file_folder', 'finnadie', 'fire', 'fire_engine', 'fireworks',
  'first_quarter_moon', 'first_quarter_moon_with_face', 'fish', 'fish_cake',
  'fishing_pole_and_fish', 'fist', 'five', 'flags', 'flashlight',
  'floppy_disk', 'flower_playing_cards', 'flushed', 'foggy', 'football',
  'footprints', 'fork_and_knife', 'fountain', 'four', 'four_leaf_clover', 'fr',
  'free', 'fried_shrimp', 'fries', 'frog', 'frowning', 'fu', 'fuelpump',
  'full_moon', 'full_moon_with_face', 'game_die', 'gb', 'gem', 'gemini',
  'ghost', 'gift', 'gift_heart', 'girl', 'globe_with_meridians', 'goat',
  'goberserk', 'godmode', 'golf', 'grapes', 'green_apple', 'green_book',
  'green_heart', 'grey_exclamation', 'grey_question', 'grimacing', 'grin',
  'grinning', 'guardsman', 'guitar', 'gun', 'haircut', 'hamburger', 'hammer',
  'hamster', 'hand', 'handbag', 'hankey', 'hash', 'hatched_chick',
  'hatching_chick', 'headphones', 'hear_no_evil', 'heart', 'heart_decoration',
  'heart_eyes', 'heart_eyes_cat', 'heartbeat', 'heartpulse', 'hearts',
  'heavy_check_mark', 'heavy_division_sign', 'heavy_dollar_sign',
  'heavy_exclamation_mark', 'heavy_minus_sign', 'heavy_multiplication_x',
  'heavy_plus_sign', 'helicopter', 'herb', 'hibiscus', 'high_brightness',
  'high_heel', 'hocho', 'honey_pot', 'honeybee', 'horse', 'horse_racing',
  'hospital', 'hotel', 'hotsprings', 'hourglass', 'hourglass_flowing_sand',
  'house', 'house_with_garden', 'hurtrealbad', 'hushed', 'ice_cream',
  'icecream', 'id', 'ideograph_advantage', 'imp', 'inbox_tray',
  'incoming_envelope', 'information_desk_person', 'information_source',
  'innocent', 'interrobang', 'iphone', 'it', 'izakaya_lantern',
  'jack_o_lantern', 'japan', 'japanese_castle', 'japanese_goblin',
  'japanese_ogre', 'jeans', 'joy', 'joy_cat', 'jp', 'key', 'keycap_ten',
  'kimono', 'kiss', 'kissing', 'kissing_cat', 'kissing_closed_eyes',
  'kissing_heart', 'kissing_smiling_eyes', 'koala', 'koko', 'kr', 'lantern',
  'large_blue_circle', 'large_blue_diamond', 'large_orange_diamond',
  'last_quarter_moon', 'last_quarter_moon_with_face', 'laughing', 'leaves',
  'ledger', 'left_luggage', 'left_right_arrow', 'leftwards_arrow_with_hook',
  'lemon', 'leo', 'leopard', 'libra', 'light_rail', 'link', 'lips', 'lipstick',
  'lock', 'lock_with_ink_pen', 'lollipop', 'loop', 'loudspeaker', 'love_hotel',
  'love_letter', 'low_brightness', 'm', 'mag', 'mag_right', 'mahjong',
  'mailbox', 'mailbox_closed', 'mailbox_with_mail', 'mailbox_with_no_mail',
  'man', 'man_with_gua_pi_mao', 'man_with_turban', 'mans_shoe', 'maple_leaf',
  'mask', 'massage', 'meat_on_bone', 'mega', 'melon', 'memo', 'mens', 'metal',
  'metro', 'microphone', 'microscope', 'milky_way', 'minibus', 'minidisc',
  'mobile_phone_off', 'money_with_wings', 'moneybag', 'monkey', 'monkey_face',
  'monorail', 'moon', 'mortar_board', 'mount_fuji', 'mountain_bicyclist',
  'mountain_cableway', 'mountain_railway', 'mouse', 'mouse2', 'movie_camera',
  'moyai', 'muscle', 'mushroom', 'musical_keyboard', 'musical_note',
  'musical_score', 'mute', 'nail_care', 'name_badge', 'neckbeard', 'necktie',
  'negative_squared_cross_mark', 'neutral_face', 'new', 'new_moon',
  'new_moon_with_face', 'newspaper', 'ng', 'nine', 'no_bell', 'no_bicycles',
  'no_entry', 'no_entry_sign', 'no_good', 'no_mobile_phones', 'no_mouth',
  'no_pedestrians', 'no_smoking', 'non-potable_water', 'nose', 'notebook',
  'notebook_with_decorative_cover', 'notes', 'nut_and_bolt', 'o', 'o2',
  'ocean', 'octocat', 'octopus', 'oden', 'office', 'ok', 'ok_hand', 'ok_woman',
  'older_man', 'older_woman', 'on', 'oncoming_automobile', 'oncoming_bus',
  'oncoming_police_car', 'oncoming_taxi', 'one', 'open_book',
  'open_file_folder', 'open_hands', 'open_mouth', 'ophiuchus', 'orange_book',
  'outbox_tray', 'ox', 'package', 'page_facing_up', 'page_with_curl', 'pager',
  'palm_tree', 'panda_face', 'paperclip', 'parking', 'part_alternation_mark',
  'partly_sunny', 'passport_control', 'paw_prints', 'peach', 'pear', 'pencil',
  'pencil2', 'penguin', 'pensive', 'performing_arts', 'persevere',
  'person_frowning', 'person_with_blond_hair', 'person_with_pouting_face',
  'phone', 'pig', 'pig2', 'pig_nose', 'pill', 'pineapple', 'pisces', 'pizza',
  'point_down', 'point_left', 'point_right', 'point_up', 'point_up_2',
  'police_car', 'poodle', 'poop', 'post_office', 'postal_horn', 'postbox',
  'potable_water', 'pouch', 'poultry_leg', 'pound', 'pouting_cat', 'pray',
  'princess', 'punch', 'purple_heart', 'purse', 'pushpin',
  'put_litter_in_its_place', 'question', 'rabbit', 'rabbit2', 'racehorse',
  'radio', 'radio_button', 'rage', 'rage1', 'rage2', 'rage3', 'rage4',
  'railway_car', 'rainbow', 'raised_hand', 'raised_hands', 'raising_hand',
  'ram', 'ramen', 'rat', 'recycle', 'red_car', 'red_circle', 'registered',
  'relaxed', 'relieved', 'repeat', 'repeat_one', 'restroom',
  'revolving_hearts', 'rewind', 'ribbon', 'rice', 'rice_ball', 'rice_cracker',
  'rice_scene', 'ring', 'rocket', 'roller_coaster', 'rooster', 'rose',
  'rotating_light', 'round_pushpin', 'rowboat', 'ru', 'rugby_football',
  'runner', 'running', 'running_shirt_with_sash', 'sa', 'sagittarius',
  'sailboat', 'sake', 'sandal', 'santa', 'satellite', 'satisfied', 'saxophone',
  'school', 'school_satchel', 'scissors', 'scorpius', 'scream', 'scream_cat',
  'scroll', 'seat', 'secret', 'see_no_evil', 'seedling', 'seven', 'shaved_ice',
  'sheep', 'shell', 'ship', 'shipit', 'shirt', 'shit', 'shoe', 'shower',
  'signal_strength', 'six', 'six_pointed_star', 'ski', 'skull', 'sleeping',
  'sleepy', 'slot_machine', 'small_blue_diamond', 'small_orange_diamond',
  'small_red_triangle', 'small_red_triangle_down', 'smile', 'smile_cat',
  'smiley', 'smiley_cat', 'smiling_imp', 'smirk', 'smirk_cat', 'smoking',
  'snail', 'snake', 'snowboarder', 'snowflake', 'snowman', 'sob', 'soccer',
  'soon', 'sos', 'sound', 'space_invader', 'spades', 'spaghetti', 'sparkle',
  'sparkler', 'sparkles', 'sparkling_heart', 'speak_no_evil', 'speaker',
  'speech_balloon', 'speedboat', 'squirrel', 'star', 'star2', 'stars',
  'station', 'statue_of_liberty', 'steam_locomotive', 'stew', 'straight_ruler',
  'strawberry', 'stuck_out_tongue', 'stuck_out_tongue_closed_eyes',
  'stuck_out_tongue_winking_eye', 'sun_with_face', 'sunflower', 'sunglasses',
  'sunny', 'sunrise', 'sunrise_over_mountains', 'surfer', 'sushi', 'suspect',
  'suspension_railway', 'sweat', 'sweat_drops', 'sweat_smile', 'sweet_potato',
  'swimmer', 'symbols', 'syringe', 'tada', 'tanabata_tree', 'tangerine',
  'taurus', 'taxi', 'tea', 'telephone', 'telephone_receiver', 'telescope',
  'tennis', 'tent', 'thought_balloon', 'three', 'thumbsdown', 'thumbsup',
  'ticket', 'tiger', 'tiger2', 'tired_face', 'tm', 'toilet', 'tokyo_tower',
  'tomato', 'tongue', 'top', 'tophat', 'tractor', 'traffic_light', 'train',
  'train2', 'tram', 'triangular_flag_on_post', 'triangular_ruler', 'trident',
  'triumph', 'trolleybus', 'trollface', 'trophy', 'tropical_drink',
  'tropical_fish', 'truck', 'trumpet', 'tshirt', 'tulip', 'turtle', 'tv',
  'twisted_rightwards_arrows', 'two', 'two_hearts', 'two_men_holding_hands',
  'two_women_holding_hands', 'u5272', 'u5408', 'u55b6', 'u6307', 'u6708',
  'u6709', 'u6e80', 'u7121', 'u7533', 'u7981', 'u7a7a', 'uk', 'umbrella',
  'unamused', 'underage', 'unlock', 'up', 'us', 'v', 'vertical_traffic_light',
  'vhs', 'vibration_mode', 'video_camera', 'video_game', 'violin', 'virgo',
  'volcano', 'vs', 'walking', 'waning_crescent_moon', 'waning_gibbous_moon',
  'warning', 'watch', 'water_buffalo', 'watermelon', 'wave', 'wavy_dash',
  'waxing_crescent_moon', 'waxing_gibbous_moon', 'wc', 'weary', 'wedding',
  'whale', 'whale2', 'wheelchair', 'white_check_mark', 'white_circle',
  'white_flower', 'white_large_square', 'white_medium_small_square',
  'white_medium_square', 'white_small_square', 'white_square_button',
  'wind_chime', 'wine_glass', 'wink', 'wolf', 'woman', 'womans_clothes',
  'womans_hat', 'womens', 'worried', 'wrench', 'x', 'yellow_heart', 'yen',
  'yum', 'zap', 'zero', 'zzz'
];

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());
/*
 * Lightbox for Bootstrap 3 by @ashleydw Modified by cj.
 * https://github.com/ashleydw/lightbox
*/


(function() {
  "use strict";
  var $, EkkoLightbox;

  $ = jQuery;

  EkkoLightbox = function(element, options) {
    var content, footer, header,
      _this = this;
    this.options = $.extend({
      title: null,
      footer: null,
      remote: null
    }, $.fn.ekkoLightbox.defaults, options || {});
    this.$element = $(element);
    this.options.remote = this.$element.attr('src');
    content = '';
    this.modal_id = this.options.modal_id ? this.options.modal_id : 'ekkoLightbox-' + Math.floor((Math.random() * 1000) + 1);
    header = '';
    footer = '';
    $(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + header + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + footer + '</div></div></div>');
    this.modal = $('#' + this.modal_id);
    this.modal_dialog = this.modal.find('.modal-dialog').first();
    this.modal_content = this.modal.find('.modal-content').first();
    this.modal_body = this.modal.find('.modal-body').first();
    this.lightbox_container = this.modal_body.find('.ekko-lightbox-container').first();
    this.lightbox_body = this.lightbox_container.find('> div:first-child').first();
    this.showLoading();
    this.modal_arrows = null;
    this.border = {
      top: parseFloat(this.modal_dialog.css('border-top-width')) + parseFloat(this.modal_content.css('border-top-width')) + parseFloat(this.modal_body.css('border-top-width')),
      right: parseFloat(this.modal_dialog.css('border-right-width')) + parseFloat(this.modal_content.css('border-right-width')) + parseFloat(this.modal_body.css('border-right-width')),
      bottom: parseFloat(this.modal_dialog.css('border-bottom-width')) + parseFloat(this.modal_content.css('border-bottom-width')) + parseFloat(this.modal_body.css('border-bottom-width')),
      left: parseFloat(this.modal_dialog.css('border-left-width')) + parseFloat(this.modal_content.css('border-left-width')) + parseFloat(this.modal_body.css('border-left-width'))
    };
    this.padding = {
      top: parseFloat(this.modal_dialog.css('padding-top')) + parseFloat(this.modal_content.css('padding-top')) + parseFloat(this.modal_body.css('padding-top')),
      right: parseFloat(this.modal_dialog.css('padding-right')) + parseFloat(this.modal_content.css('padding-right')) + parseFloat(this.modal_body.css('padding-right')),
      bottom: parseFloat(this.modal_dialog.css('padding-bottom')) + parseFloat(this.modal_content.css('padding-bottom')) + parseFloat(this.modal_body.css('padding-bottom')),
      left: parseFloat(this.modal_dialog.css('padding-left')) + parseFloat(this.modal_content.css('padding-left')) + parseFloat(this.modal_body.css('padding-left'))
    };
    this.modal.on('show.bs.modal', this.options.onShow.bind(this)).on('shown.bs.modal', function() {
      _this.modal_shown();
      return _this.options.onShown.call(_this);
    }).on('hide.bs.modal', this.options.onHide.bind(this)).on('hidden.bs.modal', function() {
      if (_this.gallery) {
        $(document).off('keydown.ekkoLightbox');
      }
      _this.modal.remove();
      return _this.options.onHidden.call(_this);
    }).modal('show', options);
    return this.modal;
  };

  EkkoLightbox.prototype = {
    modal_shown: function() {
      var video_id,
        _this = this;
        this.gallery = this.$element.data('img');
        if (this.gallery) {
          if (this.options.gallery_parent_selector === 'document.body' || this.options.gallery_parent_selector === '') {
            this.gallery_items = $(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          } else {
            this.gallery_items = this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]');
          }
          this.gallery_index = this.gallery_items.index(this.$element);
          $(document).on('keydown.ekkoLightbox', this.navigate.bind(this));
          if (this.options.directional_arrows && this.gallery_items.length > 1) {
            this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>');
            this.modal_arrows = this.lightbox_container.find('div.ekko-lightbox-nav-overlay').first();
            this.lightbox_container.find('a' + this.strip_spaces(this.options.left_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_left();
            });
            this.lightbox_container.find('a' + this.strip_spaces(this.options.right_arrow_class)).on('click', function(event) {
              event.preventDefault();
              return _this.navigate_right();
            });
          }
        }

        if (this.options.type) {

          if (this.options.type === 'image') {
            return this.preloadImage(this.options.remote, true);
          } else if (this.options.type === 'youtube' && (video_id = this.getYoutubeId(this.options.remote))) {
            return this.showYoutubeVideo(video_id);
          } else if (this.options.type === 'vimeo') {
            return this.showVimeoVideo(this.options.remote);
          } else if (this.options.type === 'instagram') {
            return this.showInstagramVideo(this.options.remote);
          } else {
            return this.error("Could not detect remote target type. Force the type using data-type=\"image|youtube|vimeo\"");
          }
        } else {
          return this.detectRemoteType(this.options.remote);
        }

    },
    strip_stops: function(str) {
      return str.replace(/\./g, '');
    },
    strip_spaces: function(str) {
      return str.replace(/\s/g, '');
    },
    isImage: function(str) {
      return str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSwf: function(str) {
      return str.match(/\.(swf)((\?|#).*)?$/i);
    },
    getYoutubeId: function(str) {
      var match;
      match = str.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
      if (match && match[2].length === 11) {
        return match[2];
      } else {
        return false;
      }
    },
    getVimeoId: function(str) {
      if (str.indexOf('vimeo') > 0) {
        return str;
      } else {
        return false;
      }
    },
    getInstagramId: function(str) {
      if (str.indexOf('instagram') > 0) {
        return str;
      } else {
        return false;
      }
    },
    navigate: function(event) {
      event = event || window.event;
      if (event.keyCode === 39 || event.keyCode === 37) {
        if (event.keyCode === 39) {
          return this.navigate_right();
        } else if (event.keyCode === 37) {
          return this.navigate_left();
        }
      }
    },
    navigate_left: function() {
      var src;
      this.showLoading();
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === 0) {
        this.gallery_index = this.gallery_items.length - 1;
      } else {
        this.gallery_index--;
      }
      this.$element = $(this.gallery_items.get(this.gallery_index));
      this.updateTitleAndFooter();
      src = this.$element.attr('src');
      return this.detectRemoteType(src, this.$element.attr('data-type'));
    },
    navigate_right: function() {
      var next, src;
      this.showLoading();
      if (this.gallery_items.length === 1) {
        return;
      }
      if (this.gallery_index === this.gallery_items.length - 1) {
        this.gallery_index = 0;
      } else {
        this.gallery_index++;
      }
      this.$element = $(this.gallery_items.get(this.gallery_index));
      src = this.$element.attr('src');
      this.updateTitleAndFooter();
      this.detectRemoteType(src, this.$element.attr('data-type'));
      if (this.gallery_index + 1 < this.gallery_items.length) {
        next = $(this.gallery_items.get(this.gallery_index + 1), false);
        src = next.attr('data-remote') || next.attr('href');
        if (next.attr('data-type') === 'image' || this.isImage(src)) {
          return this.preloadImage(src, false);
        }
      }
    },
    detectRemoteType: function(src, type) {
      var video_id;
      if (type === 'image' || this.isImage(src)) {
        this.options.type = 'image';
        return this.preloadImage(src, true);
      } else if (type === 'youtube' || (video_id = this.getYoutubeId(src))) {
        this.options.type = 'youtube';
        return this.showYoutubeVideo(video_id);
      } else if (type === 'vimeo' || (video_id = this.getVimeoId(src))) {
        this.options.type = 'vimeo';
        return this.showVimeoVideo(video_id);
      } else if (type === 'instagram' || (video_id = this.getInstagramId(src))) {
        this.options.type = 'instagram';
        return this.showInstagramVideo(video_id);
      } else {
        return this.error("Could not detect remote target type. Force the type using data-type=\"image|youtube|vimeo\"");
      }
    },
    updateTitleAndFooter: function() {
      var caption, footer, header, title;
      header = this.modal_content.find('.modal-header');
      footer = this.modal_content.find('.modal-footer');
      title = this.$element.data('title') || "";
      caption = this.$element.data('footer') || "";
      if (title || this.options.always_show_close) {
        header.css('display', '').find('.modal-title').html(title || "&nbsp;");
      } else {
        header.css('display', 'none');
      }
      if (caption) {
        footer.css('display', '').html(caption);
      } else {
        footer.css('display', 'none');
      }
      return this;
    },
    showLoading: function() {
      this.lightbox_body.html('<div class="modal-loading">Loading..</div>');
      return this;
    },
    showYoutubeVideo: function(id) {
      var aspectRatio, height, width;
      aspectRatio = 560 / 315;
      width = this.$element.data('width') || 560;
      width = this.checkDimensions(width);
      height = width / aspectRatio;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    showVimeoVideo: function(id) {
      var aspectRatio, height, width;
      aspectRatio = 500 / 281;
      width = this.$element.data('width') || 560;
      width = this.checkDimensions(width);
      height = width / aspectRatio;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    showInstagramVideo: function(id) {
      var height, width;
      width = this.$element.data('width') || 612;
      width = this.checkDimensions(width);
      height = width;
      this.resize(width);
      this.lightbox_body.html('<iframe width="' + width + '" height="' + height + '" src="' + this.addTrailingSlash(id) + 'embed/" frameborder="0" allowfullscreen></iframe>');
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none');
      }
    },
    error: function(message) {
      this.lightbox_body.html(message);
      return this;
    },
    preloadImage: function(src, onLoadShowImage) {
      var img,
        _this = this;
      img = new Image();
      if ((onLoadShowImage == null) || onLoadShowImage === true) {
        img.onload = function() {
          var image;
          image = $('<img />');
          image.attr('src', img.src);
          image.addClass('img-responsive');
          _this.lightbox_body.html(image);
          if (_this.modal_arrows) {
            _this.modal_arrows.css('display', 'block');
          }
          return _this.resize(img.width);
        };
        img.onerror = function() {
          return _this.error('Failed to load image: ' + src);
        };
      }
      img.src = src;
      return img;
    },
    resize: function(width) {
      var width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      this.modal_dialog.css('width', 'auto').css('max-width', width_total);
      this.lightbox_container.find('a').css('padding-top', function() {
        return $(this).parent().height() / 2;
      });
      return this;
    },
    checkDimensions: function(width) {
      var body_width, width_total;
      width_total = width + this.border.left + this.padding.left + this.padding.right + this.border.right;
      body_width = document.body.clientWidth;
      if (width_total > body_width) {
        width = this.modal_body.width();
      }
      return width;
    },
    close: function() {
      return this.modal.modal('hide');
    },
    addTrailingSlash: function(url) {
      if (url.substr(-1) !== '/') {
        url += '/';
      }
      return url;
    }
  };

  $.fn.ekkoLightbox = function(options) {
    return this.each(function() {
      var $this;
      $this = $(this);
      options = $.extend({
        remote: $this.attr('data-remote') || $this.attr('href'),
        gallery_parent_selector: $this.attr('data-parent'),
        type: $this.attr('data-type')
      }, options, $this.data());
      new EkkoLightbox(this, options);
      return this;
    });
  };

  $.fn.ekkoLightbox.defaults = {
    gallery_parent_selector: '*:not(.row)',
    left_arrow_class: '.glyphicon .glyphicon-chevron-left',
    right_arrow_class: '.glyphicon .glyphicon-chevron-right',
    directional_arrows: true,
    type: null,
    always_show_close: true,
    onShow: function() {},
    onShown: function() {},
    onHide: function() {},
    onHidden: function() {}
  };

}).call(this);

(function(){"use strict";function a(a){var b=this,c={db:null};if(a)for(var d in a)c[d]=a[d];return new m(function(a,d){var e=n.open(c.name,c.version);e.onerror=function(){d(e.error)},e.onupgradeneeded=function(){e.result.createObjectStore(c.storeName)},e.onsuccess=function(){c.db=e.result,b._dbInfo=c,a()}})}function b(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.get(a);g.onsuccess=function(){var a=g.result;void 0===a&&(a=null),b(a)},g.onerror=function(){d(g.error)}})["catch"](d)});return k(d,b),d}function c(a,b){var c=this,d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.openCursor();g.onsuccess=function(){var c=g.result;if(c){var d=a(c.value,c.key);void 0!==d?b(d):c["continue"]()}else b()},g.onerror=function(){d(g.error)}})["catch"](d)});return k(d,b),d}function d(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new m(function(c,e){d.ready().then(function(){var f=d._dbInfo,g=f.db.transaction(f.storeName,"readwrite"),h=g.objectStore(f.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){e(i.error)}})["catch"](e)});return k(e,c),e}function e(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readwrite"),g=f.objectStore(e.storeName),h=g["delete"](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(a){var b=a.target.error;"QuotaExceededError"===b&&d(b)}})["catch"](d)});return k(d,b),d}function f(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readwrite"),f=e.objectStore(d.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){c(g.error)}})["catch"](c)});return k(c,a),c}function g(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.count();f.onsuccess=function(){a(f.result)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function h(a,b){var c=this,d=new m(function(b,d){return 0>a?void b(null):void c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=!1,h=f.openCursor();h.onsuccess=function(){var c=h.result;return c?void(0===a?b(c.key):g?b(c.key):(g=!0,c.advance(a))):void b(null)},h.onerror=function(){d(h.error)}})["catch"](d)});return j(d,b),d}function i(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.openCursor(),g=[];f.onsuccess=function(){var b=f.result;return b?(g.push(b.key),void b["continue"]()):void a(g)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function j(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function k(a,b){b&&a.then(function(a){l(b,a)},function(a){b(a)})}function l(a,b){return a?setTimeout(function(){return a(null,b)},0):void 0}var m="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,n=n||this.indexedDB||this.webkitIndexedDB||this.mozIndexedDB||this.OIndexedDB||this.msIndexedDB;if(n){var o={_driver:"asyncStorage",_initStorage:a,iterate:c,getItem:b,setItem:d,removeItem:e,clear:f,length:g,key:h,keys:i};"function"==typeof define&&define.amd?define("asyncStorage",function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:this.asyncStorage=o}}).call(window),function(){"use strict";function a(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=c.name+"/",b._dbInfo=c,n.resolve()}function b(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=o.length-1;c>=0;c--){var d=o.key(c);0===d.indexOf(a)&&o.removeItem(d)}});return m(c,a),c}function c(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo,d=o.getItem(b.keyPrefix+a);return d&&(d=i(d)),d});return m(d,b),d}function d(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo.keyPrefix,d=b.length,e=o.length,f=0;e>f;f++){var g=o.key(f),h=o.getItem(g);if(h&&(h=i(h)),h=a(h,g.substring(d)),void 0!==h)return h}});return m(d,b),d}function e(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=o.key(a)}catch(e){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return m(d,b),d}function f(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=o.length,d=[],e=0;c>e;e++)0===o.key(e).indexOf(a.keyPrefix)&&d.push(o.key(e).substring(a.keyPrefix.length));return d});return m(c,a),c}function g(a){var b=this,c=b.keys().then(function(a){return a.length});return m(c,a),c}function h(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo;o.removeItem(b.keyPrefix+a)});return m(d,b),d}function i(a){if(a.substring(0,r)!==q)return JSON.parse(a);for(var b=a.substring(D),c=a.substring(r,D),d=new ArrayBuffer(2*b.length),e=new Uint16Array(d),f=b.length-1;f>=0;f--)e[f]=b.charCodeAt(f);switch(c){case s:return d;case t:return new Blob([d]);case u:return new Int8Array(d);case v:return new Uint8Array(d);case w:return new Uint8ClampedArray(d);case x:return new Int16Array(d);case z:return new Uint16Array(d);case y:return new Int32Array(d);case A:return new Uint32Array(d);case B:return new Float32Array(d);case C:return new Float64Array(d);default:throw new Error("Unkown type: "+c)}}function j(a){var b="",c=new Uint16Array(a);try{b=String.fromCharCode.apply(null,c)}catch(d){for(var e=0;e<c.length;e++)b+=String.fromCharCode(c[e])}return b}function k(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=q;a instanceof ArrayBuffer?(d=a,e+=s):(d=a.buffer,"[object Int8Array]"===c?e+=u:"[object Uint8Array]"===c?e+=v:"[object Uint8ClampedArray]"===c?e+=w:"[object Int16Array]"===c?e+=x:"[object Uint16Array]"===c?e+=z:"[object Int32Array]"===c?e+=y:"[object Uint32Array]"===c?e+=A:"[object Float32Array]"===c?e+=B:"[object Float64Array]"===c?e+=C:b(new Error("Failed to get type for BinaryArray"))),b(e+j(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var a=j(this.result);b(q+t+a)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){window.console.error("Couldn't convert value into a JSON string: ",a),b(g)}}function l(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return k(b,function(b,c){if(c)throw c;try{var e=d._dbInfo;o.setItem(e.keyPrefix+a,b)}catch(f){if("QuotaExceededError"===f.name||"NS_ERROR_DOM_QUOTA_REACHED"===f.name)throw f}}),c});return m(e,c),e}function m(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var n="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,o=null;try{if(!(this.localStorage&&"setItem"in this.localStorage))return;o=this.localStorage}catch(p){return}var q="__lfsc__:",r=q.length,s="arbf",t="blob",u="si08",v="ui08",w="uic8",x="si16",y="si32",z="ur16",A="ui32",B="fl32",C="fl64",D=r+s.length,E={_driver:"localStorageWrapper",_initStorage:a,iterate:d,getItem:c,setItem:l,removeItem:h,clear:b,length:g,key:e,keys:f};"function"==typeof define&&define.amd?define("localStorageWrapper",function(){return E}):"undefined"!=typeof module&&module.exports?module.exports=E:this.localStorageWrapper=E}.call(window),function(){"use strict";function a(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];return new o(function(d,e){try{c.db=p(c.name,String(c.version),c.description,c.size)}catch(f){return b.setDriver("localStorageWrapper").then(function(){return b._initStorage(a)}).then(d)["catch"](e)}c.db.transaction(function(a){a.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){b._dbInfo=c,d()},function(a,b){e(b)})})})}function b(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new o(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=k(d)),b(d)},function(a,b){d(b)})})})["catch"](d)});return m(d,b),d}function c(a,b){var c=this,d=new o(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName,[],function(c,d){for(var e=d.rows,f=e.length,g=0;f>g;g++){var h=e.item(g),i=h.value;if(i&&(i=k(i)),i=a(i,h.key),void 0!==i)return void b(i)}b()},function(a,b){d(b)})})})["catch"](d)});return m(d,b),d}function d(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new o(function(c,e){d.ready().then(function(){void 0===b&&(b=null);var f=b;l(b,function(b,g){if(g)e(g);else{var h=d._dbInfo;h.db.transaction(function(d){d.executeSql("INSERT OR REPLACE INTO "+h.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c(f)},function(a,b){e(b)})},function(a){a.code===a.QUOTA_ERR&&e(a)})}})})["catch"](e)});return m(e,c),e}function e(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new o(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})["catch"](d)});return m(d,b),d}function f(a){var b=this,c=new o(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})["catch"](c)});return m(c,a),c}function g(a){var b=this,c=new o(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})["catch"](c)});return m(c,a),c}function h(a,b){var c=this,d=new o(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})["catch"](d)});return m(d,b),d}function i(a){var b=this,c=new o(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})["catch"](c)});return m(c,a),c}function j(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=n[c[b]>>2],d+=n[(3&c[b])<<4|c[b+1]>>4],d+=n[(15&c[b+1])<<2|c[b+2]>>6],d+=n[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function k(a){if(a.substring(0,r)!==q)return JSON.parse(a);var b,c,d,e,f,g=a.substring(D),h=a.substring(r,D),i=.75*g.length,j=g.length,k=0;"="===g[g.length-1]&&(i--,"="===g[g.length-2]&&i--);var l=new ArrayBuffer(i),m=new Uint8Array(l);for(b=0;j>b;b+=4)c=n.indexOf(g[b]),d=n.indexOf(g[b+1]),e=n.indexOf(g[b+2]),f=n.indexOf(g[b+3]),m[k++]=c<<2|d>>4,m[k++]=(15&d)<<4|e>>2,m[k++]=(3&e)<<6|63&f;switch(h){case s:return l;case t:return new Blob([l]);case u:return new Int8Array(l);case v:return new Uint8Array(l);case w:return new Uint8ClampedArray(l);case x:return new Int16Array(l);case z:return new Uint16Array(l);case y:return new Int32Array(l);case A:return new Uint32Array(l);case B:return new Float32Array(l);case C:return new Float64Array(l);default:throw new Error("Unkown type: "+h)}}function l(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=q;a instanceof ArrayBuffer?(d=a,e+=s):(d=a.buffer,"[object Int8Array]"===c?e+=u:"[object Uint8Array]"===c?e+=v:"[object Uint8ClampedArray]"===c?e+=w:"[object Int16Array]"===c?e+=x:"[object Uint16Array]"===c?e+=z:"[object Int32Array]"===c?e+=y:"[object Uint32Array]"===c?e+=A:"[object Float32Array]"===c?e+=B:"[object Float64Array]"===c?e+=C:b(new Error("Failed to get type for BinaryArray"))),b(e+j(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var a=j(this.result);b(q+t+a)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){window.console.error("Couldn't convert value into a JSON string: ",a),b(null,g)}}function m(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,p=this.openDatabase,q="__lfsc__:",r=q.length,s="arbf",t="blob",u="si08",v="ui08",w="uic8",x="si16",y="si32",z="ur16",A="ui32",B="fl32",C="fl64",D=r+s.length;if(p){var E={_driver:"webSQLStorage",_initStorage:a,iterate:c,getItem:b,setItem:d,removeItem:e,clear:f,length:g,key:h,keys:i};"function"==typeof define&&define.amd?define("webSQLStorage",function(){return E}):"undefined"!=typeof module&&module.exports?module.exports=E:this.webSQLStorage=E}}.call(window),function(){"use strict";function a(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function b(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&(arguments[0][c]=n(b[c])?b[c].slice():b[c])}return arguments[0]}function c(a){for(var b in g)if(g.hasOwnProperty(b)&&g[b]===a)return!0;return!1}function d(c){this._config=b({},k,c),this._driverSet=null,this._ready=!1,this._dbInfo=null;for(var d=0;d<i.length;d++)a(this,i[d]);this.setDriver(this._config.driver)}var e="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,f={},g={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},h=[g.INDEXEDDB,g.WEBSQL,g.LOCALSTORAGE],i=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],j={DEFINE:1,EXPORT:2,WINDOW:3},k={description:"",driver:h.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},l=j.WINDOW;"function"==typeof define&&define.amd?l=j.DEFINE:"undefined"!=typeof module&&module.exports&&(l=j.EXPORT);var m=function(a){var b=b||a.indexedDB||a.webkitIndexedDB||a.mozIndexedDB||a.OIndexedDB||a.msIndexedDB,c={};return c[g.WEBSQL]=!!a.openDatabase,c[g.INDEXEDDB]=!!function(){if("undefined"!=typeof a.openDatabase&&a.navigator&&a.navigator.userAgent&&/Safari/.test(a.navigator.userAgent)&&!/Chrome/.test(a.navigator.userAgent))return!1;try{return b&&"function"==typeof b.open&&"undefined"!=typeof a.IDBKeyRange}catch(c){return!1}}(),c[g.LOCALSTORAGE]=!!function(){try{return a.localStorage&&"setItem"in a.localStorage&&a.localStorage.setItem}catch(b){return!1}}(),c}(this),n=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},o=this;d.prototype.INDEXEDDB=g.INDEXEDDB,d.prototype.LOCALSTORAGE=g.LOCALSTORAGE,d.prototype.WEBSQL=g.WEBSQL,d.prototype.config=function(a){if("object"==typeof a){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)"storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),this._config[b]=a[b];return"driver"in a&&a.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof a?this._config[a]:this._config},d.prototype.defineDriver=function(a,b,d){var g=new e(function(b,d){try{var g=a._driver,h=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),j=new Error("Custom driver name already in use: "+a._driver);if(!a._driver)return void d(h);if(c(a._driver))return void d(j);for(var k=i.concat("_initStorage"),l=0;l<k.length;l++){var n=k[l];if(!n||!a[n]||"function"!=typeof a[n])return void d(h)}var o=e.resolve(!0);"_support"in a&&(o=a._support&&"function"==typeof a._support?a._support():e.resolve(!!a._support)),o.then(function(c){m[g]=c,f[g]=a,b()},d)}catch(p){d(p)}});return g.then(b,d),g},d.prototype.driver=function(){return this._driver||null},d.prototype.ready=function(a){var b=this,c=new e(function(a,c){b._driverSet.then(function(){null===b._ready&&(b._ready=b._initStorage(b._config)),b._ready.then(a,c)})["catch"](c)});return c.then(a,a),c},d.prototype.setDriver=function(a,b,d){function g(){h._config.driver=h.driver()}var h=this;return"string"==typeof a&&(a=[a]),this._driverSet=new e(function(b,d){var g=h._getFirstSupportedDriver(a),i=new Error("No available storage method found.");if(!g)return h._driverSet=e.reject(i),void d(i);if(h._dbInfo=null,h._ready=null,c(g)){if(l===j.DEFINE)return void require([g],function(a){h._extend(a),b()});if(l===j.EXPORT){var k;switch(g){case h.INDEXEDDB:k=require("./drivers/indexeddb");break;case h.LOCALSTORAGE:k=require("./drivers/localstorage");break;case h.WEBSQL:k=require("./drivers/websql")}h._extend(k)}else h._extend(o[g])}else{if(!f[g])return h._driverSet=e.reject(i),void d(i);h._extend(f[g])}b()}),this._driverSet.then(g,g),this._driverSet.then(b,d),this._driverSet},d.prototype.supports=function(a){return!!m[a]},d.prototype._extend=function(a){b(this,a)},d.prototype._getFirstSupportedDriver=function(a){if(a&&n(a))for(var b=0;b<a.length;b++){var c=a[b];if(this.supports(c))return c}return null},d.prototype.createInstance=function(a){return new d(a)};var p=new d;l===j.DEFINE?define("localforage",function(){return p}):l===j.EXPORT?module.exports=p:this.localforage=p}.call(window);
/*! inline-attach - v1.3.2 - 2014-11-07 */
(function(e,t){"use strict";function a(){for(var e={},t=arguments.length-1;t>=0;t--){var a=arguments[t];for(var n in a)e[n]=a[n]}return e}t.inlineAttach=function(e,n){function r(e,t){return(e+"\n\n[[D]]"+t).replace(/(\n{2,})\[\[D\]\]/,"\n\n").replace(/^(\n*)/,"")}var o,i=a(e,inlineAttach.defaults),l=n,s="{filename}",d=this;this.uploadFile=function(e){var t=new FormData,a=new XMLHttpRequest,n="png";if(e.name){var r=e.name.match(/\.(.+)$/);r&&(n=r[1])}if(i.addFileBeforeExtraParameters&&t.append(i.uploadFieldName,e,"image-"+Date.now()+"."+n),"object"==typeof i.extraParams)for(var o in i.extraParams)i.extraParams.hasOwnProperty(o)&&t.append(o,i.extraParams[o]);if(i.addFileBeforeExtraParameters||t.append(i.uploadFieldName,e,"image-"+Date.now()+"."+n),a.open(i.uploadMethod,i.uploadUrl),"object"==typeof i.extraHeaders)for(var l in i.extraHeaders)i.extraHeaders.hasOwnProperty(l)&&a.setRequestHeader(l,i.extraHeaders[l]);a.onload=function(){if(200===a.status||201===a.status){var e=d.parseResponse(a);d.onUploadedFile(e)}else d.onErrorUploading()},a.send(t)},this.parseResponse=function(e){return i.customResponseParser.call(this,e)||JSON.parse(e.responseText)},this.isAllowedFile=function(e){return i.allowedTypes.indexOf(e.type)>=0},this.onUploadedFile=function(e){var t,a=i.onUploadedFile.call(this,e);if(i.dataProcessor&&(e=i.dataProcessor.call(this,e)),t=e[i.downloadFieldName],a!==!1&&t){var n=l.getValue().replace(o,i.urlText.replace(s,t));l.setValue(n)}},this.customUploadHandler=function(e){return i.customUploadHandler.call(this,e)},this.onErrorUploading=function(){var e=l.getValue().replace(o,"");l.setValue(e),i.customErrorHandler.call(this)&&t.alert(i.errorText)},this.onReceivedFile=function(e){var t=i.onReceivedFile.call(this,e);t!==!1&&(o=i.progressText,l.setValue(r(l.getValue(),o)))},this.onPaste=function(e){var t,a=!1,n=e.clipboardData;if("object"==typeof n){t=n.items||n.files||[];for(var r=0;t.length>r;r++){var o=t[r];d.isAllowedFile(o)&&(a=!0,this.onReceivedFile(o.getAsFile()),this.customUploadHandler(o.getAsFile())&&this.uploadFile(o.getAsFile()))}}return a},this.onDrop=function(e){for(var t=!1,a=0;e.dataTransfer.files.length>a;a++){var n=e.dataTransfer.files[a];d.isAllowedFile(n)&&(t=!0,this.onReceivedFile(n),this.customUploadHandler(n)&&this.uploadFile(n))}return t}},t.inlineAttach.Editor=function(e){var t=e;return{getValue:function(){return t.value},setValue:function(e){t.value=e}}},t.inlineAttach.defaults={uploadUrl:"upload_attachment.php",uploadMethod:"POST",uploadFieldName:"file",addFileBeforeExtraParameters:!0,downloadFieldName:"filename",allowedTypes:["image/jpeg","image/png","image/jpg","image/gif"],progressText:"![Uploading file...]()",urlText:"![file]({filename})",errorText:"Error uploading file",extraParams:{},extraHeaders:{},onReceivedFile:function(){},customUploadHandler:function(){return!0},customErrorHandler:function(){return!0},customResponseParser:function(){return null},onUploadedFile:function(){}},t.inlineAttach.attachToInput=function(e,t){t=t||{};var a=new inlineAttach.Editor(e),n=new inlineAttach(t,a);e.addEventListener("paste",function(e){n.onPaste(e)},!1),e.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault(),n.onDrop(e)},!1),e.addEventListener("dragenter",function(e){e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("dragover",function(e){e.stopPropagation(),e.preventDefault()},!1)}})(document,window),function(e,t,a){"use strict";function n(e){var t=a(e);return{getValue:function(){return t.val()},setValue:function(e){t.val(e)}}}n.prototype=new inlineAttach.Editor,a.fn.inlineattach=function(e){var t=a(this);return t.each(function(){var t=a(this),r=new n(t),o=new inlineAttach(e,r);t.bind({paste:function(e){o.onPaste(e.originalEvent)},drop:function(e){e.stopPropagation(),e.preventDefault(),o.onDrop(e.originalEvent)},"dragenter dragover":function(e){e.stopPropagation(),e.preventDefault()}})}),this}}(document,window,jQuery);
Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var s=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(s+16,e);return setTimeout(function(){t(s=i)},i-e)},window.cancelAnimationFrame=clearTimeout}}(),function(t){t.snowfall=function(e,i){function s(s,n,a,o){this.x=s,this.y=n,this.size=a,this.speed=o,this.step=0,this.stepSize=h(1,10)/100,i.collection&&(this.target=m[h(0,m.length-1)]);var r=null;i.image?(r=document.createElement("img"),r.src=i.image):(r=document.createElement("div"),t(r).css({background:i.flakeColor})),t(r).attr({"class":"snowfall-flakes"}).css({width:this.size,height:this.size,position:i.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:i.flakeIndex}),t(e).get(0).tagName===t(document).get(0).tagName?(t("body").append(t(r)),e=t("body")):t(e).append(t(r)),this.element=r,this.update=function(){if(this.y+=this.speed,this.y>l-(this.size+6)&&this.reset(),this.element.style.top=this.y+"px",this.element.style.left=this.x+"px",this.step+=this.stepSize,this.x+=y===!1?Math.cos(this.step):y+Math.cos(this.step),i.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&this.y<this.target.height+this.target.y){var t=this.target.element.getContext("2d"),e=this.x-this.target.x,s=this.y-this.target.y,n=this.target.colData;if(void 0!==n[parseInt(e)][parseInt(s+this.speed+this.size)]||s+this.speed+this.size>this.target.height)if(s+this.speed+this.size>this.target.height){for(;s+this.speed+this.size>this.target.height&&this.speed>0;)this.speed*=.5;t.fillStyle="#fff",void 0==n[parseInt(e)][parseInt(s+this.speed+this.size)]?(n[parseInt(e)][parseInt(s+this.speed+this.size)]=1,t.fillRect(e,s+this.speed+this.size,this.size,this.size)):(n[parseInt(e)][parseInt(s+this.speed)]=1,t.fillRect(e,s+this.speed,this.size,this.size)),this.reset()}else this.speed=1,this.stepSize=0,parseInt(e)+1<this.target.width&&void 0==n[parseInt(e)+1][parseInt(s)+1]?this.x++:parseInt(e)-1>0&&void 0==n[parseInt(e)-1][parseInt(s)+1]?this.x--:(t.fillStyle="#fff",t.fillRect(e,s,this.size,this.size),n[parseInt(e)][parseInt(s)]=1,this.reset())}(this.x+this.size>d-c||this.x<c)&&this.reset()},this.reset=function(){this.y=0,this.x=h(c,d-c),this.stepSize=h(1,10)/100,this.size=h(100*i.minSize,100*i.maxSize)/100,this.element.style.width=this.size+"px",this.element.style.height=this.size+"px",this.speed=h(i.minSpeed,i.maxSpeed)}}function n(){for(r=0;r<a.length;r+=1)a[r].update();f=requestAnimationFrame(function(){n()})}var a=[],o={flakeCount:35,flakeColor:"#ffffff",flakePosition:"absolute",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},i=t.extend(o,i),h=function(t,e){return Math.round(t+Math.random()*(e-t))};t(e).data("snowfall",this);var r=0,l=t(e).height(),d=t(e).width(),c=0,f=0;if(i.collection!==!1){var p=document.createElement("canvas");if(p.getContext&&p.getContext("2d"))for(var m=[],w=t(i.collection),g=i.collectionHeight,r=0;r<w.length;r++){var u=w[r].getBoundingClientRect(),x=t("<canvas/>",{"class":"snowfall-canvas"}),z=[];if(u.top-g>0){t("body").append(x),x.css({position:i.flakePosition,left:u.left+"px",top:u.top-g+"px"}).prop({width:u.width,height:g});for(var v=0;v<u.width;v++)z[v]=[];m.push({element:x.get(0),x:u.left,y:u.top-g,width:u.width,height:g,colData:z})}}else i.collection=!1}for(t(e).get(0).tagName===t(document).get(0).tagName&&(c=25),t(window).bind("resize",function(){l=t(e)[0].clientHeight,d=t(e)[0].offsetWidth}),r=0;r<i.flakeCount;r+=1)a.push(new s(h(c,d-c),h(0,l),h(100*i.minSize,100*i.maxSize)/100,h(i.minSpeed,i.maxSpeed)));i.round&&t(".snowfall-flakes").css({"-moz-border-radius":i.maxSize,"-webkit-border-radius":i.maxSize,"border-radius":i.maxSize}),i.shadow&&t(".snowfall-flakes").css({"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555","box-shadow":"1px 1px 1px #555"});var y=!1;i.deviceorientation&&t(window).bind("deviceorientation",function(t){y=.1*t.originalEvent.gamma}),n(),this.clear=function(){t(".snowfall-canvas").remove(),t(e).children(".snowfall-flakes").remove(),cancelAnimationFrame(f)}},t.fn.snowfall=function(e){return"object"==typeof e||void 0==e?this.each(function(){new t.snowfall(this,e)}):"string"==typeof e?this.each(function(){var e=t(this).data("snowfall");e&&e.clear()}):void 0}}(jQuery);
/*jslint browser: true, white: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/
/*global $, console, alert, FormData, FileReader*/


function noPreview() {
  $('#image-preview-div').css("display", "none");
  $('upload-button').attr('disabled', '');
}

function selectImage(e) {
  $('#file').css("color", "green");
  $('#image-preview-div').css("display", "block");
  $('#preview-img').attr('src', e.target.result);
  $('#preview-img').css('max-width', '550px');
}

$(document).ready(function (e) {

  var maxsize = 5 * 1024 * 1024; // 5 MB

  $('#max-size').html((maxsize/1024).toFixed(2));

  $('#upload-image-form').on('submit', function(e) {

    e.preventDefault();

    $('#message').empty();
    $('#loading').show();

    $.ajax({
      url: "upload-image.php",
      type: "POST",
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function(data)
      {
        $('#loading').hide();
        $('#message').html(data);
      }
    });

  });

  $('#file').change(function() {

    $('#message').empty();

    var file = this.files[0];
    var match = ["image/jpeg", "image/png", "image/jpg"];

    if ( !( (file.type == match[0]) || (file.type == match[1]) || (file.type == match[2]) ) )
    {
      noPreview();

      $('#message').html('<div class="alert alert-warning" role="alert">Unvalid image format. Allowed formats: JPG, JPEG, PNG.</div>');

      return false;
    }

    if ( file.size > maxsize )
    {
      noPreview();

      $('#message').html('<div class=\"alert alert-danger\" role=\"alert\">The size of image you are attempting to upload is ' + (file.size/1024).toFixed(2) + ' KB, maximum size allowed is ' + (maxsize/1024).toFixed(2) + ' KB</div>');

      return false;
    }

    $('#upload-button').removeAttr("disabled");

    var reader = new FileReader();
    reader.onload = selectImage;
    reader.readAsDataURL(this.files[0]);

  });

});

/*! messenger 1.5.0 */
/*
 * This file begins the output concatenated into messenger.js
 *
 * It establishes the Messenger object while preserving whatever it was before
 * (for noConflict), and making it a callable function.
 */

(function(){
    var _prevMessenger = window.Messenger;
    var localMessenger;

    localMessenger = window.Messenger = function(){
        return localMessenger._call.apply(this, arguments);
    }

    window.Messenger.noConflict = function(){
        window.Messenger = _prevMessenger;

        return localMessenger;
    }
})();

/*
 * This file contains shims for when Underscore and Backbone
 * are not included.
 *
 * Portions taken from Underscore.js and Backbone.js
 * Both of which are Copyright (c) 2009-2013 Jeremy Ashkenas, DocumentCloud
 */
window.Messenger._ = (function() {
    if (window._)
        return window._

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var push             = ArrayProto.push,
            slice            = ArrayProto.slice,
            concat           = ArrayProto.concat,
            toString         = ObjProto.toString,
            hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach      = ArrayProto.forEach,
        nativeMap          = ArrayProto.map,
        nativeReduce       = ArrayProto.reduce,
        nativeReduceRight  = ArrayProto.reduceRight,
        nativeFilter       = ArrayProto.filter,
        nativeEvery        = ArrayProto.every,
        nativeSome         = ArrayProto.some,
        nativeIndexOf      = ArrayProto.indexOf,
        nativeLastIndexOf  = ArrayProto.lastIndexOf,
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = {};

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (_.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };

    _.result = function(object, property) {
        if (object == null) return null;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };

    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
        _['is' + name] = function(obj) {
            return toString.call(obj) == '[object ' + name + ']';
        };
    });

    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] == null) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
        return keys;
    };

    _.bind = function(func, context) {
        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        var args = slice.call(arguments, 2);
        return function() {
            return func.apply(context, args.concat(slice.call(arguments)));
        };
    };

    _.isObject = function(obj) {
        return obj === Object(obj);
    };

    return _;
})();

window.Messenger.Events = (function() {
    if (window.Backbone && Backbone.Events) {
        return Backbone.Events;
    }

    var eventsShim = function() {
        var eventSplitter = /\s+/;

        var eventsApi = function(obj, action, name, rest) {
            if (!name) return true;
            if (typeof name === 'object') {
                for (var key in name) {
                    obj[action].apply(obj, [key, name[key]].concat(rest));
                }
            } else if (eventSplitter.test(name)) {
                var names = name.split(eventSplitter);
                for (var i = 0, l = names.length; i < l; i++) {
                    obj[action].apply(obj, [names[i]].concat(rest));
                }
            } else {
                return true;
            }
        };

        var triggerEvents = function(events, args) {
            var ev, i = -1, l = events.length;
            switch (args.length) {
            case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx);
            return;
            case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0]);
            return;
            case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1]);
            return;
            case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1], args[2]);
            return;
            default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
            }
        };

        var Events = {

            on: function(name, callback, context) {
                if (!(eventsApi(this, 'on', name, [callback, context]) && callback)) return this;
                this._events || (this._events = {});
                var list = this._events[name] || (this._events[name] = []);
                list.push({callback: callback, context: context, ctx: context || this});
                return this;
            },

            once: function(name, callback, context) {
                if (!(eventsApi(this, 'once', name, [callback, context]) && callback)) return this;
                var self = this;
                var once = _.once(function() {
                    self.off(name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                this.on(name, once, context);
                return this;
            },

            off: function(name, callback, context) {
                var list, ev, events, names, i, l, j, k;
                if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
                if (!name && !callback && !context) {
                    this._events = {};
                    return this;
                }

                names = name ? [name] : _.keys(this._events);
                for (i = 0, l = names.length; i < l; i++) {
                    name = names[i];
                    if (list = this._events[name]) {
                        events = [];
                        if (callback || context) {
                            for (j = 0, k = list.length; j < k; j++) {
                                ev = list[j];
                                if ((callback && callback !== ev.callback &&
                                                                 callback !== ev.callback._callback) ||
                                        (context && context !== ev.context)) {
                                    events.push(ev);
                                }
                            }
                        }
                        this._events[name] = events;
                    }
                }

                return this;
            },

            trigger: function(name) {
                if (!this._events) return this;
                var args = Array.prototype.slice.call(arguments, 1);
                if (!eventsApi(this, 'trigger', name, args)) return this;
                var events = this._events[name];
                var allEvents = this._events.all;
                if (events) triggerEvents(events, args);
                if (allEvents) triggerEvents(allEvents, arguments);
                return this;
            },

            listenTo: function(obj, name, callback) {
                var listeners = this._listeners || (this._listeners = {});
                var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
                listeners[id] = obj;
                obj.on(name, typeof name === 'object' ? this : callback, this);
                return this;
            },

            stopListening: function(obj, name, callback) {
                var listeners = this._listeners;
                if (!listeners) return;
                if (obj) {
                    obj.off(name, typeof name === 'object' ? this : callback, this);
                    if (!name && !callback) delete listeners[obj._listenerId];
                } else {
                    if (typeof name === 'object') callback = this;
                    for (var id in listeners) {
                        listeners[id].off(name, callback, this);
                    }
                    this._listeners = {};
                }
                return this;
            }
        };

        Events.bind   = Events.on;
        Events.unbind = Events.off;
        return Events;
    };
    return eventsShim();
})();

(function() {
  var $, ActionMessenger, BaseView, Events, RetryingMessage, _, _Message, _Messenger, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  _ = (_ref = window._) != null ? _ref : window.Messenger._;

  Events = (_ref1 = typeof Backbone !== "undefined" && Backbone !== null ? Backbone.Events : void 0) != null ? _ref1 : window.Messenger.Events;

  BaseView = (function() {

    function BaseView(options) {
      $.extend(this, Events);
      if (_.isObject(options)) {
        if (options.el) {
          this.setElement(options.el);
        }
        this.model = options.model;
      }
      this.initialize.apply(this, arguments);
    }

    BaseView.prototype.setElement = function(el) {
      this.$el = $(el);
      return this.el = this.$el[0];
    };

    BaseView.prototype.delegateEvents = function(events) {
      var delegateEventSplitter, eventName, key, match, method, selector, _results;
      if (!(events || (events = _.result(this, "events")))) {
        return;
      }
      this.undelegateEvents();
      delegateEventSplitter = /^(\S+)\s*(.*)$/;
      _results = [];
      for (key in events) {
        method = events[key];
        if (!_.isFunction(method)) {
          method = this[events[key]];
        }
        if (!method) {
          throw new Error("Method \"" + events[key] + "\" does not exist");
        }
        match = key.match(delegateEventSplitter);
        eventName = match[1];
        selector = match[2];
        method = _.bind(method, this);
        eventName += ".delegateEvents" + this.cid;
        if (selector === '') {
          _results.push(this.jqon(eventName, method));
        } else {
          _results.push(this.jqon(eventName, selector, method));
        }
      }
      return _results;
    };

    BaseView.prototype.jqon = function(eventName, selector, method) {
      var _ref2;
      if (this.$el.on != null) {
        return (_ref2 = this.$el).on.apply(_ref2, arguments);
      } else {
        if (!(method != null)) {
          method = selector;
          selector = void 0;
        }
        if (selector != null) {
          return this.$el.delegate(selector, eventName, method);
        } else {
          return this.$el.bind(eventName, method);
        }
      }
    };

    BaseView.prototype.jqoff = function(eventName) {
      var _ref2;
      if (this.$el.off != null) {
        return (_ref2 = this.$el).off.apply(_ref2, arguments);
      } else {
        this.$el.undelegate();
        return this.$el.unbind(eventName);
      }
    };

    BaseView.prototype.undelegateEvents = function() {
      return this.jqoff(".delegateEvents" + this.cid);
    };

    BaseView.prototype.remove = function() {
      this.undelegateEvents();
      return this.$el.remove();
    };

    return BaseView;

  })();

  _Message = (function(_super) {

    __extends(_Message, _super);

    function _Message() {
      return _Message.__super__.constructor.apply(this, arguments);
    }

    _Message.prototype.defaults = {
      hideAfter: 10,
      scroll: true,
      closeButtonText: "&times;",
      escapeText: false
    };

    _Message.prototype.initialize = function(opts) {
      if (opts == null) {
        opts = {};
      }
      this.shown = false;
      this.rendered = false;
      this.messenger = opts.messenger;
      return this.options = $.extend({}, this.options, opts, this.defaults);
    };

    _Message.prototype.show = function() {
      var wasShown;
      if (!this.rendered) {
        this.render();
      }
      this.$message.removeClass('messenger-hidden');
      wasShown = this.shown;
      this.shown = true;
      if (!wasShown) {
        return this.trigger('show');
      }
    };

    _Message.prototype.hide = function() {
      var wasShown;
      if (!this.rendered) {
        return;
      }
      this.$message.addClass('messenger-hidden');
      wasShown = this.shown;
      this.shown = false;
      if (wasShown) {
        return this.trigger('hide');
      }
    };

    _Message.prototype.cancel = function() {
      return this.hide();
    };

    _Message.prototype.update = function(opts) {
      var _ref2,
        _this = this;
      if (_.isString(opts)) {
        opts = {
          message: opts
        };
      }
      $.extend(this.options, opts);
      this.lastUpdate = new Date();
      this.rendered = false;
      this.events = (_ref2 = this.options.events) != null ? _ref2 : {};
      this.render();
      this.actionsToEvents();
      this.delegateEvents();
      this.checkClickable();
      if (this.options.hideAfter) {
        this.$message.addClass('messenger-will-hide-after');
        if (this._hideTimeout != null) {
          clearTimeout(this._hideTimeout);
        }
        this._hideTimeout = setTimeout(function() {
          return _this.hide();
        }, this.options.hideAfter * 1000);
      } else {
        this.$message.removeClass('messenger-will-hide-after');
      }
      if (this.options.hideOnNavigate) {
        this.$message.addClass('messenger-will-hide-on-navigate');
        if ((typeof Backbone !== "undefined" && Backbone !== null ? Backbone.history : void 0) != null) {
          Backbone.history.on('route', function() {
            return _this.hide();
          });
        }
      } else {
        this.$message.removeClass('messenger-will-hide-on-navigate');
      }
      return this.trigger('update', this);
    };

    _Message.prototype.scrollTo = function() {
      if (!this.options.scroll) {
        return;
      }
      return $.scrollTo(this.$el, {
        duration: 400,
        offset: {
          left: 0,
          top: -20
        }
      });
    };

    _Message.prototype.timeSinceUpdate = function() {
      if (this.lastUpdate) {
        return (new Date) - this.lastUpdate;
      } else {
        return null;
      }
    };

    _Message.prototype.actionsToEvents = function() {
      var act, name, _ref2, _results,
        _this = this;
      _ref2 = this.options.actions;
      _results = [];
      for (name in _ref2) {
        act = _ref2[name];
        _results.push(this.events["click [data-action=\"" + name + "\"] a"] = (function(act) {
          return function(e) {
            e.preventDefault();
            e.stopPropagation();
            _this.trigger("action:" + name, act, e);
            return act.action.call(_this, e, _this);
          };
        })(act));
      }
      return _results;
    };

    _Message.prototype.checkClickable = function() {
      var evt, name, _ref2, _results;
      _ref2 = this.events;
      _results = [];
      for (name in _ref2) {
        evt = _ref2[name];
        if (name === 'click') {
          _results.push(this.$message.addClass('messenger-clickable'));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    _Message.prototype.undelegateEvents = function() {
      var _ref2;
      _Message.__super__.undelegateEvents.apply(this, arguments);
      return (_ref2 = this.$message) != null ? _ref2.removeClass('messenger-clickable') : void 0;
    };

    _Message.prototype.parseActions = function() {
      var act, actions, n_act, name, _ref2, _ref3;
      actions = [];
      _ref2 = this.options.actions;
      for (name in _ref2) {
        act = _ref2[name];
        n_act = $.extend({}, act);
        n_act.name = name;
        if ((_ref3 = n_act.label) == null) {
          n_act.label = name;
        }
        actions.push(n_act);
      }
      return actions;
    };

    _Message.prototype.template = function(opts) {
      var $action, $actions, $cancel, $link, $message, $text, action, _i, _len, _ref2,
        _this = this;
      $message = $("<div class='messenger-message message alert " + opts.type + " message-" + opts.type + " alert-" + opts.type + "'>");
      if (opts.showCloseButton) {
        $cancel = $('<button type="button" class="messenger-close" data-dismiss="alert">');
        $cancel.html(opts.closeButtonText);
        $cancel.click(function() {
          var _base;
          _this.cancel();
          if (typeof (_base = _this.options).onClickClose === "function") {
            _base.onClickClose();
          }
          return true;
        });
        $message.append($cancel);
      }
      if (opts.escapeText) {
        $text = $('<div class="messenger-message-inner"></div>').text(opts.message);
      } else {
        $text = $("<div class=\"messenger-message-inner\">" + opts.message + "</div>");
      }
      $message.append($text);
      if (opts.actions.length) {
        $actions = $('<div class="messenger-actions">');
      }
      _ref2 = opts.actions;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        action = _ref2[_i];
        $action = $('<span>');
        $action.attr('data-action', "" + action.name);
        $link = $('<a>');
        $link.html(action.label);
        $action.append($('<span class="messenger-phrase">'));
        $action.append($link);
        $actions.append($action);
      }
      $message.append($actions);
      return $message;
    };

    _Message.prototype.render = function() {
      var opts;
      if (this.rendered) {
        return;
      }
      if (!this._hasSlot) {
        this.setElement(this.messenger._reserveMessageSlot(this));
        this._hasSlot = true;
      }
      opts = $.extend({}, this.options, {
        actions: this.parseActions()
      });
      this.$message = $(this.template(opts));
      this.$el.html(this.$message);
      this.shown = true;
      this.rendered = true;
      return this.trigger('render');
    };

    return _Message;

  })(BaseView);

  RetryingMessage = (function(_super) {

    __extends(RetryingMessage, _super);

    function RetryingMessage() {
      return RetryingMessage.__super__.constructor.apply(this, arguments);
    }

    RetryingMessage.prototype.initialize = function() {
      RetryingMessage.__super__.initialize.apply(this, arguments);
      return this._timers = {};
    };

    RetryingMessage.prototype.cancel = function() {
      this.clearTimers();
      this.hide();
      if ((this._actionInstance != null) && (this._actionInstance.abort != null)) {
        return this._actionInstance.abort();
      }
    };

    RetryingMessage.prototype.clearTimers = function() {
      var name, timer, _ref2, _ref3;
      _ref2 = this._timers;
      for (name in _ref2) {
        timer = _ref2[name];
        clearTimeout(timer);
      }
      this._timers = {};
      return (_ref3 = this.$message) != null ? _ref3.removeClass('messenger-retry-soon messenger-retry-later') : void 0;
    };

    RetryingMessage.prototype.render = function() {
      var action, name, _ref2, _results;
      RetryingMessage.__super__.render.apply(this, arguments);
      this.clearTimers();
      _ref2 = this.options.actions;
      _results = [];
      for (name in _ref2) {
        action = _ref2[name];
        if (action.auto) {
          _results.push(this.startCountdown(name, action));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    RetryingMessage.prototype.renderPhrase = function(action, time) {
      var phrase;
      phrase = action.phrase.replace('TIME', this.formatTime(time));
      return phrase;
    };

    RetryingMessage.prototype.formatTime = function(time) {
      var pluralize;
      pluralize = function(num, str) {
        num = Math.floor(num);
        if (num !== 1) {
          str = str + 's';
        }
        return 'in ' + num + ' ' + str;
      };
      if (Math.floor(time) === 0) {
        return 'now...';
      }
      if (time < 60) {
        return pluralize(time, 'second');
      }
      time /= 60;
      if (time < 60) {
        return pluralize(time, 'minute');
      }
      time /= 60;
      return pluralize(time, 'hour');
    };

    RetryingMessage.prototype.startCountdown = function(name, action) {
      var $phrase, remaining, tick, _ref2,
        _this = this;
      if (this._timers[name] != null) {
        return;
      }
      $phrase = this.$message.find("[data-action='" + name + "'] .messenger-phrase");
      remaining = (_ref2 = action.delay) != null ? _ref2 : 3;
      if (remaining <= 10) {
        this.$message.removeClass('messenger-retry-later');
        this.$message.addClass('messenger-retry-soon');
      } else {
        this.$message.removeClass('messenger-retry-soon');
        this.$message.addClass('messenger-retry-later');
      }
      tick = function() {
        var delta;
        $phrase.text(_this.renderPhrase(action, remaining));
        if (remaining > 0) {
          delta = Math.min(remaining, 1);
          remaining -= delta;
          return _this._timers[name] = setTimeout(tick, delta * 1000);
        } else {
          _this.$message.removeClass('messenger-retry-soon messenger-retry-later');
          delete _this._timers[name];
          return action.action();
        }
      };
      return tick();
    };

    return RetryingMessage;

  })(_Message);

  _Messenger = (function(_super) {

    __extends(_Messenger, _super);

    function _Messenger() {
      return _Messenger.__super__.constructor.apply(this, arguments);
    }

    _Messenger.prototype.tagName = 'ul';

    _Messenger.prototype.className = 'messenger';

    _Messenger.prototype.messageDefaults = {
      type: 'info'
    };

    _Messenger.prototype.initialize = function(options) {
      this.options = options != null ? options : {};
      this.history = [];
      return this.messageDefaults = $.extend({}, this.messageDefaults, this.options.messageDefaults);
    };

    _Messenger.prototype.render = function() {
      return this.updateMessageSlotClasses();
    };

    _Messenger.prototype.findById = function(id) {
      return _.filter(this.history, function(rec) {
        return rec.msg.options.id === id;
      });
    };

    _Messenger.prototype._reserveMessageSlot = function(msg) {
      var $slot, dmsg,
        _this = this;
      $slot = $('<li>');
      $slot.addClass('messenger-message-slot');
      this.$el.prepend($slot);
      this.history.push({
        msg: msg,
        $slot: $slot
      });
      this._enforceIdConstraint(msg);
      msg.on('update', function() {
        return _this._enforceIdConstraint(msg);
      });
      while (this.options.maxMessages && this.history.length > this.options.maxMessages) {
        dmsg = this.history.shift();
        dmsg.msg.remove();
        dmsg.$slot.remove();
      }
      return $slot;
    };

    _Messenger.prototype._enforceIdConstraint = function(msg) {
      var entry, _i, _len, _msg, _ref2;
      if (msg.options.id == null) {
        return;
      }
      _ref2 = this.history;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        entry = _ref2[_i];
        _msg = entry.msg;
        if ((_msg.options.id != null) && _msg.options.id === msg.options.id && msg !== _msg) {
          if (msg.options.singleton) {
            msg.hide();
            return;
          } else {
            _msg.hide();
          }
        }
      }
    };

    _Messenger.prototype.newMessage = function(opts) {
      var msg, _ref2, _ref3, _ref4,
        _this = this;
      if (opts == null) {
        opts = {};
      }
      opts.messenger = this;
      _Message = (_ref2 = (_ref3 = Messenger.themes[(_ref4 = opts.theme) != null ? _ref4 : this.options.theme]) != null ? _ref3.Message : void 0) != null ? _ref2 : RetryingMessage;
      msg = new _Message(opts);
      msg.on('show', function() {
        if (opts.scrollTo && _this.$el.css('position') !== 'fixed') {
          return msg.scrollTo();
        }
      });
      msg.on('hide show render', this.updateMessageSlotClasses, this);
      return msg;
    };

    _Messenger.prototype.updateMessageSlotClasses = function() {
      var anyShown, last, rec, willBeFirst, _i, _len, _ref2;
      willBeFirst = true;
      last = null;
      anyShown = false;
      _ref2 = this.history;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        rec = _ref2[_i];
        rec.$slot.removeClass('messenger-first messenger-last messenger-shown');
        if (rec.msg.shown && rec.msg.rendered) {
          rec.$slot.addClass('messenger-shown');
          anyShown = true;
          last = rec;
          if (willBeFirst) {
            willBeFirst = false;
            rec.$slot.addClass('messenger-first');
          }
        }
      }
      if (last != null) {
        last.$slot.addClass('messenger-last');
      }
      return this.$el["" + (anyShown ? 'remove' : 'add') + "Class"]('messenger-empty');
    };

    _Messenger.prototype.hideAll = function() {
      var rec, _i, _len, _ref2, _results;
      _ref2 = this.history;
      _results = [];
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        rec = _ref2[_i];
        _results.push(rec.msg.hide());
      }
      return _results;
    };

    _Messenger.prototype.post = function(opts) {
      var msg;
      if (_.isString(opts)) {
        opts = {
          message: opts
        };
      }
      opts = $.extend(true, {}, this.messageDefaults, opts);
      msg = this.newMessage(opts);
      msg.update(opts);
      return msg;
    };

    return _Messenger;

  })(BaseView);

  ActionMessenger = (function(_super) {

    __extends(ActionMessenger, _super);

    function ActionMessenger() {
      return ActionMessenger.__super__.constructor.apply(this, arguments);
    }

    ActionMessenger.prototype.doDefaults = {
      progressMessage: null,
      successMessage: null,
      errorMessage: "Error connecting to the server.",
      showSuccessWithoutError: true,
      retry: {
        auto: true,
        allow: true
      },
      action: $.ajax
    };

    ActionMessenger.prototype.hookBackboneAjax = function(msgr_opts) {
      var _ajax,
        _this = this;
      if (msgr_opts == null) {
        msgr_opts = {};
      }
      if (!(window.Backbone != null)) {
        throw 'Expected Backbone to be defined';
      }
      msgr_opts = _.defaults(msgr_opts, {
        id: 'BACKBONE_ACTION',
        errorMessage: false,
        successMessage: "Request completed successfully.",
        showSuccessWithoutError: false
      });
      _ajax = function(options) {
        var sync_msgr_opts;
        sync_msgr_opts = _.extend({}, msgr_opts, options.messenger);
        return _this["do"](sync_msgr_opts, options);
      };
      if (Backbone.ajax != null) {
        if (Backbone.ajax._withoutMessenger) {
          Backbone.ajax = Backbone.ajax._withoutMessenger;
        }
        if (!(msgr_opts.action != null) || msgr_opts.action === this.doDefaults.action) {
          msgr_opts.action = Backbone.ajax;
        }
        _ajax._withoutMessenger = Backbone.ajax;
        return Backbone.ajax = _ajax;
      } else {
        return Backbone.sync = _.wrap(Backbone.sync, function() {
          var args, _old_ajax, _old_sync;
          _old_sync = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          _old_ajax = $.ajax;
          $.ajax = _ajax;
          _old_sync.call.apply(_old_sync, [this].concat(__slice.call(args)));
          return $.ajax = _old_ajax;
        });
      }
    };

    ActionMessenger.prototype._getHandlerResponse = function(returnVal) {
      if (returnVal === false) {
        return false;
      }
      if (returnVal === true || !(returnVal != null)) {
        return true;
      }
      return returnVal;
    };

    ActionMessenger.prototype._parseEvents = function(events) {
      var desc, firstSpace, func, label, out, type, _ref2;
      if (events == null) {
        events = {};
      }
      out = {};
      for (label in events) {
        func = events[label];
        firstSpace = label.indexOf(' ');
        type = label.substring(0, firstSpace);
        desc = label.substring(firstSpace + 1);
        if ((_ref2 = out[type]) == null) {
          out[type] = {};
        }
        out[type][desc] = func;
      }
      return out;
    };

    ActionMessenger.prototype._normalizeResponse = function() {
      var data, elem, resp, type, xhr, _i, _len;
      resp = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      type = null;
      xhr = null;
      data = null;
      for (_i = 0, _len = resp.length; _i < _len; _i++) {
        elem = resp[_i];
        if (elem === 'success' || elem === 'timeout' || elem === 'abort') {
          type = elem;
        } else if (((elem != null ? elem.readyState : void 0) != null) && ((elem != null ? elem.responseText : void 0) != null)) {
          xhr = elem;
        } else if (_.isObject(elem)) {
          data = elem;
        }
      }
      return [type, data, xhr];
    };

    ActionMessenger.prototype.run = function() {
      var args, events, getMessageText, handler, handlers, m_opts, msg, old, opts, type, _ref2,
        _this = this;
      m_opts = arguments[0], opts = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (opts == null) {
        opts = {};
      }
      m_opts = $.extend(true, {}, this.messageDefaults, this.doDefaults, m_opts != null ? m_opts : {});
      events = this._parseEvents(m_opts.events);
      getMessageText = function(type, xhr) {
        var message;
        message = m_opts[type + 'Message'];
        if (_.isFunction(message)) {
          return message.call(_this, type, xhr);
        }
        return message;
      };
      msg = (_ref2 = m_opts.messageInstance) != null ? _ref2 : this.newMessage(m_opts);
      if (m_opts.id != null) {
        msg.options.id = m_opts.id;
      }
      if (m_opts.progressMessage != null) {
        msg.update($.extend({}, m_opts, {
          message: getMessageText('progress', null),
          type: 'info'
        }));
      }
      handlers = {};
      _.each(['error', 'success'], function(type) {
        var originalHandler;
        originalHandler = opts[type];
        return handlers[type] = function() {
          var data, defaultOpts, handlerResp, msgOpts, reason, resp, responseOpts, xhr, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
          resp = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _ref3 = _this._normalizeResponse.apply(_this, resp), reason = _ref3[0], data = _ref3[1], xhr = _ref3[2];
          if (type === 'success' && !(msg.errorCount != null) && m_opts.showSuccessWithoutError === false) {
            m_opts['successMessage'] = null;
          }
          if (type === 'error') {
            if ((_ref4 = m_opts.errorCount) == null) {
              m_opts.errorCount = 0;
            }
            m_opts.errorCount += 1;
          }
          handlerResp = m_opts.returnsPromise ? resp[0] : typeof originalHandler === "function" ? originalHandler.apply(null, resp) : void 0;
          responseOpts = _this._getHandlerResponse(handlerResp);
          if (_.isString(responseOpts)) {
            responseOpts = {
              message: responseOpts
            };
          }
          if (type === 'error' && ((xhr != null ? xhr.status : void 0) === 0 || reason === 'abort')) {
            msg.hide();
            return;
          }
          if (type === 'error' && ((m_opts.ignoredErrorCodes != null) && (_ref5 = xhr != null ? xhr.status : void 0, __indexOf.call(m_opts.ignoredErrorCodes, _ref5) >= 0))) {
            msg.hide();
            return;
          }
          defaultOpts = {
            message: getMessageText(type, xhr),
            type: type,
            events: (_ref6 = events[type]) != null ? _ref6 : {},
            hideOnNavigate: type === 'success'
          };
          msgOpts = $.extend({}, m_opts, defaultOpts, responseOpts);
          if (typeof ((_ref7 = msgOpts.retry) != null ? _ref7.allow : void 0) === 'number') {
            msgOpts.retry.allow--;
          }
          if (type === 'error' && (xhr != null ? xhr.status : void 0) >= 500 && ((_ref8 = msgOpts.retry) != null ? _ref8.allow : void 0)) {
            if (msgOpts.retry.delay == null) {
              if (msgOpts.errorCount < 4) {
                msgOpts.retry.delay = 10;
              } else {
                msgOpts.retry.delay = 5 * 60;
              }
            }
            if (msgOpts.hideAfter) {
              if ((_ref9 = msgOpts._hideAfter) == null) {
                msgOpts._hideAfter = msgOpts.hideAfter;
              }
              msgOpts.hideAfter = msgOpts._hideAfter + msgOpts.retry.delay;
            }
            msgOpts._retryActions = true;
            msgOpts.actions = {
              retry: {
                label: 'retry now',
                phrase: 'Retrying TIME',
                auto: msgOpts.retry.auto,
                delay: msgOpts.retry.delay,
                action: function() {
                  msgOpts.messageInstance = msg;
                  return setTimeout(function() {
                    return _this["do"].apply(_this, [msgOpts, opts].concat(__slice.call(args)));
                  }, 0);
                }
              },
              cancel: {
                action: function() {
                  return msg.cancel();
                }
              }
            };
          } else if (msgOpts._retryActions) {
            delete msgOpts.actions.retry;
            delete msgOpts.actions.cancel;
            delete m_opts._retryActions;
          }
          msg.update(msgOpts);
          if (responseOpts && msgOpts.message) {
            Messenger(_.extend({}, _this.options, {
              instance: _this
            }));
            return msg.show();
          } else {
            return msg.hide();
          }
        };
      });
      if (!m_opts.returnsPromise) {
        for (type in handlers) {
          handler = handlers[type];
          old = opts[type];
          opts[type] = handler;
        }
      }
      msg._actionInstance = m_opts.action.apply(m_opts, [opts].concat(__slice.call(args)));
      if (m_opts.returnsPromise) {
        msg._actionInstance.then(handlers.success, handlers.error);
      }
      return msg;
    };

    ActionMessenger.prototype["do"] = ActionMessenger.prototype.run;

    ActionMessenger.prototype.ajax = function() {
      var args, m_opts;
      m_opts = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      m_opts.action = $.ajax;
      return this.run.apply(this, [m_opts].concat(__slice.call(args)));
    };

    ActionMessenger.prototype.expectPromise = function(action, m_opts) {
      m_opts = _.extend({}, m_opts, {
        action: action,
        returnsPromise: true
      });
      return this.run(m_opts);
    };

    ActionMessenger.prototype.error = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'error';
      return this.post(m_opts);
    };

    ActionMessenger.prototype.info = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'info';
      return this.post(m_opts);
    };

    ActionMessenger.prototype.success = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'success';
      return this.post(m_opts);
    };

    return ActionMessenger;

  })(_Messenger);

  $.fn.messenger = function() {
    var $el, args, func, instance, opts, _ref2, _ref3, _ref4;
    func = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (func == null) {
      func = {};
    }
    $el = this;
    if (!(func != null) || !_.isString(func)) {
      opts = func;
      if (!($el.data('messenger') != null)) {
        _Messenger = (_ref2 = (_ref3 = Messenger.themes[opts.theme]) != null ? _ref3.Messenger : void 0) != null ? _ref2 : ActionMessenger;
        $el.data('messenger', instance = new _Messenger($.extend({
          el: $el
        }, opts)));
        instance.render();
      }
      return $el.data('messenger');
    } else {
      return (_ref4 = $el.data('messenger'))[func].apply(_ref4, args);
    }
  };

  window.Messenger._call = function(opts) {
    var $el, $parent, choosen_loc, chosen_loc, classes, defaultOpts, inst, loc, locations, _i, _len;
    defaultOpts = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'future',
      maxMessages: 9,
      parentLocations: ['body']
    };
    opts = $.extend(defaultOpts, $._messengerDefaults, Messenger.options, opts);
    if (opts.theme != null) {
      opts.extraClasses += " messenger-theme-" + opts.theme;
    }
    inst = opts.instance || Messenger.instance;
    if (opts.instance == null) {
      locations = opts.parentLocations;
      $parent = null;
      choosen_loc = null;
      for (_i = 0, _len = locations.length; _i < _len; _i++) {
        loc = locations[_i];
        $parent = $(loc);
        if ($parent.length) {
          chosen_loc = loc;
          break;
        }
      }
      if (!inst) {
        $el = $('<ul>');
        $parent.prepend($el);
        inst = $el.messenger(opts);
        inst._location = chosen_loc;
        Messenger.instance = inst;
      } else if (!$(inst._location).is($(chosen_loc))) {
        inst.$el.detach();
        $parent.prepend(inst.$el);
      }
    }
    if (inst._addedClasses != null) {
      inst.$el.removeClass(inst._addedClasses);
    }
    inst.$el.addClass(classes = "" + inst.className + " " + opts.extraClasses);
    inst._addedClasses = classes;
    return inst;
  };

  $.extend(Messenger, {
    Message: RetryingMessage,
    Messenger: ActionMessenger,
    themes: (_ref2 = Messenger.themes) != null ? _ref2 : {}
  });

  $.globalMessenger = window.Messenger = Messenger;

}).call(this);

// flat theme
(function() {
  var $, FlatMessage, spinner_template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = jQuery;

  spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

  FlatMessage = (function(_super) {

    __extends(FlatMessage, _super);

    function FlatMessage() {
      return FlatMessage.__super__.constructor.apply(this, arguments);
    }

    FlatMessage.prototype.template = function(opts) {
      var $message;
      $message = FlatMessage.__super__.template.apply(this, arguments);
      $message.append($(spinner_template));
      return $message;
    };

    return FlatMessage;

  })(window.Messenger.Message);

  window.Messenger.themes.flat = {
    Message: FlatMessage
  };

}).call(this);

/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=t.UIkit?Object.create(t.UIkit):void 0;if(n.version="2.27.1",n.noConflict=function(){return o&&(t.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),n.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.throttle=function(t,i){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},i))}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(d){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),c+o.height()>=a&&c-e.topoffset<=a+n.$win.height()&&l+o.width()>=s&&l-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk-animation-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if("string"!=i.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.focus=function(t,e){t=i(t);var n,o=t.find("[autofocus]:first");return o.length?o.focus():(o=t.find(":input"+(e&&","+e||"")).first(),o.length?o.focus():(t.attr("tabindex")||(n=1e3,t.attr("tabindex",n)),t[0].focus(),n&&t.attr("tabindex",""),t))},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",t.UIkit=n,n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(){i.apply(t,[e]),e.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(i){i(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var t=function(){n.$body=n.$("body"),n.trigger("beforeready.uk.dom"),n.component.bootComponents();var t=requestAnimationFrame(function(){var i={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},e=function(){var o=window.pageXOffset,s=window.pageYOffset;(i.x!=o||i.y!=s)&&(i.dir.x=o!=i.x?o>i.x?1:-1:0,i.dir.y=s!=i.y?s>i.y?1:-1:0,i.x=o,i.y=s,n.$doc.trigger("scrolling.uk.document",[{dir:{x:i.dir.x,y:i.dir.y},x:o,y:s}])),cancelAnimationFrame(t),t=requestAnimationFrame(e)};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",e),(i.x||i.y)&&e(),e}());if(n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0,n.support.mutationobserver){var e=n.Utils.debounce(function(){requestAnimationFrame(function(){n.init(document.body)})},10);new n.support.mutationobserver(function(t){var i=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var e,n=0;n<t.addedNodes.length;++n)if(e=t.addedNodes[n],e.outerHTML&&-1!==e.outerHTML.indexOf("data-uk-"))return(i=!0)&&!1;return!0}),i&&e()}).observe(document.body,{childList:!0,subtree:!0})}};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(t),t}()),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",l=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",l,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(l),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,d.last&&(void 0!==d.el&&d.el.trigger("longTap"),d={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,d={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,d={},h=750;t(function(){var p,f,m,g=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(m="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],p=Date.now(),f=p-(d.last||p),d.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),d.x1=m.pageX,d.y1=m.pageY,f>0&&250>=f&&(d.isDoubleTap=!0),d.last=p,c=setTimeout(e,h),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),d.x2=m.pageX,d.y2=m.pageY,g+=Math.abs(d.x1-d.x2),v+=Math.abs(d.y1-d.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2))),d={}},0):"last"in d&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,void 0!==d.el&&d.el.trigger(i),d.isDoubleTap?(void 0!==d.el&&d.el.trigger("doubleTap"),d={}):a=setTimeout(function(){a=null,void 0!==d.el&&d.el.trigger("singleTap"),d={}},250)},0):d={},g=v=0))}).on("touchcancel MSPointerCancel pointercancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.process()}),i.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each(function(i,o){o=t.$(this),"none"!=this.style.display&&(i=o.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=n===!1?i:Math.min(n,i))}),t.$(e[n]).addClass(this.options.rowfirst),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each(function(i,e,o,s){s=t.$(this),"none"!=s.css("display")&&(i=s.offset(),e=s.outerHeight(),o=i.top+e,s.data({ukMarginPos:o,ukMarginTop:i.top}),(n===!1||i.top<n.top)&&(n={top:i.top,left:i.left,pos:o}))}).each(function(i){i=t.$(this),"none"!=i.css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var o=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){o.resolve(t.$(i).find("svg"))}),i[n]=o.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({}),t.Utils.getCssVar=function(t){var i,e=document.documentElement,n=e.appendChild(document.createElement("div"));n.classList.add("var-"+t);try{i=JSON.parse(i=getComputedStyle(n,":before").content.replace(/^["'](.*)["']$/,"$1"))}catch(o){i=void 0}return e.removeChild(n),i}}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.data("ukScrollspyCls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&(clearTimeout(n.data("scrollspy-idle")),n.data("scrollspy-idle",!1)),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){"#"!==this.getAttribute("href").trim()&&n.push(this.getAttribute("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),d=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top-c.options.topoffset>=u)return e[t]}();if(!d)return;c.options.closest?(o.blur().closest(l).removeClass(r),s=o.filter("a[href='#"+d.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+d.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[d,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.getToggles(),this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.not("[aria-hidden]").each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1,o={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit focus","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(o.options.dropdownSelector).length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),this.dropdown.attr("aria-hidden","true"),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var n=t.$(e.target);n.parents(i.options.dropdownSelector).length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);return i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i?((!i.dropdown.find(e.target).length||o.is(".uk-dropdown-close")||o.parents(".uk-dropdown-close").length)&&i.hide(),void 0):((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show(),void 0)})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.dropdown.attr("aria-hidden","false"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),t.Utils.focus(this.dropdown),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.dropdown.attr("aria-hidden","true"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({"top-left":"",left:"","margin-left":"","margin-right":""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,n=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),s=this.options.offset,a=this.dropdown,r=(a.show().offset()||{left:0,top:0},a.outerWidth()),l=a.outerHeight(),c=this.boundary.width(),u=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),d={"bottom-left":{top:0+n.height+s,left:0},"bottom-right":{top:0+n.height+s,left:0+n.width-r},"bottom-center":{top:0+n.height+s,left:0+n.width/2-r/2},"top-left":{top:0-l-s,left:0},"top-right":{top:0-l-s,left:0+n.width-r},"top-center":{top:0-l-s,left:0+n.width/2-r/2},"left-top":{top:0,left:0-r-s},"left-bottom":{top:0+n.height-l,left:0-r-s},"left-center":{top:0+n.height/2-l/2,left:0-r-s},"right-top":{top:0,left:0+n.width+s},"right-bottom":{top:0+n.height-l,left:0+n.width+s},"right-center":{top:0+n.height/2-l/2,left:0+n.width+s}},h={};
if(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"],this.justified&&this.justified.length)i(a.css({left:0}),this.justified,c);else if(this.options.preventflip!==!0){var p;switch(this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)){case"x":"x"!==this.options.preventflip&&(p=o.x[u]||"right-top");break;case"y":"y"!==this.options.preventflip&&(p=o.y[u]||"top-left");break;case"xy":this.options.preventflip||(p=o.xy[u]||"right-bottom")}p&&(e=p.split("-"),h=d[p]?d[p]:d["bottom-left"],this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)&&(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"]))}r>c&&(a.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),a.css(h).css("display","").addClass("uk-dropdown-"+e[0])}},checkBoundary:function(i,e,n,o,s){var a="";return(0>i||i-t.$win.scrollLeft()+n>s)&&(a+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+o>window.innerHeight)&&(a+="y"),a}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block","margin-left":"","margin-right":""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.element.is(":visible")&&e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.$win.on("resize orientationchange",t.Utils.debounce(function(){t.$(".uk-modal.uk-open").each(function(){return t.$(this).data("modal")&&t.$(this).data("modal").resize()})},150)),t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()}),t.domObserve(this.element,function(){i.resize()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var i=this;if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(!0),this.options.modal&&(n=this),this.active=!0,o++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){i.hasTransitioned=!0,t.Utils.focus(i.dialog,"a[href]")}).addClass("uk-open")):(this.element.addClass("uk-open"),t.Utils.focus(this.dialog,"a[href]")),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(t){if(this.isActive()||t){var i=e.width();if(this.scrollbarwidth=window.innerWidth-i,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var n=this.dialog.outerHeight(),o=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);n+o<window.innerHeight?this.dialog.css({top:window.innerHeight/2-n/2-o}):this.dialog.css({top:""})}}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css({"max-height":o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,o>0?o--:o=0,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.element.hasClass("uk-open")}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var s=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():n(),s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){s.element.find(".js-modal-confirm").focus()},50)}),s.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.update(!0),t.domObserve(this.element,function(){i.element.find(this.options.lists).not("[role]").length&&i.update()})},update:function(){var i=this;this.find(this.options.lists).each(function(){var e=t.$(this).attr("role","menu"),n=e.closest("li"),o=n.hasClass("uk-active");n.data("list-container")||(e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden"))),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n,o){if(n=t.$(n),n.length){o=t.$.extend({mode:"push"},o);var s=t.$("body"),a=n.find(".uk-offcanvas-bar:first"),r="right"==t.langdirection,l=a.hasClass("uk-offcanvas-bar-flip")?-1:1,c=l*(r?-1:1),u=window.innerWidth-s.width();i={x:window.pageXOffset,y:window.pageYOffset},a.attr("mode",o.mode),n.addClass("uk-active"),s.css({width:window.innerWidth-u,height:window.innerHeight}).addClass("uk-offcanvas-page"),("push"==o.mode||"reveal"==o.mode)&&s.css(r?"margin-right":"margin-left",(r?-1:1)*a.outerWidth()*c),"reveal"==o.mode&&a.css("clip","rect(0, "+a.outerWidth()+"px, 100vh, 0)"),e.css("margin-top",-1*i.y).width(),a.addClass("uk-offcanvas-bar-show"),this._initElement(n),a.trigger("show.uk.offcanvas",[n,a]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&("none"==r.attr("mode")&&(n=!0),t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),"reveal"==r.attr("mode")&&r.css("clip",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click","a[href*='#']",function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(i[0].hash)}catch(o){n=""}n.length||(n=t.$('[name="'+i[0].hash.replace("#","")+'"]')),n.length&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1,mode:"push"},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target,i.options)})}}),t.offcanvas=n}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),t.$body.css("overflow-x","hidden"),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){setTimeout(function(){n.removeClass(""+a).css({opacity:"",display:""})},0),s.resolve(),t.$body.css("overflow-x",""),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;this.on("click.uk.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect&&(this.connect=t.$(this.options.connect),this.connect.length&&(this.connect.on("click.uk.switcher","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}),this.update()))},update:function(){this.connect.children().removeClass("uk-active").attr("aria-hidden","true");var t=this.find(this.options.toggle),i=t.filter(".uk-active");if(i.length)this.show(i,!1);else{if(this.options.active===!1)return;i=t.eq(this.options.active),this.show(i.length?i:t.eq(0),!1)}t.not(i).attr("aria-expanded","false"),i.attr("aria-expanded","true")},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200,swiping:!0},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uk.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uk.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration,swiping:this.options.swiping})),t.dropdown(this.responsivetab,{mode:"click",preventflip:"y"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=e[0].outerHTML.replace("<a ",'<a data-index="'+r+'" '),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-htmleditor",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e=[];return t.component("htmleditor",{defaults:{iframe:!1,mode:"split",markdown:!1,autocomplete:!0,enablescripts:!1,height:500,maxsplitsize:1e3,codemirror:{mode:"htmlmixed",lineWrapping:!0,dragDrop:!1,autoCloseTags:!0,matchTags:!0,autoCloseBrackets:!0,matchBrackets:!0,indentUnit:4,indentWithTabs:!1,tabSize:4,hintOptions:{completionSingle:!1}},toolbar:["bold","italic","strike","link","image","blockquote","listUl","listOl"],lblPreview:"Preview",lblCodeview:"HTML",lblMarkedview:"Markdown"},boot:function(){t.ready(function(e){t.$("textarea[data-uk-htmleditor]",e).each(function(){var e=t.$(this);e.data("htmleditor")||t.htmleditor(e,t.Utils.options(e.attr("data-uk-htmleditor")))})})},init:function(){var i=this,o=t.components.htmleditor.template;this.CodeMirror=this.options.CodeMirror||CodeMirror,this.buttons={},o=o.replace(/\{:lblPreview}/g,this.options.lblPreview),o=o.replace(/\{:lblCodeview}/g,this.options.lblCodeview),this.htmleditor=t.$(o),this.content=this.htmleditor.find(".uk-htmleditor-content"),this.toolbar=this.htmleditor.find(".uk-htmleditor-toolbar"),this.preview=this.htmleditor.find(".uk-htmleditor-preview").children().eq(0),this.code=this.htmleditor.find(".uk-htmleditor-code"),this.element.before(this.htmleditor).appendTo(this.code),this.editor=this.CodeMirror.fromTextArea(this.element[0],this.options.codemirror),this.editor.htmleditor=this,this.editor.on("change",t.Utils.debounce(function(){i.render()},150)),this.editor.on("change",function(){i.editor.save(),i.element.trigger("input")}),this.code.find(".CodeMirror").css("height",this.options.height),this.options.iframe?(this.iframe=t.$('<iframe class="uk-htmleditor-iframe" frameborder="0" scrolling="auto" height="100" width="100%"></iframe>'),this.preview.append(this.iframe),this.iframe[0].contentWindow.document.open(),this.iframe[0].contentWindow.document.close(),this.preview.container=t.$(this.iframe[0].contentWindow.document).find("body"),"string"==typeof this.options.iframe&&this.preview.container.parent().append('<link rel="stylesheet" href="'+this.options.iframe+'">')):this.preview.container=this.preview,t.$win.on("resize load",t.Utils.debounce(function(){i.fit()},200));var n=this.iframe?this.preview.container:i.preview.parent(),r=this.code.find(".CodeMirror-sizer"),l=this.code.find(".CodeMirror-scroll").on("scroll",t.Utils.debounce(function(){if("tab"!=i.htmleditor.attr("data-mode")){var t=r.height()-l.height(),e=n[0].scrollHeight-(i.iframe?i.iframe.height():n.height()),o=e/t,s=l.scrollTop()*o;n.scrollTop(s)}},10));this.htmleditor.on("click",".uk-htmleditor-button-code, .uk-htmleditor-button-preview",function(e){e.preventDefault(),"tab"==i.htmleditor.attr("data-mode")&&(i.htmleditor.find(".uk-htmleditor-button-code, .uk-htmleditor-button-preview").removeClass("uk-active").filter(this).addClass("uk-active"),i.activetab=t.$(this).hasClass("uk-htmleditor-button-code")?"code":"preview",i.htmleditor.attr("data-active-tab",i.activetab),i.editor.refresh())}),this.htmleditor.on("click","a[data-htmleditor-button]",function(){i.code.is(":visible")&&i.trigger("action."+t.$(this).data("htmleditor-button"),[i.editor])}),this.preview.parent().css("height",this.code.height()),this.options.autocomplete&&this.CodeMirror.showHint&&this.CodeMirror.hint&&this.CodeMirror.hint.html&&this.editor.on("inputRead",t.Utils.debounce(function(){var t=i.editor.getDoc(),e=t.getCursor(),o=i.CodeMirror.innerMode(i.editor.getMode(),i.editor.getTokenAt(e).state).mode.name;if("xml"==o){var n=i.editor.getCursor(),r=i.editor.getTokenAt(n);("<"==r.string.charAt(0)||"attribute"==r.type)&&i.CodeMirror.showHint(i.editor,i.CodeMirror.hint.html,{completeSingle:!1})}},100)),this.debouncedRedraw=t.Utils.debounce(function(){i.redraw()},5),this.on("init.uk.component",function(){i.debouncedRedraw()}),this.element.attr("data-uk-check-display",1).on("display.uk.check",function(){this.htmleditor.is(":visible")&&this.fit()}.bind(this)),e.push(this)},addButton:function(t,e){this.buttons[t]=e},addButtons:function(e){t.$.extend(this.buttons,e)},replaceInPreview:function(t,e){function i(t){var e=o.getValue().substring(0,t).split("\n");return{line:e.length-1,ch:e[e.length-1].length}}var o=this.editor,n=[],r=o.getValue(),l=-1,s=0;return this.currentvalue=this.currentvalue.replace(t,function(){l=r.indexOf(arguments[0],++l);var t={matches:arguments,from:i(l),to:i(l+arguments[0].length),replace:function(e){o.replaceRange(e,t.from,t.to)},inRange:function(e){return e.line===t.from.line&&e.line===t.to.line?e.ch>=t.from.ch&&e.ch<t.to.ch:e.line===t.from.line&&e.ch>=t.from.ch||e.line>t.from.line&&e.line<t.to.line||e.line===t.to.line&&e.ch<t.to.ch}},a="string"==typeof e?e:e(t,s);return a||""===a?(s++,n.push(t),a):arguments[0]}),n},_buildtoolbar:function(){if(this.options.toolbar&&this.options.toolbar.length){var t=this,e=[];this.toolbar.empty(),this.options.toolbar.forEach(function(i){if(t.buttons[i]){var o=t.buttons[i].title?t.buttons[i].title:i;e.push('<li><a data-htmleditor-button="'+i+'" title="'+o+'" data-uk-tooltip>'+t.buttons[i].label+"</a></li>")}}),this.toolbar.html(e.join("\n"))}},fit:function(){var t=this.options.mode;"split"==t&&this.htmleditor.width()<this.options.maxsplitsize&&(t="tab"),"tab"==t&&(this.activetab||(this.activetab="code",this.htmleditor.attr("data-active-tab",this.activetab)),this.htmleditor.find(".uk-htmleditor-button-code, .uk-htmleditor-button-preview").removeClass("uk-active").filter("code"==this.activetab?".uk-htmleditor-button-code":".uk-htmleditor-button-preview").addClass("uk-active")),this.editor.refresh(),this.preview.parent().css("height",this.code.height()),this.htmleditor.attr("data-mode",t)},redraw:function(){this._buildtoolbar(),this.render(),this.fit()},getMode:function(){return this.editor.getOption("mode")},getCursorMode:function(){var t={mode:"html"};return this.trigger("cursorMode",[t]),t.mode},render:function(){return this.currentvalue=this.editor.getValue(),this.options.enablescripts||(this.currentvalue=this.currentvalue.replace(/<(script|style)\b[^<]*(?:(?!<\/(script|style)>)<[^<]*)*<\/(script|style)>/gim,"")),this.currentvalue?(this.trigger("render",[this]),this.trigger("renderLate",[this]),this.preview.container.html(this.currentvalue),void 0):(this.element.val(""),this.preview.container.html(""),void 0)},addShortcut:function(e,i){var o={};return t.$.isArray(e)||(e=[e]),e.forEach(function(t){o[t]=i}),this.editor.addKeyMap(o),o},addShortcutAction:function(t,e){var i=this;this.addShortcut(e,function(){i.element.trigger("action."+t,[i.editor])})},replaceSelection:function(t){var e=this.editor.getSelection();if(!e.length){for(var i=this.editor.getCursor(),o=this.editor.getLine(i.line),n=i.ch,r=n;r<o.length&&/[\w$]+/.test(o.charAt(r));)++r;for(;n&&/[\w$]+/.test(o.charAt(n-1));)--n;var l=n!=r&&o.slice(n,r);l&&(this.editor.setSelection({line:i.line,ch:n},{line:i.line,ch:r}),e=l)}var s=t.replace("$1",e);this.editor.replaceSelection(s,"end"),this.editor.focus()},replaceLine:function(t){var e=this.editor.getDoc().getCursor(),i=this.editor.getLine(e.line),o=t.replace("$1",i);this.editor.replaceRange(o,{line:e.line,ch:0},{line:e.line,ch:i.length}),this.editor.setCursor({line:e.line,ch:o.length}),this.editor.focus()},save:function(){this.editor.save()}}),t.components.htmleditor.template=['<div class="uk-htmleditor uk-clearfix" data-mode="split">','<div class="uk-htmleditor-navbar">','<ul class="uk-htmleditor-navbar-nav uk-htmleditor-toolbar"></ul>','<div class="uk-htmleditor-navbar-flip">','<ul class="uk-htmleditor-navbar-nav">','<li class="uk-htmleditor-button-code"><a>{:lblCodeview}</a></li>','<li class="uk-htmleditor-button-preview"><a>{:lblPreview}</a></li>','<li><a data-htmleditor-button="fullscreen"><i class="uk-icon-expand"></i></a></li>',"</ul>","</div>","</div>",'<div class="uk-htmleditor-content">','<div class="uk-htmleditor-code"></div>','<div class="uk-htmleditor-preview"><div></div></div>',"</div>","</div>"].join(""),t.plugin("htmleditor","base",{init:function(e){function i(t,i,o){e.on("action."+t,function(){"html"==e.getCursorMode()&&e["replaceLine"==o?"replaceLine":"replaceSelection"](i)})}e.addButtons({fullscreen:{title:"Fullscreen",label:'<i class="uk-icon-expand"></i>'},bold:{title:"Bold",label:'<i class="uk-icon-bold"></i>'},italic:{title:"Italic",label:'<i class="uk-icon-italic"></i>'},strike:{title:"Strikethrough",label:'<i class="uk-icon-strikethrough"></i>'},blockquote:{title:"Blockquote",label:'<i class="uk-icon-quote-right"></i>'},link:{title:"Link",label:'<i class="uk-icon-link"></i>'},image:{title:"Image",label:'<i class="uk-icon-picture-o"></i>'},listUl:{title:"Unordered List",label:'<i class="uk-icon-list-ul"></i>'},listOl:{title:"Ordered List",label:'<i class="uk-icon-list-ol"></i>'}}),i("bold","<strong>$1</strong>"),i("italic","<em>$1</em>"),i("strike","<del>$1</del>"),i("blockquote","<blockquote><p>$1</p></blockquote>","replaceLine"),i("link",'<a href="http://">$1</a>'),i("image",'<img src="http://" alt="$1">');var o=function(t){if("html"==e.getCursorMode()){t=t||"ul";for(var i=e.editor,o=i.getDoc(),n=o.getCursor(!0),r=o.getCursor(!1),l=CodeMirror.innerMode(i.getMode(),i.getTokenAt(i.getCursor()).state),s=l&&l.state&&l.state.context&&-1!=["ul","ol"].indexOf(l.state.context.tagName),a=n.line;a<r.line+1;a++)i.replaceRange("<li>"+i.getLine(a)+"</li>",{line:a,ch:0},{line:a,ch:i.getLine(a).length});s?i.setCursor({line:r.line,ch:i.getLine(r.line).length}):(i.replaceRange("<"+t+">\n"+i.getLine(n.line),{line:n.line,ch:0},{line:n.line,ch:i.getLine(n.line).length}),i.replaceRange(i.getLine(r.line+1)+"\n</"+t+">",{line:r.line+1,ch:0},{line:r.line+1,ch:i.getLine(r.line+1).length}),i.setCursor({line:r.line+1,ch:i.getLine(r.line+1).length})),i.focus()}};e.on("action.listUl",function(){o("ul")}),e.on("action.listOl",function(){o("ol")}),e.htmleditor.on("click",'a[data-htmleditor-button="fullscreen"]',function(){e.htmleditor.toggleClass("uk-htmleditor-fullscreen");var i=e.editor.getWrapperElement();if(e.htmleditor.hasClass("uk-htmleditor-fullscreen")){var o=!1,n=e.htmleditor.parents().each(function(){"fixed"!=t.$(this).css("position")||t.$(this).is("html")||(o=t.$(this))});if(e.htmleditor.data("fixedParents",!1),o){var r=[];o=o.parent().find(n).each(function(){"none"!=t.$(this).css("transform")&&r.push(t.$(this).data("transform-reset",{transform:this.style.transform,"-webkit-transform":this.style.webkitTransform,"-webkit-transition":this.style.webkitTransition,transition:this.style.transition}).css({transform:"none","-webkit-transform":"none","-webkit-transition":"none",transition:"none"}))}),e.htmleditor.data("fixedParents",r)}e.editor.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:i.style.width,height:i.style.height},i.style.width="",i.style.height=e.content.height()+"px",document.documentElement.style.overflow="hidden"}else{document.documentElement.style.overflow="";var l=e.editor.state.fullScreenRestore;i.style.width=l.width,i.style.height=l.height,window.scrollTo(l.scrollLeft,l.scrollTop),e.htmleditor.data("fixedParents")&&e.htmleditor.data("fixedParents").forEach(function(t){t.css(t.data("transform-reset"))})}setTimeout(function(){e.fit(),t.$win.trigger("resize")},50)}),e.addShortcut(["Ctrl-S","Cmd-S"],function(){e.element.trigger("htmleditor-save",[e])}),e.addShortcutAction("bold",["Ctrl-B","Cmd-B"])}}),t.plugin("htmleditor","markdown",{init:function(e){function i(){e.editor.setOption("mode","gfm"),e.htmleditor.find(".uk-htmleditor-button-code a").html(e.options.lblMarkedview)}function o(t,i,o){e.on("action."+t,function(){"markdown"==e.getCursorMode()&&e["replaceLine"==o?"replaceLine":"replaceSelection"](i)})}var n=e.options.mdparser||window.marked||null;n&&(e.options.markdown&&i(),o("bold","**$1**"),o("italic","*$1*"),o("strike","~~$1~~"),o("blockquote","> $1","replaceLine"),o("link","[$1](http://)"),o("image","![$1](http://)"),e.on("action.listUl",function(){if("markdown"==e.getCursorMode()){for(var t=e.editor,i=t.getDoc().getCursor(!0),o=t.getDoc().getCursor(!1),n=i.line;n<o.line+1;n++)t.replaceRange("* "+t.getLine(n),{line:n,ch:0},{line:n,ch:t.getLine(n).length});t.setCursor({line:o.line,ch:t.getLine(o.line).length}),t.focus()}}),e.on("action.listOl",function(){if("markdown"==e.getCursorMode()){var t=e.editor,i=t.getDoc().getCursor(!0),o=t.getDoc().getCursor(!1),n=1;if(i.line>0){var r,l=t.getLine(i.line-1);(r=l.match(/^(\d+)\./))&&(n=Number(r[1])+1)}for(var s=i.line;s<o.line+1;s++)t.replaceRange(n+". "+t.getLine(s),{line:s,ch:0},{line:s,ch:t.getLine(s).length}),n++;t.setCursor({line:o.line,ch:t.getLine(o.line).length}),t.focus()}}),e.on("renderLate",function(){"gfm"==e.editor.options.mode&&(e.currentvalue=n(e.currentvalue))}),e.on("cursorMode",function(t,i){if("gfm"==e.editor.options.mode){var o=e.editor.getDoc().getCursor();e.editor.getTokenAt(o).state.base.htmlState||(i.mode="markdown")}}),t.$.extend(e,{enableMarkdown:function(){i(),this.render()},disableMarkdown:function(){this.editor.setOption("mode","htmlmixed"),this.htmleditor.find(".uk-htmleditor-button-code a").html(this.options.lblCodeview),this.render()}}),e.on({enableMarkdown:function(){e.enableMarkdown()},disableMarkdown:function(){e.disableMarkdown()}}))}}),t.htmleditor});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-autocomplete",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e;return t.component("autocomplete",{defaults:{minLength:3,param:"search",method:"post",delay:300,loadingClass:"uk-loading",flipDropdown:!1,skipClass:"uk-skip",hoverClass:"uk-active",source:null,renderer:null,template:'<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'},visible:!1,value:null,selected:null,boot:function(){t.$html.on("focus.autocomplete.uikit","[data-uk-autocomplete]",function(){var e=t.$(this);e.data("autocomplete")||t.autocomplete(e,t.Utils.options(e.attr("data-uk-autocomplete")))}),t.$html.on("click.autocomplete.uikit",function(t){e&&t.target!=e.input[0]&&e.hide()})},init:function(){var e=this,i=!1,s=t.Utils.debounce(function(){return i?i=!1:(e.handle(),void 0)},this.options.delay);this.dropdown=this.find(".uk-dropdown"),this.template=this.find('script[type="text/autocomplete"]').html(),this.template=t.Utils.template(this.template||this.options.template),this.input=this.find("input:first").attr("autocomplete","off"),this.dropdown.length||(this.dropdown=t.$('<div class="uk-dropdown"></div>').appendTo(this.element)),this.options.flipDropdown&&this.dropdown.addClass("uk-dropdown-flip"),this.dropdown.attr("aria-expanded","false"),this.input.on({keydown:function(t){if(t&&t.which&&!t.shiftKey&&e.visible)switch(t.which){case 13:i=!0,e.selected&&(t.preventDefault(),e.select());break;case 38:t.preventDefault(),e.pick("prev",!0);break;case 40:t.preventDefault(),e.pick("next",!0);break;case 27:case 9:e.hide()}},keyup:s}),this.dropdown.on("click",".uk-autocomplete-results > *",function(){e.select()}),this.dropdown.on("mouseover",".uk-autocomplete-results > *",function(){e.pick(t.$(this))}),this.triggercomplete=s},handle:function(){var t=this,e=this.value;return this.value=this.input.val(),this.value.length<this.options.minLength?this.hide():(this.value!=e&&t.request(),this)},pick:function(e,i){var s=this,o=t.$(this.dropdown.find(".uk-autocomplete-results").children(":not(."+this.options.skipClass+")")),n=!1;if("string"==typeof e||e.hasClass(this.options.skipClass)){if("next"==e||"prev"==e){if(this.selected){var a=o.index(this.selected);n="next"==e?o.eq(a+1<o.length?a+1:0):o.eq(0>a-1?o.length-1:a-1)}else n=o["next"==e?"first":"last"]();n=t.$(n)}}else n=e;if(n&&n.length&&(this.selected=n,o.removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass),i)){var l=n.position().top,h=s.dropdown.scrollTop(),r=s.dropdown.height();(l>r||0>l)&&s.dropdown.scrollTop(h+l)}},select:function(){if(this.selected){var t=this.selected.data();this.trigger("selectitem.uk.autocomplete",[t,this]),t.value&&this.input.val(t.value).trigger("change"),this.hide()}},show:function(){return this.visible?void 0:(this.visible=!0,this.element.addClass("uk-open"),e&&e!==this&&e.hide(),e=this,this.dropdown.attr("aria-expanded","true"),this)},hide:function(){return this.visible?(this.visible=!1,this.element.removeClass("uk-open"),e===this&&(e=!1),this.dropdown.attr("aria-expanded","false"),this):void 0},request:function(){var e=this,i=function(t){t&&e.render(t),e.element.removeClass(e.options.loadingClass)};if(this.element.addClass(this.options.loadingClass),this.options.source){var s=this.options.source;switch(typeof this.options.source){case"function":this.options.source.apply(this,[i]);break;case"object":if(s.length){var o=[];s.forEach(function(t){t.value&&-1!=t.value.toLowerCase().indexOf(e.value.toLowerCase())&&o.push(t)}),i(o)}break;case"string":var n={};n[this.options.param]=this.value,t.$.ajax({url:this.options.source,data:n,type:this.options.method,dataType:"json"}).done(function(t){i(t||[])});break;default:i(null)}}else this.element.removeClass(e.options.loadingClass)},render:function(t){return this.dropdown.empty(),this.selected=!1,this.options.renderer?this.options.renderer.apply(this,[t]):t&&t.length&&(this.dropdown.append(this.template({items:t})),this.show(),this.trigger("show.uk.autocomplete")),this}}),t.autocomplete});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-notify",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e={},i={},s=function(e){return"string"==t.$.type(e)&&(e={message:e}),arguments[1]&&(e=t.$.extend(e,"string"==t.$.type(arguments[1])?{status:arguments[1]}:arguments[1])),new n(e).show()},o=function(t,e){var s;if(t)for(s in i)t===i[s].group&&i[s].close(e);else for(s in i)i[s].close(e)},n=function(s){this.options=t.$.extend({},n.defaults,s),this.uuid=t.Utils.uid("notifymsg"),this.element=t.$(['<div class="uk-notify-message">','<a class="uk-close"></a>',"<div></div>","</div>"].join("")).data("notifyMessage",this),this.content(this.options.message),this.options.status&&(this.element.addClass("uk-notify-message-"+this.options.status),this.currentstatus=this.options.status),this.group=this.options.group,i[this.uuid]=this,e[this.options.pos]||(e[this.options.pos]=t.$('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo("body").on("click",".uk-notify-message",function(){var e=t.$(this).data("notifyMessage");e.element.trigger("manualclose.uk.notify",[e]),e.close()}))};return t.$.extend(n.prototype,{uuid:!1,element:!1,timout:!1,currentstatus:"",group:!1,show:function(){if(!this.element.is(":visible")){var t=this;e[this.options.pos].show().prepend(this.element);var i=parseInt(this.element.css("margin-bottom"),10);return this.element.css({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0}).animate({opacity:1,"margin-top":0,"margin-bottom":i},function(){if(t.options.timeout){var e=function(){t.close()};t.timeout=setTimeout(e,t.options.timeout),t.element.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(e,t.options.timeout)})}}),this}},close:function(t){var s=this,o=function(){s.element.remove(),e[s.options.pos].children().length||e[s.options.pos].hide(),s.options.onClose.apply(s,[]),s.element.trigger("close.uk.notify",[s]),delete i[s.uuid]};this.timeout&&clearTimeout(this.timeout),t?o():this.element.animate({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0},function(){o()})},content:function(t){var e=this.element.find(">div");return t?(e.html(t),this):e.html()},status:function(t){return t?(this.element.removeClass("uk-notify-message-"+this.currentstatus).addClass("uk-notify-message-"+t),this.currentstatus=t,this):this.currentstatus}}),n.defaults={message:"",status:"",timeout:5e3,group:null,pos:"top-center",onClose:function(){}},t.notify=s,t.notify.message=n,t.notify.closeAll=o,s});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-tooltip",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";var i,o,e;return t.component("tooltip",{defaults:{offset:5,pos:"top",animation:!1,delay:0,cls:"",activeClass:"uk-active",src:function(t){var i=t.attr("title");return void 0!==i&&t.data("cached-title",i).removeAttr("title"),t.data("cached-title")}},tip:"",boot:function(){t.$html.on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var i=t.$(this);i.data("tooltip")||(t.tooltip(i,t.Utils.options(i.attr("data-uk-tooltip"))),i.trigger("mouseenter"))})},init:function(){var o=this;i||(i=t.$('<div class="uk-tooltip"></div>').appendTo("body")),this.on({focus:function(){o.show()},blur:function(){o.hide()},mouseenter:function(){o.show()},mouseleave:function(){o.hide()}})},show:function(){if(this.tip="function"==typeof this.options.src?this.options.src(this.element):this.options.src,o&&clearTimeout(o),e&&clearTimeout(e),"string"==typeof this.tip?this.tip.length:0){i.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.activeClass).show(),i.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var s=this,n=t.$.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),l=i[0].offsetWidth,f=i[0].offsetHeight,p="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,a="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,h=a.split("-"),c={display:"none",visibility:"visible",top:n.top+n.height+f,left:n.left};if("fixed"==t.$html.css("position")||"fixed"==t.$body.css("position")){var r=t.$("body").offset(),d=t.$("html").offset(),u={top:d.top+r.top,left:d.left+r.left};n.left-=u.left,n.top-=u.top}"left"!=h[0]&&"right"!=h[0]||"right"!=t.langdirection||(h[0]="left"==h[0]?"right":"left");var m={bottom:{top:n.top+n.height+p,left:n.left+n.width/2-l/2},top:{top:n.top-f-p,left:n.left+n.width/2-l/2},left:{top:n.top+n.height/2-f/2,left:n.left-l-p},right:{top:n.top+n.height/2-f/2,left:n.left+n.width+p}};t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l);var v=this.checkBoundary(c.left,c.top,l,f);if(v){switch(v){case"x":a=2==h.length?h[0]+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left";break;case"y":a=2==h.length?(c.top<0?"bottom":"top")+"-"+h[1]:c.top<0?"bottom":"top";break;case"xy":a=2==h.length?(c.top<0?"bottom":"top")+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left"}h=a.split("-"),t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l)}c.left-=t.$body.position().left,o=setTimeout(function(){i.css(c).attr("class",["uk-tooltip","uk-tooltip-"+a,s.options.cls].join(" ")),s.options.animation?i.css({opacity:0,display:"block"}).addClass(s.options.activeClass).animate({opacity:1},parseInt(s.options.animation,10)||400):i.show().addClass(s.options.activeClass),o=!1,e=setInterval(function(){s.element.is(":visible")||s.hide()},150)},parseInt(this.options.delay,10)||0)}},hide:function(){if(!this.element.is("input")||this.element[0]!==document.activeElement)if(o&&clearTimeout(o),e&&clearTimeout(e),i.stop(),this.options.animation){var t=this;i.fadeOut(parseInt(this.options.animation,10)||400,function(){i.removeClass(t.options.activeClass)})}else i.hide().removeClass(this.options.activeClass)},content:function(){return this.tip},checkBoundary:function(i,o,e,s){var n="";return(0>i||i-t.$win.scrollLeft()+e>window.innerWidth)&&(n+="x"),(0>o||o-t.$win.scrollTop()+s>window.innerHeight)&&(n+="y"),n}}),t.tooltip});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-sticky",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(){var i=arguments.length?arguments:n;if(i.length&&!(e.scrollTop()<0))for(var o,a,r,h,p=e.scrollTop(),c=s.height(),l=e.height(),m=c-l,d=p>m?m-p:0,u=0;u<i.length;u++)if(h=i[u],h.element.is(":visible")&&!h.animate){if(h.check()){if(h.top<0?o=0:(r=h.element.outerHeight(),o=c-r-h.top-h.options.bottom-p-d,o=0>o?o+h.top:h.top),h.boundary&&h.boundary.length){var f=h.boundary.offset().top;a=h.boundtoparent?c-(f+h.boundary.outerHeight())+parseInt(h.boundary.css("padding-bottom")):c-f,o=p+r>c-a-(h.top<0?0:h.top)?c-a-(p+r):o}if(h.currentTop!=o){if(h.element.css({position:"fixed",top:o,width:h.getWidthFrom.length?h.getWidthFrom.width():h.element.width()}),!h.init&&(h.element.addClass(h.options.clsinit),location.hash&&p>0&&h.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),s=e.top+t.outerHeight(),n=i.element.offset(),o=i.element.outerHeight(),a=n.top+o;n.top<s&&e.top<a&&(p=e.top-o-i.options.target,window.scrollTo(0,p))}}(g,h),0)}h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive),h.element.trigger("active.uk.sticky"),h.element.css("margin",""),h.options.animation&&h.init&&!t.Utils.isInView(h.wrapper)&&h.element.addClass(h.options.animation),h.currentTop=o}}else null!==h.currentTop&&h.reset();h.init=!0}}var e=t.$win,s=t.$doc,n=[],o=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){e&&e.dir&&(o=e.dir.y,i())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(n.length){for(var t=0;t<n.length;t++)n[t].reset(!0),n[t].self.computeWrapper();i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=this.options.boundary;this.wrapper=this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(),this.computeWrapper(),this.wrapper.css({"margin-top":this.element.css("margin-top"),"margin-bottom":this.element.css("margin-bottom"),"margin-left":this.element.css("margin-left"),"margin-right":this.element.css("margin-right")}),this.element.css("margin",0),a&&(a===!0||"!"===a[0]?(a=a===!0?this.wrapper.parent():this.wrapper.closest(a.substr(1)),i=!0):"string"==typeof a&&(a=t.$(a))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:t.$(this.options.getWidthFrom||this.wrapper),boundary:a,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.element.trigger("inactive.uk.sticky"),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),n=s.height(),a=n-window.innerHeight,r=i>a?a-i:0,h=this.wrapper.offset().top,p=h-this.top-r,c=i>=p;return c&&this.options.showup&&(1==o&&(c=!1),-1==o&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),n.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):""}),"fixed"==this.element.css("position")&&this.element.css({width:this.sticky.getWidthFrom.length?this.sticky.getWidthFrom.width():this.element.width()})}}),t.sticky});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-sortable",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";function e(e){e=t.$(e);do{if(e.data("sortable"))return e;e=t.$(e).parent()}while(e.length);return e}function o(t,e){var o=t.parentNode;if(e.parentNode!=o)return!1;for(var n=t.previousSibling;n&&9!==n.nodeType;){if(n===e)return!0;n=n.previousSibling}return!1}function n(t,e){var o=e;if(o==t)return null;for(;o;){if(o.parentNode===t)return o;if(o=o.parentNode,!o||!o.ownerDocument||11===o.nodeType)break}return null}function s(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}var a,r,i,l,d,h,u,p,c,g,f,m="ontouchstart"in window||"MSGesture"in window||window.DocumentTouch&&document instanceof DocumentTouch,v=m?"MSGesture"in window?"pointerdown":"touchstart":"mousedown",b=m?"MSGesture"in window?"pointermove":"touchmove":"mousemove",C=m?"MSGesture"in window?"pointerup":"touchend":"mouseup";return t.component("sortable",{defaults:{animation:150,threshold:10,childClass:"uk-sortable-item",placeholderClass:"uk-sortable-placeholder",overClass:"uk-sortable-over",draggingClass:"uk-sortable-dragged",dragMovingClass:"uk-sortable-moving",baseClass:"uk-sortable",noDragClass:"uk-sortable-nodrag",emptyClass:"uk-sortable-empty",dragCustomClass:"",handleClass:!1,group:!1,stop:function(){},start:function(){},change:function(){}},boot:function(){t.ready(function(e){t.$("[data-uk-sortable]",e).each(function(){var e=t.$(this);e.data("sortable")||t.sortable(e,t.Utils.options(e.attr("data-uk-sortable")))})}),t.$html.on(b,function(e){if(u){var o=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e;(Math.abs(o.pageX-u.pos.x)>u.threshold||Math.abs(o.pageY-u.pos.y)>u.threshold)&&u.apply(o)}if(a){d||(d=!0,a.show(),a.$current.addClass(a.$sortable.options.placeholderClass),a.$sortable.element.children().addClass(a.$sortable.options.childClass),t.$html.addClass(a.$sortable.options.dragMovingClass));var n=a.data("mouse-offset"),s=e.originalEvent.touches&&e.originalEvent.touches[0]||e.originalEvent,r=parseInt(s.pageX,10)+n.left,i=parseInt(s.pageY,10)+n.top;if(a.css({left:r,top:i}),i+a.height()/3>document.body.offsetHeight)return;i<t.$win.scrollTop()?t.$win.scrollTop(t.$win.scrollTop()-Math.ceil(a.height()/3)):i+a.height()/3>window.innerHeight+t.$win.scrollTop()&&t.$win.scrollTop(t.$win.scrollTop()+Math.ceil(a.height()/3))}}),t.$html.on(C,function(t){if(u=h=!1,!r||!a)return r=a=null,void 0;var o=e(r),n=a.$sortable,s={type:t.type};o[0]&&n.dragDrop(s,n.element),n.dragEnd(s,n.element)})},init:function(){function e(){m&&f.touches&&f.touches.length?h.addEventListener(b,y,!1):(h.addEventListener("mouseover",$,!1),h.addEventListener("mouseout",w,!1))}function o(){m&&f.touches&&f.touches.length?h.removeEventListener(b,y,!1):(h.removeEventListener("mouseover",$,!1),h.removeEventListener("mouseout",w,!1))}function a(t){r&&d.dragMove(t,d)}function l(e){return function(o){var s,a,r;f=o,o&&(s=o.touches&&o.touches[0]||o,a=s.target||o.target,m&&document.elementFromPoint&&(a=document.elementFromPoint(s.pageX-document.body.scrollLeft,s.pageY-document.body.scrollTop)),g=t.$(a)),t.$(a).hasClass("."+d.options.childClass)?e.apply(a,[o]):a!==h&&(r=n(h,a),r&&e.apply(r,[o]))}}var d=this,h=this.element[0];p=[],this.checkEmptyList(),this.element.data("sortable-group",this.options.group?this.options.group:t.Utils.uid("sortable-group"));var u=l(function(e){if(!e.data||!e.data.sortable){var o=t.$(e.target),n=o.is("a[href]")?o:o.parents("a[href]");if(!o.is(":input")){if(d.options.handleClass){var s=o.hasClass(d.options.handleClass)?o:o.closest("."+d.options.handleClass,d.element);if(!s.length)return}return e.preventDefault(),n.length&&n.one("click",function(t){t.preventDefault()}).one(C,function(){c||(n.trigger("click"),m&&n.attr("href").trim()&&(location.href=n.attr("href")))}),e.data=e.data||{},e.data.sortable=h,d.dragStart(e,this)}}}),$=l(t.Utils.debounce(function(t){return d.dragEnter(t,this)}),40),w=l(function(){var e=d.dragenterData(this);d.dragenterData(this,e-1),d.dragenterData(this)||(t.$(this).removeClass(d.options.overClass),d.dragenterData(this,!1))}),y=l(function(t){return r&&r!==this&&i!==this?(d.element.children().removeClass(d.options.overClass),i=this,d.moveElementNextTo(r,this),s(t)):!0});this.addDragHandlers=e,this.removeDragHandlers=o,window.addEventListener(b,a,!1),h.addEventListener(v,u,!1)},dragStart:function(e,o){c=!1,d=!1,l=!1;var n=this,s=t.$(e.target);if(!(!m&&2==e.button||s.is("."+n.options.noDragClass)||s.closest("."+n.options.noDragClass).length||s.is(":input"))){r=o,a&&a.remove();var i=t.$(r),h=i.offset(),p=e.touches&&e.touches[0]||e;u={pos:{x:p.pageX,y:p.pageY},threshold:n.options.handleClass?1:n.options.threshold,apply:function(){a=t.$('<div class="'+[n.options.draggingClass,n.options.dragCustomClass].join(" ")+'"></div>').css({display:"none",top:h.top,left:h.left,width:i.width(),height:i.height(),padding:i.css("padding")}).data({"mouse-offset":{left:h.left-parseInt(p.pageX,10),top:h.top-parseInt(p.pageY,10)},origin:n.element,index:i.index()}).append(i.html()).appendTo("body"),a.$current=i,a.$sortable=n,i.data({"start-list":i.parent(),"start-index":i.index(),"sortable-group":n.options.group}),n.addDragHandlers(),n.options.start(this,r),n.trigger("start.uk.sortable",[n,r,a]),c=!0,u=!1}}}},dragMove:function(e){g=t.$(document.elementFromPoint(e.pageX-(document.body.scrollLeft||document.scrollLeft||0),e.pageY-(document.body.scrollTop||document.documentElement.scrollTop||0)));var o,n=g.closest("."+this.options.baseClass),s=n.data("sortable-group"),a=t.$(r),i=a.parent(),l=a.data("sortable-group");n[0]!==i[0]&&void 0!==l&&s===l&&(n.data("sortable").addDragHandlers(),p.push(n),n.children().addClass(this.options.childClass),n.children().length>0?(o=g.closest("."+this.options.childClass),o.length?o.before(a):n.append(a)):g.append(a),UIkit.$doc.trigger("mouseover")),this.checkEmptyList(),this.checkEmptyList(i)},dragEnter:function(e,o){if(!r||r===o)return!0;var n=this.dragenterData(o);if(this.dragenterData(o,n+1),0===n){var s=t.$(o).parent(),a=t.$(r).data("start-list");if(s[0]!==a[0]){var i=s.data("sortable-group"),l=t.$(r).data("sortable-group");if((i||l)&&i!=l)return!1}t.$(o).addClass(this.options.overClass),this.moveElementNextTo(r,o)}return!1},dragEnd:function(e,o){var n=this;r&&(this.options.stop(o),this.trigger("stop.uk.sortable",[this])),r=null,i=null,p.push(this.element),p.forEach(function(e){t.$(e).children().each(function(){1===this.nodeType&&(t.$(this).removeClass(n.options.overClass).removeClass(n.options.placeholderClass).removeClass(n.options.childClass),n.dragenterData(this,!1))})}),p=[],t.$html.removeClass(this.options.dragMovingClass),this.removeDragHandlers(),a&&(a.remove(),a=null)},dragDrop:function(t){"drop"===t.type&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),this.triggerChangeEvents()},triggerChangeEvents:function(){if(r){var e=t.$(r),o=a.data("origin"),n=e.closest("."+this.options.baseClass),s=[],i=t.$(r);o[0]===n[0]&&a.data("index")!=e.index()?s.push({sortable:this,mode:"moved"}):o[0]!=n[0]&&s.push({sortable:t.$(n).data("sortable"),mode:"added"},{sortable:t.$(o).data("sortable"),mode:"removed"}),s.forEach(function(t){t.sortable&&t.sortable.element.trigger("change.uk.sortable",[t.sortable,i,t.mode])})}},dragenterData:function(e,o){return e=t.$(e),1==arguments.length?parseInt(e.data("child-dragenter"),10)||0:(o?e.data("child-dragenter",Math.max(0,o)):e.removeData("child-dragenter"),void 0)},moveElementNextTo:function(e,n){l=!0;var s=this,a=t.$(e).parent().css("min-height",""),r=o(e,n)?n:n.nextSibling,i=a.children(),d=i.length;return s.options.animation?(a.css("min-height",a.height()),i.stop().each(function(){var e=t.$(this),o=e.position();o.width=e.width(),e.data("offset-before",o)}),n.parentNode.insertBefore(e,r),t.Utils.checkDisplay(s.element.parent()),i=a.children().each(function(){var e=t.$(this);e.data("offset-after",e.position())}).each(function(){var e=t.$(this),o=e.data("offset-before");e.css({position:"absolute",top:o.top,left:o.left,"min-width":o.width})}),i.each(function(){var e=t.$(this),o=(e.data("offset-before"),e.data("offset-after"));e.css("pointer-events","none").width(),setTimeout(function(){e.animate({top:o.top,left:o.left},s.options.animation,function(){e.css({position:"",top:"",left:"","min-width":"","pointer-events":""}).removeClass(s.options.overClass).removeData("child-dragenter"),d--,d||(a.css("min-height",""),t.Utils.checkDisplay(s.element.parent()))})},0)}),void 0):(n.parentNode.insertBefore(e,r),t.Utils.checkDisplay(s.element.parent()),void 0)},serialize:function(){var e,o,n=[];return this.element.children().each(function(s,a){e={};for(var r,i,l=0;l<a.attributes.length;l++)o=a.attributes[l],0===o.name.indexOf("data-")&&(r=o.name.substr(5),i=t.Utils.str2json(o.value),e[r]=i||"false"==o.value||"0"==o.value?i:o.value);n.push(e)}),n},checkEmptyList:function(e){e=e?t.$(e):this.element,this.options.emptyClass&&e[e.children().length?"removeClass":"addClass"](this.options.emptyClass)}}),t.sortable});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-pagination",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";return t.component("pagination",{defaults:{items:1,itemsOnPage:1,pages:0,displayedPages:7,edges:1,currentPage:0,lblPrev:!1,lblNext:!1,onSelectPage:function(){}},boot:function(){t.ready(function(e){t.$("[data-uk-pagination]",e).each(function(){var e=t.$(this);e.data("pagination")||t.pagination(e,t.Utils.options(e.attr("data-uk-pagination")))})})},init:function(){var e=this;this.pages=this.options.pages?this.options.pages:Math.ceil(this.options.items/this.options.itemsOnPage)?Math.ceil(this.options.items/this.options.itemsOnPage):1,this.currentPage=this.options.currentPage,this.halfDisplayed=this.options.displayedPages/2,this.on("click","a[data-page]",function(i){i.preventDefault(),e.selectPage(t.$(this).data("page"))}),this._render()},_getInterval:function(){return{start:Math.ceil(this.currentPage>this.halfDisplayed?Math.max(Math.min(this.currentPage-this.halfDisplayed,this.pages-this.options.displayedPages),0):0),end:Math.ceil(this.currentPage>this.halfDisplayed?Math.min(this.currentPage+this.halfDisplayed,this.pages):Math.min(this.options.displayedPages,this.pages))}},render:function(t){this.pages=t?t:this.pages,this._render()},selectPage:function(t,e){this.currentPage=t,this.render(e),this.options.onSelectPage.apply(this,[t]),this.trigger("select.uk.pagination",[t,this])},_render:function(){var t,e=this.options,i=this._getInterval();if(this.element.empty(),e.lblPrev&&this._append(this.currentPage-1,{text:e.lblPrev}),i.start>0&&e.edges>0){var s=Math.min(e.edges,i.start);for(t=0;s>t;t++)this._append(t);e.edges<i.start&&i.start-e.edges!=1?this.element.append("<li><span>...</span></li>"):i.start-e.edges==1&&this._append(e.edges)}for(t=i.start;t<i.end;t++)this._append(t);if(i.end<this.pages&&e.edges>0){this.pages-e.edges>i.end&&this.pages-e.edges-i.end!=1?this.element.append("<li><span>...</span></li>"):this.pages-e.edges-i.end==1&&this._append(i.end++);var a=Math.max(this.pages-e.edges,i.end);for(t=a;t<this.pages;t++)this._append(t)}e.lblNext&&this._append(this.currentPage+1,{text:e.lblNext})},_append:function(e,i){var s,a;e=0>e?0:e<this.pages?e:this.pages-1,a=t.$.extend({text:e+1},i),s=e==this.currentPage?'<li class="uk-active"><span>'+a.text+"</span></li>":'<li><a href="#page-'+(e+1)+'" data-page="'+e+'">'+a.text+"</a></li>",this.element.append(s)}}),t.pagination});
/*! UIkit 2.27.1 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-form-select",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";return t.component("formSelect",{defaults:{target:">span:first",activeClass:"uk-active"},boot:function(){t.ready(function(e){t.$("[data-uk-form-select]",e).each(function(){var e=t.$(this);e.data("formSelect")||t.formSelect(e,t.Utils.options(e.attr("data-uk-form-select")))})})},init:function(){var t=this;this.target=this.find(this.options.target),this.select=this.find("select"),this.select.on({change:function(){var e=t.select[0],n=function(){try{"input"===t.options.target?t.target.val(e.options[e.selectedIndex].text):t.target.text(e.options[e.selectedIndex].text)}catch(s){}return t.element[t.select.val()?"addClass":"removeClass"](t.options.activeClass),n};return n()}(),focus:function(){t.target.addClass("uk-focus")},blur:function(){t.target.removeClass("uk-focus")},mouseenter:function(){t.target.addClass("uk-hover")},mouseleave:function(){t.target.removeClass("uk-hover")}}),this.element.data("formSelect",this)}}),t.formSelect});

(function($){
    var original_title = document.title;
    var nCount = 0;
    var PHPHub = {
        init: function(){
            var self = this;
            $(document).pjax('a:not(a[target="_blank"])', 'body', {
                timeout: 1600,
                maxCacheLength: 500
            });
            $(document).on('pjax:start', function() {
                NProgress.start();
            });
            $(document).on('pjax:end', function() {
                NProgress.done();
                self.siteBootUp();
            });
            $(document).on('pjax:complete', function() {
                original_title = document.title;
                NProgress.done();
                self._resetTitle();
            });
            // Exclude links with a specific class
            $(document).on("pjax:click", "a.no-pjax", false);

            self.siteBootUp();
            self.initLightBox();
            self.initNotificationsCount();
            window.showMsg = self.showMsg;
            window.showPluginDownload = self.showPluginDownload;

            if (ShowCrxHint === 'yes') {
                showPluginDownload();
            }

            Messenger.options = {
                extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
                theme: 'flat'
            }
        },

        /*
        * Things to be execute when normal page load
        * and pjax page load.
        */
        siteBootUp: function(){
            var self = this;
            self.initExternalLink();
            self.initTimeAgo();
            self.initEmoji();
            // self.initAutocompleteAtUser();
            self.initScrollToTop();
            self.initPopup();
            self.initTextareaAutoResize();
            self.initHeightLight();
            self.initLocalStorage();
            self.initEditorPreview();
            self.initReplyOnPressKey();
            self.initDeleteForm();
            self.initInlineAttach();
            // self.snowing();
            self.forceImageDataType();
            self.initToolTips();
            self.initAjax();
            self.initLogin();
            self.initEditBtnAnimated();
        },
        //
        /**
         * Open External Links In New Window
         */
        initExternalLink: function(){
            $('.topics-show a[href^="http://"], .topics-show a[href^="https://"]').each(function() {
               var a = new RegExp('/' + window.location.host + '/');
               if(!a.test(this.href) ) {
                   $(this).click(function(event) {
                       event.preventDefault();
                       event.stopPropagation();
                       window.open(this.href, '_blank');
                   });
               }
            });
        },

        /**
         * Automatically transform any Date format to human
         * friendly format, all you need to do is add a
         * `.timeago` class.
         */
        initTimeAgo: function(){
            moment.lang('zh-cn');
            $('.timeago').each(function(){
                var time_str = $(this).text();
                if(moment(time_str, "YYYY-MM-DD HH:mm:ss", true).isValid()) {
                    $(this).text(moment(time_str).fromNow());
                }

                $(this).addClass('popover-with-html');
                $(this).attr('data-content', time_str);
            });
        },

        /**
         * Enable emoji everywhere.
         */
        initEmoji: function(){
            emojify.setConfig({
                img_dir : Config.cdnDomain + 'assets/images/emoji',
                ignored_tags : {
                    'SCRIPT'  : 1,
                    'TEXTAREA': 1,
                    'A'       : 1,
                    'PRE'     : 1,
                    'CODE'    : 1
                }
            });
            emojify.run();

            $('#reply_content').textcomplete([
                { // emoji strategy
                    match: /\B:([\-+\w]*)$/,
                    search: function (term, callback) {
                        callback($.map(emojies, function (emoji) {
                            return emoji.indexOf(term) === 0 ? emoji : null;
                        }));
                    },
                    template: function (value) {
                        return '<img src="' + Config.cdnDomain + 'assets/images/emoji/' + value + '.png"></img>' + value;
                    },
                    replace: function (value) {
                        return ':' + value + ': ';
                    },
                    index: 1,
                    maxCount: 5
                }
            ]);
        },

        /**
         * Autocomplete @user
         */
        initAutocompleteAtUser: function() {
            var at_users = Config.following_users,
                  user;
            $users = $('.media-heading').find('a.author');
            for (var i = 0; i < $users.length; i++) {
                user = $users.eq(i).text().trim();
                if ($.inArray(user, at_users) == -1) {
                    at_users.push(user);
                };
            };

            $('textarea').textcomplete([{
                mentions: at_users,
                match: /\B@(\w*)$/,
                search: function(term, callback) {
                    callback($.map(this.mentions, function(mention) {
                        return mention.indexOf(term) === 0 ? mention : null;
                    }));
                },
                index: 1,
                replace: function(mention) {
                    return '@' + mention + ' ';
                }
            }], {
                appendTo: 'body'
            });

        },

        /**
         * Autoresizing the textarea when you typing.
         */
        initTextareaAutoResize: function(){
            $('textarea').autosize();
        },

        /**
         * Scroll to top in one click.
         */
        initScrollToTop: function(){
            $.scrollUp.init();
        },

        /**
         * Scroll to top in one click.
         */
        initPopup: function(){
            // Popover with html
        },

        /**
         * Code heightlight.
         */
        initHeightLight: function(){
            Prism.highlightAll();
        },

        /**
         * lightbox
         */
        initLightBox: function(){
            $(document).delegate('.content-body img:not(.emoji)', 'click', function(event) {
                event.preventDefault();
                return $(this).ekkoLightbox({
                    onShown: function() {
                        if (window.console) {
                            // return console.log('Checking our the events huh?');
                        }
                    }
                });
            });
            $(document).delegate('.appends-container img:not(.emoji)', 'click', function(event) {
                event.preventDefault();
                return $(this).ekkoLightbox({
                    onShown: function() {
                        if (window.console) {
                            // return console.log('Checking our the events huh?');
                        }
                    }
                });
            });
        },

        /**
         * do content preview
         */
        runPreview: function() {
            var replyContent = $("#reply_content");
            var oldContent = replyContent.val();

            if (oldContent) {
                marked(oldContent, function (err, content) {
                  $('#preview-box').html(content);
                  emojify.run(document.getElementById('preview-box'));
                });
            }
        },

        /**
         * Init post content preview
         */
        initEditorPreview: function() {
            var self = this;
            $("#reply_content").focus(function(event) {
                // $("#reply_notice").addClass('animated pulse');
                $("#preview-box").fadeIn(1500);
                $("#preview-lable").fadeIn(1500);

                // Scroll to bottom
                // if (!$("#reply_content").val()) {
                //     $("html, body").animate({ scrollTop: $(document).height()}, 1800);
                // }
            });
            // $("#reply_content").blur(function(event) {
            //     $("#reply_notice").removeClass('animated swing');
            // });
            $('#reply_content').keyup(function(){
                self.runPreview();
            });
        },

        /**
         * Notify user unread notifications when they stay on the
         * page for too long.
         */
        initNotificationsCount: function(argumen) {
            var self = this;
            if (Config.user_id > 0 && Config.environment != 'local') {
                function scheduleGetNotification(){
                    $.get( Config.routes.notificationsCount, function( data ) {

                        nCount = parseInt(data);
                        self._resetTitle();
                        setTimeout(scheduleGetNotification, 15000);
                    });
                };
                setTimeout(scheduleGetNotification, 15000);
            }
        },

        _resetTitle: function() {

            if(window.location.href.indexOf("notifications") > -1) {
               nCount = 0;
            }

            if (nCount > 0) {
                $('#notification-count').text(nCount);
                $('#notification-count').hasClass('badge-important') || $('#notification-count').addClass('badge-important');
                document.title = '(' + nCount + ') '+ original_title;
            } else {
                document.title =  original_title;
                $('#notification-count').text(0);
                $('#notification-count').addClass('badge-fade');
                $('#notification-count').removeClass('badge-important');
            }
        },

        /*
         * Use Ctrl + Enter for reply
         */
        initReplyOnPressKey: function() {
            $(document).on("keydown", "#reply_content", function(e)
            {
                if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey && $('#reply-create-submit').is(':enabled')) {
                    $(this).parents("form").submit();
                    return false;
                }
            });
        },

        /*
         * Construct a form when using the following code, makes more clean code.
         *   {{ link_to_route('tasks.destroy', 'D', $task->id, ['data-method'=>'delete']) }}
         * See this answer: http://stackoverflow.com/a/23082278/689832
         */
        initDeleteForm: function() {
            $('[data-method]').append(function(){
                return "\n"+
                "<form action='"+$(this).attr('data-url')+"' method='POST' style='display:none'>\n"+
                "   <input type='hidden' name='_method' value='"+$(this).attr('data-method')+"'>\n"+
                "   <input type='hidden' name='_token' value='"+Config.token+"'>\n"+
                "</form>\n"
                })
                .attr('style','cursor:pointer;')
                .click(function() {
                    var that = $(this);
                    if ($(this).attr('data-method') == 'post') {
                        $(this).find("form").submit();
                    }
                    if ($(this).attr('data-method') == 'delete') {
                        swal({
                            title: "",
                            text: "你确定要删除此内容吗？",
                            type: "warning",
                            showCancelButton: true,
                            cancelButtonText: "取消",
                            confirmButtonText: "删除"
                        }, function() {
                            that.find("form").submit();
                        });
                    }
                });
           // attr('onclick',' if (confirm("Are you sure want to proceed?")) { $(this).find("form").submit(); };');
        },

        /**
         * Local Storage
         */
        initLocalStorage: function() {
            var self = this;
            $("#reply_content").focus(function(event) {

                // Topic Title ON Topic Creation View
                localforage.getItem('topic-title', function(err, value) {
                    if ($('.topic_create #topic-title').val() == '' && !err) {
                        $('.topic_create #topic-title').val(value);
                    };
                });
                $('.topic_create #topic-title').keyup(function(){
                    localforage.setItem('topic-title', $(this).val());
                });

                // Topic Content ON Topic Creation View
                localforage.getItem('topic_create_content', function(err, value) {
                    if ($('.topic_create #reply_content').val() == '' && !err) {
                        $('.topic_create #reply_content').val(value);
                        self.runPreview();
                    }
                });
                $('.topic_create #reply_content').keyup(function(){
                    localforage.setItem('topic_create_content', $(this).val());
                });

                // Reply Content ON Topic Detail View
                localforage.getItem('reply_content', function(err, value) {
                    if ($('.topics-show #reply_content').val() == '' && !err) {
                        $('.topics-show #reply_content').val(value);
                        self.runPreview();
                    }
                });
                $('.topics-show #reply_content').keyup(function(){
                    localforage.setItem('reply_content', $(this).val());
                });
            })

            // Clear Local Storage on submit
            $("#topic-create-form").submit(function(event){
                localforage.removeItem('topic_create_content');
                localforage.removeItem('topic-title');

                $("#topic-create-submit").val('提交中...').addClass('disabled').prop('disabled', true);

            });
            $("#reply-form").submit(function(event){
                localforage.removeItem('reply_content');
            });
        },

        /**
         * Upload image
         */
        initInlineAttach: function() {
            var self = this;
            $('#reply_content').inlineattach({
                uploadUrl: Config.routes.upload_image,
                extraParams: {
                  '_token': Config.token,
                },
                onUploadedFile: function(response) {
                    setTimeout(self.runPreview, 200);
                },
            });
        },

        /**
         * Snowing around the world
         */
        snowing: function() {

            // only show snow in Christmas
            var today = new Date()
            var christmas = new Date(today.getFullYear(), 11, 25) // Month is 0-11 in JavaScript
            if (today.getMonth() == 11 && (today.getDate() > 22 && today.getDate() < 30))
            {
                $('#body').snowfall({
                    flakeCount: 100,
                    minSize: 2,
                    maxSize:5,
                    round: true
                });
            }
        },

        /**
         * Force image data type, fixing the "Could not detect remote target type..."
         * problem.
         */
        forceImageDataType: function() {
          $('.content-body img:not(.emoji)').each(function(){
              $(this).attr('data-type', 'image');
          });
        },

        initToolTips: function() {
          
        },

        initAjax: function() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });

            this.initDataAjax();
            this.initAppendsModal();
            this.initComment();
        },

        initComment: function() {
            var self = this;
            var form = $('#reply-form');
            var submitBtn = form.find('input[type=submit]');
            var submitBtnVal = submitBtn.val();
            var replies = $('.replies .list-group');
            var preview = $('#preview-box');
            var emptyBlock = $('#replies-empty-block');
            var count = 0;

            form.on('submit', function() {
                var tpl = '';
                var delTpl = '';
                var voteTpl = '';
                var introTpl = '';
                var total = $('.replies .total b');

                count = replies.find('li').length + 1;
                comment = $(this).find('textarea');
                commentText = comment.val();

                if ($.trim(commentText) !== '') {
                    submitBtn.val('提交中...').addClass('disabled').prop('disabled', true);
                    $.ajax({
                        method: 'POST',
                        url: $(this).attr('action'),
                        data: {
                            body: commentText,
                            topic_id: $('[name=topic_id]').val()
                        },
                    }).done(function(data) {
                        if (data.status === 200) {
                            if (data.manage_topics === 'yes') {
                                delTpl = '<a class="" id="reply-delete-' + data.reply.id + '" data-ajax="delete" href="javascript:void(0);" data-url="/replies/delete/' + data.reply.id + '" title="删除"><i class="fa fa-trash-o"></i></a><span> •  </span>';
                            }

                            if (data.reply.user.introduction) {
                                introTpl = '，' + data.reply.user.introduction;
                            }

                            tpl = '<li class="list-group-item media" style="margin-top: 0px;">\
                                <div class="avatar pull-left">\
                                    <a href="/users/' + data.reply.user_id + '"><img class="media-object img-thumbnail avatar" alt="' + data.reply.user.name + '" src="' + data.reply.user.image_url + '" style="width:48px;height:48px;"></a>\
                                </div>\
                                <div class="infos">\
                                    <div class="media-heading">\
                                        <a href="/users/' + data.reply.user_id + '" title="' + data.reply.user.name + '" class="remove-padding-left author">' + data.reply.user.name + '</a>\
                                        <span class="introduction">' + introTpl + '</span>\
                                        <span class="operate pull-right">' + delTpl + '<a class="fa fa-reply" href="javascript:void(0)" onclick="replyOne(\'' + data.reply.user.name + '\');" title="回复 ' + data.reply.user.name + '"></a>\
                                        </span>\
                                        <div class="meta">\
                                            <a name="reply' + count + '" class="anchor" href="#reply' + count + '" aria-hidden="true">#' + count + '</a>\
                                            <span> •  </span>\
                                            <abbr class="timeago" title="' + data.reply.created_at + '">' + data.reply.created_at + '</abbr>\
                                        </div>\
                                    </div>\
                                    <div class="media-body markdown-reply content-body">' + data.reply.body + '</div>\
                                </div>\
                            </li>';
                        }

                        $(tpl).hide().appendTo(replies).slideDown();
                        total.html(parseInt(total.html()) + 1);
                        emptyBlock.addClass('hide');
                        comment.val('');
                        localforage.removeItem('reply_content');
                        preview.html('');
                        location.href = location.href.split('#')[0] + '#reply' + count;
                        self.initTimeAgo();
                        self.showPluginDownload();
                        emojify.run();
                    }).always(function() {
                        submitBtn.val(submitBtnVal).removeClass('disabled').prop('disabled', false);
                    });
                }

                return false;
            });
        },

        initAppendsModal: function() {
            var self = this;
            var appendsContainer = $('.topic .appends-container');
            var appendText = appendsContainer.data('lang-append');
            var modal = $('#exampleModal');
            var submitBtn = modal.find('button[type=submit]');
            var count = 0;
            var appendMsg = '';

            modal.find('form').on('submit', function() {
                var tpl = '';
                count = appendsContainer.find('.appends').length;
                appendMsg = $(this).find('textarea').val();

                if ($.trim(appendMsg) !== '') {
                    submitBtn.html('提交中...').addClass('disabled').prop('disabled', true);
                    $.ajax({
                        method: 'POST',
                        url: $(this).attr('action'),
                        data: {
                            content: appendMsg
                        },
                    }).done(function(data) {
                        if (data.status === 200) {
                            tpl += '<div class="appends">';
                            tpl +=     '<span class="meta">' + appendText + ' ' + count + ' &nbsp;·&nbsp; <abbr title="' + data.append.created_at + '" class="timeago">' + data.append.created_at + '</abbr></span>';
                            tpl +=     '<div class="sep5"></div>';
                            tpl +=     '<div class="markdown-reply append-content">';
                            tpl +=         data.append.content;
                            tpl +=     '</div>';
                            tpl += '</div>';
                        }

                        $(tpl).hide().appendTo(appendsContainer).slideDown();
                        self.initTimeAgo();
                        modal.modal('hide');
                    });
                }

                return false;
            });

            modal.on('hidden.bs.modal', function() {
                $(this).find('textarea').val('');
                submitBtn.html('提交').removeClass('disabled').prop('disabled', false);
            });
        },

        initDataAjax: function() {
            var self = this;
            $(document).on('click', '[data-ajax]', function() {
                var that = $(this);
                var method = that.data('ajax');
                var url = that.data('url');
                var active = that.is('.active');
                var cancelText = that.data('lang-cancel');
                var isRecomend = that.is('#topic-recomend-button');
                var isWiki = that.is('#topic-wiki-button');
                var ribbonContainer = $('.topic .ribbon-container');
                var ribbon = $('.topic .ribbon');
                var excellent = $('.topic .ribbon-excellent');
                var wiki = $('.topic .ribbon-wiki');
                var total = $('.replies .total b');
                var voteCount = $('#vote-count');
                var upVote = $('#up-vote');
                var isVote = that.is('.vote');
                var isUpVote = that.is('#up-vote');
                var isCommentVote= that.is('.comment-vote');
                var commenVoteCount= that.find('.vote-count');
                var emptyBlock = $('#replies-empty-block');
                var originUpVoteActive = upVote.is('.active');

                if (Config.user_id === 0) {
                    swal({
                        title: "",
                        text: '需要登录以后才能执行此操作。',
                        type: "warning",
                        showCancelButton: true,
                        cancelButtonText: "取消",
                        confirmButtonText: "前往登录"
                    }, function() {
                        location.href = '/login-required';
                    });
                }

                if (method === 'delete') {
                    swal({
                        title: "",
                        text: "Are you sure want to proceed?",
                        type: "warning",
                        showCancelButton: true,
                        cancelButtonText: "取消",
                        confirmButtonText: "删除"
                    }, function() {
                        that.closest('.list-group-item').slideUp();
                        $.ajax({
                            method: method,
                            url: url
                        }).done(function(data) {
                            if (data.status === 200) {
                                that.closest('.list-group-item').remove();
                                total.html(parseInt(total.html()) - 1);
                                if (parseInt(total.html()) === 0) {
                                    emptyBlock.removeClass('hide');
                                }
                            }
                        }).fail(function() {
                            that.closest('.list-group-item').show();
                        });
                    });

                    return;
                }

                if (that.is('.ajax-loading')) return;
                that.addClass('ajax-loading');

                if (active) {
                    that.removeClass('active');
                    that.removeClass('animated rubberBand');

                    if (isRecomend) {
                        excellent.hide();
                    } else if (isWiki) {
                        wiki.hide();
                    }

                    if (isVote) {
                        // @CJ 如果是点赞，并且是已经点过赞的点赞，那就是去除点赞
                        $('.user-lists').find("a[data-userId='"+Config.user_id+"']").fadeOut('slow/400/fast', function() {
                            $(this).remove();
                        });
                    }
                } else {
                    that.addClass('active');
                    that.addClass('animated rubberBand');

                    if (cancelText) {
                        that.find('span').html(cancelText);
                        self.showPluginDownload();
                    }

                    if (isRecomend) {
                        var excellentText = ribbonContainer.data('lang-excellent');
                        if (excellent.length) {
                            excellent.show();
                        } else {
                            if (ribbon.length) {
                                ribbon.prepend('<div class="ribbon-excellent"><i class="fa fa-trophy"></i> ' + excellentText + ' </div>');
                            } else {
                                ribbonContainer.prepend('<div class="ribbon"><div class="ribbon-excellent"><i class="fa fa-trophy"></i> ' + excellentText + ' </div></div>');
                            }
                        }
                    } else if (isWiki) {
                        var wikiText = ribbonContainer.data('lang-wiki');
                        if (wiki.length) {
                            wiki.show();
                        } else {
                            if (ribbon.length) {
                                ribbon.append('<div class="ribbon-wiki"><i class="fa fa-graduation-cap"></i> ' + wikiText + ' </div>');
                            } else {
                                ribbonContainer.append('<div class="ribbon"><div class="ribbon-wiki"><i class="fa fa-graduation-cap"></i> ' + wikiText + ' </div></div>');
                            }
                        }
                    }

                    if (isVote && Config.user_id > 0) {
                        // @CJ 如果是点赞，并且是没有点过赞的
                        var newContent = $('.voted-template').clone();
                        newContent.attr('data-userId', Config.user_id);
                        newContent.attr('href', Config.user_link);
                        newContent.find('img').attr('src', Config.user_avatar);

                        newContent.prependTo('.user-lists').show('fast', function() {
                            $(this).addClass('animated swing');
                        });

                        $('.vote-hint').hide();
                    }
                }

                $.ajax({
                    method: method,
                    url: url
                }).done(function(data) {
                    if (data.status === 200) {
                        if (isCommentVote) {
                            var num = parseInt(commenVoteCount.html());
                            num = isNaN(num) ? 0 : num;

                            if (data.type === 'sub') {
                                commenVoteCount.html(num - 1 < 1 ? '' : num - 1);
                            } else if (data.type === 'add') {
                                commenVoteCount.html(num + 1);
                            }
                        }
                    }
                }).fail(function() {
                    if (!active) {
                        that.removeClass('active');

                        if (isRecomend) {
                            excellent.hide();
                        } else if (isWiki) {
                            wiki.hide();
                        }
                    } else {
                        that.addClass('active');

                        if (cancelText) {
                            that.find('span').html(cancelText);
                        }

                        if (isRecomend) {
                            excellent.show();
                        } else if (isWiki) {
                            wiki.show();
                        }
                    }

                    if (isVote) {
                        if (originUpVoteActive) {
                            upVote.addClass('active');
                        } else {
                            upVote.removeClass('active');
                        }
                    }
                })
                .always(function() {
                    that.removeClass('ajax-loading');
                });
            });
        },

        showMsg: function(msg, myobj) {
            if (!msg) return;
            Messenger().post(msg);
        },

        showPluginDownload: function() {
            this.showMsg('操作成功，安装 <a target="_blank" href="https://chrome.google.com/webstore/detail/fcopfkdgikhodlcjkjdppdfkbhmehdon">Chrome 插件</a> 接收提醒。', {
                type: 'success',
                timer: 8000
            });
        },

        initLogin: function() {
            $('#login-out').on('click', function(e) {
                var langText = $(this).data('lang-loginout');
                var href = $(this).attr('href');

                swal({
                    title: "",
                    text: langText,
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "取消",
                    confirmButtonText: "退出"
                }, function() {
                    location.href = href;
                });

                return false;
            });
        },
        initEditBtnAnimated: function() {
            $('.topic-author-box .panel-body').hover(function() {
                  $('.edit-btn').toggleClass('infinite');
            });
        },

    };
    window.PHPHub = PHPHub;
})(jQuery);

$(document).ready(function()
{
    PHPHub.init();
});

// reply a reply
function replyOne(username){
    replyContent = $("#reply_content");
    oldContent = replyContent.val();
    prefix = "@" + username + " ";
    newContent = ''
    if(oldContent.length > 0){
        if (oldContent != prefix) {
            newContent = oldContent + "\n" + prefix;
        }
    } else {
        newContent = prefix
    }
    replyContent.focus();
    replyContent.val(newContent);
    moveEnd($("#reply_content"));
}

var moveEnd = function(obj){
  obj.focus();

  var len = obj.value === undefined ? 0 : obj.value.length;

  if (document.selection) {
    var sel = obj.createTextRange();
    sel.moveStart('character',len);
    sel.collapse();
    sel.select();
  } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
    obj.selectionStart = obj.selectionEnd = len;
  }
}
//# sourceMappingURL=scripts.js.map
