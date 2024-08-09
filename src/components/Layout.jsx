import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './AppRouter';
import AppBar from './AppBar';
import SideBar from './SideBar';

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <Router>
            <main>
                <AppBar openMenu= {openMenu} setOpenMenu= {setOpenMenu}/>
                <section className='layout__grid__container'>
                    {
                        !openMenu && <SideBar openMenu= {openMenu} setOpenMenu= {setOpenMenu} />
                    }
                    <div className="mob__hide">
                        <SideBar openMenu= {openMenu} setOpenMenu= {setOpenMenu} />
                    </div>
                    <AppRouter  />
                </section>
            </main>
        </Router>
    )
}

export default Layout