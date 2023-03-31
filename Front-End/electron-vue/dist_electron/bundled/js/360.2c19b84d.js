"use strict";(self["webpackChunkelectron_vue"]=self["webpackChunkelectron_vue"]||[]).push([[360],{8360:function(e,t,o){o.r(t),o.d(t,{default:function(){return N}});var a=o(3396),n=o(9242);const l={id:"container"},r=(0,a._)("div",{class:"front_logo"},null,-1),s={id:"Form"},i=(0,a._)("h1",{class:"logup_head"},"사원 등록",-1),u={id:"join-form"},p=(0,a._)("th",null,[(0,a._)("label",{for:"username"},"이름")],-1),m={colspan:"3"},d=(0,a._)("th",null,[(0,a._)("label",{for:"teamName"},"부서")],-1),c=(0,a.uE)('<option value="개발팀" name="develop">개발팀</option><option value="부품관리팀" name="part management">부품관리팀</option><option value="시설팀" name="facility">시설팀</option><option value="자원팀" name="Resource">자원팀</option><option value="재무팀" name="finance">재무팀</option>',5),f=[c],_=(0,a._)("th",null,[(0,a._)("label",{for:"position"},"직책")],-1),h=(0,a.uE)('<option name="Excute Team Leader" value="팀장">팀장</option><option name="Associate Director" value="차장">차장</option><option name="Associate Manager" value="대리">대리</option><option name="Associate" value="주임">주임</option><option name="Staff" value="사원">사원</option>',5),w=[h],y=(0,a._)("th",null,[(0,a._)("label",{for:"userId"},"아이디")],-1),v={colspan:"3"},b=(0,a._)("button",{type:"submit",value:"중복확인"},null,-1),S=(0,a._)("th",null,[(0,a._)("label",{for:"userPw"},"비밀번호")],-1),g={colspan:"3"},C=(0,a._)("i",{class:"fa-solid fa-eye"},null,-1),M=[C],A=(0,a._)("th",null,[(0,a._)("label",{for:"pwConfirm"},"비밀번호 확인")],-1),x={colspan:"3"},k=(0,a._)("i",{class:"fa-solid fa-eye"},null,-1),U=[k],V=(0,a._)("th",null,[(0,a._)("label",{for:"useremail"},"email")],-1),q={colspan:"3"},P=(0,a._)("div",{class:"join_Btn"},[(0,a._)("button",{type:"submit",value:"Join"},"사원등록")],-1);function F(e,t,o,c,h,C){return(0,a.wg)(),(0,a.iD)("div",l,[r,(0,a._)("div",s,[i,(0,a._)("form",{onSubmit:t[9]||(t[9]=(0,n.iM)(((...e)=>C.submitForm&&C.submitForm(...e)),["prevent"]))},[(0,a._)("table",u,[(0,a._)("tr",null,[p,(0,a._)("th",m,[(0,a.wy)((0,a._)("input",{type:"text",name:"uname","onUpdate:modelValue":t[0]||(t[0]=e=>h.form.name=e)},null,512),[[n.nr,h.form.name]])])]),(0,a._)("tr",null,[d,(0,a._)("th",null,[(0,a.wy)((0,a._)("select",{class:"select-grade","onUpdate:modelValue":t[1]||(t[1]=e=>h.form.teamName=e)},f,512),[[n.bM,h.form.teamName]])]),_,(0,a._)("th",null,[(0,a.wy)((0,a._)("select",{class:"select-grade","onUpdate:modelValue":t[2]||(t[2]=e=>h.form.position=e)},w,512),[[n.bM,h.form.position]])])]),(0,a._)("tr",null,[y,(0,a._)("th",v,[(0,a.wy)((0,a._)("input",{type:"text",name:"uID","onUpdate:modelValue":t[3]||(t[3]=e=>h.form.id=e)},null,512),[[n.nr,h.form.id]]),b])]),(0,a._)("tr",null,[S,(0,a._)("th",g,[(0,a.wy)((0,a._)("input",{class:"userPW",type:"password",name:"uPw","onUpdate:modelValue":t[4]||(t[4]=e=>h.form.password=e)},null,512),[[n.nr,h.form.password]]),(0,a._)("div",{class:"pw-eyes",onClick:t[5]||(t[5]=(0,n.iM)(((...e)=>C.pwSee&&C.pwSee(...e)),["prevent"]))},M)])]),(0,a._)("tr",null,[A,(0,a._)("th",x,[(0,a.wy)((0,a._)("input",{class:"userPW_confirm",type:"password",name:"passwordConfirm","onUpdate:modelValue":t[6]||(t[6]=e=>h.passwordConfirm=e)},null,512),[[n.nr,h.passwordConfirm]]),(0,a._)("div",{class:"pw-eyes2",onClick:t[7]||(t[7]=(0,n.iM)(((...e)=>C.pwSee2&&C.pwSee2(...e)),["prevent"]))},U)])]),(0,a._)("tr",null,[V,(0,a._)("th",q,[(0,a.wy)((0,a._)("input",{type:"text",name:"email","onUpdate:modelValue":t[8]||(t[8]=e=>h.form.email=e)},null,512),[[n.nr,h.form.email]])])])]),P],32)])])}o(7658);var L=o(4311),T={name:"JoinForm",data(){return{form:{name:"",teamName:"",position:"",id:"",password:"",email:""},passwordConfirm:"",err:0}},methods:{fnJoin(){this.form.password!==this.passwordConfirm&&(this.err+=1,alert("비밀번호가 맞지 않습니다.")),""===this.form.name&&(this.err+=1,alert("이름을 확인해 주세요")),""===this.form.id&&(this.err+=1,alert("아이디를 확인해 주세요")),""===this.form.password&&(this.err+=1,alert("비밀번호를 확인해 주세요")),""===this.form.email&&(this.err+=1,alert("이메일을 확인해 주세요"))},submitForm(){this.fnJoin(),0==this.err&&L.Z.get(`api/user/checkid/${this.form.id}`).then((e=>{0==e.data.length?L.Z.post("api/user/",this.form).then((e=>{console.log(e.data),this.$router.push({path:"/"})})):(alert("중복된 아이디 입니다."),this.$router.push({path:"/signup"}))})).catch((e=>{alert(e.data)}))},pwSee:()=>{let e=document.querySelector(".userPW"),t=e.getAttribute("type");"password"==t?(e.setAttribute("type","text"),document.querySelector(".pw-eyes").innerHTML="<i class='fa-solid fa-eye-slash'></i>"):"text"==t&&(e.setAttribute("type","password"),document.querySelector(".pw-eyes").innerHTML="<i class='fa-solid fa-eye'></i>")},pwSee2:()=>{let e=document.querySelector(".userPW_confirm"),t=e.getAttribute("type");"password"==t?(e.setAttribute("type","text"),document.querySelector(".pw-eyes2").innerHTML="<i class='fa-solid fa-eye-slash'></i>"):"text"==t&&(e.setAttribute("type","password"),document.querySelector(".pw-eyes2").innerHTML="<i class='fa-solid fa-eye'></i>")}}},H=o(89);const J=(0,H.Z)(T,[["render",F]]);var N=J}}]);
//# sourceMappingURL=360.2c19b84d.js.map