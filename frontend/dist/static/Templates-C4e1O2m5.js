import{V as i,m as o,n}from"./index-id_R8LyY.js";import{C as r}from"./CampaignPreview-DvmswhjP.js";import{E as c}from"./EmptyPlaceholder-DaKCsmPq.js";import{H as d}from"./HTMLEditor-BO3KdTos.js";import{C as p}from"./CopyText-DwIORS7N.js";const u=i.extend({components:{CampaignPreview:r,CopyText:p,"html-editor":d},props:{data:{type:Object,default:()=>{}},isEditing:{type:Boolean,default:!1}},data(){return{form:{name:"",subject:"",type:"campaign",optin:"",body:null},previewItem:null,egPlaceholder:'{{ template "content" . }}'}},methods:{onTogglePreview(){this.previewItem=this.previewItem?null:this.form},onPreviewShortcut(s){s.key==="F9"&&(this.onTogglePreview(),s.preventDefault())},onSubmit(){if(this.isEditing){this.updateTemplate();return}this.createTemplate()},createTemplate(){const s={id:this.data.id,name:this.form.name,type:this.form.type,subject:this.form.subject,body:this.form.body};this.$api.createTemplate(s).then(t=>{this.$emit("finished"),this.$parent.close(),this.$utils.toast(this.$t("globals.messages.created",{name:t.name}))})},updateTemplate(){const s={id:this.data.id,name:this.form.name,type:this.form.type,subject:this.form.subject,body:this.form.body};this.$api.updateTemplate(s).then(t=>{this.$emit("finished"),this.$parent.close(),this.$utils.toast(`'${t.name}' updated`)})}},computed:{...o(["loading"])},mounted(){this.form={...this.$props.data},this.$nextTick(()=>{this.$refs.focus.focus()}),window.addEventListener("keydown",this.onPreviewShortcut)},beforeDestroy(){window.removeEventListener("keydown",this.onPreviewShortcut)}});var b=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",[e("form",{on:{submit:function(a){return a.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"modal-card content template-modal-content",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("b-button",{staticClass:"is-pulled-right",attrs:{type:"is-primary","icon-left":"file-find-outline"},on:{click:t.onTogglePreview}},[t._v(" "+t._s(t.$t("templates.preview"))+" (F9) ")]),t.isEditing?[e("h4",[t._v(t._s(t.data.name))]),e("p",{staticClass:"has-text-grey is-size-7"},[t._v(" "+t._s(t.$t("globals.fields.id"))+": "),e("span",{attrs:{"data-cy":"id"}},[e("copy-text",{attrs:{text:`${t.data.id}`}})],1)])]:e("h4",[t._v(" "+t._s(t.$t("templates.newTemplate"))+" ")])],2),e("section",{staticClass:"modal-card-body",attrs:{expanded:""}},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-9"},[e("b-field",{attrs:{label:t.$t("globals.fields.name"),"label-position":"on-border"}},[e("b-input",{ref:"focus",attrs:{maxlength:200,name:"name",placeholder:t.$t("globals.fields.name"),required:""},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)],1),e("div",{staticClass:"column is-3"},[e("b-field",{attrs:{label:t.$t("globals.fields.type"),"label-position":"on-border"}},[e("b-select",{attrs:{disabled:t.isEditing,expanded:""},model:{value:t.form.type,callback:function(a){t.$set(t.form,"type",a)},expression:"form.type"}},[e("option",{attrs:{value:"campaign"}},[t._v(" "+t._s(t.$tc("globals.terms.campaign"))+" ")]),e("option",{attrs:{value:"tx"}},[t._v(" "+t._s(t.$tc("globals.terms.tx"))+" ")])])],1)],1)]),t.form.type==="tx"?e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-12"},[e("b-field",{attrs:{label:t.$t("templates.subject"),"label-position":"on-border"}},[e("b-input",{ref:"focus",attrs:{maxlength:200,name:"name",placeholder:t.$t("templates.subject"),required:""},model:{value:t.form.subject,callback:function(a){t.$set(t.form,"subject",a)},expression:"form.subject"}})],1)],1)]):t._e(),t.form.body!==null?e("b-field",{attrs:{label:t.$t("templates.rawHTML"),"label-position":"on-border"}},[e("html-editor",{attrs:{name:"body"},model:{value:t.form.body,callback:function(a){t.$set(t.form,"body",a)},expression:"form.body"}})],1):t._e(),e("p",{staticClass:"is-size-7"},[t.form.type==="campaign"?[t._v(" "+t._s(t.$t("templates.placeholderHelp",{placeholder:t.egPlaceholder}))+" ")]:t._e(),e("a",{attrs:{target:"_blank",rel:"noopener noreferer",href:"https://listmonk.app/docs/templating"}},[t._v(" "+t._s(t.$t("globals.buttons.learnMore"))+" ")])],2)],1),e("footer",{staticClass:"modal-card-foot has-text-right"},[e("b-button",{on:{click:function(a){return t.$parent.close()}}},[t._v(" "+t._s(t.$t("globals.buttons.close"))+" ")]),e("b-button",{attrs:{"native-type":"submit",type:"is-primary",loading:t.loading.templates}},[t._v(" "+t._s(t.$t("globals.buttons.save"))+" ")])],1)])]),t.previewItem?e("campaign-preview",{attrs:{type:"template",title:t.previewItem.name,"template-type":t.previewItem.type,body:t.form.body},on:{close:t.onTogglePreview}}):t._e()],1)},f=[],h=n(u,b,f);const v=h.exports,y=i.extend({components:{CampaignPreview:r,TemplateForm:v,EmptyPlaceholder:c},data(){return{curItem:null,isEditing:!1,isFormVisible:!1,previewItem:null}},methods:{showEditForm(s){this.curItem=s,this.isFormVisible=!0,this.isEditing=!0},showNewForm(){this.curItem={type:"campaign"},this.isFormVisible=!0,this.isEditing=!1},formFinished(){this.$api.getTemplates()},previewTemplate(s){this.previewItem=s},closePreview(){this.previewItem=null},cloneTemplate(s,t){const e={name:s,type:t.type,subject:t.subject,body:t.body};this.$api.createTemplate(e).then(a=>{this.$api.getTemplates(),this.$emit("finished"),this.$utils.toast(`'${a.name}' created`)})},makeTemplateDefault(s){this.$api.makeTemplateDefault(s.id).then(()=>{this.$api.getTemplates(),this.$utils.toast(this.$t("globals.messages.created",{name:s.name}))})},deleteTemplate(s){this.$api.deleteTemplate(s.id).then(()=>{this.$api.getTemplates(),this.$utils.toast(this.$t("globals.messages.deleted",{name:s.name}))})}},computed:{...o(["templates","loading"])},mounted(){this.$api.getTemplates()}});var g=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",{staticClass:"templates"},[e("header",{staticClass:"columns page-header"},[e("div",{staticClass:"column is-10"},[e("h1",{staticClass:"title is-4"},[t._v(" "+t._s(t.$t("globals.terms.templates"))+" "),t.templates.length>0?e("span",[t._v("("+t._s(t.templates.length)+")")]):t._e()])]),e("div",{staticClass:"column has-text-right"},[e("b-field",{attrs:{expanded:""}},[e("b-button",{staticClass:"btn-new",attrs:{expanded:"",type:"is-primary","icon-left":"plus"},on:{click:t.showNewForm}},[t._v(" "+t._s(t.$t("globals.buttons.new"))+" ")])],1)],1)]),e("b-table",{attrs:{data:t.templates,hoverable:!0,loading:t.loading.templates,"default-sort":"createdAt"},scopedSlots:t._u([t.loading.templates?null:{key:"empty",fn:function(){return[e("empty-placeholder")]},proxy:!0}],null,!0)},[e("b-table-column",{attrs:{field:"name",label:t.$t("globals.fields.name"),"td-attrs":t.$utils.tdID,sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{attrs:{href:"#"},on:{click:function(l){return l.preventDefault(),t.showEditForm(a.row)}}},[t._v(" "+t._s(a.row.name)+" ")]),a.row.isDefault?e("b-tag",[t._v(" "+t._s(t.$t("templates.default"))+" ")]):t._e(),a.row.type==="tx"?e("p",{staticClass:"is-size-7 has-text-grey"},[t._v(" "+t._s(a.row.subject)+" ")]):t._e()]}}])}),e("b-table-column",{attrs:{field:"type",label:t.$t("globals.fields.type"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.type==="campaign"?e("b-tag",{class:a.row.type,attrs:{"data-cy":`type-${a.row.type}`}},[t._v(" "+t._s(t.$tc("globals.terms.campaign",1))+" ")]):e("b-tag",{class:a.row.type,attrs:{"data-cy":`type-${a.row.type}`}},[t._v(" "+t._s(t.$tc("globals.terms.tx",1))+" ")])]}}])}),e("b-table-column",{attrs:{field:"id",label:t.$t("globals.fields.id"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.id)+" ")]}}])}),e("b-table-column",{attrs:{field:"createdAt",label:t.$t("globals.fields.createdAt"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t.$utils.niceDate(a.row.createdAt))+" ")]}}])}),e("b-table-column",{attrs:{field:"updatedAt",label:t.$t("globals.fields.updatedAt"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t.$utils.niceDate(a.row.updatedAt))+" ")]}}])}),e("b-table-column",{attrs:{"cell-class":"actions",align:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[e("a",{attrs:{href:"#","data-cy":"btn-preview","aria-label":t.$t("templates.preview")},on:{click:function(l){return l.preventDefault(),t.previewTemplate(a.row)}}},[e("b-tooltip",{attrs:{label:t.$t("templates.preview"),type:"is-dark"}},[e("b-icon",{attrs:{icon:"file-find-outline",size:"is-small"}})],1)],1),e("a",{attrs:{href:"#","data-cy":"btn-edit","aria-label":t.$t("globals.buttons.edit")},on:{click:function(l){return l.preventDefault(),t.showEditForm(a.row)}}},[e("b-tooltip",{attrs:{label:t.$t("globals.buttons.edit"),type:"is-dark"}},[e("b-icon",{attrs:{icon:"pencil-outline",size:"is-small"}})],1)],1),e("a",{attrs:{href:"#","data-cy":"btn-clone","aria-label":t.$t("globals.buttons.clone")},on:{click:function(l){l.preventDefault(),t.$utils.prompt("Clone template",{placeholder:"Name",value:`Copy of ${a.row.name}`},m=>t.cloneTemplate(m,a.row))}}},[e("b-tooltip",{attrs:{label:t.$t("globals.buttons.clone"),type:"is-dark"}},[e("b-icon",{attrs:{icon:"file-multiple-outline",size:"is-small"}})],1)],1),!a.row.isDefault&&a.row.type!=="tx"?e("a",{attrs:{href:"#","data-cy":"btn-set-default","aria-label":t.$t("templates.makeDefault")},on:{click:function(l){l.preventDefault(),t.$utils.confirm(null,()=>t.makeTemplateDefault(a.row))}}},[e("b-tooltip",{attrs:{label:t.$t("templates.makeDefault"),type:"is-dark"}},[e("b-icon",{attrs:{icon:"check-circle-outline",size:"is-small"}})],1)],1):e("span",{staticClass:"a has-text-grey-light"},[e("b-icon",{attrs:{icon:"check-circle-outline",size:"is-small"}})],1),a.row.isDefault?e("span",{staticClass:"a has-text-grey-light"},[e("b-icon",{attrs:{icon:"trash-can-outline",size:"is-small"}})],1):e("a",{attrs:{href:"#","data-cy":"btn-delete","aria-label":t.$t("globals.buttons.delete")},on:{click:function(l){l.preventDefault(),t.$utils.confirm(null,()=>t.deleteTemplate(a.row))}}},[e("b-tooltip",{attrs:{label:t.$t("globals.buttons.delete"),type:"is-dark"}},[e("b-icon",{attrs:{icon:"trash-can-outline",size:"is-small"}})],1)],1)])]}}])})],1),e("b-modal",{staticClass:"template-modal",attrs:{scroll:"keep","aria-modal":!0,active:t.isFormVisible,width:1200,"can-cancel":!1},on:{"update:active":function(a){t.isFormVisible=a}}},[e("template-form",{attrs:{data:t.curItem,"is-editing":t.isEditing},on:{finished:t.formFinished}})],1),t.previewItem?e("campaign-preview",{attrs:{type:"template",id:t.previewItem.id,"template-type":t.previewItem.type,title:t.previewItem.name},on:{close:t.closePreview}}):t._e()],1)},_=[],$=n(y,g,_);const D=$.exports;export{D as default};
