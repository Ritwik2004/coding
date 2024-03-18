$("#carousel-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    mobileFirst: true
});

function sidebar()
{
    let s2=document.getElementById("s2");
    s2.classList.toggle("sidebar");
    s2.classList.toggle("sidebarleft");
}
function subsideop5()
{
    let subop5=document.getElementById("subop5");
    subop5.classList.toggle("so5");
    subop5.classList.toggle("leftso5");
}

// for slider 
let i=null;
let j=null;
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
setInterval(() => {
    i++;
    if(i==1)
    {
        img1.classList.toggle("im1");
        img1.classList.toggle("nim1");
    }
    else if(i==2)
    {
        img2.classList.toggle("im2");
        img2.classList.toggle("nim2");
    }
    else if(i==3)
    {
        img3.classList.toggle("im3");
        img3.classList.toggle("nim3");
    }
    else if(i==4)
    {
        img4.classList.toggle("im4");
        img4.classList.toggle("nim4");
        i=1;
    }
}, 4000);
// ---------------------------------------
function nightmode()
{
    let darkmode=document.getElementById("darkmode");
    darkmode.classList.toggle("fa-sun");
    darkmode.classList.toggle("fa-moon");
    let navbar=document.getElementById("navbar");
    navbar.classList.toggle("nav");
    navbar.classList.toggle("nav_night");
    let menu=document.getElementById("menu");
    menu.classList.toggle("side_night");
    let contact=document.getElementById("contact");
    contact.classList.toggle("side_night");
    let Login=document.getElementById("Login");
    Login.classList.toggle("side_night");
    let signin=document.getElementById("signin");
    signin.classList.toggle("side_night");
    let mode=document.getElementById("mode");
    mode.classList.toggle("side_night");
    let prfl=document.getElementById("prfl");
    prfl.classList.toggle("profile");
    prfl.classList.toggle("nprofile");
    let homehouse=document.getElementById("homehouse");
    homehouse.classList.toggle("side_night");
    let nav1=document.getElementById("nav1");
    nav1.classList.toggle("side_night");
    let s2=document.getElementById("s2");
    s2.classList.toggle("day");
    s2.classList.toggle("night");
    let op1=document.getElementById("op1");
    op1.classList.toggle("sideop1");
    op1.classList.toggle("nsideop1");
    let op2=document.getElementById("op2");
    op2.classList.toggle("sideop2");
    op2.classList.toggle("nsideop2");
    let op3=document.getElementById("op3");
    op3.classList.toggle("sideop3");
    op3.classList.toggle("nsideop3");
    let op4=document.getElementById("op4");
    op4.classList.toggle("sideop4");
    op4.classList.toggle("nsideop4");
    let op5=document.getElementById("op5");
    op5.classList.toggle("sideop5");
    op5.classList.toggle("nsideop5");
    let op6=document.getElementById("op6");
    op6.classList.toggle("sideop6");
    op6.classList.toggle("nsideop6");
    let subop5=document.getElementById("subop5");
    subop5.classList.toggle("day");
    subop5.classList.toggle("night");
    let sub5a=document.getElementById("sub5a");
    sub5a.classList.toggle("subsideop5a");
    sub5a.classList.toggle("nsubsideop5a");
    let sub5b=document.getElementById("sub5b");
    sub5b.classList.toggle("subsideop5a");
    sub5b.classList.toggle("nsubsideop5a");
    let sub5c=document.getElementById("sub5c");
    sub5c.classList.toggle("subsideop5a");
    sub5c.classList.toggle("nsubsideop5a");
    let slid=document.getElementById("slid");
    slid.classList.toggle("nsliderhw");
    let coden=document.getElementById("coden");
    coden.classList.toggle("code");
    coden.classList.toggle("ncode");
    let cn1=document.getElementById("cn1");
    cn1.classList.toggle("c");
    cn1.classList.toggle("nc");
    let java=document.getElementById("java");
    java.classList.toggle("c");
    java.classList.toggle("nc");
    let python=document.getElementById("python");
    python.classList.toggle("c");
    python.classList.toggle("nc");
    let bdy=document.getElementById("bdy");
    bdy.classList.toggle("body");
    bdy.classList.toggle("nbody");
    let mn=document.getElementById("mn");
    mn.classList.toggle("main");
    mn.classList.toggle("nmain");
    let ic=document.getElementById("ic");
    ic.classList.toggle("cpic");
    ic.classList.toggle("ncpic");
    let ij=document.getElementById("ij");
    ij.classList.toggle("javapic");
    ij.classList.toggle("njavapic");
    let ip=document.getElementById("ip");
    ip.classList.toggle("pythonpic");
    ip.classList.toggle("npythonpic");
}
function showsaearchbar()
{
    let searchbox=document.getElementById("searchbox");
    searchbox.classList.toggle("free");
    searchbox.classList.toggle("nfree");
    searchbox.style.transition='.4s';
    let sb=document.getElementById("sb");
    sb.classList.toggle("searchbar");
    sb.classList.toggle("nsearchbar");
    let sl=document.getElementById("sl");
    sl.classList.toggle("searchlable");
    sl.classList.toggle("nsearchlable");
    
}
// function showlist()
// {
//     let ss=document.getElementById("ss");
//     ss.classList.toggle("search-suggetion");
//     ss.classList.toggle("show-nothing")
// }
// function searchlist()
// {
//     let serh=document.getElementById("serh").value;
//     serh=serh.toLowerCase();
//     console.log(serh);
//     let item=document.getElementsByClassName("item");
//     for(let i=0;i<item.length;i++)
//     {
//         if(!item[i].innerHTML.toLowerCase().includes(serh))
//         {
//             item[i].style.display = "none";
//         }
//         else{
//             item[i].style.display="list-item";
//         }
//     }
// }