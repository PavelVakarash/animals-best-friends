import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar(): JSX.Element {
    const navigate = useNavigate();
    function handleWolfClick(): void {
        navigate('/wolf');
    }
    function handleCatClick(): void {
        navigate('/cat');
    }
    function handleDogClick(): void {
        navigate('/dog');
    }
    function handlePigClick(): void {
        navigate('/pig');
    }
    function handleHomeClick(): void {
        navigate('/');
    }

    return (
        <div className={style.navbar}>
            <button className={style.nav_button} type="button" onClick={handleHomeClick}>Living With Animals</button>
            <button className={style.nav_button} type="button" onClick={handleWolfClick}>Living With Wolves</button>
            <button className={style.nav_button} type="button" onClick={handleDogClick}>Living With Dogs</button>
            <button className={style.nav_button} type="button" onClick={handlePigClick}>Living With Pigs</button>
            <button className={style.nav_button} type="button" onClick={handleCatClick}>Living With Cats</button>
        </div>
    );
}

export default Navbar;
