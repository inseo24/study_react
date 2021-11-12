- 리액트가 어떤 문제를 해결했나?
- Declarative
- Component Architecture
- UI Layer
- Unidirectional Data Flow

1. The birth of React
    
    자바스크립트가 각 브라우저마다 다르게 동작했음
    
    → 제이쿼리가 그걸 통일시키는 쉬운 API를 제공해서 각광 받았음
    
    하지만 사이트가 점점 커지면서 자바스크립트 파일 사이즈가 매우 커지기 시작했음. 
    
    그러면서 등장한게 SPA
    
    기존에는 HTML, CSS, JS 파일을 서버에서 클라이언트로 보내주는 식이었고 AJAX가 이용됐다. 
    
    하지만 이제 한 번만 보내주고 자바스크립트 파일이 DOM 파일을 수정함. 한 번 보낸 이후부턴 서버와 통신할 필요가 없어짐
    
    앵귤러는 컨테이너를 만들어서 wrap해서 구성함(MVC 개념에서 나옴) → 하지만 화면에서 한 부분과 다른 부분 사이 데이터를 교환하는 작업들이 굉장히 많아져서 더 복잡해짐. 이걸 앵귤러로 처리하기에 버그도 많고 힘들어짐. 
    
    페이스북 같은 경우 ad 처리하기에 더 힘들어지고 issue가 많아짐, 각각의 요소들끼리 데이터 전송하다 보니 처리가 잘 안됨 그래서 새로운 아키텍처, 데이터 플로우가 필요해짐
    
    그러다가 나온 게 React고 이 문제를 잘 해결했다.
    

1. React Concepts
    - Don't touch the DOM. I'll do it.
        
        현존하는 많은 프레임워크들은 돔을 직접 조작한다. 
        
        imperative 패러다임 : 돔을 직접 조작해서 요소를 변경, 이러면 edge case 에서 요소들의 관계를 파악하기 어려움.
        
        declarative 패러다임 : 자바스크립트 오브젝트를 선언하면(화면이 어떻게 되야할 지) 리액트가 이걸 DOM에 어떻게 적용할지 알아서 처리해준다. (리액트에게 state를 알리면 된다.)
        
    
2. Component Architecture
    - Build websites like lego blocks
        
        reusable components를 사용, 한 컴포넌트는 한 function과 같음
        
        다른 것과 함께 사용되기도 하고 동일한 것에 다시 사용이 가능하다.
        
3. One way data flow
    - Unidirectional data flow
        
        컴포넌트는 JSX로 작성되고 여기에 state까지 더해져 리액트를 구성함
        
        이걸로 VirtualDOM을 만든다. 이걸로 리액트에선 실제 DOM과 비교해서 변경할 것만 변경한다. 
        
        예를 들어, 화면에서 누가 버튼을 클릭하면 그 상태가 state에 반영되고 이 state와 컴포넌트를 결합해 돔에 반영되는데, 데이터의 방향이 단방향으로 흐른다. 
        
        리액트에서 데이터는 아래로 흐르게 제한된다.(즉, 단방향)
        
        이러면 디버깅하기 쉽고 파악하기도 더 쉬움. 
        
4. UI Library
    - UI, The rest is up to you.
        
        리액트는 청사진일뿐, 여러 기술과 결합해서 개발될 수 있고 다양한 기기의 개발에 사용될 수 있다. (React Everywhere)
        
5. 어떻게 좋은 리액트 개발자가 될 수 있을까요~!?
    
     1. 컴포넌트를 결정하고
    
    1. State로 할 걸 결정하고 어디에 둘 지 결정
    2. state가 변경될 때 무엇이 변경되는지를 파악하면 됩니다!