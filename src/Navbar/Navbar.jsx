import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import SignUp from './Contact/SignUp';
import ErrorPage from './ErrorPage';
import Gallery from './Gallery/Gallery';
import Index from './Home/Index';
import Menu from './Home/Menu';
import SampleQuesPaper from './Work/SampleQuesPaper';
import Work from './Work/Work';
import Protected from './Protected';




const Navbar = () => {
    return (
    <>
    <Menu/>
        <Routes>
            <Route index path='/' element={<Protected Component={Index} />}/>
            <Route  path='/work' element={<Protected Component={Work} />}/>
            <Route index path='/gallery' element={<Protected Component={Gallery} />}/>
            <Route index path='/contact' element={<Contact/>}/>
            <Route index path='/signup' element={<SignUp/>}/>
            <Route index path='/work/:samplepaper' element={<Protected Component={SampleQuesPaper} />}/>
            <Route path='*' element={<ErrorPage/>} />
           
        </Routes>
    </>
    )
}
export default Navbar;