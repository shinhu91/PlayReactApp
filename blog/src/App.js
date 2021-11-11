import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [title, setTitle] = useState("")

  function savePost() {
    var _list = [...list]
    _list.unshift(title)
    setList(_list)
  }

  function saveTitle(event){
    const val = event.target.value
    setTitle(val)
  }

  return (
    <div>
      {
        list.map((e, i) => {
          return (
            <div>{e}</div>
          )
        })
      }
      
      <div>
        <input onChange={saveTitle}></input>
        <button onClick={savePost}>저장</button>
      </div>
      
    </div>
  );
} 

function Modal(props) {
  return (
    <div className="modal">
        <h2>{props.posts[props.detailNo].title}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
