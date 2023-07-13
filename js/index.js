const slider = document.querySelectorAll(".slider");
const panel = document.querySelectorAll(".panel");
  
for (let index = 0; index < slider.length; index++) {
slider[index].addEventListener("click", ()=>{
  if(panel[index].style.display == "none"){
    panel[index].style.display="block"
  }else{
    panel[index].style.display="none"
  }
})
  
}