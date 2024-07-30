import { ethers } from "ethers"
import contractAbi from "../constants/contractAbi.json"
import toast from "react-hot-toast"
import axios from "axios"

export const connectWallet = async () => {
    try {
        if (!window.ethereum) {
            throw new Error("Metamask not installed!");
        }

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const selectedAccount = (accounts[0]);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const message = "Welcome to the Vault!";
        const signature = await signer.signMessage(message);
        // console.log(signature);

        const URL = `http://localhost:3000/api/auth/${selectedAccount}`;
        const res = await axios.post(URL, { signature });
        // console.log(res.data);
        localStorage.setItem("jwt", res.data.jwt);

        const contractAddress = "0x12FFd00a87D8AAE797281D69A840ed2e6281611F";
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

        toast.success("Wallet Connected Successfully!");
        return { selectedAccount, contractInstance };

    } catch (error) {
        console.log(error);
        toast.error("Wallet Connection Failed!");
    }

}