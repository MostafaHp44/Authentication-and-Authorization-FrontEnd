import dev from './dev.png'
import './edituser.css'
import { UilAngleDown,UilAngleLeft} from '@iconscout/react-unicons'
import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import userpic from './user.png'




const EditUser = (props) => {
    let port =5000
    let apiulr=`http://localhost:${port}`
    const navigate=useNavigate()
    const [name,setname]=useState('')
    const [bio,setbio]=useState('')
    const [phone,setphone]=useState('')
    const [User,setuser]=useState('')
    

    const handelname=(e)=>{
        e.preventDefault()
        setname(e.target.value)
    }
    const handelbio=(e)=>{
        e.preventDefault()
        setbio(e.target.value)
    }
    const handelphone=(e)=>{
        e.preventDefault()
        setphone(e.target.value)
    }

const handelUpdate= async(event)=>{
    event.preventDefault();
    
try
{
    const response =await axios.put(`${apiulr}/update/${localStorage.getItem('id')}`, {
        name: name,
        bio: bio,
        phone: phone
      })
    const {success, message, user  } = response.data;

    if (success)
     {
        console.log(User);
      console.log(message)
      toast.success('Update successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
       })
      setTimeout(() => {
          navigate('/user')
      },6000 );
      
  } 
    
  
   
  } 

  catch (error) {
                  toast.error('Update failed', {
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
    <div className="MainEdit">
        
        <div className='MainBar'>

            <div className='LeftBar'>
                <img src={dev}></img>
            </div>

            <div className='RightBar'>
                <div className='profile'>
                    <img className='pic' src=""></img> <div className='username'><span>mostafa</span> <UilAngleDown/></div>
                </div>
            </div>

        </div>
        <div className='Row-1E'>
            <button className='btnback' onClick={()=>{navigate(-1)}}> <UilAngleLeft/> Back</button>
           
        </div>
        <div className='TableInformation'>

            <div className='Line-1E'>

                    <h2>Change Info</h2>
                    <span style={{color:"#D3D3D3"}}>Changes will be reflected to every services</span>
               
            </div>

            <div className='Line-2E'>
                <div className='info2'>
                <img src={userpic} className='profilephoto'></img>
                </div>
                <div className='btnedit'>
                 <input type="file" id="actual-btn" hidden />
                 <label htmlFor="actual-btn">Choose File</label>
                 <span id="file-chosen">No file chosen</span>
                </div>    
            </div>
            <div className='Line-3E'>
                <span>Name</span>
                <input type='text' className='edituserinput' placeholder='' onChange={handelname} value={name} ></input>
            </div>
            <div className='Line-4E'>
                <span>BIO</span>
                <input type='text' className='edituserinput' placeholder='' onChange={handelbio} value={bio}></input>

            </div>
            <div className='Line-5E'>
                <span>PHONE</span>
                <input type='text' className='edituserinput' placeholder='' onChange={handelphone} value={phone}></input>

            </div>
          
        <button className='btnsave' onClick={handelUpdate}>Save</button>

        </div>
    </div>
    );
}
 
export default EditUser;