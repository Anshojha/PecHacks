import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Details from "./Components/Details";
import Payee from "./Components/Paye";
import Login from "./Components/Login";
import Rooms from "./Components/Rooms";
import Completed from "./Components/Completed";
import Payment from "./Components/Payment1";
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
        getDefaultWallets,
        RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig, WagmiConfig } from 'wagmi';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { xdcTestnet } from "viem/chains";

const { chains, publicClient } = configureChains(
        [xdcTestnet],
        [
                alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
                publicProvider()
        ]
);
const { connectors } = getDefaultWallets({
        appName: 'My RainbowKit App',
        projectId: 'YOUR_PROJECT_ID',
        chains
});
const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient
})

const App = () => {
        return (
                <WagmiConfig config={wagmiConfig}>
                        <RainbowKitProvider chains={chains}>
                                <Router>
                                <Navbar />
                                        <Routes>
                                                <Route path="/" element={<>    <Welcome /></>} />
                                                <Route path="/owner" element={<>   <Details /></>} />
                                                <Route path="/rooms" element={<>   <Rooms /></>} />
                                                <Route path="/tenant" element={<>   <Payee /></>} />
                                                <Route path="/dashboard" element={<>  <Login /></>} />
                                                <Route path="/Payment" element={<>  <Payment /></>} />
                                                <Route path="/Completed" element={<>  <Completed /></>} />
                                        </Routes>
                                </Router>
                        </RainbowKitProvider>
                </WagmiConfig>
        );
};

export default App;