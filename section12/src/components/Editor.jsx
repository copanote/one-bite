import "./Editor.css";

import React from "react";

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section"></section>
      <section className="content_section"></section>
      <section className="button_section"></section>
    </div>
  );
};

export default Editor;
