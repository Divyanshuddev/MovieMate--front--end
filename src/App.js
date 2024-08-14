import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Friends from "./components/Friends";
import MovieDetail from "./components/MovieDetail.tsx";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      
    </Routes>
    </>
  );
}

export default App;
