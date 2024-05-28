import { useState, useRef, useCallback, createContext } from "react";

import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "Studying React...",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Drinking Americano",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Javascript",
    date: new Date().getTime(),
  },
];

//Context의 선언은 컴포넌트 외부에 선언한다.
export const TodoContext = createContext();
console.log(TodoContext);

function App() {
  const [todo, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = useCallback(
    (c) => {
      const newTodo = {
        id: idRef.current++,
        isDone: false,
        content: c,
        date: new Date().getTime(),
      };

      setTodos([newTodo, ...todo]);
    },
    [todo]
  );

  const onUpdate = useCallback(
    (targetId) => {
      //todos State의 값들 중에
      //targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

      //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
      setTodos(
        todo.map((t) => {
          if (t.id === targetId) {
            return {
              ...t,
              isDone: !t.isDone,
            };
          } else {
            return t;
          }
        })
      );
    },
    [todo]
  );

  const onDelete = useCallback(
    (targetId) => {
      setTodos(todo.filter((t) => t.id !== targetId));
    },
    [todo]
  );

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
