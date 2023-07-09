import './admin.css'
import { UilAngleDown } from '@iconscout/react-unicons'
import {Link,} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dev from './dev.png'
import picadmin from './Basic_Ui_(186).jpg'




const Admin = () => {
    return (
    <div className="MainAdmin">
        <div className='MainBar'>

<div className='LeftBar'>
    <img src={dev}></img>
</div>

<div className='RightBar'>
    <div className='profile'>
        <img className='picadmin' src={picadmin}></img> <div className='username'><span>mostafa</span> <UilAngleDown/></div>
    </div>
</div>

</div>
<div className='Row-1U'>
<h1>Admin info</h1>
<span>Basic info, like your name and photo</span>
</div>
<div className='TableInformation'>
<div className='Line-1A'>
    <div className='Info'>
        <h1>Profile</h1>
        <span style={{color:"#D3D3D3"}}>Some info may be visible to other people</span>
     </div>      
     <div className='btnedit'>
        <button><Link to='/edituser' style={{textDecoration:"none"}}>Edit</Link></button>
        </div>         
</div>
<div className='Line-2A'>
    <div className='info2'>
    <span>PHOTO</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>
<div className='Line-3A'>
    <div className='info2'>
    <span>Name</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>
<div className='Line-4A'>
    <div className='info2'>
    <span>BIO</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>
<div className='Line-5A'>
    <div className='info2'>
    <span>PHONE</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>
<div className='Line-6A'>
    <div className='info2'> 
    <span>Email</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>
<div className='Line-7A'>
    <div className='info2'> 
    <span>Role</span>
    </div>
    <div className='InfoFromUser'>
        <span></span>
    </div>
</div>



</div>

    </div>
    );
}
 
export default Admin;