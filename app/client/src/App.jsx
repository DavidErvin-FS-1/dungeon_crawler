import { Route, Routes } from 'react-router'
import AllocateStatsPage from './pages/AllocateStatsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProloguePage from './pages/ProloguePage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/prologue' element={<ProloguePage />} />
    </Routes>
  )
}

export default App
