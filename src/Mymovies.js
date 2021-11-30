import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function Mymovies() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default Mymovies;

/*
1. switch로 점수에 따라 별모양으로나오게 하기 8.5
2. 클릭하면 포스터 커지게 하기
3. ...이거 누르면 나머지 보아게 하고 overflow: scroll이용하기
4. 
*/
