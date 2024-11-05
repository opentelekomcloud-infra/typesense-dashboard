"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[110],{84950:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var o=s(61758),n=s(58790);const i={class:"row justify-between q-mb-md"},r={class:"text-h5"},a={key:0},l={class:"row q-mb-md bg-primary text-white justify-between"},d={class:"row col-auto"},c={key:0},u={key:1};function m(e,t,s,m,h,p){const g=(0,o.g2)("q-icon"),y=(0,o.g2)("q-btn"),v=(0,o.g2)("monaco-editor"),b=(0,o.g2)("q-banner"),f=(0,o.g2)("q-select"),k=(0,o.g2)("q-page");return(0,o.uX)(),(0,o.Wv)(k,{padding:"",class:"column"},{default:(0,o.k6)((()=>{var s;return[(0,o.Lk)("div",i,[(0,o.Lk)("div",r,[(0,o.bF)(g,{size:"md",name:"sym_s_library_add"}),(0,o.eW)(" Add Documents to "+(0,n.v_)(null===(s=e.$store.state.node.currentCollection)||void 0===s?void 0:s.name),1)]),(0,o.bF)(y,{unelevated:"",onClick:t[0]||(t[0]=t=>e.importFile()),disable:!e.$q.platform.is.electron,icon:"sym_s_attach_file"},{default:(0,o.k6)((()=>[t[5]||(t[5]=(0,o.eW)(" Import from file ")),e.$q.platform.is.electron?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("span",a," (only desktop version)"))])),_:1},8,["disable"])]),(0,o.bF)(v,{modelValue:e.documentsJson,"onUpdate:modelValue":t[1]||(t[1]=t=>e.documentsJson=t),style:{"min-height":"200px"}},null,8,["modelValue"]),e.jsonError?((0,o.uX)(),(0,o.Wv)(b,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:(0,o.k6)((()=>[(0,o.eW)(" Invalid Format: "+(0,n.v_)(e.jsonError),1)])),_:1})):(0,o.Q3)("",!0),(0,o.Lk)("div",l,[(0,o.bF)(y,{unelevated:"",size:"md",padding:"sm lg",color:"primary",onClick:t[2]||(t[2]=t=>e.addEmptyDocument())},{default:(0,o.k6)((()=>t[6]||(t[6]=[(0,o.eW)("Add empty Document")]))),_:1}),(0,o.Lk)("div",d,[(0,o.bF)(f,{dark:"",modelValue:e.action,"onUpdate:modelValue":t[3]||(t[3]=t=>e.action=t),"bottom-slots":"",label:"Action mode",filled:"",style:{width:"300px"},options:e.actionOptions},{hint:(0,o.k6)((()=>[(0,o.Lk)("div",null,(0,n.v_)(e.actionDescriptions[e.action]),1)])),_:1},8,["modelValue","options"]),(0,o.bF)(y,{unelevated:"",size:"md",padding:"sm xl",color:"primary",onClick:t[4]||(t[4]=t=>e.importDocuments()),disable:!!e.jsonError},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("Import")]))),_:1},8,["disable"])])]),(0,o.Lk)("div",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.results,((e,t)=>((0,o.uX)(),(0,o.Wv)(b,{key:t,class:(0,n.C4)(["text-white",{"bg-green":e.success,"bg-red":e.error}])},{default:(0,o.k6)((()=>[(0,o.eW)((0,n.v_)(t)+": ",1),e.success?((0,o.uX)(),(0,o.CE)("span",c,(0,n.v_)(e.success),1)):((0,o.uX)(),(0,o.CE)("span",u,(0,n.v_)(e.error),1))])),_:2},1032,["class"])))),128))])]})),_:1})}var h=s(74701),p=function(e,t,s,o){function n(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function r(e){try{l(o.next(e))}catch(t){i(t)}}function a(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?s(e.value):n(e.value).then(r,a)}l((o=o.apply(e,t||[])).next())}))};const g=(0,o.pM)({name:"Document",components:{MonacoEditor:h.A},data(){return{jsonError:null,documents:[],results:[],action:"upsert",actionOptions:["create","upsert","update"],actionDescriptions:{create:"Create a new document. Fails if id exists.",upsert:"Create a new document or update an existing document.",update:"Update an existing document. Partial document allowed."}}},computed:{documentsJson:{get(){return JSON.stringify(this.documents,null,2)},set(e){try{this.documents=JSON.parse(e),this.jsonError=null}catch(t){this.jsonError=t.message}}},currentCollection(){return this.$store.state.node.currentCollection},documentsToEdit(){return this.$store.state.node.documentsToEdit}},methods:{importFile(){var e;return p(this,void 0,void 0,(function*(){this.results=[];try{this.$q.loading.show({message:"Uploading. Please wait...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"});let t=yield this.$store.getters["node/api"].importFile(null===(e=this.currentCollection)||void 0===e?void 0:e.name,this.action);Array.isArray(t)||(t=[{error:t}]),this.results=t}catch(t){this.results=[{error:t.message}]}this.$q.loading.hide()}))},importDocuments(){return p(this,void 0,void 0,(function*(){this.results=[];try{this.$q.loading.show({message:"Uploading. Please wait...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),this.results=yield this.$store.dispatch("node/importDocuments",{action:this.action,documents:JSON.parse(JSON.stringify(this.documents))})}catch(e){this.results=[{error:e.message}]}this.$q.loading.hide()}))},addEmptyDocument(){let e={};this.currentCollection&&this.currentCollection.fields&&(e=this.currentCollection.fields.reduce(((e,t)=>(e[t.name]=t.type.includes("[]")?[]:t.type.includes("string")?"":!t.type.includes("bool")&&0,e)),{})),this.documents.push(e)}},watch:{currentCollection:{handler(){this.documents=[],this.addEmptyDocument()},immediate:!0},documentsToEdit:{handler(){this.documentsToEdit&&this.documentsToEdit.length>0&&(this.documents=this.$store.state.node.documentsToEdit||[],this.action="upsert",this.$store.commit("node/setDocumentsToEdit",[]))},immediate:!0}}});var y=s(12807),v=s(77716),b=s(50492),f=s(1693),k=s(46868),C=s(75848),w=s(98582),E=s.n(w);const _=(0,y.A)(g,[["render",m]]),x=_;E()(g,"components",{QPage:v.A,QIcon:b.A,QBtn:f.A,QBanner:k.A,QSelect:C.A})}}]);