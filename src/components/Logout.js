import React from 'react';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../userSlice';
import { useSelector} from "react-redux";
import logoutcss  from './logout.css';


const Logout = () => {
const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    };

  return (
    <form className='logout subscribe-container '>
      <div className='cc'>
        <h1>
          Thank you <span className='user__name'>{user.name}</span>
        </h1>
        <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    </form>
  )
}

export default Logout