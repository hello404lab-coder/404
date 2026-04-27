import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
