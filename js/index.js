// 상수(const), 변수(var,Let)등을 선언(수정할 html 태그 선택)
//전체 페이지
const fullpageEl = document.getElementById('fullpage');
// 메뉴 버튼
const menuBtn = document.querySelector('.menu_btn');
// 오른쪽 네비게이션 메뉴바(안보임)
const navigation = document.querySelector('.navigation');
// 오른쪽 메뉴바 X버튼
const navCloseBtn = document.querySelector('.navigation_close_btn');
// 화면전체를 흐리게 덮는 오버레이
const blurOverlay = document.querySelector('.blur_overlay');

//문자열 is--active 선언
const IS_ACTIVE = 'is--active';



const toggleNavigation = () => {
  // function 오른쪽네비토글{
  // 네비게이션에 클래스 is--active가 있으면 제거, 없으면 넣기
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle('no-scroll');
};

menuBtn.addEventListener('click', toggleNavigation);
navCloseBtn.addEventListener('click', toggleNavigation);
blurOverlay.addEventListener('click', toggleNavigation);

// 여기에서 fullpage를 초기화 설정
new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
});