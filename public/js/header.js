// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");

  this.window.addEventListener("scroll", function () {
    //반응형을 고려하면 scrollY는 가까이 두는게 좋다(편의성, 성능은 살짝 떨어지지만..!)
    const scrollY = window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두 보여라");
    } else {
      console.log("일부만 보여라");
    }
  });
});
