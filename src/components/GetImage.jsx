import React, { useEffect, useState } from 'react'
import useWeb3Context from '../contexts/useWeb3Context'

import axios from 'axios';

const GetImage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const { web3State } = useWeb3Context();
    const { contractInstance, selectedAccount } = web3State;
    const [images, setImages] = useState([]);

    const getImageHashes = async () => {
        const imageHashes = await contractInstance.viewFiles(selectedAccount);
        return Object.values(imageHashes);
    }

    useEffect(() => {
        getImage();
    }, [currentPage]);

    const getImage = async () => {
        const ipfsHashes = await getImageHashes();

        const URL = `http://localhost:3000/api/getImage?page=${currentPage}`;
        const config = {
            headers: {
                "x-access-token": localStorage.getItem("jwt")
            }
        }
        const res = await axios.post(URL, ipfsHashes, config);
        const imagesData = res.data.decryptedImgData;
        setImages(imagesData);
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center mt-2 bg-zinc-500 p-5 rounded-xl'>
            <p className=' text-2xl'>My Images</p>
            <div className=' mt-2 flex gap-10 justify-center items-center'>
                {images.length
                    ?
                    images.map((img, index) => {
                        return (
                            <img
                                key={index}
                                src={`data:image/jpeg;base64,${img}`}
                                className=' w-40 h-40 rounded-md shadow-md'
                            ></img>
                        )
                    })
                    :
                    <p>No images found</p>
                }
            </div>

            <div className='w-full flex gap-5 justify-between'>
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage == 1}
                    className='bg-zinc-600 p-2 rounded-md hover:bg-zinc-500'
                >
                    {`<< Previous`}
                </button>
                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className='bg-zinc-600 p-2 rounded-md hover:bg-zinc-500'
                >
                    {`Next >>`}
                </button>
            </div>
        </div >
    )
}

export default GetImage;