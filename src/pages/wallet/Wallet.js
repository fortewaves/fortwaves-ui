import React from 'react';
import { Btn} from '../../components/buttons/Btns'

import { Typography } from 'antd';

const { Title } = Typography

const Wallet = () => {
    return (
        <div className='wallet'>
           
        <header>
            <Title level={4}>My Wallet</Title>
        </header>

          <section className='info'>
            <section className='balance'>
                    <Title level={5}>Available Balance</Title>
                    <Title level={2}>NGN0.00</Title>
            </section>
            <section className='option'>
                {/* // deposit funds to wallet */}
                <Title level={5}>Add funds </Title>
                <p>Add money to your Fortewaves wallet.</p>
                <p>This could be done by a verity of payment methods including: VISA, Master card, Verve card.</p>
                <p>The payment will settle in your wallet 1-2 business days after the payment has been confirmed</p>
                <div className='cta'><Btn title={'+ Add funds'} /></div>

            </section>


            <section className='option'>
                {/* // withdraw funds from wallet */}
                <Title level={5}>Withdraw funds</Title>
                <p>Take out funds from your Fortewaves wallet</p>
                <p>Withdrawals to your local bank account usually take between 2-3 business days</p>
                <div className='cta'><Btn title={'Withdraw funds'} /></div>

            </section>
          </section>
        </div>
    );
};

export default Wallet;