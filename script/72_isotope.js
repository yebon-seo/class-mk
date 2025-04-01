
// window.addEventListener("load",() => {
  
  //배치할 요소를 감싸고 있는 부모요소
  const grid = new Isotope("section",{
    itemSelector: 'article', //배치할 요소명
    columWidth: 'article', //넓이 값을 구할 요소명
    TransitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
  });

  //클릭할 모든 버튼요소를 변수에 저장
  const btns = document.querySelectorAll("main ul li")
  btns.forEach(btn => btn.addEventListener("click",(e) => {
    e.preventDefault(); //버튼의 링크기능 제거
    //클릭한 대상의 자식인 a요소의 href속성값을
    const sort = e.currentTarget.querySelector("a").getAttribute("href");
    // console.log(sort)
    grid.arrange({
      filter: sort // 옵션값으로 sort변수 저장
      
    })
  }))
// })

