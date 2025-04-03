"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[481],{3481:(A,u,i)=>{i.r(u),i.d(u,{AccountModule:()=>S});var m=i(6895),n=i(433),t=i(1571),p=i(9479),l=i(9838),c=i(4015);let d=(()=>{class e{constructor(o,r,a){this.accountService=o,this.router=r,this.activatedRoute=a,this.loginForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",n.kI.required)}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.B),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"div",7)(9,"button",8),t._uU(10,"Sign in"),t.qZA()()()()()),2&o&&(t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.Q6J("formControl",r.loginForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",r.loginForm.controls.password)("label","Password")("type","password"),t.xp6(2),t.Q6J("disabled",r.loginForm.invalid))},dependencies:[n._Y,n.JJ,n.JL,n.oH,n.sg,c.t]}),e})();var g=i(8372),f=i(5698),h=i(3900),v=i(4004),b=i(8746);function y(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const o=s.$implicit;t.xp6(1),t.hij(" ",o," ")}}function C(e,s){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,y,2,1,"li",11),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.errors)}}const x=[{path:"login",component:d},{path:"register",component:(()=>{class e{constructor(o,r,a){this.fb=o,this.accountService=r,this.router=a,this.errors=null,this.complexPassword="^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*",this.registerForm=this.fb.group({displayName:["",n.kI.required],email:["",[n.kI.required,n.kI.email],[this.validateEmailNotTaken()]],password:["",[n.kI.required,n.kI.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:o=>this.errors=o.errors})}validateEmailNotTaken(){return o=>o.valueChanges.pipe((0,g.b)(100),(0,f.q)(1),(0,h.w)(()=>this.accountService.checkEmailExists(o.value).pipe((0,v.U)(r=>r?{emailExists:!0}:null),(0,b.x)(()=>o.markAsTouched()))))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(p.B),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:13,vars:10,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Sign up"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",5)(8,"app-text-input",6),t.YNc(9,C,2,1,"ul",7),t.TgZ(10,"div",8)(11,"button",9),t._uU(12,"Sign up"),t.qZA()()()()()),2&o&&(t.xp6(2),t.Q6J("formGroup",r.registerForm),t.xp6(4),t.Q6J("formControl",r.registerForm.controls.displayName)("label","Display Name"),t.xp6(1),t.Q6J("formControl",r.registerForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",r.registerForm.controls.password)("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",r.errors),t.xp6(2),t.Q6J("disabled",r.registerForm.invalid))},dependencies:[m.sg,m.O5,n._Y,n.JJ,n.JL,n.oH,n.sg,c.t]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]}),e})();var J=i(4466);let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,F,J.m]}),e})()}}]);