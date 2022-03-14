import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//components

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
//pages
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
