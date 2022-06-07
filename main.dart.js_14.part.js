self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={W0:function W0(d,e){this.a=d
this.b=e},W1:function W1(d,e){this.a=d
this.b=e},Jh:function Jh(d,e,f){this.a=d
this.b=e
this.c=f},ly:function ly(d,e,f){var _=this
_.e=0
_.cc$=d
_.au$=e
_.a=f},TO:function TO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.F=d
_.q=e
_.u=f
_.a9=g
_.aP=h
_.br=i
_.b5=j
_.bn=k
_.c9=l
_.dg=!1
_.eH=m
_.c_$=n
_.a7$=o
_.cE$=p
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=q
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},a_Y:function a_Y(){},a_Z:function a_Z(){},
b0s(d){return new B.W_(d,null)},
W_:function W_(d,e){this.c=d
this.a=e}},C,A,D
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[11],B)
C=c[2]
A=c[0]
D=c[49]
B.W0.prototype={
j(d){return"WrapAlignment."+this.b}}
B.W1.prototype={
j(d){return"WrapCrossAlignment."+this.b}}
B.Jh.prototype={}
B.ly.prototype={}
B.TO.prototype={
sG5(d,e){if(this.F===e)return
this.F=e
this.a5()},
sek(d){if(this.q===d)return
this.q=d
this.a5()},
sYy(d,e){if(this.u===e)return
this.u=e
this.a5()},
sao3(d){if(this.a9===d)return
this.a9=d
this.a5()},
sao4(d){if(this.aP===d)return
this.aP=d
this.a5()},
sahC(d){if(this.br===d)return
this.br=d
this.a5()},
f8(d){if(!(d.e instanceof B.ly))d.e=new B.ly(null,null,C.l)},
eD(d){return this.FQ(d)},
CP(d){switch(this.F.a){case 0:return d.a
case 1:return d.b
default:throw A.d(A.m(y.b))}},
CN(d){switch(this.F.a){case 0:return d.b
case 1:return d.a
default:throw A.d(A.m(y.b))}},
a6o(d,e){switch(this.F.a){case 0:return new A.p(d,e)
case 1:return new A.p(e,d)
default:throw A.d(A.m(y.b))}},
a61(d,e,f){var w=e-f
switch(this.br.a){case 0:return d?w:0
case 1:return d?0:w
case 2:return w/2
default:throw A.d(A.m(y.b))}},
cJ(d){return this.a3L(d)},
a3L(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=y.b
switch(j.F.a){case 0:w=d.b
v=new A.aQ(0,w,0,1/0)
break
case 1:w=d.d
v=new A.aQ(0,1/0,0,w)
break
default:throw A.d(A.m(i))}u=j.a7$
for(t=A.E(j).i("at.1"),s=0,r=0,q=0,p=0,o=0;u!=null;){n=A.aJD(u,v)
m=j.CP(n)
l=j.CN(n)
if(o>0&&q+m+j.u>w){s=Math.max(s,q)
r+=p+j.aP
q=0
p=0
o=0}q+=m
p=Math.max(p,A.R(l))
if(o>0)q+=j.u;++o
k=u.e
k.toString
u=t.a(k).au$}r+=p
s=Math.max(s,q)
switch(j.F.a){case 0:return d.c3(new A.ab(s,r))
case 1:return d.c3(new A.ab(r,s))
default:throw A.d(A.m(i))}},
c6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=y.b,b4=x.a.a(A.G.prototype.gad.call(b2))
b2.dg=!1
w=b2.a7$
if(w==null){b2.rx=new A.ab(C.b.a2(0,b4.a,b4.b),C.b.a2(0,b4.c,b4.d))
return}switch(b2.F.a){case 0:v=b4.b
u=new A.aQ(0,v,0,1/0)
t=b2.b5===C.ah&&!0
s=b2.bn===C.p2&&!0
break
case 1:v=b4.d
u=new A.aQ(0,1/0,0,v)
t=b2.bn===C.p2&&!0
s=b2.b5===C.ah&&!0
break
default:throw A.d(A.m(b3))}r=b2.u
q=b2.aP
p=A.a([],x.l)
for(o=x.e,n=0,m=0,l=0,k=0,j=0;w!=null;){w.d8(0,u,!0)
i=w.rx
i.toString
h=b2.CP(i)
i=w.rx
i.toString
g=b2.CN(i)
if(j>0&&l+r+h>v){n=Math.max(n,l)
m+=k
if(p.length!==0)m+=q
p.push(new B.Jh(l,k,j))
l=0
k=0
j=0}l+=h
if(j>0)l+=r
k=Math.max(k,A.R(g));++j
i=w.e
i.toString
o.a(i)
i.e=p.length
w=i.au$}if(j>0){n=Math.max(n,l)
m+=k
if(p.length!==0)m+=q
p.push(new B.Jh(l,k,j))}f=p.length
switch(b2.F.a){case 0:i=b2.rx=b4.c3(new A.ab(n,m))
e=i.a
d=i.b
break
case 1:i=b2.rx=b4.c3(new A.ab(m,n))
e=i.b
d=i.a
break
default:throw A.d(A.m(b3))}b2.dg=e<n||d<m
a0=Math.max(0,d-m)
switch(b2.a9.a){case 0:a1=0
a2=0
break
case 1:a1=a0
a2=0
break
case 2:a1=a0/2
a2=0
break
case 3:a2=f>1?a0/(f-1):0
a1=0
break
case 4:a2=a0/f
a1=a2/2
break
case 5:a2=a0/(f+1)
a1=a2
break
default:throw A.d(A.m(b3))}a2+=q
a3=s?d-a1:a1
w=b2.a7$
for(a4=0;a4<f;++a4){a5=p[a4]
k=a5.b
j=a5.c
a6=Math.max(0,e-a5.a)
switch(b2.q.a){case 0:a7=0
a8=0
break
case 1:a7=a6
a8=0
break
case 2:a7=a6/2
a8=0
break
case 3:a8=j>1?a6/(j-1):0
a7=0
break
case 4:a8=a6/j
a7=a8/2
break
case 5:a8=a6/(j+1)
a7=a8
break
default:throw A.d(A.m(b3))}a8+=r
a9=t?e-a7:a7
if(s)a3-=k
for(;w!=null;){i=w.e
i.toString
o.a(i)
if(i.e!==a4)break
b0=w.rx
b0.toString
h=b2.CP(b0)
b0=w.rx
b0.toString
b1=b2.a61(s,k,b2.CN(b0))
if(t)a9-=h
i.a=b2.a6o(a9,a3+b1)
a9=t?a9-a8:a9+(h+a8)
w=i.au$}a3=s?a3-a2:a3+(k+a2)}},
ds(d,e){return this.yI(d,e)},
b1(d,e){var w,v=this,u=v.dg&&v.c9!==C.q,t=v.eH
if(u){u=A.b(v.fr,"_needsCompositing")
w=v.rx
t.saN(0,d.lB(u,e,new A.L(0,0,0+w.a,0+w.b),v.gSv(),v.c9,t.a))}else{t.saN(0,null)
v.o_(d,e)}},
l(d){this.eH.saN(0,null)
this.lZ(0)}}
B.a_Y.prototype={
aL(d){var w,v,u
this.eR(d)
w=this.a7$
for(v=x.e;w!=null;){w.aL(d)
u=w.e
u.toString
w=v.a(u).au$}},
ax(d){var w,v,u
this.e2(0)
w=this.a7$
for(v=x.e;w!=null;){w.ax(0)
u=w.e
u.toString
w=v.a(u).au$}}}
B.a_Z.prototype={}
B.W_.prototype={
aY(d){var w=A.f4(d)
w=new B.TO(C.bh,D.j8,0,D.j8,0,D.G2,w,C.eK,C.q,A.au(x.h),0,null,null,A.au(x.d))
w.gaD()
w.gaS()
w.fr=!1
w.U(0,null)
return w},
b2(d,e){var w
e.sG5(0,C.bh)
e.sek(D.j8)
e.sYy(0,0)
e.sao3(D.j8)
e.sao4(0)
e.sahC(D.G2)
w=A.f4(d)
if(e.b5!=w){e.b5=w
e.a5()}if(e.bn!==C.eK){e.bn=C.eK
e.a5()}if(C.q!==e.c9){e.c9=C.q
e.aO()
e.aB()}}}
var z=a.updateTypes([]);(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.h0,[B.W0,B.W1])
t(B.Jh,A.D)
t(B.ly,A.vL)
t(B.a_Y,A.N)
t(B.a_Z,B.a_Y)
t(B.TO,B.a_Z)
t(B.W_,A.fc)
w(B.a_Y,A.at)
v(B.a_Z,A.dx)})()
A.dA(b.typeUniverse,JSON.parse('{"ly":{"h7":[],"f3":["N"]},"W0":{"W":[]},"W1":{"W":[]},"TO":{"dx":["N","ly"],"N":[],"at":["N","ly"],"G":[],"X":[],"at.1":"ly","dx.1":"ly","at.0":"N"},"W_":{"fc":[],"aC":[],"j":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:A.O("aQ"),h:A.O("kO"),d:A.O("cB"),l:A.O("w<Jh>"),e:A.O("ly")};(function constants(){D.j8=new B.W0(0,"start")
D.G2=new B.W1(0,"start")})()}
$__dart_deferred_initializers__["0BsABATRJSza3qFwdE07zkIok0s="] = $__dart_deferred_initializers__.current
