import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// importing components
import Layout from '../layout';

import Wallet from '../pages/wallet/Wallet';
import Savings from '../pages/savings/Savings';
import Transfer from '../pages/transfer/Transfer';

import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import New from '../pages/savings/New';
// import SavingList from '../components/savings/SavingList';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin/>} />

                <Route path="/dashboard" element={<Layout/>}/>
                <Route path="/dashboard/wallet" element={<Layout> <Wallet/> </Layout>}/>
                <Route path="/dashboard/savings" element={<Layout> <Savings/> </Layout>}/>
                <Route path="/dashboard/savings/new" element={<Layout> <New/> </Layout>}/>
                <Route path="/dashboard/transfer" element={<Layout> <Transfer/> </Layout>}/>

                {/* // auth routes */}
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;