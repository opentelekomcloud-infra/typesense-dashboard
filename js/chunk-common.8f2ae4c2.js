(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[996],{74701:(e,o,s)=>{"use strict";s.d(o,{A:()=>p});var t=s(61758);const i={ref:"editorWrapper",class:"col relative-position overflow-hidden editorWrapper"},r={ref:"editorElement",class:"absolute-top-left"};function l(e,o,s,l,n,a){const d=(0,t.g2)("q-resize-observer");return(0,t.uX)(),(0,t.CE)("div",i,[(0,t.bF)(d,{onResize:e.onResize},null,8,["onResize"]),(0,t.Lk)("div",r,null,512)],512)}var n=s(87380),a=s(38734);const d=(0,t.pM)({name:"MonacoEditor",props:{modelValue:{type:String,default:""},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:o}){const s=(0,a.KR)(null),i=(0,a.KR)(null);let r;return(0,t.sV)((()=>{r=n.EN.create(s.value,Object.assign({value:e.modelValue,language:"json",theme:"vs-dark",minimap:{enabled:!1}},e.options)),r.onDidChangeModelContent((()=>{o("update:modelValue",null===r||void 0===r?void 0:r.getValue())}))})),(0,t.hi)((()=>{null===r||void 0===r||r.dispose()})),(0,t.wB)((()=>e.modelValue),(()=>{var o;e.modelValue!==(null===r||void 0===r?void 0:r.getValue())&&(null===(o=null===r||void 0===r?void 0:r.getModel())||void 0===o||o.setValue(e.modelValue),null===r||void 0===r||r.setScrollPosition({scrollTop:0}))})),{editorElement:s,editorWrapper:i,onResize(){null===r||void 0===r||r.layout({height:0,width:0}),window.setTimeout((()=>{null===r||void 0===r||r.layout({height:i.value.offsetHeight,width:i.value.offsetWidth})}))}}}});var m=s(12807),c=s(1096),u=s(98582),v=s.n(u);const g=(0,m.A)(d,[["render",l],["__scopeId","data-v-46f34a38"]]),p=g;v()(d,"components",{QResizeObserver:c.A})},47559:(e,o,s)=>{"use strict";s.d(o,{A:()=>k});var t=s(61758),i=s(58790);function r(e,o,s,r,l,n){const a=(0,t.g2)("q-item-section"),d=(0,t.g2)("q-icon"),m=(0,t.g2)("q-item"),c=(0,t.g2)("q-separator"),u=(0,t.g2)("q-item-label"),v=(0,t.g2)("q-list"),g=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.Wv)(v,{style:{"min-width":"100px"}},{default:(0,t.k6)((()=>[e.$props.showLogout?(0,t.bo)(((0,t.uX)(),(0,t.Wv)(m,{key:0,clickable:"",onClick:e.logout},{default:(0,t.k6)((()=>[(0,t.bF)(a,null,{default:(0,t.k6)((()=>o[1]||(o[1]=[(0,t.eW)("Logout")]))),_:1}),(0,t.bF)(a,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,{name:"sym_s_logout"})])),_:1})])),_:1},8,["onClick"])),[[g]]):(0,t.Q3)("",!0),e.$props.showLogout?((0,t.uX)(),(0,t.Wv)(c,{key:1})):(0,t.Q3)("",!0),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(m,{clickable:"",onClick:o[0]||(o[0]=o=>e.$store.commit("node/clearHistory"))},{default:(0,t.k6)((()=>[(0,t.bF)(a,null,{default:(0,t.k6)((()=>o[2]||(o[2]=[(0,t.eW)("Clear history")]))),_:1}),(0,t.bF)(a,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,{name:"sym_s_delete"})])),_:1})])),_:1})),[[g]]),(0,t.bF)(c),0===e.loginHistory.length?((0,t.uX)(),(0,t.Wv)(u,{key:2,header:""},{default:(0,t.k6)((()=>o[3]||(o[3]=[(0,t.eW)("No History")]))),_:1})):(0,t.Q3)("",!0),e.loginHistory.length>0?((0,t.uX)(),(0,t.Wv)(u,{key:3,header:""},{default:(0,t.k6)((()=>o[4]||(o[4]=[(0,t.eW)("Server History")]))),_:1})):(0,t.Q3)("",!0),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.loginHistory,((o,s)=>(0,t.bo)(((0,t.uX)(),(0,t.Wv)(m,{clickable:"",key:s,onClick:s=>e.loginWithHistory(o)},{default:(0,t.k6)((()=>[(0,t.bF)(a,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(o.node.protocol)+"://"+(0,i.v_)(o.node.host)+":"+(0,i.v_)(o.node.port),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[g]]))),128))])),_:1})}const l=(0,t.pM)({name:"ServerHistory",props:{showLogout:{default:!1}},computed:{loginHistory(){return this.$store.state.node.loginHistory.map((e=>JSON.parse(e)))},error(){return this.$store.state.node.error}},methods:{logout(){this.$store.dispatch("node/logout")},loginWithHistory(e){const o=this.$props.showLogout;this.$store.dispatch("node/login",Object.assign(Object.assign({},e),{forceHomeRedirect:o}))}}});var n=s(12807),a=s(53999),d=s(90124),m=s(25173),c=s(50492),u=s(10386),v=s(13796),g=s(88672),p=s(98582),b=s.n(p);const f=(0,n.A)(l,[["render",r]]),k=f;b()(l,"components",{QList:a.A,QItem:d.A,QItemSection:m.A,QIcon:c.A,QSeparator:u.A,QItemLabel:v.A}),b()(l,"directives",{ClosePopup:g.A})},93930:(e,o,s)=>{"use strict";s.d(o,{A:()=>x});var t=s(61758),i=s(58790);const r={class:"row q-gutter-md"};function l(e,o,s,l,n,a){const d=(0,t.g2)("q-tab"),m=(0,t.g2)("q-tabs"),c=(0,t.g2)("q-separator"),u=(0,t.g2)("q-input"),v=(0,t.g2)("q-select"),g=(0,t.g2)("q-card-section"),p=(0,t.g2)("q-checkbox"),b=(0,t.g2)("q-btn"),f=(0,t.g2)("q-card-actions"),k=(0,t.g2)("q-card"),h=(0,t.g2)("q-tab-panel"),y=(0,t.g2)("monaco-editor"),S=(0,t.g2)("q-banner"),j=(0,t.g2)("q-tab-panels");return(0,t.uX)(),(0,t.Wv)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=o=>e.tab=o),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,t.k6)((()=>[(0,t.bF)(d,{name:"form",label:"Form Mode"}),(0,t.bF)(d,{name:"json",label:"JSON Mode"})])),_:1},8,["modelValue"]),(0,t.bF)(c),(0,t.bF)(j,{modelValue:e.tab,"onUpdate:modelValue":o[4]||(o[4]=o=>e.tab=o),animated:"",style:(0,i.Tr)(e.createMode?"height: 60vh":""),class:"bg-surface"},{default:(0,t.k6)((()=>[(0,t.bF)(h,{name:"form"},{default:(0,t.k6)((()=>[(0,t.bF)(g,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",r,[(0,t.bF)(u,{class:"col",filled:"",dense:"",modelValue:e.schema.name,"onUpdate:modelValue":o[1]||(o[1]=o=>e.schema.name=o),label:"Collection Name",placeholder:"books",disable:!e.createMode,rules:[e=>!!e||"Field is required"]},null,8,["modelValue","disable","rules"]),(0,t.bF)(v,{filled:"",class:"col",dense:"",modelValue:e.schema.default_sorting_field,"onUpdate:modelValue":o[2]||(o[2]=o=>e.schema.default_sorting_field=o),options:e.availableSortFields,label:"Default sort field optional, but must be int32 or float"},null,8,["modelValue","options"])]),o[8]||(o[8]=(0,t.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Fields",-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.schema.fields,((s,i)=>((0,t.uX)(),(0,t.Wv)(k,{flat:"",bordered:"",key:i,class:"q-mb-md"},{default:(0,t.k6)((()=>[(0,t.bF)(g,{class:"row q-col-gutter-md"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{class:"col-12 col-sm-6",dense:"",outlined:"",modelValue:s.name,"onUpdate:modelValue":e=>s.name=e,label:"Field Name",placeholder:"title",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,t.bF)(v,{class:"col-12 col-sm-4",dense:"",outlined:"",modelValue:s.type,"onUpdate:modelValue":e=>s.type=e,label:"type",options:e.types,rules:[e=>!!e||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","options","rules"]),"float[]"===s.type?((0,t.uX)(),(0,t.Wv)(u,{key:0,class:"col-12 col-sm-2",dense:"",outlined:"",type:"number",modelValue:s.num_dim,"onUpdate:modelValue":e=>s.num_dim=e,modelModifiers:{number:!0},label:"num_dim",placeholder:""},null,8,["modelValue","onUpdate:modelValue"])):(0,t.Q3)("",!0),s.type.startsWith("string")?((0,t.uX)(),(0,t.Wv)(u,{key:1,class:"col-12 col-sm-2",dense:"",outlined:"",modelValue:s.locale,"onUpdate:modelValue":e=>s.locale=e,label:"locale",placeholder:""},null,8,["modelValue","onUpdate:modelValue"])):(0,t.Q3)("",!0)])),_:2},1024),(0,t.bF)(c),(0,t.bF)(f,{align:"between"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.bF)(p,{modelValue:s.optional,"onUpdate:modelValue":e=>s.optional=e,label:"optional"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.bF)(p,{modelValue:s.facet,"onUpdate:modelValue":e=>s.facet=e,label:"facet"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.bF)(p,{modelValue:s.index,"onUpdate:modelValue":e=>s.index=e,label:"index"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.bF)(p,{modelValue:s.sort,"onUpdate:modelValue":e=>s.sort=e,label:"sort"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.bF)(p,{modelValue:s.infix,"onUpdate:modelValue":e=>s.infix=e,label:"infix"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.bF)(p,{modelValue:s.stem,"onUpdate:modelValue":e=>s.stem=e,label:"stem"},null,8,["modelValue","onUpdate:modelValue"])]),(0,t.bF)(b,{size:"md",padding:"sm lg",unelevated:"",onClick:o=>e.removeField(s)},{default:(0,t.k6)((()=>o[7]||(o[7]=[(0,t.eW)("Remove Field")]))),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.bF)(h,{name:"json",class:"q-pa-none"},{default:(0,t.k6)((()=>[(0,t.bF)(y,{modelValue:e.schemaJson,"onUpdate:modelValue":o[3]||(o[3]=o=>e.schemaJson=o),style:{height:"60vh"}},null,8,["modelValue"]),e.jsonError?((0,t.uX)(),(0,t.Wv)(S,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:(0,t.k6)((()=>[(0,t.eW)(" Invalid Format: "+(0,i.v_)(e.jsonError),1)])),_:1})):(0,t.Q3)("",!0)])),_:1})])),_:1},8,["modelValue","style"]),(0,t.bF)(c),(0,t.bF)(f,{align:"between",class:"bg-primary"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{size:"md",padding:"sm lg",unelevated:"",color:"primary",onClick:o[5]||(o[5]=o=>e.addField())},{default:(0,t.k6)((()=>o[9]||(o[9]=[(0,t.eW)("Add field")]))),_:1}),(0,t.bF)(b,{size:"md",padding:"sm lg",unelevated:"",color:"primary",onClick:o[6]||(o[6]=o=>e.$emit("submit",e.schema))},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(e.primaryActionLabel),1)])),_:1})])),_:1})])),_:1})}var n=s(74701);const a=(0,t.pM)({components:{MonacoEditor:n.A},name:"CollectionUi",emits:["submit"],props:{initialSchema:{type:Object,default:()=>({name:"",fields:[{name:"",type:"string",facet:!1,optional:!1,index:!0,sort:!1,infix:!1,stem:!1,locale:"",num_dim:void 0}],default_sorting_field:"",token_separators:[],symbols_to_index:[],enable_nested_fields:!1})},primaryActionLabel:{type:String,required:!0},createMode:{type:Boolean,default:!1}},data(){return{tab:"form",schema:{name:"",fields:[],default_sorting_field:"",token_separators:[],symbols_to_index:[],enable_nested_fields:!1},types:["string","string[]","int32","int32[]","int64","int64[]","float","float[]","bool","bool[]","geopoint","geopoint[]","object","object[]","string*","auto"],jsonError:null}},computed:{availableSortFields(){const e=(this.schema.fields||[]).filter((e=>["int32","float"].includes(e.type)||"string"===e.type&&e.sort));return[""].concat(e.map((e=>e.name)))},schemaJson:{get(){return JSON.stringify(this.schema,null,2)},set(e){try{this.schema=JSON.parse(e),this.jsonError=null}catch(o){this.jsonError=o.message}}}},watch:{initialSchema:{immediate:!0,handler(e){this.schema=JSON.parse(JSON.stringify(e))}}},methods:{addField(){this.schema.fields&&this.schema.fields.push({name:"",type:"string",facet:!1,optional:!1,index:!0,sort:!1,infix:!1,stem:!1,locale:"",num_dim:void 0})},removeField(e){if(this.schema.fields){const o=this.schema.fields.indexOf(e);o>-1&&this.schema.fields.splice(o,1)}}}});var d=s(12807),m=s(23316),c=s(42980),u=s(10327),v=s(10386),g=s(39041),p=s(71746),b=s(44189),f=s(39270),k=s(75848),h=s(62669),y=s(80460),S=s(1693),j=s(46868),V=s(98582),F=s.n(V);const _=(0,d.A)(a,[["render",l]]),x=_;F()(a,"components",{QCard:m.A,QTabs:c.A,QTab:u.A,QSeparator:v.A,QTabPanels:g.A,QTabPanel:p.A,QCardSection:b.A,QInput:f.A,QSelect:k.A,QCardActions:h.A,QCheckbox:y.A,QBtn:S.A,QBanner:j.A})},5890:(e,o,s)=>{var t={"./simpleWorker":1352,"./simpleWorker.js":1352,"monaco-editor/esm/vs/base/common/worker/simpleWorker":1352,"monaco-editor/esm/vs/base/common/worker/simpleWorker.js":1352};function i(e){return Promise.resolve().then((()=>{if(!s.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var i=t[e];return s(i)}))}i.keys=()=>Object.keys(t),i.id=5890,e.exports=i},9204:(e,o,s)=>{var t={"./editorBaseApi":[79184],"./editorBaseApi.js":[79184],"./editorSimpleWorker":[92341],"./editorSimpleWorker.js":[92341],"./editorWorker":[4117],"./editorWorker.js":[4117],"./editorWorkerHost":[32899],"./editorWorkerHost.js":[32899],"./findSectionHeaders":[76198],"./findSectionHeaders.js":[76198],"./getIconClasses":[55885],"./getIconClasses.js":[55885],"./languageFeatureDebounce":[85983],"./languageFeatureDebounce.js":[85983],"./languageFeatures":[12847],"./languageFeatures.js":[12847],"./languageFeaturesService":[43207],"./languageFeaturesService.js":[43207],"./languageService":[64189],"./languageService.js":[64189],"./languagesAssociations":[85911],"./languagesAssociations.js":[85911],"./languagesRegistry":[77024],"./languagesRegistry.js":[77024],"./markerDecorations":[63637],"./markerDecorations.js":[63637],"./markerDecorationsService":[23938],"./markerDecorationsService.js":[23938],"./model":[69361],"./model.js":[69361],"./modelService":[96174],"./modelService.js":[96174],"./resolverService":[64037],"./resolverService.js":[64037],"./semanticTokensDto":[33699],"./semanticTokensDto.js":[33699],"./semanticTokensProviderStyling":[4686],"./semanticTokensProviderStyling.js":[4686],"./semanticTokensStyling":[67284],"./semanticTokensStyling.js":[67284],"./semanticTokensStylingService":[12205],"./semanticTokensStylingService.js":[12205],"./textModelSync/textModelSync.impl":[11955],"./textModelSync/textModelSync.impl.js":[11955],"./textModelSync/textModelSync.protocol":[74977,121],"./textModelSync/textModelSync.protocol.js":[74977,121],"./textResourceConfiguration":[56151],"./textResourceConfiguration.js":[56151],"./treeSitterParserService":[15863],"./treeSitterParserService.js":[15863],"./treeViewsDnd":[61210],"./treeViewsDnd.js":[61210],"./treeViewsDndService":[95231],"./treeViewsDndService.js":[95231],"./unicodeTextModelHighlighter":[97412],"./unicodeTextModelHighlighter.js":[97412],"monaco-editor/esm/vs/editor/common/services/editorBaseApi":[79184],"monaco-editor/esm/vs/editor/common/services/editorBaseApi.js":[79184],"monaco-editor/esm/vs/editor/common/services/editorSimpleWorker":[92341],"monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js":[92341],"monaco-editor/esm/vs/editor/common/services/editorWorker":[4117],"monaco-editor/esm/vs/editor/common/services/editorWorker.js":[4117],"monaco-editor/esm/vs/editor/common/services/editorWorkerHost":[32899],"monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js":[32899],"monaco-editor/esm/vs/editor/common/services/findSectionHeaders":[76198],"monaco-editor/esm/vs/editor/common/services/findSectionHeaders.js":[76198],"monaco-editor/esm/vs/editor/common/services/getIconClasses":[55885],"monaco-editor/esm/vs/editor/common/services/getIconClasses.js":[55885],"monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce":[85983],"monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js":[85983],"monaco-editor/esm/vs/editor/common/services/languageFeatures":[12847],"monaco-editor/esm/vs/editor/common/services/languageFeatures.js":[12847],"monaco-editor/esm/vs/editor/common/services/languageFeaturesService":[43207],"monaco-editor/esm/vs/editor/common/services/languageFeaturesService.js":[43207],"monaco-editor/esm/vs/editor/common/services/languageService":[64189],"monaco-editor/esm/vs/editor/common/services/languageService.js":[64189],"monaco-editor/esm/vs/editor/common/services/languagesAssociations":[85911],"monaco-editor/esm/vs/editor/common/services/languagesAssociations.js":[85911],"monaco-editor/esm/vs/editor/common/services/languagesRegistry":[77024],"monaco-editor/esm/vs/editor/common/services/languagesRegistry.js":[77024],"monaco-editor/esm/vs/editor/common/services/markerDecorations":[63637],"monaco-editor/esm/vs/editor/common/services/markerDecorations.js":[63637],"monaco-editor/esm/vs/editor/common/services/markerDecorationsService":[23938],"monaco-editor/esm/vs/editor/common/services/markerDecorationsService.js":[23938],"monaco-editor/esm/vs/editor/common/services/model":[69361],"monaco-editor/esm/vs/editor/common/services/model.js":[69361],"monaco-editor/esm/vs/editor/common/services/modelService":[96174],"monaco-editor/esm/vs/editor/common/services/modelService.js":[96174],"monaco-editor/esm/vs/editor/common/services/resolverService":[64037],"monaco-editor/esm/vs/editor/common/services/resolverService.js":[64037],"monaco-editor/esm/vs/editor/common/services/semanticTokensDto":[33699],"monaco-editor/esm/vs/editor/common/services/semanticTokensDto.js":[33699],"monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling":[4686],"monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling.js":[4686],"monaco-editor/esm/vs/editor/common/services/semanticTokensStyling":[67284],"monaco-editor/esm/vs/editor/common/services/semanticTokensStyling.js":[67284],"monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService":[12205],"monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService.js":[12205],"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl":[11955],"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js":[11955],"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol":[74977,121],"monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol.js":[74977,121],"monaco-editor/esm/vs/editor/common/services/textResourceConfiguration":[56151],"monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js":[56151],"monaco-editor/esm/vs/editor/common/services/treeSitterParserService":[15863],"monaco-editor/esm/vs/editor/common/services/treeSitterParserService.js":[15863],"monaco-editor/esm/vs/editor/common/services/treeViewsDnd":[61210],"monaco-editor/esm/vs/editor/common/services/treeViewsDnd.js":[61210],"monaco-editor/esm/vs/editor/common/services/treeViewsDndService":[95231],"monaco-editor/esm/vs/editor/common/services/treeViewsDndService.js":[95231],"monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter":[97412],"monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js":[97412]};function i(e){if(!s.o(t,e))return Promise.resolve().then((()=>{var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=t[e],i=o[0];return Promise.all(o.slice(1).map(s.e)).then((()=>s(i)))}i.keys=()=>Object.keys(t),i.id=9204,e.exports=i}}]);