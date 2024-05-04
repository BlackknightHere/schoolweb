import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="createstudent" element={<CreateStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
