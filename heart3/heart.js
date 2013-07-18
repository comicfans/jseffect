B=39,x=y=!1;l='\u2665',
    r=function(e){x=e.pageX,y=e.pageY},
    c.addEventListener('mousemove',r);
a.R=a.fillRect,
    F=T=b.bgColor='#111';
with(Math){_=function(){},
    S=sin,
    R=random,
    C=cos,
    c.width=c.height=h=6e2;
    M=h/2;
    H=function(i,t){
        return[sqrt(C(t/i))*(16*pow(S(i),3)),sqrt(C(t/i))*(13*C(i)-5*C(2*i)-2*C(3*i)-C(4*i))]}
    ,n=function(){return F*C(T/F)+i/99},
        m=function(){return F*S(T/F)},A=[];
    i=t=0;s=function(){A=[];for(i=h;i--;){A[i]=[0,i]}};
    setInterval(function(){
        if(!(t%h)){
            a.clearRect(0,0,h,h);t=0,s()
        }
        t++;
        for(i=h;i--;){
            a.fillStyle='hsla('+C(t/h)*i/9+',80%,50%,.07)';
            F=abs(C(t/10))*2,T=C(t/9)*tan(t/9)/t*i*C(t/9);
            a.R(A[i][0]+=n(i),A[i][1]+=m(),2,2);
            a.R(H(i,t)[0]*t/B+(x||M),-H(i,t)[1]*t/B+(y||M),t/B,t/B)
        }
        a.font=t/9+'px serif';a.fillText(l,M+C(t)*h*R(),M+S(t)*h*R())
    },9)
}
