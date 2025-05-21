window.addEventListener("load", function () {
  // api 주소
  const apiUrl = "http://127.0.0.1:5500/public/api/tour.json";
  // 현재 출력한 카테고리
  let cateFocusIndex = 0;
  // 카테고리 button 태그 DOM 보관
  let cateButtonArr = [];
  // 카테고리 글자 배열
  let cateNameArr = [];
  // 카테고리별 목록 배열
  let cateListArr = [];

  // api 호출 함수
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터를 처리하는 함수
  const parseData = function (_data) {
    console.log(_data);

    // 1. 카테고리 글자만 추출하기
    // const cateArr = _data.map(item => item.cate );
    const cateArr = _data.map(function (item, index, arr) {
      return item.cate;
    });
    cateNameArr = [...cateArr];

    // 2. 카테고리 목록만 추출하기
    const listArr = _data.map(function (item, index, arr) {
      return item.list;
    });
    cateListArr = [...listArr];

    tourStar();
  };

  function tourStar() {
    makeTourInit();
    activeCateFocus();
    addBtsEvent();
  }

  // 최초 데이터가 전달되면 1 번만 실행
  // 카테고리 버튼은 1 번만 만들어도 됨.
  function makeTourInit() {
    // 배치될 장소
    const cateBts = document.querySelector(".section_category_bts");
    // 최종 html 글자
    let html = "";

    // for (let i = 0; i < cateNameArr.length; i++) {
    //   const tag = `<li><button>${cateNameArr[i]}</button></li>`;
    //   html = html + tag;
    // }
    // foreach로 만들 수 있다

    cateNameArr.forEach(function (item, index) {
      const tag = `<li><button>${item}</button></li>`;
      html = html + tag;
    });

    cateBts.innerHTML = html;

    //버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
  }

  // 실시간으로 생성된 버튼에 이벤트 연결하기
  function addBtsEvent() {
    cateButtonArr.forEach(function (item, index) {
      item.addEventListener("click", function () {
        //  동일한 버튼 클릭 시 작동 방지
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  // 포커스 모두 제거하기
  function removeFocusAll(_index) {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }

  // 카테고리 버튼에 현재 포커스 표현하기
  function activeCateFocus() {
    cateButtonArr[cateFocusIndex].classList.add("cate_focus");
  }

  // 함수 호출
  getData(apiUrl, parseData);
});
