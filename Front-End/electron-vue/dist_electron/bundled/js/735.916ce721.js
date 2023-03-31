"use strict";(self["webpackChunkelectron_vue"]=self["webpackChunkelectron_vue"]||[]).push([[735],{6326:function(e,a,n){n.d(a,{Z:function(){return c}});var s=n(3396);const t=e=>((0,s.dD)("data-v-9d4ce8ba"),e=e(),(0,s.Cn)(),e),i={class:"headerBar"},o=t((()=>(0,s._)("button",null,[(0,s._)("i",{class:"fas fa-bars",id:"Icon"})],-1))),l=["src"];function r(e,a,n,t,r,_){return(0,s.wg)(),(0,s.iD)("div",i,[o,(0,s._)("img",{src:e.HeaderLogo,alt:"LogoFont",id:"LogoFont"},null,8,l)])}var _={name:"Header",data:()=>({HeaderLogo:n(8055)})},u=n(89);const d=(0,u.Z)(_,[["render",r],["__scopeId","data-v-9d4ce8ba"]]);var c=d},1680:function(e,a,n){n.d(a,{Z:function(){return U}});var s=n(3396),t=n(7139);const i=e=>((0,s.dD)("data-v-32bf1aec"),e=e(),(0,s.Cn)(),e),o=i((()=>(0,s._)("div",{class:"logo"},null,-1))),l={class:"menu-toggle-wrap"},r=i((()=>(0,s._)("span",{class:"material-icons"},"keyboard_double_arrow_right",-1))),_=[r],u=i((()=>(0,s._)("h3",null,"Menu",-1))),d={class:"menu"},c=i((()=>(0,s._)("span",{class:"material-icons"},"home",-1))),m=i((()=>(0,s._)("span",{class:"text"},"Home",-1))),p=i((()=>(0,s._)("span",{class:"material-icons"},"picture_as_pdf",-1))),h=i((()=>(0,s._)("span",{class:"text"},"Search",-1))),v=i((()=>(0,s._)("span",{class:"material-icons"},"history",-1))),g=i((()=>(0,s._)("span",{class:"text"},"Log",-1))),f=i((()=>(0,s._)("span",{class:"material-icons"},"manage_accounts",-1))),k=i((()=>(0,s._)("span",{class:"text"},"Manage",-1))),b=i((()=>(0,s._)("div",{class:"flex"},null,-1))),w={class:"menu_underline"},y=i((()=>(0,s._)("span",{class:"material-icons"},"person",-1))),x={class:"text"},P=i((()=>(0,s._)("span",{class:"material-icons"},"logout",-1))),I=i((()=>(0,s._)("span",{class:"text"},"Logout",-1)));function C(e,a,n,i,r,C){const D=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("aside",{class:(0,t.C_)(""+(e.is_expanded?"is-expanded":""))},[o,(0,s._)("div",l,[(0,s._)("button",{class:"menu-toggle",onClick:a[0]||(a[0]=(...a)=>e.ToggleMenu&&e.ToggleMenu(...a))},_)]),u,(0,s._)("div",d,[(0,s.Wm)(D,{class:"button",to:"/"},{default:(0,s.w5)((()=>[c,m])),_:1}),(0,s.Wm)(D,{class:"button",to:"/searching_page"},{default:(0,s.w5)((()=>[p,h])),_:1}),(0,s.Wm)(D,{class:"button",to:"/logpage"},{default:(0,s.w5)((()=>[v,g])),_:1}),r.isStatusOn?((0,s.wg)(),(0,s.j4)(D,{key:0,class:"button",to:"/Manage"},{default:(0,s.w5)((()=>[f,k])),_:1})):(0,s.kq)("",!0)]),b,(0,s._)("div",w,[(0,s.Wm)(D,{class:"button",to:"/mypage"},{default:(0,s.w5)((()=>[y,(0,s._)("span",x,(0,t.zw)(r.name),1)])),_:1}),(0,s.Wm)(D,{class:"button",to:"/",onClick:a[1]||(a[1]=a=>e.loGout())},{default:(0,s.w5)((()=>[P,I])),_:1})])],2)}var D=n(4870),S=n(65),F={name:"Sidebar",component:{},mounted(){sessionStorage.getItem("id")!=this.var_id&&(this.isStatusOn=!1),this.name=sessionStorage.getItem("name"),this.teamName=sessionStorage.getItem("teamName")},setup(){{const e=(0,D.iH)(!1),a=()=>{e.value=!e.value,localStorage.setItem("is_expanded",e.value)};return{ToggleMenu:a,is_expanded:e}}},data(){return{isStatusOn:!0,var_id:"admin",name:"",teamName:""}},methods:{...(0,S.nv)(["loGout"])}},H=n(89);const M=(0,H.Z)(F,[["render",C],["__scopeId","data-v-32bf1aec"]]);var U=M},6735:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var s=n(3396),t=n(9242);const i=e=>((0,s.dD)("data-v-411ab13a"),e=e(),(0,s.Cn)(),e),o=i((()=>(0,s._)("p",{id:"page_info_font"},[(0,s.Uk)("관리자페이지 > "),(0,s._)("strong",null,"사원관리")],-1))),l={class:"manage_search"},r={class:"manage_formSection"},_={action:""},u=i((()=>(0,s._)("span",{id:"tit_manage"},[(0,s._)("h4",null,"사원 검색")],-1))),d=i((()=>(0,s._)("option",{value:"Name"},"이름",-1))),c=i((()=>(0,s._)("option",{value:"emp_num"},"사원 번호",-1))),m=i((()=>(0,s._)("option",{value:"Position"},"직급",-1))),p=[d,c,m],h=i((()=>(0,s._)("i",{class:"fa-solid fa-magnifying-glass"},null,-1))),v={class:"manage_Table"},g={class:"manage_TableInfo"},f=i((()=>(0,s._)("h3",{id:"tit_manageTable"},"사원관리",-1))),k={action:""},b={id:"employee_Table"},w=i((()=>(0,s._)("tr",null,[(0,s._)("th",null,"사    번"),(0,s._)("th",null,"이름"),(0,s._)("th",null,"전화번호"),(0,s._)("th",null,"부서명"),(0,s._)("th",null,"직급"),(0,s._)("th",{colspan:"2"},"가입승인 및 거부"),(0,s._)("th",null,"수정"),(0,s._)("th",null,"삭제")],-1))),y={id:"in_empnum"},x=["value"],P={id:"in_name"},I=["value"],C={id:"in_ph"},D=["value"],S={id:"in_divi"},F=["value"],H={id:"in_Pos"},M=["value"],U=i((()=>(0,s._)("td",{colspan:"2"},[(0,s._)("select",{name:"approve",id:"approve_table"},[(0,s._)("option",{value:"0",selected:""},"--선택--"),(0,s._)("option",{value:"Y"},"승인"),(0,s._)("option",{value:"N"},"거부")])],-1))),W=["value"],Z=i((()=>(0,s._)("td",null,[(0,s._)("button",{value:"delete"},"삭제")],-1))),N=i((()=>(0,s._)("div",{class:"admin_footer"},[(0,s._)("button",{id:"admin_submit_btn"},"저장")],-1))),T={class:"slideFooter"};function E(e,a,n,i,d,c){const m=(0,s.up)("Header"),E=(0,s.up)("sidebar"),L=(0,s.up)("v-pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(m),(0,s.Wm)(E),o,(0,s._)("div",l,[(0,s._)("div",r,[(0,s._)("form",_,[u,(0,s.wy)((0,s._)("select",{name:"Number",id:"manage_search_option","onUpdate:modelValue":a[0]||(a[0]=e=>d.search_option=e)},p,512),[[t.bM,d.search_option]]),(0,s.wy)((0,s._)("input",{type:"text",name:"search_txt",id:"manage_Search_Input","onUpdate:modelValue":a[1]||(a[1]=e=>d.search_keyword=e)},null,512),[[t.nr,d.search_keyword]]),(0,s._)("button",{id:"search_btn",onClick:a[2]||(a[2]=(0,t.iM)(((...e)=>c.user_search&&c.user_search(...e)),["prevent"]))},[h,(0,s.Uk)("  검색")])])])]),(0,s._)("div",v,[(0,s._)("div",g,[f,(0,s._)("form",k,[(0,s._)("table",b,[w,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.user_info,((n,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i},[(0,s._)("td",y,[(0,s._)("input",{type:"text",name:"user.emp_num",id:"in_empnum",value:n.emp_num,readonly:""},null,8,x)]),(0,s._)("td",P,[(0,s._)("input",{type:"text",name:"user.name",id:"in_name",value:n.name,readonly:""},null,8,I)]),(0,s._)("td",C,[(0,s._)("input",{type:"text",name:"user.phon",id:"in_ph",value:n.phon,readonly:""},null,8,D)]),(0,s._)("td",S,[(0,s._)("input",{type:"text",name:"user.division",id:"in_divi",value:n.division,readonly:""},null,8,F)]),(0,s._)("td",H,[(0,s._)("input",{type:"text",name:"user.Position",id:"in_Pos",value:n.Position,readonly:""},null,8,M)]),U,(0,s._)("td",null,[(0,s._)("button",{onClick:a[3]||(a[3]=(0,t.iM)(((...a)=>e.UpdateFormOpen&&e.UpdateFormOpen(...a)),["prevent"])),value:n.name},"수정",8,W)]),Z])))),128))]),N,(0,s._)("div",T,[(0,s.Wm)(L,{modelValue:d.page,"onUpdate:modelValue":a[4]||(a[4]=e=>d.page=e),length:this.user_info.length,"total-visible":"5",circle:"",onClick:c.pagePrev},null,8,["modelValue","length","onClick"])])]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>d.checkID=e)},null,512),[[t.nr,d.checkID]]),(0,s._)("button",{onClick:a[6]||(a[6]=(...e)=>c.check_id&&c.check_id(...e))},"테스트용 ")])])],64)}n(7658);var L=n(1680),V=n(6326),O=n(8341),B={name:"manageForm",components:{Header:V.Z,Sidebar:L.Z},data(){return{checkID:"",UpdateClick:!1,user_info:[{emp_num:"002724",name:"김가윤",division:"F/E개발팀",Position:"팀장",phon:"010-1178-3078"},{emp_num:"001724",name:"김청래",division:"F/E개발팀",Position:"사원",phon:"010-1071-3024"},{emp_num:"012704",name:"고경훈",division:"B/E개발팀",Position:"팀장",phon:"010-1558-1258"},{emp_num:"012770",name:"장건",division:"B/E개발팀",Position:"대리",phon:"010-1121-3128"},{emp_num:"012774",name:"조호현",division:"B/E개발팀",Position:"사원",phon:"010-1171-3075"},{emp_num:"002420",name:"하영진",division:"F/E개발팀",Position:"사원",phon:"010-0078-3078"}],updateIndex:0,search_keyword:[],search_finish:!1,search_result:[],search_option:[],user_approve:[],page:1,val_id:"admin"}},methods:{check_id(){this.checkID==this.val_id?console.log("아이디 동일"):console.log("아이디 다름")},user_search(){let e=this.search_option;switch(e){case"Name":for(let e=0;e<this.user_info.length;e++){if(""==this.search_keyword){swal("키워드가 입력안됌");break}if(this.search_keyword.includes(this.user_info[e].name))return swal(this.search_keyword),this.search_finish=!0;if(this.search_keyword.includes(this.user_info[e].name)){swal("키워드 선택이 잘못되었거나, 해당 정보는 존재하지 않습니다.");break}}break;case"emp_num":for(let e=0;e<this.user_info.length;e++){if(""==this.search_keyword){swal("키워드가 입력안됌");break}if(this.search_keyword.includes(this.user_info[e].emp_num))return swal(this.search_keyword),this.search_finish=!0;if(!this.search_keyword.includes(this.user_info[e].emp_num)){swal("키워드 선택이 잘못되었거나, 해당 정보는 존재하지 않습니다.");break}}break;case"Position":for(let e=0;e<this.user_info.length;e++){if(""==this.search_keyword){swal("키워드가 입력안됌");break}if(this.search_keyword.includes(this.user_info[e].Position))return swal(this.search_keyword),this.search_finish=!0;if(!this.search_keyword.includes(this.user_info[e].Position)){swal("키워드 선택이 잘못되었거나, 해당 정보는 존재하지 않습니다.");break}}break;default:swal("검색조건을 선택해주세요.")}},pagePrev(){for(let e=0;e<this.user_info.length;e++)console.log(this.user_info[e].name),O.Z.push({name:"manage",params:{user_id:this.user_info[e].name}})}}},Y=n(89);const G=(0,Y.Z)(B,[["render",E],["__scopeId","data-v-411ab13a"]]);var j=G},8055:function(e,a,n){e.exports=n.p+"img/테두리 로고.2e4a8914.png"}}]);
//# sourceMappingURL=735.916ce721.js.map