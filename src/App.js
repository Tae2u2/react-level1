import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("call the API");
  }, []); //[안에는 요소를 두개이상 넣을 수 있음 근데 둘 중 하나라도 실행되면 실행됨]
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    } //[]안에 keyword가 변할때만 실행되는 함수
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" />
      <h1>welcome back : your click :: {counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
