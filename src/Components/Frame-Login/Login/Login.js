import './login.css'
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import  { React,useState } from 'react';
import { UilFacebook,UilGoogle,UilTwitter,UilGithub} from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    let port =5000
    let apiulr=`http://localhost:${port}`
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate=useNavigate()
   
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response =await axios.post(`${apiulr}/login`, {  mail, password })
          const {success, message, user ,token } = response.data;
          if (success)
           {
            console.log(message)
            
            {
                localStorage.setItem('auth',token)
                localStorage.setItem('id',user._id)
        }

            toast.success('Login successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
             })
             console.log(message);
            setTimeout(() => {
                navigate('/user')
            },6000 );
            
        } 
          else
           {
            // Login failed, display the error message
            setErrorMessage(message);
          }
    
        
         
        } 

        catch (error) {
                        toast.error('Login failed', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
        }
      };
    
    return (
    <div className='MainLogin'>
       
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>


        <div className='Row-1L'>
            <h2>Login</h2>
        </div>

        <div className='Row-2L'>
          
                <input type='text' className='mail'placeholder='' value={mail} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' className='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type='button' className='button' value="Login" onClick={handleSubmit}/>
           
        </div>
        
        <div className='Row-3L'>
            <span>or continue with these social profile</span>
        </div>

        <div className='Row-4L'>
            <div className='google'><UilGoogle color='#828282'/></div>
            <div className='facebook'><UilFacebook color='#828282'/></div>
            <div className='twitter'><UilTwitter color='#828282'/></div>
            <div className='githhub'><UilGithub color='#828282'/></div>

        </div>
        <div className='Row-5L'>
            <span>Don’t have an account yet ?</span>
             <span><Link to='/register'>Register</Link> </span>
        </div>
    </div>
    );
}
 
export default Login;