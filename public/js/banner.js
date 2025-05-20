window.addEventListener("load", function () {
  // 1. 데이터를 가져온다
  const dataUrl = "http://127.0.0.1:5500/public/api/banner.json";

  const swBannerWrap = this.document.querySelector(
    ".sw_banner .swiper-wrapper"
  );
  const swBanner = this.document.querySelector(".sw_banner");

  /**
   * 데이터 연동
   * @param  _url string 주소
   * @param  _fn function 콜백함수
   */
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터 만들기 함수

  const makeHtml = function (_data) {
    console.log(_data);
    // 2. 데이터를 해석해서 html 생성

    //완성시킬 html 글자
    let htmlTag = "";
    for (let i = 0; i < _data.length; i++) {
      const tempObj = _data[i];
      const tag = `
    <div class="swiper-slide">
                  <div class="banner_list" id="${tempObj.id}>
                    <a href="${tempObj.url}">
                      <img src="${tempObj.img}" alt="${tempObj.alt}" title="${tempObj.alt}" />
                    </a>
                  </div>
                </div>
                `;
      htmlTag = htmlTag + tag;
    }

    console.log(htmlTag);

    // innerHTML : 글자를 html 태그로 삽입한다
    swBannerWrap.innerHTML = htmlTag;

    // 3. slide를 생성하고 작동 시킨다 (자료가 먼저 호출되야 만들 수 있다)

    const swiper = new Swiper(".sw_banner", {
      //항상 로드시점에 넣어주지(이미지등 리소스가 많으니)
      slidesPerView: 2,
      spaceBetween: 25,
      speed: 800,
      loop: true,
      pagination: {
        el: ".sw_banner.swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner_right",
        prevEl: ".banner_left",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    swBanner.addEventListener("mouseenter", function () {
      swiper.autoplay.stop();
    });
    swBanner.addEventListener("mouseleave", function () {
      swiper.autoplay.start();
    });
  };

  //주소호출
  getData(dataUrl, makeHtml);
});
