import "./App.css"
import Login from "./pages/login/Login"
import Logo from "./assets/logo.svg"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import SummationTraining from "./pages/summation-training/SummationTraining"

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/SummationTraining" element={<SummationTraining />}/>
      </Routes>
      <footer>كلية الحاسبات والمعلومات بجامعة طنطا</footer>
    </div>
  )
}

export default App
