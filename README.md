# JS 적용

- JS 는 2가지로 크게 분류된다
- Node와 web(웹브라우저)으로 분류

## JS 코딩 좋은 위치

- 가장 좋은 자리는 html이 완료되는 시점

```js
// html의 document가 모두 로드되면 실행하기
// html의 이미지, 파일 등등 리소스가 준비되면 실행
// ▼ document.onload 와 같다
window.onload = function () {
  const wrap = document.querySelector("wrap");
  console.log(wrap);
};
```

- ▲ 협업하기는 불편하다
  -js에서 html을 불러오는 방법이 onload(중첩되면 덧씌워지면서 에러가된다) 와 addEventListener(콜백함수, ~가 일어나면 이걸 해라, 기존코드가 잇으면 현코드를 추가하라 ) 가 있다.

```js
// html 의  document 가 모두 로드 되면 실행하기
// html 의  이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
});

window.addEventListener("load", function () {
  console.log("안녕");
});
```

```js
// html 의  document 가 모두 로드 되면 실행하기
// html 의  이미지, 파일 등등 리소스가 준비되면 실행
// js에서 html을 불러오는 방법이 onload(중첩되면 덧씌워지면서 에러가된다) 와 addEventListener(콜백함수, ~가 일어나면 이걸 해라, 기존코드가 잇으면 현코드를 추가하라 ) 가 있다.
// 표준입니다.
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
});

// load = 모든 리소스 완료되고 실행
window.addEventListener("load", function () {
  console.log("안녕");
});

// DOMContentLoaded = html 구조가 다 불러와지면 실행 ,(이미지가 늦게 불러와지면 오류..)
window.addEventListener("DOMContentLoaded", function () {
  console.log("로딩완료");
});
```

- 최종

```js
// html 의  document 가 모두 로드 되면 실행하기
// html 의  이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.
window.addEventListener("load", function () {});

// html 만 로드 완료를 체크합니다.
window.addEventListener("DOMContentLoaded", function () {});
```

## 요소(Element)선택하는 법

- 우리가 원하는 요소(Element)를 선택하는 법
- Tag Element : Tag를 선택

```js
this.document.getElementsByTagName();
this.document.getElementsByClassName();
```

- Css Selector : CSS 선택자를 이용해서 선택

```js
this.document.querySelector();
this.document.querySelectorAll();
```

- ID : ID 선택자를 이용해서 선택

```js
this.document.getElementById();
```

```js
// DOM 만 완성하면 실행하는 기준으로 코드 진행함
window.addEventListener("DOMContentLoaded", function () {
  this.document.getElementsByTagName("header");
  this.document.getElementsByClassName("header");
  // 들어가기가 querySelector가 편하다, (다른건 안됨), div를 잡는게 좋다
  this.document.querySelector(".header > ul > li > a");
  this.document.querySelectorAll(".header");
  this.document.getElementById("");
});
```

```js
//예제
//협업 시 변수명은 headerLogo <<이런식으로
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
});
```

## 다양한 이벤트의 이해

- 웹브라우저가 체크하는 변화를 `이벤트`라고 한다
- 이벤트 작성법 3가지

### 1. 태그에 직접 이벤트 작성하기

- js에서 선택을 안해도된다, 하지만 html태그를 다 열어봐야한다

- 참고 : html -> DOM(Document Object Model : 태그 하나하나를 객체로 만듦, 자동으로 속성들을 부여한다)으로 변환된것을 웹브라우저가 알아서 기능을 부여한다

```html
<태그 on이벤트명="코드"></태그>
<!-- onclick -->
<header class="header" onclick="alert('안녕')"></header>
```

### 2. 요소에 속성으로 이벤트 작성하기

```js
요소.on이벤트 = function () {};
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  header.onclick = function () {
    alert("반가워");
  };
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
});
```

### 3. 요소에 이벤트 핸들러로 이벤트 작성하기 (표준)

```js
요소.addEventListener("이벤트", function () {});
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  header.addEventListener("click", function () {
    alert("표준 반가워");
  });
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
});
```

### 4. 활용빈도가 높은 윈도우 이벤트

- `load`
- `DOMContentLoaded`
- `resize` : 웹브라우저 너비, 높이 변경 시 발생
- `scroll` : 웹브라우저에 스크롤이 일어나면 발생

### 5. 활용빈도가 높은 마우스 이벤트

- `click` : 마우스 왼 클릭
- `mouseenter` : 마우스 커서가 요소에 걸쳐지면
- `mouseleave` : 마우스 커서가 요소에서 벗어나면

### 6. 활용빈도가 높은 키보드 이벤트

- `keydown` : 키보드에서 키 입력 시 이벤트 (누를 때)
- `keypress` : 키보드에서 키 누르고 있으면 이벤트
- `keyup` : 키보드에서 키 입력 후 이벤트 (누르고 뗏을 때)

### 7. 활용빈도가 높은 Form 관련 이벤트
