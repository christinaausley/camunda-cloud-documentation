(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,m=u["".concat(c,".").concat(O)]||u[O]||d[O]||l;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(127)),c={id:"authentication",title:"Authentication"},b={unversionedId:"product-manuals/operate/deployment/authentication",id:"product-manuals/operate/deployment/authentication",isDocsHomePage:!1,title:"Authentication",description:"Introduction",source:"@site/docs/product-manuals/operate/deployment/authentication.md",slug:"/product-manuals/operate/deployment/authentication",permalink:"/docs/product-manuals/operate/deployment/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/deployment/authentication.md",version:"current",sidebar:"camundaCloud",previous:{title:"Importer & Archiver",permalink:"/docs/product-manuals/operate/deployment/importer-and-archiver"},next:{title:"Introduction",permalink:"/docs/product-manuals/operate/userguide/index"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"User in Elasticsearch",id:"user-in-elasticsearch",children:[]},{value:"Auth0 Single Sign-On",id:"auth0-single-sign-on",children:[{value:"Enable Single Sign-On",id:"enable-single-sign-on",children:[]},{value:"Configure Single Sign-On",id:"configure-single-sign-on",children:[]}]},{value:"LDAP",id:"ldap",children:[{value:"Enable LDAP",id:"enable-ldap",children:[]},{value:"Configuration of LDAP",id:"configuration-of-ldap",children:[]},{value:"Configuration of Active Directory based LDAP",id:"configuration-of-active-directory-based-ldap",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Operate provides three ways for authentication:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Authenticate with user information stored in ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#user-in-elasticsearch"}),"Elasticsearch")),Object(l.b)("li",{parentName:"ol"},"Authenticate via ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#auth0-single-sign-on"}),"Auth0 Single Sign-On provider")),Object(l.b)("li",{parentName:"ol"},"Authenticate via ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#ldap"}),"Lightweight Directory Access Protocol (LDAP)"))),Object(l.b)("p",null,"By default user storage in Elasticsearch is enabled."),Object(l.b)("h2",{id:"user-in-elasticsearch"},"User in Elasticsearch"),Object(l.b)("p",null,"In this mode the user authenticates with username and password, that are stored in Elasticsearch.\n",Object(l.b)("strong",{parentName:"p"},"username")," and ",Object(l.b)("strong",{parentName:"p"},"password")," for one user may be set in application.yml:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"camunda.operate:\n  username: anUser\n  password: aPassword\n")),Object(l.b)("p",null,"On Operate startup the user will be created if not existed before."),Object(l.b)("p",null,"By default one user with ",Object(l.b)("strong",{parentName:"p"},"username"),"/",Object(l.b)("strong",{parentName:"p"},"password")," ",Object(l.b)("inlineCode",{parentName:"p"},"demo"),"/",Object(l.b)("inlineCode",{parentName:"p"},"demo")," will be created."),Object(l.b)("p",null,"More users can be added directly to Elasticsearch, to the index ",Object(l.b)("inlineCode",{parentName:"p"},"operate-user-<version>_"),". Password must be encoded with BCrypt strong hashing function."),Object(l.b)("h2",{id:"auth0-single-sign-on"},"Auth0 Single Sign-On"),Object(l.b)("p",null,"Currently Operate supports Auth0.com implementation of Single Sign-On."),Object(l.b)("h3",{id:"enable-single-sign-on"},"Enable Single Sign-On"),Object(l.b)("p",null,"Single Sign-On may be enabled only by setting ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"}),"Spring profile"),": ",Object(l.b)("inlineCode",{parentName:"p"},"sso-auth")),Object(l.b)("p",null,"Example for setting spring profile as environmental variable:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"export SPRING_PROFILES_ACTIVE=sso-auth\n")),Object(l.b)("h3",{id:"configure-single-sign-on"},"Configure Single Sign-On"),Object(l.b)("p",null,"Single Sign-On needs following parameters (all are mandatory):"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parametername"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.domain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the domain which the user sees")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.backendDomain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the domain which provides user information")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.clientId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"It's like an user name for the application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.clientSecret"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"It's like a password for the application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.claimName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The claim that will be checked by Operate. It's like a permission name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.auth0.organization"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The given organization should be contained in value of claim name")))),Object(l.b)("p",null,"Example for setting parameters as environment variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"export CAMUNDA_OPERATE_AUTH0_DOMAIN=A_DOMAIN\nexport CAMUNDA_OPERATE_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport CAMUNDA_OPERATE_AUTH0_CLIENTID=A_CLIENT_ID\nexport CAMUNDA_OPERATE_AUTH0_CLIENTSECRET=A_SECRET\nexport CAMUNDA_OPERATE_AUTH0_CLAIMNAME=A_CLAIM\nexport CAMUNDA_OPERATE_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")),Object(l.b)("h2",{id:"ldap"},"LDAP"),Object(l.b)("h3",{id:"enable-ldap"},"Enable LDAP"),Object(l.b)("p",null,"LDAP can be enabled only by setting ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"}),"Spring profile"),": ",Object(l.b)("inlineCode",{parentName:"p"},"ldap-auth")),Object(l.b)("p",null,"Example for setting spring profile as environmental variable:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"export SPRING_PROFILES_ACTIVE=ldap-auth\n")),Object(l.b)("h3",{id:"configuration-of-ldap"},"Configuration of LDAP"),Object(l.b)("p",null,"A user can authenticate via LDAP.\nFollowing parameters for a connection to a LDAP server should be given:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parametername"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to a LDAP Server"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ldaps://camunda.com/"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.baseDn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Base domain name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dc=camunda,dc=com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.managerDn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manager domain, is used by Operate to login into LDAP Server to retrieve user informations"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cn=admin,dc=camunda,dc=com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.managerPassword"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password for manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.userSearchFilter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter to retrieve user info, The pattern '{0}' will be replaced by given username in login form"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{0}"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no, Default is {0}")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.userSearchBase"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting point for search"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ou=Support,dc=camunda,dc=com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(l.b)("h3",{id:"configuration-of-active-directory-based-ldap"},"Configuration of Active Directory based LDAP"),Object(l.b)("p",null,"For ",Object(l.b)("strong",{parentName:"p"},"Active Directory")," based LDAP server following parameters should  be given:"),Object(l.b)("p",null,"Note: Only when ",Object(l.b)("inlineCode",{parentName:"p"},"camunda.operate.ldap.domain")," is given, the Active Directory configuration will be applied."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parametername"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to a Active Directory LDAP Server"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.domain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Domain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.baseDn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Root domain name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"camunda.operate.ldap.userSearchFilter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is used as search filter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))))}p.isMDXComponent=!0}}]);