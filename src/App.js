import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Friends from "./components/Friends";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
    </>
  );
}

export default App;
