import React from 'react'

import GetImage from "../components/GetImage"
import UploadImage from '../components/UploadImage'

import useWeb3Context from '../contexts/useWeb3Context'

const Home = () => {
    const { web3State } = useWeb3Context();


    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 text-gray-200">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#5a5a5a,transparent)] flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl gradient-text md:text-[60px]">
                    The Vault - Home
                </h1>
                <p className=' tracking-wider mt-1 mb-5'>{web3State.selectedAccount}</p>
                <UploadImage />
            </div>
        </div>);
}

export default Home