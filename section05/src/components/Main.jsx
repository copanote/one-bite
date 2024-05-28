import React from "react";

//JSX주의 사항
// 1 . 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 (boolean, undefined, null 등은 렌더링 되지 않음)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나만 있어야 한다.  <></>
const Main = () => {
  const user = {
    name: "shindongwook",
    isLogin: true,
  };

  //   if (user.isLogin) {
  //     return <div>Log In</div>;
  //   } else {
  //     return <div>Log Out</div>;
  //   }
  return <>{user.isLogin ? <div>Log In</div> : <div>Log Out</div>}</>;
};

export default Main;
