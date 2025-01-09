import { useState, useRef } from 'react'
import '../src/style/main.scss'
import '../src/style/reset.scss'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import TodoItem from './components/TodoItem'
const mockData = [
  {
    id: 0,
    idDone: false,
    content: "리엑트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    idDone: false,
    content: "저녁 먹기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    idDone: false,
    content: "과자 먹기",
    date: new Date().getTime(),
  },
]
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);


  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      idDone: false,
      content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <div className="todolist-wrap">
      <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List></List>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  )
}

export default App
