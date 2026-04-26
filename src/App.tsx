import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './Landing'
import { Projects } from './Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
