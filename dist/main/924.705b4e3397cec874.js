"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[924],{15924:(Nt,j,l)=>{l.r(j),l.d(j,{ADMIN_EMPLOYEE_ROUTE:()=>Mt});var V=l(12053),k=l(96695),D=l(2042),R=l(45024),x=l(59115),Y=l(33726),S=l(84412),B=l(57786),X=l(96354),T=l(14619),w=l(35780),f=l(60177),$=l(9183),C=l(86600),H=l(67949),y=l(82765),m=l(9159),F=l(99213),h=l(88834),A=l(14823),I=l(8173),t=l(54438),M=l(21626);let g=(()=>{class a extends T.U{constructor(e){super(),this.http=e,this.baseUrl="https://backdeploy-7y83.onrender.com/missions",this.isTblLoading=!0,this.dataChange=new S.t([])}assignUserToMission(e,s){return this.http.post(`${this.baseUrl}/assign-user`,{missionId:e,useremail:s})}getDialogData(){return this.dialogData}createMission(e){return this.http.post(`${this.baseUrl}/create`,e)}updateDataChange(e){this.dataChange.next(e)}getDataChange(){return this.dataChange.asObservable()}get data(){return this.dataChange.value}getAllMissions(){this.subs.sink=this.http.get(this.baseUrl).subscribe({next:e=>{this.isTblLoading=!1,this.dataChange.next(e)},error:e=>{this.isTblLoading=!1}})}addMission(e){this.dialogData=e}deleteMission(e){return this.http.delete(`${this.baseUrl}/${e}`)}updateMission(e,s){return this.http.put(`${this.baseUrl}/${e}`,s)}deleteMultipleMissions(e){return e.map(n=>n?.toString()),this.http.delete(`${this.baseUrl}/delete-multiple`)}static#t=this.\u0275fac=function(s){return new(s||a)(t.KVO(M.Qq))};static#e=this.\u0275prov=t.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var P=l(10467),p=l(75351);let J=(()=>{class a{constructor(e,s,i){this.dialogRef=e,this.data=s,this.MissionService=i}onNoClick(){this.dialogRef.close()}confirmDelete(){var e=this;return(0,P.A)(function*(){console.log(e.data.id),yield e.MissionService.deleteMission(e.data.id).subscribe()})()}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(p.CP),t.rXU(p.Vh),t.rXU(g))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-delete"]],standalone:!0,features:[t.aNF],decls:30,vars:5,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"click","mat-dialog-close"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(s,i){1&s&&(t.j41(0,"div",0)(1,"h3",1),t.EFF(2,"Are you sure?"),t.k0s(),t.j41(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),t.EFF(8," Title: "),t.k0s(),t.EFF(9),t.k0s()(),t.j41(10,"li")(11,"p")(12,"span",4),t.EFF(13," Description: "),t.k0s(),t.EFF(14),t.k0s()(),t.j41(15,"li")(16,"p")(17,"span",4),t.EFF(18,"StartDate: "),t.k0s(),t.EFF(19),t.k0s()(),t.j41(20,"li")(21,"p")(22,"span",4),t.EFF(23,"EndDATE: "),t.k0s(),t.EFF(24),t.k0s()()()(),t.j41(25,"div",5)(26,"button",6),t.bIt("click",function(){return i.confirmDelete()}),t.EFF(27," Delete "),t.k0s(),t.j41(28,"button",7),t.bIt("click",function(){return i.onNoClick()}),t.EFF(29,"Cancel"),t.k0s()()()),2&s&&(t.R7$(9),t.JRh(i.data.title),t.R7$(5),t.JRh(i.data.description),t.R7$(5),t.SpI("",i.data.startdate," "),t.R7$(5),t.SpI("",i.data.enddate," "),t.R7$(2),t.Y8G("mat-dialog-close",1))},dependencies:[p.BI,p.Yi,p.E7,h.Hl,h.$z,p.tx]})}return a})();var r=l(89417),b=l(25084),u=l(32102),_=l(99631);function L(a,o){1&a&&(t.j41(0,"mat-error"),t.EFF(1,"Title is required"),t.k0s())}function O(a,o){1&a&&(t.j41(0,"mat-error"),t.EFF(1,"Description is required"),t.k0s())}function z(a,o){1&a&&(t.j41(0,"mat-error"),t.EFF(1,"Start Date is required"),t.k0s())}function Q(a,o){1&a&&(t.j41(0,"mat-error"),t.EFF(1,"End Date is required"),t.k0s())}let N=(()=>{class a{constructor(e,s,i,n){this.dialogRef=e,this.data=s,this.formBuilder=i,this.missionService=n,this.action=s.action,"edit"===this.action&&s.id?(this.dialogTitle=s.mission.title,this.mission=s.mission):(this.dialogTitle="New Mission",this.mission={title:"",description:"",startDate:"",endDate:""}),this.missionForm=this.createMissionForm()}createMissionForm(){return this.formBuilder.group({title:[this.mission.title,r.k0.required],description:[this.mission.description,r.k0.required],startDate:[this.mission.startDate,r.k0.required],endDate:[this.mission.endDate,r.k0.required]})}submit(){if(this.missionForm.valid){const e={title:this.missionForm.value.title,description:this.missionForm.value.description,startDate:this.missionForm.value.startDate,endDate:this.missionForm.value.endDate};"edit"===this.action?this.missionService.updateMission(this.data.id,e).subscribe():this.missionService.createMission(e).subscribe(),this.dialogRef.close()}}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(p.CP),t.rXU(p.Vh),t.rXU(r.ok),t.rXU(g))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-form-dialog"]],standalone:!0,features:[t.aNF],decls:47,vars:12,consts:[["startDatePicker",""],["endDatePicker",""],[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","title","required",""],[4,"ngIf"],["matInput","","formControlName","description","required",""],["matInput","","formControlName","startDate","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","endDate","required","",3,"matDatepicker"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["align","end",1,"example-button-row"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(s,i){if(1&s){const n=t.RV6();t.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h2",6),t.EFF(5),t.k0s()()()(),t.j41(6,"div",7)(7,"form",8)(8,"div",9)(9,"div",10)(10,"mat-form-field",11)(11,"mat-label"),t.EFF(12,"Title"),t.k0s(),t.nrm(13,"input",12),t.DNE(14,L,2,0,"mat-error",13),t.k0s()(),t.j41(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t.EFF(18,"Description"),t.k0s(),t.nrm(19,"textarea",14),t.DNE(20,O,2,0,"mat-error",13),t.k0s()()(),t.j41(21,"div",9)(22,"div",10)(23,"mat-form-field",11)(24,"mat-label"),t.EFF(25,"Start Date"),t.k0s(),t.nrm(26,"input",15)(27,"mat-datepicker-toggle",16)(28,"mat-datepicker",null,0),t.DNE(30,z,2,0,"mat-error",13),t.k0s()(),t.j41(31,"div",10)(32,"mat-form-field",11)(33,"mat-label"),t.EFF(34,"End Date"),t.k0s(),t.nrm(35,"input",17)(36,"mat-datepicker-toggle",16)(37,"mat-datepicker",null,1),t.DNE(39,Q,2,0,"mat-error",13),t.k0s()()(),t.j41(40,"div",9)(41,"div",18)(42,"div",19)(43,"button",20),t.bIt("click",function(){return t.eBV(n),t.Njj(i.closeDialog())}),t.EFF(44,"Cancel"),t.k0s(),t.j41(45,"button",21),t.bIt("click",function(){return t.eBV(n),t.Njj(i.submit())}),t.EFF(46),t.k0s()()()()()()()}if(2&s){let n,c,d,v;const G=t.sdS(29),U=t.sdS(38);t.R7$(5),t.JRh(i.dialogTitle),t.R7$(2),t.Y8G("formGroup",i.missionForm),t.R7$(7),t.Y8G("ngIf",null==(n=i.missionForm.get("title"))?null:n.hasError("required")),t.R7$(6),t.Y8G("ngIf",null==(c=i.missionForm.get("description"))?null:c.hasError("required")),t.R7$(6),t.Y8G("matDatepicker",G),t.R7$(),t.Y8G("for",G),t.R7$(3),t.Y8G("ngIf",null==(d=i.missionForm.get("startDate"))?null:d.hasError("required")),t.R7$(5),t.Y8G("matDatepicker",U),t.R7$(),t.Y8G("for",U),t.R7$(3),t.Y8G("ngIf",null==(v=i.missionForm.get("endDate"))?null:v.hasError("required")),t.R7$(6),t.Y8G("disabled",!i.missionForm.valid),t.R7$(),t.SpI(" ","edit"===i.action?"Update":"Add"," ")}},dependencies:[h.Hl,h.$z,F.m_,p.Yi,r.YN,r.qT,r.me,r.BC,r.cb,r.YS,r.X1,r.j4,r.JD,u.RG,u.rl,u.nJ,u.TL,u.yw,_.fS,_.fg,b.X6,b.Vh,b.bZ,b.bU,f.MD,f.bT]})}return a})();var Z=l(95416),E=l(74710);const K=["filter"],W=()=>["Missions"],q=()=>[5,10,25,100];function tt(a,o){if(1&a){const e=t.RV6();t.j41(0,"mat-header-cell")(1,"mat-checkbox",48),t.bIt("change",function(i){t.eBV(e);const n=t.XpG();return t.Njj(i?n.masterToggle():null)}),t.k0s()()}if(2&a){const e=t.XpG();t.R7$(),t.Y8G("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())}}function et(a,o){if(1&a){const e=t.RV6();t.j41(0,"mat-cell")(1,"mat-checkbox",49),t.bIt("click",function(i){return t.eBV(e),t.Njj(i.stopPropagation())})("change",function(i){const n=t.eBV(e).$implicit,c=t.XpG();return t.Njj(i?c.selection.toggle(n):null)}),t.k0s()()}if(2&a){const e=o.$implicit,s=t.XpG();t.R7$(),t.Y8G("checked",s.selection.isSelected(e))}}function it(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1,"Id"),t.k0s())}function st(a,o){if(1&a&&(t.j41(0,"mat-cell"),t.EFF(1),t.k0s()),2&a){const e=o.$implicit;t.R7$(),t.JRh(e._id)}}function at(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1,"Title"),t.k0s())}function nt(a,o){if(1&a&&(t.j41(0,"mat-cell"),t.EFF(1),t.k0s()),2&a){const e=o.$implicit;t.R7$(),t.JRh(e.title)}}function ot(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1,"Description"),t.k0s())}function lt(a,o){if(1&a&&(t.j41(0,"mat-cell"),t.EFF(1),t.k0s()),2&a){const e=o.$implicit;t.R7$(),t.JRh(e.description)}}function rt(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1," Status "),t.k0s())}function ct(a,o){if(1&a&&(t.j41(0,"div")(1,"span",53),t.EFF(2),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(2),t.SpI(" ",e.status,"")}}function mt(a,o){if(1&a&&(t.j41(0,"div")(1,"span",54),t.EFF(2),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(2),t.SpI(" ",e.status,"")}}function dt(a,o){if(1&a&&(t.j41(0,"div")(1,"span",55),t.EFF(2),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(2),t.SpI(" ",e.status,"")}}function pt(a,o){if(1&a&&(t.j41(0,"div")(1,"span",56),t.EFF(2),t.k0s()()),2&a){const e=t.XpG().$implicit;t.R7$(2),t.SpI(" ",e.status,"")}}function ht(a,o){if(1&a&&(t.j41(0,"mat-cell",51)(1,"span",52),t.EFF(2,"Status:"),t.k0s(),t.DNE(3,ct,3,1,"div")(4,mt,3,1,"div")(5,dt,3,1,"div")(6,pt,3,1,"div"),t.k0s()),2&a){const e=o.$implicit;t.R7$(3),t.vxM(3,"completed"===e.status?3:-1),t.R7$(),t.vxM(4,"canceled"===e.status?4:-1),t.R7$(),t.vxM(5,"pending"===e.status?5:-1),t.R7$(),t.vxM(6,"ongoing"===e.status?6:-1)}}function ut(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1,"Start Date"),t.k0s())}function ft(a,o){if(1&a&&(t.j41(0,"mat-cell"),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&a){const e=o.$implicit;t.R7$(),t.JRh(t.i5U(2,1,e.startDate,"MM/dd/yyyy"))}}function gt(a,o){1&a&&(t.j41(0,"mat-header-cell",50),t.EFF(1,"End Date"),t.k0s())}function bt(a,o){if(1&a&&(t.j41(0,"mat-cell"),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&a){const e=o.$implicit;t.R7$(),t.JRh(t.i5U(2,1,e.endDate,"MM/dd/yyyy"))}}function Dt(a,o){1&a&&(t.j41(0,"mat-header-cell",57),t.EFF(1,"Actions"),t.k0s())}function _t(a,o){if(1&a){const e=t.RV6();t.j41(0,"mat-cell",57)(1,"button",58),t.bIt("click",function(i){return t.eBV(e),t.Njj(i.stopPropagation())})("click",function(){const i=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.editCall(i))}),t.nrm(2,"app-feather-icons",59),t.k0s(),t.j41(3,"button",60),t.bIt("click",function(i){return t.eBV(e),t.Njj(i.stopPropagation())})("click",function(){const i=t.eBV(e),n=i.$implicit,c=i.index,d=t.XpG();return t.Njj(d.deleteItem(c,n))}),t.nrm(4,"app-feather-icons",59),t.k0s(),t.j41(5,"button",61),t.bIt("click",function(){const i=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.route(i._id))}),t.nrm(6,"app-feather-icons",59),t.k0s()()}2&a&&(t.R7$(2),t.HbH("tbl-fav-edit"),t.Y8G("icon","edit"),t.R7$(2),t.HbH("tbl-fav-delete"),t.Y8G("icon","trash-2"),t.R7$(2),t.HbH("tbl-fav-delete"),t.Y8G("icon","plus-circle"))}function vt(a,o){1&a&&t.nrm(0,"mat-header-row")}function kt(a,o){if(1&a){const e=t.RV6();t.j41(0,"mat-row",62),t.bIt("click",function(){const i=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.editCall(i))}),t.k0s()}2&a&&t.xc7("cursor","pointer")}function Ct(a,o){1&a&&t.nrm(0,"mat-spinner")}let Ft=(()=>{class a extends T.U{constructor(e,s,i,n,c){super(),this.httpClient=e,this.dialog=s,this.missionsService=i,this.snackBar=n,this.r=c,this.displayedColumns=["select","name","description","status","startDate","endDate","actions"],this.selection=new R.CB(!0,[]),this.contextMenuPosition={x:"0px",y:"0px"}}ngOnInit(){this.loadData()}route(e){this.r.navigate(["admin/mission/assignusertomission/"+e])}refresh(){this.loadData()}addNew(){let e;e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const s=this.dialog.open(N,{data:{missions:this.mission,action:"add"},direction:e});this.subs.sink=s.afterClosed().subscribe(i=>{1===i&&(this.exampleDatabase?.dataChange.value.unshift(this.missionsService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(e){let s;this.id=e._id,s="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(N,{data:{mission:e,id:e._id,action:"edit"},direction:s});this.subs.sink=i.afterClosed().subscribe(n=>{if(1===n){const c=this.exampleDatabase?.dataChange.value.findIndex(d=>d._id===this.id);void 0!==c&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value[c]=this.missionsService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(e,s){let i;this.index=e,this.id=s._id,i="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const n=this.dialog.open(J,{height:"270px",width:"300px",data:{id:s._id,title:s.title,description:s.description,status:s.status,startdate:s.startDate,enddate:s.endDate},direction:i});this.subs.sink=n.afterClosed().subscribe(c=>{if(1===c){const d=this.exampleDatabase?.dataChange.value.findIndex(v=>v._id===this.id);void 0!==d&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(d,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(e=>this.selection.select(e))}removeSelectedRows(){let e;e=this.selection.selected.map(i=>i._id),e.length>0&&this.missionsService.deleteMultipleMissions(e).subscribe(()=>{this.selection.clear(),this.refreshTable()},i=>{console.error("Erreur lors de la suppression des missions:",i)})}loadData(){this.exampleDatabase=new g(this.httpClient),this.dataSource=new Et(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,Y.R)(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}exportExcel(){const e=this.dataSource.filteredData.map(s=>({Title:s.title,Description:s.description,Status:s.status,"Start Date":(0,f.Yq)(new Date(s.startDate),"yyyy-MM-dd","en")||"","End Date":(0,f.Yq)(new Date(s.endDate),"yyyy-MM-dd","en")||""}));w.H.exportToExcel(e,"excel")}showNotification(e,s,i,n){this.snackBar.open(s,"",{duration:2e3,verticalPosition:i,horizontalPosition:n,panelClass:e})}onContextMenu(e,s){}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(M.Qq),t.rXU(p.bZ),t.rXU(g),t.rXU(Z.UG),t.rXU(E.Ix))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-allthemissions"]],viewQuery:function(s,i){if(1&s&&(t.GBs(k.iy,7),t.GBs(D.B4,7),t.GBs(K,7),t.GBs(x.Cp,5)),2&s){let n;t.mGM(n=t.lsd())&&(i.paginator=n.first),t.mGM(n=t.lsd())&&(i.sort=n.first),t.mGM(n=t.lsd())&&(i.filter=n.first),t.mGM(n=t.lsd())&&(i.contextMenu=n.first)}},standalone:!0,features:[t.Vt3,t.aNF],decls:71,vars:14,consts:[["filter",""],["paginator",""],[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"materialTableHeader"],[1,"left"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"right"],[1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","ADD",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matTooltip","REFRESH",1,"m-l-10"],["matTooltip","DELETE",1,"m-l-10",3,"hidden"],["mat-mini-fab","","color","warn",3,"click"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],[1,"body","overflow-auto"],[1,"responsive_table"],["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],[3,"length","pageIndex","pageSize","pageSizeOptions"],[3,"change","checked","indeterminate"],[3,"click","change","checked"],["mat-sort-header",""],["mat-cell",""],[1,"mobile-label"],[1,"badge","badge-pill","badge-primary","col-green"],[1,"badge","badge-pill","badge-primary","col-red"],[1,"badge","badge-pill","badge-primary","col-black"],[1,"badge","badge-pill","badge-primary","col-blue"],[1,"pr-0"],["mat-icon-button","","color","accent","matTooltip","Edit",1,"tbl-action-btn",3,"click"],[3,"icon"],["mat-icon-button","","color","accent","matTooltip","Delete",1,"tbl-action-btn",3,"click"],["mat-icon-button","","color","accent",1,"tbl-action-btn",3,"click"],["matRipple","",3,"click"]],template:function(s,i){if(1&s){const n=t.RV6();t.j41(0,"section",2)(1,"div",3)(2,"div",4),t.nrm(3,"app-breadcrumb",5),t.k0s(),t.j41(4,"div",6)(5,"div",7)(6,"div",8)(7,"div",9)(8,"div",10)(9,"ul",11)(10,"li",12)(11,"h2"),t.EFF(12,"Missions"),t.k0s()(),t.j41(13,"li",13)(14,"label",14)(15,"i",15),t.EFF(16,"search"),t.k0s()(),t.nrm(17,"input",16,0),t.k0s()()(),t.j41(19,"div",17)(20,"ul",18)(21,"li",19)(22,"div",20)(23,"button",21),t.bIt("click",function(){return t.eBV(n),t.Njj(i.addNew())}),t.j41(24,"mat-icon",22),t.EFF(25,"add"),t.k0s()()()(),t.j41(26,"li",19)(27,"div",23)(28,"button",21),t.bIt("click",function(){return t.eBV(n),t.Njj(i.refresh())}),t.j41(29,"mat-icon",22),t.EFF(30,"refresh"),t.k0s()()()(),t.j41(31,"li",19)(32,"div",24)(33,"button",25),t.bIt("click",function(){return t.eBV(n),t.Njj(i.removeSelectedRows())}),t.j41(34,"mat-icon",22),t.EFF(35,"delete"),t.k0s()()()(),t.j41(36,"li")(37,"div",26)(38,"img",27),t.bIt("click",function(){return t.eBV(n),t.Njj(i.exportExcel())}),t.k0s()()()()()(),t.j41(39,"div",28)(40,"div",29)(41,"table",30),t.qex(42,31),t.DNE(43,tt,2,2,"mat-header-cell",32)(44,et,2,1,"mat-cell",33),t.bVm(),t.qex(45,34),t.DNE(46,it,2,0,"mat-header-cell",35)(47,st,2,1,"mat-cell",33),t.bVm(),t.qex(48,36),t.DNE(49,at,2,0,"mat-header-cell",35)(50,nt,2,1,"mat-cell",33),t.bVm(),t.qex(51,37),t.DNE(52,ot,2,0,"mat-header-cell",35)(53,lt,2,1,"mat-cell",33),t.bVm(),t.qex(54,38),t.DNE(55,rt,2,0,"mat-header-cell",35)(56,ht,7,4,"mat-cell",39),t.bVm(),t.qex(57,40),t.DNE(58,ut,2,0,"mat-header-cell",35)(59,ft,3,4,"mat-cell",33),t.bVm(),t.qex(60,41),t.DNE(61,gt,2,0,"mat-header-cell",35)(62,bt,3,4,"mat-cell",33),t.bVm(),t.qex(63,42),t.DNE(64,Dt,2,0,"mat-header-cell",43)(65,_t,7,9,"mat-cell",44),t.bVm(),t.DNE(66,vt,1,0,"mat-header-row",45)(67,kt,1,2,"mat-row",46),t.k0s(),t.DNE(68,Ct,1,0,"mat-spinner"),t.k0s()()()(),t.nrm(69,"mat-paginator",47,1),t.k0s()()()}2&s&&(t.R7$(3),t.Y8G("title","All Missions")("items",t.lJ4(12,W))("active_item","All Missions"),t.R7$(29),t.Y8G("hidden",!i.selection.hasValue()),t.R7$(9),t.Y8G("dataSource",i.dataSource),t.R7$(25),t.Y8G("matHeaderRowDef",i.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",i.displayedColumns),t.R7$(),t.vxM(68,i.exampleDatabase?-1:68),t.R7$(),t.Y8G("length",i.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",t.lJ4(13,q)))},dependencies:[I.D,A.uc,A.oV,h.Hl,h.iY,h.$0,F.m_,F.An,m.tP,m.Zl,m.tL,m.ji,m.cC,m.YV,m.iL,m.KS,m.$R,m.YZ,m.NB,D.NQ,D.B4,D.aE,y.g7,y.So,H.h,C.pZ,C.r6,$.D6,$.LG,x.Cn,k.Ou,k.iy,f.vh,f.MD]})}return a})();class Et extends R.qS{get filter(){return this.filterChange.value}set filter(o){this.filterChange.next(o)}constructor(o,e,s){super(),this.exampleDatabase=o,this.paginator=e,this._sort=s,this.filterChange=new S.t(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const o=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllMissions(),(0,B.h)(...o).pipe((0,X.T)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(i=>-1!==(i.title+i.description+i.status+i.startDate+i.endDate).toLowerCase().indexOf(this.filter.toLowerCase()));const e=this.sortData(this.filteredData.slice());return this.renderedData=e.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(o){return this._sort.active&&""!==this._sort.direction?o.sort((e,s)=>{let i="",n="";switch(this._sort.active){case"id":i=e._id?e._id.toString():void 0,n=s._id?s._id.toString():void 0;break;case"name":[i,n]=[e.title,s.title];break;case"description":[i,n]=[e.description,s.description];break;case"status":[i,n]=[e.status,s.status];break;case"startDate":[i,n]=[e.startDate,s.startDate];break;case"endDate":[i,n]=[e.endDate,s.endDate]}if(void 0!==i&&void 0!==n){const c=isNaN(+i)?i:+i,d=isNaN(+n)?n:+n;return void 0===i||void 0===n?void 0===i?1:-1:(c<d?-1:1)*("asc"===this._sort.direction?1:-1)}return void 0===i?1:-1}):o}}var jt=l(5951),Rt=l(82798),xt=l(95967),St=l(43718),Tt=l.n(St),$t=l(48032),yt=l.n($t);const At=()=>["Missions"];function It(a,o){1&a&&(t.j41(0,"mat-error"),t.EFF(1," employeeEmail ID is required "),t.k0s())}const Mt=[{path:"allmissions",component:Ft},{path:"assignusertomission/:_id",component:(()=>{class a{constructor(e,s,i,n){this.fb=e,this.actR=s,this.missionsService=i,this.r=n,this.hide3=!0,this.agree3=!1,this.Editor=Tt(),this.userForm=this.fb.group({userId:["",[r.k0.required]]})}ngOnInit(){this.actR.params.subscribe(e=>{this.id=e._id})}onSubmit(){this.missionsService.assignUserToMission(this.id,this.userForm.value.userId).subscribe({next:s=>{this.r.navigate(["admin/mission/allmissions"])},error:s=>{yt().fire("Erreur","Cet employ\xe9 est indisponible \xe0 cette date.","error"),console.error("Error during mission assignment",s)}})}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(r.ze),t.rXU(E.nX),t.rXU(g),t.rXU(E.Ix))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-assign-userto-mission"]],standalone:!0,features:[t.aNF],decls:25,vars:7,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","userId","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn"]],template:function(s,i){if(1&s&&(t.j41(0,"section",0)(1,"div",1)(2,"div",2),t.nrm(3,"app-breadcrumb",3),t.k0s(),t.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),t.EFF(9,"assign mission to employee"),t.k0s()(),t.j41(10,"div",8)(11,"form",9),t.bIt("ngSubmit",function(){return i.onSubmit()}),t.j41(12,"div",10)(13,"div",11)(14,"mat-form-field",12)(15,"mat-label"),t.EFF(16,"employee email"),t.k0s(),t.nrm(17,"input",13),t.DNE(18,It,2,0,"mat-error"),t.k0s()()(),t.j41(19,"div",10)(20,"div",14)(21,"button",15),t.EFF(22,"Submit"),t.k0s(),t.j41(23,"button",16),t.EFF(24,"Cancel"),t.k0s()()()()()()()()()()),2&s){let n;t.R7$(3),t.Y8G("title","assign mission to employee")("items",t.lJ4(6,At))("active_item","assign mission to employee"),t.R7$(8),t.Y8G("formGroup",i.userForm),t.R7$(7),t.vxM(18,null!=(n=i.userForm.get("userId"))&&n.hasError("required")?18:-1),t.R7$(3),t.Y8G("disabled",!i.userForm.valid)}},dependencies:[I.D,r.YN,r.qT,r.me,r.BC,r.cb,r.YS,r.X1,r.j4,r.JD,u.RG,u.rl,u.nJ,u.TL,_.fS,_.fg,Rt.Ve,C.Sy,b.X6,jt.Wk,xt.w,h.Hl,h.$z]})}return a})()},{path:"**",component:V.X}]}}]);