(function(a,b,c,d){
    function t(){
        var a={},b={},
cxx=256*f(q/130),
l="hsl("+cxx+",50%,50%)";
d.fillStyle=j,d.fc(0,0,h,i),a.x=k+m*f(q/r),a.y=p.y-n*e.abs(f(q/r)),b.x=k+m*f(q/r),b.y=o.y-n,d.strokeStyle=l,d.lineWidth=2+2*g(q/r),d.ba(),d.m(o.x,o.y),d.bC(b.x,b.y,a.x,a.y,p.x,p.y),d.s(),q++,
copy();
setTimeout(t,30);
    }

    var e=Math,
f=e.sin,g=e.cos,h=innerWidth,i=innerHeight,j="rgba(0,0,0,0.01)",
k=h/2,l=i/2,m=300,n=200,o={x:k,y:l+n},p={x:k,y:l-n},q=0,r=25,s;
for(s in d)
    d[s[0]+(s[6]||"")]=d[s];
b.style.margin=0;
c.style.background="#000";
c.width=h;
c.height=i;
t();
})(this,b,c,a);
