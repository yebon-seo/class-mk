const swiper = new Swiper('.wrap',{
  direction: "horizontal", //스와이퍼 방향 설정
  loop: true, //무한 루프 활성화
  navigation: {
    nextEl : '.swiper-button-next',
    prevEl : '.swiper-button-prev',
  },
  spaceBetween: 0, //다음슬라이드와의 간격 px로 줌
  slidesPerView: "auto", //3개만 보여주고 싶으면 여기다가 숫자를 넣어
  grabCursor :true,
  centeredSlides:true,//현재 슬라이드 중앙에 위치
  speed:1000,
  autoplay:{
    delay:1000, //지연시간
    disableOnInteraction: true, //사용자가 슬라이드를 조작하면 자동재생이 중지되도록 설정
  },
  effect: "coverflow", //슬라이드 전환효과 (3d회전)
  coverflowEffect : {
    rotate:50, //회전각도
    stretch: -100,
    depth : 400, //깊이를 400으로 설정하여 3d효과 강조
    modifier:1,
    slideShadows:false,//그림자 효과 비활성화
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
})

// .btnStart요소 선택
const btnStart = document.querySelector(".btnStart")
const btnStop = document.querySelector(".btnStop")

// btnStop버튼을 클릭하면 자동롤링 정지
btnStop.addEventListener("click",() => {
  swiper.autoplay.stop();
})
// btnStart버튼을 클릭하면 자동롤링 시작
btnStart.addEventListener("click",() => {
  swiper.autoplay.start();
})