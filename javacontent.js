function nightmode(){
    let nv=document.getElementById("nv");
    nv.classList.toggle("nav");
    nv.classList.toggle("nnav");
    let lg=document.getElementById("lg");
    lg.classList.toggle("logo");
    lg.classList.toggle("nlogo");
    let cnt=document.getElementById("cnt");
    cnt.classList.toggle("contact");
    cnt.classList.toggle("ncontact");
    let lgn=document.getElementById("lgn");
    lgn.classList.toggle("login");
    lgn.classList.toggle("nlogin");
    let sgn=document.getElementById("sgn");
    sgn.classList.toggle("signin");
    sgn.classList.toggle("nsignin");
    let darkmode=document.getElementById("darkmode");
    darkmode.classList.toggle("fa-sun");
    darkmode.classList.toggle("fa-moon");
    darkmode.classList.toggle("ccolor");
    let prfl=document.getElementById("prfl");
    prfl.classList.toggle("profile");
    prfl.classList.toggle("nprofile");
}
function showlist()
{
    let ss=document.getElementById("ss");
    ss.classList.toggle("search-suggetion");
    ss.classList.toggle("show-nothing")
}
function searchlist()
{
    let serh=document.getElementById("serh").value;
    serh=serh.toLowerCase();
    console.log(serh);
    let item=document.getElementsByClassName("item");
    for(let i=0;i<item.length;i++)
    {
        if(!item[i].innerHTML.toLowerCase().includes(serh))
        {
            item[i].style.display = "none";
        }
        else{
            item[i].style.display="list-item";
        }
    }
}