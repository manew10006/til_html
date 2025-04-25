# CSS

- html을 꾸며주기
- display 중요함
- position 중요함

## 1. css 작성법 3가지

- 작성법 3가지 중에 누가 최종적으로 적용되는가? (누가 힘이 쎈가?)

### 1.1. Inline 방식

- html 태그에 직접 작성해 주는 방식

```
ex ) <body style="background-color: skyblue">
```

- 단점 : style 구문이 길어지면서 가독성이 떨어진다.
- 스타일시트가 html에 포함되있으면 수정이 있을 때 페이지 별로 일일이 찾아서 수정해야한다.

### 1.2. link 방식

- file로 작성해서 link하는 방식 (경로/파일명.css)

- css 폴더 / common.css

```
header 영역에서 link누르고 탭 하면

    <link rel="stylesheet" href="">
    해당 구문이 생긴다

    "css/common.css" 경로를 입력한다!

```

### 1.3. @import 방식

- css 파일에서 또다른 CSS 파일을 참조하는 방식

- css도 내용에 따라 분리가 가능

## 2. 모든 태그에 초기화 진행하기

- 웹브라우저 마다 기본적인 css는 적용이 되어있음.
- 그래서, 웹브러우저 마다 모양이 다르게 보인다. (그래서 통일이 필요함!)

-첫줄에 써야한다. -대표적으론 폰트연동할때.

▼ 초기셋팅 ▼

```css
@charset "utf-8"
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}
```

## 3. 선택하는 법 (selector)

### 3.1. 태그 선택법

```css
태그 {
}
```

- css/common.css 예제

```css
@charset "utf-8";
* {
  /* 모든 값 초기화 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 탭키 비활성화 */
  /* outline-style: none; */
}

/* 태그 선택 : 추천하는 각 태그별 기본값 */
a {
  text-decoration: none;
  /* 디자인 보고 수정 */
  color: #000000;
}
ul {
  list-style: none;
}
html {
  width: 100%;
  /* 디자인 보고 수정 */
  font-size: 12px;
}
body {
  width: 100%;
  /* rem : 비율 */
  font-size: 1rem;
  /* ▼디자인 보고 수정 */
  color: #000000;
  /* 글꼴이 필요로 함. */
}
```

### 3.2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```

### 3.3 단계별 선택법

```css
태그 > 태그 > 태그 {
}
```

```css
.클래스 > 태그 > 태그 {
}
```

### 3.4. 범위 선택법

```css
태그 태그 {
}
```

```css
.클래스 태그 {
}
```

### 3.5.속성선택자

- [속성종류="속성명"]
- (잘 쓰이지는 않는다.)

```css
.search_form > input[type="submit"] {
}
```

## 4. display 의 이해

### 4.1. display:block

- 벽돌 처럼 한 영역을 모두 차지한다. ( width(100%), height , 등 기본값이 있음 )
- 공간이 남더라도 절대로 양보하지 않음.
- div, ul, li, h1~h6, p태그 등은 default 로 block 이 적용되어짐.

### 4.2. display:inline

- 글자처럼 한줄에 배치가 가능하다. (태그사이 엔터가 스페이스 적용됨)
- 그러나, width, height , 등이 `적용안됨.`
- img, span, b 태그 등은 default 로 inline 이 적용되어짐.

### 4.3. display:inline-block;

- 글자처럼 한줄에 배치가 가능하다. (태그사이 엔터가 스페이스 적용됨)
- width, height , 등이 `적용됨.`
- Enter 줄 내림 공백을 없애려면 font-size:0 적용

### 4.4. block 을 유지하면서 inline 적용하기

#### 4.4.1. overflow:hidden 으로 레이아웃 유지

- overflow: hidden; 과 float: left 조합

```css
@charset "utf-8";
.box_wrap {
  display: block;
  border: 3px solid red;
  overflow: hidden;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

#### 4.4.2. clearboth 클래스 만들어서 레이아웃 유지

```css
.box_wrap {
  display: block;
  border: 3px solid red;
}
/* 남은 여백을 정리하기위해 clearboth라고 html에 클래스를 부여하고 css에서 작업해준다. */
.clearboth::after {
  /* 해당 html 태그 닫힘 직전으로 삽입 : 반대는 before. 시작태그 바로 뒤에 온다*/
  content: "";
  display: block;
  width: 100%;
  clear: both;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

```html
<div class="box_wrap clearboth">
  <div class="box">A</div>
  <div class="box">BBB</div>
  <div class="box">C</div>
  <div class="box">D</div>
</div>
```

#### 4.4.3. height를 주어서 레이아웃 유지 (별로 추천하진않음..)

```css
.box_wrap {
  display: block;
  border: 3px solid red;
  height: 100px;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.5. display : none

- 화면에 내용을 안 보이게 함.
- 실제로 태그가 없는 것처럼 작동함.
- js에서 태그를 찾아서 `기능을 부여 못할 수도 있다.`

```html
<body>
  <style>
    .box_wrap {
      display: block;
      border: 3px solid red;
      /* overflow: hidden; */
    }
    /* 남은 여백을 정리하기위해 clearboth라고 html에 클래스를 부여하고 css에서 작업해준다. */
    .clearboth::after {
      /* 해당 html 태그 닫힘 직전으로 삽입 : 반대는 before. 시작태그 바로 뒤에 온다*/
      content: "안녕";
      display: block;
      width: 100%;
      clear: both;
    }
    .box {
      display: block;
      width: 50px;
      border: 3px solid black;
      float: left;
    }
  </style>
  <div class="box_wrap clearboth">
    <div class="box">A</div>
    <div class="box">BBB</div>
    <div class="box">C</div>
    <div class="box">D</div>
  </div>
</body>
```

### 4.6. 가능하면 flex 적극 도입

- https://studiomeal.com/archives/197
- 여백줄땐 [ gap: __px ]로 준다.

## 5. css 적용 우선 순위

### 5.1. 태그 css가 만약 중복이라면

- 1번 `인라인 스타일 시트는 가장 우선 적용`이 된다.

```html
<div class="box_wrap" style="background-color: orange">안녕</div>
```

- 2번 `가장 순서가 마지막에 작성된 것이 적용`된다. (먼저쓰긴거 위에 덧씌위지는 개념! ex:포토샵 레이어)

```css
div {
  background-color: yellowgreen;
}
/* 아래에 작성했으므로 덮어씌움 */
div {
  background-color: orange;
}
```

- 3번 `클래스가 태그보다 우선순위가 높다`

```css
.box_wrap {
  background-color: hotpink;
}
div {
  background-color: yellowgreen;
}
```

- 4번 `클래스가 중복이라면 작성순서가 나중이 우선권`

```html
<style>
  .box_wrap {
    background-color: hotpink;
  }
  .hi {
    background-color: yellowgreen;
  }
</style>
<div class="box_wrap hi">안녕</div>
```

- 5번 `아이디는 최우선권을 가진다.`

```html
<style>
  #gogo {
    background-color: brown;
  }
  .box_wrap {
    background-color: hotpink;
  }
  .hi {
    background-color: yellowgreen;
  }
</style>
<div id="gogo" class="hi box_wrap">안녕</div>
```

- 6번 '단계 선택이 범위선택 보다 우선권 가짐`

```html
<style>
  ul > li > a {
    background-color: red;
  }
  ul a {
    background-color: green;
  }
</style>
<ul class="manu">
  <li><a href="#">HTML</a></li>
  <li><a href="#">CSS</a></li>
  <li><a href="#">JS</a></li>
</ul>
```

### 5.2. (우선순위 무시하고) 무조건 적용하기

```html
<style>
  div {
    background-color: yellow !important;
  }
</style>
<div style="border-color: green">안녕</div>
```

### 5.3. 우선 순위 정리

- 작성 순서를 고려함.
  `태그 < 클래스 < 아이디 < 인라인`
- 랜더링 과정을 고려함
  ` 태그 >> 태그 구조(DOM) >> 태그 >> css >> 클래스 >> css >> 인라인 css >>`
- 웹브라우저의 F12키를 눌러 개발자모드를 참조하자.
- `!important`는 정말 해결이 필요한 곳에만 활용

## 6. 글꼴 설정

- 반드시 글꼴 설정 후 작업이 진행 되어야 합니다.
- 글자의 종류와 글자 간의 간격, 행간의 간격, 글꼴의 크기 등이 너비, 높이 등이 단위가 됩니다.
- body 셋팅을 위한 자료임.
  (폰트 자체의 값이 레이아웃에 영향을 미치기 때문에 글꼴부터 잡고 시작해야함)

### 6.1. 글꼴 구하기

- 구글폰트 (https://fonts.google.com/)
- 눈누 (https://noonnu.cc/font_page/pick)
- 깃허브 (https://github.com/orioncactus/pretendard)
- 아이콘폰트 (https://fontawesome.com/icons)

```css
body {
  width: 100%;
  /* rem : 비율 */
  font-size: 1rem;
  /* ▼디자인 보고 수정 */
  color: #000000;
  /* 글꼴이 필요로 함. */
  /* 앞 글꼴이 적용되지 않으면 뒷 글꼴이 적용된다. , 글꼴의 이름이 띄어쓰기가 있으면 "ㅇㅇ ㅇㅇ" 쌍따옴표로 묶어준다.*/
  font-family: "Roboto", "Nanum Gothic", sans-serif;
  /* 일반 nomal :400  이하는 얅음, 700부터는 bold   각 폰트마다 가지는 폰트웨이트가 있으니 참고할 것 */
  font-weight: 400;
  /* normal : 기본 italic - 기울기  */
  font-style: normal;
  font-optical-sizing: auto;
  font-style: normal;
}

/* @font-face {}  :  글꼴을 만들때 사용하는 css 구문 */
```

### 6.2. 글꼴 활용하기

- css/common.css 참조

## 7. CSS 살펴보기

- margin (영역 바깥으로의 여백)

  - (주의 : margin-top은 오류가 발생할 수 있다. )
