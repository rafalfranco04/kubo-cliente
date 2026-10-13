((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_23",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,H,K,G,B={
b0V(d,e,f){return new B.qy(d,f,e,null)},
qy:function qy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
L2:function L2(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.z=_.y=_.x=!1
_.Q=e
_.c=_.a=_.as=null},
aJY:function aJY(d){this.a=d},
aJZ:function aJZ(d,e){this.a=d
this.b=e},
aJW:function aJW(d){this.a=d},
aJX:function aJX(d,e){this.a=d
this.b=e},
aK_:function aK_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aJT:function aJT(d){this.a=d},
aJU:function aJU(d,e,f){this.a=d
this.b=e
this.c=f},
aJV:function aJV(d){this.a=d},
aK5:function aK5(d){this.a=d},
aK4:function aK4(d){this.a=d},
aK7:function aK7(){},
aK6:function aK6(d){this.a=d},
aK3:function aK3(d,e){this.a=d
this.b=e},
aK8:function aK8(d){this.a=d},
aK1:function aK1(d,e){this.a=d
this.b=e},
aK2:function aK2(d,e){this.a=d
this.b=e},
aK9:function aK9(d){this.a=d},
aK0:function aK0(d){this.a=d}},D,L,N,E,F,O,I
J=c[1]
A=c[0]
C=c[2]
M=c[26]
H=c[12]
K=c[16]
G=c[31]
B=a.updateHolder(c[7],B)
D=c[40]
L=c[34]
N=c[20]
E=c[17]
F=c[19]
O=c[8]
I=c[21]
B.qy.prototype={
aa(){return new B.L2(new E.df(F.ay,$.aK()),A.a([],y.k))},
G2(d,e){return this.e.$2(d,e)}}
B.L2.prototype={
ah(){var x,w,v,u=this
u.aD()
u.r=H.aWq(null,null)
x=u.a.c
if(x!=null&&C.b.p(x,",")){w=x.split(",")
x=A.hu(C.b.H(w[0]))
u.d=x==null?7.9621:x
x=A.hu(C.b.H(w[1]))
x=u.e=x==null?-80.4292:x}else{u.d=7.9621
x=u.e=-80.4292}v=u.d
v===$&&A.b()
u.f=new H.cA(v,x)},
aqd(d){var x=this,w=x.as
if(w!=null)w.ao(0)
if(C.b.H(d).length<3){x.F(new B.aJY(x))
return}x.as=A.cL(C.eM,new B.aJZ(x,d))},
atw(d){var x=this,w=J.ab(d),v=A.cv(w.h(d,"lat")),u=A.cv(w.h(d,"lon")),t=A.b4(w.h(d,"name")),s=new H.cA(v,u)
x.F(new B.aK_(x,v,u,s,t))
w=x.r
w===$&&A.b()
w.ie(s,16.5)
x.a.G2(A.j(v)+","+A.j(u),t)},
pX(){var x=0,w=A.r(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$pX=A.t(function(d,e){if(d===1){t.push(e)
x=u}while(true)switch(x){case 0:r.F(new B.aJT(r))
u=4
x=7
return A.e($.wT().lH(),$async$pX)
case 7:q=e
x=q===C.h1?8:9
break
case 8:x=10
return A.e($.wT().hi(0),$async$pX)
case 10:q=e
case 9:x=q===C.kS||q===C.h2?11:13
break
case 11:x=14
return A.e(O.aW0(I.pb),$async$pX)
case 14:p=e
o=new H.cA(p.a,p.b)
if(r.c==null){s=[1]
x=5
break}r.F(new B.aJU(r,p,o))
k=r.r
k===$&&A.b()
k.ie(o,16.5)
x=15
return A.e($.c2().Ac(p.a,p.b),$async$pX)
case 15:n=e
m=n!=null&&C.b.H(n).length!==0?C.b.H(n):"Ubicaci\xf3n detectada por GPS"
if(r.c!=null)if(n!=null&&C.b.H(n).length!==0)r.w.sbP(0,C.b.H(n))
k=r.a
k.toString
j=r.d
j===$&&A.b()
i=r.e
i===$&&A.b()
k.G2(A.j(j)+","+A.j(i),m)
x=12
break
case 13:k=r.c
if(k==null){s=[1]
x=5
break}k.a4(y.q).f.cl(I.HT)
case 12:s.push(6)
x=5
break
case 4:u=3
g=t.pop()
l=A.Z(g)
k=r.c
if(k==null){s=[1]
x=5
break}k.a4(y.q).f.cl(E.hY(null,null,null,null,null,C.x,null,E.H("Error al obtener ubicaci\xf3n GPS: "+A.j(l),null,null,null,null,null,null,null),null,F.az,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.F(new B.aJV(r))
x=s.pop()
break
case 6:case 1:return A.p(v,w)
case 2:return A.o(t.at(-1),w)}})
return A.q($async$pX,w)},
M(d){var x,w,v=this,u=null,t=v.a.d,s=v.x?u:v.gaiL(),r=A.u(20),q=A.ae(38,t.n()>>>16&255,t.n()>>>8&255,t.n()&255),p=A.u(20),o=E.aI(A.ae(102,t.n()>>>16&255,t.n()>>>8&255,t.n()&255),1),n=y.u,m=A.a([],n)
if(v.x)m.push(A.bG(K.aVn(u,G.q,u,u,u,u,u,2,u,u),14,14))
else m.push(D.WU)
m.push(F.aO)
m.push(D.ahU)
s=E.W(A.a([D.a61,A.cd(!1,r,!0,A.B(u,E.W(m,C.j,C.f,C.G),C.e,u,u,new A.F(q,u,o,p,u,u,C.l),u,u,u,F.nU,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u)],n),C.j,C.ab,C.h)
r=v.w
if(v.y)q=D.a8e
else q=r.a.a.length!==0?A.d7(u,u,D.VZ,u,u,new B.aK5(v),u,u,u):u
q=A.a([s,F.ak,E.ro(!0,C.c9,!1,u,!0,C.x,u,E.wQ(),r,u,u,u,u,u,2,E.eb(u,u,u,M.id,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,"Buscar calle o lugar en el mapa...",u,u,u,u,u,u,u,u,u,!0,!0,u,D.Ub,u,u,u,u,u,u,q,u,u,u,u),C.al,!0,u,!0,u,!1,u,F.cJ,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,v.gaqc(),u,u,u,!1,u,u,!1,u,!0,u,F.cn,u,u,C.cw,C.cj,u,u,u,u,u,u,u,!0,C.aT,u,F.aY,u,u,u,u)],n)
if(J.cK(v.Q)){s=A.u(12)
r=E.aI(C.O,1)
p=A.a([new A.aw(0,C.w,A.ae(15,C.m.n()>>>16&255,C.m.n()>>>8&255,C.m.n()&255),F.ca,10)],y.c)
C.c.I(q,A.a([G.bl,A.B(u,K.hs(new B.aK6(v),J.aY(v.Q),C.as,u,C.U,new B.aK7(),!0),C.e,u,D.KI,new A.F(C.i,u,r,s,p,u,C.l),u,u,u,u,u,u,u)],n))}q.push(C.a_)
s=A.u(16)
r=E.aI(C.O,1)
p=y.c
o=A.a([new A.aw(0,C.w,A.ae(10,C.m.n()>>>16&255,C.m.n()>>>8&255,C.m.n()&255),F.ca,10)],p)
m=A.u(16)
x=v.r
x===$&&A.b()
w=v.f
w===$&&A.b()
w=H.aWr(w,16,18,u,new B.aK8(v))
p=E.h8(m,new H.u_(A.a([H.aXb(18,N.p5,v.z?"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","com.kubo.delivery"),H.aWs(A.a([new H.lN(v.f,A.B(u,D.UD,C.e,u,u,new A.F(u,u,u,u,A.a([new A.aw(0,C.w,A.ae(51,C.m.n()>>>16&255,C.m.n()>>>8&255,C.m.n()&255),F.bK,6)],p),u,C.X),u,u,u,u,u,u,u),44,44,C.cK)],y.h))],n),w,x,u),C.aN)
q.push(A.B(u,A.d8(C.aC,A.a([p,A.c1(u,H.Et(C.i,A.cl(v.z?G.vO:D.U1,G.q,u,u),u,u,"map_layer_toggle_modern",new B.aK9(v),u,u),u,u,u,8,8,u)],n),C.x,C.aq,u),C.e,u,u,new A.F(u,u,r,s,o,u,C.l),u,230,u,u,u,u,u))
return A.a3(q,C.r,C.f,C.h)},
l(){var x=this,w=x.as
if(w!=null)w.ao(0)
w=x.w
w.K$=$.aK()
w.J$=0
w=x.r
w===$&&A.b()
w.l()
x.aB()}}
var z=a.updateTypes(["~(i)","ag<~>()","e0(Q,n)","jP(Q,n)","ag<~>(nt,cA)"])
B.aJY.prototype={
$0(){var x=this.a
x.Q=A.a([],y.k)
x.y=!1},
$S:0}
B.aJZ.prototype={
$0(){var x=0,w=A.r(y.v),v=this,u,t
var $async$$0=A.t(function(d,e){if(d===1)return A.o(e,w)
while(true)switch(x){case 0:t=v.a
t.F(new B.aJW(t))
x=2
return A.e($.c2().AO(v.b),$async$$0)
case 2:u=e
if(t.c!=null)t.F(new B.aJX(t,u))
return A.p(null,w)}})
return A.q($async$$0,w)},
$S:5}
B.aJW.prototype={
$0(){this.a.y=!0},
$S:0}
B.aJX.prototype={
$0(){var x=this.a
x.Q=this.b
x.y=!1},
$S:0}
B.aK_.prototype={
$0(){var x=this,w=x.a
w.d=x.b
w.e=x.c
w.f=x.d
w.Q=A.a([],y.k)
w.w.sbP(0,x.e)},
$S:0}
B.aJT.prototype={
$0(){this.a.x=!0},
$S:0}
B.aJU.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f=this.c},
$S:0}
B.aJV.prototype={
$0(){this.a.x=!1},
$S:0}
B.aK5.prototype={
$0(){var x=this.a
x.w.ez(0,F.cX)
x.F(new B.aK4(x))},
$S:0}
B.aK4.prototype={
$0(){this.a.Q=A.a([],y.k)},
$S:0}
B.aK7.prototype={
$2(d,e){return G.eJ},
$S:z+2}
B.aK6.prototype={
$2(d,e){var x=null,w=this.a,v=J.z(w.Q,e),u=J.z(v,"name")
return E.iz(!1,x,!0,x,!0,x,!0,x,D.V3,x,new B.aK3(w,v),!1,x,x,x,x,x,E.H(u==null?"":u,x,2,C.L,x,D.aeX,x,x),x,x)},
$S:z+3}
B.aK3.prototype={
$0(){return this.a.atw(this.b)},
$S:0}
B.aK8.prototype={
$2(d,e){return this.a66(d,e)},
a66(d,e){var x=0,w=A.r(y.v),v=this,u,t,s,r,q
var $async$$2=A.t(function(f,g){if(f===1)return A.o(g,w)
while(true)switch(x){case 0:q=v.a
q.F(new B.aK1(q,e))
u=q.d
u===$&&A.b()
t=q.e
t===$&&A.b()
s=A.j(u)+","+A.j(t)
x=2
return A.e($.c2().Ac(e.a,e.b),$async$$2)
case 2:r=g
if(r!=null&&C.b.H(r).length!==0){if(q.c!=null)q.F(new B.aK2(q,r))
q=q.a
q.toString
q.G2(s,C.b.H(r))}else{u=q.a
u.toString
q=q.w.a.a
u.G2(s,q.length!==0?q:"Ubicaci\xf3n en el mapa")}return A.p(null,w)}})
return A.q($async$$2,w)},
$S:z+4}
B.aK1.prototype={
$0(){var x=this.a,w=x.f=this.b
x.d=w.a
x.e=w.b},
$S:0}
B.aK2.prototype={
$0(){this.a.w.sbP(0,C.b.H(this.b))},
$S:0}
B.aK9.prototype={
$0(){var x=this.a
x.F(new B.aK0(x))},
$S:0}
B.aK0.prototype={
$0(){var x=this.a
x.z=!x.z},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.L2.prototype,"gaqc","aqd",0)
w(v,"gaiL","pX",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.qy,A.a2)
x(B.L2,A.a4)
w(A.hP,[B.aJY,B.aJZ,B.aJW,B.aJX,B.aK_,B.aJT,B.aJU,B.aJV,B.aK5,B.aK4,B.aK3,B.aK1,B.aK2,B.aK9,B.aK0])
w(A.hn,[B.aK7,B.aK6,B.aK8])})()
A.ju(b.typeUniverse,JSON.parse('{"qy":{"a2":[],"h":[]},"L2":{"a4":["qy"]}}'))
var y={c:A.aq("y<aw>"),k:A.aq("y<a8<i,@>>"),h:A.aq("y<lN>"),u:A.aq("y<h>"),q:A.aq("l9"),v:A.aq("~")};(function constants(){var x=a.makeConstList
D.KI=new A.an(0,1/0,0,180)
D.U1=new A.ah(984665,"MaterialIcons",!1)
D.Ub=new A.V(I.vG,20,G.q,null,null)
D.SQ=new A.ah(58284,"MaterialIcons",!1)
D.UD=new A.V(D.SQ,44,G.q,null,null)
D.V3=new A.V(F.kG,18,G.q,null,null)
D.VZ=new A.V(L.vD,18,null,null,null)
D.WU=new A.V(I.vE,14,G.q,null,null)
D.UX=new A.V(F.da,16,G.q,null,null)
D.aiT=new A.U("Mapa de entrega",null,G.m6,null,null,null,null,null,null)
D.a0d=A.a(x([D.UX,G.aM,D.aiT]),y.u)
D.a61=new E.fx(C.aH,C.f,C.G,C.j,null,C.bO,null,0,D.a0d,null)
D.NG=new A.h7(2,null,null,null,null,null,null,null,null,null)
D.a4j=new A.aP(F.bh,D.NG,null)
D.a8e=new A.ci(18,18,D.a4j,null)
D.aeX=new A.k(!0,null,null,null,null,null,13,C.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahU=new A.U("Capturar mi ubicaci\xf3n",null,L.m8,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_23",e:"endPart",h:b})})($__dart_deferred_initializers__,"axHen60o6HyK1HlkYG4Ihny1qg0=");