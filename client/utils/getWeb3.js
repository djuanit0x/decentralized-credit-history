import Web3 from 'web3';
// import getConfig from 'next/config';

const getWeb3 = async () => {
    if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
        if (window.ethereum) {
            // Modern dapp browsers...
            const web3 = new Web3(window.ethereum);
            return web3;
        } else if (window.web3) {
            // Legacy dapp browsers
            // Use Mist/MetaMask's provider.
            const web3 = new Web3(window.web3.currentProvider);
            console.log('Injected web3 detected.');
            return web3;
        }
    } else {
        // Fallback to localhost; use dev console port by default...
        if (process.env.NODE_ENV === 'development') {
            const provider = new Web3.providers.HttpProvider('http://localhost:8545');
            const web3 = new Web3(provider);
            console.log('No web3 instance injected, using Local web3.');
            return web3;
            // `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY_END_POINT_2}`
        } else {
            const provider = new Web3.providers.HttpProvider(
                `https://rinkeby.infura.io/v3/3d5c47b108a844279f60a152928ac80d`
            );
            const web3 = new Web3(provider);
            return web3;
        }
    }
};
export default getWeb3;
