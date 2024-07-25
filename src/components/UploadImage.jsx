import React, { useState } from 'react'
import axios from 'axios'

import useWeb3Context from '../contexts/useWeb3Context';
import toast from 'react-hot-toast';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const { web3State } = useWeb3Context();
    const { contractInstance, selectedAccount } = web3State;

    const uploadImageHash = async (ipfsHash) => {
        try {
            const tx = await contractInstance.uploadFile(selectedAccount, ipfsHash);
            console.log(tx);
            toast.success("Hash Uploaded");
        } catch (error) {
            console.log(error);
            toast.error("Hash Upload Failed");
        }
    }

    const handleUploadImage = async () => {
        try {
            const formData = new FormData();
            formData.set("file", file);
            const URL = `http://localhost:3000/api/uploadImage`;
            const res = await axios.post(URL, formData);
            toast.success("Image Uploaded");
            uploadImageHash(res.data.ipfsHash);
        } catch (error) {
            console.log(error);
            toast.error("Image Upload Failed");
        }
    }

    return (
        <div>
            <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUploadImage}>Upload Image</button>
        </div>
    )
}

export default UploadImage