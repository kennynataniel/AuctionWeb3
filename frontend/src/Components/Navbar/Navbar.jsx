import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/BLOCKBIDDERLANDSCAPE.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { errorNotification } from '../../plugins/Notification';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const [isRequestPending, setIsRequestPending] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleAccountsChanged = (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                localStorage.setItem('walletAddress', accounts[0]);
            } else {
                setWalletAddress('');
                localStorage.removeItem('walletAddress');
            }
        };

        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged);
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            }
        };
    }, []);

    const connectWallet = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            if (isRequestPending) {
                console.log("Please wait for the current request to complete.");
                return;
            }

            setIsRequestPending(true);
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    localStorage.setItem('walletAddress', accounts[0]);
                    console.log(`Connected: ${accounts[0]}`);
                } else {
                    console.log("No accounts found. Connect to MetaMask using the Connect button.");
                }
            } catch (err) {
                console.error('Error connecting to MetaMask:', err);
                if (err.message.includes('User rejected the request')) {
                    errorNotification('Connection request was rejected by the user.');
                } else {
                    errorNotification('An error occurred while connecting to MetaMask. Please try again.');
                }
            } finally {
                setIsRequestPending(false);
            }
        } else {
            console.log("Please install MetaMask");
            errorNotification('MetaMask is not installed. Please install MetaMask to proceed.');
        }
    };

    return (
        <nav className={`containerNavBar ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li>
                    <ScrollLink to='hero' smooth={true} offset={0} duration={500}>
                        <RouterLink className='custom-link' to='/'> Home </RouterLink>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to='product' smooth={true} offset={0} duration={500}> Market </ScrollLink>
                </li>
                <li>
                    {walletAddress ? (
                        <RouterLink className='custom-link' to='/create'> Create </RouterLink>
                    ) : (
                        <span onClick={connectWallet} className='custom-link'> Create </span>
                    )}
                </li>
                <li>
                    <ScrollLink to='contact' smooth={true} offset={0} duration={500}> Contact Us </ScrollLink>
                </li>
                <li>
                    <button onClick={connectWallet} className='btn btn-light'>
                        <span className='is-link has-text-weight-bold'>
                            {walletAddress.length > 0 
                                ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
                                : "Connect Wallet"
                            }
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
