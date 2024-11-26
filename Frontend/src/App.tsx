import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainPage from "./Pages/Main.page"
import { Player } from "./Pages/Player.page"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to='/' />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/Player' element={<Player />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
