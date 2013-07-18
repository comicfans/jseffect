M=Math,Ms=M.sin,Mc=M.cos,Mp=M.PI,Ml=M.log,Ma=M.abs,Mq=M.sqrt
for(prop in a)a[prop[0]+(prop[6]||'')]=a[prop]
c.setAttribute('width', 500)
c.setAttribute('height', 500)
N=37,S=1.0/73,parts=[],d=Mp/180,radius=250,w=Mp/5,u=Mp/27,h=Mp*.14,parts2=[]
D=function(p){
    p.a+=S
        if(p.a>1.0)p.a-=2.0
            X=Ms(p.a)*Mc(p.a)*Ml(Ma(p.a))*600+250
                Y=-Mq(Ma(p.a))*Mc(p.a)*600+450
                Z=((Mc(p.a*Mp)*50)+50)/100
                R=8*Z+3
                a.fillStyle='#F00'
                a.globalAlpha=0.5*Z+0.25
                a.ba();a.a(X,Y,R,0,Mp*2,true);a.ca();a.f()}
                E=function(p){
                    p[1]+=d
                        p[2]+=d/2
                        cxx=H(p)
                        r=cxx[2]/80+3
                        a.fillStyle='#FF0'
                        a.globalAlpha=0.5*cxx[2]+0.25
                        a.ba()
                        a.a(cxx[0],cxx[1],r,0,Mp*2,true)
                        a.ca()
                        a.f()}
                        function H(p){return [p[0]*Mc(p[1])*Ms(p[2])+250,p[0]*Ms(p[1])*Ms(p[2])+250,p[0]*Mc(p[2])+p[0]]}
                        for (var i = 0; i < N; i++){parts.push({a:(i-N/2)/(N/2)});}
                        for (var i = 0; i < 10; i++){for (var j=0; j<7; j++){parts2.push([radius,i*w+u*j,h*(j-3)])}}
                        function A(){a.fillStyle='#CCC'
                            a.fc(0,0,500,500)
                                parts2.forEach(E)
                                parts.forEach(D)
                                setTimeout(A, 45);
                            copy();
                        }A()
