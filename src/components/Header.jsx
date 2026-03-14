import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu ,setmenu] =useState(false)
        const menutoggle =() => {
            setmenu(! menu)
        }
    return (
        <>
            <header style={{display : 'flex' , justifyContent : 'space-between' , alignItems :'center' , padding : '10px 50px'}}>
                <div>
                    <h1> Xyz Univercity</h1>
                </div>
                <nav>
                    <ul className={menu ? 'mobilemenu' : 'wbmenu'} >
                        <li>
                            <Link to='/home'> Home </Link>
                        </li>
                        <li>
                            <Link to='result'> Student Result </Link>
                        </li>
                        <li>
                            <Link to='admitcard'> Student Admit Card </Link>
                        </li>
                    </ul>
                     <button className='menubtn' onClick={menutoggle} >menu</button>
                </nav>
            </header>
        </>
    );
};

export default Header;