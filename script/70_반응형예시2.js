const gnb =document.querySelector(".gnb");
const togglebtn = document.querySelector(".toggle")

togglebtn.addEventListener("click",() => {
  gnb.classList.toggle("active");
})
window.addEventListener("resize",() =>{
  if(document.documentElement.offsetWidth > 768){
    gnb.classList.remove("active")
  }  
})
// togglebtn.addEventListener("click",() => {
//   console.log(window.getComputedStyle(gnb).maxHeight);
//   //gnb.getAttribute("maxHeight")도 되는거 같음
//   const gnbHt = window.getComputedStyle(gnb).maxHeight
//   if(gnbHt == "0px"){
//     gnb.style.maxHeight = gnb.scrollHeight + "px";
//   } else {
//     gnb.style.maxHeight = "0px";
//   }

//   window.addEventListener("resize",() => {
//       if(document.documentElement.offsetWidth > 768){
//         gnb.style.maxHeight = gnb.scrollHeight + "px";
//       }else {
//         gnb.style.maxHeight = "0px";
//       }
//   })
// })