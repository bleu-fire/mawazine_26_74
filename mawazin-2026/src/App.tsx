//resource for the project
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

// Components  don't forget 
import { Navbar } from "./components/Navbar"
// pages don't forget
import { Home } from "./pages/Home"
import { ArtistDetailPage } from "./pages/ArtistDetailPage"
import { Passeport } from "./pages/Passeport"
import { Planning } from "./pages/Planning"
import Programme from "./pages/Programme"


// app function  in the  to run  code
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
       
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ArtistDetailPage" element={<ArtistDetailPage/>} />
        <Route path="/Passport" element={<Passeport/>} />
        <Route path="/Planning" element={<Planning/>} />
        <Route path="/Programme" element={<Programme/>} />

        </Routes>
    </BrowserRouter>

  )
}

export default App