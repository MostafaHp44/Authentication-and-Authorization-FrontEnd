import './Frame-Register.css'
import divcha from './devchallenges.png'
import Register from './Register/Regsiter';

const FrameRegister = () => {
    return (
    <div className="MainPanel">
        
        <div className='Rows'>

        <div className='Row-1P'>
        <img src={divcha} className='devchallanges' alt=''></img>  <span>devchallanges</span>
       </div>

       <div className='Row-2P'>
       <Register/>

        </div>
        
        </div>
       
        

    </div>
    );
}
 
export default FrameRegister;