(self.webpackChunkmain=self.webpackChunkmain||[]).push([[973],{91973:function(_t){_t.exports=function(){"use strict";function w(r){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function $(r,n){return($=Object.setPrototypeOf||function(s,c){return s.__proto__=c,s})(r,n)}function K(r,n,o){return(K=function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(c,b,y){var M=[null];M.push.apply(M,b);var Y=new(Function.bind.apply(c,M));return y&&$(Y,y.prototype),Y}).apply(null,arguments)}function O(r){return function Et(r){if(Array.isArray(r))return fe(r)}(r)||function At(r){if(typeof Symbol<"u"&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function yt(r,n){if(r){if("string"==typeof r)return fe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return fe(r,n)}}(r)||function gt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}var St=Object.hasOwnProperty,Ue=Object.setPrototypeOf,bt=Object.isFrozen,Ot=Object.getPrototypeOf,Rt=Object.getOwnPropertyDescriptor,E=Object.freeze,g=Object.seal,Lt=Object.create,He=typeof Reflect<"u"&&Reflect,Z=He.apply,ce=He.construct;Z||(Z=function(n,o,s){return n.apply(o,s)}),E||(E=function(n){return n}),g||(g=function(n){return n}),ce||(ce=function(n,o){return K(n,O(o))});var Nt=S(Array.prototype.forEach),ze=S(Array.prototype.pop),j=S(Array.prototype.push),J=S(String.prototype.toLowerCase),me=S(String.prototype.toString),Ge=S(String.prototype.match),R=S(String.prototype.replace),Mt=S(String.prototype.indexOf),Dt=S(String.prototype.trim),_=S(RegExp.prototype.test),pe=function wt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ce(r,o)}}(TypeError);function S(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];return Z(r,n,s)}}function l(r,n,o){var s;o=null!==(s=o)&&void 0!==s?s:J,Ue&&Ue(r,null);for(var c=n.length;c--;){var b=n[c];if("string"==typeof b){var y=o(b);y!==b&&(bt(n)||(n[c]=y),b=y)}r[b]=!0}return r}function x(r){var o,n=Lt(null);for(o in r)!0===Z(St,r,[o])&&(n[o]=r[o]);return n}function Q(r,n){for(;null!==r;){var o=Rt(r,n);if(o){if(o.get)return S(o.get);if("function"==typeof o.value)return S(o.value)}r=Ot(r)}return function s(c){return console.warn("fallback value for",c),null}}var We=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),de=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Te=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ct=E(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ve=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),It=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Be=E(["#text"]),$e=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),_e=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),je=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xt=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),kt=g(/<%[\w\W]*|[\w\W]*%>/gm),Pt=g(/\${[\w\W]*}/gm),Ft=g(/^data-[\-\w.\u00B7-\uFFFF]/),Ut=g(/^aria-[\-\w]+$/),Ht=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zt=g(/^(?:\w+script|data):/i),Gt=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wt=g(/^html$/i),Bt=g(/^[a-z][.\w]*(-[.\w]+)+$/i);return function Ye(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:typeof window>"u"?null:window,n=function(e){return Ye(e)};if(n.version="2.5.0",n.removed=[],!r||!r.document||9!==r.document.nodeType)return n.isSupported=!1,n;var o=r.document,s=r.document,c=r.DocumentFragment,b=r.HTMLTemplateElement,y=r.Node,M=r.Element,k=r.NodeFilter,Y=r.NamedNodeMap,Xt=void 0===Y?r.NamedNodeMap||r.MozNamedAttrMap:Y,Vt=r.HTMLFormElement,qt=r.DOMParser,te=r.trustedTypes,re=M.prototype,Kt=Q(re,"cloneNode"),Zt=Q(re,"nextSibling"),Jt=Q(re,"childNodes"),he=Q(re,"parentNode");if("function"==typeof b){var Ee=s.createElement("template");Ee.content&&Ee.content.ownerDocument&&(s=Ee.content.ownerDocument)}var L=function(n,o){if("object"!==w(n)||"function"!=typeof n.createPolicy)return null;var s=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(s=o.currentScript.getAttribute(c));var b="dompurify"+(s?"#"+s:"");try{return n.createPolicy(b,{createHTML:function(M){return M},createScriptURL:function(M){return M}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}}(te,o),Ae=L?L.createHTML(""):"",ye=s.implementation,Qt=s.createNodeIterator,er=s.createDocumentFragment,tr=s.getElementsByTagName,rr=o.importNode,Xe={};try{Xe=x(s).documentMode?s.documentMode:{}}catch{}var D={};n.isSupported="function"==typeof he&&ye&&void 0!==ye.createHTMLDocument&&9!==Xe;var F,d,ge=xt,Se=kt,be=Pt,ar=Ft,nr=Ut,ir=zt,Ve=Gt,or=Bt,Oe=Ht,m=null,qe=l({},[].concat(O(We),O(de),O(Te),O(ve),O(Be))),p=null,Ke=l({},[].concat(O($e),O(_e),O(je),O(ee))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,Re=null,Ze=!0,Le=!0,Je=!1,Qe=!0,U=!1,et=!0,P=!1,Ne=!1,Me=!1,H=!1,ne=!1,ie=!1,tt=!0,rt=!1,De=!0,V=!1,z={},G=null,at=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,it=l({},["audio","video","img","source","image","track"]),we=null,ot=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xhtml",W=C,Ce=!1,Ie=null,sr=l({},[oe,le,C],me),ur=["application/xhtml+xml","text/html"],B=null,cr=s.createElement("form"),lt=function(e){return e instanceof RegExp||e instanceof Function},xe=function(e){B&&B===e||((!e||"object"!==w(e))&&(e={}),e=x(e),F=F=-1===ur.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,d="application/xhtml+xml"===F?me:J,m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,d):qe,p="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,d):Ke,Ie="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,me):sr,we="ADD_URI_SAFE_ATTR"in e?l(x(ot),e.ADD_URI_SAFE_ATTR,d):ot,nt="ADD_DATA_URI_TAGS"in e?l(x(it),e.ADD_DATA_URI_TAGS,d):it,G="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,d):at,X="FORBID_TAGS"in e?l({},e.FORBID_TAGS,d):{},Re="FORBID_ATTR"in e?l({},e.FORBID_ATTR,d):{},z="USE_PROFILES"in e&&e.USE_PROFILES,Ze=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,Je=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Qe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,U=e.SAFE_FOR_TEMPLATES||!1,et=!1!==e.SAFE_FOR_XML,P=e.WHOLE_DOCUMENT||!1,H=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,tt=!1!==e.SANITIZE_DOM,rt=e.SANITIZE_NAMED_PROPS||!1,De=!1!==e.KEEP_CONTENT,V=e.IN_PLACE||!1,Oe=e.ALLOWED_URI_REGEXP||Oe,W=e.NAMESPACE||C,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),U&&(Le=!1),ne&&(H=!0),z&&(m=l({},O(Be)),p=[],!0===z.html&&(l(m,We),l(p,$e)),!0===z.svg&&(l(m,de),l(p,_e),l(p,ee)),!0===z.svgFilters&&(l(m,Te),l(p,_e),l(p,ee)),!0===z.mathMl&&(l(m,ve),l(p,je),l(p,ee))),e.ADD_TAGS&&(m===qe&&(m=x(m)),l(m,e.ADD_TAGS,d)),e.ADD_ATTR&&(p===Ke&&(p=x(p)),l(p,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&l(we,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(G===at&&(G=x(G)),l(G,e.FORBID_CONTENTS,d)),De&&(m["#text"]=!0),P&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete X.tbody),E&&E(e),B=e)},st=l({},["mi","mo","mn","ms","mtext"]),ut=l({},["foreignobject","desc","title","annotation-xml"]),mr=l({},["title","style","font","a","script"]),se=l({},de);l(se,Te),l(se,Ct);var ke=l({},ve);l(ke,It);var N=function(e){j(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ae}catch{e.remove()}}},Pe=function(e,t){try{j(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{j(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!p[e])if(H||ne)try{N(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ft=function(e){var t,a;if(Me)e="<remove></remove>"+e;else{var u=Ge(e,/^[\r\n\t ]+/);a=u&&u[0]}"application/xhtml+xml"===F&&W===C&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var A=L?L.createHTML(e):e;if(W===C)try{t=(new qt).parseFromString(A,F)}catch{}if(!t||!t.documentElement){t=ye.createDocument(W,"template",null);try{t.documentElement.innerHTML=Ce?Ae:A}catch{}}var h=t.body||t.documentElement;return e&&a&&h.insertBefore(s.createTextNode(a),h.childNodes[0]||null),W===C?tr.call(t,P?"html":"body")[0]:P?t.documentElement:h},ct=function(e){return Qt.call(e.ownerDocument||e,e,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null,!1)},q=function(e){return"object"===w(y)?e instanceof y:e&&"object"===w(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},I=function(e,t,a){D[e]&&Nt(D[e],function(u){u.call(n,t,a,B)})},mt=function(e){var t;if(I("beforeSanitizeElements",e,null),function(e){return e instanceof Vt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof Xt)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)}(e)||_(/[\u0080-\uFFFF]/,e.nodeName))return N(e),!0;var a=d(e.nodeName);if(I("uponSanitizeElement",e,{tagName:a,allowedTags:m}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)||"select"===a&&_(/<template/i,e.innerHTML)||7===e.nodeType||et&&8===e.nodeType&&_(/<[/\w]/g,e.data))return N(e),!0;if(!m[a]||X[a]){if(!X[a]&&dt(a)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a)))return!1;if(De&&!G[a]){var u=he(e)||e.parentNode,A=Jt(e)||e.childNodes;if(A&&u)for(var v=A.length-1;v>=0;--v)u.insertBefore(Kt(A[v],!0),Zt(e))}return N(e),!0}return e instanceof M&&!function(e){var t=he(e);(!t||!t.tagName)&&(t={namespaceURI:W,tagName:"template"});var a=J(e.tagName),u=J(t.tagName);return!!Ie[e.namespaceURI]&&(e.namespaceURI===le?t.namespaceURI===C?"svg"===a:t.namespaceURI===oe?"svg"===a&&("annotation-xml"===u||st[u]):!!se[a]:e.namespaceURI===oe?t.namespaceURI===C?"math"===a:t.namespaceURI===le?"math"===a&&ut[u]:!!ke[a]:e.namespaceURI===C?!(t.namespaceURI===le&&!ut[u]||t.namespaceURI===oe&&!st[u])&&!ke[a]&&(mr[a]||!se[a]):!("application/xhtml+xml"!==F||!Ie[e.namespaceURI]))}(e)||("noscript"===a||"noembed"===a||"noframes"===a)&&_(/<\/no(script|embed|frames)/i,e.innerHTML)?(N(e),!0):(U&&3===e.nodeType&&(t=R(t=e.textContent,ge," "),t=R(t,Se," "),t=R(t,be," "),e.textContent!==t&&(j(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},pt=function(e,t,a){if(tt&&("id"===t||"name"===t)&&(a in s||a in cr))return!1;if((!Le||Re[t]||!_(ar,t))&&(!Ze||!_(nr,t)))if(!p[t]||Re[t]){if(!(dt(e)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&_(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||"is"===t&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a))))return!1}else if(!we[t]&&!_(Oe,R(a,Ve,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Mt(a,"data:")||!nt[e])&&(!Je||_(ir,R(a,Ve,"")))&&a)return!1;return!0},dt=function(e){return"annotation-xml"!==e&&Ge(e,or)},Tt=function(e){var t,a,u,A;I("beforeSanitizeAttributes",e,null);var h=e.attributes;if(h){var v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};for(A=h.length;A--;){var T=(t=h[A]).name,Fe=t.namespaceURI;if(a="value"===T?t.value:Dt(t.value),u=d(T),v.attrName=u,v.attrValue=a,v.keepAttr=!0,v.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,v),a=v.attrValue,!v.forceKeepAttr&&(Pe(T,e),v.keepAttr)){if(!Qe&&_(/\/>/i,a)){Pe(T,e);continue}U&&(a=R(a,ge," "),a=R(a,Se," "),a=R(a,be," "));var vt=d(e.nodeName);if(pt(vt,u,a)){if(rt&&("id"===u||"name"===u)&&(Pe(T,e),a="user-content-"+a),L&&"object"===w(te)&&"function"==typeof te.getAttributeType&&!Fe)switch(te.getAttributeType(vt,u)){case"TrustedHTML":a=L.createHTML(a);break;case"TrustedScriptURL":a=L.createScriptURL(a)}try{Fe?e.setAttributeNS(Fe,T,a):e.setAttribute(T,a),ze(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},Tr=function i(e){var t,a=ct(e);for(I("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)I("uponSanitizeShadowNode",t,null),!mt(t)&&(t.content instanceof c&&i(t.content),Tt(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var t,a,u,A,h,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Ce=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!q(i)){if("function"!=typeof i.toString)throw pe("toString is not a function");if("string"!=typeof(i=i.toString()))throw pe("dirty is not a string, aborting")}if(!n.isSupported){if("object"===w(r.toStaticHTML)||"function"==typeof r.toStaticHTML){if("string"==typeof i)return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ne||xe(e),n.removed=[],"string"==typeof i&&(V=!1),V){if(i.nodeName){var v=d(i.nodeName);if(!m[v]||X[v])throw pe("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof y)1===(a=(t=ft("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?t=a:t.appendChild(a);else{if(!H&&!U&&!P&&-1===i.indexOf("<"))return L&&ie?L.createHTML(i):i;if(!(t=ft(i)))return H?null:ie?Ae:""}t&&Me&&N(t.firstChild);for(var ue=ct(V?i:t);u=ue.nextNode();)3===u.nodeType&&u===A||mt(u)||(u.content instanceof c&&Tr(u.content),Tt(u),A=u);if(A=null,V)return i;if(H){if(ne)for(h=er.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return(p.shadowroot||p.shadowrootmod)&&(h=rr.call(o,h,!0)),h}var T=P?t.outerHTML:t.innerHTML;return P&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&_(Wt,t.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+T),U&&(T=R(T,ge," "),T=R(T,Se," "),T=R(T,be," ")),L&&ie?L.createHTML(T):T},n.setConfig=function(i){xe(i),Ne=!0},n.clearConfig=function(){B=null,Ne=!1},n.isValidAttribute=function(i,e,t){B||xe({});var a=d(i),u=d(e);return pt(a,u,t)},n.addHook=function(i,e){"function"==typeof e&&(D[i]=D[i]||[],j(D[i],e))},n.removeHook=function(i){if(D[i])return ze(D[i])},n.removeHooks=function(i){D[i]&&(D[i]=[])},n.removeAllHooks=function(){D={}},n}()}()}}]);