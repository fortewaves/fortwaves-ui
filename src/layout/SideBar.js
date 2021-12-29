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
                <Title style={{padding:'.5rem'}} level={5}>Fortewaves</Title>
            </header>

            <nav>
                <ul>
                    <li>
                        <BsWallet />
                        <Title className='title' level={5}>Wallet</Title>
                    </li>
                    <li>
                        <BsPiggyBank/>
                        <Title className='title' level={5}>Savings</Title>
                    </li>
                    <li>
                        <BsGraphUp/>
                        <Title className='title' level={5}>Investment</Title>
                    </li>
                    <li>
                        <BiTransfer/>
                        <Title className='title' level={5}>Transfers</Title>
                    </li>
                    <li>
                        <BsCashStack/>
                        <Title className='title' level={5}>Withdraw</Title>
                    </li>
                    <li>
                        <MdPeopleOutline/>
                        <Title className='title' level={5}>Refer</Title>
                    </li>
                    <li>
                        <MdMobileFriendly/>
                        <Title className='title' level={5}>Mobilr top-up</Title>
                    </li>
                    <li>
                        <BiSupport/>
                        <Title className='title' level={5}>Customer support</Title>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;