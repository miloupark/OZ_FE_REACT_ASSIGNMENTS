import { useState } from "react";
import CountResult from "./CountResult";
import "./App.css";

function Count({ count }) {
  return <h2>count: {count}</h2>;
}

function App() {
  // 1.useState를 사용하여 상태를 활용하여 기능을 구현하세요.
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>📟 클릭 챌린지 </h1>
      <Count count={count} />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      {/* 2. 상태로 관리하고 있는 count 값을 props를 통해 CountResult 컴포넌트로 전달하세요. */}
      <CountResult count={count} />
    </>
  );
}

export default App;
