import React from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { logout, selectUser } from '../featurs/userSlice';
import { useSelector } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(logout());
        //الي جوا ducer
    };

    return (
        <div className='logout'>
            <h1>WellCom <span className="user__name">{user.name}</span></h1>
            <button className='logout__button'
                onClick={(e) => handelSubmit(e)}
            >Logout</button>
        </div>
    )
}

export default Logout
