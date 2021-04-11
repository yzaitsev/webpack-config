import React from 'react';
import wpLogoImage from 'src/assets/images/wp-logo.png'; 

export default function Logo() {
  return (
    <div className='image-logo-wrap'>
      <img className='image-logo' src={wpLogoImage} />
    </div>
  )
}