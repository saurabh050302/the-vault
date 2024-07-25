import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Wallet from "./pages/Wallet"
import Home from "./pages/Home"
import useWeb3Context from "./contexts/useWeb3Context"

function App() {
  const { web3State } = useWeb3Context()

  return (
    <>
      <Toaster position="bottom-center" />
      <div>
        <Routes>
          <Route path="/home" element={web3State.selectedAccount ? <Home /> : <Navigate to={"/wallet"} />} />
          <Route path="/wallet" element={web3State.selectedAccount ? <Navigate to={"/home"} /> : <Wallet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
