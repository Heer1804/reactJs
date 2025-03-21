import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import Header from "./components/Header"
import Display from "./components/Display"
import Update from "./components/Update"

function App() {

  return (
    <>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/display" element={<Display />}/>
          <Route path='/update/:index' element={<Update />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
