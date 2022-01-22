import React from 'react';
import { Typography } from 'antd';
import {FcFinePrint} from 'react-icons/fc';
import {FaPiggyBank} from 'react-icons/fa';

import { Btn } from '../../components/buttons/Btns';

const { Title } = Typography

const Savings = () => {
    return (
        <div className='savings'>

            <header>
                <Title level={4}>Savings</Title>
            </header>

            <div className='icon-cont'>
                {/* // empty list */}
                <FcFinePrint className='icon' />
            </div>
            <p>You currently do not have a savings plan, please create one to get started</p>
            <div style={{width:'max-content',margin:'2rem auto'}}>
                <Btn icon={()=> <FaPiggyBank/>} title={'Create a savings plan'} />
            </div>
        </div>

    );
};

export default Savings;