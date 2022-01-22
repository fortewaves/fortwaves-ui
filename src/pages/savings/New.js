import React ,{useState}from 'react'

import {  BtnGrey, BtnBlack } from '../../components/buttons/Btns';
import AddImage from '../../components/savings/AddImage';
import ConfirmDetails from '../../components/savings/ConfirmDetails';
import Mode from '../../components/savings/Mode';
import Success from '../../components/savings/Success';
import {Title,Amount} from '../../components/savings/TitleAmount';
import Type from '../../components/savings/Type';

const New=()=> {
    const [step,setStep]=useState(1)
    console.log(step)
    return (
        <div className='new'>
            <p className='title'>Create a new savings plan</p>
            <div className='steps'>
                <p>steps</p>
                <p>steps</p>
                <p>steps</p>
                
            </div>
            
            <div className='content'>
                <div className='content-body'>
                    {
                        step===1?<Type/>:
                        step===2?<Title/>:
                        step===3?<Amount/>:
                        step===4?<Mode/>:
                        step===5?<AddImage/>:
                        step===6?<ConfirmDetails/>:
                        step===7?<Success/>:null
                    }    
                </div>
               
                <div className='buttons'>
                    {
                        step===7?null:<BtnGrey onclick={()=>setStep(prevStep=>prevStep<=1?1:prevStep-1)} title={"Back"} />
                    }
                    
                    {
                        step===6?<BtnBlack onclick={()=>setStep(prevStep=>prevStep>=7?7:prevStep+1)} title={"Continue"} />:
                        step===7?<BtnBlack onclick={()=>setStep(prevStep=>prevStep>=7?7:prevStep+1)}  title={"Okay"} />:
                        <BtnBlack onclick={()=>setStep(prevStep=>prevStep>=7?7:prevStep+1)}  title={"Next"} />
                    }
                    
                </div>

            </div>
        </div>
    )
}

export default New
