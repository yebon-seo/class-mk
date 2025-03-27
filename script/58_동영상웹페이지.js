const items = document.querySelectorAll("article")
const aside = document.querySelector("aside");
const close = aside.querySelector("aside .txt span")

items.forEach((el) =>{
  el.addEventListener("mouseenter",(e) =>{
    //동영상 중단된 위치부터 재생이 아니라 처음부터 재생할 수 있게
    // e.currentTarget.querySelector("video").currentTime = 0;
   //이벤트가 발생된 article요소의 자손요소인 video 요소를 선택하여 play
   e.currentTarget.querySelector("video").play();
  })
  el.addEventListener("mouseleave",(e) =>{
    e.currentTarget.querySelector("video").pause();

    el.addEventListener("click",(e)=>{
      let tit = e.currentTarget.querySelector("h2").textContent;
      let txt = e.currentTarget.querySelector("p").textContent;
      // let vidSrc = e.currentTarget.querySelector("video").getAttribute("src")
      let vidSrc = e.currentTarget.querySelector("video").src
      
      aside.querySelector("h1").textContent = tit
      aside.querySelector("p").textContent = txt
      // aside.querySelector("video").setAttribute("src",vidSrc)
      aside.querySelector("video").src = vidSrc;

      aside.querySelector("video").play();
      aside.classList.add("on");

    })  
  })
})
close.addEventListener("click", () => {
  aside.classList.remove("on")
  aside.querySelector("video").pause();
})





