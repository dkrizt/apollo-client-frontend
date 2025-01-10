import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Nav from './components/Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Authors />} /> {/* Default route */}
          <Route path="/authors" element={<Authors />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add" element={<NewBook />} />
          <Route path="*" element={<div>Page not found</div>} />{' '}
          {/* Fallback for undefined routes */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
