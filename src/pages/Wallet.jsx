import React from 'react'
import { Link } from "react-router-dom"

import useWeb3Context from "../contexts/useWeb3Context"
import { connectWallet } from "../utils/connectWallet"

const Wallet = () => {
    const { updateWeb3State } = useWeb3Context()

    const handleWalletConnection = async () => {
        const { selectedAccount, contractInstance } = await connectWallet();
        updateWeb3State({ selectedAccount, contractInstance });
    }

    return (
        <div className='flex gap-4'>
            <button onClick={handleWalletConnection}>Connect Wallet</button>
            {/* <Link to={"/home"} className=' text-blue-600'>Home</Link> */}
        </div>
    )
}

export default Wallet