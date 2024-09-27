import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./Pages/Main.page"
import GoodbyeWorld from "./Pages/GoodBye.page"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/goodbyeWorld' element={<GoodbyeWorld />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
