import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MarketplacePage } from './pages/MarketplacePage'
import { MinerDashboard } from './pages/MinerDashboard'
import { GovernmentDashboard } from './pages/GovernmentDashboard'
import { VerificationPage } from './pages/VerificationPage'
import { BuyerDashboard } from './pages/BuyerDashboard'
import { RegistrationPage } from './pages/RegistrationPage'
import { LoginPage } from './pages/LoginPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/miner" element={<MinerDashboard />} />
      <Route path="/government" element={<GovernmentDashboard />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/buyer" element={<BuyerDashboard />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
