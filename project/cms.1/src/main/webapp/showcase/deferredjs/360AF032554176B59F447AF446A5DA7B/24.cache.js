$wnd.showcase.runAsyncCallback24("function Pcb(a){this.a=a}\nfunction Rcb(a){this.a=a}\nfunction Tcb(a){this.a=a}\nfunction Ycb(a,b){this.a=a;this.b=b}\nfunction EGb(a){return hvb(),a.hb}\nfunction IGb(a,b){BGb(a,b);ep((hvb(),a.hb),b)}\nfunction $ub(){var a;if(!Xub||bvb()){a=new $1b;avb(a);Xub=a}return Xub}\nfunction bvb(){var a=$doc.cookie;if(a!=Yub){Yub=a;return true}else{return false}}\nfunction ep(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction cvb(a){Zub&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction Mcb(a){var b,c,d,e;if(EGb(a.c).options.length<1){NIb(a.a,'');NIb(a.b,'');return}e=EGb(a.c).selectedIndex;b=FGb(a.c,e);c=(d=$ub(),xB(b==null?gZb(q2b(d.d,null)):G2b(d.e,b)));NIb(a.a,b);NIb(a.b,c)}\nfunction Lcb(a,b){var c,d,e,f,g,h;eh(a.c).options.length=0;h=0;e=new v$b($ub());for(d=(g=e.a.Dg().fc(),new A$b(g));d.a.xf();){c=(f=tB(d.a.yf(),36),xB(f.Jg()));AGb(a.c,c);MWb(c,b)&&(h=eh(a.c).options.length-1)}sm((lm(),km),new Ycb(a,h))}\nfunction avb(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(Zub){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Fg(f,g)}}}\nfunction Kcb(a){var b,c,d;c=new IEb(3,3);a.c=new KGb;b=new qyb('Delete');Dh((hvb(),b.hb),gbc,true);bEb(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');eEb(c,0,1,a.c);eEb(c,0,2,b);a.a=new WIb;bEb(c,1,0,'<b><b>Name:<\\/b><\\/b>');eEb(c,1,1,a.a);a.b=new WIb;d=new qyb('Set Cookie');Dh(d.hb,gbc,true);bEb(c,2,0,'<b><b>Value:<\\/b><\\/b>');eEb(c,2,1,a.b);eEb(c,2,2,d);Kh(d,new Pcb(a),(Gt(),Gt(),Ft));Kh(a.c,new Rcb(a),(zt(),zt(),yt));Kh(b,new Tcb(a),(null,Ft));Lcb(a,null);return c}\nMW(457,1,$7b,Pcb);_.Sc=function Qcb(a){var b,c,d;c=JIb(this.a.a);d=JIb(this.a.b);b=new jA(iW(oW((new hA).q.getTime()),jcc));if(c.length<1){$wnd.alert('You must specify a cookie name');return}dvb(c,d,b);Lcb(this.a,c)};var _L=SVb(n8b,'CwCookies/1',457);MW(458,1,_7b,Rcb);_.Rc=function Scb(a){Mcb(this.a)};var aM=SVb(n8b,'CwCookies/2',458);MW(459,1,$7b,Tcb);_.Sc=function Ucb(a){var b,c;c=eh(this.a.c).selectedIndex;if(c>-1&&c<eh(this.a.c).options.length){b=FGb(this.a.c,c);cvb(b);IGb(this.a.c,c);Mcb(this.a)}};var bM=SVb(n8b,'CwCookies/3',459);MW(460,1,h8b);_.Bc=function Xcb(){eZ(this.b,Kcb(this.a))};MW(461,1,{},Ycb);_.Dc=function Zcb(){this.b<eh(this.a.c).options.length&&JGb(this.a.c,this.b);Mcb(this.a)};_.b=0;var dM=SVb(n8b,'CwCookies/5',461);var Xub=null,Yub;k5b(zl)(24);\n//# sourceURL=showcase-24.js\n")
