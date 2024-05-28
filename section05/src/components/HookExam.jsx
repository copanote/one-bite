import { useState } from "react";

//3가지 hook관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수는 없다.
// 3. 나만의 훅(custom Hook) 직접 만들 수 있다.

const HookExam = () => {
  const state = useState();

  return <div>HookExam</div>;
};

export default HookExam;
