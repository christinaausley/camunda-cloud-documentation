(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(127)),o={id:"schema-and-migration",title:"Schema & Migration"},c={unversionedId:"product-manuals/operate/deployment/schema-and-migration",id:"product-manuals/operate/deployment/schema-and-migration",isDocsHomePage:!1,title:"Schema & Migration",description:"Operate stores data in Elasticsearch. On first start Operate will create all required indices and templates.",source:"@site/docs/product-manuals/operate/deployment/schema-and-migration.md",slug:"/product-manuals/operate/deployment/schema-and-migration",permalink:"/docs/product-manuals/operate/deployment/schema-and-migration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/deployment/schema-and-migration.md",version:"current",sidebar:"camundaCloud",previous:{title:"Data retention",permalink:"/docs/product-manuals/operate/deployment/data-retention"},next:{title:"Importer & Archiver",permalink:"/docs/product-manuals/operate/deployment/importer-and-archiver"}},p=[{value:"Schema",id:"schema",children:[]},{value:"Data migration",id:"data-migration",children:[{value:"Concept",id:"concept",children:[]},{value:"How to migrate",id:"how-to-migrate",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Operate stores data in Elasticsearch. On first start Operate will create all required indices and templates."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#schema"}),"Schema")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#data-migration"}),"Data Migration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#how-to-migrate"}),"How to migrate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#example-for-migrate-in-kubernetes"}),"Example for migrate in Kubernetes"))),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"Operate uses several Elasticsearch indices that are mostly created by using templates."),Object(i.b)("p",null,"Index names follow the defined pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"operate-{datatype}-{schemaversion}_[{date}]\n\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"datatype")," defines which data is stored in the index, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"user"),", ",Object(i.b)("inlineCode",{parentName:"p"},"variable")," etc.,\n",Object(i.b)("inlineCode",{parentName:"p"},"schemaversion")," represents version of Operate,\n",Object(i.b)("inlineCode",{parentName:"p"},"date")," represents finished date of archived data (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/product-manuals/operate/deployment/data-retention"}),"Data retention"),")."),Object(i.b)("p",null,"Knowing index name pattern, it is possible to customize index settings by creating Elasticsearch templates (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-templates.html"}),"Example of an index template"),")\nE.g. to define desired number of shards and replicas, you can define following template:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'PUT _template/template_operate\n{\n  "index_patterns": ["operate-*"],\n  "settings": {\n    "number_of_shards": 5,\n    "number_of_replicas": 2\n  }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," In order for these settings to work, template must be created before Operate first run.")),Object(i.b)("h2",{id:"data-migration"},"Data migration"),Object(i.b)("p",null,"Version of Operate is reflected in Elasticsearch object names, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"operate-user-0.24.0_")," index contains user data for Operate 0.24.0. When upgrading from one\nversion of Operate to another, migration of data must be performed. Operate distribution provides an application to perform data migration from previous versions."),Object(i.b)("h3",{id:"concept"},"Concept"),Object(i.b)("p",null,"The migration uses Elasticsearch ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/ingest-processors.html"}),"processors")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/pipeline.html"}),"pipelines")," to reindex the data."),Object(i.b)("p",null,"Each version of Operate delivers set of migration steps needed to be applied for corresponding version of Operate.\nWhen upgrading from one version to another necessary migration steps constitute the so-called migration plan.\nAll known migration steps (both applied and not) are persisted in dedicated Elasticsearch index: ",Object(i.b)("inlineCode",{parentName:"p"},"operate-migration-steps-repository"),"."),Object(i.b)("h3",{id:"how-to-migrate"},"How to migrate"),Object(i.b)("h4",{id:"migrate-by-using-standalone-application"},"Migrate by using standalone application"),Object(i.b)("p",null,"Make sure that Elasticsearch which contains the Operate data is running. The migration script will connect to specified connection in Operate\nconfiguration (",Object(i.b)("inlineCode",{parentName:"p"},"<operate_home>/config/application.yml"),")."),Object(i.b)("p",null,"Execute ",Object(i.b)("inlineCode",{parentName:"p"},"<operate_home>/bin/migrate")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"<operate_home>/bin/migrate.bat")," for Windows)."),Object(i.b)("p",null,"What is expected to happen:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Elasticsearch schema of new version is created"),Object(i.b)("li",{parentName:"ul"},"previous version is detected"),Object(i.b)("li",{parentName:"ul"},"migration plan is built and executed reindexing data for each index"),Object(i.b)("li",{parentName:"ul"},"old indices are deleted")),Object(i.b)("p",null,"All known migration steps with metadata will be stored in ",Object(i.b)("inlineCode",{parentName:"p"},"operate-migration-steps-repository")," index."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," The old indices will be deleted ONLY after successful migration. That might require\nmore disk space during migration process.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Important!")," You should take care of data backup before performing migration.")),Object(i.b)("h4",{id:"migrate-by-using-built-in-automatic-upgrade"},"Migrate by using built-in automatic upgrade"),Object(i.b)("p",null,"When running newer version of Operate against older schema, it will perform data migration on startup.\nThe migration will happen when exactly ONE previous schema version was detected."),Object(i.b)("h4",{id:"further-notes"},"Further notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If migration fails, it is OK to retry it. All applied steps are stored and only those steps will be applied that hasn't been executed yet."),Object(i.b)("li",{parentName:"ul"},"Operate should not be running, while migration is happening"),Object(i.b)("li",{parentName:"ul"},"In case version upgrade is performed in the cluster with several Operate nodes, only one node (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/operate/deployment/importer-and-archiver"}),"Webapp module"),") must execute data migration, the others must be stopped\nand started only after migration is fully finished")),Object(i.b)("h4",{id:"configure-migration"},"Configure migration"),Object(i.b)("p",null,"Automatic migration is enabled by default.\nIt can be disabled by setting the configuration key:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"camunda.operate.migration.migrationEnabled = false")),Object(i.b)("p",null,'You can specify previous ("source") version with the configuration key:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"camunda.operate.migration.sourceVersion=0.23.0")),Object(i.b)("p",null,"If no ",Object(i.b)("em",{parentName:"p"},"sourceVersion")," is defined Operate tries to detect it from Elasticsearch indices."),Object(i.b)("h4",{id:"example-for-migrate-in-kubernetes"},"Example for migrate in Kubernetes"),Object(i.b)("p",null,"To ensure that the migration will be executed ",Object(i.b)("em",{parentName:"p"},"before")," Operate will be started you can use\nthe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"}),"init container")," feature of Kubernetes. It makes sure that the 'main' container will only be started\nif the initContainer was successfully executed.\nThe following snippet of a pod description for Kubernetes shows the usage of ",Object(i.b)("inlineCode",{parentName:"p"},"migrate")," script as initContainer."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"...\n  labels:\n    app: operate\nspec:\n   initContainers:\n     - name: migration\n       image: camunda/operate:0.24.0\n       command: ['/bin/sh','/usr/local/operate/bin/migrate']\n   containers:\n     - name: operate\n       image: camunda/operate:0.24.0\n       env:\n...\n")))}l.isMDXComponent=!0}}]);