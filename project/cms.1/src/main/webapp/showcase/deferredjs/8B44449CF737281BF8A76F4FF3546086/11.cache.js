$wnd.showcase.runAsyncCallback11("function qjc(){}\nfunction sjc(){}\nfunction ljc(a,b){a.b=b}\nfunction mjc(a){if(a==bjc){return true}uB();return a==ejc}\nfunction njc(a){if(a==ajc){return true}uB();return a==_ic}\nfunction rjc(a){this.b=(Vkc(),Qkc).a;this.e=($kc(),Zkc).a;this.a=a}\nfunction kjc(a,b){var c;c=kfb(a.fb,180);c.e=b.a;!!c.d&&fec(c.d,b)}\nfunction jjc(a,b){var c;c=kfb(a.fb,180);c.b=b.a;!!c.d&&dec(c.d,b)}\nfunction fjc(){fjc=yCb;$ic=new qjc;bjc=new qjc;ajc=new qjc;_ic=new qjc;cjc=new qjc;djc=new qjc;ejc=new qjc}\nfunction ojc(){fjc();hec.call(this);this.b=(Vkc(),Qkc);this.c=($kc(),Zkc);(Tac(),this.e)[PRc]=0;this.e[QRc]=0}\nfunction gjc(a,b,c){var d;if(c==$ic){if(b==a.a){return}else if(a.a){throw UBb(new ZBc('Only one CENTER widget may be added'))}}Rh(b);hvc(a.j,b);c==$ic&&(a.a=b);d=new rjc(c);b.fb=d;jjc(b,a.b);kjc(b,a.c);ijc(a);Th(b,a)}\nfunction hjc(a){var b,c,d,e,f,g,h;Quc((Tac(),a.hb),'',FTc);g=new LJc;h=new rvc(a.j);while(h.b<h.c.c){b=pvc(h);f=kfb(b.fb,180).a;d=kfb(TEc(bKc(g.d,f)),111);c=!d?1:d.a;e=f==cjc?'north'+c:f==djc?'south'+c:f==ejc?'west'+c:f==_ic?'east'+c:f==bjc?'linestart'+c:f==ajc?'lineend'+c:vQc;Quc(Qo(b.hb),FTc,e);dFc(g,f,kCc(c+1))}}\nfunction ijc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(Tac(),a.d);while(vcc(b)>0){wo(b,ucc(b,0))}o=1;e=1;for(i=new rvc(a.j);i.b<i.c.c;){d=pvc(i);f=kfb(d.fb,180).a;f==cjc||f==djc?++o:(f==_ic||f==ejc||f==bjc||f==ajc)&&++e}p=teb(qwb,qNc,289,o,0,1);for(g=0;g<o;++g){p[g]=new sjc;p[g].b=$doc.createElement(NRc);so(b,$ac(p[g].b))}k=0;l=e-1;m=0;q=o-1;c=null;for(h=new rvc(a.j);h.b<h.c.c;){d=pvc(h);j=kfb(d.fb,180);r=$doc.createElement(ORc);j.d=r;j.d[CRc]=j.b;j.d.style[DRc]=j.e;j.d[INc]=j.f;j.d[HNc]=j.c;if(j.a==cjc){Wac(p[m].b,r,p[m].a);so(r,$ac(d.hb));r[VSc]=l-k+1;++m}else if(j.a==djc){Wac(p[q].b,r,p[q].a);so(r,$ac(d.hb));r[VSc]=l-k+1;--q}else if(j.a==$ic){c=r}else if(mjc(j.a)){n=p[m];Wac(n.b,r,n.a++);so(r,$ac(d.hb));r[GTc]=q-m+1;++k}else if(njc(j.a)){n=p[m];Wac(n.b,r,n.a);so(r,$ac(d.hb));r[GTc]=q-m+1;--l}}if(a.a){n=p[m];Wac(n.b,c,n.a);so(c,$ac(eh(a.a)))}}\nvar FTc='cwDockPanel';xCb(446,1,uQc);_.Bc=function pVb(){var a,b,c;REb(this.a,(a=new ojc,(Tac(),a.hb).className='cw-DockPanel',a.e[PRc]=4,ljc(a,(Vkc(),Pkc)),gjc(a,new Nhc('This is the first north component'),(fjc(),cjc)),gjc(a,new Nhc('This is the first south component'),djc),gjc(a,new Nhc('This is the east component'),_ic),gjc(a,new Nhc('This is the west component'),ejc),gjc(a,new Nhc('This is the second north component'),cjc),gjc(a,new Nhc('This is the second south component'),djc),b=new Nhc(\"This is a <code>ScrollPanel<\\/code> contained at the center of a <code>DockPanel<\\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!\"),c=new gfc(b),c.hb.style[INc]='400px',c.hb.style[HNc]='100px',gjc(a,c,$ic),hjc(a),a))};xCb(901,281,NNc,ojc);_.gc=function pjc(a){var b;b=bdc(this,a);if(b){a==this.a&&(this.a=null);ijc(this)}return b};var $ic,_ic,ajc,bjc,cjc,djc,ejc;var rwb=DBc(LNc,'DockPanel',901);xCb(179,1,{},qjc);var owb=DBc(LNc,'DockPanel/DockLayoutConstant',179);xCb(180,1,{180:1},rjc);_.c='';_.f='';var pwb=DBc(LNc,'DockPanel/LayoutData',180);xCb(289,1,{289:1},sjc);_.a=0;var qwb=DBc(LNc,'DockPanel/TmpRow',289);XMc(zl)(11);\n//# sourceURL=showcase-11.js\n")
