import { Input, Checkbox, Typography } from 'antd';
import React from 'react';
import { AiOutlineEdit, AiOutlineMail } from 'react-icons/ai';
import { GrSecure } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { Button } from '../../components/buttons/Btns';


// TODO : need to restyle terms agreement paragraph...


const { Title } = Typography;

const Signup = () => {
    return (
        <div className='auth'>
            <div style={{borderBottom: '1px solid #c5c5c5'}}>
                <header>
                    <Title level={4} >Fortewaves</Title>
                </header>
            </div>
            <div className='container'>
                <div className='form'>
                    <Title style={{fontWeight:'200', marginBottom:'2rem'}} level={3}>Signup</Title>

                    <div className='input-container'>
                        <AiOutlineEdit/>
                        <Input placeholder='Name' />
                    </div>
                    <div className='input-container'>
                        <AiOutlineMail/>
                        <Input placeholder='Email' />
                    </div>
                    <div className='input-container'>
                        <GrSecure/>
                        <Input type={'password'} placeholder='Password' />
                    </div>

                    <div className='terms'>
                        <Checkbox style={{fontWeight:'200', fontSize:'.8rem'}}>
                            - I have read and agreed to the terms of service
                        </Checkbox>
                    </div>
                    <div className='cta'>
                        <Button title={'Signup'}/>
                    </div>
                </div>

                <Title level={5}>OR</Title>

                <div className='social'>
                    <button className='soc google'><FcGoogle size={'1.5em'} style={{marginRight:'1rem'}} /> <p>Signin with Google</p></button>
                    <button className='soc fb'><BsFacebook size={'1.5em'} style={{marginRight:'1rem'}} /> <p>Signin with Facebook</p></button>
                    <button className='soc ap'><BsApple size={'1.5em'} style={{marginRight:'1rem'}} /> <p>Signin with Apple</p></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;