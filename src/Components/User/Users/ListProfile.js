import { UilUser,UilUsersAlt,UilSignout} from '@iconscout/react-unicons'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const ListProfile = () => {
    const navigate=useNavigate()
    let port =5000
    let apiulr=`http://localhost:${port}`

    const handellogout=async()=>{
        try{

          const response=  await axios.get(`${apiulr}/logout`)
            const { success, message } = response.data;
   
            if (success) 
            {
                localStorage.clear('auth')
                localStorage.clear('id')
                console.log(success);
                console.log(message);
                setTimeout(()=>{navigate('/login')},4000)
            } 
   
        }
        catch(err)
        {
            console.log(err);
        }
       
    }
    return ( 
    <div className='aboutuser'>
    <div className='row-1about' onClick={()=>{navigate('/user')}}><UilUser/><span>My Profile</span></div>
    <div className='row-2about'><UilUsersAlt/><span>Group Chat</span></div>
    <div className='row-3about' onClick={handellogout}><UilSignout/><span>Log out</span></div>
 </div>);
}
 
export default ListProfile;