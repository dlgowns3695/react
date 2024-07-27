## 1. Component

- 긴 HTML을 한 단어로 치환할 수 있는 문법
- 작명시 첫글자는 영어대문자로 작명
- function App(){} 내부에서 만들 수 없다.

<언제 사용?>
- 사이트에 반복해서 출현
- 내용이 자주 변경될 거 같을때
- 다른 페이지를 만들때

<사용법>

``` bash
<Component></Component>
<Component />
function Component(){
    return(

    )
}

let Component = () =>{
     return(

    )
}
```

## 2. 조건문
- jsx 안에서는 if, else if 사용 불가
- 삼항연산자 사용

조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드

## 3. 반복문
- jsx안에서는 for 사용 불가
- map() 함수 사용
- key={} : 리액트가 각 요소를 구분하기 위해서

## 4. Props
- 다른 컴포넌트 안에 컴포넌트를 자식 컴포넌트라고 부름
- 부모 컴포넌트의 state는 자식 컴포넌트에서 사용불가
- 자식 컴포넌트에서 부모 컴포넌트로도 전송불가

< 언제사용? >
- 부모 컴포넌트의 state를 자식 컴포넌트에게 전송해줄 때
- 일반 변수, 문자, 숫자, 함수도 전송가능

< 사용법 >
- 부모 컴포넌트 :: <ChildCom 작명={state이름}>
- 자식 컴포넌트 :: function ChildCom(props){}