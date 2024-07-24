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
      <div className=" w-full h-screen bg-zinc-900 p-10 m-auto text-white text-5xl">
        <Routes>
          <Route path="/home" element={web3State.selectedAccount ? <Home /> : <Navigate to={"/wallet"} />} />
          <Route path="/wallet" element={web3State.selectedAccount ? <Navigate to={"/home"} /> : <Wallet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
