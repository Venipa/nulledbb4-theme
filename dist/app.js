(()=>{"use strict";var e,t={677:()=>{function e(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function r(e){return e instanceof t(e).Element||e instanceof Element}function o(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function i(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function c(t){return e(s(t)).left+n(t).scrollLeft}function u(e){return t(e).getComputedStyle(e)}function p(e){var t=u(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function f(r,i,u){void 0===u&&(u=!1);var f,d,l=s(i),m=e(r),v=o(i),h={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(v||!v&&!u)&&(("body"!==a(i)||p(l))&&(h=(f=i)!==t(f)&&o(f)?{scrollLeft:(d=f).scrollLeft,scrollTop:d.scrollTop}:n(f)),o(i)?((b=e(i)).x+=i.clientLeft,b.y+=i.clientTop):l&&(b.x=c(l))),{x:m.left+h.scrollLeft-b.x,y:m.top+h.scrollTop-b.y,width:m.width,height:m.height}}function d(t){var n=e(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(n.width-r)<=1&&(r=n.width),Math.abs(n.height-o)<=1&&(o=n.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function l(e){return"html"===a(e)?e:e.assignedSlot||e.parentNode||(i(e)?e.host:null)||s(e)}function m(e){return["html","body","#document"].indexOf(a(e))>=0?e.ownerDocument.body:o(e)&&p(e)?e:m(l(e))}function v(e,n){var r;void 0===n&&(n=[]);var o=m(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],p(o)?o:[]):o,c=n.concat(s);return i?c:c.concat(v(l(s)))}function h(e){return["table","td","th"].indexOf(a(e))>=0}function b(e){return o(e)&&"fixed"!==u(e).position?e.offsetParent:null}function g(e){for(var n=t(e),r=b(e);r&&h(r)&&"static"===u(r).position;)r=b(r);return r&&("html"===a(r)||"body"===a(r)&&"static"===u(r).position)?n:r||function(e){for(var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=l(e);o(n)&&["html","body"].indexOf(a(n))<0;){var r=u(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||n}var y="top",w="bottom",x="right",O="left",E="auto",T=[y,w,x,O],A="start",j="end",D="viewport",L="popper",k=T.reduce((function(e,t){return e.concat([t+"-"+A,t+"-"+j])}),[]),C=[].concat(T,[E]).reduce((function(e,t){return e.concat([t,t+"-"+A,t+"-"+j])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?W:i;return function(e,t,n){void 0===n&&(n=a);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],p=!1,l={state:c,setOptions:function(n){m(),c.options=Object.assign({},a,c.options,n),c.scrollParents={reference:r(e)?v(e):e.contextElement?v(e.contextElement):[],popper:v(t)};var i=function(e){var t=S(e);return M.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,c.options.modifiers)));return c.orderedModifiers=i.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:l,options:r}),a=function(){};u.push(i||a)}})),l.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(P(t,n)){c.rects={reference:f(t,g(n),"fixed"===c.options.strategy),popper:d(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:l})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){l.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){m(),p=!0}};if(!P(e,t))return l;function m(){u.forEach((function(e){return e()})),u=[]}return l.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var H={passive:!0};const B={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,u=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,H)})),c&&u.addEventListener("resize",r.update,H),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,H)})),c&&u.removeEventListener("resize",r.update,H)}},data:{}};function R(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function N(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?R(o):null,a=o?I(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case y:t={x:s,y:n.y-r.height};break;case w:t={x:s,y:n.y+n.height};break;case x:t={x:n.x+n.width,y:c};break;case O:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?_(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case A:t[u]=t[u]-(n[p]/2-r[p]/2);break;case j:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}const q={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=N({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var U=Math.max,F=Math.min,z=Math.round,X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,c=e.position,p=e.gpuAcceleration,f=e.adaptive,d=e.roundOffsets,l=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:z(z(t*r)/r)||0,y:z(z(n*r)/r)||0}}(a):"function"==typeof d?d(a):a,m=l.x,v=void 0===m?0:m,h=l.y,b=void 0===h?0:h,E=a.hasOwnProperty("x"),T=a.hasOwnProperty("y"),A=O,j=y,D=window;if(f){var L=g(r),k="clientHeight",C="clientWidth";L===t(r)&&"static"!==u(L=s(r)).position&&(k="scrollHeight",C="scrollWidth"),L=L,i===y&&(j=w,b-=L[k]-o.height,b*=p?1:-1),i===O&&(A=x,v-=L[C]-o.width,v*=p?1:-1)}var M,S=Object.assign({position:c},f&&X);return p?Object.assign({},S,((M={})[j]=T?"0":"",M[A]=E?"0":"",M.transform=(D.devicePixelRatio||1)<2?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",M)):Object.assign({},S,((n={})[j]=T?b+"px":"",n[A]=E?v+"px":"",n.transform="",n))}const J={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];o(i)&&a(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});o(r)&&a(r)&&(Object.assign(r.style,s),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var K={start:"end",end:"start"};function Z(e){return e.replace(/start|end/g,(function(e){return K[e]}))}function ee(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&i(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(r,i){return i===D?te(function(e){var n=t(e),r=s(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,u=0,p=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(u=o.offsetLeft,p=o.offsetTop)),{width:i,height:a,x:u+c(e),y:p}}(r)):o(i)?function(t){var n=e(t);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(i):te(function(e){var t,r=s(e),o=n(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=U(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),p=U(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),f=-o.scrollLeft+c(e),d=-o.scrollTop;return"rtl"===u(i||r).direction&&(f+=U(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:p,x:f,y:d}}(s(r)))}function re(e,t,n){var i="clippingParents"===t?function(e){var t=v(l(e)),n=["absolute","fixed"].indexOf(u(e).position)>=0&&o(e)?g(e):e;return r(n)?t.filter((function(e){return r(e)&&ee(e,n)&&"body"!==a(e)})):[]}(e):[].concat(t),s=[].concat(i,[n]),c=s[0],p=s.reduce((function(t,n){var r=ne(e,n);return t.top=U(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=U(r.left,t.left),t}),ne(e,c));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ae(t,n){void 0===n&&(n={});var o=n,i=o.placement,a=void 0===i?t.placement:i,c=o.boundary,u=void 0===c?"clippingParents":c,p=o.rootBoundary,f=void 0===p?D:p,d=o.elementContext,l=void 0===d?L:d,m=o.altBoundary,v=void 0!==m&&m,h=o.padding,b=void 0===h?0:h,g=oe("number"!=typeof b?b:ie(b,T)),O=l===L?"reference":L,E=t.elements.reference,A=t.rects.popper,j=t.elements[v?O:l],k=re(r(j)?j:j.contextElement||s(t.elements.popper),u,f),C=e(E),M=N({reference:C,element:A,strategy:"absolute",placement:a}),S=te(Object.assign({},A,M)),W=l===L?S:C,P={top:k.top-W.top+g.top,bottom:W.bottom-k.bottom+g.bottom,left:k.left-W.left+g.left,right:W.right-k.right+g.right},V=t.modifiersData.offset;if(l===L&&V){var H=V[a];Object.keys(P).forEach((function(e){var t=[x,w].indexOf(e)>=0?1:-1,n=[y,w].indexOf(e)>=0?"y":"x";P[e]+=H[n]*t}))}return P}function se(e,t,n){return U(e,F(t,n))}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ue(e){return[y,x,w,O].some((function(t){return e[t]>=0}))}var pe=V({defaultModifiers:[B,q,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:R(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Y(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Y(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},J,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=C.reduce((function(e,n){return e[n]=function(e,t,n){var r=R(e),o=[O,y].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[O,x].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,b=R(h),g=c||(b===h||!m?[G(h)]:function(e){if(R(e)===E)return[];var t=G(e);return[Z(e),t,Z(t)]}(h)),j=[h].concat(g).reduce((function(e,n){return e.concat(R(n)===E?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?C:c,p=I(r),f=p?s?k:k.filter((function(e){return I(e)===p})):T,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var l=d.reduce((function(t,n){return t[n]=ae(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[R(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),D=t.rects.reference,L=t.rects.popper,M=new Map,S=!0,W=j[0],P=0;P<j.length;P++){var V=j[P],H=R(V),B=I(V)===A,_=[y,w].indexOf(H)>=0,N=_?"width":"height",q=ae(t,{placement:V,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),U=_?B?x:O:B?w:y;D[N]>L[N]&&(U=G(U));var $=G(U),F=[];if(i&&F.push(q[H]<=0),s&&F.push(q[U]<=0,q[$]<=0),F.every((function(e){return e}))){W=V,S=!1;break}M.set(V,F)}if(S)for(var z=function(e){var t=j.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return W=t,"break"},X=m?3:1;X>0;X--){if("break"===z(X))break}t.placement!==W&&(t.modifiersData[r]._skip=!0,t.placement=W,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,l=n.tether,m=void 0===l||l,v=n.tetherOffset,h=void 0===v?0:v,b=ae(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),E=R(t.placement),T=I(t.placement),j=!T,D=_(E),L="x"===D?"y":"x",k=t.modifiersData.popperOffsets,C=t.rects.reference,M=t.rects.popper,S="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(k){if(i||s){var P="y"===D?y:O,V="y"===D?w:x,H="y"===D?"height":"width",B=k[D],N=k[D]+b[P],q=k[D]-b[V],$=m?-M[H]/2:0,z=T===A?C[H]:M[H],X=T===A?-M[H]:-C[H],Y=t.elements.arrow,J=m&&Y?d(Y):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Q[P],K=Q[V],Z=se(0,C[H],J[H]),ee=j?C[H]/2-$-Z-G-S:z-Z-G-S,te=j?-C[H]/2+$+Z+K+S:X+Z+K+S,ne=t.elements.arrow&&g(t.elements.arrow),re=ne?"y"===D?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0,ie=k[D]+ee-oe-re,ce=k[D]+te-oe;if(i){var ue=se(m?F(N,ie):N,B,m?U(q,ce):q);k[D]=ue,W[D]=ue-B}if(s){var pe="x"===D?y:O,fe="x"===D?w:x,de=k[L],le=de+b[pe],me=de-b[fe],ve=se(m?F(le,ie):le,de,m?U(me,ce):me);k[L]=ve,W[L]=ve-de}}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=R(n.placement),c=_(s),u=[O,x].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return oe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ie(e,T))}(o.padding,n),f=d(i),l="y"===c?y:O,m="y"===c?w:x,v=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],b=g(i),E=b?"y"===c?b.clientHeight||0:b.clientWidth||0:0,A=v/2-h/2,j=p[l],D=E-f[u]-p[m],L=E/2-f[u]/2+A,k=se(j,L,D),C=c;n.modifiersData[r]=((t={})[C]=k,t.centerOffset=k-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ee(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),c=ce(a,r),u=ce(s,o,i),p=ue(c),f=ue(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),fe="tippy-content",de="tippy-backdrop",le="tippy-arrow",me="tippy-svg-arrow",ve={passive:!0,capture:!0};function he(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function be(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ge(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ye(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function we(e){return[].concat(e)}function xe(e,t){-1===e.indexOf(t)&&e.push(t)}function Oe(e){return e.split("-")[0]}function Ee(e){return[].slice.call(e)}function Te(){return document.createElement("div")}function Ae(e){return["Element","Fragment"].some((function(t){return be(e,t)}))}function je(e){return be(e,"MouseEvent")}function De(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Le(e){return Ae(e)?[e]:function(e){return be(e,"NodeList")}(e)?Ee(e):Array.isArray(e)?e:Ee(document.querySelectorAll(e))}function ke(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Ce(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Me(e){var t,n=we(e)[0];return(null==n||null==(t=n.ownerDocument)?void 0:t.body)?n.ownerDocument:document}function Se(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var We={isTouch:!1},Pe=0;function Ve(){We.isTouch||(We.isTouch=!0,window.performance&&document.addEventListener("mousemove",He))}function He(){var e=performance.now();e-Pe<20&&(We.isTouch=!1,document.removeEventListener("mousemove",He)),Pe=e}function Be(){var e=document.activeElement;if(De(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var Re="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",Ie=/MSIE |Trident\//.test(Re);var _e={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ne=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},_e,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),qe=Object.keys(Ne);function Ue(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},t)}function $e(e,t){var n=Object.assign({},t,{content:ge(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Ue(Object.assign({},Ne,{plugins:t}))):qe).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ne.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Fe(e,t){e.innerHTML=t}function ze(e){var t=Te();return!0===e?t.className=le:(t.className=me,Ae(e)?t.appendChild(e):Fe(t,e)),t}function Xe(e,t){Ae(t.content)?(Fe(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Fe(e,t.content):e.textContent=t.content)}function Ye(e){var t=e.firstElementChild,n=Ee(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(fe)})),arrow:n.find((function(e){return e.classList.contains(le)||e.classList.contains(me)})),backdrop:n.find((function(e){return e.classList.contains(de)}))}}function Je(e){var t=Te(),n=Te();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Te();function o(n,r){var o=Ye(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Xe(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(ze(r.arrow))):i.appendChild(ze(r.arrow)):s&&i.removeChild(s)}return r.className=fe,r.setAttribute("data-state","hidden"),Xe(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Je.$$tippy=!0;var Qe=1,Ge=[],Ke=[];function Ze(e,t){var n,r,o,i,a,s,c,u,p,f=$e(e,Object.assign({},Ne,{},Ue((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],b=ye(Y,f.interactiveDebounce),g=Qe++,y=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),w={id:g,reference:e,popper:Te(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){0;if(w.state.isDestroyed)return;P("onBeforeUpdate",[w,t]),z();var n=w.props,r=$e(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,F(),n.interactiveDebounce!==r.interactiveDebounce&&(B(),b=ye(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?we(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");H(),W(),E&&E(n,r);w.popperInstance&&(K(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));P("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){0;var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=We.isTouch&&!w.props.touch,o=he(w.props.duration,0,Ne.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(P("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,L()&&(O.style.visibility="visible");W(),N(),w.state.isMounted||(O.style.transition="none");if(L()){var i=M(),a=i.box,s=i.content;ke([a,s],0)}c=function(){var e;if(w.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,L()&&w.props.animation){var t=M(),n=t.box,r=t.content;ke([n,r],o),Ce([n,r],"visible")}V(),H(),xe(Ke,w),null==(e=w.popperInstance)||e.forceUpdate(),w.state.isMounted=!0,P("onMount",[w]),w.props.animation&&L()&&function(e,t){U(e,t)}(o,(function(){w.state.isShown=!0,P("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=k();e=w.props.interactive&&t===Ne.appendTo||"parent"===t?n.parentNode:ge(t,[n]);e.contains(O)||e.appendChild(O);K(),!1}()},hide:function(){0;var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=he(w.props.duration,1,Ne.duration);if(e||t||n)return;if(P("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,L()&&(O.style.visibility="hidden");if(B(),q(),W(),L()){var o=M(),i=o.box,a=o.content;w.props.animation&&(ke([i,a],r),Ce([i,a],"hidden"))}V(),H(),w.props.animation?L()&&function(e,t){U(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){0;C().addEventListener("mousemove",b),xe(Ge,b),b(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){0;w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);Ke=Ke.filter((function(e){return e!==w})),w.state.isMounted=!1,P("onHidden",[w])},destroy:function(){0;if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),z(),delete e._tippy,w.state.isDestroyed=!0,P("onDestroy",[w])}};if(!f.render)return w;var x=f.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var T=y.map((function(e){return e.fn(w)})),A=e.hasAttribute("aria-expanded");return F(),H(),W(),P("onCreate",[w]),f.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(C().addEventListener("mousemove",b),b(e))})),w;function j(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function D(){return"hold"===j()[0]}function L(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){var e=k().parentNode;return e?Me(e):document}function M(){return Ye(O)}function S(e){return w.state.isMounted&&!w.state.isVisible||We.isTouch||a&&"focus"===a.type?0:he(w.props.delay,e?0:1,Ne.delay)}function W(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function P(e,t,n){var r;(void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function V(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;we(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function H(){!A&&w.props.aria.expanded&&we(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function B(){C().removeEventListener("mousemove",b),Ge=Ge.filter((function(e){return e!==b}))}function R(e){if(!(We.isTouch&&(m||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(k().contains(e.target)){if(We.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||q())}}function I(){m=!0}function _(){m=!1}function N(){var e=C();e.addEventListener("mousedown",R,!0),e.addEventListener("touchend",R,ve),e.addEventListener("touchstart",_,ve),e.addEventListener("touchmove",I,ve)}function q(){var e=C();e.removeEventListener("mousedown",R,!0),e.removeEventListener("touchend",R,ve),e.removeEventListener("touchstart",_,ve),e.removeEventListener("touchmove",I,ve)}function U(e,t){var n=M().box;function r(e){e.target===n&&(Se(n,"remove",r),t())}if(0===e)return t();Se(n,"remove",s),Se(n,"add",r),s=r}function $(t,n,r){void 0===r&&(r=!1),we(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function F(){var e;D()&&($("touchstart",X,{passive:!0}),$("touchend",J,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch($(e,X),e){case"mouseenter":$("mouseleave",J);break;case"focus":$(Ie?"focusout":"blur",Q);break;case"focusin":$("focusout",Q)}}))}function z(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function X(e){var t,n=!1;if(w.state.isEnabled&&!G(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,H(),!w.state.isVisible&&je(e)&&Ge.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=k().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=Oe(o.placement),s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+p>i,v=n-t.right-f>i;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean),e)&&(B(),ne(e))}function J(e){G(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function Q(e){w.props.trigger.indexOf("focusin")<0&&e.target!==k()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function G(e){return!!We.isTouch&&D()!==e.type.indexOf("touch")>=0}function K(){Z();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=L()?Ye(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=M().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];L()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),w.popperInstance=pe(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return Ee(O.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&P("onTrigger",[w,e]),N();var t=S(!0),n=j(),o=n[0],i=n[1];We.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),P("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=S(!1);t?o=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else q()}}function et(e,t){void 0===t&&(t={});var n=Ne.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ve,ve),window.addEventListener("blur",Be);var r=Object.assign({},t,{plugins:n}),o=Le(e).reduce((function(e,t){var n=t&&Ze(t,r);return n&&e.push(n),e}),[]);return Ae(e)?o[0]:o}et.defaultProps=Ne,et.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ne[t]=e[t]}))},et.currentInput=We;Object.assign({},J,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});et.setDefaultProps({render:Je});const tt=et;$((function(){$('[data-toggle="tooltip"]').tooltip("dispose"),jQuery.fn.tooltip=function(e,t){"destroy"===e&&(e="dispose"),this.each((function(n,r){if(e||r._tippy)e&&r._tippy[e](t);else{var o=r.dataset.originalTitle||r.title;tt(r,Object.assign({},{theme:"discord",content:o,arrow:!0,inertia:!0,animation:"discord-anim",duration:[100,100],hideOnClick:!1},t||{}))}}))},$("a").each((function(e,t){if(t.href&&!t.href.startsWith(location.origin)&&!t.href.startsWith("/")&&t.href.startsWith("http")&&!t._tippy){var n=new URL(t.href);$(t).tooltip(null,{content:"Visit ".concat(n.hostname).concat("/"===n.pathname?"":n.pathname).concat(n.search||"")})}})),$('[data-toggle="tooltip"]').tooltip(),$("#recentthreads li>a.truncate").each((function(e,t){$(t).tooltip(null,{content:t.innerText})})),document.querySelectorAll(".spoiler").forEach((function(e){e.onclick=function(t){t.stopPropagation();var n=e.classList.contains("spoiler-revealed");e._tippy&&n!==e._tippy.state.isEnabled&&e._tippy[n?"enable":"disable"](),e.classList[n?"remove":"add"]("spoiler-revealed")}}))}))},149:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));s&&(e.splice(u--,1),t=o())}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={260:0,143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,u=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);for(c&&c(r),t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;r.O()},n=self.webpackChunknulledbb4_theme=self.webpackChunknulledbb4_theme||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[143],(()=>r(677)));var o=r.O(void 0,[143],(()=>r(149)));o=r.O(o)})();