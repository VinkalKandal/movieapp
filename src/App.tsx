import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './features/Dashboard'
import Details from './features/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
