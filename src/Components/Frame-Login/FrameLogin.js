import '../Frame-Register/Frame-Register.css'
import divcha from '../Frame-Register/devchallenges.png'
import Login from './Login/Login';

const FrameLogin = () => {
    return (
    <div className="MainPanel">
        
        <div className='Rows'>

        <div className='Row-1P'>
        <img src={divcha} className='devchallanges' alt=''></img>  <span>devchallanges</span>
       </div>

       <div className='Row-2P'>
       <Login/>

        </div>
        
        </div>
       
        

    </div>
    );
}
 
export default FrameLogin;