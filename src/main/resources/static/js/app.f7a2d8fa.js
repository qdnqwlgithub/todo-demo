(function(){"use strict";var e={5177:function(e,t,o){var l=o(5102),i=o(9269),n=o(3201);const r=(0,i.Uk)(" Todo ");function a(e,t,o,l,a,d){const s=(0,i.up)("q-icon"),c=(0,i.up)("q-avatar"),u=(0,i.up)("q-toolbar-title"),m=(0,i.up)("q-toolbar"),h=(0,i.up)("q-header"),p=(0,i.up)("router-view"),f=(0,i.up)("q-page-container"),w=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.j4)(w,{view:"hHh lpR fFf"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{elevated:"",class:"bg-primary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"kayaking",size:"30px"})])),_:1}),r])),_:1}),(0,i.Uk)(" "+(0,n.zw)(this.claims&&this.claims.email?e.claims.email:""),1)])),_:1})])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p)])),_:1})])),_:1})}var d={name:"LayoutDefault"},s=o(7617),c=o(2446),u=o(7454),m=o(366),h=o(8623),p=o(9393),f=o(4633),w=o(6974),g=o(1410),v=o.n(g);const C=(0,s.Z)(d,[["render",a]]);var b=C;v()(d,"components",{QLayout:c.Z,QHeader:u.Z,QToolbar:m.Z,QToolbarTitle:h.Z,QAvatar:p.Z,QIcon:f.Z,QPageContainer:w.Z});var k=o(4464),y={config:{},plugins:{}},_=o(6976),T=o.n(_),W=o(2201);const Z={class:"column justify-center items-center",id:"row-container"},q=(0,i._)("div",{class:"text-h4"},"Todos",-1),Q=(0,i.Uk)(" Filter the todos "),x={key:0,class:"error"},E=(0,i._)("span",{class:"q-ml-sm"},"Are you sure remove all?",-1);function F(e,t,o,r,a,d){const s=(0,i.up)("TodoItem"),c=(0,i.up)("q-item"),u=(0,i.up)("q-list"),m=(0,i.up)("q-card-section"),h=(0,i.up)("q-icon"),p=(0,i.up)("q-item-section"),f=(0,i.up)("q-btn"),w=(0,i.up)("q-tooltip"),g=(0,i.up)("q-btn-group"),v=(0,i.up)("q-card"),C=(0,i.up)("q-banner"),b=(0,i.up)("q-avatar"),k=(0,i.up)("q-card-actions"),y=(0,i.up)("q-dialog"),_=(0,i.Q2)("ripple"),T=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i.Wm)(v,{class:"my-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[q,(0,i.Wm)(u,{padding:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.filteredTodos,(t=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(c,{key:t.id,clickable:"",rounded:"",class:"todo-item"},{default:(0,i.w5)((()=>["all"===e.filter||"incomplete"===e.filter&&!t.completed||"complete"===e.filter&&t.completed?((0,i.wg)(),(0,i.j4)(s,{key:0,item:t,deleteMe:d.handleClickDelete,showError:d.handleShowError,setCompleted:d.handleSetCompleted,setTitle:d.handleSetTitle},null,8,["item","deleteMe","showError","setCompleted","setTitle"])):(0,i.kq)("",!0)])),_:2},1024)),[[_]]))),128))])),_:1})])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{avatar:"",class:"add-item-icon"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{color:"green",name:"add_circle_outline"})])),_:1}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("input",{type:"text",ref:"newTodoInput","onUpdate:modelValue":t[0]||(t[0]=t=>e.newTodoTitle=t),onChange:t[1]||(t[1]=(...e)=>d.handleDoneEditingNewTodo&&d.handleDoneEditingNewTodo(...e)),onBlur:t[2]||(t[2]=(...e)=>d.handleCancelEditingNewTodo&&d.handleCancelEditingNewTodo(...e))},null,544),[[l.nr,e.newTodoTitle]])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m,{style:{"text-align":"center"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{color:"amber","text-color":"black",label:"Remove Completed",style:{"margin-right":"10px"},onClick:d.handleDeleteCompleted},null,8,["onClick"]),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{glossy:"",color:"all"===e.filter?"primary":"white","text-color":"black",label:"All",onClick:t[3]||(t[3]=e=>d.handleSetFilter("all"))},null,8,["color"]),(0,i.Wm)(f,{glossy:"",color:"complete"===e.filter?"primary":"white","text-color":"black",label:"Completed",onClick:t[4]||(t[4]=e=>d.handleSetFilter("complete"))},null,8,["color"]),(0,i.Wm)(f,{glossy:"",color:"incomplete"===e.filter?"primary":"white","text-color":"black",label:"Incomplete",onClick:t[5]||(t[5]=e=>d.handleSetFilter("incomplete"))},null,8,["color"]),(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[Q])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m,{style:{"text-align":"center"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{color:"red","text-color":"black",label:"Remove All",style:{"margin-right":"10px"},onClick:t[6]||(t[6]=t=>e.confirm=!0)})])),_:1})])),_:1}),e.error?((0,i.wg)(),(0,i.iD)("div",x,[(0,i.Wm)(C,{"inline-actions":"",class:"text-white bg-red",onClick:d.handleErrorClick},{default:(0,i.w5)((()=>[(0,i.Uk)(" ERROR: "+(0,n.zw)(this.error),1)])),_:1},8,["onClick"])])):(0,i.kq)("",!0),(0,i.Wm)(y,{modelValue:e.confirm,"onUpdate:modelValue":t[7]||(t[7]=t=>e.confirm=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),E])),_:1}),(0,i.Wm)(k,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(f,{flat:"",label:"Cancel",color:"primary"},null,512),[[T]]),(0,i.wy)((0,i.Wm)(f,{flat:"",label:"Yes",color:"primary",onClick:d.handleRemoveAll},null,8,["onClick"]),[[T]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const I={class:"q-ml-sm"};function $(e,t,o,r,a,d){const s=(0,i.up)("q-icon"),c=(0,i.up)("q-item-section"),u=(0,i.up)("q-avatar"),m=(0,i.up)("q-card-section"),h=(0,i.up)("q-btn"),p=(0,i.up)("q-card-actions"),f=(0,i.up)("q-card"),w=(0,i.up)("q-dialog"),g=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[this.item.completed?((0,i.wg)(),(0,i.j4)(c,{key:0,avatar:"",class:"check-icon"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"green",name:"done",onClick:t[0]||(t[0]=e=>d.handleClickSetCompleted(!1))})])),_:1})):((0,i.wg)(),(0,i.j4)(c,{key:1,avatar:"",class:"check-icon"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"gray",name:"check_box_outline_blank",onClick:t[1]||(t[1]=e=>d.handleClickSetCompleted(!0))})])),_:1})),e.editing?((0,i.wg)(),(0,i.j4)(c,{key:3},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("input",{class:"list-item-input",type:"text",name:"textinput",ref:"input","onUpdate:modelValue":t[2]||(t[2]=t=>e.editingTitle=t),onChange:t[3]||(t[3]=(...e)=>d.handleDoneEditing&&d.handleDoneEditing(...e)),onBlur:t[4]||(t[4]=(...e)=>d.handleCancelEditing&&d.handleCancelEditing(...e))},null,544),[[l.nr,e.editingTitle]])])),_:1})):((0,i.wg)(),(0,i.j4)(c,{key:2},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(this.item.title),1)])),_:1})),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(this.item.updateTime),1)])),_:1}),(0,i.Wm)(c,{avatar:"",class:"hide-icon",onClick:d.handleClickEdit},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"primary",name:"edit"})])),_:1},8,["onClick"]),(0,i.Wm)(c,{avatar:"",class:"hide-icon close-icon",onClick:d.deleteBefore},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"red",name:"close"})])),_:1},8,["onClick"]),(0,i.Wm)(w,{modelValue:e.confirm,"onUpdate:modelValue":t[5]||(t[5]=t=>e.confirm=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),(0,i._)("span",I,(0,n.zw)(e.confirmText),1)])),_:1}),(0,i.Wm)(p,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(h,{flat:"",label:"Cancel",color:"primary"},null,512),[[g]]),(0,i.wy)((0,i.Wm)(h,{flat:"",label:"Yes",color:"primary",onClick:d.handleClickDelete},null,8,["onClick"]),[[g]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var D={name:"TodoItem",props:{item:Object,deleteMe:Function,showError:Function,setCompleted:Function,setTitle:Function},data:function(){return{editing:!1,editingTitle:this.item.title,confirm:!1,confirmText:""}},methods:{deleteBefore(){this.confirmText=`Are you sure delete the ${this.item.title} item?`,this.confirm=!0},handleClickEdit(){this.editing=!0,this.editingTitle=this.item.title,(0,i.Y3)(function(){this.$refs.input.focus()}.bind(this))},handleCancelEditing(){this.editing=!1},handleDoneEditing(){this.editing=!1,this.$api.updateForId(this.item.id,this.editingTitle,this.item.completed).then((e=>{this.setTitle(),this.$log.info("Item updated:",e.data)})).catch((e=>{this.showError("Failed to update todo title"),this.$log.debug(e)}))},handleClickSetCompleted(e){this.$api.updateForId(this.item.id,this.item.title,e).then((t=>{this.setCompleted(this.item.id,e),this.$log.info("Item updated:",t.data)})).catch((e=>{this.showError("Failed to update todo completed status"),this.$log.debug(e)}))},handleClickDelete(){this.deleteMe(this.item.id)}}},S=o(2278),j=o(1810),O=o(8055),A=o(9501),N=o(4333),R=o(8071),U=o(8819);const P=(0,s.Z)(D,[["render",$],["__scopeId","data-v-1eed5f22"]]);var B=P;v()(D,"components",{QItemSection:S.Z,QIcon:f.Z,QDialog:j.Z,QCard:O.Z,QCardSection:A.Z,QAvatar:p.Z,QCardActions:N.Z,QBtn:R.Z}),v()(D,"directives",{ClosePopup:U.Z});var L=o(6237),V={name:"LayoutDefault",components:{TodoItem:B},data:function(){return{todos:[],newTodoTitle:"",visibility:"all",error:"",filter:"all",confirm:!1}},setup(){return{alert:(0,L.iH)(!1)}},mounted(){this.refresh()},computed:{filteredTodos(){return"all"===this.filter?this.todos:"complete"===this.filter?this.todos.filter((e=>e.completed)):"incomplete"===this.filter?this.todos.filter((e=>!e.completed)):[]}},methods:{refresh(){this.$api.getAll().then((e=>{this.$log.debug("Data loaded: ",e.data),this.todos=e.data})).catch((e=>{this.$log.debug(e),this.error="Failed to load todos"}))},handleSetFilter(e){this.filter=e},handleClickDelete(e){this.$api.removeForId(e).then((()=>{})).catch((e=>{this.$log.debug(e),this.error="Failed to remove todo"})).finally((()=>{this.refresh()}))},handleDeleteCompleted(){const e=this.todos.filter((e=>e.completed));Promise.all(e.map((e=>this.$api.removeForId(e.id).then((()=>{this.$log.debug("Item removed:",e)})).catch((e=>(this.$log.debug(e),this.error="Failed to remove todo",e)))))).finally((()=>{this.refresh()}))},handleDoneEditingNewTodo(){const e=this.newTodoTitle&&this.newTodoTitle.trim();e&&this.$api.createNew(e,!1).then((e=>{this.$log.debug("New item created:",e),this.newTodoTitle="",this.$refs.newTodoInput.blur()})).catch((e=>{this.$log.debug(e),this.error="Failed to add todo"})).finally((()=>{this.refresh()}))},handleCancelEditingNewTodo(){this.newTodoTitle=""},handleSetCompleted(){this.refresh()},handleSetTitle(){this.refresh()},handleShowError(e){this.error=e},handleErrorClick(){this.error=null},handleRemoveAll(){Promise.all(this.todos.map((e=>this.$api.removeForId(e.id).then((()=>{this.$log.debug("Item removed:",e)})).catch((e=>(this.$log.debug(e),this.error="Failed to remove todo",e)))))).finally((()=>{this.refresh()}))}}},z=o(2146),M=o(5246),H=o(8712),Y=o(9907),G=o(7194),J=o(8108);const K=(0,s.Z)(V,[["render",F]]);var X=K;v()(V,"components",{QCard:O.Z,QCardSection:A.Z,QList:z.Z,QItem:M.Z,QItemSection:S.Z,QIcon:f.Z,QBtn:R.Z,QBtnGroup:H.Z,QTooltip:Y.Z,QBanner:G.Z,QDialog:j.Z,QAvatar:p.Z,QCardActions:N.Z}),v()(V,"directives",{Ripple:J.Z,ClosePopup:U.Z});const ee=[{path:"/",component:X}],te=(0,W.p7)({history:(0,W.PO)("/"),routes:ee});var oe=te,le=o(6085),ie=o.n(le);const ne=ie().create({baseURL:"http://localhost:9000",timeout:2e3}),re=()=>(ne.interceptors.request.use((async function(e){return e}),(function(e){return Promise.reject(e)})),{createNew(e,t){return ne.post("/todos",{title:e,completed:t,updateTime:new Date})},getAll(){return ne.get("/todos",{transformResponse:[function(e){return e?JSON.parse(e)._embedded.todos:e}]})},updateForId(e,t,o){return ne.put("todos/"+e,{title:t,completed:o,updateTime:new Date})},removeForId(e){return ne.delete("todos/"+e)}});var ae=re;const de={isEnabled:!0,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!1,separator:"|",showConsoleColors:!0},se=(0,l.ri)(b).use(k.Z,y).use(T(),de).use(oe);se.config.globalProperties.$api=ae(),se.mount("#app")}},t={};function o(l){var i=t[l];if(void 0!==i)return i.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,l,i,n){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],i=e[c][1],n=e[c][2];for(var a=!0,d=0;d<l.length;d++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[d])}))?l.splice(d--,1):(a=!1,n<r&&(r=n));if(a){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,n,r=l[0],a=l[1],d=l[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(d)var c=d(o)}for(t&&t(l);s<r.length;s++)n=r[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},l=self["webpackChunkclient"]=self["webpackChunkclient"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(5177)}));l=o.O(l)})();
//# sourceMappingURL=app.f7a2d8fa.js.map