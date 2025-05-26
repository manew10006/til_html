window.addEventListener("load", function () {
  // 1.  데이터를 가져옮
  const dataUrl = "./api/banner.json";

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
    // 2.  데이터를 해석해서 html 생성
    const swBannerWrap = this.document.querySelector(
      ".sw_banner .swiper-wrapper"
    );
    // 완성시킬 html 글자
    let htmlTag = "";
    for (let i = 0; i < _data.length; i++) {
      const tempObj = _data[i];

      const tag = `
    <div class="swiper-slide" id="${tempObj.id}">
        <div class="banner_list">
        <a href="${tempObj.url}">
            <img src="${tempObj.img}" alt="${tempObj.alt}" title="${tempObj.alt}" />
        </a>
        </div>
    </div>
    `;
      htmlTag = htmlTag + tag;
    }

    //   console.log(htmlTag);
    //   외우세요. 글자를 html 태그로 넣는 법
    swBannerWrap.innerHTML = htmlTag;

    // 3.  slide 를 생성하고 작동 시킨다.

    const swiper = new Swiper(".sw_banner", {
      speed: 1500,
      loop: true,
      pagination: {
        el: ".sw_banner_pg",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner_next",
        prevEl: ".banner_prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // 화면의 해상도에 따라서 작동
      breakpoints: {
        // 760 이상이면
        760: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        // 960 이상이면
        960: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        // 1024 이상이면
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });

    const swBanner = this.document.querySelector(".sw_banner");
    swBanner.addEventListener("mouseenter", function () {
      swiper.autoplay.stop();
    });
    swBanner.addEventListener("mouseleave", function () {
      swiper.autoplay.start();
    });
  };

  // 주소 호출
  getData(dataUrl, makeHtml);
});
