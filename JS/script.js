window.addEventListener("scroll",() => {
  let scroll = window.scrollY;
  const top = document.querySelector(".top")
  // console.log(scroll)
  if(scroll >= 100){
    top.style.display = "block"
  }else{
    if(scroll < 100) {
      top.style.display = "none"
    }
  }
})