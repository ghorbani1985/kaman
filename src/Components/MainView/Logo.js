import React from 'react';
import MainLogo from "../../Assets/Images/Png/logo.png";
 function Logo () {
  return (
    <div className='hidden md:perfectCenter md:w-16 lg:w-48'>
      <img src={MainLogo} alt="Logo" className="w-24 h-16 object-fill z-40" />
</div>
  );
}
export default Logo;