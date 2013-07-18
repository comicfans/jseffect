
var counter=0;

function copy(){
    ++counter;


    link.download=counter+".png";
    link.href=c.toDataURL();
    link.click();

}
