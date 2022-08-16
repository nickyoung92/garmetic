import React, { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import Box from './box';
import AnimatedSphere from './animatedSphere';
import Model from './Messingaround'


function ThreeDViewport() {

  const [object1, setObject1] = React.useState(true);
  const [object2, setObject2] = React.useState(false);
  const [object3, setObject3] = React.useState(false);
  
  const clickObject1 = async () => {
		setObject1(true);
    setObject2(false);
    setObject3(false);
	}
  const clickObject2 = async () => {
		setObject1(false);
    setObject2(true);
    setObject3(false);
	}
  const clickObject3 = async () => {
		setObject1(false);
    setObject2(false);
    setObject3(true);
	}

return (
    <div className='threed mt-100'>
        <Canvas className="transparent-canvas">
          <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={-2} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,10,2]} intensity={1} />
        
          {object1 ? (
            <Box />
          ) : object2 ? (
            <AnimatedSphere />
          ) : (
            <Model />
          )}
          
         
         
        </Canvas>
        <div className='center container button-wrapper pb-50'>
          <div>
            {object1 ? (
              <button className='selected-button' onClick={clickObject1}>Object 1</button>
            ) : (
              <button className='selection-button' onClick={clickObject1}>Object 1</button>
            )}

          </div>
          <div>
            {object2 ? (
              <button className='selected-button' onClick={clickObject2}>Object 2</button>
            ) : (
              <button className='selection-button' onClick={clickObject2}>Object 2</button>
            )}
            
          </div>
          <div>
            {object3 ? (
              <button className='selected-button' onClick={clickObject3}>Object 3</button>
            ) : (
              <button className='selection-button' onClick={clickObject3}>Object 3</button>
            )}
          </div>
        </div>
    </div>
    
)
}

export default ThreeDViewport;