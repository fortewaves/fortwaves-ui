import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography

const Wallet = () => {
    return (
        <div className='wallet'>
           <header>
               <Title level={4}>My Wallet</Title>
           </header>
           <section className='balance'>
                <Title level={5}>Available Balance</Title>
                <Title level={2}>NGN0.00</Title>
           </section>

          <section className='info'>
          <section className='info'>
               {/* // deposit funds to wallet */}
               <Title level={5}>Add funds </Title>
                <p>Add money to your Fortewaves wallet</p>

           </section>
           <section className='info'>
               {/* // withdraw funds from wallet */}
               <Title level={5}>Withdraw funds</Title>
               <p>Take out funds from your Fortewaves wallet</p>

           </section>
          </section>
        </div>
    );
};

export default Wallet;