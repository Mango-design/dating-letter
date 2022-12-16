import { useState } from 'react'
import reactLogo from './assets/react.svg'
import users from "./assets/users.json"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [index, setIndex] =useState(Math.floor(Math.random()*users.length));


  const colors =["orange","red","blue","green","gray","purple","peru","tomato"]
  const color =colors[Math.floor(Math.random()*colors.length)]

  document.body.style =`background: ${color}`




  const random = () =>{
    setIndex(Math.floor(Math.random()*users.length))
  }

  return (
    <div className="App">
     <div className='bg' style={{color:color}}>
      <div className='content'>
        <div className='d-flex'>
        <div className='icon'>
        <i class="fa-solid fa-quote-left"></i>
        </div>
        <div className='text'>
        <p>{users[index].quote}</p>
        </div>
        </div>
      </div>
      <p className='author'>{users[index].author}</p>
      <div className='btn'>
        <button className='btn-next' onClick={random} style={{background:color}}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
     </div>
    </div>
  )
}

export default App
