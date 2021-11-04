### CSS 작성 방법

- 일반적인 CSS 파일로 작성
    
    이름이 충돌할 가능성이 있음
    
- css-module로 작성
    
    .module.css
    
    객체 형식, 해시값이 붙어서 각 클래스명이 고유한 이름을 갖게 되어 이름이 충돌하지 않음
    
    build 해보면 확인할 수 있음, 혹은 console 찍어서.
    
    className을 이용할 때 npm install classnames라는 패키지를 설치해 이용하면 좀 더 간편하게 이용 가능.
    
    cn(Style.Button) 이런 식, 코드를 다양하게 작성할 수 있음
    
    예를 들어, 조건부 렌더링 등
    
- Sass로 작성
    
    css와 비슷하지만 별도의 문법을 사용해서 좀 더 재사용성 높게 코드 작성이 가능하다.
    
    CRA에서 SASS를 이용하려면 node-sass 라는 패키지 install 해서 사용, 스타일을 변수로 사용 가능
    
- css in js
    
    css 코드도 자바스크립트 코드처럼 재사용 가능한 구조로 작성 가능, 동적으로 css 코드를 작성하기도 쉬움
    
    styled-components 라이브러리를 설치해서 사용