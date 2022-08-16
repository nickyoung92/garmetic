import React from 'react'



function Roadmap() {
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


return (
		

        
   
     
    <div className="container center pt-100 pb-50">
        {isDesktop ? (
				<div class="video-container">
					{/*<video autoPlay playsInline loop muted id="video-bg" src="/img/assets/videobackground.mp4"/>*/}
				</div>
			) : (
				null
			)}

     

        <h1>ROADMAP COMING SOON</h1>

        
        
    </div>
    



);
};

export default Roadmap;
