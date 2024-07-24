import React from 'react'
import { Link } from "react-router-dom"

import useWeb3Context from '../contexts/useWeb3Context'

const Home = () => {
    const { web3State } = useWeb3Context();

    return (
        <div className='flex-col gap-4'>
            <div>Home</div>
            <div>{web3State.selectedAccount}</div>
            {/* <Link to={"/wallet"} className=' text-blue-600'>Wallet</Link> */}
        </div>
    )
}

export default Home