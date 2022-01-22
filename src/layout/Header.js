import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import {VscBellDot} from 'react-icons/vsc'
import {MdHistory} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
const Header = () => {
    return (
        <div className='header'>
            <div className='navs'>
                <Link to="">Overview</Link>
                <Link to="">Policy</Link>
                <Link to="">Report</Link>
            </div>

            <div className='search'>
                <div><FaSearch/></div> 
                <span>Search</span>
            </div>

            <div className='others'>
               <div className='bg-icon'><VscBellDot/></div> 
                <div id='history'>
                    <div className='bg-icon'><MdHistory/></div> 
                    <span>History</span>
                </div>
               <div className='bg-icon'><FiLogOut/></div> 

            </div>
        </div>
    );
};

export default Header;