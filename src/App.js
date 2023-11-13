import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './sass/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
