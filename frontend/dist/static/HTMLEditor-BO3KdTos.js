import{n as J,c as K}from"./index-id_R8LyY.js";var W="#fff",z="20px",X="13px",Y=`
.codeflask {
  background: `+W+`;
  color: #4f559c;
}

.codeflask .token.punctuation {
  color: #4a4a4a;
}

.codeflask .token.keyword {
  color: #8500ff;
}

.codeflask .token.operator {
  color: #ff5598;
}

.codeflask .token.string {
  color: #41ad8f;
}

.codeflask .token.comment {
  color: #9badb7;
}

.codeflask .token.function {
  color: #8500ff;
}

.codeflask .token.boolean {
  color: #8500ff;
}

.codeflask .token.number {
  color: #8500ff;
}

.codeflask .token.selector {
  color: #8500ff;
}

.codeflask .token.property {
  color: #8500ff;
}

.codeflask .token.tag {
  color: #8500ff;
}

.codeflask .token.attr-value {
  color: #8500ff;
}
`;function Q(a,e){return typeof CSS<"u"?CSS.supports(a,e):typeof document<"u"&&V(a)in document.body.style}function V(a){return(a=a.split("-").filter(function(e){return!!e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(""))[0].toLowerCase()+a.substr(1)}var P='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',ee=Q("caret-color","#000")?W:"#ccc",C="40px",te=`
  .codeflask {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .codeflask, .codeflask * {
    box-sizing: border-box;
  }

  .codeflask__pre {
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
  }

  .codeflask__textarea {
    background: none;
    border: none;
    color: `+ee+`;
    z-index: 1;
    resize: none;
    font-family: `+P+`;
    -webkit-appearance: pre;
    caret-color: #111;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .codeflask--has-line-numbers .codeflask__textarea {
    width: calc(100% - `+C+`);
  }

  .codeflask__code {
    display: block;
    font-family: `+P+`;
    overflow: hidden;
  }

  .codeflask__flatten {
    padding: 10px;
    font-size: `+X+`;
    line-height: `+z+`;
    white-space: pre;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    margin: 0 !important;
    outline: none;
    text-align: left;
  }

  .codeflask--has-line-numbers .codeflask__flatten {
    width: calc(100% - `+C+`);
    left: `+C+`;
  }

  .codeflask__line-highlight {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: `+z+`;
    background: rgba(0,0,0,0.1);
    z-index: 1;
  }

  .codeflask__lines {
    padding: 10px 4px;
    font-size: 12px;
    line-height: `+z+`;
    font-family: 'Cousine', monospace;
    position: absolute;
    left: 0;
    top: 0;
    width: `+C+`;
    height: 100%;
    text-align: right;
    color: #999;
    z-index: 2;
  }

  .codeflask__lines__line {
    display: block;
  }

  .codeflask.codeflask--has-line-numbers {
    padding-left: `+C+`;
  }

  .codeflask.codeflask--has-line-numbers:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: `+C+`;
    height: 100%;
    background: #eee;
    z-index: 1;
  }
`;function R(a,e,o){var c=e||"codeflask-style",h=o||document.head;if(!a)return!1;if(document.getElementById(c))return!0;var s=document.createElement("style");return s.innerHTML=a,s.id=c,h.appendChild(s),!0}var ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function H(a){return String(a).replace(/[&<>"'`=/]/g,function(e){return ne[e]})}var D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ae(a,e){return a(e={exports:{}},e.exports),e.exports}var B=ae(function(a){var e=function(o){var c=/\blang(?:uage)?-([\w-]+)\b/i,h=0,s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function(n){return n instanceof f?new f(n.type,s.util.encode(n.content),n.alias):Array.isArray(n)?n.map(s.util.encode):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++h}),n.__id},clone:function n(t,i){var r,l,p=s.util.type(t);switch(i=i||{},p){case"Object":if(l=s.util.objId(t),i[l])return i[l];for(var u in r={},i[l]=r,t)t.hasOwnProperty(u)&&(r[u]=n(t[u],i));return r;case"Array":return l=s.util.objId(t),i[l]?i[l]:(r=[],i[l]=r,t.forEach(function(m,k){r[k]=n(m,i)}),r);default:return t}}},languages:{extend:function(n,t){var i=s.util.clone(s.languages[n]);for(var r in t)i[r]=t[r];return i},insertBefore:function(n,t,i,r){var l=(r=r||s.languages)[n],p={};for(var u in l)if(l.hasOwnProperty(u)){if(u==t)for(var m in i)i.hasOwnProperty(m)&&(p[m]=i[m]);i.hasOwnProperty(u)||(p[u]=l[u])}var k=r[n];return r[n]=p,s.languages.DFS(s.languages,function(x,b){b===k&&x!=n&&(this[x]=p)}),p},DFS:function n(t,i,r,l){l=l||{};var p=s.util.objId;for(var u in t)if(t.hasOwnProperty(u)){i.call(t,u,t[u],r||u);var m=t[u],k=s.util.type(m);k!=="Object"||l[p(m)]?k!=="Array"||l[p(m)]||(l[p(m)]=!0,n(m,i,u,l)):(l[p(m)]=!0,n(m,i,null,l))}}},plugins:{},highlightAll:function(n,t){s.highlightAllUnder(document,n,t)},highlightAllUnder:function(n,t,i){var r={callback:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r);for(var l,p=r.elements||n.querySelectorAll(r.selector),u=0;l=p[u++];)s.highlightElement(l,t===!0,r.callback)},highlightElement:function(n,t,i){for(var r,l,p=n;p&&!c.test(p.className);)p=p.parentNode;p&&(r=(p.className.match(c)||[,""])[1].toLowerCase(),l=s.languages[r]),n.className=n.className.replace(c,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&(p=n.parentNode,/pre/i.test(p.nodeName)&&(p.className=p.className.replace(c,"").replace(/\s+/g," ")+" language-"+r));var u={element:n,language:r,grammar:l,code:n.textContent},m=function(x){u.highlightedCode=x,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),i&&i.call(u.element)};if(s.hooks.run("before-sanity-check",u),u.code)if(s.hooks.run("before-highlight",u),u.grammar)if(t&&o.Worker){var k=new Worker(s.filename);k.onmessage=function(x){m(x.data)},k.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else m(s.highlight(u.code,u.grammar,u.language));else m(s.util.encode(u.code));else s.hooks.run("complete",u)},highlight:function(n,t,i){var r={code:n,grammar:t,language:i};return s.hooks.run("before-tokenize",r),r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),f.stringify(s.util.encode(r.tokens),r.language)},matchGrammar:function(n,t,i,r,l,p,u){for(var m in i)if(i.hasOwnProperty(m)&&i[m]){if(m==u)return;var k=i[m];k=s.util.type(k)==="Array"?k:[k];for(var x=0;x<k.length;++x){var b=k[x],M=b.inside,I=!!b.lookbehind,E=!!b.greedy,L=0,q=b.alias;if(E&&!b.pattern.global){var U=b.pattern.toString().match(/[imuy]*$/)[0];b.pattern=RegExp(b.pattern.source,U+"g")}b=b.pattern||b;for(var v=r,w=l;v<t.length;w+=t[v].length,++v){var A=t[v];if(t.length>n.length)return;if(!(A instanceof f)){if(E&&v!=t.length-1){if(b.lastIndex=w,!(y=b.exec(n)))break;for(var T=y.index+(I?y[1].length:0),N=y.index+y[0].length,F=v,_=w,G=t.length;F<G&&(_<N||!t[F].type&&!t[F-1].greedy);++F)T>=(_+=t[F].length)&&(++v,w=_);if(t[v]instanceof f)continue;$=F-v,A=n.slice(w,_),y.index-=w}else{b.lastIndex=0;var y=b.exec(A),$=1}if(y){I&&(L=y[1]?y[1].length:0),N=(T=y.index+L)+(y=y[0].slice(L)).length;var j=A.slice(0,T),O=A.slice(N),S=[v,$];j&&(++v,w+=j.length,S.push(j));var Z=new f(m,M?s.tokenize(y,M):y,q,y,E);if(S.push(Z),O&&S.push(O),Array.prototype.splice.apply(t,S),$!=1&&s.matchGrammar(n,t,i,v,w,!0,m),p)break}else if(p)break}}}}},tokenize:function(n,t){var i=[n],r=t.rest;if(r){for(var l in r)t[l]=r[l];delete t.rest}return s.matchGrammar(n,i,t,0,0,!1),i},hooks:{all:{},add:function(n,t){var i=s.hooks.all;i[n]=i[n]||[],i[n].push(t)},run:function(n,t){var i=s.hooks.all[n];if(i&&i.length)for(var r,l=0;r=i[l++];)r(t)}},Token:f};function f(n,t,i,r,l){this.type=n,this.content=t,this.alias=i,this.length=0|(r||"").length,this.greedy=!!l}if(o.Prism=s,f.stringify=function(n,t,i){if(typeof n=="string")return n;if(Array.isArray(n))return n.map(function(u){return f.stringify(u,t,n)}).join("");var r={type:n.type,content:f.stringify(n.content,t,i),tag:"span",classes:["token",n.type],attributes:{},language:t,parent:i};if(n.alias){var l=Array.isArray(n.alias)?n.alias:[n.alias];Array.prototype.push.apply(r.classes,l)}s.hooks.run("wrap",r);var p=Object.keys(r.attributes).map(function(u){return u+'="'+(r.attributes[u]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(p?" "+p:"")+">"+r.content+"</"+r.tag+">"},!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(n){var t=JSON.parse(n.data),i=t.language,r=t.code,l=t.immediateClose;o.postMessage(s.highlight(r,s.languages[i],i)),l&&o.close()},!1)),s;var d=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return d&&(s.filename=d.src,s.manual||d.hasAttribute("data-manual")||(document.readyState!=="loading"?window.requestAnimationFrame?window.requestAnimationFrame(s.highlightAll):window.setTimeout(s.highlightAll,16):document.addEventListener("DOMContentLoaded",s.highlightAll))),s}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});a.exports&&(a.exports=e),D!==void 0&&(D.Prism=e),e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(o,c){var h={};h["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[c]},h.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:h}};s["language-"+c]={pattern:/[\s\S]+/,inside:e.languages[c]};var f={};f[o]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,o),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",f)}}),e.languages.xml=e.languages.extend("markup",{}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,function(o){var c=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+c.source+"|.*?)\\)","i"),selector:RegExp(`[^{}\\s](?:[^{};"']|`+c.source+")*?(?=\\s*\\{)"),string:{pattern:c,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var h=o.languages.markup;h&&(h.tag.addInlined("style","css"),o.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:h.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:o.languages.css}},alias:"language-css"}},h.tag))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript,typeof self<"u"&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(o){o=o||document;var c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(o.querySelectorAll("pre[data-src]")).forEach(function(h){if(!h.hasAttribute("data-src-loaded")){for(var s,f=h.getAttribute("data-src"),d=h,n=/\blang(?:uage)?-([\w-]+)\b/i;d&&!n.test(d.className);)d=d.parentNode;if(d&&(s=(h.className.match(n)||[,""])[1]),!s){var t=(f.match(/\.(\w+)$/)||[,""])[1];s=c[t]||t}var i=document.createElement("code");i.className="language-"+s,h.textContent="",i.textContent="Loading…",h.appendChild(i);var r=new XMLHttpRequest;r.open("GET",f,!0),r.onreadystatechange=function(){r.readyState==4&&(r.status<400&&r.responseText?(i.textContent=r.responseText,e.highlightElement(i),h.setAttribute("data-src-loaded","")):r.status>=400?i.textContent="✖ Error "+r.status+" while fetching file: "+r.statusText:i.textContent="✖ Error: File does not exist or is empty")},r.send(null)}}),e.plugins.toolbar&&e.plugins.toolbar.registerButton("download-file",function(h){var s=h.element.parentNode;if(s&&/pre/i.test(s.nodeName)&&s.hasAttribute("data-src")&&s.hasAttribute("data-download-link")){var f=s.getAttribute("data-src"),d=document.createElement("a");return d.textContent=s.getAttribute("data-download-link-label")||"Download",d.setAttribute("download",""),d.href=f,d}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}),g=function(a,e){if(!a)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!e)throw Error("CodeFlask expects an object containing options as second parameter");if(a.nodeType)this.editorRoot=a;else{var o=document.querySelector(a);o&&(this.editorRoot=o)}this.opts=e,this.startEditor()};g.prototype.startEditor=function(){if(!R(te,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)},g.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")},g.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")},g.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")},g.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"))},g.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber()},g.prototype.createElement=function(a,e){var o=document.createElement(a);return e.appendChild(o),o},g.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=this.opts.defaultTheme!==!1,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,typeof this.opts.handleTabs!="boolean"&&(this.opts.handleTabs=!0),typeof this.opts.handleSelfClosingCharacters!="boolean"&&(this.opts.handleSelfClosingCharacters=!0),typeof this.opts.handleNewLineIndentation!="boolean"&&(this.opts.handleNewLineIndentation=!0),this.opts.rtl===!0&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),this.opts.enableAutocorrect===!1&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&R(Y,"theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()},g.prototype.updateLineNumbersCount=function(){for(var a="",e=1;e<=this.lineNumber;e++)a=a+'<span class="codeflask__lines__line">'+e+"</span>";this.elLineNumbers.innerHTML=a},g.prototype.listenTextarea=function(){var a=this;this.elTextarea.addEventListener("input",function(e){a.code=e.target.value,a.elCode.innerHTML=H(e.target.value),a.highlight(),setTimeout(function(){a.runUpdate(),a.setLineNumber()},1)}),this.elTextarea.addEventListener("keydown",function(e){a.handleTabs(e),a.handleSelfClosingCharacters(e),a.handleNewLineIndentation(e)}),this.elTextarea.addEventListener("scroll",function(e){a.elPre.style.transform="translate3d(-"+e.target.scrollLeft+"px, -"+e.target.scrollTop+"px, 0)",a.elLineNumbers&&(a.elLineNumbers.style.transform="translate3d(0, -"+e.target.scrollTop+"px, 0)")})},g.prototype.handleTabs=function(a){if(this.opts.handleTabs){if(a.keyCode!==9)return;a.preventDefault();var e=this.elTextarea,o=e.selectionDirection,c=e.selectionStart,h=e.selectionEnd,s=e.value,f=s.substr(0,c),d=s.substring(c,h),n=s.substring(h),t=" ".repeat(this.opts.tabSize);if(c!==h&&d.length>=t.length){var i=c-f.split(`
`).pop().length,r=t.length,l=t.length;a.shiftKey?(s.substr(i,t.length)===t?(r=-r,i>c?(d=d.substring(0,i)+d.substring(i+t.length),l=0):i===c?(r=0,l=0,d=d.substring(t.length)):(l=-l,f=f.substring(0,i)+f.substring(i+t.length))):(r=0,l=0),d=d.replace(new RegExp(`
`+t.split("").join("\\"),"g"),`
`)):(f=f.substr(0,i)+t+f.substring(i,c),d=d.replace(/\n/g,`
`+t)),e.value=f+d+n,e.selectionStart=c+r,e.selectionEnd=c+d.length+l,e.selectionDirection=o}else e.value=f+t+n,e.selectionStart=c+t.length,e.selectionEnd=c+t.length;var p=e.value;this.updateCode(p),this.elTextarea.selectionEnd=h+this.opts.tabSize}},g.prototype.handleSelfClosingCharacters=function(a){if(this.opts.handleSelfClosingCharacters){var e=a.key;if(["(","[","{","<","'",'"'].includes(e)||[")","]","}",">","'",'"'].includes(e))switch(e){case"(":case")":this.closeCharacter(e);break;case"[":case"]":this.closeCharacter(e);break;case"{":case"}":this.closeCharacter(e);break;case"<":case">":case"'":case'"':this.closeCharacter(e)}}},g.prototype.setLineNumber=function(){this.lineNumber=this.code.split(`
`).length,this.opts.lineNumbers&&this.updateLineNumbersCount()},g.prototype.handleNewLineIndentation=function(a){if(this.opts.handleNewLineIndentation&&a.keyCode===13){a.preventDefault();var e=this.elTextarea,o=e.selectionStart,c=e.selectionEnd,h=e.value,s=h.substr(0,o),f=h.substring(c),d=h.lastIndexOf(`
`,o-1),n=d+h.slice(d+1).search(/[^ ]|$/),t=n>d?n-d:0,i=s+`
`+" ".repeat(t)+f;e.value=i,e.selectionStart=o+t+1,e.selectionEnd=o+t+1,this.updateCode(e.value)}},g.prototype.closeCharacter=function(a){var e=this.elTextarea.selectionStart,o=this.elTextarea.selectionEnd;if(this.skipCloseChar(a)){var c=this.code.substr(o,1)===a,h=c?o+1:o,s=!c&&["'",'"'].includes(a)?a:"",f=""+this.code.substring(0,e)+s+this.code.substring(h);this.updateCode(f),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{var d=a;switch(a){case"(":d=String.fromCharCode(a.charCodeAt()+1);break;case"<":case"{":case"[":d=String.fromCharCode(a.charCodeAt()+2)}var n=this.code.substring(e,o),t=""+this.code.substring(0,e)+n+d+this.code.substring(o);this.updateCode(t)}this.elTextarea.selectionEnd=e},g.prototype.skipCloseChar=function(a){var e=this.elTextarea.selectionStart,o=this.elTextarea.selectionEnd,c=Math.abs(o-e)>0;return[")","}","]",">"].includes(a)||["'",'"'].includes(a)&&!c},g.prototype.updateCode=function(a){this.code=a,this.elTextarea.value=a,this.elCode.innerHTML=H(a),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)},g.prototype.updateLanguage=function(a){var e=this.opts.language;this.elCode.classList.remove("language-"+e),this.elCode.classList.add("language-"+a),this.opts.language=a,this.highlight()},g.prototype.addLanguage=function(a,e){B.languages[a]=e},g.prototype.populateDefault=function(){this.updateCode(this.code)},g.prototype.highlight=function(){B.highlightElement(this.elCode,!1)},g.prototype.onUpdate=function(a){if(a&&{}.toString.call(a)!=="[object Function]")throw Error("CodeFlask expects callback of type Function");this.updateCallBack=a},g.prototype.getCode=function(){return this.code},g.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code)},g.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0)},g.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly")};const se={props:{value:{type:String,default:""},language:{type:String,default:"html"},disabled:Boolean},data(){return{data:"",flask:null}},methods:{initHTMLEditor(a){const e=document.createElement("code-flask");e.attachShadow({mode:"open"}),e.shadowRoot.innerHTML=`
        <style>
          .codeflask .codeflask__flatten { 
            font-size: 15px;
            white-space: pre-wrap ;
            word-break: break-word ;
          }
          .codeflask .codeflask__lines { background: #fafafa; z-index: 10; }
          .codeflask .token.tag { font-weight: bold; }
          .codeflask .token.attr-name { color: #111; }
          .codeflask .token.attr-value { color: ${K.primary} !important; }
        </style>
        <div id="area"></area>
      `,this.$refs.htmlEditor.appendChild(e),this.flask=new g(e.shadowRoot.getElementById("area"),{language:this.$props.language,lineNumbers:!1,styleParent:e.shadowRoot,readonly:this.disabled}),this.flask.onUpdate(o=>{this.data=o,this.$emit("input",o)}),this.flask.updateCode(a),this.$nextTick(()=>{document.querySelector("code-flask").shadowRoot.querySelector("textarea").focus()})}},mounted(){this.initHTMLEditor(this.$props.value||"")},watch:{value(a){a!==this.data&&this.flask.updateCode(a)}}};var re=function(){var e=this,o=e._self._c;return o("div",{ref:"htmlEditor",staticClass:"html-editor",attrs:{id:"html-editor"}})},ie=[],oe=J(se,re,ie);const ue=oe.exports;export{g as C,ue as H};
