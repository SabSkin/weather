import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Today from "./components/Today";
import FourDays from "./components/FourDays";
import { InputProvider } from "./components/Input";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InputProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Today />}></Route>
              <Route path="4days" element={<FourDays />}></Route>
            </Route>
          </Routes>
        </InputProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
