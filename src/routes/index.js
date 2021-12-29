import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;