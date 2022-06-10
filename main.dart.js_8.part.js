self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={kN:function kN(d,e,f){this.a=d
this.b=e
this.c=f},Lz:function Lz(){},
aVf(d){var x,w,v,u,t,s,r
if(d==null)return new A.bu(null,y.b)
x=y.P.a(C.bt.eE(0,d))
w=J.aZ(x)
v=y.N
u=A.F(v,y.a)
for(t=J.aK(w.gaF(x)),s=y.j;t.t();){r=t.gD(t)
u.m(0,r,A.e2(s.a(w.h(x,r)),!0,v))}return new A.bu(u,y.b)},
vl:function vl(d,e,f){this.a=d
this.b=e
this.c=f},
a4a:function a4a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(d){this.a=d},
aLn(d,e,f,g){var x=new B.Rq(g,f,A.a([],y.v),A.a([],y.u))
x.a1N(null,d,e,f,g)
return x},
Rq:function Rq(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.ch=e
_.cx=null
_.cy=$
_.db=null
_.dx=0
_.dy=null
_.fr=!1
_.a=f
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=g},
ahQ:function ahQ(d,e){this.a=d
this.b=e},
ahP:function ahP(d){this.a=d},
aFj(d,e,f,g,h){var x=null
return new D.l2(D.aG_(x,x,new B.vl(d,x,g)),x,x,x,h,f,x,C.f0,x,e,C.K,F.cs,!1,x)}},J,A,C,E,D,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[12],B)
J=c[1]
A=c[0]
C=c[2]
E=c[24]
D=c[21]
F=c[36]
B.kN.prototype={
n(d,e){var x=this
if(e==null)return!1
if(J.a8(e)!==A.P(x))return!1
return e instanceof B.kN&&e.a==x.a&&e.b==x.b&&e.c===x.c},
gv(d){return A.aj(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+A.f(this.a)+', name: "'+A.f(this.b)+'", scale: '+A.f(this.c)+")"},
gb_(d){return this.b}}
B.Lz.prototype={
uS(d,e,f){var x=this.xj(e,f),w=e.c
return B.aLn(x,e.b,null,w)},
xj(d,e){return this.a9I(d,e)},
a9I(d,e){var x=0,w=A.v(y.p),v,u=2,t,s=[],r,q,p
var $async$xj=A.q(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:q=null
u=4
x=7
return A.x(d.a.bN(0,d.b),$async$xj)
case 7:q=g
u=2
x=6
break
case 4:u=3
p=t
if(A.ad(p) instanceof A.rm){$.kb.co$.ui(d)
throw p}else throw p
x=6
break
case 3:x=2
break
case 6:if(q==null){$.kb.co$.ui(d)
throw A.d(A.a4("Unable to read data"))}v=e.$1(A.bW(q.buffer,0,null))
x=1
break
case 1:return A.t(v,w)
case 2:return A.r(t,w)}})
return A.u($async$xj,w)}}
B.vl.prototype={
gqx(){var x=this.c,w=this.a
return x==null?w:"packages/"+x+"/"+w},
v2(d){var x,w={},v=d.a
if(v==null)v=$.nE()
w.a=w.b=null
v.alr("AssetManifest.json",B.b6r(),y.g).aT(0,new B.a4a(w,this,d,v),y.H).fV(new B.a4b(w))
x=w.a
if(x!=null)return x
x=new A.a7($.a5,y.E)
w.b=new A.aw(x,y.z)
return x},
a3C(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.fJ(f))return d
x=E.aGa(y.i,y.N)
for(w=J.aK(f);w.t();){v=w.gD(w)
x.m(0,this.OA(v),v)}u.toString
return this.a5r(x,u)},
a5r(d,e){var x,w,v
if(d.pi(e)){x=d.h(0,e)
x.toString
return x}w=d.al5(e)
v=d.ajl(e)
if(w==null)return d.h(0,v)
if(v==null)return d.h(0,w)
if(e<2||e>(w+v)/2)return d.h(0,v)
else return d.h(0,w)},
OA(d){var x,w,v,u
if(d===this.a)return 1
x=A.cz(d,0,null)
w=x.gly().length>1?x.gly()[x.gly().length-2]:""
v=$.aQ3().qm(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.aD0(u)}return 1},
n(d,e){if(e==null)return!1
if(J.a8(e)!==A.P(this))return!1
return e instanceof B.vl&&e.gqx()===this.gqx()&&!0},
gv(d){return A.aj(this.gqx(),this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetImage(bundle: "+A.f(this.b)+', name: "'+this.gqx()+'")'}}
B.Rq.prototype={
a1N(d,e,f,g,h){this.d=f
e.eP(0,this.ga6T(),new B.ahQ(this,g),y.H)},
a6U(d){this.z=d
if(this.a.length!==0)this.pw()},
a90(d){var x,w,v,u,t=this,s="_shownTimestamp"
t.fr=!1
if(t.a.length===0)return
x=t.db
if(x!=null){x=A.b(t.cy,s)
w=d.a
x=x.a
v=t.db
x=w-x>=v.a
w=v}else{w=x
x=!0}if(x){x=t.cx
t.NI(new D.hc(x.ghk(x).eC(0),t.Q,t.d))
t.cy=d
x=t.cx
t.db=x.gud(x)
x=t.cx
x.ghk(x).l(0)
t.cx=null
x=t.dx
w=t.z
u=C.b.e3(x,w.gof(w))
x=t.z
if(x.gvr(x)!==-1){x=t.z
x=u<=x.gvr(x)}else x=!0
if(x)t.pw()
return}w.toString
x=A.b(t.cy,s)
t.dy=A.cW(new A.ar(C.e.aQ((w.a-(d.a-x.a))*$.aOD)),new B.ahP(t))},
pw(){var x=0,w=A.v(y.H),v,u=2,t,s=[],r=this,q,p,o,n,m
var $async$pw=A.q(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:n=r.cx
if(n!=null)n.ghk(n).l(0)
r.cx=null
u=4
x=7
return A.x(r.z.vW(),$async$pw)
case 7:r.cx=e
u=2
x=6
break
case 4:u=3
m=t
q=A.ad(m)
p=A.ao(m)
r.oF(A.bv("resolving an image frame"),q,r.ch,!0,p)
x=1
break
x=6
break
case 3:x=2
break
case 6:n=r.z
if(n.gof(n)===1){if(r.a.length===0){x=1
break}n=r.cx
r.NI(new D.hc(n.ghk(n).eC(0),r.Q,r.d))
n=r.cx
n.ghk(n).l(0)
r.cx=null
x=1
break}r.NJ()
case 1:return A.t(v,w)
case 2:return A.r(t,w)}})
return A.u($async$pw,w)},
NJ(){if(this.fr)return
this.fr=!0
$.cr.AQ(this.ga9_())},
NI(d){this.Jo(d);++this.dx},
ae(d,e){var x,w=this
if(w.a.length===0){x=w.z
if(x!=null)x=w.b==null||x.gof(x)>1
else x=!1}else x=!1
if(x)w.pw()
w.JZ(0,e)},
L(d,e){var x,w=this
w.K_(0,e)
if(w.a.length===0){x=w.dy
if(x!=null)x.at(0)
w.dy=null}},
xs(){this.Zi()
if(this.r)this.y=null}}
var z=a.updateTypes(["~(iX)","~(ar)","~(eb)","a9<am<i,o<i>>?>(i?)"])
B.a4a.prototype={
$1(d){var x,w=this,v=w.b,u=v.gqx(),t=d==null?null:J.a0(d,v.gqx())
t=v.a3C(u,w.c,t)
t.toString
x=new B.kN(w.d,t,v.OA(t))
v=w.a
u=v.b
if(u!=null)u.bM(0,x)
else v.a=new A.bu(x,y.f)},
$S:669}
B.a4b.prototype={
$2(d,e){this.a.b.el(d,e)},
$S:11}
B.ahQ.prototype={
$2(d,e){this.a.oF(A.bv("resolving an image codec"),d,this.b,!0,e)},
$S:11}
B.ahP.prototype={
$0(){this.a.NJ()},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_1i
x(B,"b6r","aVf",3)
var u
w(u=B.Rq.prototype,"ga6T","a6U",0)
w(u,"ga9_","a90",1)
v(u,"gET","ae",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.kN,A.D)
x(B.Lz,D.e0)
x(B.vl,B.Lz)
x(B.a4a,A.cH)
w(A.fL,[B.a4b,B.ahQ])
x(B.Rq,D.ms)
x(B.ahP,A.eM)})()
A.dA(b.typeUniverse,JSON.parse('{"Lz":{"e0":["kN"]},"vl":{"e0":["kN"],"e0.T":"kN"}}'))
var y=(function rtii(){var x=A.O
return{p:x("iX"),v:x("w<eb>"),u:x("w<~()>"),a:x("o<i>"),j:x("o<@>"),P:x("am<i,@>"),N:x("i"),f:x("bu<kN>"),b:x("bu<am<i,o<i>>?>"),z:x("aw<kN>"),E:x("a7<kN>"),i:x("T"),g:x("am<i,o<i>>?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"b8x","aQ3",()=>A.bP("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["NK9SS4j19SkNy9aJZanN5czA9MY="] = $__dart_deferred_initializers__.current
