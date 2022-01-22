import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

const Layout = ({children}) => {
    return (
        <div className="layout" >
            <SideBar/>
            <div>
                <Header/>
                <div className='main'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;