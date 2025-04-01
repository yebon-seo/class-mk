const navItems = document.querySelectorAll(".scrollNav li")
//스크롤 이벤트 생성
window.addEventListener("scroll", () =>{
  //스크롤 이동값
  let sct = window.scrollY
  const articles = document.querySelectorAll("section > article")

  articles.forEach((article, i) => {
    article.style.transform = `translateZ(${-5000 * i + sct}px)`;

    //현재 스크롤 위치에 따라 on클래스 추가 제거
    if (Math.floor(sct / 5000) === i){
      articles.forEach(a => a.classList.remove("on"))
      article.classList.add("on")

      navItems.forEach(item => item.classList.remove("on"))
      navItems[i].classList.add("on")
    }
  })
})

//네비게이션 클릭 이벤트
navItems.forEach((item,idx)=> {
  item.addEventListener("click",()=>{
    window.scrollTo({
      top : 5000 * idx,
      behavior : "smooth"
    })
  })
})

//마우스 이동 이벤트
document.body.addEventListener("mousemove", (e)=> {
  // 마우스 좌표값 구하기
  let posX = e.pageX/100;
  let posY = e.pageY/150;

  // 객체의 위치에 대입하여 업데이트
  //1페이지

  document.querySelector('.obj11').style.left = (-270 - posX) + 'px'
  document.querySelector('.obj11').style.bottom = (-100 - posY) + 'px'
  document.querySelector('.obj12').style.right = (-590 - posX) + 'px';
  document.querySelector('.obj12').style.top = (-85 + posY) + 'px';
  document.querySelector('.obj13').style.left = (-100 + posX) + 'px';
  document.querySelector('.obj13').style.bottom = (20 + posY) + 'px';

  // 2페이지
  document.querySelector('.obj21').style.right = (-700 - posX) + 'px';
  document.querySelector('.obj21').style.bottom = (-420 - posY) + 'px';
  document.querySelector('.obj22').style.right = (-50 + posX) + 'px';
  document.querySelector('.obj22').style.bottom = (-100 + posY) + 'px';

  // 3페이지

  document.querySelector('.obj31').style.right = (110 - posX) + 'px';
  document.querySelector('.obj31').style.bottom = (70 - posY) + 'px';
  document.querySelector('.obj32').style.left = (100 - posX) + 'px';
  document.querySelector('.obj32').style.bottom = (-160 - posY) + 'px';

  // 4페이지

  document.querySelector('.obj41').style.left = (350 + posX) + 'px';
  document.querySelector('.obj41').style.bottom = (-150 - posY) + 'px';
  document.querySelector('.obj42').style.right = (200 + posX) + 'px';
  document.querySelector('.obj42').style.top = (-250 - posY) + 'px';
  document.querySelector('.obj43').style.right = (-100 + posX) + 'px';
  document.querySelector('.obj43').style.bottom = (-120 + posY) + 'px';

  // 5페이지
  document.querySelector('.obj51').style.left = (-100 - posX) + 'px';
  document.querySelector('.obj51').style.bottom = (-200 - posY) + 'px';
  document.querySelector('.obj52').style.right = (320 + posX) + 'px';
  document.querySelector('.obj52').style.top = (-50 - posY) + 'px';
  document.querySelector('.obj53').style.left = (-30 + posX) + 'px';
  document.querySelector('.obj53').style.bottom = (-posY) + 'px';

})
