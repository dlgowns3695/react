import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let navName = '토너';
  let classCustom = 'red';

  // useState(기본값), 처음엔 초기값, 두번쨰는 함수 (a를 바꿔주는)
  // let [a, setA] = useState(0);
  let [b, setB] = useState(0);
  let [c, setC] = useState(0);
  let [title, setTitle] = useState(['토너추천','에센스추천','앰플추천']);
  let [like, setLike] = useState([0,0,0]);

  return (
    <>
      <div className='bg-black text-white flex justify-between items-center h-[80px]'>
        <h4>LOGO</h4>
        <div className='flex gap-10'>
          <div className={classCustom}>{navName}</div>
          <div className={classCustom}>{navName}</div>
          <div className={classCustom}>{navName}</div>
          <div className={classCustom}>{navName}</div>
        </div>
        <div>
          <a href='/'>로그인</a>
        </div>



      </div>

      <div>
        <div className='flex justify-between items-center p-[20px] border-b border-[#111]'>
          <h4 onClick={()=>{
            /* 
              state 변경함수 작동원리
              1) 기존 state === 신규 state // 변경하지 않음
              2) Araay는 참조가 같기 때문임

            */
           // ...like 괄호없애기 0,0,0
           let copy = [...like];
           copy[0] = copy[0] + 1;
            setLike(copy);
          }}>{title[0]}👍{like[0]}</h4>
          <p>글내용</p>
          <p>0</p>
        </div>

        <div className='flex justify-between items-center p-[20px] border-b border-[#111]'>
          <h4 onClick={()=>{
             let copy = [...like];
             copy[1] = copy[1] + 1;
             setLike(copy);
          }}>{title[1]}👍{like[1]}</h4>
          <p>글내용</p>
          <p>0</p>
        </div>

        <div className='flex justify-between items-center p-[20px] border-b border-[#111]'>
          <h4 onClick={()=>{
            let copy = [...like];
            copy[2] = copy[2] + 1;
            setLike(copy);
          }}>{title[2]}👍{like[2]}</h4>
          <p>글내용</p>
          <p>0</p>
        </div>
      </div>
    </>


  );
}

export default App;
