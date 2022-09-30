import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Book Adda With <span>Kishor Alo </span><FontAwesomeIcon icon={faBookOpen} /></h1>
            <h3>Guest :<span> Tahsan Khan</span></h3>
            <h3>Total Book Budget 2200 Taka!</h3>

        </div>
    );
};

export default Header;