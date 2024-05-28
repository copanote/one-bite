import "./Editor.css";
import React, { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChageContents = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    //빈값으로 TODO를 추가하려고 할 떄
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChageContents}
        placeholder="새로운 Todo..."
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
