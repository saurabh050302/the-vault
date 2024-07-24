import { useContext } from "react"
import { web3Context } from "./createWeb3Context"

const useWeb3Context = () => {
    return useContext(web3Context)
}

export default useWeb3Context