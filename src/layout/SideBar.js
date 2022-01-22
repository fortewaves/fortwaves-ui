import { Typography } from 'antd';
import React from 'react';
import { BsGraphUp, BsPiggyBank, BsWallet } from 'react-icons/bs';
import { BiSupport, BiTransfer } from 'react-icons/bi';
import { MdMobileFriendly, MdPeopleOutline } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const { Title } = Typography


const SideBar = () => {

    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <header>
                <Title style={{padding:'1rem'}} level={4}>Fortewaves</Title>
            </header>

            <nav>
                <ul>
                    <li onClick={()=> navigate('/dashboard/wallet')}>
                        <BsWallet  className='icon'/>
                        <Title className='title' level={5}>Wallet</Title>
                    </li>
                    <li onClick={()=> navigate('/dashboard/savings')}>
                        <BsPiggyBank className='icon'/>
                        <Title className='title' level={5}>Savings</Title>
                    </li>
                    <li onClick={()=> navigate('/dashboard/investment')}>
                        <BsGraphUp className='icon'/>
                        <Title className='title' level={5}>Investment</Title>
                    </li>
                    <li onClick={()=> navigate('/dashboard/transfer')}>
                        <BiTransfer className='icon'/>
                        <Title className='title' level={5}>Transfers</Title>
                    </li>
                    {/* <li onClick={()=> navigate('home')}>
                        <BsCashStack className='icon'/>
                        <Title className='title' level={5}>Withdraw</Title>
                    </li> */}
                    <li onClick={()=> navigate('home')}>
                        <MdPeopleOutline className='icon'/>
                        <Title className='title' level={5}>Refer</Title>
                    </li>
                    <li onClick={()=> navigate('home')}>
                        <MdMobileFriendly className='icon'/>
                        <Title className='title' level={5}>Mobile top-up</Title>
                    </li>
                    <li onClick={()=> navigate('home')}>
                        <BiSupport className='icon'/>
                        <Title className='title' level={5}>Customer support</Title>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;