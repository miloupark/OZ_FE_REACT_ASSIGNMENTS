// 3. props를 사용하여 count 값을 받아오세요.
export default function CountResult({ count }) {
  // 4. 받아온 count 횟수를 아래에 표기할 수 있도록 하세요.
  return <p>{`오늘의 클릭 수 👉 ${count}번!`}</p>;
}
