import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/constants";
import usePageTitle from "../hooks/usePageTitle";
//useSearchParams --> query parameter

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle("Diary");

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>Loding...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
