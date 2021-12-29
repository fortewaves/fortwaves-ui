import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin/>} />

                <Route path="/dashboard" element={<Layout/>}/>

                {/* // auth routes */}
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;