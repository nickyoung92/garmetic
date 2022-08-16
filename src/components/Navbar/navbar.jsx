/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import  { providers } from 'web3modal';
import detectEthereumProvider from '@metamask/detect-provider'

const Navbar = ({ lr, nr, theme }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  const [web3, setWeb3] = useState(null)
  const [account, setAccount] = useState(null)
	
  //WebModal
	const [multipleInjected, setMultipleInjected] = useState(null)
	const [providersLength, setProvidersLength] = useState(null)

  const loadWeb3 = async () => {
		if (typeof window.ethereum !== 'undefined' && !account) {
			const web3 = new Web3(window.ethereum)
			setWeb3(web3)

			const accounts = await web3.eth.getAccounts()

			if (accounts.length > 0) {
				setAccount(accounts[0])
        console.log(account)
			} else {
				console.log('Please connect with MetaMask')
			}

			window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
				window.location.reload();
			});

			window.ethereum.on('chainChanged', (chainId) => {
				// Handle the new chain.
				// Correctly handling chain changes can be complicated.
				// We recommend reloading the page unless you have good reason not to.
				window.location.reload();
			});
		}
	}
  // MetaMask Login/Connect
	const web3Handler = async () => {
		try {
			const providerOptions = {
				walletconnect: {
					package: WalletConnectProvider, // required
					options: {
					  infuraId: "186a0e17f40041d489c490c85776879e" // required
					}
				},
				walletlink: {
					package: CoinbaseWalletSDK, 
					options: {
					  infuraId: "186a0e17f40041d489c490c85776879e" 
					}
				},
				"custom-metamask": {
					display: {
					  logo: providers.METAMASK.logo,
					  name: providers.METAMASK.name,
					  description: providers.METAMASK.description
					},
					package: detectEthereumProvider,
					options: {
					  mustBeMetamask: true,
					  infuraId: "186a0e17f40041d489c490c85776879e"
					},
					connector: async (detectEthereumProvider, options) => {
						console.log("trying now");
						const provider = new detectEthereumProvider(options);
						
						if (provider) {
							if (window.ethereum && window.ethereum.isMetaMask) {
								const web3 = new Web3(window.ethereum.isMetaMask);
								setWeb3(web3);
								if (web3) {
									
									try {
										const providersLength = window.ethereum.providers.length;
										console.log(providersLength);
										console.log(typeof providersLength);
										setProvidersLength(providersLength);
										setMultipleInjected(true);
										console.log(providersLength);
										console.log(typeof providersLength);
										if (typeof providersLength == 'number') {
											try{
												const provider = window.ethereum.providers.find((provider) => provider.isMetaMask);
												console.log("multiple injected is true");
												const accounts = await provider.request({ method: 'eth_requestAccounts' });
												console.log(accounts);
												setAccount(accounts[0])
												window.location.reload();
											} catch (error) {
												window.alert('Connection Denied')
											}
										} else {
										
										}
									} catch (error) {
										if (typeof providersLength == 'number') {
											
										} else {
											const provider = window.ethereum;
											console.log("multiple injected is false");
											const accounts = await provider.request({ method: 'eth_requestAccounts' });
											console.log(accounts);
											setAccount(accounts[0])
										}
		
									}
								}
							} else {
								window.open("https://metamask.io/download/");
								window.alert('You need to download the Metamask chrome extension.');
							}
						} else {
							console.log('Please install MetaMask!');
						}

						await provider.enable();
						console.log(provider);
						return provider;
						
					}
				  }
			  };
			  
			  const web3Modal = new Web3Modal({
				network: "mainnet", // optional
				disableInjectedProvider: true,
				cacheProvider: false, // optional
				providerOptions // required
			  });
			  console.log('before web3ModalConnect')
			  const provider = await web3Modal.connect();
			  console.log('provider is' + provider)
			  const web3 = new Web3(provider);
			  setWeb3(web3);
	
		} catch (error) {
		}
	}
  useEffect(() => {
    loadWeb3()
}, [account]);
  return (
    <nav
      ref={nr}
      className={`navbar nav-scroll navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">

        <Link href="/">
          <a className="text-logo">
           
              <a ref={lr} >GARMETIC</a>
           
          </a>
        </Link>
        

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          <ul className="navbar-nav mr-auto ml-auto">
           
		  	<li className="nav-item">
              <Link href="/">
                <a className="nav-link">MINT</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/roadmap">
                <a className="nav-link">ROADMAP</a>
              </Link>
            </li>
            
            
            <li className="nav-item">
              <Link href="/team" target="_blank" rel="noopener noreferrer">
                <a className="nav-link">TEAM</a>
              </Link>
            </li>
           

            <li className="nav-item">
              <div className="socials">
                  <a className="nav-link" href="https://discord.gg/" target="_blank">
                      <i className="social-btns fab fa-discord"></i>
                  </a> 
             
                  <a className="nav-link" href="https://twitter.com/" target="_blank">
                      <i className="social-btns fab fa-twitter"></i>
                  </a> 
             
                  <a className="nav-link" href="https://instagram.com/" target="_blank">
                      <i className="social-btns fab fa-instagram"></i>
                  </a> 

                  <a className="nav-link" href="https://opensea.io/" target="_blank">
                      <img className="social-btns" style={{height: '24px', width: '24px'}} src="/img/assets/opensea.png" />
                  </a> 
              </div>
            </li>
              

            
                   
          </ul>
          {account ? (
            <button className="nav-wallet">{account.slice(0, 5) + '...' + account.slice(38, 42)}</button>
          ) : (
            <button className="nav-wallet" onClick={web3Handler}>Connect Wallet</button>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
