## 1. 리액트는 HTML대신 JSX를 사용한다.

- jsx는 리액트로 프로젝트 개발할때만 사용
- 공식적인 자바스크립트 문법은 아니다.
- JSX파일에 자바스크립트와 HTML을 동시에 작성하여 편리하다.

## 2. 리액트는 최상단에 하나의 태그(요소로) 감싸야한다.

<></>

## 3. 하나로만 되어있는 태그는 꼭 닫아줘야 한다.
<img><img/>
<img />

## 4. 클래스는 className으로 써야 한다.
이유? class는 예약어 (자바스크립트에 이미 있음)


## 5. style 작성할 때는 {{}}
{{속성명(camelCase) : '속성값'}}

background-color -> backgroundColor

## 6. 변수를 html에 넣을 때에는 {}
{변수명}

## 7. 클릭이벤트
onClick = {실행할함수명}
onClick = {function(){실행할코드}}
onClick = {()=>{실행할코드}}

## 8. 라이브러리 설치 npm

npm install 라이브러리명
npm i 라이브러리명
npm remove 라이브러리명

npx react-create-app@latest ./
npx 설치X 한번실행하는 뜻


## 9. 모든 데이터는 변수말고 state에 담아서 사용

let [a,b] = [10,20]
let [like, setLike] = useState(0);

setLike(값변경) => like = 변경된

변수대신 사용하는 이유?
state는 변동사항이 생기면 state를 사용하고있는 html도 자동으로 재렌더링

(바뀐것만 재렌더링)