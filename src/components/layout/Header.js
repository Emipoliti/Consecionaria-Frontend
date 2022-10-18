import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header className="header-1">
            <img src= "./Img/Logo.webp" width= ""  alt="Logo"/>
           
            <div className='titulo'>
              <h1> Auto Design </h1>
            </div>
            
        </header>
    );
}

export default Header;

