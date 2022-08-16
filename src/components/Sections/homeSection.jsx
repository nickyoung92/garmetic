import React from 'react'
import Split from '../Split'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import  { providers } from 'web3modal';
import detectEthereumProvider from '@metamask/detect-provider'








// Import ABI + Config
import CONTRACTS from '../../abis/NFT.json';
import CONFIG from '../../config.json';
import { SettingsRemoteTwoTone } from '@material-ui/icons'

function HomeSection() {
	const [isDesktop, setDesktop] = React.useState(false);
	const [isTablet, setTablet] = React.useState(false);

  	React.useEffect(() => {
    if (window.innerWidth > 768) {
      	setDesktop(true);
	  	setTablet(false);

    } else if (window.innerWidth > 425) {
		setDesktop(false);
		setTablet(true);

    } else {
		setDesktop(false);
	  	setTablet(false);

	}

    const updateMedia = () => {
		if (window.innerWidth > 768) {
			setDesktop(true);
			setTablet(false);

	  } else if (window.innerWidth > 425) {
		  	setDesktop(false);
		  	setTablet(true);

	  } else {
		  	setDesktop(false);
			setTablet(false);

	  }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
	}, []);

	


	const Team = () => {
		if(isDesktop) {
			return <div>
					<h1 className='urban-font subtitle mt-25 mb-25'>THE TEAM</h1>
					<div className="grid-background center mt-50" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridGap: 10, padding: '10px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
					
					
					
					<div>
						
						
						<a href='https://saintvon.com/pages/about-mrsaintvon' target='_blank'><img style={{padding: '25px'}} src="/img/assets/saintvon.jpg"/></a>
						<h1 className='urban-font'>MR SAINT VON</h1>
						<p className='text-shadow description'>World Renowned Artist</p>
					</div>

					<div>
						
						
						<a href='https://www.instagram.com/wedripz.eth/' target='_blank'><img style={{padding: '25px'}} src="/img/assets/demarco.jpg"/></a>
						<h1 className='urban-font'>DEMARCO EXOTIC</h1>
						<p className='text-shadow description'>Founder & Project Manager</p>
					</div>

					<div>
						
						
						<a href='https://www.chasingthecool.com/about' target='_blank'><img style={{padding: '25px'}} src="/img/assets/trustme.jpg"/></a>
						<h1 className='urban-font'>MITCHELL BAILEY</h1>
						<p className='text-shadow description'>Mixologist/Co-Founder Trust Me Vodka</p>
					</div>

					<div>
						
						
						<a href='https://www.co-labs.studio/' target='_blank'><img style={{padding: '25px'}} src="/img/assets/colabs.jpg"/></a>
						<h1 className='urban-font'>CO-LABS STUDIOS</h1>
						<p className='text-shadow description'>Web and Blockchain Developers</p>
					</div>
				</div>
				</div>
		} else if (isTablet) {
			return <div>
					<h1 className='urban-font subtitle mt-25 mb-25'>THE TEAM</h1>
					<div className="grid-background center mt-50" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridGap: 20, padding: '20px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
					
					
					
					<div>
						<h1 className='urban-font mb-25'>MR SAINT VON</h1>
						<a href='https://saintvon.com/pages/about-mrsaintvon' target='_blank'><img className=" mb-25" src="/img/assets/saintvon.jpg"/></a>
						<p className='text-shadow description'>World Renowned Artist</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>DEMARCO EXOTIC</h1>
						<a href='https://www.instagram.com/wedripz.eth/' target='_blank'><img className=" mb-25" src="/img/assets/demarco.jpg"/></a>
						<p className='text-shadow description'>Founder & Project Manager</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>MITCHELL BAILEY</h1>
						<a href='https://www.chasingthecool.com/about' target='_blank'><img className=" mb-25" src="/img/assets/trustme.jpg"/></a>
						<p className='text-shadow description'>Mixologist/Co-Founder Trust Me Vodka</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>CO-LABS STUDIOS</h1>
						<a href='https://www.co-labs.studio/' target='_blank'><img className=" mb-25" src="/img/assets/colabs.jpg"/></a>
						<p className='text-shadow description'>Smart Contract and Web Developers</p>
					</div>
				</div>
				</div>
		} else {
			return <div>
					<h1 className='urban-font subtitle mt-25 mb-25'>THE TEAM</h1>
					<div className="grid-background center mt-50" style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gridGap: 20, padding: '20px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
					
					
					
					<div>
						<h1 className='urban-font mb-25'>MR SAINT VON</h1>
						<a href='https://saintvon.com/pages/about-mrsaintvon' target='_blank'><img className=" mb-25" src="/img/assets/saintvon.jpg"/></a>
						<p className='text-shadow description'>World Renowned Artist</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>DEMARCO EXOTIC</h1>
						<a href='https://www.instagram.com/wedripz.eth/' target='_blank'><img className=" mb-25" src="/img/assets/demarco.jpg"/></a>
						<p className='text-shadow description'>Founder & Project Manager</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>MITCHELL BAILEY</h1>
						<a href='https://www.chasingthecool.com/about' target='_blank'><img className=" mb-25" src="/img/assets/trustme.jpg"/></a>
						<p className='text-shadow description'>Mixologist/Co-Founder Trust Me Vodka</p>
					</div>

					<div>
						<h1 className='urban-font mb-25'>CO-LABS STUDIOS</h1>
						<a href='https://www.co-labs.studio/' target='_blank'><img className=" mb-25" src="/img/assets/colabs.jpg"/></a>
						<p className='text-shadow description'>Smart Contract and Web Developers</p>
					</div>
				</div>
				</div>
		}
	}


    return (
		

        
   
     
		<div className="container center pt-100 pb-50">
			{isDesktop ? (
				<div class="video-container">
					{/*<video autoPlay playsInline loop muted id="video-bg" src="/img/assets/videobackground.mp4"/>*/}
				</div>
			) : (
				null
			)}
			
			<div className="center">
				<h1 className='send-forward title mt-0'>GARMETIC</h1>
				<h3 className="center mb-10">A WEB3 CLOTHING COMPANY</h3>
				<h5 className="center text-container">Browse our selection of digital wearables, choose which wearable you want to mint, connect your wallet and mint today!</h5>
				<h6>(While Supplies Last)</h6>
			</div>	
			
		</div>
		


	
  );
};

export default HomeSection;
