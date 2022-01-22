import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const Success=()=> {
    return (
        <div className='success'>
            <div className='icon'>
                <BsCheckCircle/>
            </div>
            <h3>Success</h3>
            <p>New savings plan created successfully!</p>
            
        </div>
    )
}

export default Success
