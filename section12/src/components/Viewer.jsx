import { getEmotionImage } from "../util/\bget-emotion-image";
import { emotionList } from "../util/constants";
import "./Viewer.css";
import React from "react";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (i) => String(i.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <p className="content_wrapper">{content}</p>
      </section>
    </div>
  );
};

export default Viewer;
