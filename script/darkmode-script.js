
const body = document.querySelector("body")
const btn = document.querySelector("#btn")
  btn.addEventListener("click",function(){
  body.classList.toggle("dark-theme");

  //버튼 글자 바꾸기
  //버튼의 텍스트가 다크모드 만들기면 라이트모드 만들기로 변경

  if(btn.textContent == '다크모드로 만들기'){
    btn.textContent = '라이트모드로 만들기'
  } else {
    //다크모드로 만들기로 변경
    btn.textContent = '다크모드로 만들기'
  }
})
// btn.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
// })
