import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
