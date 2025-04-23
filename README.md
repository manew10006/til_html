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

## 3. 선택하는 법(selector)

### 1. 태그 선택법

```css
태크 {
}
```

- css/common.css 예제

```css
@charset "utf-8"
* {
  /* 모든 값 초기화 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 탭키 비활성화 */
  /* outline-style: none; */
}

/* 태그선택  :추가하는 각 태그별 기본값 */
a {
  text-decoration: none;
  /* ▼디자인 보고 수정 */
  color: #000000;
}
ul {
  list-style: none;
}
html {
  width: 100%;
  /* ▼디자인 보고 수정 */
  font-size: 12px;
}
body {
  width: 100%;
  /* rem : 비율 */
  font-size: 1rem;
  /* ▼디자인 보고 수정 */
  color: #000000;
}
```

### 2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```
