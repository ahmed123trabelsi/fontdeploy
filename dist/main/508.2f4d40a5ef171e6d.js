"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[508],{12508:(pe,u,l)=>{l.r(u),l.d(u,{EMPLOYEE_MISSION_ROUTE:()=>de});var f=l(59115),E=l(33726),g=l(84412),T=l(57786),F=l(96354),D=l(45024),v=l(14619),$=l(35780),m=l(60177),C=l(9183),j=l(86600),R=l(67949),b=l(82765),r=l(9159),y=l(99213),M=l(88834),x=l(14823),I=l(8173),p=l(96695),d=l(2042),e=l(54438),S=l(21626),k=l(2490);let _=(()=>{class i extends v.U{constructor(t,s){super(),this.http=t,this.cookieService=s,this.baseUrl="https://backdeploy-7y83.onrender.com/missions",this.isTblLoading=!0,this.dataChange=new g.t([])}assignUserToMission(t,s){return this.http.post(`${this.baseUrl}/assign-user`,{missionId:t,userId:s})}getDialogData(){return this.dialogData}createMission(t){return this.http.post(`${this.baseUrl}/create`,t)}updateDataChange(t){this.dataChange.next(t)}getDataChange(){return this.dataChange.asObservable()}get data(){return this.dataChange.value}addMission(t){this.dialogData=t,console.log(this.getTokenFromCookie())}deleteMission(t){return this.http.delete(`${this.baseUrl}/${t}`)}updateMission(t,s){return this.http.put(`${this.baseUrl}/${t}`,s)}deleteMultipleMissions(t){return t.map(o=>o?.toString()),this.http.delete(`${this.baseUrl}/delete-multiple`)}getAllMissions(){const t=this.getTokenFromCookie();if(!t)throw console.log("erreur dans id"),new Error("ID du client introuvable dans le cookie.");this.subs.sink=this.http.get(`${this.baseUrl}/employee/${t}`).subscribe({next:s=>{const a=Array.isArray(s)?s:[s];console.log("inside getall"),console.log(a),this.isTblLoading=!1,this.dataChange.next(a),console.log(this.dataChange)},error:s=>{this.isTblLoading=!1,console.log(s.name+" "+s.message)}})}createAndAssignMission(t){const s=this.getTokenFromCookie();return this.http.post(`${this.baseUrl}/${s}`,t)}getTokenFromCookie(){if(this.cookieService.check("token")){let t=this.cookieService.get("token");return console.log(t),t}return null}static#e=this.\u0275fac=function(s){return new(s||i)(e.KVO(S.Qq),e.KVO(k.O))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var G=l(75351),N=l(95416),U=l(74710);const V=["filter"],A=()=>["Missions"],B=()=>[5,10,25,100];function O(i,n){if(1&i){const t=e.RV6();e.j41(0,"mat-header-cell")(1,"mat-checkbox",44),e.bIt("change",function(a){e.eBV(t);const o=e.XpG();return e.Njj(a?o.masterToggle():null)}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(),e.Y8G("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function X(i,n){if(1&i){const t=e.RV6();e.j41(0,"mat-cell")(1,"mat-checkbox",45),e.bIt("click",function(a){return e.eBV(t),e.Njj(a.stopPropagation())})("change",function(a){const o=e.eBV(t).$implicit,c=e.XpG();return e.Njj(a?c.selection.toggle(o):null)}),e.k0s()()}if(2&i){const t=n.$implicit,s=e.XpG();e.R7$(),e.Y8G("checked",s.selection.isSelected(t))}}function w(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1,"Id"),e.k0s())}function Y(i,n){if(1&i&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t._id)}}function H(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1,"Title"),e.k0s())}function L(i,n){if(1&i&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t.title)}}function z(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1,"Description"),e.k0s())}function J(i,n){if(1&i&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t.description)}}function P(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1," Status "),e.k0s())}function Q(i,n){if(1&i&&(e.j41(0,"div")(1,"span",49),e.EFF(2),e.k0s()()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function Z(i,n){if(1&i&&(e.j41(0,"div")(1,"span",50),e.EFF(2),e.k0s()()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function K(i,n){if(1&i&&(e.j41(0,"div")(1,"span",51),e.EFF(2),e.k0s()()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function W(i,n){if(1&i&&(e.j41(0,"div")(1,"span",52),e.EFF(2),e.k0s()()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function q(i,n){if(1&i&&(e.j41(0,"mat-cell",47)(1,"span",48),e.EFF(2,"Status:"),e.k0s(),e.DNE(3,Q,3,1,"div")(4,Z,3,1,"div")(5,K,3,1,"div")(6,W,3,1,"div"),e.k0s()),2&i){const t=n.$implicit;e.R7$(3),e.vxM(3,"completed"===t.status?3:-1),e.R7$(),e.vxM(4,"canceled"===t.status?4:-1),e.R7$(),e.vxM(5,"pending"===t.status?5:-1),e.R7$(),e.vxM(6,"ongoing"===t.status?6:-1)}}function ee(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1,"Start Date"),e.k0s())}function te(i,n){if(1&i&&(e.j41(0,"mat-cell"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(e.i5U(2,1,t.startDate,"MM/dd/yyyy"))}}function ie(i,n){1&i&&(e.j41(0,"mat-header-cell",46),e.EFF(1,"End Date"),e.k0s())}function se(i,n){if(1&i&&(e.j41(0,"mat-cell"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(e.i5U(2,1,t.endDate,"MM/dd/yyyy"))}}function ae(i,n){1&i&&(e.j41(0,"mat-header-cell",53),e.EFF(1,"Actions"),e.k0s())}function ne(i,n){1&i&&(e.j41(0,"mat-cell",53),e.nrm(1,"app-feather-icons",54),e.k0s()),2&i&&(e.R7$(),e.HbH("tbl-fav-edit"),e.Y8G("icon","edit"))}function oe(i,n){1&i&&e.nrm(0,"mat-header-row")}function le(i,n){1&i&&e.nrm(0,"mat-spinner")}let re=(()=>{class i extends v.U{constructor(t,s,a,o,c,h){super(),this.httpClient=t,this.CookieService=s,this.dialog=a,this.missionsService=o,this.snackBar=c,this.r=h,this.displayedColumns=["select","name","description","status","startDate","endDate","actions"],this.selection=new D.CB(!0,[]),this.contextMenuPosition={x:"0px",y:"0px"}}ngOnInit(){this.loadData(),this.missionsService.getTokenFromCookie()}route(t){this.r.navigate(["admin/mission/assignusertomission/"+t])}refresh(){this.loadData()}addNew(){let t;t="true"===localStorage.getItem("isRtl")?"rtl":"ltr"}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(t=>this.selection.select(t))}removeSelectedRows(){let t;t=this.selection.selected.map(a=>a._id),t.length>0&&this.missionsService.deleteMultipleMissions(t).subscribe(()=>{this.selection.clear(),this.refreshTable()},a=>{console.error("Erreur lors de la suppression des missions:",a)})}loadData(){this.exampleDatabase=new _(this.httpClient,this.CookieService),this.dataSource=new ce(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,E.R)(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}exportExcel(){const t=this.dataSource.filteredData.map(s=>({Title:s.title,Description:s.description,Status:s.status,"Start Date":(0,m.Yq)(new Date(s.startDate),"yyyy-MM-dd","en")||"","End Date":(0,m.Yq)(new Date(s.endDate),"yyyy-MM-dd","en")||""}));$.H.exportToExcel(t,"excel")}onContextMenu(t,s){}static#e=this.\u0275fac=function(s){return new(s||i)(e.rXU(S.Qq),e.rXU(k.O),e.rXU(G.bZ),e.rXU(_),e.rXU(N.UG),e.rXU(U.Ix))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-missionemployee"]],viewQuery:function(s,a){if(1&s&&(e.GBs(p.iy,7),e.GBs(d.B4,7),e.GBs(V,7),e.GBs(f.Cp,5)),2&s){let o;e.mGM(o=e.lsd())&&(a.paginator=o.first),e.mGM(o=e.lsd())&&(a.sort=o.first),e.mGM(o=e.lsd())&&(a.filter=o.first),e.mGM(o=e.lsd())&&(a.contextMenu=o.first)}},standalone:!0,features:[e.Vt3,e.aNF],decls:60,vars:12,consts:[["filter",""],["paginator",""],[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"materialTableHeader"],[1,"left"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"right"],[1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","REFRESH",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],[1,"body","overflow-auto"],[1,"responsive_table"],["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"length","pageIndex","pageSize","pageSizeOptions"],[3,"change","checked","indeterminate"],[3,"click","change","checked"],["mat-sort-header",""],["mat-cell",""],[1,"mobile-label"],[1,"badge","badge-pill","badge-primary","col-green"],[1,"badge","badge-pill","badge-primary","col-red"],[1,"badge","badge-pill","badge-primary","col-black"],[1,"badge","badge-pill","badge-primary","col-blue"],[1,"pr-0"],[3,"icon"]],template:function(s,a){if(1&s){const o=e.RV6();e.j41(0,"section",2)(1,"div",3)(2,"div",4),e.nrm(3,"app-breadcrumb",5),e.k0s(),e.j41(4,"div",6)(5,"div",7)(6,"div",8)(7,"div",9)(8,"div",10)(9,"ul",11)(10,"li",12)(11,"h2"),e.EFF(12,"Missions"),e.k0s()(),e.j41(13,"li",13)(14,"label",14)(15,"i",15),e.EFF(16,"search"),e.k0s()(),e.nrm(17,"input",16,0),e.k0s()()(),e.j41(19,"div",17)(20,"ul",18)(21,"li",19)(22,"div",20)(23,"button",21),e.bIt("click",function(){return e.eBV(o),e.Njj(a.refresh())}),e.j41(24,"mat-icon",22),e.EFF(25,"refresh"),e.k0s()()()(),e.j41(26,"li")(27,"div",23)(28,"img",24),e.bIt("click",function(){return e.eBV(o),e.Njj(a.exportExcel())}),e.k0s()()()()()(),e.j41(29,"div",25)(30,"div",26)(31,"table",27),e.qex(32,28),e.DNE(33,O,2,2,"mat-header-cell",29)(34,X,2,1,"mat-cell",30),e.bVm(),e.qex(35,31),e.DNE(36,w,2,0,"mat-header-cell",32)(37,Y,2,1,"mat-cell",30),e.bVm(),e.qex(38,33),e.DNE(39,H,2,0,"mat-header-cell",32)(40,L,2,1,"mat-cell",30),e.bVm(),e.qex(41,34),e.DNE(42,z,2,0,"mat-header-cell",32)(43,J,2,1,"mat-cell",30),e.bVm(),e.qex(44,35),e.DNE(45,P,2,0,"mat-header-cell",32)(46,q,7,4,"mat-cell",36),e.bVm(),e.qex(47,37),e.DNE(48,ee,2,0,"mat-header-cell",32)(49,te,3,4,"mat-cell",30),e.bVm(),e.qex(50,38),e.DNE(51,ie,2,0,"mat-header-cell",32)(52,se,3,4,"mat-cell",30),e.bVm(),e.qex(53,39),e.DNE(54,ae,2,0,"mat-header-cell",40)(55,ne,2,3,"mat-cell",41),e.bVm(),e.DNE(56,oe,1,0,"mat-header-row",42),e.k0s(),e.DNE(57,le,1,0,"mat-spinner"),e.k0s()()()(),e.nrm(58,"mat-paginator",43,1),e.k0s()()()}2&s&&(e.R7$(3),e.Y8G("title","All Missions")("items",e.lJ4(10,A))("active_item","All Missions"),e.R7$(28),e.Y8G("dataSource",a.dataSource),e.R7$(25),e.Y8G("matHeaderRowDef",a.displayedColumns),e.R7$(),e.vxM(57,a.exampleDatabase?-1:57),e.R7$(),e.Y8G("length",a.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",e.lJ4(11,B)))},dependencies:[I.D,x.uc,x.oV,M.Hl,M.$0,y.m_,y.An,r.tP,r.Zl,r.tL,r.ji,r.cC,r.YV,r.KS,r.$R,r.YZ,d.NQ,d.B4,d.aE,b.g7,b.So,R.h,j.pZ,C.D6,C.LG,f.Cn,p.Ou,p.iy,m.vh,m.MD]})}return i})();class ce extends D.qS{get filter(){return this.filterChange.value}set filter(n){this.filterChange.next(n)}constructor(n,t,s){super(),this.exampleDatabase=n,this.paginator=t,this._sort=s,this.filterChange=new g.t(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const n=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllMissions(),(0,T.h)(...n).pipe((0,F.T)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(a=>-1!==(a.title+a.description+a.status+a.startDate+a.endDate).toLowerCase().indexOf(this.filter.toLowerCase()));const t=this.sortData(this.filteredData.slice());return this.renderedData=t.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(n){return this._sort.active&&""!==this._sort.direction?n.sort((t,s)=>{let a="",o="";switch(this._sort.active){case"id":a=t._id?t._id.toString():void 0,o=s._id?s._id.toString():void 0;break;case"name":[a,o]=[t.title,s.title];break;case"description":[a,o]=[t.description,s.description];break;case"status":[a,o]=[t.status,s.status];break;case"startDate":[a,o]=[t.startDate,s.startDate];break;case"endDate":[a,o]=[t.endDate,s.endDate]}if(void 0!==a&&void 0!==o){const c=isNaN(+a)?a:+a,h=isNaN(+o)?o:+o;return void 0===a||void 0===o?void 0===a?1:-1:(c<h?-1:1)*("asc"===this._sort.direction?1:-1)}return void 0===a?1:-1}):n}}const de=[{path:"missions",component:re},{path:"**",component:l(12053).X}]}}]);