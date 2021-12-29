import { Typography } from 'antd';
import React from 'react';
import { BsCashStack, BsGraphUp, BsPiggyBank, BsWallet } from 'react-icons/bs';
import { FcAndroidOs } from 'react-icons/fc';
import { BiSupport, BiTransfer } from 'react-icons/bi';
// import { IoPeopleOutline } from 'react-icons/io';
import { MdMobileFriendly, MdPeopleOutline } from 'react-icons/md';

const { Title } = Typography
const SideBar = () => {

    return (
        <div className='sidebar'>
            <header>
                <Title style={{padding:'1rem'}} level={5}>Fortewaves</Title>
            </header>

            <nav>
                <ul>
                    <li>
                        <BsWallet  className='icon'/>
                        <Title className='title' level={5}>Wallet</Title>
                    </li>
                    <li>
                        <BsPiggyBank className='icon'/>
                        <Title className='title' level={5}>Savings</Title>
                    </li>
                    <li>
                        <BsGraphUp className='icon'/>
                        <Title className='title' level={5}>Investment</Title>
                    </li>
                    <li>
                        <BiTransfer className='icon'/>
                        <Title className='title' level={5}>Transfers</Title>
                    </li>
                    <li>
                        <BsCashStack className='icon'/>
                        <Title className='title' level={5}>Withdraw</Title>
                    </li>
                    <li>
                        <MdPeopleOutline className='icon'/>
                        <Title className='title' level={5}>Refer</Title>
                    </li>
                    <li>
                        <MdMobileFriendly className='icon'/>
                        <Title className='title' level={5}>Mobilr top-up</Title>
                    </li>
                    <li>
                        <BiSupport className='icon'/>
                        <Title className='title' level={5}>Customer support</Title>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;