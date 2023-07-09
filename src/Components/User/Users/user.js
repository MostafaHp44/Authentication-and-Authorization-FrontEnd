import './user.css'
import dev from './dev.png'
import picuser from './user.png'
import { UilAngleDown,UilAngleUp} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProfile from './ListProfile';

  

const User = () => {
    let port =5000
    let apiulr=`http://localhost:${port}`
    const [isopen,setisopen]=useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const[aboutUser,setaboutUser]=useState('')
    
    const handelopenlist=()=>{
        setisopen(curr=>!curr)
    }

    const fetchUserProfile = async () => {

        try {
            const response = await axios.get(`${apiulr}/profile`, {
              headers: {
                authorization: localStorage.getItem('auth'), // Replace 'token' with the actualtoken received after successful login
              },
            });
            const { success, message, user } = response.data;

            if (success) {
                console.log(success);
                console.log(message);
                setaboutUser(user)
                
            } 
            else 
            {
              // Fetch profile failed, display the error message
              setErrorMessage(message);
            }
          }
          catch (error) {
            console.error('Error getting profile:', error);
          }
      
    };

   

    useEffect(() => {
      fetchUserProfile();
    }, []);
      
  
    return (
    <div className="MainUser">
        <div className='MainBar'>

            <div className='LeftBar'>
                <img src={dev}></img>
            </div>

            <div className='RightBar'>
                <div className='profileuser'>
                     <button className='listuser' onClick={handelopenlist}><img className='picuser' src={picuser}></img> <div className='username'><span>{aboutUser.name}</span>{!isopen?<UilAngleDown/>:<UilAngleUp/>}</div></button>
                     {isopen?
                    <ListProfile/>
                      :<></>
                     }
                </div>
            </div>

        </div>
        <div className='Row-1U'>
            <h1>Personal info</h1>
            <span>Basic info, like your name and photo</span>
        </div>
        <div className='TableInformation'>
            <div className='Line-1'>
                <div className='Info'>
                    <h1>Profile</h1>
                    <span style={{color:"#D3D3D3"}}>Some info may be visible to other people</span>
                 </div>      
                 <div className='btnedit'>
                    <button><Link to='/edituser' style={{textDecoration:"none"}}>Edit</Link></button>
                    </div>         
            </div>
            <div className='Line-2'>
                <div className='info2'>
                <span>PHOTO</span>
                </div>
                <div className='InfoFromUser'>
                    <span><img src={picuser} style={{width:'2em'}}></img></span>
                </div>
            </div>
            <div className='Line-3'>
                <div className='info2'>
                <span>Name</span>
                </div>
                <div className='InfoFromUser'>
                    <span>{aboutUser.name}</span>
                </div>
            </div>
            <div className='Line-4'>
                <div className='info2'>
                <span>BIO</span>
                </div>
                <div className='InfoFromUser'>
                    <span>{aboutUser.bio}</span>
                </div>
            </div>
            <div className='Line-5'>
                <div className='info2'>
                <span>PHONE</span>
                </div>
                <div className='InfoFromUser'>
                    <span>{aboutUser.phone}</span>
                </div>
            </div>
            <div className='Line-6'>
                <div className='info2'> 
                <span>Email</span>
                </div>
                <div className='InfoFromUser'>
                    <span>{aboutUser.mail}</span>
                </div>
            </div>
            

        </div>

    </div>
    );
}
 
export default User;