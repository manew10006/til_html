# CSS 정리

## 1. 추천 라이브러리

- 팀내 작업 시 협의하여 둘중 하나를 채택한다
- reset.css ( https://meyerweb.com/eric/tools/css/reset/ )
- nomalize.css ( https://necolas.github.io/normalize.css/ )

- 예제 ( nomalize )
- 무조건 젤 위에 작성한다

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 2. 개선사항

- header.css 는 무조건 z-index: 999 이상
- header 영역이 스크롤 시 `position: fixed 되면서 높이가 반영 안됨`

반응형 필수
웹 브라우저 너비(view port)에 맞도록 div들을 위치조절, 너비조절, 속성 조절함

- 넓은 화면을 먼저 작성하고 작은 화면을 고친다
