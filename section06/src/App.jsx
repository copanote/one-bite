import "./App.css";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Viewer from "./components/Viewer";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  //의존선 배열
  //dependency array
  //deps

  //1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []); //deps에 빈배열이 들어가 있으면  최초 마운트 할 떄만 호출

  const isMount = useRef(false);
  //2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); //deps를 생략하면 마운트, 리렌더링 할 때마다 호출. 마운트시에는 생략하고 싶다면 useRef 플래그 변수를 활용할 것

  //3. 언마운트: 죽음

  const onClickButton = (value) => {
    setCount(count + value); //비동기로 동작
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : ""}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
