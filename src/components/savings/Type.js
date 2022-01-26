import React from 'react'
import {  BsPiggyBank } from 'react-icons/bs';

const Type=()=> {
    return (
        <div>
            <h3>Select a savings type</h3>

            <div className='card'>
                <div className='icon'> <BsPiggyBank className='piggy'/></div>
                <div className='card-content'>
                    <h3>Flexible</h3>
                    <p>lorem ipsum dorfiet lorem ipsum lorem ipsum dorfiet lorem ipsum dorfietlorem ipsum dorfiet</p>
                </div>
            </div>

            <div className='card'>
                <div className='icon'> <BsPiggyBank className='piggy'/></div>
                <div className='card-content'>
                    <h3>Fixed</h3>
                    <p>lorem ipsum dorfiet lorem ipsum lorem ipsum dorfiet lorem ipsum dorfietlorem ipsum dorfiet</p>
                </div>
            </div>
            
        </div>
    )
}

export default Type
