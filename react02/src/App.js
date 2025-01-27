import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let arr = ['짱구','짱아','흰둥이'];

  arr.map((v,i)=>{
    // console.log(v)
    // console.log(i)
  });
 
  
  return (
    <>
      {
        3 > 1 ? <List /> : console.log('출력안함')
      }
      
      
    </>
  );
}
const List = ()=>{
  let [detail, setDetail] = useState(false);
  let [title, setTitle] = useState(['타이틀1','타이틀2','타이틀3']);
  let [count, setCount] = useState([0,0,0]);

  let today = new Date(); // 날짜 가져오기
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 일

  let [t, setT] = useState(0);

  let [val, setVal] = useState('');

  return(
    <div className='bg-slate-300 h-full'>
      {
        [0,1,2].map((v,i)=>{
          return(
            <span key={v}>{v}</span>
          )
        })
      }
      <ul className='p-5'>
          {
            title.map((v,i)=>{
              return (
                <li key={v} className='bg-white shadow-md rounded-2xl p-5 mb-5'>
                <h4 onClick={()=>{
                  detail === false ? setDetail(true) : setDetail(false);

                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setCount(copy);

                  setT(i);
                  


                
                }} className='mb-2'>{title[i]}</h4>
                <p className='mb-2'>{`${year} - ${month} - ${date}`}</p>
                <div className='mb-2 flex'>
                  <p>조회수</p>
                  <p>{count[i]}</p>
                </div>
                <p className='mb-2'>
                  글내용글내용글내용글내용글내용글내용글내용
                </p>
                <button onClick={()=>{
                  let copy = [...title];
                  copy.splice(i,1);
                  setTitle(copy);
                }}>글삭제</button>
              </li>

              )
            })
          }

          <input type='text' onChange={(e)=>{
            setVal(e.target.value);
            console.log(val);
          }}/>
          <button onClick={()=>{
            let write = () => {
              let copy = [...title];
              copy.unshift(val); // 배열 시작부분에 요소 추가해주는 함수
              setTitle(copy);
            }
            val === '' ? alert('제목을 입력해주세요.') : write();
          }}> 글추가</button>
      </ul>

      {
        detail === true ? <Detail title ={title} color={'skyblue'} textBlack = {'black'} nowDate = {`${year} - ${month} - ${date}`} t = {t} setTitle = {setTitle}/> : null
      }
       
    </div>
  )
}

const Detail = (props)=>{
  console.log(props)
  return(
    <div className='w-full bg-black text-white py-5' 
    style={{backgroundColor : props.color , color : props.textBlack}}>
      
      <h4  className='mb-2'>{props.title[props.t]}</h4>
      <p className='mb-2'>{props.nowDate}</p>
      <p>글내용</p>
      <button onClick={()=>{
        props.setTitle(['타이틀4','타이틀5','타이틀6'])
      }}>
        Click
      </button>
    </div>
  )
}

export default App;
