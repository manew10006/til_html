// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
// DOM 은 html 태그 구조를 말한다
// 아래 문장은 html이 완성되어졌다면 실행하자
window.addEventListener("DOMContentLoaded", function () {
  // 아래 구문은 header변수를 만들고 html(document)에서 css 선택자로 값을 셋팅
  const header = this.document.querySelector(".header");
  const headerTop = this.document.querySelector(".header_top");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");

  // window에 스크롤(scroll event)이 일어나면 기능이 작동한다
  this.window.addEventListener("scroll", function () {
    //반응형을 고려하면 scrollY는 가까이 두는게 좋다(편의성, 성능은 살짝 떨어지지만..!)
    //스크롤이 되었을 때 스크롤바의 Y축의 상단 픽셀 위치값
    const scrollY = window.scrollY;

    // header Top 영역의 높이값을 px로 알고싶다
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight); //offsetHeight = div의 높이값

    // 만약 헤더 높이보다 작으면 전체를 보이고 , 그렇지 않으면 일부분을 숨긴다.
    if (scrollY <= headerTopH.offsetHeight) {
      // console.log("모두 보여라");
      logo.style.display = "block";
      eventMenu.style.display = "block";
      //class 제거로 변경
      search.classList.remove("search_down");
      member.classList.remove("member_down");
      header.classList.remove("header_down");
      headerTop.classList.remove("header_top_down");
    } else {
      // console.log("일부만 보여라");
      // 로고를 css로 제어
      logo.style.display = "none";
      eventMenu.style.display = "none";
      //class 추가로 변경 (html 문서에 class명을 추가 부여한다)
      search.classList.add("search_down");
      member.classList.add("member_down");
      header.classList.add("header_down");
      headerTop.classList.add("header_top_down");
    }
  });
});
