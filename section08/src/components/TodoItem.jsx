import { TodoContext } from "../App";
import "./TodoItem.css";
import React, { memo, useContext } from "react";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onDelete, onUpdate } = useContext(TodoContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} onChange={onChangeCheckBox} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

//고차 컴포넌트(HOC)
export default memo(TodoItem, (prevProps, currentProps) => {
  //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 X
  // F -> Props 바뀜 -> 리렌더링 O

  if (prevProps.id !== currentProps.id) return false;
  if (prevProps.isDone !== currentProps.isDone) return false;
  if (prevProps.content !== currentProps.content) return false;
  if (prevProps.date !== currentProps.date) return false;

  return true;
});
