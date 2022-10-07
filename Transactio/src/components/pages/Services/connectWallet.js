import Web3 from "web3";


export const getWeb3 = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        return web3
    }
};