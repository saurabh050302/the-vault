import React from 'react'

import useWeb3Context from "../contexts/useWeb3Context"
import { connectWallet } from "../utils/connectWallet"

const Wallet = () => {
    const { updateWeb3State } = useWeb3Context()

    const handleWalletConnection = async () => {
        const { selectedAccount, contractInstance } = await connectWallet();
        updateWeb3State({ selectedAccount, contractInstance });
    }

    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 text-gray-200">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#5a5a5a,transparent)] flex flex-col justify-center items-center gap-10">
                <h1 className="font-bold text-[42px] gradient-text md:text-[60px]">
                    The Vault
                </h1>
                <button
                    className="relative px-12 py-4 text-white bg-sky-400 rounded-md hover:bg-sky-600 font-semibold"
                    onClick={handleWalletConnection}
                >
                    Connect Wallet
                </button>
            </div>
        </div>);
}

export default Wallet