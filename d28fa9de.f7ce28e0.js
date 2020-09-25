(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(127)),c=n(134),i=n(135),s={id:"monitor-your-process-in-operate",title:"Monitor your Process in Operate"},u={unversionedId:"guides/getting-started/monitor-your-process-in-operate",id:"guides/getting-started/monitor-your-process-in-operate",isDocsHomePage:!1,title:"Monitor your Process in Operate",description:"Camunda Cloud offers Operate to monitor your process instances. An entry point can be found in the Cluster details.",source:"@site/docs/guides/getting-started/monitor-your-process-in-operate.md",slug:"/guides/getting-started/monitor-your-process-in-operate",permalink:"/docs/guides/getting-started/monitor-your-process-in-operate",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/getting-started/monitor-your-process-in-operate.md",version:"current",sidebar:"camundaCloud",previous:{title:"Involve Humans",permalink:"/docs/guides/getting-started/involve-humans"},next:{title:"Operate the Camunda Cloud stack on Kubernetes",permalink:"/docs/guides/operating-the-camunda-cloud-stack-on-kubernetes"}},l=[],d={rightToc:l};function p(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Camunda Cloud offers Operate to monitor your process instances. An entry point can be found in the Cluster details."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-dashboard",src:n(220).default})),Object(o.b)("p",null,"By selecting the deployed workflow you will see a list of instances that can be filtered:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instances",src:n(221).default})),Object(o.b)("p",null,"Because ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/getting-started/implement-service-task"}),"the started worker")," returns"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "return": "Pong"\n}\n')),Object(o.b)("p",null,"the workflow ends in the upper end event."),Object(o.b)("p",null,"Changing the worker to"),Object(o.b)(c.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'zbctl create worker test-worker --handler "echo {\\"return\\":\\"...\\"}"\n')))),Object(o.b)("p",null,"and creating a new instance leads to a second instance in Operate, which you'll see ending in the second end event:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instance",src:n(222).default})),Object(o.b)("p",null,"As a next step you can now connect both workers in parallel and create more workflow instances:"),Object(o.b)(c.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"while true; do zbctl create instance camunda-cloud-quick-start-advanced; sleep 1; done\n")))),Object(o.b)("p",null,"In Operate you will see instances ending in both end events depending on which worker picked up the job."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-instances",src:n(223).default})))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},128:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},131:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},132:function(e,t,n){"use strict";var r=n(0),a=n(131);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(132),c=n(128),i=n(47),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,d=e.values,p=e.groupId,b=Object(o.a)(),f=b.tabGroupChoices,m=b.setTabGroupChoices,g=Object(r.useState)(i),O=g[0],y=g[1],v=Object(r.useState)(!1),j=v[0],h=v[1];if(null!=p){var w=f[p];null!=w&&w!==O&&d.some((function(e){return e.value===w}))&&y(w)}var k=function(e){y(e),null!=p&&m(p,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},E=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",E)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},135:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},220:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-dashboard-955b350be289649f3882f848fe90fe01.png"},221:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-pong-8000ccad818303c9f1213cb4bf7c09b9.png"},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-other-256b79b61a5c9090674d8b789eea0e41.png"},223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-cbb3fceba883216bbbde22333a23eeb9.png"}}]);