import React from 'react'

export const Title=()=> {
    return (
        <div className='title'>
            <h3>What would you like to save for</h3>

            <p>Savings Title</p>
            <input type="text" placeholder='Please enter a title'/>
            
        </div>
    )
}


export const Amount=()=> {
    return (
        <div className='title'>
            <h3>How much would you like to save</h3>

            <p>Amount to save</p>
            <input type="text" placeholder='Please enter an amount'/>
            
        </div>
    )
}


