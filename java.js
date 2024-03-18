let i=0;
var eh=document.getElementById("exchengeheadingcolor");
setInterval(() => {
    i++;
    if(i==1){
        eh.classList.remove("cblack");
        eh.classList.add("cred");
    }
    else if(i==2)
    {
        eh.classList.remove("cred");
        eh.classList.add("cgreen");
    }
    else if(i==3)
    {
        eh.classList.remove("cgreen");
        eh.classList.add("cyellow");
    }
    else if(i==4)
    {
        eh.classList.remove("cyellow");
        eh.classList.add("cblue");
    }
    else if(i==5)
    {
        eh.classList.remove("cblue");
        eh.classList.add("cviolet");
    }
    else if(i==6)
    {
        eh.classList.remove("cviolet");
        eh.classList.add("cbrown");
    }
    else if(i==7)
    {
        eh.classList.remove("cbrown");
        eh.classList.add("caqua");
    }
    else if(i==8)
    {
        eh.classList.remove("caqua");
        eh.classList.add("cblack");
        i=1;
    }
    console.log(i);
}, 1000);