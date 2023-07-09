import { UilFacebook,UilGoogle,UilTwitter,UilGithub} from '@iconscout/react-unicons'
import './Regsiter.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Register = () => {
    let port =5000
    let apiulr=`http://localhost:${port}`

    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isregister,setisregister]=useState(false)
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
          await axios.post(`${apiulr}/register`, {  mail:mail, password:password })
          .then(()=>{
            toast.info('Register successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
          })
       
                } 
                    catch (error) 
                    {
                        toast.error('Register failed', {
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
    <div className="MainRegsiter">
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
            <h2>Join thousands of learners from <br/>around the world </h2>

            <span>Master web development by making real-life<br/> projects. There are multiple paths for you to choose</span>
   </div>

 <div className='Row-2L'>
          
          <input type='text' className='mail'placeholder='' value={mail} onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' className='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type='button' className='button' value="Start coding now " onClick={handleSubmit}/>
     
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
      <span>Adready a member?</span>
       <span> <Link to='/login'>Login</Link></span>
  </div>

    </div>
    );
}
 
export default Register;