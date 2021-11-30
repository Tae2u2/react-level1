import { useState } from "react";
import "./Polycoin.css";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    //셋투두에 이미 있는 현재 배열값들에 입력받은 투두를 추가
    setTodos((current) => [todo, ...current]);
    setTodo("");
  };
  return (
    <div className="memo-part">
      <h3 className="memo-title">필요한 정보를 메모하세요📝</h3>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="이 메모는 저장되지 않습니다."
        />
        <button className="add-btn">✅</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li className="memo-list" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
//맵:: 아이템이 배열의 각 값을 받아서 인덱스가 차례대로 붙음 이름일뿐임 변수 달라도됨

export default Todos;
