import React from 'react';
import { useState,Link } from 'react'
import { signup } from '../util/cognito';
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import {useHistory} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';


function Signup(props) {

    // const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpass, setcnfpass] = useState('');

    const signupButtonFunction = async() => {
        if (name === '') {
            NotificationManager.error('Name cannot be empty', 'Error',1000);
        }else{
            if(email===''){
                NotificationManager.error('Enter email address', 'Error',1000);
            }else{
                if(password.length<6){
                    NotificationManager.error('Password length must be greater than 6', 'Error',1000);
                }else{
                    if(password!==cnfpass){
                        NotificationManager.error("Confirm password does not match",'Error',1000);
                    }else{
                        const info ={
                            name:name,
                            email:email,
                        };
                        await signup(email, password, info).then((usr)=>{
                            if(usr){
                                // history.push("/profile")
                                console.log(usr);
                            }
                        })
                    }
                }
            }
        }
    }
    return (
        <div className="container">
            <div className="signupmain" >
                <h3 id="signid"> SignUp</h3>
                <p id="topline">Enter your correct information</p>
                <div className='form-control'>
                    <input type="text" className="formcontrolsignup" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <br />
                    <input type="email" className="formcontrolsignup" placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <br />
                    <input type="password" className="formcontrolsignup" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <br />
                    <input type="password" className="formcontrolsignup" placeholder="Confirm Password" value={cnfpass} onChange={(e) => { setcnfpass(e.target.value) }} />
                    <br />
                    <button className="signupbtn" onClick={signupButtonFunction}>Sign Up</button>
                </div>
                <Link to='/login'><p id="alreadyacc">Already have an account? Login</p></Link>
            </div>
            <NotificationContainer />
        </div>
    );
}

export default Signup;