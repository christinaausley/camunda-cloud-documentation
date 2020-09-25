(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),i=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?c.a.createElement(b,u(u({ref:t},s),{},{components:r})):c.a.createElement(b,u({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},201:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/cluster-overview-empty-5308cbf3f9e9a9699d278b24e301db80.png"},202:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/cluster-overview-new-cluster-creating-0e79d80b54a90f00b592cef8278ef2cf.png"},203:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/cluster-overview-new-cluster-healthy-26b2197e4c8ee318e64fb4f1d881bb57.png"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(2),c=r(6),a=(r(0),r(127)),o={id:"create-cluster",title:"Create a Cluster"},u={unversionedId:"product-manuals/cloud-console/manage-clusters/create-cluster",id:"product-manuals/cloud-console/manage-clusters/create-cluster",isDocsHomePage:!1,title:"Create a Cluster",description:"After login you'll see the console overview page. Since you haven't created a cluster, the overview will be empty.",source:"@site/docs/product-manuals/cloud-console/manage-clusters/create-cluster.md",slug:"/product-manuals/cloud-console/manage-clusters/create-cluster",permalink:"/docs/product-manuals/cloud-console/manage-clusters/create-cluster",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/cloud-console/manage-clusters/create-cluster.md",version:"current",sidebar:"camundaCloud",previous:{title:"Administrate your Account",permalink:"/docs/product-manuals/cloud-console/manage-cloud-account/administrate-account"},next:{title:"Manage Client Connections",permalink:"/docs/product-manuals/cloud-console/manage-clusters/manage-client-connections"}},l=[],s={rightToc:l};function i(e){var t=e.components,o=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After login you'll see the console overview page. Since you haven't created a cluster, the overview will be empty."),Object(a.b)("p",null,Object(a.b)("img",{alt:"cluster-creating",src:r(201).default})),Object(a.b)("p",null,"In the upper right area you'll find the button ",Object(a.b)("em",{parentName:"p"},"Create New Cluster"),". Click on it to create a new cluster. After you've assigned a name and created the cluster, a new entry appears in the overview:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"cluster-creating",src:r(202).default})),Object(a.b)("p",null,"The cluster is now being set up. During this phase, its state is ",Object(a.b)("em",{parentName:"p"},"Creating"),". After one or two minutes the cluster is ready for use and changes its state to ",Object(a.b)("em",{parentName:"p"},"healthy"),":"),Object(a.b)("p",null,Object(a.b)("img",{alt:"cluster-healthy",src:r(203).default})),Object(a.b)("p",null,"After the cluster has been created, you can jump into the cluster detail page by clicking at the newly created cluster."))}i.isMDXComponent=!0}}]);