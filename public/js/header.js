// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
// DOM 은 html 태그 구조를 말한다.(Document Object Model) : 객체
// 아래 문장은 html 이 완성되어졌다면 실행하자.
window.addEventListener("DOMContentLoaded", function () {
  // 아래 구문은 heder 변수를 만들고 html (document) 에서 css 선택자로 값을 셋팅
  const header = this.document.querySelector(".header");
  const headerTop = this.document.querySelector(".header_top");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  const main = this.document.querySelector(".main");

  // 윈도우에 스크롤(scroll 이벤트)이 일어나면 기능을 작동하겠다.
  this.window.addEventListener("scroll", function () {
    // 스크롤이 되었을 때 스크롤바의 Y 축의 상단 픽셀위치값
    const scrollY = window.scrollY;

    // headerTop 영역의 높이값을 px 로 알고 싶다.
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight); //  50px 출력

    // 만약 50 보다 작으면 전체 를 보이고, 그렇지 않으면 일부분을 숨긴다.
    if (scrollY <= headerTopH.offsetHeight) {
      // console.log("모두 보여라");
      logo.style.display = "block";
      eventMenu.style.display = "block";
      // class 제거로 변경
      header.classList.remove("header_down");
      headerTop.classList.remove("header_top_down");
      search.classList.remove("search_down");
      member.classList.remove("member_down");
      main.classList.remove("main_fixed");
    } else {
      // console.log("일부만 보여라");
      // 로고를 css 로 제어하겠다.
      logo.style.display = "none";
      eventMenu.style.display = "none";

      // class 추가로 변경
      // header.classList.add("header_down");

      headerTop.classList.add("header_top_down");
      search.classList.add("search_down");
      member.classList.add("member_down");
      // main.classList.add("main_fixed");
    }
  });
});
