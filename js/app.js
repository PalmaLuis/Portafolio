const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

let flag=0;
navToggle.addEventListener("click",()=>{
  // alert("pelig")
  if(flag===0){
    navMenu.style.left=0;
    navMenu.style.transition="0.5s";
    flag=1;
  }else{
    navMenu.style.left="100%"
    navMenu.style.transition="0.5s";
    flag=0;
  }
});

