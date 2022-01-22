import React from 'react'

 function ConfirmDetails() {
    return (
        <div>
            <h3>Almost Done</h3>
            <div className='confirm-container'>
                <p>Verify Details to Proceed</p>
                <div className='detail-holder'>
                    <div className='img-holder'>

                    </div>
                    <div className='details'>
                    <p>Details</p>
                    <div id='all-details'>
                        <div>Savings Title:<span>My Goal</span></div>
                        <div>Savings Type:<span>Flexible</span></div>
                        <div>Amount:<span>NGN 1000.00</span></div>
                        <div>When to Save:<span>Monthly</span></div>
                        <div>Duration:<span>start - End</span></div>
                    </div>

                    </div>

                </div>
                

                
            </div>
            
        </div>
    )
}

export default ConfirmDetails