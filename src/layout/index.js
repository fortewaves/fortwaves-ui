import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
    return (
        <div className="layout" >
            <SideBar/>
            <div className='right-content'>
                <div className='header-container'>
                    <Header/>
                </div>
                <div className='main'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;