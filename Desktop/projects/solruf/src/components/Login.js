import React from 'react';
import {useState,Link} from 'react';
import {signin} from '../util/cognito';
import {NotificationContainer,NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
// import {useHistory} from 'react-router-dom';

function Login(props){
    // const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const loginButtonFunction = async() => {
        if(email === ''){
            NotificationManager.error('Enter your Email Id !','Error',2000);
        }else{
            if(password === ''){
                NotificationManager.error('Enter your Password','Error',2000);
            }else{
                await signin(email,password).then((usr)=>{
                    if(usr){
                        // history.push('/home');
                        console.log(usr);
                    }
                })
            }
        }
    }

    return(
        <div className='container'>
            <div className="loginmain">
                <h3 id="signid">Login</h3>
                <p id="topline">Please enter your login credentials</p>
                <form className='form-control'>
                    <input type="email" className="logininput" placeholder="Email Id" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <br/>
                    <input type="password" className="logininput" placeholder="Password" value={password} onChange={(e)=>{setPass(e.target.value)}}/>
                    <br/>
                    <button className="loginbtn" onClick={loginButtonFunction}>Login</button>
                </form>
                <Link to='/signup'><p className="noacc">Do not have an account? <a href='/signup'>SignUp</a></p></Link>
            </div>
            <NotificationContainer/>
        </div>
    );
}

export default Login;