import { Route, Routes } from 'react-router'
import AllocateStatsPage from './pages/AllocateStatsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/allocate-stats' element={<AllocateStatsPage />} />
    </Routes>
  )
}

export default App
