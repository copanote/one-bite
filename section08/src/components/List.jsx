import React, { useState, useMemo, useContext } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const List = () => {
  const { todo } = useContext(TodoContext);
  console.log(todo);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFilterDate = () => {
    if (search === "") {
      return todo;
    }

    return todo.filter((t) =>
      t.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = onFilterDate();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((t) => t.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  //의존성배열 : deps에 인수가 없으면 최초 한번만 호출 함.

  return (
    <div className="List">
      <h4>Todo List🥦</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="todos_wrapper">
        {filteredData.map((t) => {
          return <TodoItem key={t.id} {...t} />;
        })}
      </div>
    </div>
  );
};

export default List;
