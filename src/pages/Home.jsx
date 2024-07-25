import React from 'react'

import GetImage from "../components/GetImage"
import UploadImage from '../components/UploadImage'

import useWeb3Context from '../contexts/useWeb3Context'

const Home = () => {
    const { web3State } = useWeb3Context();

    return (
        <div className='flex-col gap-10'>
            <div>Home</div>
            <div>{web3State.selectedAccount}</div>
            <UploadImage />
        </div>
    )
}

export default Home