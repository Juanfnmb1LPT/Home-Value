import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'

function App() {
  return (
    <BrowserRouter basename="/Home-Value">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
