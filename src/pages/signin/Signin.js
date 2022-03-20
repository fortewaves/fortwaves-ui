import React, {useState} from 'react';
import app from "../../firebase"
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Input, Typography } from "antd";
import { AiOutlineMail } from 'react-icons/ai';
import { GrSecure } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { Button } from '../../components/buttons/Btns';
import { NavLink, useNavigate } from 'react-router-dom';

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const auth = getAuth(app);
// TODO : need to restyle terms agreement paragraph...


const { Title } = Typography;

const Signin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = () => {
      
      signInWithEmailAndPassword(auth, email, password).then(e => {
          console.log(e)
          localStorage.setItem('token', e.user.uid)
          navigate('/dashboard')
      }).catch(err => {
          console.log(err.code)
      })
  }

  const authWithPopup = (service) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        navigate('/dashboard')
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
    return (
      <div className="auth">
        <div style={{ borderBottom: "1px solid #c5c5c5" }}>
          <header>
            <Title level={4}>Fortewaves</Title>
          </header>
        </div>
        <div className="container">
          <div className="form">
            <Title
              style={{ fontWeight: "200", marginBottom: "2rem" }}
              level={3}
            >
              Login
            </Title>

            <div className="input-container">
              <AiOutlineMail />
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <GrSecure />
              <Input
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            {/* <div className='terms'>
                        <Checkbox style={{fontWeight:'200', fontSize:'.8rem'}}>
                            - I have read and agreed to the terms of service
                        </Checkbox>
                    </div> */}
            <div onClick={authenticateUser} className="cta">
              <Button title={"Login"} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "100",
                fontSize: ".8rem",
                justifyContent: "flex-end",
              }}
            >
              <p>Don't have an account? </p>
              <NavLink to={"/signup"}>. create one</NavLink>
            </div>
          </div>

          <Title level={5}>OR</Title>

          <div className="social">
            <button className="soc google" onClick={authWithPopup}>
              <FcGoogle size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
              <p>Signin with Google</p>
            </button>
            <button className="soc fb">
              <BsFacebook size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
              <p>Signin with Facebook</p>
            </button>
            <button className="soc ap">
              <BsApple size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
              <p>Signin with Apple</p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signin;