import { BrowserRouter, Routes, Route, } from "react-router-dom"




// Components  don't forget 
import { Navbar } from "./components/Navbar"
// pages don't forget
import { Home } from "./pages/Home"
import "./index.css"





function App() {
  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App